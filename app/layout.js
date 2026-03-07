import './globals.css'
import Nav from './components/Nav'
import ConsentBanner from './components/ConsentBanner'

export const metadata = {
  title: 'Eve — Write Better Stories',
  description: 'The structured writing tool for serious storytellers. No AI. Ever.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <ConsentBanner />
        {/* Global scroll-reveal observer */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            function initReveal() {
              var els = document.querySelectorAll('.reveal, .section-fade');
              if (!els.length) return;
              var io = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                  if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    io.unobserve(entry.target);
                  }
                });
              }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
              els.forEach(function(el) { io.observe(el); });
            }
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initReveal);
            } else {
              initReveal();
            }
            // Re-run on soft nav (Next.js)
            var _pushState = history.pushState;
            history.pushState = function() {
              _pushState.apply(history, arguments);
              setTimeout(initReveal, 100);
            };
          })();
        ` }} />
      </body>
    </html>
  )
}