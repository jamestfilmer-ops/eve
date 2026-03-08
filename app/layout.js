import './globals.css'
import Nav from './components/Nav'
import ConsentBanner from './components/ConsentBanner'
import Providers from './components/Providers'

export const metadata = {
  metadataBase: new URL('https://eve-screenwriting.vercel.app'),
  title: {
    default: 'Eve — Screenwriting Craft & Story Workspace',
    template: '%s | Eve',
  },
  description: 'The screenwriting craft platform for serious storytellers. Free lessons on structure, character, dialogue, and theme. Story workspace with all 7 major frameworks. No AI. Ever.',
  keywords: 'screenwriting, screenplay, story structure, save the cat, hero\'s journey, screenwriting lessons, screenwriting software, story workspace, script writing',
  authors: [{ name: 'Eve' }],
  creator: 'Eve',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://eve-screenwriting.vercel.app',
    siteName: 'Eve',
    title: 'Eve — Screenwriting Craft & Story Workspace',
    description: 'Free screenwriting lessons. Professional story tools. No AI.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Eve — Screenwriting Craft' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eve — Screenwriting Craft & Story Workspace',
    description: 'Free screenwriting lessons. Professional story tools. No AI.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Nav />
          <main>{children}</main>
          <ConsentBanner />
        </Providers>

        <script dangerouslySetInnerHTML={{ __html: `
(function() {
  function initReveal() {
    var els = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-scale, .section-fade'
    );
    if (!els.length) return;
    var io = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.10, rootMargin: '0px 0px -48px 0px' });
    els.forEach(function(el) { io.observe(el); });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReveal);
  } else {
    initReveal();
  }
  var _push = history.pushState;
  history.pushState = function() {
    _push.apply(history, arguments);
    setTimeout(initReveal, 80);
  };
})();
        ` }} />
      </body>
    </html>
  )
}
