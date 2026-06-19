import { createClient } from '@supabase/supabase-js'
import Stripe from 'stripe'

async function getAuthUser(request) {
  const token = request.headers.get('authorization')?.split('Bearer ')[1]
  if (!token) return null
  const { data: { user } } = await createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ).auth.getUser(token)
  return user ?? null
}

export async function POST(req) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  try {
    // ── Auth: derive userId from verified session, never from body ──
    const user = await getAuthUser(req)
    if (!user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const userId = user.id

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
