import Link from 'next/link'

export const metadata = {
  title: "The Essential Reading List—50 Films and Books Every Serious Writer Should Know",
  description: "50 award-winning films and books organized by what they teach: dialogue, story structure, character, and theme. Drawn from the Oscars, Booker Prize, Hugo, Edgar, PEN Faulkner, and Sundance.",
  keywords: "best books for writers, essential films for screenwriters, Booker Prize novels, Hugo Award winners, Edgar Allan Poe Award, Oscar winning screenplays, books on dialogue, story structure films, character study novels",
  openGraph: {
    title: "50 Films and Books Every Serious Writer Should Know",
    description: "The award-winning works that teach craft. Organized by what each one does best.",
    url: "https://eve-screenwriting.vercel.app/reading-list",
  },
}

const sections = [
  {
    id: "dialogue",
    label: "Dialogue",
    tagline: "How characters speak—and what they refuse to say",
    films: [
      {
        title: "Who's Afraid of Virginia Woolf?",
        year: 1966,
        type: "Film",
        award: "Academy Award—Best Actress, Best Supporting Actress",
        teaches: "Every line of dialogue in this film is a weapon. Edward Albee's play translated to screen shows how characters attack, deflect, seduce, and wound through words. The subtext is never absent. Study it for how to write an argument scene where the real subject takes twenty minutes to surface.",
        buy: "https://www.amazon.com/Whos-Afraid-Virginia-Woolf-Screenplay/dp/0394170636",
      },
      {
        title: "Normal People",
        year: 2018,
        type: "Novel",
        award: "Costa Novel Award, Booker Prize longlist",
        teaches: "Sally Rooney writes dialogue stripped of attribution tags and stage direction. The conversation carries everything—who has power, who wants what, what cannot be said. Study the rhythm of her exchanges. Every line is doing double work.",
        buy: "https://www.amazon.com/Normal-People-Novel-Sally-Rooney/dp/0593085485",
      },
      {
        title: "The Social Network",
        year: 2010,
        type: "Film",
        award: "Academy Award—Best Adapted Screenplay",
        teaches: "Aaron Sorkin's script moves faster than real conversation and feels more real than most fiction. Study the opening scene: six minutes of dialogue that establishes two characters, ends a relationship, and sets the entire film in motion. Then study how velocity is maintained without losing clarity.",
        buy: "https://www.amazon.com/Social-Network-Screenplay/dp/1557048088",
      },
      {
        title: "Elmore Leonard: Collected Works",
        year: 1974,
        type: "Novel",
        award: "Edgar Award (MWA Grand Master), PEN Faulkner Award finalist",
        teaches: "Leonard's dialogue is the benchmark for American crime fiction. Characters sound like themselves from the first line. No one sounds like anyone else. His ten rules for writing are worth memorizing—especially the one about leaving out the parts readers skip.",
        buy: "https://www.amazon.com/Elmore-Leonard-novels/s?k=elmore+leonard",
      },
      {
        title: "Glengarry Glen Ross",
        year: 1992,
        type: "Film",
        award: "Pulitzer Prize (original play), Academy Award nomination",
        teaches: "David Mamet's characters never say what they mean. The gap between what is spoken and what is meant is where all the drama lives. Study how he writes around the subject—every scene is an oblique approach to something that cannot be said directly.",
        buy: "https://www.amazon.com/Glengarry-Glen-Ross-Screenplay/dp/0802132332",
      },
    ],
    books: [
      {
        title: "Interpreter of Maladies",
        year: 1999,
        type: "Story Collection",
        award: "Pulitzer Prize for Fiction",
        teaches: "Jhumpa Lahiri's dialogue is specific, restrained, and culturally precise. Her characters speak carefully around the things that matter most. Study how she uses conversation to reveal the distance between people who share a language but not a world.",
        buy: "https://www.amazon.com/Interpreter-Maladies-Jhumpa-Lahiri/dp/0395927420",
      },
    ],
  },
  {
    id: "structure",
    label: "Story Structure",
    tagline: "How the architecture of a story creates meaning",
    films: [
      {
        title: "Arrival",
        year: 2016,
        type: "Film",
        award: "Academy Award—Best Film Editing, 7 nominations",
        teaches: "Eric Heisserer's screenplay earns the right to restructure time. The non-linear form is not a trick—it is the argument the film makes about language and perception. Read the script twice. The second reading reveals how every early scene was doing more than it appeared.",
        buy: "https://deadline.com/wp-content/uploads/2017/01/arrival-script.pdf",
      },
      {
        title: "The Remains of the Day",
        year: 1989,
        type: "Novel",
        award: "Booker Prize",
        teaches: "Kazuo Ishiguro constructs a story entirely from a narrator who cannot see himself clearly. The structure is a slow revelation—Stevens tells you one story while the evidence of another accumulates around him. Study how Ishiguro makes the reader see what the narrator refuses to.",
        buy: "https://www.amazon.com/Remains-Day-Kazuo-Ishiguro/dp/0679731725",
      },
      {
        title: "Parasite",
        year: 2019,
        type: "Film",
        award: "Academy Award—Best Picture, Best Original Screenplay",
        teaches: "Bong Joon-ho plants information so casually the audience never registers it as setup. Study the second watch: every payoff was earned in the first act. Also study the genre pivot—from comedy to thriller to tragedy, handled without rupturing the world.",
        buy: "https://deadline.com/wp-content/uploads/2020/01/parasite-script.pdf",
      },
      {
        title: "Beloved",
        year: 1987,
        type: "Novel",
        award: "Pulitzer Prize, Nobel Prize contribution",
        teaches: "Toni Morrison fractures chronology deliberately—the horror cannot be approached directly. The structure embodies the theme: this is a story about what cannot be remembered and what cannot be forgotten. Study how Morrison controls the release of information across the whole novel.",
        buy: "https://www.amazon.com/Beloved-Toni-Morrison/dp/1400033411",
      },
      {
        title: "Memento",
        year: 2000,
        type: "Film",
        award: "Academy Award nomination—Best Original Screenplay, Sundance Grand Jury Prize",
        teaches: "Christopher Nolan's script uses reverse chronology not as gimmick but as argument—the structure forces the audience to experience memory loss alongside the protagonist. Study it for how structural choices can embody theme rather than merely serve plot.",
        buy: "https://www.imsdb.com/scripts/Memento.html",
      },
      {
        title: "The Hours",
        year: 1998,
        type: "Novel",
        award: "Pulitzer Prize, PEN Faulkner Award",
        teaches: "Michael Cunningham runs three storylines across different centuries, connected by theme and image rather than plot. Study how he moves between them and how the parallels generate meaning that none of the individual stories could create alone.",
        buy: "https://www.amazon.com/Hours-Michael-Cunningham/dp/0312243022",
      },
    ],
    books: [],
  },
  {
    id: "character",
    label: "Character",
    tagline: "The works that made a person so precisely we could not look away",
    films: [
      {
        title: "There Will Be Blood",
        year: 2007,
        type: "Film",
        award: "Academy Award—Best Actor, Best Cinematography",
        teaches: "Paul Thomas Anderson's Daniel Plainview undergoes a negative arc—he does not change for better but becomes more completely himself. Study how a character whose flaw is their defining quality can sustain narrative interest across nearly three hours.",
        buy: "https://www.imsdb.com/scripts/There-Will-Be-Blood.html",
      },
      {
        title: "Never Let Me Go",
        year: 2005,
        type: "Novel",
        award: "Booker Prize shortlist, Time Magazine Novel of the Century",
        teaches: "Ishiguro again—a narrator who understands exactly what her situation means and chooses compliance over rebellion. The tragedy is in the acceptance. Study how Ishiguro makes the reader furious at a character who never becomes a victim in their own eyes.",
        buy: "https://www.amazon.com/Never-Let-Me-Kazuo-Ishiguro/dp/1400078776",
      },
      {
        title: "Lady Bird",
        year: 2017,
        type: "Film",
        award: "Academy Award nominations—Best Picture, Best Director, Best Original Screenplay",
        teaches: "Greta Gerwig gives every character a fully coherent interior life. Lady Bird and her mother are both completely right and completely wrong in every scene they share. Study how Gerwig writes a relationship where sympathy shifts constantly without the audience losing track of why they love both people.",
        buy: "https://deadline.com/wp-content/uploads/2018/03/lady-bird-script-greta-gerwig.pdf",
      },
      {
        title: "Olive Kitteridge",
        year: 2008,
        type: "Story Collection",
        award: "Pulitzer Prize for Fiction",
        teaches: "Elizabeth Strout's linked story collection is built around a character who is difficult, unsentimental, occasionally cruel, and utterly compelling. Study how Strout maintains engagement with an unlikable protagonist across thirteen stories. The key is precision—Olive is never vague.",
        buy: "https://www.amazon.com/Olive-Kitteridge-Elizabeth-Strout/dp/1400062parallels",
      },
      {
        title: "Marriage Story",
        year: 2019,
        type: "Film",
        award: "Academy Award—Best Original Screenplay nomination, 6 nominations",
        teaches: "Noah Baumbach writes two protagonists who are both entirely correct about the other's flaws. Study the argument scene—the real subject takes twelve minutes to surface and when it does, neither character intended to say it. That is how real argument works.",
        buy: "https://deadline.com/wp-content/uploads/2019/12/marriage-story-written-by-noah-baumbach.pdf",
      },
      {
        title: "A Visit from the Goon Squad",
        year: 2010,
        type: "Novel",
        award: "Pulitzer Prize, National Book Critics Circle Award",
        teaches: "Jennifer Egan's novel follows a web of characters across decades. Study how she makes readers care about a new character every chapter while the architecture of the whole keeps accumulating. One chapter is a PowerPoint presentation. It works.",
        buy: "https://www.amazon.com/Visit-Goon-Squad-Jennifer-Egan/dp/0307477479",
      },
    ],
    books: [],
  },
  {
    id: "theme",
    label: "Theme",
    tagline: "Stories where the argument is inseparable from the story",
    films: [
      {
        title: "Network",
        year: 1976,
        type: "Film",
        award: "Academy Award—Best Actor, Actress, Supporting Actress, Screenplay",
        teaches: "Paddy Chayefsky carries his thesis about media and human dignity through every scene without it ever feeling like a lecture. Every character is an argument. Study how to write a film with a strong point of view that never stops being a story first.",
        buy: "https://www.imsdb.com/scripts/Network.html",
      },
      {
        title: "Lincoln in the Bardo",
        year: 2017,
        type: "Novel",
        award: "Booker Prize",
        teaches: "George Saunders builds his novel out of hundreds of competing voices—historical documents, invented testimonies, ghostly narrators. The form embodies the theme: grief is collective, history is made of incomplete partial accounts, the dead do not know they are dead.",
        buy: "https://www.amazon.com/Lincoln-Bardo-Novel-George-Saunders/dp/0812985451",
      },
      {
        title: "Get Out",
        year: 2017,
        type: "Film",
        award: "Academy Award—Best Original Screenplay",
        teaches: "Jordan Peele works on two levels simultaneously and never lets the social argument overwhelm the horror. Study the layering—every scene functions as genre while also functioning as argument. The plant and payoff structure is clockwork.",
        buy: "https://deadline.com/wp-content/uploads/2018/02/get-out-script.pdf",
      },
      {
        title: "The Left Hand of Darkness",
        year: 1969,
        type: "Novel",
        award: "Hugo Award, Nebula Award",
        teaches: "Ursula K. Le Guin uses speculative premise to examine gender, politics, and loyalty. The argument is inseparable from the world she builds. Study how to use genre to say things that realist fiction cannot say—the defamiliarization creates space for ideas that would feel preachy in a contemporary setting.",
        buy: "https://www.amazon.com/Left-Hand-Darkness-Ursula-Guin/dp/0441478123",
      },
      {
        title: "12 Years a Slave",
        year: 2013,
        type: "Film",
        award: "Academy Award—Best Picture, Best Adapted Screenplay",
        teaches: "John Ridley's adaptation refuses to soften or editorialize. The film makes an argument by showing rather than telling, trusting the audience to draw conclusions from evidence rather than being told what to think. Study how restraint can be more forceful than emphasis.",
        buy: "https://deadline.com/wp-content/uploads/2014/01/12-years-a-slave.pdf",
      },
      {
        title: "The God of Small Things",
        year: 1997,
        type: "Novel",
        award: "Booker Prize",
        teaches: "Arundhati Roy's novel argues about caste, family, and forbidden love through precise sensory detail and structural fragmentation. The horror of the ending is prepared from the first paragraph. Study how to write a novel where the argument lives in the texture of the prose, not in the speeches.",
        buy: "https://www.amazon.com/God-Small-Things-Arundhati-Roy/dp/0812979656",
      },
    ],
    books: [],
  },
  {
    id: "voice",
    label: "Voice and Style",
    tagline: "When how the story is told becomes the story",
    films: [
      {
        title: "Adaptation",
        year: 2002,
        type: "Film",
        award: "Academy Award—Best Supporting Actor, 4 nominations",
        teaches: "Charlie Kaufman collapses the distance between writer and text. The film is about the impossibility of adapting a book and becomes what it is describing. Study it for meta-narrative, for voice as subject matter, and for how to write a character whose neurosis is the plot.",
        buy: "https://www.imsdb.com/scripts/Adaptation.html",
      },
      {
        title: "Their Eyes Were Watching God",
        year: 1937,
        type: "Novel",
        award: "Essential to American literary canon; Hurston Award namesake",
        teaches: "Zora Neale Hurston writes Janie's interiority in a prose style that blends vernacular dialogue with lyric description. The voice is the argument—it claims dignity for a consciousness the literary world had refused to take seriously. Study how to write a character whose way of seeing the world becomes a literary style.",
        buy: "https://www.amazon.com/Their-Eyes-Were-Watching-God/dp/0061120065",
      },
      {
        title: "Her",
        year: 2013,
        type: "Film",
        award: "Academy Award—Best Original Screenplay",
        teaches: "Spike Jonze writes interiority in a visual medium almost entirely through behavior and environment. Theodore's emotional world is shown, never told. Study how to externalize interior states without the crutch of voiceover or dialogue that explains the character's feelings.",
        buy: "https://www.screenplaydb.com/film/scripts/her/",
      },
      {
        title: "White Noise",
        year: 1985,
        type: "Novel",
        award: "National Book Award",
        teaches: "Don DeLillo's narrator speaks in a voice saturated by consumer culture and academic abstraction. The style is the argument—the novel thinks through its language. Study how to write a distinctive narrative voice that is itself a form of characterization.",
        buy: "https://www.amazon.com/White-Noise-Don-DeLillo/dp/0140077022",
      },
      {
        title: "Moonlight",
        year: 2016,
        type: "Film",
        award: "Academy Award—Best Picture, Best Adapted Screenplay, Best Supporting Actor",
        teaches: "Barry Jenkins' script carries emotional continuity across three chapters and decades using visual rhyme and restraint in dialogue. What the characters cannot say is as present as what they say. Study how to write across a long time span without losing the emotional thread.",
        buy: "https://deadline.com/wp-content/uploads/2017/01/moonlight.pdf",
      },
    ],
    books: [],
  },
  {
    id: "genre",
    label: "Genre at Its Highest",
    tagline: "When the genre conventions become tools rather than constraints",
    films: [
      {
        title: "The Name of the Rose",
        year: 1980,
        type: "Novel",
        award: "Edgar Award (MWA), Italian Strega Prize",
        teaches: "Umberto Eco uses the medieval murder mystery to argue about semiotics, heresy, and the nature of knowledge. The genre is not a container—it is the vehicle. Study how to write a plot that is also an argument without either element swallowing the other.",
        buy: "https://www.amazon.com/Name-Rose-Umberto-Eco/dp/0156001314",
      },
      {
        title: "The Silence of the Lambs",
        year: 1991,
        type: "Film",
        award: "Academy Award—Best Picture, Actor, Actress, Director, Screenplay (the Big Five)",
        teaches: "Ted Tally's script makes the helper more frightening than the antagonist. Every conversation between Clarice and Lecter is a negotiation with multiple layers. Study how to write a scene where information is exchanged at a cost—every answer requires a price.",
        buy: "https://www.imsdb.com/scripts/Silence-of-the-Lambs,-The.html",
      },
      {
        title: "The Long Goodbye",
        year: 1953,
        type: "Novel",
        award: "Edgar Award (MWA Best Novel)",
        teaches: "Raymond Chandler's Marlowe speaks in one of the most distinctive voices in American fiction. The hardboiled style is not a pose—it is a moral stance. Study how a genre protagonist can carry a novel's argument in the way they see the world rather than in what they say about it.",
        buy: "https://www.amazon.com/Long-Goodbye-Raymond-Chandler/dp/0394757653",
      },
      {
        title: "Annihilation",
        year: 2014,
        type: "Novel",
        award: "Nebula Award, Shirley Jackson Award",
        teaches: "Jeff VanderMeer generates dread through restraint and indirection. The horror is in what cannot be explained. Study how to write a mystery that deepens rather than resolves—not every question should have an answer, and the questions themselves can be the argument.",
        buy: "https://www.amazon.com/Annihilation-Novel-Southern-Reach-Trilogy/dp/0374104093",
      },
      {
        title: "No Country for Old Men",
        year: 2007,
        type: "Film",
        award: "Academy Award—Best Picture, Best Director, Best Supporting Actor, Best Adapted Screenplay",
        teaches: "The Coens deny the audience every conventional expectation. The hero does not confront the villain. The villain does not get a final scene. The sheriff does not win. Study the film for how to build a story that refuses to obey the rules of stories—and why that refusal is itself the argument.",
        buy: "https://www.imsdb.com/scripts/No-Country-for-Old-Men.html",
      },
    ],
    books: [],
  },
]

