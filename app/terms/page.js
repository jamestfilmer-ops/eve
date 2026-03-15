export const metadata = {
  title: 'Terms of Service  -- Eve',
  description: 'Terms of Service for Eve, the story workspace for writers.',
}

export default function TermsPage() {
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
          }}>Terms of Service</h1>
          <p style={{ fontSize: '14px', color: 'var(--text-soft)' }}>
            Last updated: March 2026
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

          <section>
            <h2 style={h2}>1. Acceptance of Terms</h2>
            <p style={p}>By creating an account or using Eve ("the Service"), you agree to these Terms of Service. If you do not agree, do not use the Service. These terms apply to all users, including free and paid accounts.</p>
          </section>

          <section>
            <h2 style={h2}>2. What Eve Is</h2>
            <p style={p}>Eve is a story organization and development workspace for writers. It provides structural frameworks, scene organization, character tracking, and craft education tools. Eve does not generate written content on your behalf and contains no AI writing tools.</p>
          </section>

          <section>
            <h2 style={h2}>3. Your Account</h2>
            <p style={p}>You are responsible for maintaining the security of your account credentials. You must be at least 13 years old to use Eve. You may not share your account or use Eve for any unlawful purpose.</p>
          </section>

          <section>
            <h2 style={h2}>4. Your Content</h2>
            <p style={p}>You own everything you create in Eve  -- your stories, characters, scenes, and notes. We do not claim ownership of your creative work. You grant Eve a limited license to store and display your content solely for the purpose of providing the Service to you.</p>
            <p style={{ ...p, marginTop: '12px' }}>We will never use your story content to train AI models or share it with third parties without your explicit consent.</p>
          </section>

          <section>
            <h2 style={h2}>5. Paid Subscriptions</h2>
            <p style={p}>Eve offers a free tier and a paid Pro tier. Paid subscriptions are billed in advance on a monthly or annual basis. You may cancel at any time. Cancellation takes effect at the end of your current billing period.</p>
            <p style={{ ...p, marginTop: '12px' }}>Refund policy: If you are unsatisfied within 7 days of your first paid subscription, contact us for a full refund. After 7 days, no refunds are issued for partial periods.</p>
          </section>

          <section>
            <h2 style={h2}>6. Prohibited Use</h2>
            <p style={p}>You may not use Eve to: distribute malware, scrape or harvest data, impersonate other users, attempt to gain unauthorized access to any systems, or engage in any activity that violates applicable law.</p>
          </section>

          <section>
            <h2 style={h2}>7. Service Availability</h2>
            <p style={p}>We aim to keep Eve available at all times but cannot guarantee uninterrupted access. We may modify, suspend, or discontinue features with reasonable notice. We are not liable for any loss of data or access due to outages.</p>
          </section>

          <section>
            <h2 style={h2}>8. Limitation of Liability</h2>
            <p style={p}>Eve is provided "as is." To the maximum extent permitted by law, we disclaim all warranties. Our total liability to you for any claim arising from use of the Service shall not exceed the amount you paid us in the 12 months preceding the claim.</p>
          </section>

          <section>
            <h2 style={h2}>9. Changes to These Terms</h2>
            <p style={p}>We may update these Terms from time to time. We will notify you by email or in-app notice at least 14 days before material changes take effect. Continued use after that date constitutes acceptance.</p>
          </section>

          <section>
            <h2 style={h2}>10. Contact</h2>
            <p style={p}>Questions about these Terms? Contact us at <a href="mailto:hello@eve-screenwriting.vercel.app" style={{ color: 'var(--green)', textDecoration: 'none', fontWeight: '600' }}>hello@eve-screenwriting.vercel.app</a></p>
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
          <a href="/privacy" style={{ color: 'var(--green)', textDecoration: 'none', fontWeight: '600' }}>Privacy Policy</a>
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