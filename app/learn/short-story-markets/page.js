import Link from 'next/link'

export const metadata = {
  title: 'Where to Publish Short Stories—Literary Magazines & Markets | Eve',
  description: 'The top literary magazines accepting short fiction, from the Paris Review to Tin House. Submission guidelines, pay rates, and what each publication actually wants.',
}

export default function LessonShortStoryMarkets() {
  const tiers = [
    {
      label: 'Top tier—career-making',
      color: 'var(--green)',
      bg: 'var(--green-pale)',
      border: 'var(--green-border)',
      markets: [
        { name: 'The New Yorker', url: 'https://www.newyorker.com/contributors/fiction', pays: 'Pays well', length: 'Up to 7,000 words', note: 'The most competitive fiction market in the world. Reads unsolicited submissions. Style tends toward literary realism, but the range is wider than its reputation suggests.' },
        { name: 'Paris Review', url: 'https://theparisreview.org/submissions', pays: 'Pays', length: 'No strict limit', note: 'Founded in 1953. The interview series is famous but the fiction is excellent. They publish new writers alongside established ones.' },
        { name: 'Tin House', url: 'https://tinhouse.com/submissions/', pays: 'Pays', length: '5,000 words preferred', note: 'Influential literary magazine and publisher. Known for emotional immediacy and stylistic range. The Open Bar blog is worth reading to understand what they value.' },
        { name: 'Granta', url: 'https://granta.com/submissions/', pays: 'Pays', length: 'Varies', note: 'UK-based, international scope. Themed issues, strong on translated fiction and debut writers. A Granta publication carries significant weight.' },
        { name: 'The Sun', url: 'https://thesunmagazine.org/submissions', pays: 'Pays $300-$2,000', length: 'Up to 7,000 words', note: 'No advertising. Ad-free literary magazine that publishes work of unusual honesty and emotional directness. One of the few magazines that pays rates worth noting.' },
      ],
    },
    {
      label: 'Strong—respected and widely read',
      color: '#1D4ED8',
      bg: '#EFF6FF',
      border: '#BFDBFE',
      markets: [
        { name: 'One Story', url: 'https://www.one-story.com/submissions/', pays: 'Pays $500', length: '3,000-8,000 words', note: 'Each issue contains a single story. If they take your story, it gets the full attention of every subscriber. Acceptance rate around 1%.' },
        { name: 'American Short Fiction', url: 'https://americanshortfiction.org/submissions/', pays: 'Pays', length: '2,000-7,500 words', note: 'Austin-based. Has published Roxane Gay, Wells Tower, Karen Russell. Reads twice yearly. Strong track record of discovering new voices.' },
        { name: 'Ploughshares', url: 'https://ploughshares.org/about/submissions/', pays: 'Pays', length: '300-6,000 words', note: 'Guest editors from the literary world rotate each issue, which changes the character of each volume significantly. Research the current guest editor before submitting.' },
        { name: "McSweeney's Quarterly", url: 'https://store.mcsweeneys.net/pages/submissions', pays: 'Pays', length: 'Varies', note: 'Each issue has a different format and guest editor. Experimental, playful, willing to take risks. Not a market for conventional literary realism.' },
        { name: 'Zoetrope: All-Story', url: 'https://www.all-story.com/submissions.cgi', pays: 'Pays', length: 'Up to 7,000 words', note: "Francis Ford Coppola's literary magazine. Serious fiction from established and new writers. Less competitive than the New Yorker but significant." },
      ],
    },
    {
      label: 'Great for building a record',
      color: '#7C3AED',
      bg: '#F3E8FF',
      border: '#DDD6FE',
      markets: [
        { name: 'Kenyon Review', url: 'https://kenyonreview.org/submit/', pays: 'Pays', length: 'Up to 8,000 words', note: 'One of the oldest and most respected literary journals. Strong on formally ambitious fiction. Submissions open in the fall.' },
        { name: 'Missouri Review', url: 'https://www.missourireview.com/submissions/', pays: 'Pays', length: 'Up to 8,000 words', note: 'Runs the Jeffrey E. Smith Editors Prize annually. Strong reputation, good distribution. Takes longer to respond than many journals.' },
        { name: 'Glimmer Train', url: 'https://glimmertrain.com/bulletin/', pays: 'Pays $700+', length: 'Under 12,000 words', note: 'Note: Glimmer Train closed in 2019 but is referenced constantly in submission guides as it set the standard for paying markets. Check their archive for what they valued.' },
        { name: 'Gulf Coast', url: 'https://gulfcoastmag.org/submissions/', pays: 'Pays', length: 'Up to 7,000 words', note: 'University of Houston. Runs strong prize competitions. Reads from September through March. Solid track record of publishing debut work.' },
        { name: 'Southern Review', url: 'https://thesouthernreview.org/submissions', pays: 'Pays $30/page', length: 'Up to 8,000 words', note: 'Louisiana State University. One of the oldest literary journals still publishing. Pays per page which adds up. More traditional in aesthetic than some of the above.' },
      ],
    },
    {
      label: 'Online—fast responses, wide reach',
      color: '#065F46',
      bg: '#ECFDF5',
      border: '#A7F3D0',
      markets: [
        { name: 'Electric Literature', url: 'https://electricliterature.com/submit-to-recommended-reading/', pays: 'Pays $300', length: 'Under 7,000 words', note: 'Very widely read online literary publication. A single story in Electric Lit reaches more readers than many print journals. Fast turnaround.' },
        { name: 'Longreads', url: 'https://longreads.com/submissions/', pays: 'Pays', length: 'Flexible', note: 'Strong focus on narrative nonfiction but also publishes fiction. Very widely read. Useful for reaching readers outside the traditional literary fiction audience.' },
        { name: 'CRAFT Literary', url: 'https://www.craftliterary.com/submissions/', pays: 'Pays', length: 'Up to 5,000 words', note: 'Focused on craft excellence. Publishes the story alongside a craft essay about what makes it work—which means acceptance comes with pedagogical attention paid to your writing.' },
        { name: 'Narrative Magazine', url: 'https://www.narrativemagazine.com/submit', pays: 'Pays up to $4,000', length: 'Flexible', note: 'One of the highest-paying online literary markets. Runs frequent contests. Submission fee required but prize money is significant. Tends toward accessible literary fiction.' },
      ],
    },
  ]

  const tips = [
    'Read the magazine before submitting. Not the submission guidelines—the actual stories. If you cannot describe what the magazine values in a sentence, you are not ready to submit to it.',
    'Simultaneous submissions are now accepted by most markets. Send the same story to multiple places, withdraw immediately if accepted elsewhere, and notify politely.',
    'Response times range from two weeks to two years. Set a reminder. If a story has been out for six months with no response, it is acceptable to send a polite query.',
    'Rejections are not commentary on the story. Most form rejections tell you nothing. A personalized rejection with a note is worth treating as information.',
    'Track everything. Date submitted, market, response, version of the story. Submittable and Duotrope both help with this. The alternative is chaos.',
    'One story in a respected journal matters more than twenty stories in journals no one reads. Quality of placement is more important than volume for building a career.',
  ]

  return (
    <div style={{ background: 'var(--off-white)', minHeight: '100vh' }}>

      <div style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '16px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <a href="/learn" style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-soft)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            All lessons
          </a>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '4px', background: '#F5F0FF', color: '#7C3AED' }}>Short Story</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)' }}>6 min</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-soft)' }}>Intermediate</span>
          </div>
        </div>
      </div>

      <section style={{ background: 'linear-gradient(160deg, #1e3a0c 0%, var(--green) 55%, #3a6b1c 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '16px' }}>
            Where to Publish Short Stories
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '580px', margin: 0 }}>
            The top literary magazines accepting short fiction, from the Paris Review to Tin House. Submission guidelines, pay rates, and what each publication actually wants.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '44px 24px 80px' }}>