const awardContext = [
  {
    name: "Academy Awards",
    category: "Film",
    note: "Best Picture, Best Original Screenplay, and Best Adapted Screenplay are the three craft-relevant awards. Original Screenplay nominees are consistently the best-constructed films of any year.",
    url: "https://www.oscars.org/",
  },
  {
    name: "Booker Prize",
    category: "Novel",
    note: "The English-language novel award with the highest craft standards. The longlist and shortlist each year are as useful as the winner—often more so.",
    url: "https://thebookerprizes.com/",
  },
  {
    name: "Hugo Award",
    category: "Science Fiction and Fantasy",
    note: "The reader-voted SF/F award. Winners consistently demonstrate that genre and literary ambition are not mutually exclusive. Le Guin, Ellison, Butler all won here.",
    url: "https://www.thehugoawards.org/",
  },
  {
    name: "Edgar Allan Poe Award",
    category: "Mystery and Crime",
    note: "The Mystery Writers of America award for the best mystery novel, short story, and screenplay. Grand Masters include Chandler, Hammett, Leonard.",
    url: "https://mysterywriters.org/mwa-awards/edgar-awards/",
  },
  {
    name: "Pulitzer Prize for Fiction",
    category: "American Novel",
    note: "American literary fiction of the highest order. Winners since 1918 form a map of American literature. The Pulitzer website maintains a full archive.",
    url: "https://www.pulitzer.org/prize-winners-by-category/218",
  },
  {
    name: "National Book Award",
    category: "American Literature",
    note: "Fiction, nonfiction, poetry, and young people's literature. The fiction winners and finalists each year are worth reading as a group—they show what American publishers consider the best of the year.",
    url: "https://www.nationalbook.org/national-book-awards/",
  },
  {
    name: "PEN/Faulkner Award",
    category: "American Fiction",
    note: "Peer-selected by American fiction writers. The process matters: this is writers choosing the best work by their peers.",
    url: "https://www.penfaulkner.org/our-programs/pen-faulkner-award/",
  },
  {
    name: "Sundance Film Festival",
    category: "Independent Film",
    note: "Grand Jury Prize and Audience Award winners at Sundance represent the best independent American cinema each year. Many crossover to mainstream awards.",
    url: "https://www.sundance.org/",
  },
]

