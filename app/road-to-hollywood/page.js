import Link from 'next/link'

export const metadata = {
  title: "Road to Hollywood —How to Write, Format, and Sell a Screenplay",
  description: "A complete guide to writing a professional screenplay, formatting it correctly, finding agents and managers, entering competitions, and getting your script in front of people who can make it.",
  keywords: "how to sell a screenplay, screenplay format, find a screenwriting agent, WGA, query letters, screenwriting competitions, road to hollywood, get your script read",
  openGraph: {
    title: "Road to Hollywood —From Your Couch to the Studios",
    description: "Everything nobody tells you about getting a script made. Format, agents, competitions, query letters, and what actually works.",
    url: "https://eve-screenwriting.vercel.app/road-to-hollywood",
  },
}

const stages = [
  {
    number: "01",
    title: "Write a script worth sending",
    subtitle: "The one nobody skips",
    color: "#2D5016",
    content: [
      "Every conversation about agents, competitions, and query letters is irrelevant until you have a script that works. Not one that is finished. One that works. There is a difference.",
      "The test: Would you pay $15 to see this in a theater? Would you watch it twice? Would you tell three people about it afterward? If not, the script is not ready. Fix the script first.",
      "Most writers send too early. The script they sent 18 months ago was their 80% script. They could feel that something was wrong but could not identify what. More drafts would have fixed it. The drafts they skipped are the reason the script did not get traction.",
      "There is no shortcut through this stage. You can query every agent in Los Angeles with a 70% script and get nothing. You can query five agents with a 95% script and change your career. The math is brutal and simple.",
    ],
    action: "Use Eve to build your structure before draft one. Catch plot holes before they become problems. Finish stronger.",
    actionLink: "/dashboard",
    actionLabel: "Start your project",
    resources: [
      { label: "The Black List coverage service", url: "https://blcklist.com/", note: "Pay for professional coverage before you query. Know what's weak before agents do." },
      { label: "Script Reader Pro", url: "https://www.scriptreaderpro.com/", note: "Affordable development notes from working readers." },
    ]
  },
  {
    number: "02",
    title: "Format it like a professional",
    subtitle: "Readers notice immediately",
    color: "#2D5016",
    content: [
      "Screenplay format is not arbitrary. It evolved to communicate specific information to specific departments —production, casting, locations, budget. A script that is formatted incorrectly signals that the writer does not understand the industry they are trying to enter.",
      "The industry standard: 12-point Courier font, specific margin widths, slug lines in caps, action in present tense, no directing on the page. One page roughly equals one minute of screen time. A feature screenplay is 90-120 pages. A one-hour television drama is 45-65 pages.",
      "The most common formatting mistakes: overwriting action lines (three paragraphs where two sentences would do), indicating camera shots (not your job —that is the director's job), writing in past tense, and underlining or bolding text for emphasis. None of these belong in a spec script.",
      "Parentheticals —the (beat) or (quietly) instructions before dialogue —should be used almost never. If you need to tell the actor how to say the line, the line is not doing its job. Rewrite the line.",
    ],
    action: "Recommended software: Final Draft (industry standard), Highland 2 (Mac, cleaner interface), WriterDuet (free, browser-based, real-time collaboration). All auto-format correctly.",
    resources: [
      { label: "Final Draft", url: "https://www.finaldraft.com/", note: "The industry standard. What productions actually use." },
      { label: "Highland 2", url: "https://highland.app/", note: "Cleaner. Faster. Great for Mac users." },
      { label: "WriterDuet", url: "https://writerduet.com/", note: "Free tier available. Works in the browser. Good for collaboration." },
      { label: "WGA Screenplay Format Guide", url: "https://www.wga.org/", note: "The source of truth on professional standards." },
    ]
  },
  {
    number: "03",
    title: "Learn the industry structure",
    subtitle: "Agents, managers, producers —who does what",
    color: "#2D5016",
    content: [
      "Hollywood has a specific professional structure that is not intuitive. Getting it wrong in a query letter marks you as an outsider immediately.",
      "Agents are licensed by the state and regulated by the WGA. They submit your work to buyers, negotiate deals, and take 10%. They work on commission only. They are hard to get without credits. They are the goal, not the starting point.",
      "Managers are not regulated and take 15%. They develop your career over the long term, give notes, make introductions, and are often more accessible to new writers. A good manager-client relationship is the most useful relationship an emerging writer can have. Start here.",
      "Entertainment attorneys review contracts, negotiate options, and can sometimes make introductions. They work on hourly rates or flat fees. Once you have a deal, you need one.",
      "Literary managers who work with emerging writers: Kaplan Stahler, Benderspink, Madhouse Entertainment, Verve. These companies actively read new writers and are worth researching. Cold queries to managers convert at a much higher rate than cold queries to agents.",
      "Producers option scripts before they are sold. An option gives a producer the exclusive right to try to set up your script for a fixed period, usually 12-18 months, in exchange for a fee (often $1 against 2.5% of the purchase price). An option is not a sale. But a good producer actively working your script is worth more than most deals.",
    ],
    resources: [
      { label: "IMDbPro", url: "https://pro.imdb.com/", note: "Research producers and managers. Find who made the films you love." },
      { label: "WGA Agency List", url: "https://www.wga.org/contracts/contracts/mba/agency-regulations", note: "The official list of WGA-franchised agencies." },
      { label: "The Black List —Manager List", url: "https://blcklist.com/", note: "Find managers who represent the genre you write." },
    ]
  },
  {
    number: "04",
    title: "Write a query letter that gets read",
    subtitle: "One paragraph. One chance.",
    color: "#2D5016",
    content: [
      "A query letter is a one-page letter asking an agent or manager to read your script. It has three parts: the hook, the logline, and the brief bio. Nothing else.",
      "The hook is one sentence that explains why this script is worth reading right now. It might reference a comparable film, a current trend, or a specific angle that makes the material urgent. It should not explain your creative process or why you wrote this story.",
      "The logline is two to three sentences: the protagonist, their goal, the obstacle, and the stakes. It should contain irony, specificity, and tension. A logline that could describe any story describes no story. 'A reluctant hero must save the world' is not a logline.",
      "The bio should be one to two sentences of relevant credentials: competitions you have placed in, scripts that have been optioned, produced work, relevant professional background. If you have no credits, say nothing about yourself. Let the logline do the work.",
      "What not to do: Do not compare yourself to Steven Spielberg. Do not explain your theme. Do not pitch a sequel. Do not ask for feedback instead of a read. Do not address the letter 'To Whom It May Concern.' Research the name of the specific person you are querying.",
      "Query 10-15 managers at a time, not everyone at once. Track responses. If you are getting zero requests after 30 queries, the logline needs work. If you are getting requests but no offers of representation, the script needs work.",
    ],
    resources: [
      { label: "QueryTracker", url: "https://querytracker.net/", note: "Track your queries. See patterns in responses." },
      { label: "Done Deal Pro", url: "https://www.donedealpro.com/", note: "Industry news and a searchable deals database." },
    ]
  },
  {
    number: "05",
    title: "Enter the right competitions",
    subtitle: "Shortcuts that actually work",
    color: "#2D5016",
    content: [
      "Screenwriting competitions are not vanity. The top competitions are actively read by agents and managers who use the finalist lists as a scouting tool. Placing in the right competition is one of the fastest ways to get legitimate industry attention as an unrepresented writer.",
      "The competitions that matter: The Nicholl Fellowship is the most prestigious —run by the Academy of Motion Picture Arts and Sciences, it produces more industry attention per placement than almost anything else. Austin Film Festival is the most industry-connected —winners and finalists are invited to pitch meetings as part of the festival. The Black List annual survey identifies the most liked unproduced scripts in circulation and makes them visible to the industry.",
      "The competitions that do not matter: There are hundreds of screenwriting competitions with entry fees and no industry recognition. Research before entering. Ask: Does this competition produce any verifiable success stories? Are the judges current industry professionals? Is the winner's list something an agent would recognize?",
      "Sundance Episodic Lab and Screenwriters Lab accept unproduced writers and provide mentorship with working industry professionals. These are not competitions —they are career-launching programs. Application is free. The caliber of the experience is exceptional.",
      "A Nicholl Fellowship semifinalist credit in a query letter will get a response from most managers. A finalist credit will get a response from most agents. A winner is news. This is a real and achievable path.",
    ],
    resources: [
      { label: "The Nicholl Fellowship", url: "https://www.oscars.org/nicholl", note: "The most prestigious screenwriting fellowship in the world. Opens annually." },
      { label: "Austin Film Festival", url: "https://austinfilmfestival.com/", note: "The most writer-friendly festival. Industry connections are real." },
      { label: "The Black List", url: "https://blcklist.com/", note: "Annual survey + hosting platform. Get your script on industry radar." },
      { label: "Sundance Institute", url: "https://www.sundance.org/programs/screenwriters-lab", note: "Screenwriters Lab for dramatic features. No entry fee. Life-changing." },
    ]
  },
  {
    number: "06",
    title: "Build an online presence that helps you",
    subtitle: "What industry people actually check",
    color: "#2D5016",
    content: [
      "When a manager or producer Googles your name after receiving a query, they will find what you have put there. Make that work for you.",
      "A minimal, clean personal site with your bio, a brief description of your work (no loglines or PDFs —you do not want unsolicited submissions policy issues), and a contact form. That is all you need.",
      "IMDbPro: If you have any produced work, any short film, any produced play, register it on IMDb. Professionals use IMDbPro constantly. Having a professional presence there signals seriousness.",
      "Twitter and Threads have genuine screenwriting communities where working professionals participate. This is not career-making, but it is relationship-building. Engage with the work of writers you respect. Occasionally, this matters.",
      "What not to do: Do not post your loglines asking for feedback from strangers. Do not tweet about your difficult writing day. Do not announce competition results until they are official. Do not make your online presence about your process —make it about your work.",
    ],
    resources: [
      { label: "Stage 32", url: "https://www.stage32.com/", note: "The largest online community for film professionals. Webinars, pitch sessions, networking." },
      { label: "The Tracking Board", url: "https://www.go.trackingb.com/", note: "Industry tracking and emerging talent lists. Work toward being on one." },
    ]
  },
  {
    number: "07",
    title: "Understand what 'getting made' actually means",
    subtitle: "The real path from script to screen",
    color: "#2D5016",
    content: [
      "The path from finished script to produced film is long, nonlinear, and survivable if you understand it clearly.",
      "Most scripts are optioned, not purchased. An option is a bet. The producer is betting they can get the script made. Most options expire without producing anything. This is normal. An optioned script is a working script —it is in the game.",
      "A spec sale (selling a finished script without a prior commitment) is rare. Most working screenwriters work on assignment —they are hired to write something that already has a buyer attached. Building toward assignment work means building relationships, demonstrating craft, and being known as someone who can solve problems.",
      "The independent path is different. A low-budget independent film can be made for under $1 million. Many important careers —David Lynch, Kevin Smith, Ari Aster —started with a very small film that demonstrated what they could do at feature length. If you can produce, direct, or find someone who can, a small film on screen is worth a hundred unproduced scripts.",
      "Television is not the consolation prize. It is its own craft, with its own career track. A pilot that showcases distinctive voice can move faster than a feature script. The streaming explosion created demand that has not fully settled. Understanding the difference between broadcast, cable, and streaming markets matters.",
      "The most honest summary: most scripts do not get made. Most careers in Hollywood are built on persistence, craft development, and relationships over years —not on one breakthrough moment. The writers who get made are the writers who kept writing, kept improving, and stayed in the room long enough for their shot.",
    ],
    resources: [
      { label: "Go Into The Story", url: "https://gointothestory.blcklist.com/", note: "The Black List's official blog. The most useful free resource for working screenwriters." },
      { label: "John August's blog", url: "https://johnaugust.com/", note: "Big Fish, Charlie's Angels, Aladdin. Working writer talking about working writing." },
      { label: "Script Magazine", url: "https://scriptmag.com/", note: "Industry interviews, craft essays, competition coverage." },
      { label: "WGA —Become a Member", url: "https://www.wga.org/the-guild/about-the-wga/about-the-wga", note: "Understand what guild membership means, what it costs, and what it protects." },
    ]
  },
]