<div className="fade-up">
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '20px' }}>
          <span className="badge badge-green">Short Fiction</span>
          <span style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>6 min</span>
        </div>
        <h1 style={{ fontSize: 'clamp(26px, 4vw, 36px)', lineHeight: '1.2', marginBottom: '16px' }}>
          Where to publish short stories
        </h1>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          Getting a short story published in a respected literary magazine is how most fiction writers build a career before—or instead of—publishing a novel. The markets below are organized by tier, with direct submission links and notes on what each publication actually values.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        {tiers.map((tier, ti) => (
          <div key={ti} style={{ marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '4px', height: '20px', background: tier.color, borderRadius: '2px', flexShrink: 0 }} />
              <h2 style={{ fontSize: '15px', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.06em', color: tier.color, margin: 0 }}>{tier.label}</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {tier.markets.map((m, mi) => (
                <div key={mi} style={{ border: '1px solid var(--border)', borderRadius: '10px', overflow: 'hidden' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', background: tier.bg, borderBottom: '1px solid var(--border)', flexWrap: 'wrap', gap: '8px' }}>
                    <a href={m.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '700', color: tier.color, textDecoration: 'none' }}>
                      {m.name} &rarr;
                    </a>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: tier.color, background: 'rgba(255,255,255,0.6)', padding: '2px 8px', borderRadius: '4px', border: '1px solid ' + tier.border }}>{m.pays}</span>
                      <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-soft)', background: 'var(--off-white)', padding: '2px 8px', borderRadius: '4px', border: '1px solid var(--border)' }}>{m.length}</span>
                    </div>
                  </div>
                  <div style={{ padding: '12px 16px' }}>
                    <p style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.65', margin: 0, fontFamily: 'var(--font-ui)' }}>{m.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Submission strategy</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
          {tips.map((tip, i) => (
            <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'var(--green-pale)', border: '1px solid var(--green-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '700', color: 'var(--green)' }}>{i + 1}</span>
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.7', margin: 0, fontFamily: 'var(--font-ui)' }}>{tip}</p>
            </div>
          ))}
        </div>

        <div style={{ background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '10px', padding: '16px 20px', marginBottom: '28px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '8px' }}>Tools for tracking submissions</p>
          {[
            { name: 'Submittable', url: 'https://www.submittable.com/', note: 'The standard platform. Most journals use it for submission management.' },
            { name: 'Duotrope', url: 'https://duotrope.com/', note: 'Paid service ($5/mo) with response time data and acceptance rates across thousands of markets.' },
            { name: 'The Submission Grinder', url: 'https://thegrinder.diabolicalplots.com/', note: 'Free alternative to Duotrope. Less comprehensive but no cost.' },
          ].map((t, i) => (
            <div key={i} style={{ paddingBottom: '8px', marginBottom: '8px', borderBottom: i < 2 ? '1px solid var(--border)' : 'none' }}>
              <a href={t.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '13px', fontWeight: '700', color: 'var(--green)', textDecoration: 'none', fontFamily: 'var(--font-ui)' }}>{t.name} &rarr;</a>
              <p style={{ fontSize: '12px', color: 'var(--text-soft)', lineHeight: '1.5', margin: '2px 0 0', fontFamily: 'var(--font-ui)' }}>{t.note}</p>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
          <Link href="/learn/short-story-craft" style={{ fontSize: '13px', color: 'var(--green)', textDecoration: 'none' }}>
            &larr; Writing short stories
          </Link>
          <Link href="/road-to-publishing" style={{ fontSize: '13px', color: 'var(--green)', textDecoration: 'none' }}>
            Road to Publishing &rarr;
          </Link>
        </div>
      </div>
    </div>
    </div>
  )
}
