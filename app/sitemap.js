// app/sitemap.js — auto-generated from lib/lessons.js
// Covers every published lesson + all static pages

import { PUBLISHED_SLUGS } from '@/lib/lessons'

const BASE = 'https://eve-screenwriting.vercel.app'

const STATIC_PAGES = [
  { path: '',                     priority: 1.0,  changeFrequency: 'weekly' },
  { path: '/learn',               priority: 0.95, changeFrequency: 'weekly' },
  { path: '/for-beginners',       priority: 0.95, changeFrequency: 'monthly' },
  { path: '/frameworks',          priority: 0.9,  changeFrequency: 'monthly' },
  { path: '/road-to-hollywood',   priority: 0.9,  changeFrequency: 'monthly' },
  { path: '/road-to-publishing',  priority: 0.9,  changeFrequency: 'monthly' },
  { path: '/road-to-short-story', priority: 0.9,  changeFrequency: 'monthly' },
  { path: '/scripts',             priority: 0.85, changeFrequency: 'monthly' },
  { path: '/glossary',            priority: 0.85, changeFrequency: 'monthly' },
  { path: '/reading-list',        priority: 0.8,  changeFrequency: 'monthly' },
  { path: '/genres',              priority: 0.8,  changeFrequency: 'monthly' },
  { path: '/visual-craft',        priority: 0.8,  changeFrequency: 'monthly' },
  { path: '/themes',              priority: 0.8,  changeFrequency: 'monthly' },
  { path: '/learn/tracks',        priority: 0.8,  changeFrequency: 'monthly' },
  { path: '/pricing',             priority: 0.75, changeFrequency: 'monthly' },
  { path: '/about',               priority: 0.6,  changeFrequency: 'yearly' },
  { path: '/terms',               priority: 0.3,  changeFrequency: 'yearly' },
  { path: '/privacy',             priority: 0.3,  changeFrequency: 'yearly' },
]

export default function sitemap() {
  const now = new Date().toISOString()

  const staticEntries = STATIC_PAGES.map(p => ({
    url: `${BASE}${p.path}`,
    priority: p.priority,
    changeFrequency: p.changeFrequency,
    lastModified: now,
  }))

  const lessonEntries = PUBLISHED_SLUGS.map(slug => ({
    url: `${BASE}/learn/${slug}`,
    priority: 0.8,
    changeFrequency: 'monthly',
    lastModified: now,
  }))

  return [...staticEntries, ...lessonEntries]
}