export default function RoadToHollywood() {
  return (
    <div style={{ background: 'var(--off-white)', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #2D5016 0%, var(--green) 55%, #4a8a24 100%)', padding: '44px 24px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: '20px' }}>
            The Industry Guide
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(34px, 6vw, 58px)', fontWeight: '700', color: '#fff', lineHeight: '1.12', marginBottom: '24px' }}>
            Road to Hollywood
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '18px', lineHeight: '1.75', color: 'rgba(255,255,255,0.72)', maxWidth: '560px', margin: '0 auto 36px' }}>
            From your couch to the studios. Everything the industry does not put in one place: how to write it, format it, find representation, enter competitions, and get your script in front of people who can make it.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/auth" style={{ display: 'inline-block', background: '#fff', color: 'var(--green)', fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '14px', padding: '13px 28px', borderRadius: '8px', textDecoration: 'none' }}>
              Start writing —free
            </Link>
            <Link href="/learn" style={{ display: 'inline-block', background: 'transparent', color: '#fff', fontFamily: 'var(--font-ui)', fontWeight: '600', fontSize: '14px', padding: '13px 28px', borderRadius: '8px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.35)' }}>
              Learn the craft first
            </Link>
          </div>
        </div>
      </section>

      {/* Stage nav */}
      <section style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '14px 24px', position: 'sticky', top: '52px', zIndex: 10 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '2px' }}>
          {stages.map((s) => (
            <a key={s.number} href={`#stage-${s.number}`} style={{ display: 'inline-block', whiteSpace: 'nowrap', padding: '5px 12px', borderRadius: '16px', background: 'var(--off-white)', border: '1px solid var(--border)', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', fontWeight: '500', color: 'var(--text-mid)', textDecoration: 'none', letterSpacing: '0.04em' }}>
              {s.number}
            </a>
          ))}
        </div>
      </section>

      {/* Stages */}
      <section style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '72px' }}>
          {stages.map((stage, i) => (
            <div key={stage.number} id={`stage-${stage.number}`}>
              {/* Stage header */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '28px' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px',
                  background: 'var(--green)', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'JetBrains Mono, monospace', fontSize: '14px', fontWeight: '700',
                  flexShrink: 0,
                }}>
                  {stage.number}
                </div>
                <div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '4px', lineHeight: '1.2' }}>
                    {stage.title}
                  </h2>
                  <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'var(--text-soft)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    {stage.subtitle}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div style={{ paddingLeft: '68px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                  {stage.content.map((para, j) => (
                    <p key={j} style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.8', color: 'var(--text-mid)' }}>
                      {para}
                    </p>
                  ))}
                </div>

                {/* Action CTA if present */}
                {stage.action && (
                  <div style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderRadius: '10px', padding: '18px 20px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
                    <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--green)', lineHeight: '1.6', margin: 0 }}>
                      {stage.action}
                    </p>
                    {stage.actionLink && (
                      <Link href={stage.actionLink} style={{ display: 'inline-block', background: 'var(--green)', color: '#fff', fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '13px', padding: '9px 18px', borderRadius: '7px', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>
                        {stage.actionLabel}
                      </Link>
                    )}
                  </div>
                )}

                {/* Resources */}
                {stage.resources && stage.resources.length > 0 && (
                  <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', overflow: 'hidden' }}>
                    <div style={{ padding: '12px 18px', borderBottom: '1px solid var(--border)', background: 'var(--off-white)' }}>
                      <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-soft)', margin: 0 }}>Resources</p>
                    </div>
                    {stage.resources.map((r, k) => (
                      <a key={k} href={r.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 18px', borderBottom: k < stage.resources.length - 1 ? '1px solid var(--border)' : 'none', textDecoration: 'none', gap: '16px' }}>
                        <div style={{ flex: 1 }}>
                          <span style={{ fontFamily: 'var(--font-ui)', fontWeight: '600', fontSize: '14px', color: 'var(--text-dark)', display: 'block' }}>{r.label}</span>
                          <span style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--text-soft)', lineHeight: '1.5' }}>{r.note}</span>
                        </div>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, color: 'var(--text-soft)' }}>
                          <path d="M3 11L11 3M11 3H6M11 3V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Divider between stages */}
              {i < stages.length - 1 && (
                <div style={{ marginTop: '72px', borderTop: '1px solid var(--border)' }} />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: 'var(--green)', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: '700', color: '#fff', marginBottom: '16px' }}>
            The script comes first.
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', color: 'rgba(255,255,255,0.72)', lineHeight: '1.75', marginBottom: '32px' }}>
            Everything on this page is irrelevant if the script does not work. Eve helps you build structure, track beats, catch plot holes, and develop characters before you type page one. Free to start.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/auth" style={{ display: 'inline-block', background: '#fff', color: 'var(--green)', fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '14px', padding: '13px 28px', borderRadius: '8px', textDecoration: 'none' }}>
              Start writing for free
            </Link>
            <Link href="/learn" style={{ display: 'inline-block', background: 'transparent', color: '#fff', fontFamily: 'var(--font-ui)', fontWeight: '600', fontSize: '14px', padding: '13px 28px', borderRadius: '8px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.35)' }}>
              Study the craft
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
