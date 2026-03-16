export const metadata = {
  title: 'Privacy Policy —Eve',
  description: 'Privacy Policy for Eve, the story workspace for writers.',
}

export default function PrivacyPage() {
  return (
    <div style={{ background: 'var(--white)', minHeight: '100vh', paddingTop: '64px' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '64px 24px 96px' }}>

        <div style={{ marginBottom: '48px' }}>
          <span className="badge" style={{ marginBottom: '16px', display: 'inline-block' }}>Legal</span>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: '700',
            color: 'var(--green)',
            lineHeight: '1.2',
            marginBottom: '16px',
          }}>Privacy Policy</h1>
          <p style={{ fontSize: '14px', color: 'var(--text-soft)' }}>
            Last updated: March 2026
          </p>
        </div>

        <div className="tip-box" style={{ marginBottom: '40px' }}>
          <strong>The short version:</strong> Your story content belongs to you. We store only what we need to run the service. We never sell your data or use your writing to train AI models. Ever.
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

          <section>
            <h2 style={h2}>1. What We Collect</h2>
            <p style={p}>We collect the minimum necessary to provide the Service:</p>
            <ul style={ul}>
              <li style={li}><strong>Account data:</strong> Your email address and display name when you create an account.</li>
              <li style={li}><strong>Story content:</strong> Projects, scenes, characters, ideas, and notes you create inside Eve. This is stored securely in our database and is only accessible by you.</li>
              <li style={li}><strong>Usage data:</strong> Aggregate, anonymized data about feature usage (e.g., how many sessions are started) to help us improve the product. This is never tied to your identity.</li>
              <li style={li}><strong>Payment data:</strong> If you subscribe to Eve Pro, payment is processed by Stripe. We never store your card details —Stripe handles all payment data under their own privacy policy.</li>
            </ul>
          </section>

          <section>
            <h2 style={h2}>2. What We Never Do</h2>
            <ul style={ul}>
              <li style={li}>We never sell your personal data to third parties.</li>
              <li style={li}>We never use your story content to train AI models.</li>
              <li style={li}>We never show you targeted advertising.</li>
              <li style={li}>We never share your content with other users without your explicit action.</li>
            </ul>
          </section>

          <section>
            <h2 style={h2}>3. How We Use Your Data</h2>
            <p style={p}>Your data is used exclusively to:</p>
            <ul style={ul}>
              <li style={li}>Provide and maintain the Eve service.</li>
              <li style={li}>Send account-related emails (confirmation, password reset, billing).</li>
              <li style={li}>Respond to your support requests.</li>
              <li style={li}>Improve the product using anonymized, aggregate usage patterns.</li>
            </ul>
          </section>

          <section>
            <h2 style={h2}>4. Data Storage and Security</h2>
            <p style={p}>Your data is stored using Supabase, a secure cloud database provider. All data is encrypted in transit (TLS) and at rest. We use industry-standard security practices and conduct regular access reviews.</p>
          </section>

          <section>
            <h2 style={h2}>5. Cookies</h2>
            <p style={p}>Eve uses a small number of cookies strictly necessary to keep you signed in and remember your preferences. We do not use advertising or tracking cookies. You can dismiss our cookie notice once, and it will not appear again.</p>
          </section>

          <section>
            <h2 style={h2}>6. Your Rights</h2>
            <p style={p}>You have the right to:</p>
            <ul style={ul}>
              <li style={li}><strong>Access:</strong> Request a copy of all data we hold about you.</li>
              <li style={li}><strong>Deletion:</strong> Delete your account and all associated content at any time from your profile settings.</li>
              <li style={li}><strong>Export:</strong> Request an export of your story data in a portable format.</li>
              <li style={li}><strong>Correction:</strong> Update your account information at any time.</li>
            </ul>
            <p style={{ ...p, marginTop: '12px' }}>To exercise any of these rights, contact us at the address below.</p>
          </section>

          <section>
            <h2 style={h2}>7. Data Retention</h2>
            <p style={p}>We retain your data for as long as your account is active. If you delete your account, your personal data and story content are permanently removed within 30 days.</p>
          </section>

          <section>
            <h2 style={h2}>8. Children's Privacy</h2>
            <p style={p}>Eve is not intended for users under 13 years of age. We do not knowingly collect data from children. If we become aware that a user is under 13, we will delete their account promptly.</p>
          </section>

          <section>
            <h2 style={h2}>9. Changes to This Policy</h2>
            <p style={p}>We will notify you by email at least 14 days before any material changes to this Privacy Policy take effect.</p>
          </section>

          <section>
            <h2 style={h2}>10. Contact</h2>
            <p style={p}>Privacy questions or data requests: <a href="mailto:hello@eve-screenwriting.vercel.app" style={{ color: 'var(--green)', textDecoration: 'none', fontWeight: '600' }}>hello@eve-screenwriting.vercel.app</a></p>
          </section>

        </div>

        <div style={{
          marginTop: '56px',
          paddingTop: '32px',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          gap: '24px',
          fontSize: '14px',
        }}>
          <a href="/terms" style={{ color: 'var(--green)', textDecoration: 'none', fontWeight: '600' }}>Terms of Service</a>
          <a href="/" style={{ color: 'var(--text-soft)', textDecoration: 'none' }}>Back to Eve</a>
        </div>

      </div>
    </div>
  )
}

const h2 = {
  fontFamily: 'Playfair Display, serif',
  fontSize: '18px',
  fontWeight: '700',
  color: 'var(--green)',
  marginBottom: '10px',
}

const p = {
  fontSize: '15px',
  color: 'var(--text-mid)',
  lineHeight: '1.8',
}

const ul = {
  paddingLeft: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  marginTop: '10px',
}

const li = {
  fontSize: '15px',
  color: 'var(--text-mid)',
  lineHeight: '1.7',
}