import Link from 'next/link'
import PaywallBlur from '../../components/PaywallBlur'
import LessonProgress from '../../components/LessonProgress'

export const metadata = {
  title: 'Where to Publish Genre Fiction — Science Fiction, Fantasy, and Horror Markets | Eve',
  description: 'The top short fiction markets for science fiction, fantasy, and horror writers. SFWA-qualifying professional rates, semi-pro venues, and what each publication actually wants.',
}

export default function LessonGenreFictionMarkets() {
  const tiers = [
    {
      label: 'Pro markets — SFWA-qualifying',
      color: 'var(--green)',
      bg: 'var(--green-pale)',
      border: 'var(--green-border)',
      markets: [
        { name: 'Clarkesworld', url: 'https://clarkesworldmagazine.com/submissions/', pays: '12 cents/word', length: '1,000–22,000 words', note: 'Hugo Award-winning online magazine. The single most important market in science fiction right now. They read fast — responses within two weeks. Style skews literary and strange rather than pulp. Read a year of issues before submitting.' },
        { name: 'The Magazine of Fantasy & Science Fiction', url: 'https://www.sfsite.com/fsf/glines.htm', pays: '8–12 cents/word', length: 'Up to 25,000 words', note: 'Published continuously since 1949. One of the two oldest professional SF magazines still running. Accepts all subgenres. Slower to respond than online markets but significant career prestige. Takes longer, pays well.' },
        { name: 'Analog Science Fiction & Fact', url: 'https://www.analogsf.com/about/writers-guidelines/', pays: '8–10 cents/word', length: 'Up to 20,000 words', note: 'The hardest SF magazine — science that works matters here. Not the place for space opera that glosses the physics. If your story depends on something speculative, you need to have done the research. Long history of discovering major careers.' },
        { name: "Asimov's Science Fiction", url: 'https://www.asimovs.com/contact-us/writers-guidelines/', pays: '8–10 cents/word', length: 'Up to 20,000 words', note: 'Same publisher as Analog, different editorial philosophy. More character-driven and stylistically varied than Analog. Has published some of the most reprinted short fiction in the genre\'s history. Responds slowly but pays reliably.' },
        { name: 'Lightspeed Magazine', url: 'https://www.lightspeedmagazine.com/submissions/', pays: '8 cents/word', length: '1,500–7,500 words', note: 'Publishes science fiction and fantasy in equal measure. John Joseph Adams edits with a clear sense of what he wants: stories that earn their endings. Very widely read. Reprints notable fiction alongside originals.' },
        { name: 'Tor.com', url: 'https://www.tor.com/2009/07/28/tor-com-original-fiction/', pays: '25 cents/word', length: '1,500–17,500 words', note: 'Publishes novelettes and novellas as well as short stories. The highest-paying market in genre fiction by rate. Extremely selective — they publish a small number of pieces and commission much of what appears. Hard to break in cold but worth it.' },
      ],
    },
    {
      label: 'Strong genre markets — respected and widely read',
      color: '#1D4ED8',
      bg: '#EFF6FF',
      border: '#BFDBFE',
      markets: [
        { name: 'Strange Horizons', url: 'http://strangehorizons.com/submissions/', pays: '10 cents/word', length: 'Up to 10,000 words', note: 'Online weekly, free to read. One of the most important venues for speculative fiction that does not fit neatly into commercial genre. Interested in work from underrepresented voices and perspectives. Literary sensibility.' },
        { name: 'Beneath Ceaseless Skies', url: 'https://beneath-ceaseless-skies.com/submissions/', pays: '8 cents/word', length: '1,500–10,000 words (up to 40,000 for serials)', note: 'Literary adventure fantasy. Strong editorial voice — they publish secondary world fantasy that takes its world seriously. Not interested in portals or urban fantasy. If you write epic or secondary world fantasy, this is the market.' },
        { name: 'Apex Magazine', url: 'https://apex-magazine.com/submissions/', pays: '8 cents/word', length: '100–7,500 words', note: 'Dark SF, fantasy, and horror. Not interested in shock value alone — they want darkness that earns its weight. Publishes flash and longer work. One of the more reliably interesting markets in the genre.' },
        { name: 'Nightmare Magazine', url: 'https://www.nightterrormagazine.com/submissions/', pays: '8 cents/word', length: '1,500–7,500 words', note: 'Horror, edited by John Joseph Adams. Same high editorial standards as Lightspeed. Interested in psychological and literary horror as much as monster fiction. Reads fast.' },
        { name: 'Fantasy Magazine', url: 'https://www.fantasy-magazine.com/submissions/', pays: '8 cents/word', length: '1,000–7,500 words', note: 'Published quarterly. Covers all subgenres of fantasy. High editorial standard, not the place for first drafts. Part of the same family as Lightspeed and Nightmare.' },
      ],
    },
    {
      label: 'Semi-pro — building a record and learning the market',
      color: '#7C3AED',
      bg: '#F3E8FF',
      border: '#DDD6FE',
      markets: [
        { name: 'Podcastle', url: 'https://podcastle.org/submissions/', pays: '6 cents/word', length: '1,500–6,000 words (up to 17,500 for novelettes)', note: 'Audio fantasy fiction — stories are recorded and performed. Publication here means professional narration and significant reach. The audio format rewards stories with strong voice and dialogue. Part of the Escape Artists family.' },
        { name: 'Pseudopod', url: 'https://pseudopod.org/submissions/', pays: '6 cents/word', length: '2,000–6,000 words', note: 'Audio horror fiction, same family as Podcastle. One of the longest-running horror podcasts in the world. A credit here is meaningful in the horror community.' },
        { name: 'Cast of Wonders', url: 'https://castofwonders.org/submissions/', pays: '6 cents/word', length: '500–7,500 words', note: 'YA and middle grade speculative fiction, audio format. The most significant market for writers working in younger genre fiction. Editorial standards are high despite the semi-pro rate.' },
        { name: 'Fireside Fiction', url: 'https://firesidefiction.com/submissions', pays: 'Variable', length: '500–4,000 words', note: 'Strong emphasis on accessibility and diversity of voice. Not interested in fiction that punches down. Publishes flash and short fiction. Has a clear editorial identity — read several issues before submitting.' },
        { name: 'The Dark Magazine', url: 'https://thedarkmagazine.com/about/#submissions', pays: '4 cents/word', length: '2,000–6,000 words', note: 'Dark fantasy and horror. Monthly. Has published significant names in the genre. A credit here will not define a career but is a legitimate step. Read before submitting — they have specific taste.' },
      ],
    },
  ]

  const tips = [
    'SFWA (Science Fiction and Fantasy Writers of America) maintains a list of qualifying professional markets — currently set at 8 cents per word or higher. Publication in a qualifying market matters for award eligibility (Nebula, Hugo) and for the credibility of your submission record when querying agents.',
    'Genre short fiction has a functional submission economy that literary fiction largely does not: response times are short (two weeks to two months at most pro markets), payment is reliable, and the community is visible. Clarkesworld publishes its rejection reasons publicly. Use this data.',
    'Read the table of contents for the Nebula nominees and Hugo nominees each year. These are the stories the field considers its best recent work. Understanding what wins helps you understand what the field values.',
    'Simultaneous submissions are generally not accepted at professional genre markets. This is different from literary fiction. Check guidelines — submitting simultaneously where it is not permitted will get you blacklisted.',
    'The Submission Grinder tracks response times and acceptance rates for genre markets specifically. It is free and well-maintained by the genre community. Use it before submitting anywhere.',
    'A story that places in a respected pro market — even once — opens doors. One Clarkesworld credit changes how agents and anthology editors read your query. Volume of publication matters less than the quality of placement.',
  ]

  return (
    <div style={{ background: 'var(--off-white)', minHeight: '100vh' }}>
      <div style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '16px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/learn" style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-soft)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            All lessons
          </Link>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', background: 'var(--green-pale)', color: 'var(--green)', border: '1px solid var(--green-border)', padding: '3px 8px', borderRadius: '4px' }}>Short Fiction</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-soft)' }}>8 min</span>
            <LessonProgress slug="genre-fiction-markets" />
          </div>
        </div>
      </div>

      <section style={{ background: 'linear-gradient(160deg, #2D5016 0%, var(--green) 55%, #4a8a24 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '16px' }}>
            Where to publish genre fiction
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '560px' }}>
            The science fiction, fantasy, and horror markets that define the field. Professional rates, semi-pro venues, and what each publication actually wants.
          </p>
        </div>
      </section>

      <PaywallBlur>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '44px 24px 80px', fontFamily: 'var(--font-ui)' }}>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '28px' }}>
          Genre short fiction has a clearer economy than literary fiction. Pay rates are standardized, response times are short, and the field has established tiers that define what a publication credit is worth. The distinction that matters most is professional versus semi-professional: pro markets currently pay 8 cents per word or higher, which is the SFWA qualifying threshold. Publication in a pro market counts toward award eligibility and carries weight when querying agents.
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

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '16px' }}>Submission strategy for genre writers</h2>
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
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '8px' }}>Tools and resources</p>
          {[
            { name: 'The Submission Grinder', url: 'https://thegrinder.diabolicalplots.com/', note: 'Free. Tracks response times and acceptance rates for genre markets specifically. Better than Duotrope for SF/F/H.' },
            { name: 'SFWA Pro Markets List', url: 'https://www.sfwa.org/nebula-awards/nebula-awards-information/qualifying-pro-markets/', note: 'The official list of qualifying professional markets. Updated regularly.' },
            { name: 'Ralan.com', url: 'https://ralan.com/', note: 'Long-running market listing maintained by one person. Useful as a secondary check, especially for niche genre markets.' },
            { name: 'Locus Online', url: 'https://locusmag.com/', note: 'The newspaper of record for the SF/F field. Tracks industry news, sales, and awards. Essential for understanding the market.' },
          ].map((t, i) => (
            <div key={i} style={{ paddingBottom: '8px', marginBottom: '8px', borderBottom: i < 3 ? '1px solid var(--border)' : 'none' }}>
              <a href={t.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '13px', fontWeight: '700', color: 'var(--green)', textDecoration: 'none', fontFamily: 'var(--font-ui)' }}>{t.name} &rarr;</a>
              <p style={{ fontSize: '12px', color: 'var(--text-soft)', lineHeight: '1.5', margin: '2px 0 0', fontFamily: 'var(--font-ui)' }}>{t.note}</p>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
          <Link href="/learn/short-story-markets" style={{ fontSize: '13px', color: 'var(--green)', textDecoration: 'none' }}>
            &larr; Literary markets
          </Link>
          <Link href="/learn/how-to-write-a-cover-letter" style={{ fontSize: '13px', color: 'var(--green)', textDecoration: 'none' }}>
            Writing a cover letter &rarr;
          </Link>
        </div>
      </div>
      </PaywallBlur>
    </div>
  )
}
