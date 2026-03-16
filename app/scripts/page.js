import Link from 'next/link'

export const metadata = {
  title: "Famous Screenplays to Read  -- Free & Legal Script Downloads",
  description: "Read the screenplays that defined modern cinema. Free and legal PDF downloads of famous scripts: Chinatown, Pulp Fiction, Parasite, Network, Moonlight, The Godfather, and 40+ more  -- with what each one teaches.",
  keywords: "famous screenplays PDF free download, read scripts online free legal, Chinatown screenplay PDF, Pulp Fiction script, Parasite script PDF, best screenplays to read, how to learn screenwriting by reading scripts, WGA script library, IMSDB scripts",
  openGraph: {
    title: "Famous Screenplays to Read Free & Legal",
    description: "40+ famous scripts with free legal sources  -- and what each one actually teaches about craft.",
    url: "https://eve-screenwriting.vercel.app/scripts",
  },
  alternates: {
    canonical: "https://eve-screenwriting.vercel.app/scripts",
  },
}

const categories = [
  {
    label: "Structure",
    description: "Scripts where the architecture is the lesson. Study these to understand how professional writers build and sustain momentum across 90–120 pages.",
    scripts: [
      {
        title: "Chinatown",
        writer: "Robert Towne",
        year: 1974,
        logline: "A private detective investigating a routine adultery case stumbles into a conspiracy involving water rights and something far darker.",
        teaches: "Perfect three-act structure, escalating reveals, a protagonist who cannot win  -- and the rare screenplay where the ending exists in the beginning. Every scene advances plot and character simultaneously.",
        url: "https://www.imsdb.com/scripts/Chinatown.html",
        source: "IMSDB",
        lessonLink: "/learn/act-breaks",
        lessonLabel: "Act breaks",
      },
      {
        title: "Network",
        writer: "Paddy Chayefsky",
        year: 1976,
        logline: "A news anchor's on-air breakdown turns him into a TV sensation, as a ruthless programmer uses him to save the ratings.",
        teaches: "How to carry a theme through every scene without it ever feeling like a lecture. Chayefsky's dialogue is dense with argument  -- characters talk at cross-purposes while exposing a thesis about media and human dignity that is, if anything, more relevant now than in 1976.",
        url: "https://www.imsdb.com/scripts/Network.html",
        source: "IMSDB",
        lessonLink: "/learn/theme",
        lessonLabel: "Theme",
      },
      {
        title: "Moonlight",
        writer: "Barry Jenkins",
        year: 2016,
        logline: "A young Black man in Miami grows up in three chapters  -- as a child, a teenager, and an adult  -- finding his identity under the shadow of a difficult mother and an emerging sense of self.",
        teaches: "The three-chapter structure as a full film architecture. How to carry emotional continuity across time jumps. How visual language and restraint in dialogue can carry more weight than exposition.",
        url: "https://deadline.com/wp-content/uploads/2017/01/moonlight.pdf",
        source: "Deadline (PDF)",
        lessonLink: "/learn/act-breaks",
        lessonLabel: "Act breaks",
      },
      {
        title: "Parasite",
        writer: "Bong Joon-ho & Han Jin-won",
        year: 2019,
        logline: "A poor Korean family infiltrates the household of a wealthy family, setting off consequences neither could have anticipated.",
        teaches: "Genre pivoting  -- how to shift from comedy to thriller to tragedy without rupturing the world. Also: how to plant information so casually that the audience doesn't register it until the payoff.",
        url: "https://deadline.com/wp-content/uploads/2020/01/parasite-script.pdf",
        source: "Deadline (PDF)",
        lessonLink: "/learn/plant-payoff",
        lessonLabel: "Plant and payoff",
      },
      {
        title: "The Shawshank Redemption",
        writer: "Frank Darabont",
        year: 1994,
        logline: "A man convicted of a crime he did not commit forms a friendship with a fellow prisoner over decades while quietly planning his escape.",
        teaches: "Narration done right. Long-form hope as dramatic engine. How a story can defy almost every conventional pacing rule and still hold an audience completely because the character work is so precise.",
        url: "https://www.screenplaydb.com/film/scripts/the-shawshank-redemption/",
        source: "ScreenplayDB",
        lessonLink: "/learn/want-vs-need",
        lessonLabel: "Want vs. need",
      },
    ],
  },
  {
    label: "Dialogue",
    description: "Scripts where the writing in the mouths of characters is itself the craft achievement. Study these to hear how words can do three things at once.",
    scripts: [
      {
        title: "Pulp Fiction",
        writer: "Quentin Tarantino",
        year: 1994,
        logline: "Interlocking crime stories unfold out of chronological order across a single day in Los Angeles.",
        teaches: "Dialogue as character revelation, tone control, and rhythm. Tarantino's characters never get to the point directly  -- and the indirectness is the point. Also: non-linear structure and how to use it to build meaning through juxtaposition rather than gimmick.",
        url: "https://www.imsdb.com/scripts/Pulp-Fiction.html",
        source: "IMSDB",
        lessonLink: "/learn/tarantino-dialogue",
        lessonLabel: "Tarantino & dialogue",
      },
      {
        title: "Glengarry Glen Ross",
        writer: "David Mamet",
        year: 1992,
        logline: "Real estate salesmen under pressure to close deals or lose their jobs over the course of two days.",
        teaches: "Subtext carried entirely by dialogue. Mamet's characters almost never say what they mean  -- the gap between what is said and what is meant is where all the drama lives. Essential reading for anyone who wants to write scenes where people talk around things.",
        url: "https://www.imsdb.com/scripts/Glengarry-Glen-Ross.html",
        source: "IMSDB",
        lessonLink: "/learn/dialogue-subtext",
        lessonLabel: "Dialogue & subtext",
      },
      {
        title: "Adaptation",
        writer: "Charlie Kaufman",
        year: 2002,
        logline: "A screenwriter struggles to adapt a non-narrative book about flowers into a film, while his twin brother has no such trouble writing genre fare.",
        teaches: "Meta-narrative, voice, and the creative process as subject matter. Kaufman collapses the distance between writer and text in a way that nobody had done in film before. Also: a masterclass in how to write a character whose flaws are the story.",
        url: "https://www.imsdb.com/scripts/Adaptation.html",
        source: "IMSDB",
        lessonLink: "/learn/character-arc",
        lessonLabel: "Character arc",
      },
      {
        title: "The Social Network",
        writer: "Aaron Sorkin",
        year: 2010,
        logline: "The founding of Facebook and the lawsuits that followed, told through depositions and memories.",
        teaches: "Velocity. Sorkin writes dialogue that moves faster than real conversation while feeling more real than most film dialogue. Also: the deposition frame structure and how non-linear storytelling can create dramatic irony out of scenes the audience has not yet seen.",
        url: "https://www.sonypictures.com/sites/default/files/downloads/the_social_network.pdf",
        source: "Sony Pictures",
        lessonLink: "/learn/arguments",
        lessonLabel: "Writing arguments",
      },
    ],
  },
  {
    label: "Character",
    description: "Scripts where understanding a person fully is the story. Study these when your protagonist feels thin or your supporting characters feel like furniture.",
    scripts: [
      {
        title: "Taxi Driver",
        writer: "Paul Schrader",
        year: 1976,
        logline: "A mentally unstable Vietnam veteran works as a night taxi driver in New York City, slowly moving toward violent action.",
        teaches: "Unreliable narrator. First-person voiceover that reveals more about the character than the character understands about themselves. How to create audience investment in a protagonist who is genuinely disturbed.",
        url: "https://www.imsdb.com/scripts/Taxi-Driver.html",
        source: "IMSDB",
        lessonLink: "/learn/ghost",
        lessonLabel: "The ghost (backstory)",
      },
      {
        title: "The Godfather",
        writer: "Mario Puzo & Francis Ford Coppola",
        year: 1972,
        logline: "The youngest son of an aging Mafia patriarch unexpectedly takes over the family after an assassination attempt on his father.",
        teaches: "Character transformation across a full film arc. Michael Corleone's journey from war hero to monster is one of cinema's most precisely staged character arcs. Watch how each decision follows logically from the last, and how each one costs him something he cannot get back.",
        url: "https://www.imsdb.com/scripts/Godfather,-The.html",
        source: "IMSDB",
        lessonLink: "/learn/character-arc",
        lessonLabel: "Character arc",
      },
      {
        title: "Marriage Story",
        writer: "Noah Baumbach",
        year: 2019,
        logline: "A stage director and an actress navigate the dissolution of their marriage and what it costs each of them.",
        teaches: "How to make two protagonists who are both right. Baumbach gives each character a fully coherent interior life and then puts them in direct conflict. Also: how to write an argument scene where the real subject of the argument only surfaces at the end.",
        url: "https://deadline.com/wp-content/uploads/2019/12/marriage-story-written-by-noah-baumbach.pdf",
        source: "Deadline (PDF)",
        lessonLink: "/learn/relationship-pairs",
        lessonLabel: "Relationship pairs",
      },
      {
        title: "Whiplash",
        writer: "Damien Chazelle",
        year: 2014,
        logline: "A young jazz drummer at an elite conservatory pushes himself to the limit under a terrifying instructor who may be trying to make him great or destroy him.",
        teaches: "The antagonist as mirror. Fletcher is everything Andrew wants to be and is afraid of becoming. The script is also a study in escalation  -- each scene raises the stakes incrementally until the climax feels both inevitable and shocking.",
        url: "https://www.screenplaydb.com/film/scripts/whiplash/",
        source: "ScreenplayDB",
        lessonLink: "/learn/antagonist",
        lessonLabel: "Antagonist",
      },
    ],
  },
  {
    label: "Genre & Craft",
    description: "Scripts that define what their genres can do at the highest level. Study these to understand how genre conventions can be tools rather than constraints.",
    scripts: [
      {
        title: "Get Out",
        writer: "Jordan Peele",
        year: 2017,
        logline: "A Black man visits his white girlfriend's family and discovers something profoundly wrong beneath the surface of their liberal hospitality.",
        teaches: "Layered genre  -- horror as social critique without sacrificing either. Every scene works on two levels simultaneously. Also: plant and payoff executed with clockwork precision across the whole film.",
        url: "https://deadline.com/wp-content/uploads/2018/02/get-out-script.pdf",
        source: "Deadline (PDF)",
        lessonLink: "/learn/plant-payoff",
        lessonLabel: "Plant and payoff",
      },
      {
        title: "Eternal Sunshine of the Spotless Mind",
        writer: "Charlie Kaufman",
        year: 2004,
        logline: "A man undergoes a medical procedure to erase his memories of a failed relationship, and changes his mind too late.",
        teaches: "Non-linear structure in service of emotional logic rather than plot mechanics. The film moves backward through a relationship as the protagonist experiences it, and the structure embodies the theme: we forget what made us fall in love before we forget the pain.",
        url: "https://www.imsdb.com/scripts/Eternal-Sunshine-of-the-Spotless-Mind.html",
        source: "IMSDB",
        lessonLink: "/learn/theme",
        lessonLabel: "Theme",
      },
      {
        title: "Her",
        writer: "Spike Jonze",
        year: 2013,
        logline: "A lonely man falls in love with an AI operating system, and the relationship is more real than anything else in his life.",
        teaches: "How to write interiority in a visual medium. Theodore's emotional world is shown almost entirely through behavior and environment  -- the screenplay tells us almost nothing directly. Also: how to write a love story in which one character is disembodied.",
        url: "https://www.screenplaydb.com/film/scripts/her/",
        source: "ScreenplayDB",
        lessonLink: "/learn/subtext",
        lessonLabel: "Subtext",
      },
      {
        title: "Inside Out",
        writer: "Pete Docter, Meg LeFauve & Josh Cooley",
        year: 2015,
        logline: "The personified emotions inside an 11-year-old girl's mind navigate a crisis as her family moves to a new city.",
        teaches: "Concept as metaphor. The screenplay externalizes interior emotional processes into visual story  -- which is the entire job of cinema. Also: how to run two parallel storylines (inside and outside) so each illuminates the other.",
        url: "https://www.screenplaydb.com/film/scripts/inside-out/",
        source: "ScreenplayDB",
        lessonLink: "/learn/theme",
        lessonLabel: "Theme",
      },
    ],
  },
  {
    label: "Dark & Complex",
    description: "Scripts that refuse easy morality or resolution. Study these when your story needs to inhabit moral ambiguity without flinching from it.",
    scripts: [
      {
        title: "No Country for Old Men",
        writer: "Joel & Ethan Coen",
        year: 2007,
        logline: "A hunter stumbles onto drug money in the Texas desert and is pursued by a relentless, philosophically assured killer.",
        teaches: "How to structure a film around absence and refusal. The Coens deny the audience every conventional expectation  -- the hero doesn't confront the villain, the villain doesn't get a final scene, the sheriff doesn't win. The film is about what happens when a story refuses to obey the rules of stories.",
        url: "https://www.imsdb.com/scripts/No-Country-for-Old-Men.html",
        source: "IMSDB",
        lessonLink: "/learn/antagonist",
        lessonLabel: "Antagonist",
      },
      {
        title: "There Will Be Blood",
        writer: "Paul Thomas Anderson",
        year: 2007,
        logline: "An oil prospector builds an empire in early twentieth-century California while slowly shedding every human connection he has.",
        teaches: "Negative arc. Daniel Plainview does not change for the better  -- he becomes more completely himself. The screenplay shows how a character's flaw, pursued to its logical extreme, becomes their definition.",
        url: "https://www.imsdb.com/scripts/There-Will-Be-Blood.html",
        source: "IMSDB",
        lessonLink: "/learn/character-arc",
        lessonLabel: "Character arc",
      },
      {
        title: "Fargo",
        writer: "Joel & Ethan Coen",
        year: 1996,
        logline: "A hapless car salesman hires two criminals to kidnap his wife, and a pregnant small-town police chief unravels the ensuing chaos.",
        teaches: "Tonal control  -- the Coens write comedy and violence with equal facility, in the same scene, without rupturing the world. Also: how to write a protagonist whose decency is itself heroic without making the film preachy.",
        url: "https://www.imsdb.com/scripts/Fargo.html",
        source: "IMSDB",
        lessonLink: "/learn/theme",
        lessonLabel: "Theme",
      },
      {
        title: "Requiem for a Dream",
        writer: "Hubert Selby Jr. & Darren Aronofsky",
        year: 2000,
        logline: "Four people in Brooklyn are consumed by their addictions over the course of a single year.",
        teaches: "Parallel structure  -- four storylines running simultaneously, each escalating at the same rate toward a convergent collapse. How to use structure to embody theme: the film's form mirrors the rhythms of addiction.",
        url: "https://www.imsdb.com/scripts/Requiem-for-a-Dream.html",
        source: "IMSDB",
        lessonLink: "/learn/act-breaks",
        lessonLabel: "Act breaks",
      },
      {
        title: "Zodiac",
        writer: "James Vanderbilt",
        year: 2007,
        logline: "A cartoonist at the San Francisco Chronicle becomes obsessed with identifying the Zodiac killer over more than a decade.",
        teaches: "How to sustain narrative tension across a long timeline without resolution. The film denies its protagonist a definitive answer  -- and makes that denial the point. Also: procedural storytelling and the obsession structure.",
        url: "https://www.imsdb.com/scripts/Zodiac.html",
        source: "IMSDB",
        lessonLink: "/learn/want-vs-need",
        lessonLabel: "Want vs. need",
      },
    ],
  },
  {
    label: "Comedy & Voice",
    description: "Scripts where a singular comic sensibility is the primary achievement. Study these to understand how voice, timing, and point of view can carry a story.",
    scripts: [
      {
        title: "Some Like It Hot",
        writer: "Billy Wilder & I.A.L. Diamond",
        year: 1959,
        logline: "Two musicians witness a gangland massacre and flee Chicago disguised as women to join an all-female band.",
        teaches: "Comic mechanics  -- how to construct a situation with maximum logical pressure and then work every angle of it. Wilder believed a comedy should have three big laughs per page. Study the structure of every joke.",
        url: "https://www.imsdb.com/scripts/Some-Like-It-Hot.html",
        source: "IMSDB",
        lessonLink: "/learn/what-a-scene-does",
        lessonLabel: "What a scene does",
      },
      {
        title: "The Big Lebowski",
        writer: "Joel & Ethan Coen",
        year: 1998,
        logline: "A case of mistaken identity pulls a lazy Los Angeles bowler into a kidnapping plot he has no interest in solving.",
        teaches: "Anti-structure as structure. The Dude is a detective who doesn't want to detect, in a mystery that doesn't resolve cleanly. The film works because its voice is so consistent  -- every scene sounds like the Dude sees the world.",
        url: "https://www.imsdb.com/scripts/Big-Lebowski,-The.html",
        source: "IMSDB",
        lessonLink: "/learn/character-voice",
        lessonLabel: "Character voice",
      },
      {
        title: "Sideways",
        writer: "Alexander Payne & Jim Taylor",
        year: 2004,
        logline: "Two middle-aged friends take a week-long road trip through California wine country before one of them gets married.",
        teaches: "Character as comedy. Every joke in Sideways comes from who Miles and Jack are  -- not from plot contrivance. The film is also a study in want vs. need: Miles wants Pinot; what he needs is to stop punishing himself.",
        url: "https://www.imsdb.com/scripts/Sideways.html",
        source: "IMSDB",
        lessonLink: "/learn/want-vs-need",
        lessonLabel: "Want vs. need",
      },
      {
        title: "Groundhog Day",
        writer: "Danny Rubin & Harold Ramis",
        year: 1993,
        logline: "A cynical TV weatherman is trapped in a time loop, forced to relive the same day in a small Pennsylvania town until he changes.",
        teaches: "Premise as moral structure. The loop is not a sci-fi gimmick  -- it is a mechanism that forces the character to confront who he is, repeatedly, until he becomes someone worth the story. The screenplay is a perfect machine.",
        url: "https://www.imsdb.com/scripts/Groundhog-Day.html",
        source: "IMSDB",
        lessonLink: "/learn/character-arc",
        lessonLabel: "Character arc",
      },
    ],
  },
  {
    label: "Independent & Personal",
    description: "Scripts that made a career out of a very specific vision. Study these for how personal material becomes universal when rendered with enough specificity.",
    scripts: [
      {
        title: "Manchester by the Sea",
        writer: "Kenneth Lonergan",
        year: 2016,
        logline: "A handyman becomes guardian of his nephew after his brother dies, forcing him to return to the town where he was once destroyed.",
        teaches: "The ghost as the whole story. Lee Chandler cannot change  -- not because the screenplay is pessimistic, but because what happened to him exceeds what narrative can fix. Lonergan refuses the conventional redemption arc and the film is devastating because of it.",
        url: "https://www.imsdb.com/scripts/Manchester-by-the-Sea.html",
        source: "IMSDB",
        lessonLink: "/learn/ghost",
        lessonLabel: "The ghost",
      },
      {
        title: "Lady Bird",
        writer: "Greta Gerwig",
        year: 2017,
        logline: "A headstrong Sacramento teenager navigates her senior year of high school, her relationship with her mother, and her desire to leave.",
        teaches: "How to write specificity as universality. Lady Bird is absolutely particular to Sacramento, to 2002, to that family  -- and that precision is what makes it universal. Also: how to write a mother-daughter relationship where both characters are fully right.",
        url: "https://deadline.com/wp-content/uploads/2018/03/lady-bird-script-greta-gerwig.pdf",
        source: "Deadline (PDF)",
        lessonLink: "/learn/relationship-pairs",
        lessonLabel: "Relationship pairs",
      },
      {
        title: "Boyhood",
        writer: "Richard Linklater",
        year: 2014,
        logline: "A boy grows up in Texas across twelve years, filmed with the same actors over the actual duration of his childhood.",
        teaches: "Anti-plot as structure. Boyhood has no protagonist goal, no antagonist, no conventional arc  -- and holds the audience completely because the emotional stakes (watching a person grow up) are enough. A study in what story actually requires.",
        url: "https://deadline.com/wp-content/uploads/2014/07/boyhood-screenplay.pdf",
        source: "Deadline (PDF)",
        lessonLink: "/learn/theme",
        lessonLabel: "Theme",
      },
      {
        title: "Lost in Translation",
        writer: "Sofia Coppola",
        year: 2003,
        logline: "A fading movie star and a young woman both adrift in Tokyo form an unexpected connection.",
        teaches: "Mood as structure. The film barely has plot  -- it has atmosphere, loneliness, and two precise performances. Coppola writes environment as character: Tokyo is not a backdrop, it is pressure. Study how she uses space and silence.",
        url: "https://www.imsdb.com/scripts/Lost-in-Translation.html",
        source: "IMSDB",
        lessonLink: "/learn/subtext",
        lessonLabel: "Subtext",
      },
      {
        title: "Moonrise Kingdom",
        writer: "Wes Anderson & Roman Coppola",
        year: 2012,
        logline: "Two twelve-year-olds fall in love and run away together on a New England island, causing a community-wide search.",
        teaches: "Voice as world-building. Anderson's scripts are inseparable from his visual style  -- the deadpan dialogue, the precise formality, the emotional honesty buried in artifice. Study how a consistent authorial perspective creates a coherent world.",
        url: "https://deadline.com/wp-content/uploads/2013/10/moonrise-kingdom.pdf",
        source: "Deadline (PDF)",
        lessonLink: "/learn/character-voice",
        lessonLabel: "Character voice",
      },
    ],
  },
  {
    label: "Horror & Thriller",
    description: "Scripts that generate dread through craft rather than effects. Study these for economy, tension, and how genre can carry serious themes.",
    scripts: [
      {
        title: "Alien",
        writer: "Dan O'Bannon",
        year: 1979,
        logline: "The crew of a commercial space freighter investigates a distress signal and brings something terrible back aboard.",
        teaches: "Economy and withholding. O'Bannon describes the creature in fragments  -- we never see it whole until late in the film. How to build dread through suggestion and the exploitation of what the audience cannot see.",
        url: "https://www.imsdb.com/scripts/Alien.html",
        source: "IMSDB",
        lessonLink: "/learn/tension-without-action",
        lessonLabel: "Tension without action",
      },
      {
        title: "The Silence of the Lambs",
        writer: "Ted Tally",
        year: 1991,
        logline: "An FBI trainee seeks help from an imprisoned cannibal psychiatrist to catch a serial killer who skins his victims.",
        teaches: "Dialogue as threat. Every conversation between Clarice and Hannibal is a negotiation with multiple layers  -- what is said, what is withheld, what is offered, and what is taken. Also: how to make the helper more frightening than the antagonist.",
        url: "https://www.imsdb.com/scripts/Silence-of-the-Lambs,-The.html",
        source: "IMSDB",
        lessonLink: "/learn/dialogue-subtext",
        lessonLabel: "Dialogue & subtext",
      },
      {
        title: "Hereditary",
        writer: "Ari Aster",
        year: 2018,
        logline: "A family unravels after the death of their secretive grandmother, as terrifying evidence of a dark inheritance emerges.",
        teaches: "Genre as grief. Hereditary works as horror and as a precise portrait of a family destroying itself under unbearable loss. Aster understands that true horror is not the supernatural  -- it is the damage families do to each other.",
        url: "https://deadline.com/wp-content/uploads/2018/06/hereditary_script.pdf",
        source: "Deadline (PDF)",
        lessonLink: "/learn/ghost",
        lessonLabel: "The ghost",
      },
      {
        title: "Three Billboards Outside Ebbing, Missouri",
        writer: "Martin McDonagh",
        year: 2017,
        logline: "A grieving mother rents three billboards to challenge the local police chief over the unsolved murder of her daughter.",
        teaches: "Moral complexity without resolution. McDonagh refuses to make any character simply right or wrong  -- each person who seems monstrous turns out to have depth, and each person who seems righteous turns out to have a cost. The film changes who you're rooting for three times.",
        url: "https://deadline.com/wp-content/uploads/2017/12/three_billboards_script_martin_mcdonagh.pdf",
        source: "Deadline (PDF)",
        lessonLink: "/learn/antagonist",
        lessonLabel: "Antagonist",
      },
    ],
  },
  {
    label: "Classics",
    description: "Screenplays that defined what cinema could do. These are the texts that screenwriting teachers quote  -- read them as primary sources, not summaries.",
    scripts: [
      {
        title: "Sunset Boulevard",
        writer: "Billy Wilder, Charles Brackett & D.M. Marshman Jr.",
        year: 1950,
        logline: "A faded silent film star takes in a desperate screenwriter and plots her return to Hollywood as his situation grows increasingly dangerous.",
        teaches: "Unreliable narrator in a visual medium  -- the film is narrated by a dead man. How to build noir atmosphere through production design described in prose. Wilder's script is also a ruthless study of self-delusion as character.",
        url: "https://www.imsdb.com/scripts/Sunset-Blvd..html",
        source: "IMSDB",
        lessonLink: "/learn/ghost",
        lessonLabel: "The ghost",
      },
      {
        title: "Casablanca",
        writer: "Julius J. Epstein, Philip G. Epstein & Howard Koch",
        year: 1942,
        logline: "A cynical American nightclub owner in wartime Casablanca must choose between his love for a woman and helping her Resistance leader husband escape the Nazis.",
        teaches: "The most quoted film for a reason: every scene has a subtext. Rick never says what he feels  -- everything is inference, deflection, and action. Study especially the cafe scene and the airport finale for how to write maximum emotional content with minimum words.",
        url: "https://www.imsdb.com/scripts/Casablanca.html",
        source: "IMSDB",
        lessonLink: "/learn/dialogue-subtext",
        lessonLabel: "Dialogue & subtext",
      },
      {
        title: "All About Eve",
        writer: "Joseph L. Mankiewicz",
        year: 1950,
        logline: "An aging Broadway actress is slowly usurped by her seemingly devoted young fan.",
        teaches: "The long scene. Mankiewicz wrote dialogue that would be considered impossibly dense by modern standards  -- and it works because the wit is precise and every line reveals character. A master class in theatrical dialogue transplanted to film.",
        url: "https://www.imsdb.com/scripts/All-About-Eve.html",
        source: "IMSDB",
        lessonLink: "/learn/dialogue-subtext",
        lessonLabel: "Dialogue & subtext",
      },
      {
        title: "Rear Window",
        writer: "John Michael Hayes",
        year: 1954,
        logline: "A photographer confined to a wheelchair after breaking his leg suspects his neighbor of murder.",
        teaches: "Constraint as creative engine. The entire film takes place from a single location. Hayes solves the problem of a static protagonist by making the window itself the narrative device  -- every scene is a frame within a frame.",
        url: "https://www.imsdb.com/scripts/Rear-Window.html",
        source: "IMSDB",
        lessonLink: "/learn/location-as-character",
        lessonLabel: "Location as character",
      },
      {
        title: "Apocalypse Now",
        writer: "John Milius & Francis Ford Coppola",
        year: 1979,
        logline: "A Vietnam War captain travels upriver into Cambodia to assassinate a rogue Special Forces colonel who has gone insane with power.",
        teaches: "The road narrative and escalating surrealism. Each stop on Willard's journey is stranger than the last, building a picture of institutional madness. The script also contains some of the most precise scene description in American cinema.",
        url: "https://www.imsdb.com/scripts/Apocalypse-Now.html",
        source: "IMSDB",
        lessonLink: "/learn/act-breaks",
        lessonLabel: "Act breaks",
      },
    ],
  },
  {
    label: "Action & Genre",
    description: "Scripts that built or reinvented their genres. Study these to understand how craft constraints within genre can force creative solutions.",
    scripts: [
      {
        title: "Die Hard",
        writer: "Jeb Stuart & Steven de Souza",
        year: 1988,
        logline: "A New York cop visiting his estranged wife in Los Angeles becomes the only hope when terrorists seize her office building.",
        teaches: "The unity of place thriller. Die Hard works because it solves the problem of containment  -- every escalation emerges logically from the space. Also: a protagonist whose flaw (stubbornness) is simultaneously his greatest strength.",
        url: "https://www.imsdb.com/scripts/Die-Hard.html",
        source: "IMSDB",
        lessonLink: "/learn/location-as-character",
        lessonLabel: "Location as character",
      },
      {
        title: "Aliens",
        writer: "James Cameron",
        year: 1986,
        logline: "Ripley returns to the planet where her crew found the alien with a unit of Marines  -- and the situation is worse than anyone expected.",
        teaches: "The sequel that surpasses the original by changing the genre. Cameron's script notes describe action with a precision that borders on poetry. Also: Ripley's transformation from survivor to warrior  -- a character arc earned entirely through action, not dialogue.",
        url: "https://www.imsdb.com/scripts/Aliens.html",
        source: "IMSDB",
        lessonLink: "/learn/character-arc",
        lessonLabel: "Character arc",
      },
      {
        title: "The Fugitive",
        writer: "Jeb Stuart & David Twohy",
        year: 1993,
        logline: "A doctor wrongly convicted of his wife's murder escapes while being transported to prison and races to find the real killer.",
        teaches: "Parallel protagonists  -- the fugitive and the marshal pursuing him are equally sympathetic and equally committed to their goals. The script also demonstrates how to write continuous momentum: almost no scene ends without a new complication.",
        url: "https://www.imsdb.com/scripts/Fugitive,-The.html",
        source: "IMSDB",
        lessonLink: "/learn/want-vs-need",
        lessonLabel: "Want vs. need",
      },
      {
        title: "Speed",
        writer: "Graham Yost",
        year: 1994,
        logline: "A cop must prevent a bomb on a city bus from exploding by keeping it above 50 mph.",
        teaches: "Premise as structure. The concept contains its own dramatic logic  -- the speed limit is the ticking clock, the bus is the arena, and every complication must emerge from those constraints. A study in how a strong premise solves most plotting problems.",
        url: "https://www.imsdb.com/scripts/Speed.html",
        source: "IMSDB",
        lessonLink: "/learn/tension-without-action",
        lessonLabel: "Tension without action",
      },
    ],
  },
  {
    label: "Science Fiction",
    description: "Scripts that use speculative premises to examine what it means to be human. Study these for how world-building serves theme rather than spectacle.",
    scripts: [
      {
        title: "Blade Runner",
        writer: "Hampton Fancher & David Peoples",
        year: 1982,
        logline: "A retired detective is called back to hunt down rogue androids who have returned to Earth.",
        teaches: "Atmosphere as argument. Every visual choice in the script supports the film's central question: what makes someone human? Read the screenplay to see how world-building functions as theme, not decoration.",
        url: "https://www.imsdb.com/scripts/Blade-Runner.html",
        source: "IMSDB",
        lessonLink: "/learn/theme",
        lessonLabel: "Theme",
      },
      {
        title: "2001: A Space Odyssey",
        writer: "Stanley Kubrick & Arthur C. Clarke",
        year: 1968,
        logline: "A space mission to Jupiter following the discovery of a mysterious monolith evolves into something beyond human comprehension.",
        teaches: "The screenplay that proves film can work without conventional narrative. Kubrick and Clarke use the fewest possible words to describe the most ambitious possible images. Study the HAL sequence for how to write menace through restraint.",
        url: "https://www.imsdb.com/scripts/2001-A-Space-Odyssey.html",
        source: "IMSDB",
        lessonLink: "/learn/subtext",
        lessonLabel: "Subtext",
      },
      {
        title: "The Matrix",
        writer: "The Wachowskis",
        year: 1999,
        logline: "A computer programmer discovers that reality is a simulation and joins a rebellion against the machines that created it.",
        teaches: "Concept and action working in tandem. Every action sequence in The Matrix is also a philosophical statement about the nature of the world. The Wachowskis never let the spectacle outrun the idea  -- each fight is also an argument.",
        url: "https://www.imsdb.com/scripts/Matrix,-The.html",
        source: "IMSDB",
        lessonLink: "/learn/theme",
        lessonLabel: "Theme",
      },
      {
        title: "Arrival",
        writer: "Eric Heisserer",
        year: 2016,
        logline: "A linguist is recruited to communicate with aliens who have landed on Earth, and the process changes her understanding of time.",
        teaches: "Structure as theme. The film is about how language shapes perception of time  -- and the screenplay's structure embodies that: the ending recontextualizes everything that came before. Read it twice. The second reading is different.",
        url: "https://deadline.com/wp-content/uploads/2017/01/arrival-script.pdf",
        source: "Deadline (PDF)",
        lessonLink: "/learn/plant-payoff",
        lessonLabel: "Plant and payoff",
      },
      {
        title: "Ex Machina",
        writer: "Alex Garland",
        year: 2015,
        logline: "A programmer is selected to administer the Turing test to an AI with a humanoid robot body  -- and begins to question who is testing whom.",
        teaches: "Chamber drama  -- the whole film is three characters in a contained space. Garland uses architecture to control information: what each character knows, and when. Also a study in how to write an antagonist whose menace is entirely ambiguous until the end.",
        url: "https://www.imsdb.com/scripts/Ex-Machina.html",
        source: "IMSDB",
        lessonLink: "/learn/dialogue-subtext",
        lessonLabel: "Dialogue & subtext",
      },
    ],
  },
  {
    label: "Drama",
    description: "Scripts where human behavior under pressure is the primary subject. Study these for character precision, emotional honesty, and the architecture of a difficult scene.",
    scripts: [
      {
        title: "12 Angry Men",
        writer: "Reginald Rose",
        year: 1957,
        logline: "Twelve jurors deliberate the murder case of a teenager  -- and one man's reasonable doubt forces them all to confront their assumptions.",
        teaches: "The single location drama. Every dramatic element  -- tension, reversal, revelation, transformation  -- is achieved through people talking in a room. Study how Rose staggers revelations and manages the gradual shifting of power.",
        url: "https://www.imsdb.com/scripts/12-Angry-Men.html",
        source: "IMSDB",
        lessonLink: "/learn/arguments",
        lessonLabel: "Writing arguments",
      },
      {
        title: "Good Will Hunting",
        writer: "Matt Damon & Ben Affleck",
        year: 1997,
        logline: "A janitor at MIT with a genius IQ resists his own potential while a therapist slowly breaks through his defenses.",
        teaches: "The mentor relationship as story engine. Every session between Will and Sean is a negotiation with specific dramatic stakes. Also: a case study in Want vs. Need  -- Will wants to be left alone; what he needs is permission to be loved.",
        url: "https://www.imsdb.com/scripts/Good-Will-Hunting.html",
        source: "IMSDB",
        lessonLink: "/learn/want-vs-need",
        lessonLabel: "Want vs. need",
      },
      {
        title: "American Beauty",
        writer: "Alan Ball",
        year: 1999,
        logline: "A middle-aged suburbanite undergoes a midlife crisis as his family disintegrates around him.",
        teaches: "The circular ending done correctly. The film opens with its ending and earns it. Ball also demonstrates how to give every character a fully coherent (if delusional) worldview  -- nobody in American Beauty is simply wrong, they are wrong in precise and specific ways.",
        url: "https://www.imsdb.com/scripts/American-Beauty.html",
        source: "IMSDB",
        lessonLink: "/learn/the-ending",
        lessonLabel: "How to end a story",
      },
      {
        title: "Crash",
        writer: "Paul Haggis & Bobby Moresco",
        year: 2004,
        logline: "Multiple strangers in Los Angeles intersect over 36 hours in a web of racial tension, violence, and unexpected grace.",
        teaches: "Ensemble structure and the ensemble pivot  -- how to run parallel storylines so they illuminate each other rather than competing. Every character has a clear want, need, and ghost. Study how Haggis manages the emotional temperature across so many threads.",
        url: "https://www.imsdb.com/scripts/Crash.html",
        source: "IMSDB",
        lessonLink: "/learn/theme",
        lessonLabel: "Theme",
      },
    ],
  },
]

