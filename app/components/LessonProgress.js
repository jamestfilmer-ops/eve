'use client'
import { useState, useEffect } from 'react'

const STORAGE_KEY = 'eve_read_lessons'

function getRead() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  } catch { return [] }
}

function setRead(slugs) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(slugs))
  } catch {}
}

export default function LessonProgress({ slug }) {
  const [read, setReadState] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setReadState(getRead().includes(slug))
  }, [slug])

  function toggle() {
    const current = getRead()
    const next = current.includes(slug)
      ? current.filter(s => s !== slug)
      : [...current, slug]
    setRead(next)
    setReadState(next.includes(slug))
  }

  if (!mounted) return null

  return (
    <button
      onClick={toggle}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '7px',
        padding: '7px 14px',
        borderRadius: '20px',
        border: read ? '1.5px solid var(--green)' : '1.5px solid var(--border)',
        background: read ? 'var(--green-pale)' : 'transparent',
        cursor: 'pointer',
        fontFamily: 'var(--font-ui)',
        fontSize: '12px',
        fontWeight: '600',
        color: read ? 'var(--green)' : 'var(--text-soft)',
        transition: 'all 0.15s ease',
        letterSpacing: '0.01em',
      }}
      onMouseEnter={e => {
        if (!read) {
          e.currentTarget.style.borderColor = 'var(--green-border)'
          e.currentTarget.style.color = 'var(--green)'
        }
      }}
      onMouseLeave={e => {
        if (!read) {
          e.currentTarget.style.borderColor = 'var(--border)'
          e.currentTarget.style.color = 'var(--text-soft)'
        }
      }}
    >
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
        {read ? (
          <path d="M2 6.5l3 3 6-6" stroke="var(--green)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        ) : (
          <circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" strokeWidth="1.4"/>
        )}
      </svg>
      {read ? 'Marked as read' : 'Mark as read'}
    </button>
  )
}

// Hook for the learn index page to read all progress
export function useLessonProgress() {
  const [readSlugs, setReadSlugs] = useState([])
  useEffect(() => {
    setReadSlugs(getRead())
  }, [])
  return readSlugs
}
