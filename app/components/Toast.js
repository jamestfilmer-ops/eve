'use client'
import { createContext, useContext, useState, useCallback, useRef } from 'react'

const ToastContext = createContext(null)

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])
  const counter = useRef(0)

  // dismiss defined FIRST so addToast can reference it
  const dismiss = useCallback((id) => {
    setToasts(prev => prev.map(t => t.id === id ? { ...t, leaving: true } : t))
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 320)
  }, [])

  const addToast = useCallback(({ message, type = 'info', duration = 3800 }) => {
    const id = ++counter.current
    setToasts(prev => [...prev, { id, message, type, leaving: false }])
    if (duration > 0) setTimeout(() => dismiss(id), duration)
    return id
  }, [dismiss])

  const toast = {
    success: (message, opts) => addToast({ message, type: 'success', ...opts }),
    error:   (message, opts) => addToast({ message, type: 'error',   ...opts }),
    info:    (message, opts) => addToast({ message, type: 'info',    ...opts }),
    warning: (message, opts) => addToast({ message, type: 'warning', ...opts }),
    dismiss,
  }

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <ToastContainer toasts={toasts} onDismiss={dismiss} />
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used inside <ToastProvider>')
  return ctx
}

function IconSuccess() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" fill="rgba(45,80,22,0.15)" stroke="#4A8C8C" strokeWidth="1.25"/>
      <path d="M5 8l2 2 4-4" stroke="#4A8C8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
function IconError() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" fill="rgba(159,18,57,0.12)" stroke="#9F1239" strokeWidth="1.25"/>
      <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="#9F1239" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}
function IconWarning() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" fill="rgba(181,112,10,0.12)" stroke="#8BA5A0" strokeWidth="1.25"/>
      <path d="M8 5v4" stroke="#8BA5A0" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="8" cy="11" r="0.75" fill="#8BA5A0"/>
    </svg>
  )
}
function IconInfo() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" fill="rgba(29,78,216,0.10)" stroke="#1D4ED8" strokeWidth="1.25"/>
      <path d="M8 7.5v4" stroke="#1D4ED8" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="8" cy="5.5" r="0.75" fill="#1D4ED8"/>
    </svg>
  )
}
function IconClose() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3.5 3.5l7 7M10.5 3.5l-7 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  )
}

const variants = {
  success: { border: '#9ECECE', accent: '#4A8C8C', iconComp: IconSuccess },
  error:   { border: '#FECDD3', accent: '#9F1239', iconComp: IconError   },
  warning: { border: '#F5C57A', accent: '#8BA5A0', iconComp: IconWarning },
  info:    { border: '#BFDBFE', accent: '#1D4ED8', iconComp: IconInfo    },
}

function ToastContainer({ toasts, onDismiss }) {
  if (!toasts.length) return null
  return (
    <>
      <div style={{
        position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999,
        display: 'flex', flexDirection: 'column', gap: '10px',
        alignItems: 'flex-end', pointerEvents: 'none',
      }}>
        {toasts.map(t => <ToastItem key={t.id} toast={t} onDismiss={onDismiss} />)}
      </div>
      <style>{`
        @keyframes toastIn  { from { opacity: 0; transform: translateY(12px) scale(0.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes toastOut { from { opacity: 1; transform: translateY(0) scale(1); } to { opacity: 0; transform: translateY(8px) scale(0.95); } }
      `}</style>
    </>
  )
}

function ToastItem({ toast, onDismiss }) {
  const v = variants[toast.type] || variants.info
  const Icon = v.iconComp
  return (
    <div style={{
      pointerEvents: 'all',
      background: '#fff',
      border: `1px solid ${v.border}`,
      borderLeft: `3px solid ${v.accent}`,
      borderRadius: '12px',
      boxShadow: '0 4px 16px rgba(26,20,15,0.10), 0 1px 4px rgba(26,20,15,0.07)',
      padding: '12px 14px',
      display: 'flex', alignItems: 'flex-start', gap: '10px',
      minWidth: '260px', maxWidth: '380px',
      animation: toast.leaving
        ? 'toastOut 0.28s cubic-bezier(0.22,1,0.36,1) both'
        : 'toastIn 0.32s cubic-bezier(0.22,1,0.36,1) both',
    }}>
      <div style={{ flexShrink: 0, marginTop: '1px' }}><Icon /></div>
      <p style={{ flex: 1, fontSize: '14px', lineHeight: '1.55', color: '#1B3A4B', margin: 0, fontFamily: 'var(--font-ui, DM Sans, system-ui, sans-serif)' }}>
        {toast.message}
      </p>
      <button
        onClick={() => onDismiss(toast.id)}
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '1px', color: '#7A9099', flexShrink: 0, display: 'flex', alignItems: 'center', borderRadius: '4px', transition: 'color 0.15s' }}
        onMouseEnter={e => e.currentTarget.style.color = '#1B3A4B'}
        onMouseLeave={e => e.currentTarget.style.color = '#7A9099'}
        aria-label="Dismiss"
      >
        <IconClose />
      </button>
    </div>
  )
}