const scriptSources = [
  { name: "IMSDB  -- Internet Movie Script Database", url: "https://www.imsdb.com/", note: "The largest free library of produced screenplays. Thousands of scripts, no cost." },
  { name: "Simply Scripts", url: "https://www.simplyscripts.com/", note: "Produced films, unproduced specs, and original scripts. Useful for studying spec format." },
  { name: "ScreenplayDB", url: "https://www.screenplaydb.com/", note: "Clean, readable format. Good for mobile reading. Curated selection." },
  { name: "WGA Script Archive", url: "https://www.wga.org/", note: "The Writers Guild of America maintains resources for member scripts. Registration required for some." },
  { name: "Screencraft Script Library", url: "https://screencraft.org/scripts/", note: "Curated with context about why each script matters. Good starting point." },
  { name: "Daily Script", url: "https://www.dailyscript.com/", note: "Classic Hollywood scripts. Particularly strong on films from the 1970s–2000s." },
]

export default function FamousScripts() {
  return (
    <div style={{ background: 'var(--off-white)', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #1e3a0c 0%, var(--green) 55%, #3a6b1c 100%)', padding: '96px 24px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: '20px' }}>
            Script Library
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 6vw, 54px)', fontWeight: '700', color: '#fff', lineHeight: '1.12', marginBottom: '24px' }}>
            Famous Screenplays to Read
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '18px', lineHeight: '1.75', color: 'rgba(255,255,255,0.72)', maxWidth: '580px', margin: '0 auto 12px' }}>
            Reading produced scripts is how working writers learn. Every script here is free and legal. Every annotation explains what the script actually teaches  -- not just what happens in it.
          </p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'rgba(255,255,255,0.45)', marginBottom: '36px' }}>
            40+ scripts across structure, dialogue, character, genre, and more.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/learn" style={{ display: 'inline-block', background: '#fff', color: 'var(--green)', fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '14px', padding: '13px 28px', borderRadius: '8px', textDecoration: 'none' }}>
              Read the craft lessons
            </Link>
            <Link href="/auth" style={{ display: 'inline-block', background: 'transparent', color: '#fff', fontFamily: 'var(--font-ui)', fontWeight: '600', fontSize: '14px', padding: '13px 28px', borderRadius: '8px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.35)' }}>
              Write your own  -- free
            </Link>
          </div>
        </div>
      </section>

      {/* Category nav */}
      <section style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '14px 24px', position: 'sticky', top: '60px', zIndex: 10 }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '2px' }}>
          {categories.map(cat => (
            <a key={cat.label} href={`#cat-${cat.label.toLowerCase()}`} style={{ display: 'inline-block', whiteSpace: 'nowrap', padding: '5px 14px', borderRadius: '20px', background: 'var(--off-white)', border: '1px solid var(--border)', fontFamily: 'var(--font-ui)', fontSize: '12px', fontWeight: '500', color: 'var(--text-mid)', textDecoration: 'none' }}>
              {cat.label}
            </a>
          ))}
          <a href="#sources" style={{ display: 'inline-block', whiteSpace: 'nowrap', padding: '5px 14px', borderRadius: '20px', background: 'var(--off-white)', border: '1px solid var(--border)', fontFamily: 'var(--font-ui)', fontSize: '12px', fontWeight: '500', color: 'var(--text-mid)', textDecoration: 'none' }}>
            Where to find scripts
          </a>
        </div>
      </section>

      {/* How to read a script  -- SEO content block */}
      <section style={{ maxWidth: '760px', margin: '0 auto', padding: '56px 24px 0' }}>
        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '14px', padding: '32px 36px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'var(--green)', marginBottom: '14px' }}>
            How to read a screenplay
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '12px' }}>
            Reading a script is different from reading a novel, and different again from watching a film. A screenplay is a blueprint  -- it describes only what can be seen or heard. Reading it trains your eye to see how structure, scene work, and dialogue function in isolation from performance, cinematography, and score.
          </p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '12px' }}>
            The most useful practice: read a scene from a script, then watch the scene in the film. Notice what the script communicates that didn't make it to screen. Notice what the director added that wasn't in the script. The gap between the two is where craft lives.
          </p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.8', color: 'var(--text-mid)' }}>
            Read one script per week. Take notes on what the writer does with scene transitions, how they enter and exit scenes, and how much each line of dialogue does. After ten scripts, you'll have internalized more about screenwriting craft than any textbook can teach. See our <Link href="/learn" style={{ color: 'var(--green)', textDecoration: 'none', fontWeight: '600' }}>craft library</Link> for the principles behind what you're reading.
          </p>
        </div>
      </section>

      {/* Script categories */}
      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '48px 24px 80px' }}>
        {categories.map(cat => (
          <section key={cat.label} id={`cat-${cat.label.toLowerCase()}`} style={{ marginBottom: '72px' }}>
            <div style={{ marginBottom: '24px' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '8px' }}>
                {cat.label}
              </h2>
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-soft)', lineHeight: '1.6', maxWidth: '640px' }}>
                {cat.description}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {cat.scripts.map(script => (
                <article key={script.title} className="script-card" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '14px', padding: '28px 32px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', flexWrap: 'wrap', marginBottom: '10px' }}>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '3px' }}>
                        {script.title}
                      </h3>
                      <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'var(--text-soft)', letterSpacing: '0.04em' }}>
                        {script.writer}  -- {script.year}
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexShrink: 0 }}>
                      {script.lessonLink && (
                        <Link href={script.lessonLink} style={{ display: 'inline-block', background: 'var(--green-pale)', color: 'var(--green)', fontFamily: 'var(--font-ui)', fontWeight: '600', fontSize: '11px', padding: '5px 11px', borderRadius: '20px', textDecoration: 'none', border: '1px solid var(--green-border)', whiteSpace: 'nowrap' }}>
                          Study: {script.lessonLabel}
                        </Link>
                      )}
                      <a href={script.url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: 'var(--green)', color: '#fff', fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '12px', padding: '6px 13px', borderRadius: '7px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                        Read script
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                          <path d="M2 9L9 2M9 2H5M9 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>

                  <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-soft)', lineHeight: '1.6', marginBottom: '12px', fontStyle: 'italic' }}>
                    {script.logline}
                  </p>

                  <div style={{ borderLeft: '3px solid var(--green-light)', paddingLeft: '14px' }}>
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '5px' }}>What it teaches</p>
                    <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.7' }}>
                      {script.teaches}
                    </p>
                  </div>

                  <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: 'var(--text-soft)', marginTop: '12px', letterSpacing: '0.04em' }}>
                    Source: {script.source}
                  </p>
                </article>
              ))}
            </div>
          </section>
        ))}

        {/* Where to find more scripts */}
        <section id="sources" style={{ marginBottom: '0' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '8px' }}>
            Where to find screenplays online
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-soft)', lineHeight: '1.6', maxWidth: '640px', marginBottom: '24px' }}>
            These are the legitimate, free sources used by working screenwriters. Avoid PDFs from unknown sites  -- scripts circulate in corrupted or watermarked forms that are hard to read. These sources are clean.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
            {scriptSources.map(s => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="source-link" style={{ display: 'block', background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '18px 20px', textDecoration: 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '6px' }}>
                  <span style={{ fontFamily: 'var(--font-ui)', fontWeight: '600', fontSize: '13px', color: 'var(--text-dark)', lineHeight: '1.4' }}>{s.name}</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0, color: 'var(--text-soft)', marginTop: '2px' }}>
                    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5.5M9.5 2.5V6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--text-soft)', lineHeight: '1.5' }}>{s.note}</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* CTA */}
      <section style={{ background: 'var(--green)', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: '700', color: '#fff', marginBottom: '16px' }}>
            Reading is half of writing.
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', color: 'rgba(255,255,255,0.72)', lineHeight: '1.75', marginBottom: '32px' }}>
            The other half is putting what you've learned into practice. Eve gives you the workspace to outline, develop characters, track scenes, and build your story  -- organized around the same frameworks the scripts above use.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/auth" style={{ display: 'inline-block', background: '#fff', color: 'var(--green)', fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '14px', padding: '13px 28px', borderRadius: '8px', textDecoration: 'none' }}>
              Start your screenplay  -- free
            </Link>
            <Link href="/learn" style={{ display: 'inline-block', background: 'transparent', color: '#fff', fontFamily: 'var(--font-ui)', fontWeight: '600', fontSize: '14px', padding: '13px 28px', borderRadius: '8px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.35)' }}>
              Study the craft
            </Link>
          </div>
        </div>
      </section>

    <style>{`
      .script-card { transition: box-shadow 0.2s; }
      .script-card:hover { box-shadow: 0 4px 20px rgba(26,20,15,0.08); }
      .source-link { transition: border-color 0.2s; }
      .source-link:hover { border-color: var(--green-border) !important; }
    `}</style>
    </div>
  )
}
