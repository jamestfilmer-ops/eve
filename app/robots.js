// app/robots.js — tells Google exactly what to crawl
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard', '/session', '/profile', '/api/'],
      },
    ],
    sitemap: 'https://eve-screenwriting.vercel.app/sitemap.xml',
    host: 'https://eve-screenwriting.vercel.app',
  }
}
