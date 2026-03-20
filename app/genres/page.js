'use client'
import { useState } from 'react'
import Link from 'next/link'

const genres = [
  {
    id: 'thriller',
    name: 'Thriller',
    type: 'Film & Fiction',
    oneLiner: 'Sustained dread through a protagonist under threat who must act to survive.',
    history: "Thriller as a distinct category emerged in the 1920s and 30s through Alfred Hitchcock's British films—The 39 Steps (1935) and The Lady Vanishes (1938) established the innocent-person-caught-in-conspiracy template that still drives the genre. The word itself entered popular use through John Buchan's novels. Post-WWII, Cold War anxiety supercharged the form: espionage thrillers, paranoid conspiracy narratives, and the psychological thriller (a subgenre Hitchcock essentially invented with Psycho in 1960) all proliferated. By the 1970s, the political thriller absorbed Watergate-era distrust. Today the genre is the largest commercial fiction category in the English language.",
    characteristics: [
      'Protagonist under direct, escalating threat throughout',
      'Clock or deadline creating irreversible pressure',
      'Information asymmetry—the reader often knows more than the hero, or less',
      'Stakes that feel personal before they feel global',
      'Reversals: apparent safety destroyed, apparent threat revealed as greater',
      'Antagonist with clear logic and real capability',
    ],
    tropes: [
      'The ordinary person pulled into extraordinary danger',
      'The wrong place at the wrong time inciting incident',
      'Corrupt authority making official help useless',
      'The mentor or ally revealed as the villain',
      'The ticking clock finale',
    ],
    examples: [
      { title: 'The Silence of the Lambs', year: 1991, medium: 'Film', note: 'Psychological and procedural thriller fused. Every Lecter scene redefines the genre standard for menace through dialogue.' },
      { title: 'Gone Girl', year: 2012, medium: 'Novel/Film', note: 'Domestic thriller and unreliable narrator. Flynn weaponized the genre against itself—the twist is structural, not just plot.' },
      { title: 'No Country for Old Men', year: 2005, medium: 'Novel/Film', note: 'Anti-thriller: refuses every conventional thriller satisfaction. The antagonist does not get a final scene. The hero does not confront him. The subversion is the argument.' },
      { title: 'The Girl with the Dragon Tattoo', year: 2005, medium: 'Novel', note: 'Investigative thriller with procedural depth. Larsson showed that thriller could carry serious social critique without losing pace.' },
      { title: 'Rear Window', year: 1954, medium: 'Film', note: 'Constraint as engine. Hitchcock builds maximum tension from a completely static protagonist. The most instructive thriller ever made.' },
    ],
    subgenres: ['Psychological Thriller', 'Legal Thriller', 'Medical Thriller', 'Spy Thriller', 'Political Thriller', 'Tech Thriller', 'Domestic Thriller'],
  },
  {
    id: 'horror',
    name: 'Horror',
    type: 'Film & Fiction',
    oneLiner: 'Controlled encounter with fear—the story creates dread, then delivers or denies its release.',
    history: "Horror is one of the oldest narrative forms—the Gothic novel emerged in 1764 with Horace Walpole's The Castle of Otranto and was systematized by Ann Radcliffe, who separated terror (dread of the unknown) from horror (confrontation with the monstrous). Mary Shelley's Frankenstein (1818) introduced science as horror's engine, a thread running to Cronenberg and Black Mirror. Poe defined psychological horror in the 1840s. Stoker's Dracula (1897) codified the vampire archetype. Film horror developed in German Expressionism (Nosferatu, 1922), became a studio genre in the 1930s Universal monsters cycle, was reinvented by Psycho (1960), slasher-codified by Halloween (1978), deconstructed by Scream (1996), and elevated to literary respectability by Shirley Jackson, Stephen King, and contemporary writers like Carmen Maria Machado. Ari Aster and Jordan Peele have recently proved that horror can carry major thematic weight at the box office.",
    characteristics: [
      'Dread built before the threat is visible',
      'Something wrong with the world the protagonist cannot convince others of',
      'The monster as metaphor—always stands for something beyond itself',
      'Atmosphere carrying as much weight as plot',
      'Violation of safety—the home, the body, the family are never safe',
      'Ambiguity about whether the supernatural is real or psychological',
    ],
    tropes: [
      'Do not go in the basement (characters making obviously bad decisions)',
      'The final girl',
      'The thing in the corner of the frame',
      'The unreliable safe space (the house that should protect)',
      'The child as conduit for supernatural',
      'Isolation cutting off help',
    ],
    examples: [
      { title: 'Hereditary', year: 2018, medium: 'Film', note: 'Horror as grief. Aster uses genre mechanics to explore family trauma. The horror is real and metaphorical simultaneously—neither cancels the other.' },
      { title: 'The Haunting of Hill House', year: 1959, medium: 'Novel', note: "Shirley Jackson's novel is the definitive haunted house story. First sentence is one of the best in American fiction. Study how she makes architecture feel malevolent." },
      { title: 'The Shining', year: 1977, medium: 'Novel', note: "King at his structural best. The Overlook is a character. Jack's arc is the most precise negative arc in popular fiction—each step toward madness is causally earned." },
      { title: 'Get Out', year: 2017, medium: 'Film', note: 'Social horror. Peele embeds critique inside genre so completely that removing either destroys the other. Plant-and-payoff executed at a level few genre films achieve.' },
      { title: 'Annihilation', year: 2014, medium: 'Novel', note: 'Weird fiction meets literary horror. VanderMeer generates dread through refusal to explain. The mystery deepens rather than resolves—the questions are the horror.' },
    ],
    subgenres: ['Psychological Horror', 'Supernatural Horror', 'Body Horror', 'Cosmic Horror (Lovecraftian)', 'Gothic Horror', 'Slasher', 'Haunted House', 'Folk Horror', 'Quiet Horror'],
  },
  {
    id: 'scifi',
    name: 'Science Fiction',
    type: 'Film & Fiction',
    oneLiner: 'A speculative premise used to examine what it means to be human—defamiliarization as argument.',
    history: "The genre originates in the 18th century philosophical tale but was named and systematized in the 1920s by Hugo Gernsback, whose Amazing Stories pulp magazine established science fiction as a commercial category. The Golden Age (1940s-50s), led by Asimov, Heinlein, and Clarke, prioritized ideas and extrapolation. The New Wave of the 1960s and 70s (Le Guin, Ballard, Delany) imported literary technique and political consciousness. Cyberpunk emerged in 1984 with Gibson's Neuromancer, defining the genre's relationship to technology, corporatism, and identity. Contemporary SF has expanded into climate fiction, Afrofuturism, and post-humanist speculation. Film SF runs parallel: Fritz Lang's Metropolis (1927) established visual vocabulary; 2001 (1968) proved the genre could be art; Star Wars (1977) made it the dominant commercial film form of the late 20th century.",
    characteristics: [
      'The novum—one speculative change to the world, rigorously extrapolated',
      'World-building that serves theme rather than spectacle',
      'Technology as character or antagonist, not just setting',
      'The familiar made strange to allow examination of what we take for granted',
      'Moral complexity around scientific progress and its costs',
      'The question of what defines humanity, usually under pressure',
    ],
    tropes: [
      'First contact with the genuinely alien',
      'The dystopian state as warning',
      'The created being (robot, clone, AI) asking to be recognized',
      'Time travel and its paradoxes',
      'The generation ship or isolated community as microcosm',
      'The scientist whose discovery destroys what they love',
    ],
    examples: [
      { title: 'The Left Hand of Darkness', year: 1969, medium: 'Novel', note: "Le Guin removes gender from an alien society to examine what gender actually does. Hugo and Nebula winner. The template for using SF's speculative license to make arguments that realism cannot." },
      { title: '2001: A Space Odyssey', year: 1968, medium: 'Film', note: 'Kubrick and Clarke prove film SF can function as pure visual argument. The minimal dialogue, the HAL sequence, the final act—all prove the genre can carry philosophy without dialogue.' },
      { title: 'Blade Runner', year: 1982, medium: 'Film', note: "Philip K. Dick's Do Androids Dream of Electric Sheep? adapted. Every visual choice is an argument about humanity. The question of who is and is not human is never resolved—correctly." },
      { title: 'Never Let Me Go', year: 2005, medium: 'Novel', note: 'Ishiguro uses SF premise to examine how humans comply with their own destruction. Not a genre novel in feel—a Booker-shortlisted literary novel that happens to have a speculative premise.' },
      { title: 'Arrival', year: 2016, medium: 'Film', note: 'The SF premise (nonlinear language reshaping perception of time) IS the emotional argument. When structure and theme are this fused, the film is doing what only SF can do.' },
    ],
    subgenres: ['Hard SF (scientific accuracy)', 'Space Opera', 'Cyberpunk', 'Climate Fiction (Cli-Fi)', 'Biopunk', 'Solarpunk', 'Military SF', 'Time Travel', 'Afrofuturism', 'Post-Apocalyptic'],
  },
  {
    id: 'fantasy',
    name: 'Fantasy',
    type: 'Film & Fiction',
    oneLiner: 'A secondary world with its own consistent rules—the rules embody the moral and thematic argument of the work.',
    history: "Fantasy draws from mythology, folklore, and fairy tale—traditions far older than the novel. George MacDonald's 19th-century work established the literary fairy tale for adults. William Morris revived medieval romance. But the modern fantasy genre was essentially created by Tolkien: The Hobbit (1937) and The Lord of the Rings (1954-55) established the secondary world epic with internally consistent world-building, invented languages, and mythological depth. C.S. Lewis developed Christian allegorical fantasy in the same period. Le Guin brought SF rigor and political consciousness to fantasy with Earthsea (1968). In the 1980s and 90s, epic fantasy became the dominant commercial form. George R.R. Martin's A Song of Ice and Fire (1996) introduced moral complexity and consequence into what had been a largely idealized form. Tolkien's influence on film extended through Peter Jackson's adaptations (2001-03), which proved epic fantasy could achieve major commercial and critical success simultaneously.",
    characteristics: [
      'A secondary world with internally consistent rules (magic systems, geography, cosmology)',
      'The rules of the world embody thematic argument—magic costs something',
      'Mythological scope—the fate of the world is often at stake',
      'A protagonist crossing from one world state to another',
      'Ancient evil or corruption that the ordinary world has forgotten',
      'The hero who is chosen—and the cost of being chosen',
    ],
    tropes: [
      'The farm boy who is secretly destined for greatness',
      'The ancient prophecy that both enables and constrains',
      'The wise mentor who dies at the worst possible moment',
      'The dark lord with no apparent agenda beyond domination',
      'The magic system revealed to have a cost',
      'The fellowship assembled for the quest',
    ],
    examples: [
      { title: 'The Lord of the Rings', year: 1954, medium: 'Novel', note: "Tolkien invented modern fantasy world-building. The Shire, Mordor, Elvish languages—all are arguments about industrialization, war, and the destruction of pastoral England. The world is the thesis." },
      { title: 'A Wizard of Earthsea', year: 1968, medium: 'Novel', note: "Le Guin's fantasy: the magic has consequences, the hero is a person of color, the monster is the protagonist's shadow self. Every fantasy trope interrogated from the inside." },
      { title: 'Pan\'s Labyrinth', year: 2006, medium: 'Film', note: "Del Toro uses fantasy as a child's coping mechanism for fascist Spain. The question of whether the fantasy world is real is the film's central argument. Genre as psychological truth." },
      { title: 'The Name of the Wind', year: 2007, medium: 'Novel', note: "Rothfuss establishes character voice as fantasy's primary pleasure. Kvothe's unreliable autobiography is one of the most original narrative structures the genre has produced." },
      { title: 'Jonathan Strange and Mr Norrell', year: 2004, medium: 'Novel', note: "Clarke writes Regency fantasy as a fully realized alternative history with academic footnotes. The most literary fantasy novel of its era—Booker Prize longlist." },
    ],
    subgenres: ['Epic Fantasy', 'Dark Fantasy', 'Grimdark', 'Urban Fantasy', 'Fairy Tale Retelling', 'Mythic Fantasy', 'Low Fantasy', 'Portal Fantasy', 'Romantic Fantasy'],
  },
  {
    id: 'mystery',
    name: 'Mystery / Crime',
    type: 'Film & Fiction',
    oneLiner: 'A puzzle embedded in a moral world—the crime disrupts order, detection restores it.',
    history: "Poe invented the detective story in 1841 with 'The Murders in the Rue Morgue'—the locked room, the brilliant eccentric detective, the slow-witted companion serving as audience surrogate, and the solution revealed in a final scene are all Poe's. Doyle's Holmes stories (1887-1927) systematized the form and made it massively popular. The Golden Age (1920s-30s) produced Christie, Sayers, and Marsh—the puzzle-plot mystery at its purest. Chandler and Hammett's hardboiled school rejected the puzzle's artificiality for moral realism: the detective moves through a corrupt city, and the crime is never really solved because the corruption that caused it remains. Patricia Highsmith inverted the detective novel entirely—her books follow the criminal and make the reader complicit. James Ellroy's LA Quartet (1987-92) brought the hardboiled novel to its most extreme literary achievement. Nordic noir (Mankell, Larsson) showed the genre could carry serious social critique internationally.",
    characteristics: [
      'A crime (usually murder) that disrupts a social order',
      'A detective figure—professional, amateur, or accidental—who investigates',
      'Clues planted fairly for the reader to find',
      'Suspects with both motive and opportunity',
      'A revelation that recontextualizes everything that came before',
      'The restoration of order—or the failure to restore it',
    ],
    tropes: [
      'The seemingly impossible crime (locked room)',
      'The least likely suspect revealed',
      'The eccentric detective with one fatal weakness',
      'The unreliable witness whose testimony breaks the case',
      'The corrupt official obstructing justice',
      'The detective who breaks the rules to get the answer',
    ],
    examples: [
      { title: 'The Big Sleep', year: 1939, medium: 'Novel', note: "Chandler's prose style is the plot. Marlowe's voice is the argument that decency exists in a corrupt world even if it cannot clean the world up. Study the sentences above all." },
      { title: 'The Long Goodbye', year: 1953, medium: 'Novel', note: "The Edgar Award winner. Chandler at his most complex. Friendship and betrayal as the real mystery. Le Carre later said it was the most influential crime novel ever written." },
      { title: 'Chinatown', year: 1974, medium: 'Film', note: "Robert Towne's script is the genre's masterwork. The ending—where the detective's competence causes the tragedy—is the most devastating use of the hardboiled form." },
      { title: 'And Then There Were None', year: 1939, medium: 'Novel', note: "Christie's best-selling mystery novel of all time. The closed circle taken to its logical extreme. Every subsequent closed-location mystery is in its debt." },
      { title: 'Knives Out', year: 2019, medium: 'Film', note: "Rian Johnson inverts Agatha Christie: solves the mystery in act one and spends acts two and three on what that means. A masterclass in genre self-awareness." },
    ],
    subgenres: ['Cozy Mystery', 'Hardboiled / Noir', 'Police Procedural', 'Legal Thriller', 'Amateur Sleuth', 'Locked Room Mystery', 'Heist', 'True Crime (narrative nonfiction)', 'Nordic Noir'],
  },
  {
    id: 'romance',
    name: 'Romance',
    type: 'Film & Fiction',
    oneLiner: 'The central story is the development of a love relationship—the emotional arc IS the plot.',
    history: "Romance is the largest commercial fiction genre in the English language, generating over a billion dollars annually. Its roots are in the medieval romance tradition (Arthurian legend, courtly love), but the modern novel form was established by Samuel Richardson's Pamela (1740) and Clarissa (1748), which centered female interiority and courtship. Jane Austen perfected the form in the early 19th century—Pride and Prejudice (1813) remains the genre's defining text. The 20th century saw the rise of the mass-market romance paperback (Harlequin launched in 1949), which became a massive commercial category. Contemporary romance has diversified dramatically: subgenres now cover every orientation, background, and setting. The romance novel's central requirement—a HEA (Happily Ever After) or HFN (Happy For Now) ending—distinguishes it from women's fiction, where the love story may not resolve.",
    characteristics: [
      'The central relationship arc IS the primary plot',
      'A Happily Ever After or Happy For Now ending (genre requirement)',
      'Emotional interiority—access to the protagonist\'s feelings is the primary pleasure',
      'The obstacle—internal or external—that keeps the couple apart',
      'The black moment: it seems the relationship cannot survive',
      'Growth: both characters must change for the relationship to work',
    ],
    tropes: [
      'Enemies to lovers',
      'Forced proximity (stranded together, fake relationship)',
      'Second chance romance',
      'Grumpy sunshine (contrasting personalities)',
      'The big misunderstanding that nearly destroys the relationship',
      'The grand gesture that resolves the black moment',
    ],
    examples: [
      { title: 'Pride and Prejudice', year: 1813, medium: 'Novel', note: "The genre's founding text. Darcy and Elizabeth's relationship arc is the template: mutual misjudgment, forced proximity, gradual genuine understanding, earned resolution. Every romance since is in dialogue with it." },
      { title: 'Outlander', year: 1991, medium: 'Novel', note: "Diana Gabaldon fused romance with historical fiction and time travel. The genre's best example of how a love story can carry a huge, complex, historically grounded narrative." },
      { title: 'Normal People', year: 2018, medium: 'Novel', note: "Literary romance. Rooney writes a love story with no conventional beats—no grand gesture, no misunderstanding trope—and makes it devastating. Proof that romance can be literary without irony." },
      { title: 'Crazy Rich Asians', year: 2013, medium: 'Novel/Film', note: "Kevin Kwan uses romantic comedy to examine class, family pressure, and cultural identity. Genre as vehicle for something the plain realist novel would handle more clumsily." },
      { title: 'When Harry Met Sally', year: 1989, medium: 'Film', note: "The definitive romantic comedy screenplay. Nora Ephron's dialogue is the craft model. The structural question (can men and women be friends) is answered at exactly the right moment." },
    ],
    subgenres: ['Contemporary Romance', 'Historical Romance', 'Paranormal Romance', 'Romantic Comedy (Rom-Com)', 'Romantic Suspense', 'Sports Romance', 'Small Town Romance', 'Dark Romance'],
  },
  {
    id: 'literary',
    name: 'Literary Fiction',
    type: 'Fiction',
    oneLiner: 'Character and language as primary concerns—the how of the telling is inseparable from the what.',
    history: "Literary fiction is less a genre than a set of values: priority given to prose style, psychological depth, thematic complexity, and formal experimentation over plot mechanics or genre convention. The term itself is commercial and comparative—it defines itself against genre fiction, which is a reasonably recent distinction. In the 19th century there was no separation: Dickens, Hardy, and Tolstoy wrote what we would now call genre fiction (melodrama, sensation) with literary ambition simultaneously. The Modernist movement (Joyce, Woolf, Faulkner) separated literary fiction as a category by foregrounding form over story and making difficulty itself a value. The postmodern novel (Pynchon, DeLillo, Nabokov) extended this through metafiction and self-referentiality. Contemporary literary fiction has largely retreated from high modernist difficulty while retaining its commitment to prose style and psychological precision.",
    characteristics: [
      'Prose style as a primary pleasure—the sentences themselves reward attention',
      'Psychological depth over plot mechanics',
      'Ambiguity as a feature rather than a flaw',
      'Theme and form in dialogue—the structure embodies the argument',
      'Character interiority given more time than external event',
      'Resistance to easy resolution—the ending earns its complexity',
    ],
    tropes: [
      'The retrospective narrator looking back on a formative event',
      'The family as microcosm of social failure',
      'The single day or short time span as container for large meaning',
      'The unreliable narrator whose gap between claim and evidence IS the story',
      'The expatriate or immigrant negotiating between two worlds',
    ],
    examples: [
      { title: 'Mrs Dalloway', year: 1925, medium: 'Novel', note: "Woolf's stream of consciousness follows a single day in London. The formal achievement—maintaining interiority across multiple characters in real time—has never been surpassed." },
      { title: 'Beloved', year: 1987, medium: 'Novel', note: "Morrison fuses Gothic horror with literary fiction and historical tragedy. Pulitzer Prize winner. The form mirrors the trauma—the story cannot be told directly because it is too much to hold." },
      { title: 'A Little Life', year: 2015, medium: 'Novel', note: "Yanagihara pushes literary fiction to its extreme: a novel that accumulates trauma without catharsis. Polarizing precisely because it refuses the consolations the form usually provides." },
      { title: 'Middlemarch', year: 1871, medium: 'Novel', note: "George Eliot's masterpiece. The broadest, most compassionate view of human limitation in English fiction. Virginia Woolf called it 'one of the few English novels written for grown-up people.'" },
      { title: 'The Remains of the Day', year: 1989, medium: 'Novel', note: "Ishiguro's Booker winner. The most precise study of self-deception in literary fiction. Stevens tells you one story; the evidence of another accumulates silently around him." },
    ],
    subgenres: ['Modernist Fiction', 'Postmodern Fiction', 'Domestic Fiction', 'Campus Novel', 'Autofiction', 'Short Story Collection', 'Novellas'],
  },
  {
    id: 'western',
    name: 'Western',
    type: 'Film & Fiction',
    oneLiner: 'The frontier as moral testing ground—civilization versus wilderness, law versus violence.',
    history: "The Western is America's foundational mythological genre. Dime novels of the 1860s-80s established the archetypal figures: the lone gunfighter, the outlaw, the frontier town. Owen Wister's The Virginian (1902) gave the form literary respectability and established the code of the West. Film Westerns dominated Hollywood from the 1910s through the 1960s—John Ford's cavalry trilogy, Gary Cooper in High Noon (1952), and Shane (1953) defined the genre's moral seriousness. The Spaghetti Westerns of Leone (1964-66) deconstructed the American myth from outside it—The Good the Bad and the Ugly is a Western that hates Westerns. The 1970s revisionist Western (McCabe and Mrs Miller, Pat Garrett and Billy the Kid) dismantled the myth entirely. Cormac McCarthy's Blood Meridian (1985) and No Country for Old Men (2005) extended the Western into nihilistic literary territory that remains the form's outer edge.",
    characteristics: [
      'The frontier setting—physical space as moral state',
      'The lone figure who stands between civilization and savagery',
      'Violence as the ultimate arbiter',
      'Law either absent or corrupt',
      'The code—an unwritten moral system that operates where law fails',
      'The homesteader or community needing protection they cannot provide themselves',
    ],
    tropes: [
      'The stranger who rides into town',
      'The showdown at high noon',
      'The outlaw with a code the law does not share',
      'The corrupt sheriff or land baron',
      'The final ride into the sunset',
      'The woman who represents civilization the hero cannot fully enter',
    ],
    examples: [
      { title: 'High Noon', year: 1952, medium: 'Film', note: 'Cold War allegory embedded in genre. The marshal abandoned by the town he protects was read as McCarthyism. The most politically loaded Western ever made.' },
      { title: 'Blood Meridian', year: 1985, medium: 'Novel', note: "McCarthy's anti-Western. The Judge is one of American literature's most frightening figures. The novel argues that violence is not an aberration of the frontier but its defining truth." },
      { title: 'The Good, the Bad and the Ugly', year: 1966, medium: 'Film', note: "Leone's trilogy completion. The film is so stylized it breaks with American myth entirely—the West here is brutal, mercenary, and indifferent to heroism." },
      { title: 'Lonesome Dove', year: 1985, medium: 'Novel', note: "McMurtry's Pulitzer winner. The revisionist Western as epic elegy—the myth acknowledged, examined, and mourned. The most novelistically ambitious Western in the tradition." },
      { title: 'True Grit', year: 1968, medium: 'Novel', note: "Portis gives the Western to a fourteen-year-old girl narrator and everything changes. The Coen Brothers adaptation (2010) is the finest recent Western film." },
    ],
    subgenres: ['Classic Western', 'Revisionist Western', 'Spaghetti Western', 'Neo-Western', 'Contemporary Western', 'Weird West'],
  },
  {
    id: 'historical',
    name: 'Historical Fiction',
    type: 'Film & Fiction',
    oneLiner: 'The past as a lens for examining the present—history provides defamiliarization that realism cannot.',
    history: "Walter Scott invented historical fiction as a genre with Waverley (1814)—he used the Scottish Jacobite uprising of 1745 as the setting for a story about divided loyalty and cultural transition. The 19th century produced the historical novel as a major form: Tolstoy (War and Peace), Dickens (A Tale of Two Cities), Hugo (Les Miserables). The 20th century saw the genre expand to cover marginalized histories—Hilary Mantel's Wolf Hall trilogy (2009-2020) achieved both commercial and critical domination, winning two Booker Prizes. Contemporary historical fiction has expanded to include history from non-Western perspectives, subaltern history, and the lives of women and enslaved people who were invisible in conventional historical narrative.",
    characteristics: [
      'A historically documented setting with verifiable details',
      'The tension between historical accuracy and narrative necessity',
      'The present-day concern embedded in a past-set story',
      'Research worn lightly—the world must feel lived in, not displayed',
      'Characters constrained by the values and knowledge of their time',
      'History as argument—what happened then explains what is happening now',
    ],
    tropes: [
      'The fictional protagonist who observes or influences real historical events',
      'The lost or suppressed historical truth waiting to be uncovered',
      'The clash of modernity with tradition dramatized through a single family',
      'The woman who exceeded her era\'s expectations',
      'The ordinary person caught in the machinery of great events',
    ],
    examples: [
      { title: 'Wolf Hall', year: 2009, medium: 'Novel', note: "Mantel's present-tense third person for Cromwell was a formal revolution. The historical novel had always been past tense and distant. Her choice creates immediacy that transforms the form." },
      { title: 'Lincoln in the Bardo', year: 2017, medium: 'Novel', note: "Saunders uses the night Lincoln visited his dead son's tomb to build a novel from hundreds of voices. History as polyphony. Booker Prize winner." },
      { title: 'Schindler\'s List', year: 1993, medium: 'Film', note: "Spielberg's Holocaust film. The black and white aesthetic, the single red coat—choices about how to represent atrocity that are themselves arguments about representation." },
      { title: 'Beloved', year: 1987, medium: 'Novel', note: "Morrison's historical fiction about slavery as Gothic haunting. The past refuses to stay past—structurally and literally." },
      { title: 'The Name of the Rose', year: 1980, medium: 'Novel', note: "Eco embeds semiotics and medieval intellectual history inside a murder mystery. The most rigorously researched popular novel ever written." },
    ],
    subgenres: ['Ancient World', 'Medieval', 'Tudor / Elizabethan', 'Regency', 'Victorian', 'World War Fiction', 'Post-Colonial Historical', 'Historical Mystery'],
  },
  {
    id: 'comedy',
    name: 'Comedy',
    type: 'Film & Fiction',
    oneLiner: 'Incongruity resolved in a way that produces relief—the violation of expectation that does not threaten.',
    history: "Comedy is the oldest theatrical form—Aristophanes' plays (5th century BC) established political satire and farce. Menander developed New Comedy, which gave us the stock characters (miser, young lover, clever slave) that persist through Roman comedy (Plautus, Terence) to Shakespeare to modern sitcom. The comic novel took form in the 18th century: Fielding's Tom Jones (1749) established the picaresque; Austen refined social comedy to its highest literary pitch. Film comedy was the dominant early cinema form (Chaplin, Keaton, Lloyd) before sound arrived. The screwball comedy of the 1930s-40s (His Girl Friday, The Philadelphia Story) fused romantic comedy with rapid-fire dialogue. The British tradition produced P.G. Wodehouse and the Ealing comedies. Contemporary comedy has fragmented into dozens of subgenres, but the mechanical principle—incongruity, timing, and the safety of the audience from the consequences—remains constant.",
    characteristics: [
      'Incongruity—something in the wrong place, or a wrong thing in a right place',
      'Timing as craft—comedy is rhythm made visible',
      'The comic protagonist\'s flaw must not threaten the audience\'s safety',
      'Escalation to a logical extreme before relief',
      'Character as engine—the best comedy comes from who someone IS, not what they do',
      'Recognition—the joke confirms something the audience already knew but had not articulated',
    ],
    tropes: [
      'The fish out of water',
      'The mistaken identity that spirals',
      'The mismatched partnership forced into cooperation',
      'The plan that cannot fail and fails spectacularly',
      'The character too oblivious to read the situation everyone else understands',
    ],
    examples: [
      { title: 'Some Like It Hot', year: 1959, medium: 'Film', note: "Wilder's gold standard. The comic mechanics never stop—every scene compounds the situation logically. Study the structure: three acts of escalating disguise pressure." },
      { title: 'The Office (UK)', year: 2001, medium: 'Television', note: "Gervais and Merchant turned cringe comedy into tragedy. The comic principle—David Brent is oblivious in a way that produces pain—is also a precise psychological portrait." },
      { title: 'Catch-22', year: 1961, medium: 'Novel', note: "Heller uses comedy to make arguments about war that tragedy cannot. The title became a phrase in the language. The structural joke (the circular logic of the rule) is also the moral argument." },
      { title: 'Wodehouse—The Code of the Woosters', year: 1938, medium: 'Novel', note: "Wodehouse's prose style is the comedy. Bertie Wooster's narration is simultaneously the funniest and most technically accomplished in English comic fiction." },
      { title: 'Groundhog Day', year: 1993, medium: 'Film', note: "The premise IS the moral argument. Phil's improvement through the loop is the comedy of self-revision—the funniest film about character transformation ever made." },
    ],
    subgenres: ['Romantic Comedy', 'Satire', 'Farce', 'Dark Comedy / Black Comedy', 'Screwball Comedy', 'Parody', 'Absurdist Comedy', 'Tragicomedy'],
  },
  {
    id: 'war',
    name: 'War Fiction',
    type: 'Film & Fiction',
    oneLiner: 'Combat as the extreme condition that strips character to its essentials—what does violence do to people?',
    history: "War narrative is as old as the Iliad (8th century BC), which established the template: heroism and loss in combat, the human cost of institutional conflict, the individual inside the machine of war. The modern war novel emerged from WWI—All Quiet on the Western Front (1929) was the first major anti-war novel, followed by Hemingway's A Farewell to Arms (1929). WWII produced the most diverse war literature: the Pacific (Norman Mailer, James Jones), Europe (Heller, Vonnegut), and later the Holocaust (Primo Levi, Elie Wiesel). Vietnam generated a distinctive American literary tradition: Tim O'Brien's The Things They Carried (1990) is its peak. Film war has ranged from propaganda (Why We Fight, 1942-45) through the post-Vietnam disillusionment cycle (Apocalypse Now, Platoon, Full Metal Jacket) to the contemporary fragmented war film (The Hurt Locker, Zero Dark Thirty).",
    characteristics: [
      'The contrast between institutional war (strategy, ideology) and individual war (survival, loyalty)',
      'Camaraderie as the primary emotional bond—the unit becomes the protagonist\'s true family',
      'The cost of violence on those who enact it, not just those who receive it',
      'Moral injury alongside physical injury',
      'The failure of language to convey what combat actually is',
      'Time distortion—minutes lasting hours, years compressed to seconds',
    ],
    tropes: [
      'The band of brothers from diverse backgrounds forced into unity',
      'The character who should not have died',
      'The soldier who has seen too much to return to civilian life',
      'The enemy humanized at the worst possible moment',
      'The officer whose orders are strategically sound and morally catastrophic',
    ],
    examples: [
      { title: 'All Quiet on the Western Front', year: 1929, medium: 'Novel', note: "Remarque's novel ended the heroic war narrative. Paul's arc from patriotic volunteer to hollow survivor is the anti-war argument in purest form." },
      { title: 'The Things They Carried', year: 1990, medium: 'Novel', note: "O'Brien blurs fiction and memoir to argue that story truth is more real than happening truth. The book is about how war resists being told—and then tells it anyway." },
      { title: 'Apocalypse Now', year: 1979, medium: 'Film', note: "Coppola's Conrad adaptation. The journey up river becomes a journey into human darkness. Kurtz is not the aberration—he is the logical destination of the war's logic." },
      { title: 'Slaughterhouse-Five', year: 1969, medium: 'Novel', note: "Vonnegut uses science fiction (time travel) to write about the Dresden firebombing. The non-linear structure IS the trauma—PTSD before the term existed." },
      { title: 'The Hurt Locker', year: 2009, medium: 'Film', note: "Bigelow's film refuses to explain the war politically. Bomb disposal as the ultimate present-tense experience. The quietest anti-war film since Paths of Glory." },
    ],
    subgenres: ['WWI Fiction', 'WWII Fiction', 'Vietnam War Fiction', 'Contemporary War Fiction', 'Military Thriller', 'Anti-War Satire', 'Home Front Fiction'],
  },
  {
    id: 'coming_of_age',
    name: 'Coming of Age',
    type: 'Film & Fiction',
    oneLiner: 'The protagonist\'s formation—a young person forced by events to understand the world and themselves.',
    history: "The Bildungsroman (German: formation novel) originated with Goethe's Wilhelm Meister's Apprenticeship (1795-96), which established the template: a young protagonist leaves home, encounters the world, makes mistakes, and arrives at a mature understanding of their place in it. Dickens wrote the form's major English examples (David Copperfield, Great Expectations). The American tradition is dominated by Twain's Huckleberry Finn (1884), which embedded the coming-of-age journey in a critique of American racism. Salinger's The Catcher in the Rye (1951) created the modern template of adolescent alienation. The late 20th century and contemporary period have expanded the form to diverse voices and experiences: Sandra Cisneros, Toni Morrison, Junot Diaz, and many others have rewritten what the coming-of-age story is told about.",
    characteristics: [
      'A young protagonist at a threshold moment of formation',
      'Loss of innocence as the structural engine',
      'An adult world that is more complex, corrupt, or indifferent than the protagonist believed',
      'A mentor whose own limits are eventually revealed',
      'The protagonist\'s identity in formation—not yet fully themselves',
      'A specific time and place that shapes who the protagonist becomes',
    ],
    tropes: [
      'The summer that changes everything',
      'The first love that reveals what love actually costs',
      'The mentor betrayal or limitation that forces the protagonist to stand alone',
      'The discovery that parents are human and fallible',
      'The outsider who sees the social world more clearly for being outside it',
    ],
    examples: [
      { title: 'The Catcher in the Rye', year: 1951, medium: 'Novel', note: "Salinger's Holden Caulfield defined adolescent alienation for the 20th century. The voice is the achievement—a narrator who is both acutely perceptive and comprehensively self-deceived." },
      { title: 'Lady Bird', year: 2017, medium: 'Film', note: "Gerwig's film is the genre's finest recent example. Christine/Lady Bird's relationship with her mother IS the coming-of-age—not the boy, not Sacramento, but the repair of that primary bond." },
      { title: 'The House on Mango Street', year: 1984, medium: 'Novel', note: "Cisneros expanded what the coming-of-age story is about—a Chicana girl in Chicago, fragmented vignettes instead of linear plot. The form refuses the dominant culture's narrative." },
      { title: 'Stand by Me', year: 1986, medium: 'Film', note: "King's novella (The Body) adapted. Four boys and a dead body—the journey makes them understand death, friendship, and who they will become. The coming-of-age structure at its most transparent." },
      { title: 'Great Expectations', year: 1861, medium: 'Novel', note: "Dickens's Pip is the template for the protagonist who must unlearn his ambitions to understand what actually matters. The plot is the disassembly of false values." },
    ],
    subgenres: ['YA (Young Adult)', 'School Story', 'Campus Novel', 'Teen Film', 'Road Novel as Formation'],
  },
  {
    id: 'noir',
    name: 'Noir',
    type: 'Film & Fiction',
    oneLiner: 'A world of moral corruption where the protagonist\'s own flaws make them complicit—darkness without redemption.',
    history: "Film noir was identified by French critics in 1946 as a quality shared by a group of American films made between roughly 1941 and 1958—Double Indemnity, Laura, Out of the Past, Sunset Boulevard, Touch of Evil. The movement drew from German Expressionist lighting, the hardboiled fiction of Hammett and Chandler, and the specific post-WWII American mood of displaced anxiety and distrust. The visual style (deep shadows, Venetian blind light, rain-slicked streets, extreme angles) became as defining as the narrative qualities. Literary noir is less visually defined but shares the moral world: no safe ground, corrupt institutions, protagonists who are complicit in their own destruction. Highsmith's Ripley novels and Ellroy's American Tabloid are its literary peaks. Neo-noir (Chinatown, Blade Runner, Drive) applies the moral framework to contemporary settings.",
    characteristics: [
      'A morally compromised world in which no one is innocent',
      'The protagonist as both investigator and suspect—their flaw enables the crime',
      'Fatalism—the trap is often one the protagonist walked into freely',
      'The femme fatale or homme fatale as embodiment of the world\'s corruption',
      'Expressionist atmosphere—environment as moral state',
      'The absence of redemption—order is not restored, corruption continues',
    ],
    tropes: [
      'The femme fatale who seems to offer rescue but delivers destruction',
      'The small transgression that cascades into catastrophe',
      'The corrupt city that never sleeps and never gets clean',
      'The PI or cop who knows the system is rotten but cannot leave it',
      'The confession or voiceover from someone who did not survive',
      'The last-minute reveal that makes the ending worse than the middle',
    ],
    examples: [
      { title: 'Double Indemnity', year: 1944, medium: 'Film', note: "Wilder and Chandler's script is the form's foundation text. Neff narrates his own doom from the beginning. Every beat of the insurance scam is also a beat of self-destruction." },
      { title: 'Chinatown', year: 1974, medium: 'Film', note: "Polanski's neo-noir. Gittes's competence causes the tragedy. The ending is the genre's definitive anti-catharsis: evil wins completely, the detective's skill is what made it possible." },
      { title: 'The Talented Mr Ripley', year: 1955, medium: 'Novel', note: "Highsmith makes the reader root for a murderer. Ripley's cool amoral survival is the genre's darkest achievement—we want him to get away with it." },
      { title: 'LA Confidential', year: 1990, medium: 'Novel', note: "Ellroy's most accessible noir novel. Three cops, all compromised, in 1950s Los Angeles. The city is the villain and no one gets out clean." },
      { title: 'Blade Runner', year: 1982, medium: 'Film', note: "Sci-fi noir. The rain, the shadows, the corporate corruption—all transposed to 2019. The question of whether Deckard is human is also a question about whether noir's moral world has any ground at all." },
    ],
    subgenres: ['Classic Film Noir', 'Neo-Noir', 'Nordic Noir', 'Hardboiled Fiction', 'Tech Noir', 'Surreal Noir'],
  },
  {
    id: 'memoir',
    name: 'Memoir / Narrative Nonfiction',
    type: 'Nonfiction',
    oneLiner: 'True events shaped by narrative technique—memory as both subject and instrument.',
    history: "Memoir is ancient—Augustine's Confessions (397 AD) is the first autobiography in the modern sense. But the memoir boom as a publishing phenomenon is relatively recent. Frank McCourt's Angela's Ashes (1996) and Mary Karr's The Liar's Club (1995) demonstrated that childhood poverty and dysfunction could be literary subjects of the highest order, opening a commercial market. The 2000s produced a memoir glut followed by several high-profile fabrication scandals (James Frey's A Million Little Pieces) that sharpened the ethical conversation. Contemporary memoir has expanded to cover trauma, illness, identity, addiction, and cultural experience. The best memoir writers—Didion, Dillard, Nabokov (Speak Memory), Karr—are also the most honest about the limitations and reconstructions of memory itself.",
    characteristics: [
      'First-person narration from a specific, limited perspective',
      'The double consciousness of the experiencing self and the narrating self',
      'Memory as reconstruction, not recording—the narrator knows this and uses it',
      'Emotional truth prioritized alongside factual accuracy',
      'Scenes dramatized with novelistic technique rather than summarized',
      'A governing theme that unifies disparate events',
    ],
    tropes: [
      'The difficult parent whose complexity the narrator must reckon with',
      'The formative trauma examined from the perspective of survival',
      'The place (city, landscape, house) as character',
      'The narrator who was wrong and knows it now',
      'The gap between what the narrator understood then and what they understand now',
    ],
    examples: [
      { title: 'The Year of Magical Thinking', year: 2005, medium: 'Memoir', note: "Didion's grief memoir. The title names the psychological state precisely. She applies a journalist's rigor to the irrational—the most analytically precise emotional writing in the genre." },
      { title: 'Speak Memory', year: 1951, medium: 'Memoir', note: "Nabokov's autobiography is a meditation on the relationship between memory and art. The prose style is the argument—if memory is selective, the writer's craft IS the self." },
      { title: 'The Liars Club', year: 1995, medium: 'Memoir', note: "Mary Karr's Texas childhood is the genre's craft standard. She shows that scene-building, character, and dialogue can be applied to memory without claiming false certainty." },
      { title: 'I Know Why the Caged Bird Sings', year: 1969, medium: 'Memoir', note: "Angelou's coming-of-age memoir in the Jim Crow South. A book that redefined what autobiography could address and whose stories were worth telling." },
      { title: 'In Cold Blood', year: 1966, medium: 'Narrative Nonfiction', note: "Capote's true crime narrative invented the nonfiction novel as a serious form. The question of how much he shaped his material to fit the story is the genre's central ethical problem." },
    ],
    subgenres: ['Personal Essay', 'Travel Writing', 'Immersion Journalism', 'True Crime (narrative)', 'Auto-biography', 'Essay Collection'],
  },
  {
    id: 'speculative',
    name: 'Speculative / Dystopian',
    type: 'Film & Fiction',
    oneLiner: 'A present-day condition extrapolated to its logical extreme—the warning embedded in a world.',
    history: "Dystopian fiction as a form emerged as a counter to Utopian literature (More's Utopia, 1516; Bellamy's Looking Backward, 1888). The modern form was established by Zamyatin's We (1924), which directly influenced Orwell's Nineteen Eighty-Four (1949) and Huxley's Brave New World (1932). These three texts remain the genre's canonical foundations. Margaret Atwood's The Handmaid's Tale (1985) brought feminist political critique into the form. Contemporary dystopian fiction has expanded to climate catastrophe (Octavia Butler's Parable series), surveillance capitalism (Dave Eggers' The Circle), and YA dystopia (The Hunger Games). The genre's commercial peak was the 2010s YA dystopia wave, which produced enormous film franchises. Literary dystopia, however, never stopped being published at the highest levels—Ishiguro, McCarthy, and Atwood have all continued to produce major work.",
    characteristics: [
      'An extrapolated world where a current condition has become total',
      'The individual consciousness that refuses the world\'s demand for conformity',
      'The mechanism of control—how the state or system maintains compliance',
      'The moment of recognition when the protagonist sees the system clearly',
      'The cost of resistance—what the individual loses by refusing',
      'The ambiguous ending—resistance, survival, or transformation, rarely full victory',
    ],
    tropes: [
      'The totalitarian state with perfect surveillance',
      'The resistance movement that may not succeed',
      'The protagonist who believed in the system until they became its victim',
      'The prole, outcast, or marginal person who sees the truth',
      'The love story as the last private act in a public world',
      'The text or memory that preserves what the state has destroyed',
    ],
    examples: [
      { title: 'Nineteen Eighty-Four', year: 1949, medium: 'Novel', note: "Orwell's dystopia gave the language its political vocabulary: doublethink, Room 101, the memory hole, Big Brother. Every subsequent political dystopia is measured against it." },
      { title: 'The Handmaid\'s Tale', year: 1985, medium: 'Novel', note: "Atwood's theocratic America. The genius: every element was drawn from existing historical practice—nothing is invented. The most rigorously researched dystopia in the tradition." },
      { title: 'Children of Men', year: 2006, medium: 'Film', note: "Cuaron's film extrapolates infertility to its social conclusion. The cinematography—long unbroken takes in chaos—creates the feeling of being inside the catastrophe." },
      { title: 'Brave New World', year: 1932, medium: 'Novel', note: "Huxley's dystopia is about pleasure, not pain, as the mechanism of control. More prescient than Orwell for the contemporary West—the critique of comfort, not oppression." },
      { title: 'Station Eleven', year: 2014, medium: 'Novel', note: "Mandel's post-pandemic novel is dystopian in premise but not in spirit—what survives is art. The structure (non-linear, jumping time) enacts the novel's argument about memory." },
    ],
    subgenres: ['Political Dystopia', 'Climate Dystopia', 'Technological Dystopia', 'YA Dystopia', 'Post-Apocalyptic', 'Utopian Fiction (counter-dystopia)'],
  },
]