export default function ReadingList() {
  return (
    <div style={{ background: "var(--off-white)", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ background: "linear-gradient(160deg, #1A512E 0%, var(--green) 55%, #62A81E 100%)", padding: "96px 24px 80px", textAlign: "center" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: "20px" }}>
            Reference
          </p>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 5vw, 50px)", fontWeight: "700", color: "#fff", lineHeight: "1.12", marginBottom: "24px" }}>
            50 Films and Books Every Serious Writer Should Know
          </h1>
          <p style={{ fontFamily: "var(--font-ui)", fontSize: "17px", lineHeight: "1.75", color: "rgba(255,255,255,0.72)", maxWidth: "580px", margin: "0 auto 36px" }}>
            Award-winning works organized by what they teach. Not a prestige list—a working list. Each entry explains exactly what craft problem the work solves and why it belongs in your education.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/scripts" style={{ display: "inline-block", background: "#fff", color: "var(--green)", fontFamily: "var(--font-ui)", fontWeight: "700", fontSize: "14px", padding: "13px 28px", borderRadius: "8px", textDecoration: "none" }}>
              Read the scripts
            </Link>
            <Link href="/learn" style={{ display: "inline-block", background: "transparent", color: "#fff", fontFamily: "var(--font-ui)", fontWeight: "600", fontSize: "14px", padding: "13px 28px", borderRadius: "8px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.35)" }}>
              Study the craft
            </Link>
          </div>
        </div>
      </section>

      {/* Section nav */}
      <section style={{ background: "#fff", borderBottom: "1px solid var(--border)", padding: "14px 24px", position: "sticky", top: '52px', zIndex: 10 }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", gap: "6px", overflowX: "auto", paddingBottom: "2px" }}>
          {sections.map(s => (
            <a key={s.id} href={`#${s.id}`} style={{ display: "inline-block", whiteSpace: "nowrap", padding: "5px 14px", borderRadius: "20px", background: "var(--off-white)", border: "1px solid var(--border)", fontFamily: "var(--font-ui)", fontSize: "12px", fontWeight: "500", color: "var(--text-mid)", textDecoration: "none" }}>
              {s.label}
            </a>
          ))}
          <a href="#awards" style={{ display: "inline-block", whiteSpace: "nowrap", padding: "5px 14px", borderRadius: "20px", background: "var(--off-white)", border: "1px solid var(--border)", fontFamily: "var(--font-ui)", fontSize: "12px", fontWeight: "500", color: "var(--text-mid)", textDecoration: "none" }}>
            The Awards
          </a>
        </div>
      </section>

      {/* Content */}
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "60px 24px" }}>

        {sections.map((section) => (
          <section key={section.id} id={section.id} style={{ marginBottom: "80px", scrollMarginTop: "100px" }}>
            <div style={{ marginBottom: "36px", paddingBottom: "20px", borderBottom: "2px solid var(--green)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 4vw, 36px)", fontWeight: "700", color: "var(--text-dark)", margin: 0 }}>
                  {section.label}
                </h2>
                <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "var(--green)", background: "var(--green-pale)", border: "1px solid var(--green-border)", padding: "3px 9px", borderRadius: "4px", whiteSpace: "nowrap" }}>
                  {[...section.films, ...section.books].length} works
                </span>
              </div>
              <p style={{ fontFamily: "var(--font-ui)", fontSize: "15px", color: "var(--text-mid)", fontStyle: "italic", margin: 0 }}>
                {section.tagline}
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[...section.films, ...section.books].map((item) => (
                <div key={item.title} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "12px", padding: "24px 28px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
                    <div>
                      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "17px", fontWeight: "700", color: "var(--text-dark)", marginBottom: "4px" }}>
                        {item.title}
                      </h3>
                      <p style={{ fontFamily: "var(--font-ui)", fontSize: "13px", color: "var(--text-soft)", margin: "0 0 4px 0" }}>{item.year}</p>
                      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                        <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "10px", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--green)", background: "var(--green-pale)", border: "1px solid var(--green-border)", padding: "2px 8px", borderRadius: "4px" }}>
                          {item.type}
                        </span>
                        <span style={{ fontFamily: "var(--font-ui)", fontSize: "11px", color: "var(--text-soft)" }}>
                          {item.award}
                        </span>
                      </div>
                    </div>
                    <a href={item.buy} target="_blank" rel="noopener noreferrer" style={{ flexShrink: 0, fontFamily: "var(--font-ui)", fontSize: "12px", fontWeight: "600", color: "var(--green)", textDecoration: "none", whiteSpace: "nowrap", padding: "6px 14px", border: "1px solid var(--green-border)", borderRadius: "6px" }}>
                      Read it
                    </a>
                  </div>
                  <p style={{ fontFamily: "var(--font-ui)", fontSize: "14px", lineHeight: "1.75", color: "var(--text-dark)", margin: 0 }}>
                    {item.teaches}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Awards context */}
        <section id="awards" style={{ scrollMarginTop: "100px" }}>
          <div style={{ marginBottom: "36px" }}>
            <div className="badge" style={{ marginBottom: "10px", display: "inline-flex" }}>Reference</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px, 3vw, 30px)", fontWeight: "700", color: "var(--text-dark)", marginBottom: "8px" }}>
              The awards and what they mean
            </h2>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "15px", color: "var(--text-mid)" }}>
              Not all awards signal craft quality equally. Here is what each one actually tells you about the work.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "12px" }}>
            {awardContext.map((award) => (
              <a key={award.name} href={award.url} target="_blank" rel="noopener noreferrer" style={{ display: "block", background: "#fff", border: "1px solid var(--border)", borderRadius: "10px", padding: "20px 22px", textDecoration: "none" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                  <h3 style={{ fontFamily: "var(--font-ui)", fontSize: "15px", fontWeight: "700", color: "var(--text-dark)" }}>
                    {award.name}
                  </h3>
                  <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "10px", color: "var(--green)", background: "var(--green-pale)", padding: "2px 7px", borderRadius: "4px", flexShrink: 0, marginLeft: "8px" }}>
                    {award.category}
                  </span>
                </div>
                <p style={{ fontFamily: "var(--font-ui)", fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.6", margin: 0 }}>
                  {award.note}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section style={{ background: "var(--green)", borderRadius: "16px", padding: "48px 40px", textAlign: "center", marginTop: "60px" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(20px, 3vw, 28px)", fontWeight: "700", color: "#fff", marginBottom: "14px" }}>
            Reading is research. Writing is the work.
          </h2>
          <p style={{ fontFamily: "var(--font-ui)", fontSize: "15px", color: "rgba(255,255,255,0.75)", lineHeight: "1.7", maxWidth: "460px", margin: "0 auto 28px" }}>
            Use Eve to put what you have learned into practice. Build the structure, track the scenes, develop the characters.
          </p>
          <Link href="/auth?signup=true" style={{ display: "inline-block", background: "#fff", color: "var(--green)", fontFamily: "var(--font-ui)", fontWeight: "700", fontSize: "15px", padding: "14px 32px", borderRadius: "8px", textDecoration: "none" }}>
            Start writing—free
          </Link>
        </section>
      </div>
    </div>
  )
}
