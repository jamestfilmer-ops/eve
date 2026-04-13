import Link from 'next/link'

export const metadata = {
  title: 'Language and Culture | Eve',
  description: 'How dialect, naming, taboo, and cultural logic make a world feel inhabited — and how to build all of it without writing a textbook.',
}

export default function LanguageAndCulture() {
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
            Language and Culture
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: '1.65', fontFamily: 'var(--font-body)', maxWidth: '600px' }}>
            How dialect, naming, taboo, and cultural logic make a world feel inhabited — and how to build all of it without writing a textbook.
          </p>
        </div>
      </div>

      {/* Body */}
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '48px 24px 80px' }}>

        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px', marginBottom: '24px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text)', marginBottom: '16px' }}>You do not need a constructed language</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)', marginBottom: '16px' }}>
            Tolkien invented complete languages for his world — functional grammars, phonological systems, etymology. It is one of the great intellectual achievements in literary history, and it is completely unnecessary for writing a good screenplay. You do not need to invent a language. You need to make the language your characters speak feel like it belongs to a real place and a real history.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)' }}>
            The useful linguistic tools for a screenwriter are far simpler: consistent naming patterns, recognizable idiom, dialect logic, and the way people avoid saying what they mean. These tools do not require linguistic expertise. They require careful observation of how real people in real cultures actually talk — and then the imagination to apply that observation to a world you have invented.
          </p>
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px', marginBottom: '24px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text)', marginBottom: '16px' }}>Naming as world signal</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)', marginBottom: '16px' }}>
            The names in your world do more linguistic work than almost anything else. A name carries origin, class, religion, ethnicity, generation, and aspiration simultaneously. When a parent names a child, they are making a statement about what they value and who they want the child to become. When a society develops naming conventions, it is encoding its values into the most personal act a human can perform.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)', marginBottom: '16px' }}>
            The naming system of <em>Dune</em> is a masterclass in this. Fremen names are guttural, consonant-heavy, drawn from corrupted Arabic. House Atreides names reference Greek antiquity. Harkonnen names are Slavic and harsh. Each naming system tells you something about the culture&apos;s origins and values before a single line of dialogue is spoken.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)' }}>
            You do not need to build three complete naming systems. You need one or two consistent rules: perhaps names in the lower class have fewer syllables; perhaps the ruling class takes names from an extinct religion; perhaps names of the old regime are now forbidden. One rule, consistently applied, will give your world linguistic texture without requiring a dictionary.
          </p>
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px', marginBottom: '24px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text)', marginBottom: '16px' }}>Taboo as cultural X-ray</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)', marginBottom: '16px' }}>
            What a culture forbids tells you more about its values than what it permits. Taboo is the cultural X-ray — it reveals the skeleton of belief beneath the skin of behavior. What can people not say? What topics can they not raise? What acts are so transgressive that they are punished not just legally but socially — with exile, with silence, with the collective withdrawal of belonging?
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)', marginBottom: '16px' }}>
            In Gilead, women cannot read. That single taboo tells you more about the ideology of the state than a hundred pages of political documentation. In <em>Arrival</em>, the aliens communicate non-linearly — their language does not distinguish between past and future, and this is not just a linguistic fact but a philosophical one. The taboo against linear thinking encodes the entire worldview of the heptapods.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)' }}>
            For your world: identify one thing that is culturally forbidden that reveals something true and specific about the society&apos;s fear. Then ask: what happens when your protagonist does it, even accidentally?
          </p>
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px', marginBottom: '24px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text)', marginBottom: '16px' }}>Quirks, rituals, and the particular strange detail</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)', marginBottom: '16px' }}>
            Culture is not just rules and prohibitions. It is the thousand small, particular, half-remembered habits that people follow without thinking — the way you greet someone, the thing you say before eating, the gesture that means disrespect, the object you leave on a grave. These details are not necessary for story logic. They are necessary for story texture, for the feeling that the world you have made has been lived in for generations.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)' }}>
            The best quirks are ones that seem arbitrary on the surface but have a logical root in the world&apos;s history. The people of the desert cover their eyes when entering a home — because in the old nomad days, looking directly around a stranger&apos;s shelter was considered reconnaissance for a raid. The gesture survived the history that produced it. That is how real culture works, and when you build that logic into your quirks, the audience senses the depth even if they never learn the explanation.
          </p>
        </div>

        {/* Try This */}
        <div style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderRadius: '12px', padding: '28px', marginBottom: '24px' }}>
          <div style={{ fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '12px', color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Try This</div>
          <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text)', fontFamily: 'var(--font-body)', margin: 0 }}>
            Invent one greeting ritual for a culture in your world. Not just &ldquo;they bow&rdquo; — something specific, with rules about when it applies and when it does not. Then write a scene in which your protagonist performs the ritual incorrectly, or refuses to perform it, and faces a social consequence. What did the mistake reveal about the protagonist, and what did the society&apos;s reaction reveal about the culture?
          </p>
        </div>

        {/* Nav */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/world-geography-and-location" style={{ fontSize: '14px', color: 'var(--text-soft)', textDecoration: 'none', fontFamily: 'var(--font-ui)' }}>← Geography and Location</Link>
          <Link href="/learn/the-world-bible" style={{ fontSize: '14px', color: 'var(--green)', textDecoration: 'none', fontFamily: 'var(--font-ui)', fontWeight: '600' }}>Next: The World Bible →</Link>
        </div>
      </div>
    </main>
  )
}
