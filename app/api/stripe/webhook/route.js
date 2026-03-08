import { createClient } from '@supabase/supabase-js'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

// Map Stripe price IDs to plan names
function getPlanFromPriceId(priceId) {
  const map = {
    [process.env.STRIPE_PRICE_STUDIO_MONTHLY]: 'studio',
    [process.env.STRIPE_PRICE_STUDIO_ANNUAL]:  'studio',
    [process.env.STRIPE_PRICE_PRO_MONTHLY]:    'pro',
    [process.env.STRIPE_PRICE_PRO_ANNUAL]:     'pro',
  }
  return map[priceId] || 'free'
}

export async function POST(req) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')

  let event
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
  } catch (err) {
    console.error('Webhook signature failed:', err.message)
    return new Response(`Webhook Error: ${err.message}`, { status: 400 })
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )

  try {
    switch (event.type) {
      case 'customer.subscription.created':
      case 'customer.subscription.updated': {
        const sub = event.data.object
        const userId = sub.metadata?.supabase_user_id
        if (!userId) break

        const priceId = sub.items.data[0]?.price?.id
        const plan = getPlanFromPriceId(priceId)
        const status = sub.status // active, trialing, past_due, canceled

        await supabase
          .from('profiles')
          .update({
            plan: status === 'active' || status === 'trialing' ? plan : 'free',
            stripe_subscription_id: sub.id,
            stripe_subscription_status: status,
            plan_expires_at: new Date(sub.current_period_end * 1000).toISOString(),
          })
          .eq('id', userId)
        break
      }

      case 'customer.subscription.deleted': {
        const sub = event.data.object
        const userId = sub.metadata?.supabase_user_id
        if (!userId) break

        await supabase
          .from('profiles')
          .update({
            plan: 'free',
            stripe_subscription_id: null,
            stripe_subscription_status: 'canceled',
            plan_expires_at: null,
          })
          .eq('id', userId)
        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object
        const customerId = invoice.customer
        const { data: profile } = await supabase
          .from('profiles')
          .select('id')
          .eq('stripe_customer_id', customerId)
          .single()
        if (profile) {
          await supabase
            .from('profiles')
            .update({ stripe_subscription_status: 'past_due' })
            .eq('id', profile.id)
        }
        break
      }

      default:
        // Unhandled event type — ignore
        break
    }
  } catch (err) {
    console.error('Webhook handler error:', err)
    return new Response('Internal error', { status: 500 })
  }

  return new Response('OK', { status: 200 })
}
