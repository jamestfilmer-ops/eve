import Link from 'next/link'

export const metadata = {
  title: "Road to Short Story Publication—Eve",
  description: "A complete guide to writing, revising, and publishing short stories in literary magazines. From first draft to print—markets, cover letters, simultaneous submissions, and rejection.",
  keywords: "how to publish short stories, short story magazines, literary journals submission, short story cover letter, simultaneous submissions, short fiction markets, literary magazine list",
  openGraph: {
    title: "Road to Short Story Publication",
    description: "Write it, revise it, place it. A practical guide from first draft to published short fiction.",
    url: "https://eve-screenwriting.vercel.app/road-to-short-story",
  },
  alternates: {
    canonical: "https://eve-screenwriting.vercel.app/road-to-short-story",
  },
}

const stages = [
  {
    id: "write",
    number: "01",
    title: "Write the Story",
    summary: "Short fiction is not a compressed novel. It is a different form with its own logic.",
    body: [
      "A short story typically runs 1,000 to 7,500 words. Flash fiction is under 1,000. Novelettes run 7,500 to 17,500. Know which form you are writing—most magazines publish specific word-count ranges and will reject outside them automatically.",
      "The short story has one central question and one primary character. Every scene, line of dialogue, and descriptive passage must serve that question. There is no room for subplots, secondary arcs, or material that is merely interesting.",
      "Short stories often begin later than you think they should. Enter the story at the moment before everything changes. The backstory that feels essential usually is not—readers will infer what they need from how characters behave under pressure.",
      "The ending of a short story does not resolve everything. It resolves enough. The best short story endings create a final image, line, or revelation that stays with the reader—not because it answers the central question definitively, but because it reframes it in a way the reader did not expect.",
    ],
    resources: [
      { label: "The Best American Short Stories (annual anthology)", url: "https://www.hmhbooks.com/series/the-best-american-series" },
      { label: "Tin House—craft essays on short fiction", url: "https://tinhouse.com/category/craft/" },
      { label: "One Story—single-story magazine, excellent model for the form", url: "https://one-story.com/" },
    ],
  },
  {
    id: "revise",
    number: "02",
    title: "Revise Ruthlessly",
    summary: "The first draft proves the story can exist. The revision proves it should.",
    body: [
      "Short stories tolerate no waste. After completing your first draft, read it once without touching it. Then ask: what is this story actually about? Not what happens—what does it mean? If you cannot answer in one sentence, revise until you can.",
      "Cut the first paragraph. Then the second. See where the story actually begins. Most first drafts open too early, with setup the writer needed but the reader does not. The real first line is usually buried.",
      "Every line of dialogue must do at least two things: reveal character, advance the situation, create subtext, or establish tone. Dialogue that only conveys information is not dialogue—it is narration wearing a costume. Cut or transform it.",
      "Read the story aloud. Every sentence you trip over is a sentence that needs fixing. The ear catches what the eye misses. Short fiction in particular depends on rhythm—the prose should sound like someone who knows exactly what they are saying.",
      "Let the draft rest for at least a week before final revisions. You need to forget what you intended so you can read what you actually wrote.",
    ],
    resources: [
      { label: "Strunk and White—The Elements of Style", url: "https://www.amazon.com/Elements-Style-Fourth-William-Strunk/dp/020530902X" },
      { label: "Francine Prose—Reading Like a Writer", url: "https://www.amazon.com/Reading-Like-Writer-Guide-People/dp/0060777052" },
    ],
  },
  {
    id: "markets",
    number: "03",
    title: "Research the Markets",
    summary: "Publishing is a matching problem. The right story in the wrong magazine is still a rejection.",
    body: [
      "Literary magazines range from the Paris Review and Ploughshares (highly competitive, career-defining) to mid-tier journals like Glimmer Train (now closed), One Story, and Narrative, to hundreds of smaller journals with smaller readerships but real editorial standards and genuine prestige within their communities.",
      "Read before you submit. This is not optional. Read at least three issues of any magazine before sending them work. You are looking for: the kind of sentences they favor, the types of endings they publish, whether they skew experimental or traditional, and whether your story fits what they are actually buying.",
      "Duotrope and The Submission Grinder are the two primary databases for tracking literary markets. Both let you filter by genre, word count, response time, and pay rate. Duotrope charges a subscription fee; The Submission Grinder is free. Both are worth using.",
      "Pay attention to the difference between paying markets and non-paying markets. The Science Fiction Writers of America (SFWA) maintains a list of qualifying professional markets for genre fiction—payment of at least 8 cents per word. These matter for award eligibility and career signaling in genre fiction.",
      "Some magazines are highly prestigious but pay nothing or very little. The Paris Review, Granta, Tin House, and The Sun are examples. Publication in them can be career-defining. Do not disqualify a market because it pays modestly.",
    ],
    resources: [
      { label: "Duotrope—market database and submission tracker", url: "https://duotrope.com/" },
      { label: "The Submission Grinder—free market database", url: "https://thesubgrinder.com/" },
      { label: "SFWA Pro Markets list", url: "https://www.sfwa.org/nebula-awards/nebula-awards-information/qualifying-pro-markets/" },
      { label: "Poets and Writers—literary magazine database", url: "https://www.pw.org/literary_magazines" },
      { label: "NewPages—independent press database", url: "https://www.newpages.com/literary-magazines" },
    ],
  },
  {
    id: "submit",
    number: "04",
    title: "Submit Correctly",
    summary: "Editors read thousands of submissions. Anything that signals you have not read their guidelines is an instant rejection.",
    body: [
      "Read the submission guidelines for each magazine. Every magazine has them. Follow them exactly—font, spacing, word count, file format, cover letter format. An improperly formatted submission signals a writer who will be difficult to work with.",
      "Simultaneous submissions (sending the same story to multiple magazines at once) are now standard practice and accepted by most publications. A handful of top-tier magazines still require exclusive submissions. Check before sending. If a magazine does not accept simultaneous submissions and you send to them, you are agreeing to wait—sometimes six months or more—for a single response.",
      "Most magazines now use Submittable, Duosuma, or email for submissions. Submittable is the most common. Create an account and track all your submissions there. Keep a spreadsheet as backup: story title, magazine, date submitted, response date, outcome.",
      "Response times vary enormously. A small journal staffed by volunteers may take three to six months. A well-funded magazine with paid editors may respond in three weeks. Do not follow up before the stated response window has passed. When it has, a single polite query is appropriate.",
      "Many magazines charge small reading fees ($3 to $5) to help fund operations. This is now normal in literary fiction. Genre markets generally do not charge fees—if a genre market charges a reading fee, research them carefully before submitting.",
    ],
    resources: [
      { label: "Submittable—submission management platform", url: "https://www.submittable.com/" },
      { label: "Duosuma—submission platform used by some journals", url: "https://www.duosuma.com/" },
    ],
  },
  {
    id: "cover-letter",
    number: "05",
    title: "Write the Cover Letter",
    summary: "The cover letter should be short, professional, and not embarrassing. That is all.",
    body: [
      "A short story cover letter is one paragraph. It contains: the title of the story, the word count, a brief (one or two sentence) bio noting any relevant publications, and a polite close. Nothing else is required.",
      "Do not summarize your story in the cover letter. The story is in the submission. The editor will read it. If your story requires explanation before they read it, the story has a problem the cover letter cannot fix.",
      "Do not explain why you wrote the story, what it means to you personally, or why you chose this magazine. These details feel meaningful to you and are invisible to an editor reading their two-hundredth submission that week.",
      "If you have no prior publications, simply omit the bio line or write: 'This is my first submission to [Magazine].' Editors accept debut writers constantly. An absence of publication credits is not a disadvantage—a weak cover letter is.",
      "Once you have published in recognizable venues, lead with those: 'My fiction has appeared in Tin House, One Story, and The Sun.' If your publications are in journals the editor will not recognize, you may include one or two, but do not pad.",
    ],
    resources: [],
  },
  {
    id: "rejection",
    number: "06",
    title: "Handle Rejection Properly",
    summary: "Rejection is not feedback. It is traffic. Every writer you admire has a drawer full of it.",
    body: [
      "Most stories are rejected. The Paris Review rejects over 99% of submissions. The New Yorker rejects more than that. A story that collects fifteen rejections and then places in a solid mid-tier journal has had a normal, successful submission arc.",
      "There are different kinds of rejections. A form rejection means the story did not pass the first reader's desk. A personal rejection—even a single handwritten line—means an editor read your work and found something worth noting. Personal rejections are significant. Save them.",
      "When a story is rejected, send it out again the same day if possible. The story is not worse because it was rejected. Its odds reset with each new submission. Writers who send the same story to three magazines and give up have not failed—they have stopped too early.",
      "Some rejections come with specific feedback. Editors are not obligated to give this. When they do, read it carefully. You do not have to agree. But you should understand what the editor saw before deciding whether to revise.",
      "Keep submitting. The writers who publish consistently are not the most talented—they are the most persistent. The submission process is mechanical and statistical. Your job is to keep the story in circulation until it finds the right editor at the right moment.",
    ],
    resources: [
      { label: "The Review Review—tracks magazine news and response times", url: "https://www.thereviewreview.net/" },
    ],
  },
  {
    id: "publish",
    number: "07",
    title: "What Publication Means",
    summary: "First publication is not the end of a story's life. It is the beginning of a career.",
    body: [
      "When a magazine accepts your story, you will typically sign a contract granting them First North American Serial Rights (FNASR) or First World Serial Rights. These grant the magazine the right to publish your story first, in print or online, for one time. After publication, the rights revert to you.",
      "After a story has been published, you may submit it to anthologies, include it in a collection, post it on your own website (after a specified period—usually six months to a year, per the contract), and submit it for awards.",
      "Short story collections are published, but they are difficult to sell unless the author has a substantial body of work in recognizable venues and/or a novel deal. Building a publication record in strong journals over several years is the standard path to a debut collection.",
      "Notable awards for short fiction include the Pushcart Prize (nominated by journals and small presses), the O. Henry Awards (selected from published work), the Best American Short Stories series (editor-selected from published work), and in genre fiction, the Hugo Award, the Nebula Award, the Edgar Award (mystery), and the Shirley Jackson Award (horror/dark fiction).",
      "You do not need to win awards to build a career. What you need is consistent, quality publication over time in venues your peers respect. That is built one story at a time.",
    ],
    resources: [
      { label: "Pushcart Prize—information for nominees", url: "https://pushcartprize.com/" },
      { label: "O. Henry Prize Stories", url: "https://www.penguinrandomhouse.com/series/OHP/o-henry-prize-stories" },
      { label: "Hugo Award eligibility and categories", url: "https://www.thehugoawards.org/" },
      { label: "Edgar Awards—Mystery Writers of America", url: "https://www.theedgars.com/" },
    ],
  },
]

