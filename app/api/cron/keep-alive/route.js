// Vercel cron job — runs daily to keep Supabase project active
// Schedule defined in vercel.json
import { createClient } from '@supabase/supabase-js'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(request) {
  const authHeader = request.headers.get('authorization')
  if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )

    const { count, error } = await supabase
      .from('profiles')
      .select('*', { count: 'exact', head: true })

    if (error) throw error

    const now = new Date().toISOString()
    console.log(`[keep-alive] ${now} — Supabase ping OK, ${count ?? 0} profiles`)

    return Response.json({ ok: true, timestamp: now, profiles: count ?? 0 })
  } catch (err) {
    console.error('[keep-alive] failed:', err.message)
    return Response.json({ ok: false, error: err.message }, { status: 500 })
  }
}
