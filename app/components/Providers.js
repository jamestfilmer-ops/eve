'use client'
import { useEffect } from 'react'
import { ToastProvider } from './Toast'
import { supabase } from '../../lib/supabase'

// Silently wake Supabase on first load so the DB isn't cold
// when the user actually tries to do something.
function SupabaseWakeup() {
  useEffect(() => {
    // Fire-and-forget — we don't care about the result, just waking the DB
    supabase.from('projects').select('id').limit(1).then(() => {})
  }, [])
  return null
}

export default function Providers({ children }) {
  return (
    <ToastProvider>
      <SupabaseWakeup />
      {children}
    </ToastProvider>
  )
}
