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

        {/* Global scroll-reveal observer — handles .reveal, .reveal-left, .reveal-scale, .section-fade */}
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