const topMarkets = [
  // LITERARY
  { name: "The New Yorker", tier: "Tier 1", pays: true, genre: "Literary", url: "https://www.newyorker.com/about/fiction-submissions", note: "Exclusive submissions only. Extremely competitive. Career-defining if accepted." },
  { name: "Paris Review", tier: "Tier 1", pays: true, genre: "Literary", url: "https://theparisreview.submittable.com/submit", note: "No simultaneous submissions. Response time: 3-6 months." },
  { name: "Tin House", tier: "Tier 1", pays: true, genre: "Literary", url: "https://tinhouse.com/submissions/", note: "Open reading periods (fall and winter only). Strong prestige." },
  { name: "Ploughshares", tier: "Tier 1", pays: true, genre: "Literary", url: "https://ploughshares.org/pages/for-writers", note: "Guest-edited issues. Check current editor focus before submitting." },
  { name: "Zoetrope: All-Story", tier: "Tier 1", pays: true, genre: "Literary", url: "https://www.all-story.com/", note: "Francis Ford Coppola's literary magazine. Annual short story contest." },
  { name: "The Sun Magazine", tier: "Tier 1", pays: true, genre: "Literary", url: "https://www.thesunmagazine.org/about/submissions", note: "Personal essays and short fiction. No simultaneous submissions." },
  { name: "One Story", tier: "Tier 2", pays: true, genre: "Literary", url: "https://one-story.com/submissions/", note: "One story per issue—highly curated. Reading fee applies." },
  { name: "Narrative Magazine", tier: "Tier 2", pays: true, genre: "Literary", url: "https://www.narrativemagazine.com/submittingwork", note: "Online only. Reading fee. Fast response on shorter work." },
  { name: "Granta", tier: "Tier 1", pays: true, genre: "Literary", url: "https://granta.com/submissions/", note: "UK literary magazine. Highly selective. Prestige equivalent to Paris Review." },
  { name: "McSweeney's", tier: "Tier 2", pays: true, genre: "Literary", url: "https://www.mcsweeneys.net/pages/submission-guidelines", note: "Dave Eggers' quarterly. Strong voice-driven fiction." },
  { name: "Kenyon Review", tier: "Tier 2", pays: true, genre: "Literary", url: "https://kenyonreview.submittable.com/submit", note: "University-affiliated. Long-established prestige. Online and print." },
  { name: "Missouri Review", tier: "Tier 2", pays: true, genre: "Literary", url: "https://moreview.submittable.com/submit", note: "Strong literary fiction program. Annual contest." },
  { name: "Glimmer Train", tier: "Tier 2", pays: true, genre: "Literary", url: "https://www.glimmertrain.com/bulletins/", note: "Closed 2019. Archive only—useful to read back issues for style." },
  { name: "Third Coast", tier: "Tier 3", pays: false, genre: "Literary", url: "https://thirdcoastmagazine.com/submit/", note: "Western Michigan University. Prestige MFA feeder market." },
  { name: "Gettysburg Review", tier: "Tier 3", pays: true, genre: "Literary", url: "https://www.gettysburgreview.com/submissions/", note: "Strong literary fiction. Slow response time, worth the wait." },
  // SFF
  { name: "Fantasy and Science Fiction", tier: "Tier 1", pays: true, genre: "SFF", url: "https://www.sfsite.com/fsf/glines.htm", note: "One of the oldest SFF magazines. SFWA qualifying market." },
  { name: "Clarkesworld", tier: "Tier 1", pays: true, genre: "SFF", url: "https://clarkesworldmagazine.com/submissions/", note: "Online SFF. Hugo-winning. Fast response. SFWA qualifying market." },
  { name: "Tor.com", tier: "Tier 1", pays: true, genre: "SFF", url: "https://www.tor.com/submissions/", note: "Novelette and novella focus. Very competitive. SFWA qualifying." },
  { name: "Asimov's Science Fiction", tier: "Tier 1", pays: true, genre: "SFF", url: "https://www.asimovs.com/contact-info/submission-guidelines/", note: "Legendary SF magazine. SFWA qualifying. Long submission history." },
  { name: "Beneath Ceaseless Skies", tier: "Tier 2", pays: true, genre: "SFF", url: "https://www.beneath-ceaseless-skies.com/submissions/", note: "Literary adventure fantasy. Excellent editorial quality. SFWA qualifying." },
  { name: "Strange Horizons", tier: "Tier 2", pays: true, genre: "SFF", url: "https://strangehorizons.com/submit/fiction-submissions/", note: "Free online SFF. Hugo-winning. Pays SFWA rates." },
  { name: "Lightspeed Magazine", tier: "Tier 2", pays: true, genre: "SFF", url: "https://www.lightspeedmagazine.com/about/submissions/", note: "SF and Fantasy split. John Joseph Adams. SFWA qualifying." },
  { name: "The Dark Magazine", tier: "Tier 3", pays: true, genre: "SFF", url: "https://www.thedarkmagazine.com/submissions/", note: "Dark fiction and horror. Sean Wallace. Growing prestige." },
  { name: "Nightmare Magazine", tier: "Tier 2", pays: true, genre: "SFF", url: "https://www.nightmare-magazine.com/about/submissions/", note: "Horror. Sister publication to Lightspeed. SFWA qualifying." },
  // MYSTERY / CRIME
  { name: "Ellery Queen Mystery Magazine", tier: "Tier 1", pays: true, genre: "Mystery", url: "https://www.elleryqueenmysterymagazine.com/submission-guidelines/", note: "Oldest mystery magazine in the US. Edgar Award feeder publication." },
  { name: "Alfred Hitchcock Mystery Magazine", tier: "Tier 1", pays: true, genre: "Mystery", url: "https://www.alfredhitchcockmysterymagazine.com/submission-guidelines/", note: "Sister publication to Ellery Queen. Edgar Award feeder." },
  { name: "Black Cat Mystery Magazine", tier: "Tier 2", pays: true, genre: "Mystery", url: "https://www.blackcatmysterymagazine.com/submissions", note: "New but growing. Traditional mystery focus." },
  { name: "Mystery Magazine", tier: "Tier 3", pays: true, genre: "Mystery", url: "https://www.mysterymagazine.com/submissions", note: "Broad mystery fiction. Good entry-level market." },
  // HORROR
  { name: "Cemetery Dance", tier: "Tier 1", pays: true, genre: "Horror", url: "https://www.cemeterydance.com/pages/submission-guidelines", note: "Premier horror magazine. Stephen King, Peter Straub territory." },
  { name: "Bourbon Penn", tier: "Tier 2", pays: true, genre: "Horror", url: "http://www.bourbonpenn.com/submissions.html", note: "Quirky, literary dark fiction. Strong voice welcome." },
  { name: "Apex Magazine", tier: "Tier 2", pays: true, genre: "Horror", url: "https://www.apexbookcompany.com/pages/submissions", note: "Dark SFF and horror. SFWA qualifying." },
]

