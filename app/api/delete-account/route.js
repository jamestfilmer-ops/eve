import { createClient } from '@supabase/supabase-js'

async function getAuthUser(request) {
  const token = request.headers.get('authorization')?.split('Bearer ')[1]
  if (!token) return null
  const { data: { user } } = await createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ).auth.getUser(token)
  return user ?? null
}

export async function DELETE(request) {
  try {
    const user = await getAuthUser(request)
    if (!user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const userId = user.id

    // Service-role client to delete all user data in order (foreign keys)
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    )

    // Delete in dependency order
    // 1. Get all projects first
    const { data: projects } = await supabase
      .from('projects')
      .select('id')
      .eq('user_id', userId)

    const projectIds = (projects || []).map(p => p.id)

    if (projectIds.length > 0) {
      // 2. Delete child records
      await Promise.all([
        supabase.from('scenes').delete().in('project_id', projectIds),
        supabase.from('characters').delete().in('project_id', projectIds),
        supabase.from('plot_holes').delete().in('project_id', projectIds),
        supabase.from('themes').delete().in('project_id', projectIds),
        supabase.from('session_beats').delete().in('project_id', projectIds),
      ])
      // 3. Delete projects
      await supabase.from('projects').delete().eq('user_id', userId)
    }

    // 4. Delete ideas and profile
    await supabase.from('ideas').delete().eq('user_id', userId)
    await supabase.from('profiles').delete().eq('id', userId)

    // 5. Delete the auth user itself (irreversible)
    const { error: authError } = await supabase.auth.admin.deleteUser(userId)
    if (authError) {
      console.error('Auth user deletion error:', authError)
      return Response.json({ error: 'Failed to remove auth account' }, { status: 500 })
    }

    return Response.json({ ok: true })
  } catch (err) {
    console.error('Delete account error:', err)
    return Response.json({ error: err.message }, { status: 500 })
  }
}
