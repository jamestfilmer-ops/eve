import './globals.css'
import Nav from './components/Nav'
import ConsentBanner from './components/ConsentBanner'

export const metadata = {
  title: 'Eve — Your Story Workspace',
  description: 'Organize, build, and develop your stories from first idea to final draft.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </head>
      <body>
        <Nav />
        <main style={{ minHeight: '100vh', paddingTop: '64px' }}>
          {children}
        </main>
        <ConsentBanner />
      </body>
    </html>
  )
}