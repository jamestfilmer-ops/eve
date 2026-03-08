import { createClient } from '@supabase/supabase-js'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const PRICES = {
  studio_monthly:  process.env.STRIPE_PRICE_STUDIO_MONTHLY,
  studio_annual:   process.env.STRIPE_PRICE_STUDIO_ANNUAL,
  pro_monthly:     process.env.STRIPE_PRICE_PRO_MONTHLY,
  pro_annual:      process.env.STRIPE_PRICE_PRO_ANNUAL,
}

export async function POST(req) {
  try {
    const { priceKey, userId, email, billing } = await req.json()

    if (!priceKey || !userId || !email) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const priceId = PRICES[priceKey]
    if (!priceId) {
      return Response.json({ error: `Unknown price key: ${priceKey}` }, { status: 400 })
    }

    // Look up or create Stripe customer
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    )

    const { data: profile } = await supabase
      .from('profiles')
      .select('stripe_customer_id')
      .eq('id', userId)
      .single()

    let customerId = profile?.stripe_customer_id

    if (!customerId) {
      const customer = await stripe.customers.create({
        email,
        metadata: { supabase_user_id: userId },
      })
      customerId = customer.id

      await supabase
        .from('profiles')
        .update({ stripe_customer_id: customerId })
        .eq('id', userId)
    }

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard?upgraded=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/pricing`,
      allow_promotion_codes: true,
      subscription_data: {
        metadata: { supabase_user_id: userId },
      },
    })

    return Response.json({ url: session.url })
  } catch (err) {
    console.error('Stripe checkout error:', err)
    return Response.json({ error: err.message }, { status: 500 })
  }
}
