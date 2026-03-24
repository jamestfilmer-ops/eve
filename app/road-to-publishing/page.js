import Link from 'next/link'

export const metadata = {
  title: "Road to Publishing —How to Write, Query, and Publish Your Novel or Short Story",
  description: "A complete guide for fiction writers: finishing your manuscript, finding a literary agent, querying publishers, entering contests, submitting to literary magazines, and understanding the publishing industry.",
  keywords: "how to get a novel published, literary agent query letter, submit short story magazine, writing contests, traditional publishing, manuscript submission, literary magazine submission",
  openGraph: {
    title: "Road to Publishing —From Manuscript to Bookshelf",
    description: "Everything nobody puts in one place: how to finish your novel, find an agent, query publishers, submit short stories, and understand what traditional publishing actually is.",
    url: "https://eve-screenwriting.vercel.app/road-to-publishing",
  },
}

const stages = [
  {
    number: "01",
    title: "Write a manuscript worth submitting",
    subtitle: "The draft that can actually go out",
    content: [
      "A first draft is not a manuscript. A manuscript is a document that has been revised to the point where you cannot improve it further on your own —where the problems that remain are invisible to you because you are too close, or require a different reader's perspective to identify. Most writers send too early. The query letter they sent two years ago was for a book that needed another draft. The draft they skipped is the reason nothing happened.",
      "The difference between a good novel and a publishable novel is usually not talent. It is revision. Most published novelists can point to a specific draft —often the third or fourth —where the book became what it was supposed to be. Draft one finds the story. Draft two fixes the structure. Draft three fixes the character. Draft four fixes the prose. There is no shortcut through this.",
      "Before querying, your manuscript needs to have been read by at least two people who are not friends or family —people who will tell you what is not working. Beta readers, critique partners, or a developmental editor. Professional feedback at this stage is not an admission of weakness. It is the same quality control that every published novel goes through before it leaves the building.",
    ],
    action: "Use Eve to build your structure, track your characters, and catch plot holes before draft one. The better your outline, the fewer structural revisions your manuscript needs.",
    actionLink: "/dashboard",
    actionLabel: "Start your project",
    resources: [
      { label: "Critique Circle", url: "https://www.critiquecircle.com/", note: "Free critique partner matching. Give feedback to receive feedback." },
      { label: "Absolute Write Water Cooler", url: "https://absolutewrite.com/forums/", note: "The largest online community for writers. Invaluable for industry research." },
      { label: "Reedsy —Find an Editor", url: "https://reedsy.com/", note: "Vetted freelance editors. Developmental editing runs $1,500–$5,000 for a novel." },
    ]
  },
  {
    number: "02",
    title: "Understand the publishing landscape",
    subtitle: "Traditional, hybrid, and self-publishing —what each actually means",
    content: [
      "Traditional publishing means a publisher acquires your book for an advance against royalties, handles editing, design, production, distribution, and some marketing, and owns the publishing rights for a set period. The advance is paid before the book earns money. Royalties are typically 10–15% of the cover price for hardcover, 6–8% for mass market paperback. The 'Big Five' publishers (Penguin Random House, HarperCollins, Simon & Schuster, Hachette, and Macmillan) dominate the market, but mid-size and independent publishers are significant parts of the ecosystem.",
      "The traditional path requires a literary agent for almost all major publishers. Agents submit to editors, negotiate deals, and take 15% of everything —advances, royalties, subsidiary rights. They work on commission only. The agent-editor relationship is the core of traditional publishing. Getting the right agent for your book matters as much as getting any agent.",
      "Self-publishing (also called indie publishing) means you control everything: editing, cover design, formatting, distribution, and marketing. You keep 70% of ebook royalties on Amazon and other platforms, versus 10–15% in traditional publishing. The ceiling is unlimited. The floor requires significant work and some investment. Self-publishing is not a consolation prize —it is a legitimate career path that some authors have built into sustainable, profitable businesses. The stigma is fading. The work required is real.",
      "Hybrid publishing sits between: a publisher handles production and some distribution, but the author pays upfront costs (usually $3,000–$15,000). The quality varies enormously. Research any hybrid publisher thoroughly before signing. Some are legitimate; some are vanity presses with new packaging. A legitimate hybrid publisher is selective about what they publish. A vanity press accepts everything for a fee.",
    ],
    resources: [
      { label: "Publishers Marketplace", url: "https://publishersmarketplace.com/", note: "Track deals, find agents, research the market. The industry standard." },
      { label: "Poets & Writers", url: "https://www.pw.org/", note: "The most comprehensive database of literary agents, grants, and contests." },
      { label: "Writer Beware", url: "https://www.sfwa.org/other-resources/for-authors/writer-beware/", note: "SFWA's warnings database. Research any publisher or agent before signing." },
    ]
  },
  {
    number: "03",
    title: "Write a query letter that works",
    subtitle: "One page. Three paragraphs. One shot.",
    content: [
      "A query letter is a one-page pitch to a literary agent. It has three parts: the hook paragraph (the book), the bio paragraph (you), and the closing (the logistics). In that order. Nothing else.",
      "The hook paragraph contains: title, genre, word count, a one-to-two sentence comparative title statement (your book is for readers of X and Y), and a three-to-five sentence summary that establishes the protagonist, the central conflict, the stakes, and the emotional core. The summary is not a synopsis —it does not reveal the ending. It is a pitch. It makes the agent want to read the first page.",
      "Word count matters. Literary fiction: 80,000–100,000 words. Commercial fiction: 80,000–120,000 words (genre varies —romance runs shorter, fantasy and science fiction often longer). Debut novels above 120,000 words are very difficult to sell. Below 60,000 is novella territory. If your manuscript is significantly outside range, revise before querying.",
      "Comparative titles (comps) should be books published within the last five years, by authors who are not household names (comping to Toni Morrison signals you do not understand how comps work), that share your book's tone, theme, or structure —not necessarily its plot. Comps tell the agent where your book lives in the market. If you cannot find comps, it means you have not read enough in your genre. Read more.",
      "The bio paragraph: relevant credentials only. Published short stories (especially in recognized publications). Previous books. Professional background relevant to the material (a nurse writing a medical thriller, a lawyer writing a legal procedural). If you have no credentials, keep the bio to one sentence and let the book do the work.",
    ],
    resources: [
      { label: "QueryTracker", url: "https://querytracker.net/", note: "Track your queries. Research agent response rates and preferences." },
      { label: "Janet Reid's Query Shark", url: "https://queryshark.blogspot.com/", note: "Hundreds of annotated query letters. Read all of them. Seriously." },
      { label: "Publishers Marketplace —Deals", url: "https://publishersmarketplace.com/members/dealacategorylogin.cgi", note: "Research what agents are selling before querying them." },
    ]
  },
  {
    number: "04",
    title: "Navigate the query process",
    subtitle: "How agents actually work and what to expect",
    content: [
      "Query 10-15 agents at a time, not everyone simultaneously. Research each agent before querying —know what they represent, what they have sold recently, and what they have said publicly about what they are looking for. A query to an agent who does not represent your genre is not a query. It is noise.",
      "Response times range from one week to six months, with many agents never responding to queries they are not interested in (this is called a 'no response means no' policy —check each agent's submission guidelines). A full request (the agent asks to read your complete manuscript) is a significant positive signal, not a guarantee. Agents request fulls from maybe 1–5% of queries they receive. Many fulls are ultimately declined.",
      "Exclusives: some agents request that you not submit to other agents while they are reading your full manuscript. This is negotiable and not required. It is generally not to your advantage to grant an exclusive unless the agent has a specific, stated reason and a defined time limit. If an agent requests an exclusive for more than 6–8 weeks, negotiate.",
      "If you receive an offer of representation from one agent, you have 2–4 weeks to inform all other agents who have your manuscript. This is professional courtesy and standard practice. During this period, other agents who have your work may request to read it and speed up their response. An offer is not a contract —ask questions, research the agent, and if possible speak with their existing clients before signing.",
    ],
    resources: [
      { label: "Manuscript Wishlist", url: "https://www.manuscriptwishlist.com/", note: "Agents share exactly what they want. Read this before querying." },
      { label: "AgentQuery", url: "https://agentquery.com/", note: "Free searchable agent database with submission guidelines." },
      { label: "The Query Letter Clinic —Writer's Digest", url: "https://www.writersdigest.com/category/get-published/query-letters", note: "Annotated successful and unsuccessful query letters." },
    ]
  },
  {
    number: "05",
    title: "Submit short stories to literary magazines",
    subtitle: "The path that builds a career before the novel",
    content: [
      "Publishing short fiction in literary magazines is the traditional path to building a reputation as a fiction writer. Most agents and editors pay attention to where a debut novelist has been published. A story in The New Yorker, Ploughshares, One Story, or The Sun is a signal that the writer can operate at a professional level. Accumulating publication credits in respected journals is the short fiction equivalent of building a film resume before pitching a feature.",
      "The hierarchy matters. At the top: The New Yorker, Tin House, Granta, The Paris Review, McSweeney's, AGNI. These are extremely competitive —acceptance rates are often below 1%. Below them is a substantial middle tier of serious journals: One Story, The Sun, Kenyon Review, Ploughshares, Georgia Review, Zoetrope. These are competitive but accessible to good work. Below them are hundreds of smaller journals that publish good work and provide real credits.",
      "Simultaneous submissions: most magazines accept simultaneous submissions (submitting the same story to multiple publications at once). Some do not. Check the guidelines. If a magazine does not accept simultaneous submissions, it should offer a response within 3–6 months. If it does not, withdraw the story and submit elsewhere.",
      "Payment rates signal publication quality. The Science Fiction and Fantasy Writers of America (SFWA) defines pro rates for genre fiction as 8 cents per word or higher. For literary fiction, many prestigious journals pay far less or offer only contributor copies —payment is not the point. The point is the readership, the reputation, and the development of the craft.",
    ],
    resources: [
      { label: "Duotrope", url: "https://duotrope.com/", note: "The most comprehensive database of literary magazines. $5/month. Worth it." },
      { label: "The Submission Grinder", url: "https://thesubmissiongrinder.com/", note: "Free alternative to Duotrope. Track submissions, research markets." },
      { label: "Poets & Writers —Literary Magazines", url: "https://www.pw.org/literary_magazines", note: "Curated list with descriptions and submission guidelines." },
      { label: "Tin House Open Submissions", url: "https://tinhouse.com/submissions/", note: "One of the best literary magazines. Read submission guidelines carefully." },
    ]
  },
  {
    number: "06",
    title: "Enter the contests that matter",
    subtitle: "Fellowships, prizes, and competitions with real consequences",
    content: [
      "Literary prizes do two things: they make previously unknown books visible, and they validate the writer's career at a moment when that validation can open doors. Winning or being shortlisted for a major prize can change the trajectory of a career —not just the book's sales, but the writer's access to agents, editors, and future opportunities.",
      "For debut novelists: the PEN/Faulkner Award, the National Book Award, and the Pulitzer Prize are not accessible before publication. But the Graywolf Press African Fiction Prize, the Restless Books Prize for New Immigrant Writing, and similar contests specifically for debut or underrepresented writers offer both publication and legitimacy. The Yale Series of Younger Poets is the oldest annual poetry prize in the United States and one of the most prestigious.",
      "For short fiction: The O. Henry Prize Stories annual anthology is the most visible short fiction prize, drawing from published magazine work. The Pushcart Prize operates similarly. Getting work into either collection is a significant credential that agents and editors notice. The Sunday Times Short Story Award and other international prizes are accessible to US writers.",
      "Writing fellowships are distinct from prizes —they provide time and money for a writer to work, rather than recognition for completed work. The Guggenheim Fellowship, the NEA Literature Fellowship, Yaddo and MacDowell residencies, and the Bread Loaf Writers' Conference scholarships are the most competitive and consequential. Application is free or low-cost. The selectivity is real. The benefit of attending or receiving one of these is networking and credibility as much as the money or time itself.",
    ],
    resources: [
      { label: "Poets & Writers —Grants and Awards", url: "https://www.pw.org/grants", note: "Comprehensive database of fellowships, grants, and residencies." },
      { label: "Yaddo", url: "https://yaddo.org/", note: "The most prestigious arts residency in the United States. Apply annually." },
      { label: "MacDowell", url: "https://www.macdowell.org/", note: "Residency program for writers and artists. No charge to residents." },
      { label: "Bread Loaf Writers' Conference", url: "https://www.middlebury.edu/bread-loaf-conferences/bl_writers", note: "The oldest and most prestigious literary conference. Fellowships available." },
    ]
  },
  {
    number: "07",
    title: "Understand what getting published actually means",
    subtitle: "The real path from acceptance to bookshelf",
    content: [
      "Signing with a literary agent is not a book deal. It is the beginning of the process of trying to get a book deal. Agents submit to editors at publishing houses. Editors respond over weeks to months. An editor who wants to acquire your book must bring it to an acquisitions meeting, where it is evaluated on its commercial potential, fit for the list, and how strongly the editor champions it. Books are acquired by editors who love them. A lukewarm editor does not acquire books.",
      "An advance against royalties is money paid before the book earns anything. It is recouped from future royalties before you see additional money. A $10,000 advance for a literary novel is common and not a sign of failure —it is a sign that the publisher expects modest but real sales. A $100,000 advance is a significant commitment and comes with significant marketing investment. Most books do not earn out their advances. This is generally understood by publishers and is not a crisis unless it happens consistently.",
      "The publication timeline is long. After signing a deal: developmental editing (1–3 months), copy editing (1–2 months), production (3–6 months), advance reader copies distributed (4–6 months before publication), publication. From deal to bookstore: typically 12–18 months. Use the time to write the next book.",
      "Most debut novels do not become bestsellers. Most careers are not built on one book. They are built on a body of work accumulated over years —a back catalogue that grows with each publication, a readership that follows the writer from book to book, and a reputation built through short fiction, journalism, events, and sustained presence. The writers who last are the writers who keep writing.",
    ],
    resources: [
      { label: "The Literary Hub", url: "https://lithub.com/", note: "The best source of literary news, essays, and industry information." },
      { label: "BookEnds Literary Agency Blog", url: "https://bookendsliterary.com/blog/", note: "Working agents explaining how publishing works. Honest and useful." },
      { label: "Jane Friedman —Publishing Industry Resources", url: "https://www.janefriedman.com/", note: "The most comprehensive free resource on the publishing industry. Bookmark it." },
    ]
  },
]

