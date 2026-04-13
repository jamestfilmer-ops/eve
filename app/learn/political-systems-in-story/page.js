import Link from 'next/link'

export const metadata = {
  title: 'Political Systems in Story | Eve',
  description: 'How political structure shapes character behavior, creates stakes, and generates conflict — without turning your script into a lecture.',
}

export default function PoliticalSystemsInStory() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)' }}>

      {/* Hero */}
      <div style={{ background: 'var(--green)', padding: '56px 24px 48px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <Link href="/learn" style={{ color: 'var(--green-pale)', fontSize: '13px', textDecoration: 'none', fontFamily: 'var(--font-ui)' }}>← Learn</Link>
            <span style={{ color: 'var(--green-pale)', opacity: 0.5, fontSize: '13px' }}>/</span>
            <Link href="/learn/world-building-foundations" style={{ color: 'var(--green-pale)', fontSize: '13px', textDecoration: 'none', fontFamily: 'var(--font-ui)', opacity: 0.8 }}>World-Building</Link>
          </div>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '18px', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '11px', padding: '3px 10px', borderRadius: '20px', fontFamily: 'var(--font-ui)', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>World-Building</span>
            <span style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '11px', padding: '3px 10px', borderRadius: '20px', fontFamily: 'var(--font-ui)', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Intermediate</span>
            <span style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '11px', padding: '3px 10px', borderRadius: '20px', fontFamily: 'var(--font-ui)', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>7 min</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 5vw, 42px)', color: '#fff', fontWeight: '700', lineHeight: '1.15', marginBottom: '16px' }}>
            Political Systems in Story
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: '1.65', fontFamily: 'var(--font-body)', maxWidth: '600px' }}>
            How political structure shapes character behavior, creates stakes, and generates conflict — without turning your script into a lecture.
          </p>
        </div>
      </div>

      {/* Body */}
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '48px 24px 80px' }}>

        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px', marginBottom: '24px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text)', marginBottom: '16px' }}>Politics is just the rules of the game</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)', marginBottom: '16px' }}>
            Strip away the ideology and the rhetoric, and politics comes down to a single question: who gets to decide what happens, and what happens to people who disagree? Every political system — democracy, monarchy, theocracy, corporate oligarchy — is just a different answer to that question. For a story writer, this matters because that answer determines what is at stake for your characters.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)' }}>
            In a monarchy, crossing the king means death or exile. In a democracy, it means losing votes or facing criminal charges. In a theocracy, it means heresy and social expulsion. The same act of defiance has completely different consequences depending on the system — and those consequences are your story&apos;s stakes. Define the political system and you define what failure costs.
          </p>
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px', marginBottom: '24px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text)', marginBottom: '16px' }}>Show the system through individuals</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)', marginBottom: '16px' }}>
            The most common mistake with political world-building is describing the system instead of showing it through people. A system is not interesting in the abstract. A tax collector who despises his job but cannot afford to quit — that is interesting. The political reality of the world is made concrete through the specific people who maintain it, benefit from it, suffer under it, or are trying to change it.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)', marginBottom: '16px' }}>
            <em>Parasite</em> never explains South Korean class dynamics in a monologue. It puts the Kim family inside the Park family&apos;s house and lets the architecture do the political work. The basement, the underground bunker, the rainstorm flooding the lower neighborhoods — the political system is rendered entirely through specific people in specific spaces.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)' }}>
            Ask yourself: which character in my world most directly embodies the political system&apos;s logic? Who benefits most from the way things are? Who has most completely internalized the system&apos;s values? That character is your world&apos;s political argument made flesh — and they are probably your best antagonist.
          </p>
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px', marginBottom: '24px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text)', marginBottom: '16px' }}>The political question behind every great story</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)', marginBottom: '16px' }}>
            Most great stories are secretly political — they are asking a question about how power should be organized and who it should serve. <em>1984</em> asks what happens when surveillance is total. <em>The Shawshank Redemption</em> asks whether institutional power can be survived with dignity intact. <em>Chinatown</em> asks what happens when power is so entrenched that justice is structurally impossible.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)', marginBottom: '16px' }}>
            You do not need to be writing explicit political drama for this to apply to your work. Even a romantic comedy is making political assumptions about gender and power. Even a heist movie has something to say about who owns what and why. The question is whether you are making those assumptions deliberately or accidentally — because the audience will feel them either way.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)' }}>
            Identify the political question your story is implicitly asking. Then design your world&apos;s political system to make that question as sharp and unavoidable as possible.
          </p>
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px', marginBottom: '24px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text)', marginBottom: '16px' }}>Who enforces and who is exempt</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)', marginBottom: '16px' }}>
            Every political system has two layers: the official rules, and the actual rules. The official rules are posted. The actual rules are understood. Figuring out the gap between these two layers is one of the most productive things you can do as a world-builder, because that gap is where corruption lives, where your morally compromised characters operate, and where your protagonist will eventually have to choose sides.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)' }}>
            In <em>The Godfather</em>, the official rules are American law. The actual rules are the Corleone family&apos;s power structure. Michael Corleone&apos;s arc is the story of a man learning that the gap between those two layers is not a corruption of the system — it is the system. Designing that gap deliberately in your world will give you your story&apos;s moral core.
          </p>
        </div>

        {/* Try This */}
        <div style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderRadius: '12px', padding: '28px', marginBottom: '24px' }}>
          <div style={{ fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '12px', color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Try This</div>
          <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text)', fontFamily: 'var(--font-body)', margin: 0 }}>
            Write two rules that govern your world — one official (what the law or custom says), one actual (what people who know the system understand to be true). Then put your protagonist in a situation where following the official rule means violating the actual one. What do they choose, and who finds out?
          </p>
        </div>

        {/* Nav */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/building-factions" style={{ fontSize: '14px', color: 'var(--text-soft)', textDecoration: 'none', fontFamily: 'var(--font-ui)' }}>← Building Factions</Link>
          <Link href="/learn/world-geography-and-location" style={{ fontSize: '14px', color: 'var(--green)', textDecoration: 'none', fontFamily: 'var(--font-ui)', fontWeight: '600' }}>Next: Geography and Location →</Link>
        </div>
      </div>
    </main>
  )
}