function GenreCard({ genre }) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{
      background: '#fff',
      border: '1px solid var(--border)',
      borderRadius: '12px',
      overflow: 'hidden',
      transition: 'box-shadow 0.15s, border-color 0.15s',
    }}>
      {/* Header—always visible */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          padding: '20px 24px',
          cursor: 'pointer',
          textAlign: 'left',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '4px' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '18px',
              fontWeight: '700',
              color: 'var(--text-dark)',
              margin: 0,
            }}>
              {genre.name}
            </h2>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '10px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--green)',
              background: 'var(--green-pale)',
              border: '1px solid var(--green-border)',
              padding: '2px 8px',
              borderRadius: '4px',
              whiteSpace: 'nowrap',
            }}>
              {genre.type}
            </span>
          </div>
          <p style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '14px',
            color: 'var(--text-mid)',
            margin: 0,
            lineHeight: '1.5',
          }}>
            {genre.oneLiner}
          </p>
        </div>
        <div style={{
          flexShrink: 0,
          width: '24px',
          height: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-soft)',
          transition: 'transform 0.2s',
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          marginTop: '2px',
        }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 4.5L7 9.5L12 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </button>

      {/* Expanded content */}
      {open && (
        <div style={{ padding: '0 24px 28px', borderTop: '1px solid var(--border)' }}>

          {/* History */}
          <div style={{ marginTop: '24px', marginBottom: '24px' }}>
            <p style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '10px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-soft)',
              marginBottom: '10px',
            }}>History</p>
            <p style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '14px',
              lineHeight: '1.8',
              color: 'var(--text-dark)',
              margin: 0,
            }}>
              {genre.history}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
            {/* Characteristics */}
            <div>
              <p style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '10px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-soft)',
                marginBottom: '10px',
              }}>Defining characteristics</p>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '7px' }}>
                {genre.characteristics.map((c, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--green)', flexShrink: 0, marginTop: '5px', fontSize: '8px' }}>
                      <svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3" fill="currentColor"/></svg>
                    </span>
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-dark)', lineHeight: '1.6' }}>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tropes */}
            <div>
              <p style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '10px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-soft)',
                marginBottom: '10px',
              }}>Common tropes</p>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '7px' }}>
                {genre.tropes.map((t, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--amber, #B5700A)', flexShrink: 0, marginTop: '5px', fontSize: '8px' }}>
                      <svg width="8" height="8" viewBox="0 0 8 8"><rect x="1" y="1" width="6" height="6" rx="1" fill="currentColor"/></svg>
                    </span>
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-dark)', lineHeight: '1.6' }}>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Examples */}
          <div style={{ marginBottom: '20px' }}>
            <p style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '10px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-soft)',
              marginBottom: '12px',
            }}>Key examples</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {genre.examples.map((ex, i) => (
                <div key={i} style={{
                  background: 'var(--off-white)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '12px 16px',
                }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '4px' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: '700', color: 'var(--text-dark)' }}>
                      {ex.title}
                    </span>
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--text-soft)' }}>
                      {ex.year}—{ex.medium}
                    </span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.6', margin: 0 }}>
                    {ex.note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Subgenres */}
          <div>
            <p style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '10px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-soft)',
              marginBottom: '10px',
            }}>Subgenres</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {genre.subgenres.map((s, i) => (
                <span key={i} style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '12px',
                  fontWeight: '500',
                  color: 'var(--text-mid)',
                  background: 'var(--off-white)',
                  border: '1px solid var(--border)',
                  padding: '4px 10px',
                  borderRadius: '20px',
                }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function GenresPage() {
  const [openAll, setOpenAll] = useState(false)
  const [filter, setFilter] = useState('All')

  const types = ['All', 'Film & Fiction', 'Fiction', 'Nonfiction']
  const filtered = filter === 'All' ? genres : genres.filter(g => g.type === filter)

  return (
    <div style={{ background: 'var(--off-white)', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #1e3a0c 0%, var(--green) 55%, #3a6b1c 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '16px' }}>
            Reference
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: '700', color: '#fff', lineHeight: '1.15', marginBottom: '12px', textShadow: '0 2px 12px rgba(0,0,0,0.25)' }}>
            Genre Guide
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.7', color: 'rgba(255,255,255,0.75)', maxWidth: '520px', marginBottom: '20px' }}>
            {genres.length} genres and subgenres. History, defining characteristics, common tropes, and the key works that defined or redefined each form.
          </p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <Link href="/learn" style={{ display: 'inline-block', background: '#fff', color: 'var(--green)', fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '14px', padding: '11px 24px', borderRadius: '8px', textDecoration: 'none' }}>
              Craft lessons
            </Link>
            <Link href="/reading-list" style={{ display: 'inline-block', background: 'transparent', color: '#fff', fontFamily: 'var(--font-ui)', fontWeight: '600', fontSize: '14px', padding: '11px 24px', borderRadius: '8px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.35)' }}>
              Reading list
            </Link>
          </div>
        </div>
      </section>

      {/* Controls */}
      <div style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '14px 24px', position: 'sticky', top: '52px', zIndex: 10 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {types.map(t => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '12px',
                  fontWeight: filter === t ? '700' : '500',
                  padding: '5px 14px',
                  borderRadius: '20px',
                  border: '1px solid',
                  borderColor: filter === t ? 'var(--green)' : 'var(--border)',
                  background: filter === t ? 'var(--green)' : 'var(--off-white)',
                  color: filter === t ? '#fff' : 'var(--text-mid)',
                  cursor: 'pointer',
                }}
              >
                {t}
              </button>
            ))}
          </div>
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--text-soft)' }}>
            {filtered.length} genres
          </span>
        </div>
      </div>

      {/* Genre list */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 24px 80px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {filtered.map(genre => (
            <GenreCard key={genre.id} genre={genre} />
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: 'var(--green)', borderRadius: '16px', padding: '44px 40px', textAlign: 'center', marginTop: '60px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 3vw, 27px)', fontWeight: '700', color: '#fff', marginBottom: '12px' }}>
            Know your genre. Break it on purpose.
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: '1.7', maxWidth: '440px', margin: '0 auto 24px' }}>
            The writers who matter understood genre conventions deeply before they subverted them. Study the form, then use Eve to build your project.
          </p>
          <Link href="/auth?signup=true" style={{ display: 'inline-block', background: '#fff', color: 'var(--green)', fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '15px', padding: '13px 30px', borderRadius: '8px', textDecoration: 'none' }}>
            Start writing—free
          </Link>
        </div>
      </div>
    </div>
  )
}
