import { createClient } from '@supabase/supabase-js'
import Stripe from 'stripe'

export async function POST(req) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  try {
    const { userId } = await req.json()

    if (!userId) {
      return Response.json({ error: 'Missing userId' }, { status: 400 })
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    )

    const { data: profile } = await supabase
      .from('profiles')
      .select('stripe_customer_id')
      .eq('id', userId)
      .single()

    if (!profile?.stripe_customer_id) {
      return Response.json({ error: 'No billing account found' }, { status: 404 })
    }

    const session = await stripe.billingPortal.sessions.create({
      customer: profile.stripe_customer_id,
      return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/profile`,
    })

    return Response.json({ url: session.url })
  } catch (err) {
    console.error('Portal error:', err)
    return Response.json({ error: err.message }, { status: 500 })
  }
}