export default function RoadToShortStory() {
  return (
    <div style={{ background: 'var(--off-white)', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #2D5016 0%, var(--green) 55%, #4a8a24 100%)', padding: '44px 24px 40px', textAlign: 'left' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: '20px' }}>
            Short Fiction
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 6vw, 54px)', fontWeight: '700', color: '#fff', lineHeight: '1.12', marginBottom: '24px' }}>
            Road to Short Story Publication
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '18px', lineHeight: '1.75', color: 'rgba(255,255,255,0.72)', maxWidth: '580px', marginBottom: '32px' }}>
            A practical guide from first draft to published fiction. Markets, cover letters, rejection, rights—everything the craft books skip.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/learn" style={{ display: 'inline-block', background: '#fff', color: 'var(--green)', fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '14px', padding: '13px 28px', borderRadius: '8px', textDecoration: 'none' }}>
              Read the craft lessons
            </Link>
            <Link href="/road-to-publishing" style={{ display: 'inline-block', background: 'transparent', color: '#fff', fontFamily: 'var(--font-ui)', fontWeight: '600', fontSize: '14px', padding: '13px 28px', borderRadius: '8px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.35)' }}>
              Road to Novel Publishing
            </Link>
          </div>
        </div>
      </section>

      {/* Stage nav */}
      <section style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '14px 24px', position: 'sticky', top: '52px', zIndex: 10 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '2px' }}>
          {stages.map(s => (
            <a key={s.id} href={`#stage-${s.id}`} style={{ display: 'inline-block', whiteSpace: 'nowrap', padding: '5px 14px', borderRadius: '20px', background: 'var(--off-white)', border: '1px solid var(--border)', fontFamily: 'var(--font-ui)', fontSize: '12px', fontWeight: '500', color: 'var(--text-mid)', textDecoration: 'none' }}>
              {s.number} {s.title}
            </a>
          ))}
          <a href="#markets" style={{ display: 'inline-block', whiteSpace: 'nowrap', padding: '5px 14px', borderRadius: '20px', background: 'var(--off-white)', border: '1px solid var(--border)', fontFamily: 'var(--font-ui)', fontSize: '12px', fontWeight: '500', color: 'var(--text-mid)', textDecoration: 'none' }}>
            Market list
          </a>
        </div>
      </section>

      {/* Stages */}
      <section style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {stages.map((stage, idx) => (
            <div key={stage.id} id={`stage-${stage.id}`} style={{ marginBottom: '72px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', color: 'var(--green)', fontWeight: '700', letterSpacing: '0.08em', paddingTop: '6px', minWidth: '32px' }}>
                  {stage.number}
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '8px' }}>
                    {stage.title}
                  </h2>
                  <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', color: 'var(--green)', fontWeight: '600', marginBottom: '0' }}>
                    {stage.summary}
                  </p>
                </div>
              </div>

              <div style={{ paddingLeft: '52px' }}>
                {stage.body.map((para, i) => (
                  <p key={i} style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '16px' }}>
                    {para}
                  </p>
                ))}

                {stage.resources.length > 0 && (
                  <div style={{ marginTop: '24px', padding: '20px 24px', background: '#fff', border: '1px solid var(--border)', borderRadius: '10px' }}>
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '12px' }}>
                      Further reading
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {stage.resources.map((r, i) => (
                        <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--green)', textDecoration: 'none', fontWeight: '500' }}>
                          {r.label} &rarr;
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {idx < stages.length - 1 && (
                <div style={{ paddingLeft: '52px', marginTop: '40px' }}>
                  <div style={{ height: '1px', background: 'var(--border)' }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Market list */}
      <section id="markets" style={{ background: '#fff', borderTop: '1px solid var(--border)', padding: '64px 24px', scrollMarginTop: '80px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <div className="badge" style={{ marginBottom: '12px' }}>Market List</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '12px' }}>
              Where to Submit
            </h2>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.7', maxWidth: '600px' }}>
              A starting list of reputable markets across literary and genre fiction. Read each magazine before submitting. This list is a starting point, not a substitute for research.
            </p>
          </div>

          <MarketsClient markets={topMarkets} />

          <div style={{ marginTop: '32px', padding: '20px 24px', background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderRadius: '10px' }}>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-dark)', lineHeight: '1.7', margin: 0 }}>
              This list covers well-known markets. Hundreds more exist. Use <a href="https://duotrope.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)', fontWeight: '600' }}>Duotrope</a> or <a href="https://thesubgrinder.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)', fontWeight: '600' }}>The Submission Grinder</a> to find markets that match your specific story, genre, and word count. Read every magazine before you send.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--green)', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: '700', color: '#fff', marginBottom: '16px' }}>
            Write the story first.
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', color: 'rgba(255,255,255,0.72)', lineHeight: '1.7', marginBottom: '32px' }}>
            Eve gives you a workspace to draft, track, and develop your short fiction—from first idea to final revision.
          </p>
          <Link href="/auth?signup=true" style={{ display: 'inline-block', background: '#fff', color: 'var(--green)', fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '15px', padding: '14px 36px', borderRadius: '8px', textDecoration: 'none' }}>
            Start writing—free
          </Link>
        </div>
      </section>

    </div>
  )
}