export default function RoadToPublishing() {
  return (
    <div style={{ background: 'var(--off-white)', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #2D5016 0%, var(--green) 55%, #4a8a24 100%)', padding: '44px 24px 40px', textAlign: 'left' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: '20px' }}>
            The Publishing Guide
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(34px, 6vw, 58px)', fontWeight: '700', color: '#fff', lineHeight: '1.12', marginBottom: '24px' }}>
            Road to Publishing
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '18px', lineHeight: '1.75', color: 'rgba(255,255,255,0.72)', maxWidth: '560px', margin: '0 auto 36px' }}>
            From manuscript to bookshelf. The publishing industry explained honestly: how to finish a novel worth submitting, find a literary agent, query publishers, submit short stories to magazines, and enter the contests that actually matter.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/auth" style={{ display: 'inline-block', background: '#fff', color: 'var(--green)', fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '14px', padding: '13px 28px', borderRadius: '8px', textDecoration: 'none' }}>
              Start writing —free
            </Link>
            <Link href="/learn" style={{ display: 'inline-block', background: 'transparent', color: '#fff', fontFamily: 'var(--font-ui)', fontWeight: '600', fontSize: '14px', padding: '13px 28px', borderRadius: '8px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.35)' }}>
              Study the craft
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

              <div style={{ paddingLeft: '68px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                  {stage.content.map((para, j) => (
                    <p key={j} style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.8', color: 'var(--text-mid)' }}>
                      {para}
                    </p>
                  ))}
                </div>

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
            The manuscript comes first.
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', color: 'rgba(255,255,255,0.72)', lineHeight: '1.75', marginBottom: '32px' }}>
            Every step on this page is downstream of a manuscript that works. Eve helps you build structure, track chapters, develop characters, and catch problems before they compound. Free to start.
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
