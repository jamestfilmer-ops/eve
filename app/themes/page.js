import { redirect } from 'next/navigation'

// Themes are managed inside projects — redirect to dashboard
export default function ThemesPage() {
  redirect('/dashboard')
}
