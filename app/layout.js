import './globals.css'
import Nav from './components/Nav'
import ConsentBanner from './components/ConsentBanner'
import Providers from './components/Providers'

export const metadata = {
  metadataBase: new URL('https://eve-screenwriting.vercel.app'),
  title: {
    default: 'Eve —Screenwriting & Story Craft Platform',
    template: '%s | Eve',
  },
  description: "Free screenwriting lessons, novel writing guides, and story structure frameworks for writers who could not afford film school. Covers Save the Cat, Hero's Journey, three-act structure, character arc, dialogue, theme, and more. No AI. Built by writers.",
  keywords: [
    'screenwriting lessons free', 'how to write a screenplay', 'story structure', 'save the cat beats',
    'hero\'s journey steps', 'three act structure', 'character arc', 'dialogue subtext', 'theme in storytelling',
    'how to write a novel', 'novel structure', 'point of view fiction', 'literary agent query letter',
    'how to get published', 'screenwriting software free', 'story workspace', 'screenplay format',
    'fichtean curve', 'kishōtenketsu', 'sequence approach screenwriting', 'story circle dan harmon',
    'how to outline a novel', 'plot holes', 'character development', 'scene writing tips',
    'screenplay craft', 'film school alternative', 'screenwriting course free'
  ].join(', '),
  authors: [{ name: 'Eve' }],
  creator: 'Eve',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://eve-screenwriting.vercel.app',
    siteName: 'Eve',
    title: 'Eve —Screenwriting & Story Craft Platform',
    description: 'Free lessons on story structure, character, dialogue, and theme. Plus novel writing guides, frameworks, and a full project workspace. No AI. No fluff.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Eve —Screenwriting and Story Craft Platform' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eve —Screenwriting & Story Craft Platform',
    description: 'Free screenwriting lessons, novel guides, and story frameworks. No AI. Built for writers.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: {
    canonical: 'https://eve-screenwriting.vercel.app',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
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

        {/* JSON-LD structured data —WebSite + Organization + EducationalOrganization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": "https://eve-screenwriting.vercel.app/#website",
                "url": "https://eve-screenwriting.vercel.app",
                "name": "Eve",
                "description": "Free screenwriting lessons, novel writing guides, and story frameworks for serious storytellers.",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://eve-screenwriting.vercel.app/learn",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@type": ["Organization", "EducationalOrganization"],
                "@id": "https://eve-screenwriting.vercel.app/#organization",
                "name": "Eve",
                "url": "https://eve-screenwriting.vercel.app",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://eve-screenwriting.vercel.app/og-image.png"
                },
                "description": "Eve is a screenwriting and story craft platform offering free lessons on structure, character, dialogue, and theme for writers who could not afford film school.",
                "foundingDate": "2024",
                "knowsAbout": [
                  "Screenwriting", "Story Structure", "Novel Writing", "Save the Cat",
                  "Hero's Journey", "Three Act Structure", "Character Development",
                  "Dialogue Writing", "Theme", "Literary Fiction"
                ]
              }
            ]
          }) }}
        />

        <script dangerouslySetInnerHTML={{ __html: `
(function() {
  function initReveal() {
    var els = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-scale, .reveal-card, .section-fade'
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
