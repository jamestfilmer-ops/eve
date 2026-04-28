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
    subgenres: [
      { name: 'Psychological Thriller', note: 'Threat comes from inside—the mind, a relationship, or the perception of reality itself becomes unreliable.', distinction: 'Where the standard thriller puts the protagonist in physical danger from an external force, the psychological thriller makes the danger internal or uncertain. The reader cannot trust the narrator\'s account of events. Paranoia, gaslighting, and unreliable perception replace car chases and assassins. The most disturbing question is not "will they survive?" but "what is actually real?"', examples: ['Gone Girl', 'The Talented Mr. Ripley', 'Black Swan', 'Shutter Island'] },
      { name: 'Legal Thriller', note: 'The courtroom as arena of life-and-death stakes, where procedure and revelation arrive simultaneously.', distinction: 'Most thrillers keep the truth hidden as long as possible. The legal thriller is forced to reveal it in public, under cross-examination, in real time. The courtroom removes the thriller\'s usual tool — concealment — and replaces it with something harder: competing versions of the truth, each presented by someone with absolute conviction. The guilty verdict is not an endpoint but a failure mode that the reader fears throughout.', examples: ['A Few Good Men', 'To Kill a Mockingbird', 'The Lincoln Lawyer', 'Anatomy of a Murder'] },
      { name: 'Medical Thriller', note: 'Hospital, lab, or epidemic as setting; the body and science become the source of escalating dread.', distinction: 'The medical thriller exploits a specific terror: the systems designed to protect human bodies — hospitals, pharmaceutical companies, public health agencies — become the source of the threat. The protagonist is usually an insider (doctor, researcher, epidemiologist) which means they understand enough to know how bad it is and how helpless official channels are. The body itself becomes the ticking clock. Michael Crichton built an entire career on this exact structure.', examples: ['The Andromeda Strain', 'Outbreak', 'Contagion', 'The Hot Zone'] },
      { name: 'Spy Thriller', note: 'Deception, tradecraft, and divided loyalty in a world where every ally may be an enemy.', distinction: 'The thriller genre assumes the protagonist is innocent and reactive — they\'ve been dragged into danger. The spy thriller inverts this: the protagonist is the professional danger, trained and complicit. The moral weight shifts entirely. The question is not survival but loyalty — to country, to handler, to self — and these three are almost never the same thing.', examples: ['Tinker Tailor Soldier Spy', 'The Spy Who Came in from the Cold', 'Three Days of the Condor', 'The Americans'] },
      { name: 'Political Thriller', note: 'Power, conspiracy, and the machinery of government weaponized against the protagonist.', distinction: 'The political thriller\'s central argument is that democratic institutions are more fragile than they appear — that the machinery of government can be turned against individual citizens, and that official truth and actual truth diverge. This makes it the most explicitly ideological thriller subgenre. The protagonist\'s enemy is not a single villain but a system, which means the usual thriller resolution (kill or catch the bad guy) is unavailable. The best political thrillers earn a darker ending.', examples: ['All the President\'s Men', 'Three Days of the Condor', 'The Manchurian Candidate', 'Primary Colors'] },
      { name: 'Tech Thriller', note: 'Surveillance, AI, or biotech as the engine of existential threat; the system designed to help becomes the danger.', distinction: 'The tech thriller is the political thriller\'s successor for the 21st century — where Cold War paranoia powered the political thriller, surveillance capitalism and AI power this one. The enemy is no longer a foreign power or corrupt official but a system with no single author, no off switch, and no malicious intent — just optimization toward an outcome that happens to require destroying someone. This removes the conventional thriller satisfaction of a villain to confront.', examples: ['The Circle', 'Ex Machina', 'Black Mirror', 'Daemon'] },
      { name: 'Domestic Thriller', note: 'Danger hidden inside ordinary home life; the family and the house become the source of dread.', distinction: 'The domestic thriller is a post-2010 mutation that weaponizes the suburb. Where classic thrillers use exotic locations and external villains, the domestic thriller finds its menace inside the marriage, the neighbourhood, the book club. It is also largely written by and for women, which shifts whose perspective is treated as reliable and whose as hysterical — and the genre exploits that dynamic deliberately.', examples: ['Gone Girl', 'The Woman in the Window', 'Big Little Lies', 'Behind Closed Doors'] },
    ],
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
    subgenres: [
      { name: 'Psychological Horror', note: 'The monster may not be real—ambiguity about whether the threat is external or a product of the mind.', distinction: 'Supernatural horror requires the reader to accept the supernatural. Psychological horror denies them that option — the threat may be entirely internal. This makes it formally more difficult: the writer must maintain genuine ambiguity about reality without cheating in either direction. The reader cannot be certain whether the protagonist is being stalked by a ghost or experiencing a psychotic break. The best psychological horror makes both explanations equally terrifying.', examples: ['The Turn of the Screw', 'Rosemary\'s Baby', 'The Babadook', 'Black Swan'] },
      { name: 'Supernatural Horror', note: 'The threat is definitively paranormal: ghosts, demons, entities that exist beyond rational explanation.', distinction: 'Supernatural horror makes a specific contract with the reader: the impossible is real, and rational explanation will not save you. This removes the safety net that psychological horror leaves in place. The monster is not a metaphor for grief, trauma, or mental illness — it is an actual demon, an actual ghost, an actual entity that wants something from you. The clarity of the threat is both the form\'s greatest strength and its greatest risk: a monster fully revealed is almost never as frightening as one implied.', examples: ['The Exorcist', 'Hereditary', 'It (Stephen King)', 'The Conjuring'] },
      { name: 'Body Horror', note: 'The body itself becomes monstrous—transformation, contamination, and loss of physical autonomy.', distinction: 'Most horror threatens the body from outside. Body horror puts the threat inside the skin itself. The protagonist\'s own flesh is the antagonist — transforming, betraying, dissolving. This makes escape impossible in the most literal way. Cronenberg codified the form in film; it connects to anxieties about disease, pregnancy, surgery, and the basic unreliability of the body we live in.', examples: ['The Fly', 'Annihilation', 'Titane', 'Kafka\'s The Metamorphosis'] },
      { name: 'Cosmic Horror', note: 'The universe is indifferent and incomprehensible; human insignificance in the face of the unknowable is the horror.' , distinction: 'Every other horror subgenre implicitly believes humans matter — the monster wants to kill you, which means you are worth targeting. Cosmic horror removes that comfort. The entities in Lovecraftian fiction are not malevolent; they are simply operating at a scale where human existence does not register. Madness is the only rational response to genuine comprehension of the universe\'s indifference. This makes it philosophically distinct from every other horror form.', examples: ['The Call of Cthulhu', 'Annihilation', 'Color Out of Space', 'The Ritual'] },
      { name: 'Gothic Horror', note: 'Atmosphere, decay, and ancestral guilt; the past pressing inward on the present through crumbling architecture.', distinction: 'Gothic horror is the oldest horror tradition — it predates the genre label by decades. Its key distinction from modern horror is temporal: Gothic horror is driven by the past, not the present. The mansion, the family name, the ancestral crime — all of these refuse to stay buried. The horror is not that something new has entered the world but that something old has never left it. This makes Gothic horror an argument about inheritance, both genetic and moral.', examples: ['Wuthering Heights', 'The Fall of the House of Usher', 'Rebecca', 'Mexican Gothic'] },
      { name: 'Slasher', note: 'A killer, a weapon, a group of victims, and systematic elimination with physical stakes front and center.', distinction: 'The slasher is the horror subgenre that makes the least effort to justify itself intellectually. It delivers physical jeopardy, tension, and release in the most direct possible form. What makes it formally interesting is the economy it demands — the audience knows the premise immediately and will not accept padding. Every victim must be established as a person before they die or the death has no weight. Scream (1996) demonstrated that the genre knows its own rules, which is both its greatest achievement and its terminal problem.', examples: ['Halloween', 'Friday the 13th', 'A Nightmare on Elm Street', 'Scream'] },
      { name: 'Haunted House', note: 'Architecture as antagonist; a location with memory that acts on the people inside it.', distinction: 'The haunted house story makes physical space the primary antagonist — not a character who happens to live in a house, but a house that has accumulated enough memory, death, or psychic residue to act. Shirley Jackson understood this more precisely than anyone: the house in Hill House is not haunted by a specific ghost but by the accumulated weight of wrongness in its geometry. The building becomes a character whose goal is to dissolve the self of anyone inside it.', examples: ['The Haunting of Hill House', 'The Shining', 'House of Leaves', 'Amityville Horror'] },
      { name: 'Folk Horror', note: 'Community, ritual, and rural isolation; the horror rises from tradition and the land itself.', distinction: 'Urban horror fears the stranger, the unknown, the thing from outside. Folk horror inverts this: the community IS the threat. The horror is ancient, local, and believed in by everyone around you. Isolation removes outside help, but more importantly it removes the framework that would let you call what is happening wrong. The scariest element is how rational the community\'s logic is on its own terms.', examples: ['Midsommar', 'The Wicker Man', 'Hereditary', 'The Witch'] },
      { name: 'Quiet Horror', note: 'Dread without violence—unease sustained through atmosphere, implication, and restraint.', distinction: 'Quiet horror is the technical opposite of slasher: where slasher delivers jeopardy at maximum volume, quiet horror withholds. The threat is always just offstage. The dread accumulates through wrong details, odd silences, and the protagonist\'s growing certainty that something is wrong without a single confirmable event. This requires extraordinary craft because the payoff is never a monster — it is the reader\'s own imagination, which the writer has loaded and pointed. Shirley Jackson is its master. The wrong word in a sentence can function as the entire horror.', examples: ['We Have Always Lived in the Castle', 'The Little Stranger', 'Plain Bad Heroines', 'The Only Good Indians'] },
    ],
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
    subgenres: [
      { name: 'Hard SF', note: 'Extrapolates from real or plausible science; the rigor of the idea is the attraction, not just the setting.', distinction: 'Most SF uses science as window dressing — the technology justifies the setting. Hard SF treats the science as the actual subject. The story is a thought experiment: if this physics is true, what follows? Character and plot are in service of the idea, not the reverse. This creates a different contract with the reader — they come for the intellectual pleasure of the extrapolation, not primarily for emotional identification.', examples: ['The Martian', 'Seveneves', 'Rendezvous with Rama', 'Tau Zero'] },
      { name: 'Space Opera', note: 'Epic scale, galactic scope, and melodrama; character and conflict bigger than any single planet.', distinction: 'Hard SF extrapolates from real physics. Space opera abandons that constraint and trades it for mythological scale. The galactic empire, the rebel alliance, the fate-of-the-universe stakes — these require the reader to forget orbital mechanics and focus on character and archetypal conflict. This makes space opera closer to fantasy than to science fiction in its formal demands: the world-building serves the story rather than the other way around. Star Wars is not bad science fiction; it is very good mythology in a science fictional costume.', examples: ['Dune', 'The Culture series', 'Star Wars', 'Hyperion'] },
      { name: 'Cyberpunk', note: 'High technology, low life; corporate dystopia, hacker protagonists, neon decay, and the body as hardware.', distinction: 'Science fiction before cyberpunk largely imagined technology as neutral or beneficial — the problem was always human nature. Cyberpunk made technology itself the oppressor, concentrating power in corporations rather than states. The protagonists are not heroes or scientists but criminals, hackers, and outcasts. The aesthetic — neon, rain, decay alongside high tech — is an argument: progress makes the rich richer and everyone else more surveilled.', examples: ['Neuromancer', 'Blade Runner', 'Ghost in the Shell', 'The Matrix'] },
      { name: 'Climate Fiction', note: 'The ecological crisis as setting, theme, or antagonist; the future Earth shaped by what humanity has already done.', distinction: 'Climate fiction (cli-fi) faces the hardest challenge in speculative writing: the disaster it depicts is not hypothetical. The extrapolation is not "what if" but "by how much." This means the genre cannot offer the usual SF comfort of imagined distance. The emotional task is to make readers feel the weight of a future that is already being decided, without producing the paralysis that pure despair generates. The best cli-fi does this by anchoring global catastrophe in individual, intimate stakes — a family, a garden, a specific coastline.', examples: ['The Ministry for the Future', 'Flight Behavior', 'The Drowned World', 'Parable of the Sower'] },
      { name: 'Biopunk', note: 'Biotechnology as the dominant power system; genetic engineering and corporate biology reshape who gets to be human.', distinction: 'Cyberpunk located dystopian power in silicon and surveillance. Biopunk relocates it inside the cell. The questions become biological rather than digital: who controls your genome, who has access to your genetic data, and who gets to decide which traits constitute a person worth keeping? This makes biopunk the most intimate dystopian subgenre — the oppression is not outside you, reading your messages, but inside you, written into your DNA. Gattaca remains the clearest statement of the form\'s central argument.', examples: ['Gattaca', 'Oryx and Crake', 'Never Let Me Go', 'Brave New World'] },
      { name: 'Solarpunk', note: 'Optimistic speculation about sustainable futures; technology in cooperation with ecology rather than opposition.', distinction: 'Dystopian fiction has so thoroughly dominated speculative writing that optimism has become the genre\'s most radical stance. Solarpunk is a deliberate corrective: it refuses the assumption that sustainability requires sacrifice, or that human ingenuity is inherently destructive. The aesthetic — solar panels alongside gardens, technology embedded in natural systems — is an argument about what development could look like. Its formal challenge is the same as all utopian fiction: happy societies are hard to dramatize. The solution is usually internal conflict rather than external threat.', examples: ['A Psalm for the Wild-Built', 'Becky Chambers\' Monk and Robot series', 'The Ministry for the Future', 'Walkaway'] },
      { name: 'Military SF', note: 'War in space or future settings; tactics, hierarchy, and the ethics of combat at civilizational scale.', distinction: 'Most SF uses military conflict as backdrop. Military SF puts the institution of war — its hierarchy, its ethics, its psychological cost on the people inside it — at the center. The best military SF asks whether technologically advanced warfare resolves or amplifies the moral problems of combat, and the honest ones conclude the latter. The alien enemy often functions as a displacement for the political and cultural enemies contemporary readers actually have, which gives the subgenre its capacity for both propaganda and genuine critique.', examples: ['Starship Troopers', 'The Forever War', 'Ender\'s Game', 'Old Man\'s War'] },
      { name: 'Time Travel', note: 'Temporal displacement as premise; causality, paradox, and the question of whether the past can or should be changed.', distinction: 'Time travel is the SF premise that most directly engages with regret. The question underneath every time travel story is not mechanical but emotional: if you could go back, what would you change, and what would that cost? The paradoxes — the grandfather paradox, the bootstrap paradox — are not plot problems to be solved but structural expressions of a moral problem: the past cannot be fixed without destroying the present it produced. Stories that ignore this remain puzzles. Stories that engage with it become something more.', examples: ['The Time Machine', 'Slaughterhouse-Five', 'Arrival', '12 Monkeys'] },
      { name: 'Afrofuturism', note: 'Black experience and African tradition as the lens for speculative world-building; reclaiming the future.', distinction: 'Mainstream SF has historically imagined futures that either erased Black people entirely or kept existing racial hierarchies in place. Afrofuturism is a corrective and an act of imagination: it centers African diaspora experience, draws on African cosmology and aesthetics, and asks what futures look like when the people who were written out of history write themselves back in. It is not a subgenre by content alone but by perspective and political intention.', examples: ['Black Panther', 'Kindred', 'The Fifth Season', 'Everything Is Everything (Janelle Monáe)'] },
      { name: 'Post-Apocalyptic', note: 'Civilization after collapse; survival, community, and what values endure when all systems fail.', distinction: 'The post-apocalyptic story is less interested in the disaster than in what it reveals about the survivors. Strip away law, infrastructure, and social contract, and what remains? The genre gives two answers: human beings are fundamentally selfish and violent (Cormac McCarthy\'s The Road), or human beings are fundamentally cooperative and creative (Station Eleven, Becky Chambers). Neither answer is more honest — both are arguments about human nature that the genre is uniquely positioned to make.', examples: ['The Road', 'Station Eleven', 'The Children of Men', 'Parable of the Sower'] },
    ],
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
    subgenres: [
      { name: 'Epic Fantasy', note: 'Secondary world at civilizational scale; the fate of kingdoms and the nature of good and evil as the subject.', distinction: 'Epic fantasy operates at the largest possible human scale — dynasties, empires, millennia of history — and asks the genre\'s most fundamental question: does good triumph? Tolkien\'s answer was yes, at enormous cost. Martin\'s answer was: good and evil are not so easily identified, and the cost is unbearable. The formal challenge of epic fantasy is making that scale feel personal — the reader must care about a character before they can care about a kingdom. When it fails, it is a map with names on it. When it works, it is the reader\'s entire world.', examples: ['The Lord of the Rings', 'A Song of Ice and Fire', 'The Wheel of Time', 'Mistborn'] },
      { name: 'Dark Fantasy', note: 'Secondary world without guarantees of salvation; moral complexity and real consequence.', distinction: 'Epic fantasy and dark fantasy share a secondary world but disagree on what the world is like. Epic fantasy presents evil as a force that can be defeated. Dark fantasy presents evil as a condition that cannot be eliminated — only survived, managed, or perpetuated under a different name. The protagonist is rarely innocent, and their victories are never clean. This places higher demands on character complexity: in a world without guaranteed salvation, the hero must justify their choices on every page rather than borrowing moral credit from the genre\'s expected arc.', examples: ['The Broken Empire trilogy', 'Tigana', 'The Shadow of the Torturer', 'American Gods'] },
      { name: 'Grimdark', note: 'Fantasy without heroism\'s idealism; suffering is real, power is corrupt, and survival is not guaranteed.', distinction: 'Epic fantasy assumes that good and evil are distinguishable and that the right side can win. Grimdark strips both assumptions. Power corrupts without exception, heroism produces atrocity, and the most honest characters are the most compromised. It emerged as a direct reaction to Tolkien\'s moral clarity — and to the sanitized versions of it that dominated commercial fantasy through the 1980s and 90s. The argument is that fantasy with real consequence is more honest than fantasy with guaranteed salvation.', examples: ['A Song of Ice and Fire', 'The First Law trilogy', 'Prince of Thorns', 'The Broken Empire'] },
      { name: 'Urban Fantasy', note: 'Magic operating inside a contemporary real-world city; two world-systems in collision on familiar streets.', distinction: 'Secondary-world fantasy requires the reader to accept an invented world on its own terms. Urban fantasy inverts the leverage — the reader knows the world already, and the magic is the intrusion. This creates a different kind of tension: not wonder at a new world but the uncanny displacement of the familiar. The choice of city matters. London versus New York versus Lagos changes what the magic means and who the story is about.', examples: ['American Gods', 'Jonathan Strange & Mr Norrell', 'The Dresden Files', 'Rivers of London'] },
      { name: 'Fairy Tale Retelling', note: 'Classical fairy tale or myth restructured through a modern, subversive, or politically conscious lens.', distinction: 'Fairy tales survive because their structures encode something true about psychological and social reality — which also means they encode the prejudices of the cultures that made them. The retelling\'s project is to keep the structural truth while interrogating the cultural assumption embedded in it. Angela Carter\'s The Bloody Chamber is the form\'s peak: she uses the fairy tale\'s bones to ask what those stories actually tell women about their own bodies, desires, and power. A retelling that only updates the setting has not done the work.', examples: ['The Bloody Chamber', 'Spinning Silver', 'Cinder', 'East of Eden'] },
      { name: 'Mythic Fantasy', note: 'Draws directly on world mythology—Norse, Greek, West African, Japanese—as source material and structure.', distinction: 'Secondary-world fantasy invents its mythology. Mythic fantasy borrows it — from Greek, Norse, West African, Hindu, or Japanese tradition — and accepts the obligations that come with the loan. The reader brings existing knowledge of the myth, which the author can confirm, subvert, or interrogate. This creates dramatic irony unavailable to invented worlds: we know Odysseus comes home, so the question becomes how, and at what cost. The danger is that the borrowed mythology does the emotional work the writer should be doing.', examples: ['American Gods', 'Circe', 'Song of Achilles', 'Children of Blood and Bone'] },
      { name: 'Low Fantasy', note: 'Magic is rare, muted, or absent; character and consequence carry more weight than the impossible.', distinction: 'High fantasy uses magic as a central structural element — the magic system has rules, costs, and narrative weight. Low fantasy treats magic as a rumour, a distant possibility, or a thing that has passed from the world. This shifts the genre\'s gravity toward character and politics: without magic as a solution, characters must solve problems through intelligence, violence, alliances, and moral compromise. The result often reads closer to historical fiction than genre fantasy, which is exactly the point. Tolkien himself said that a world feels more real when the magic is rarer.', examples: ['A Song of Ice and Fire', 'The First Law trilogy', 'Pillars of the Earth', 'The Name of the Rose'] },
      { name: 'Portal Fantasy', note: 'Protagonist crosses from the ordinary world into a secondary world; the crossing and its cost IS the story.', distinction: 'Portal fantasy is the most structurally legible fantasy subgenre: the protagonist comes from our world, enters a secondary world, and the contrast between the two is the engine of meaning. The Narnia books, Alice in Wonderland, and The Wizard of Oz all use the portal as a device for defamiliarizing ordinary reality — the secondary world clarifies something about the primary one. The formal risk is that the secondary world exists only as metaphor and has no integrity of its own. The best portal fantasies make the reader mourn having to leave.', examples: ['The Lion, the Witch and the Wardrobe', 'Alice in Wonderland', 'The Wizard of Oz', 'Isekai manga tradition'] },
      { name: 'Romantic Fantasy', note: 'Love story at the center; the secondary world frames and pressures rather than drives the emotional arc.', distinction: 'Fantasy and romance have always overlapped — magic, power differentials, and impossible creatures are natural amplifiers of romantic tension. Romantic fantasy makes the love story structurally primary rather than incidental. The secondary world is not the point; it is the context that creates the obstacles, raises the stakes, and provides the imagery the relationship needs. This is the formal opposite of epic fantasy, where the love story is one thread in a larger tapestry. Here, saving the world is a subplot to saving the relationship.', examples: ['A Court of Thorns and Roses', 'The Bridge Kingdom series', 'Kingdom of the Wicked', 'Stardust'] },
    ],
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
    subgenres: [
      { name: 'Cozy Mystery', note: 'Murder without menace; amateur detective, contained setting, social comedy alongside the crime.', distinction: 'The cozy mystery is a genre of controlled stakes. Death occurs but it does not disturb. The detective is unthreatened, the community is reassuring, and the pleasure is purely intellectual — a puzzle to be solved before the last page. This is a deliberate inversion of hardboiled noir, which uses crime to expose social rot. The cozy uses crime to confirm social order. Neither is more honest; they are arguments about what mystery fiction is for.', examples: ['Agatha Christie\'s Miss Marple series', 'The Thursday Murder Club', 'Richard Osman\'s novels', 'Grantchester'] },
      { name: 'Hardboiled / Noir', note: 'The detective as moral witness to a corrupt world; urban decay, ambiguity, no clean resolution.', distinction: 'Golden Age mystery (Agatha Christie, Dorothy Sayers) assumed that society was fundamentally ordered and crime was an aberration a clever detective could correct. Hardboiled fiction, born in Dashiell Hammett and Raymond Chandler\'s Depression-era pulp writing, argued the opposite: corruption is systemic, the law serves money, and the detective\'s only asset is a private code of honour that society no longer shares. The case is rarely "solved" — it is merely survived.', examples: ['The Big Sleep', 'The Maltese Falcon', 'Chinatown', 'L.A. Confidential'] },
      { name: 'Police Procedural', note: 'Investigation through institutional process; accuracy of method matters as much as the final revelation.', distinction: 'The classic mystery features an eccentric genius who solves the puzzle through brilliance. The police procedural replaces individual genius with institutional process — forensics, database searches, team meetings, bureaucratic friction. This shift makes the form more realistic and, paradoxically, more morally complex: the institution that investigates crime is also an instrument of power with its own corruptions. The best police procedurals — The Wire is the definitive example in television — use the procedure to reveal the institution itself.', examples: ['Ed McBain\'s 87th Precinct series', 'The Wire', 'Wallander', 'In the Woods'] },
      { name: 'Legal Thriller', note: 'Courtroom as the arena where truth and justice are revealed to be different things.', distinction: 'The mystery and the legal thriller share the same engine — a crime, an investigation, a revelation — but the legal thriller adds a specific institutional critique: the courtroom is not a truth machine but an adversarial performance. The better lawyer wins, not the more honest case. This makes the legal thriller inherently more cynical than the classic mystery, which believes in the restoration of order. In the legal thriller, order is restored only if someone can perform justice well enough to convince twelve strangers.', examples: ['To Kill a Mockingbird', 'The Firm', 'Presumed Innocent', 'Just Mercy'] },
      { name: 'Amateur Sleuth', note: 'Non-professional detective drawn in by circumstance; outsider logic sees what insiders have learned not to look for.', distinction: 'The professional detective has methods, credentials, and official access. The amateur sleuth has none of these — and that is the form\'s entire dramatic engine. Without institutional authority, the amateur must rely on social access, personal intuition, and the specific knowledge of their own world (the village, the knitting circle, the museum). The amateur also lacks the professional\'s trained blindness: they see what a detective would file away as irrelevant because they don\'t yet know what\'s relevant.', examples: ['Miss Marple', 'Harriet Vane (Dorothy Sayers)', 'Flavia de Luce series', 'Richard Osman\'s Thursday Murder Club'] },
      { name: 'Locked Room Mystery', note: 'The impossible crime as puzzle; the pleasure is the architecture of the solution.', distinction: 'The locked room mystery is the most formally demanding subgenre — it requires the writer to build an elaborate logical structure in which the crime appears impossible, then dismantle it with a solution that is surprising but rigorously fair. The reader must have all the information needed to solve it. This places craft above all else; the characters and setting are almost secondary to the puzzle\'s internal geometry.', examples: ['And Then There Were None', 'The Name of the Rose', 'House of Leaves', 'Knives Out'] },
      { name: 'Heist', note: 'The crime itself as the subject rather than its investigation; planning, execution, and the inevitable betrayal.', distinction: 'The mystery puts the reader in the detective\'s position, working backward from crime to cause. The heist puts the reader inside the crime itself — rooting for the criminals. This requires a specific moral inversion: the reader\'s pleasure depends on their identification with people breaking the law. The heist earns this by targeting institutions rather than individuals (banks, casinos, corrupt collectors), and by making the criminals charismatic, competent, and honorable by their own code. The mark is always less sympathetic than the thief.', examples: ['The Italian Job', 'Ocean\'s Eleven', 'Heat', 'The Sting'] },
      { name: 'True Crime', note: 'Real events narrated with literary technique; the crime illuminates a social or systemic failure.', distinction: 'True crime is distinguished from thriller and mystery by the specific weight of the real: these are actual people, actual deaths, actual injustices. This raises the form\'s ethical stakes in a way fiction never faces. The best true crime — Capote\'s In Cold Blood, Michelle McNamara\'s I\'ll Be Gone in the Dark — acknowledges the voyeurism involved and transforms it by insisting that the crime matters not as entertainment but as evidence of systemic failure. When it fails, it is entertainment that uses real suffering as raw material.', examples: ['In Cold Blood', 'I\'ll Be Gone in the Dark', 'The Executioner\'s Song', 'Mindhunter'] },
      { name: 'Nordic Noir', note: 'Scandinavian landscape and social welfare systems as the setting; the contrast between surface order and hidden rot.', distinction: 'Nordic Noir\'s central irony is specific and political: the most functional welfare states in the world contain the same violence, corruption, and moral rot as anywhere else. The clean landscape — fjords, snow, long silences — makes the rot more visible, not less. The genre began as social critique (Sjöwall and Wahlöö\'s Martin Beck series was explicitly Marxist) and has retained that critical function even as it became commercially enormous. The isolation that makes Nordic landscapes beautiful is also what makes them good places to hide bodies.', examples: ['The Girl with the Dragon Tattoo', 'Wallander', 'The Killing', 'Jo Nesbø\'s Harry Hole series'] },
    ],
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
    subgenres: [
      { name: 'Contemporary Romance', note: 'Love story set in the present day; stakes are entirely emotional, no historical or fantastical scaffolding.', distinction: 'Contemporary romance removes the genre\'s most common scaffolding — the historical constraints, the supernatural complications, the genre crossover elements — and asks whether the love story can stand on its own. The answer, when the writing is strong enough, is yes. Without magic or period rules to generate conflict, contemporary romance must find it in character: the emotional wounds both protagonists carry, the specific ways they have learned to protect themselves, and the precise cost of allowing someone past those defenses.', examples: ['Beach Read', 'The Hating Game', 'It Ends with Us', 'Normal People'] },
      { name: 'Historical Romance', note: 'Period setting as atmosphere and obstacle; courtship rules and class structures do the work conflict usually does.', distinction: 'Historical romance uses the constraints of a past era as the engine of romantic tension. In a Regency novel, a woman cannot simply declare her feelings — property law, social expectation, and family interest stand between her and the person she wants. The period restrictions are not decoration but structural necessity. When those restrictions are removed by modernity, the form loses its scaffolding. This is why Regency and Victorian settings dominate: they have the richest constraints.', examples: ['Pride and Prejudice', 'Outlander', 'Bridgerton', 'An Offer from a Gentleman'] },
      { name: 'Paranormal Romance', note: 'The love interest is supernatural—vampire, fae, shifter; desire complicated by the inhuman.', distinction: 'Paranormal romance uses the supernatural love interest to literalize the danger and power differential that romance has always trafficked in. A vampire is immortal, physically dominant, and operating from a completely different moral framework. The "will they or won\'t they" tension is now also "will he kill her or not." This makes the genre more honest about the anxieties inside conventional romance while giving them a safe, fantastical container.', examples: ['Twilight', 'Interview with the Vampire', 'A Court of Thorns and Roses', 'Dark Lover'] },
      { name: 'Romantic Comedy', note: 'Comedy of errors, miscommunication, and mistaken identity; the obstacles are social and the tone is light.', distinction: 'Romantic comedy succeeds when the obstacles between the couple are rooted in genuine character flaws rather than plot-manufactured misunderstandings. The best RomComs — Austen\'s work, the Nora Ephron screenplays — use comic obstacles to reveal character: the protagonist\'s pride, the love interest\'s emotional unavailability, are not external problems but things these people must actually change. The tonal demand is precise: light enough that the comedy lands, grounded enough that the emotional resolution earns its weight.', examples: ['When Harry Met Sally', 'Crazy Rich Asians', 'Bridget Jones\'s Diary', 'The Hating Game'] },
      { name: 'Romantic Suspense', note: 'Romance fused with thriller; the couple must survive a genuine external threat to reach each other.', distinction: 'Both romance and thriller use withheld information as tension — romance withholds emotional revelation, thriller withholds factual revelation. Romantic suspense fuses both withholdings, which doubles the reader\'s anxiety. The formal challenge is balancing the two plot threads: if the thriller plot overwhelms the romance, the HEA feels unearned; if the romance overwhelms the thriller, the external threat feels like an obstacle course rather than a genuine danger. The characters must be in equal jeopardy from the killer and from each other.', examples: ['In Death series (J.D. Robb)', 'Outlander', 'The Bronze Horseman', 'Die For Me'] },
      { name: 'Sports Romance', note: 'Athletic competition and team dynamics as the pressure cooker for emotional conflict.', distinction: 'Sports romance uses the structure of athletic competition to do what all good romance does — create repeated, high-stakes, emotionally charged encounters between two people who cannot simply leave. The practice room, the locker room, and the team bus generate forced proximity. The athlete\'s psychology — competitive, controlled, used to performing rather than feeling — maps naturally onto the romance protagonist who has built emotional walls. The game is always a metaphor for the relationship: whoever wins the championship usually also lets themselves be loved.', examples: ['The Kiss Quotient', 'Intercepted', 'Pucked series', 'From Lukov with Love'] },
      { name: 'Small Town Romance', note: 'Community, homecoming, and the intimacy of a world where everyone knows your name and your history.', distinction: 'Small town romance trades the anonymity of the city for the inescapability of a community where everyone already has a version of you. The returnee protagonist — back after years away — cannot be a different person here; everyone knows who they were. The small town functions as both pressure cooker and comfort: the gossip and interference that make a love story complicated are the same forces that make it feel rooted. This is also the subgenre where community itself becomes a character — the town wants the couple together before the protagonists do.', examples: ['Virgin River series', 'Fools Gold series', 'The Hummingbird\'s Daughter', 'Sweet Magnolias'] },
      { name: 'Dark Romance', note: 'Morally compromised protagonists; power, danger, and consent as part of the emotional landscape rather than obstacles to it.', distinction: 'Standard romance resolves all power imbalances by the final act — the dangerous man is tamed, the relationship equalised. Dark romance refuses this resolution. The power differential is the point. This places it in direct tension with the genre\'s core convention (the HEA — Happily Ever After) while still technically delivering it. Whether this is a subversion of the genre or a fulfillment of its most honest impulses is genuinely contested.', examples: ['Icebreaker', 'Corrupt', 'Haunting Adeline', 'Convenience Store Woman (adjacent)'] },
    ],
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
    subgenres: [
      { name: 'Modernist Fiction', note: 'Stream of consciousness, fractured chronology, and interiority over event; the form enacts the meaning.', distinction: 'Pre-modernist fiction assumed a stable narrator with reliable access to events. Modernism broke that contract — consciousness is fragmented, time is not linear, and the reader must work to assemble meaning from competing perspectives. The form is the argument: a fractured narrative is not a failure of technique but a claim that experience is genuinely fractured. Woolf, Joyce, and Faulkner each developed different solutions to the same problem — how do you represent consciousness honestly?', examples: ['Mrs Dalloway', 'Ulysses', 'The Sound and the Fury', 'To the Lighthouse'] },
      { name: 'Postmodern Fiction', note: 'Self-aware about its own fictionality; narrative reliability questioned, reality and representation interrogated.', distinction: 'Modernism broke the conventions of 19th-century realism. Postmodernism broke the conventions of modernism — and broke the idea that any narrative convention could be trusted. Where the modernist novel used formal experimentation to represent consciousness more honestly, the postmodern novel uses it to question whether honesty is available at all. If every story is constructed, and construction is visible, what is the relationship between fiction and reality? Pynchon, DeLillo, and Nabokov all ask this question with different degrees of playfulness and despair.', examples: ['White Noise', 'Gravity\'s Rainbow', 'If on a winter\'s night a traveler', 'The French Lieutenant\'s Woman'] },
      { name: 'Domestic Fiction', note: 'The household, the marriage, the family as the site of all meaningful conflict—private life at full political weight.', distinction: 'Domestic fiction is often dismissed as small — about the kitchen and the bedroom rather than the world. This misreads what the form is doing. The domestic novel insists that the private sphere carries the full weight of social forces: patriarchy, class, race, and economic precarity are all visible inside a marriage, a family dinner, a mother-child relationship. The argument is not that the domestic is separate from politics but that it is where politics actually lands on individual human bodies and psyches.', examples: ['We Need to Talk About Kevin', 'Little Fires Everywhere', 'The Hours', 'Revolutionary Road'] },
      { name: 'Campus Novel', note: 'The university as social microcosm; intellectual vanity, power, and the coming-of-age of ideas.', distinction: 'The campus novel uses the university\'s specific social architecture — tenure, intellectual authority, the seminar room as a theater of power — as its comic and tragic engine. Academics are trained to interpret everything, which makes them spectacular self-deceivers: they can justify anything with sufficient theoretical apparatus. The campus novel exploits this gap between claimed intelligence and actual self-knowledge. It is also a form that has aged in interesting ways — the contemporary campus novel must contend with an institution under genuine existential pressure.', examples: ['Lucky Jim', 'The Secret History', 'Stoner', 'Prep'] },
      { name: 'Autofiction', note: 'The narrator is clearly the author; the boundary between memoir and novel deliberately blurred and examined.', distinction: 'Traditional literary fiction maintains plausible deniability — the author insists the work is invented. Autofiction removes this: the narrator shares the author\'s name, biography, and circumstances. But it is not memoir, because events are shaped, compressed, and sometimes invented for effect. The form asks a genuine question — does it matter what really happened if the emotional truth is accurate? Karl Ove Knausgaard and Rachel Cusk built entire careers on refusing to answer it.', examples: ['My Struggle (Knausgaard)', 'Outline trilogy (Cusk)', 'The Bell Jar', 'Hunger (Roxane Gay)'] },
      { name: 'Short Story Collection', note: 'A sequence of stories with thematic, geographical, or character continuity—a form with its own distinct architecture.', distinction: 'A short story collection is not a novel and not a series of unrelated stories — it is a third thing with its own architecture. The individual stories must work alone; the collection must work as a whole; and the combination should produce meaning neither achieves separately. The linked collection (same characters, or same place) is now the dominant commercial form, but the purest version — stories unified by theme and voice rather than character or location — demands more from the reader and produces a more durable object.', examples: ['Dubliners', 'A Manual for Cleaning Women', 'The Interpreter of Maladies', 'Her Body and Other Parties'] },
      { name: 'Novella', note: 'The middle length that demands compression; every sentence load-bearing, no space for digression.', distinction: 'The novel allows digression, world-building, and subplot. The short story demands compression but permits incompleteness. The novella occupies a precise middle position: long enough for full character development and structural complexity, short enough that every scene must earn its place. There is no fat. This makes it formally the most demanding prose length — and the one most likely to be a single sustained, perfect argument.', examples: ['Of Mice and Men', 'The Old Man and the Sea', 'A River Runs Through It', 'The Metamorphosis'] },
    ],
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
    subgenres: [
      { name: 'Classic Western', note: 'The frontier as moral arena; the lone hero bringing order where law has not yet reached.', distinction: 'The classic Western operates on a specific American moral mythology: the frontier is both dangerous and purifying, and the lone individual — outside the corruptions of eastern civilization — can embody a purer moral code. This is an explicitly ideological form, and the ideology is not incidental to the stories but constitutive of them. Shane, High Noon, and the John Ford cavalry films do not just take place in this moral universe; they argue for it. The revisionist Western exists because that argument needed answering.', examples: ['Shane', 'High Noon', 'The Searchers', 'True Grit'] },
      { name: 'Revisionist Western', note: 'The mythology of the West interrogated; whose story was erased, whose heroism was violence.', distinction: 'The classic Western presented westward expansion as moral progress — civilisation defeating savagery. The revisionist Western treats that mythology as the problem to be examined. Native American displacement, violence against women and minorities, and the brutal economics of land theft become the actual subject. The hero of the classic Western is often the villain of the revisionist one. Clint Eastwood\'s own career traces this arc, from Man with No Name to Unforgiven.', examples: ['Unforgiven', 'Dances with Wolves', 'Bone Tomahawk', 'Blood Meridian'] },
      { name: 'Spaghetti Western', note: 'Italian production, operatic visual style, moral ambiguity; Leone defines the register.', distinction: 'American Westerns operated on moral clarity — the hero wore white, the villain wore black, and the law was ultimately affirmed. Leone\'s Italian productions stripped all of this. Every character is motivated by greed. Violence is operatic and consequence-free. The landscape is hostile rather than promising. The morality is not revised but simply absent — and the resulting nihilism reads as more honest about what the West actually was than the American version ever managed.', examples: ['The Good, the Bad and the Ugly', 'Once Upon a Time in the West', 'Django', 'A Fistful of Dollars'] },
      { name: 'Neo-Western', note: 'Western codes and archetypes transposed to the present; the frontier becomes a suburb, a border, a city.', distinction: 'The Neo-Western does not set stories in the 19th century but imports the genre\'s moral grammar into the present. The lone sheriff becomes a small-town cop. The outlaw becomes a drug cartel enforcer. The frontier becomes the US-Mexico border or the Texas oil fields. This works because the Western\'s core tensions — law versus violence, civilisation versus wilderness, individual versus community — are not historical. They are permanent.', examples: ['No Country for Old Men', 'Wind River', 'Hell or High Water', 'Sicario'] },
      { name: 'Contemporary Western', note: 'Set in the present American West; the landscape, its economies, and its silences are the subject.', distinction: 'The contemporary Western asks what the genre\'s moral grammar looks like when the frontier has closed and the homesteaders have become ranchers, oil workers, and small-town cops. The landscape remains — vast, indifferent, beautiful — but the institutions have arrived, and they are as corrupt as anywhere else. The Western\'s core tension (individual moral code versus institutional law) is not resolved in the contemporary West; it has simply found new forms. Cormac McCarthy\'s Border Trilogy is its literary peak.', examples: ['All the Pretty Horses', 'Brokeback Mountain', 'Winter\'s Bone', 'Lean on Pete'] },
      { name: 'Weird West', note: 'Frontier setting invaded by horror, fantasy, or SF; the genre\'s conventions made strange and uncanny.', distinction: 'The Weird West fuses the Western\'s moral geography with genre elements — vampires, demons, magic, alien technology — that the classic Western excludes by definition. The result is not merely an aesthetic hybrid but a thematic one: the Western\'s question (can good triumph in a lawless world?) becomes more interesting when good and evil are supernatural rather than human categories. The landscape that is already haunted in the classic Western becomes literally haunted in the Weird West. The form has found enormous life in comics and games, where it runs faster than in prose.', examples: ['Deadwood (TV with supernatural undertones)', 'From Dusk Till Dawn', 'The Dark Tower series', 'Strange the Dreamer'] },
    ],
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
    subgenres: [
      { name: 'Ancient World', note: 'Greece, Rome, Egypt, Mesopotamia; civilizations whose distance allows examination of what is universal about power and survival.', distinction: 'Ancient world fiction has the longest imaginative distance from the present day, which creates both its greatest freedom and its greatest risk. Freed from the obligation to depict recent recognizable history, the writer can examine power, ambition, and survival in their most elemental forms. The risk is that the ancient world becomes costume — modern psychological realism dressed in a toga. The best ancient world fiction uses the distance to defamiliarize universal experiences: Hilary Mantel on Cromwell does what Mary Renault on Alexander does — makes the distant intimate without making it anachronistic.', examples: ['I, Claudius', 'The Pillars of the Earth', 'Circe', 'Masters of Rome series'] },
      { name: 'Medieval', note: 'Feudal hierarchy, religious authority, plague, and warfare; the precariousness of life before modernity arrived.', distinction: 'Medieval historical fiction must contend with the modern reader\'s specific blind spots about the period: they know it from fantasy more than history. The challenge is to write a world governed by genuinely different assumptions — about the body, about God, about the meaning of death, about what a person is — without either romantically simplifying it or condescendingly explaining it. The medieval world\'s foreignness is the asset; the writer\'s job is to make it feel lived in rather than performed.', examples: ['The Name of the Rose', 'Pillars of the Earth', 'A Distant Mirror', 'Shardlake series'] },
      { name: 'Tudor / Elizabethan', note: 'Courts, succession crises, and the collision of reformation with power; Hilary Mantel territory.', distinction: 'The Tudor period offers historical fiction its most concentrated cocktail: dynastic violence, religious revolution, and the machinery of royal power operating at full speed. Mantel\'s Wolf Hall trilogy demonstrated what the period could do at the highest literary level — using the historical record as a skeleton and imagining the connective tissue of motive, loyalty, and fear that made it move. The present-tense, close-third narration she invented for Cromwell is now the template.', examples: ['Wolf Hall', 'Bring Up the Bodies', 'The Other Boleyn Girl', 'Hilary Mantel\'s The Mirror and the Light'] },
      { name: 'Regency', note: 'Austen\'s era; property, marriage, and social performance in a rigid class system with high personal stakes.', distinction: 'The Regency period dominates historical fiction for a structural reason: it combines maximum social constraint with maximum psychological access. The rules of courtship are strict enough to generate constant dramatic tension from the smallest violations, and the stakes — a woman\'s entire economic future decided by whom she marries — are genuinely life-altering. This gives the form its moral seriousness without requiring external events like war or plague. All the drama can be generated from a drawing room, a ballroom, and two people who cannot simply say what they mean.', examples: ['Pride and Prejudice', 'Bridgerton', 'Longbourn', 'Jonathan Strange & Mr Norrell'] },
      { name: 'Victorian', note: 'Empire, industrialization, and repression; surface respectability laid over enormous social violence.', distinction: 'Victorian historical fiction benefits from the era\'s extraordinary hypocrisy gap — between stated moral values and actual practice at every social level. The Victorians wrote extensively about virtue while running an empire, industrializing poverty, and enforcing rigid sexual norms. This makes the period irresistible for historical fiction: every story can run a double track, one visible and one suppressed. The suppressed track — what people actually wanted, feared, and did — is almost always more interesting than the official one.', examples: ['The French Lieutenant\'s Woman', 'Fingersmith', 'The Crimson Petal and the White', 'Drood'] },
      { name: 'World War Fiction', note: 'WWI or WWII as setting; the experience of soldiers, civilians, and the machinery of mass death.', distinction: 'War fiction set in WWI and WWII carries a specific moral weight that contemporary war fiction does not: the reader already knows the outcome. This dramatic irony is the genre\'s most powerful tool. Characters who believe the war will be over by Christmas, soldiers who don\'t know they are walking into a slaughter — the reader\'s foreknowledge creates unbearable dramatic tension without a single plot twist. The genre must work against sentimentality while still earning its grief.', examples: ['All Quiet on the Western Front', 'The Naked and the Dead', 'Atonement', 'A Farewell to Arms'] },
      { name: 'Post-Colonial Historical', note: 'Empire and its aftermath narrated from the perspective of the colonized rather than the colonizer.', distinction: 'Most historical fiction set during the era of empire took the colonizer\'s perspective as the default — explorers, administrators, soldiers. Post-colonial historical fiction is a deliberate counter-archive: it recovers the experience of the colonized, names what was destroyed, and refuses the civilising-mission framing that conventional historical fiction often absorbed uncritically. It treats the historical record itself as a site of power — asking not just what happened, but who was allowed to write it down.', examples: ['Things Fall Apart', 'Beloved', 'Midnight\'s Children', 'The God of Small Things'] },
      { name: 'Historical Mystery', note: 'Crime in a period setting; the investigative form used to expose what a historical society deliberately concealed.', distinction: 'The historical mystery uses the mystery\'s investigative engine to excavate what the historical record suppressed — the unofficial version, the story behind the official account. This gives it more ideological potential than the contemporary mystery: the detective\'s investigation is literally an act of counter-history, recovering what the powerful worked to conceal. The period constraint also creates a specific formal pleasure: the reader knows things the characters cannot, and the detective must solve the crime without forensics, databases, or the assumption that women and servants have reliable testimony.', examples: ['The Name of the Rose', 'Shardlake series', 'The No. 1 Ladies\' Detective Agency (different tradition)', 'An Instance of the Fingerpost'] },
    ],
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
    subgenres: [
      { name: 'Romantic Comedy', note: 'Mismatched partners, an obstacle course of misunderstandings, and a union that feels earned rather than given.', distinction: 'The romantic comedy\'s engine is the gap between what the protagonists believe about themselves and about each other, and what the audience can see is true. The comic obstacles are not random inconveniences — they are structural expressions of the characters\' flaws and defenses. When the misunderstanding is finally resolved, it must resolve a genuine problem in the characters, not just a plot-level confusion. The audience laughs because they are ahead of the characters; they cry at the resolution because the characters have finally caught up.', examples: ['It Happened One Night', 'When Harry Met Sally', 'The Philadelphia Story', 'Four Weddings and a Funeral'] },
      { name: 'Satire', note: 'Social or political targets attacked through irony and exaggeration; laughter with a specific target.', distinction: 'Most comedy seeks laughs. Satire has a weapon concealed inside the laugh — the target is a real institution, ideology, or person, and the comedy is the delivery mechanism for genuine critique. The satirist\'s gamble is that the audience will find the right things funny — that the laughter is directed, not indiscriminate. When it works, satire changes how people see power. When it fails, the target simply adopts the joke and defuses it.', examples: ['Dr. Strangelove', 'Catch-22', 'Parasite', 'The Death of Stalin'] },
      { name: 'Farce', note: 'Situations escalate past all control; physical comedy, mistaken identity, doors opening at the worst moment.', distinction: 'Farce is the comedy of inevitability: once the first wrong assumption or mistaken identity is established, the situation must escalate with mechanical precision until collapse. The audience\'s pleasure is watching a logical system produce consequences the characters cannot see coming because they are inside it. The characters must believe their own desperate management strategies will work — a farce character who knows they are in a farce is no longer funny. Timing, pace, and structural geometry matter more here than in any other comic form.', examples: ['Noises Off', 'The Pink Panther', 'Fawlty Towers', 'La Cage aux Folles'] },
      { name: 'Dark Comedy', note: 'Comedy derived from subjects that are not funny—death, illness, failure—without flinching from any of it.', distinction: 'Standard comedy asks audiences to laugh at situations with no real stakes. Dark comedy insists on real stakes — death, disease, moral failure — and asks the audience to laugh anyway. The comedy and the horror are not in conflict; they are the same thing. This makes it the most technically demanding comic form, because the tonal balance between genuine distress and laughter is razor-thin. A degree too far in either direction destroys both.', examples: ['Four Weddings and a Funeral', 'In Bruges', 'M*A*S*H', 'Fleabag'] },
      { name: 'Screwball Comedy', note: 'Rapid-fire dialogue, class collision, and gender warfare at an impossible speed; 1930s Hollywood as the peak.', distinction: 'Screwball comedy emerged in 1930s America as a response to two simultaneous pressures: Hays Code restrictions (which banned explicit sexuality) and the Depression (which made class collision a live social reality). The result was a form that channeled sexual tension entirely into verbal combat, and made the class difference between the protagonists the source of both the comedy and the romance. The woman in screwball is almost always the smarter, more capable figure — a formal reversal that gave the genre its progressive edge and its enduring appeal.', examples: ['His Girl Friday', 'It Happened One Night', 'Bringing Up Baby', 'The Lady Eve'] },
      { name: 'Parody', note: 'A specific genre, text, or cultural style imitated to expose and deflate its conventions.', distinction: 'Parody requires the most intimate knowledge of its target — you can only expose conventions you understand completely. Bad parody mocks surface features without understanding why those features exist. Good parody attacks the logic underneath the surface, which means it is also a form of criticism. Mel Brooks\'s Westerns, Austen\'s Northanger Abbey, and Scream all know their genre targets so precisely that they illuminate the genre while dismantling it. This is why the best parodies are also the best examples of what they mock.', examples: ['Northanger Abbey', 'Blazing Saddles', 'Galaxy Quest', 'Don Quixote'] },
      { name: 'Absurdist Comedy', note: 'Logic taken to its illogical conclusion; the world operates by different, internally consistent rules.', distinction: 'Most comedy is grounded in recognisable reality — we laugh because we recognise the situation. Absurdist comedy builds an entirely different reality with its own internal logic, then applies that logic rigorously. The humour is in the gap between the absurd premise and the perfectly rational behaviour within it. Monty Python, Kafka, and Beckett all operate here — the horror and the comedy are the same realisation: the world has no obligation to make sense.', examples: ['The Trial', 'Waiting for Godot', 'Monty Python and the Holy Grail', 'The Hitchhiker\'s Guide to the Galaxy'] },
      { name: 'Tragicomedy', note: 'Equal parts tragedy and comedy; the form refuses to resolve into either register and is richer for it.', distinction: 'Tragedy and comedy are not opposite emotional experiences but adjacent ones — both involve incongruity, both require the audience to hold two things in their heads simultaneously. Tragicomedy refuses to resolve that tension into either register. Chekhov famously insisted his plays were comedies; audiences wept. Beckett\'s Waiting for Godot is about two men waiting for someone who never comes — which is either deeply funny or unbearable, and the correct answer is that it is both. The form\'s argument is that this is how life actually feels from the inside.', examples: ['The Cherry Orchard', 'Four Weddings and a Funeral', 'Fleabag', 'About Schmidt'] },
    ],
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
    subgenres: [
      { name: 'WWI Fiction', note: 'The war that destroyed the 19th century\'s faith in progress; futility, mud, and the industrial machinery of death.', distinction: 'WWI fiction operates under a specific dramatic irony unavailable to fiction about other wars: the soldiers who fought it believed it would be short, heroic, and worth it. The reader knows it lasted four years and killed seventeen million people. This gap between expectation and reality is the genre\'s engine. The best WWI fiction does not explain the war — it recreates the experience of people who had no framework for what was happening to them, and trusts the reader\'s knowledge to supply the horror.', examples: ['All Quiet on the Western Front', 'Birdsong', 'Regeneration', 'Goodbye to All That'] },
      { name: 'WWII Fiction', note: 'The moral clarity of the "good war" complicated by civilian experience, the Holocaust, and questions of complicity.', distinction: 'WWII fiction operates under a specific burden that WWI fiction does not: the narrative of the "good war" is so culturally dominant that any deviation from it requires justification. The most interesting WWII fiction complicates the moral clarity without abandoning it entirely — it examines what the victory cost, who was excluded from its benefits, and what ordinary people did in the space between heroism and atrocity. The Holocaust provides an extreme case: fiction about the genocide must contend with Primo Levi\'s warning that representation itself can normalize.', examples: ['The Naked and the Dead', 'Catch-22', 'Life is Beautiful', 'Suite Française'] },
      { name: 'Vietnam War Fiction', note: 'Disillusionment, moral injury, and the gap between official narrative and what soldiers actually experienced.', distinction: 'Vietnam War fiction is defined by a fracture between public narrative and private experience that did not exist in earlier American war literature. WWII fiction could, however ambivalently, frame sacrifice as meaningful. Vietnam fiction could not — the war\'s political illegitimacy was visible in real time. The result is a body of work obsessed with the difference between what happened and what the official record said happened, and with the psychological cost of carrying that gap.', examples: ['The Things They Carried', 'Apocalypse Now', 'Full Metal Jacket', 'Born on the Fourth of July'] },
      { name: 'Contemporary War Fiction', note: 'Iraq, Afghanistan, the wars without clear ends; PTSD, civilian casualties, and objectives that keep shifting.', distinction: 'Contemporary war fiction cannot use WWI and WWII\'s dramatic irony (the reader knowing the outcome). These wars have no clean outcomes, no V-E Days, no definitive ends. This forces the form to find its meaning elsewhere — in individual experience, in moral injury, in the gap between the institutional story and the soldier\'s actual story. It also faces the challenge of an American public largely insulated from the wars it is fighting, which creates a specific kind of narrative obligation: these stories must close that distance.', examples: ['The Yellow Birds', 'The Hurt Locker', 'Redeployment', 'Matterhorn'] },
      { name: 'Military Thriller', note: 'Tactics, technology, and the mechanics of combat as both subject and pleasure.', distinction: 'The military thriller is to war fiction what Hard SF is to science fiction: the technical accuracy and procedural detail are themselves pleasures, not just scaffolding. The reader wants to understand how the mission works, what the weapons do, how the chain of command operates. This places a different obligation on the writer than literary war fiction — authenticity of procedure replaces psychological depth as the primary currency. Tom Clancy essentially created the genre as a commercially dominant form by making the Cold War machine itself the protagonist.', examples: ['The Hunt for Red October', 'Executive Orders', 'Black Hawk Down', 'Generation Kill'] },
      { name: 'Anti-War Satire', note: 'War depicted as systemic absurdity; Catch-22 and Slaughterhouse-Five define the poles.', distinction: 'Straightforward war fiction must contend with the charge that representing violence glamourises it. Anti-war satire resolves this by making the machinery of war too ridiculous to admire. Heller and Vonnegut both used the comic novel to say things about WWII that a serious treatment could not — that the institutions running the war were as dangerous to their own soldiers as the enemy, that survival required a kind of strategic insanity, that heroism was indistinguishable from stupidity at scale.', examples: ['Catch-22', 'Slaughterhouse-Five', 'M*A*S*H', 'Dr. Strangelove'] },
      { name: 'Home Front Fiction', note: 'The war from civilian perspective; rationing, grief, and waiting as the primary experience of conflict.', distinction: 'Combat fiction puts the reader in the violence. Home front fiction puts the reader in the waiting room — with those who have no information, no agency, and no timeline. This is formally a different kind of tension: not the adrenaline of danger but the slow accumulation of absence. The home front also reveals who the war is being fought by and for: women running economies, children growing up with fathers as photographs, entire communities organized around loss that may still be coming. The grief in home front fiction is anticipatory, which is its own specific horror.', examples: ['Atonement', 'The Guernsey Literary and Potato Peel Pie Society', 'Suite Française', 'Pachinko'] },
    ],
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
    subgenres: [
      { name: 'YA (Young Adult)', note: 'Protagonist 14-18; the stakes of identity, acceptance, and first experience feel absolute because they are.', distinction: 'YA is often dismissed as a lesser category, but its formal constraint is genuinely difficult: the protagonist cannot draw on experience, institutional power, or fully formed judgement. Every decision is made with incomplete information under social pressure. This is not a limitation — it is the condition that generates maximum dramatic tension. The stakes feel total because for the protagonist, they are. Loss of friendship, parental approval, or first love are not trivial stakes; they are the entire world the character has ever known.', examples: ['The Catcher in the Rye', 'The Perks of Being a Wallflower', 'Speak', 'The Outsiders'] },
      { name: 'School Story', note: 'The institution as the entire world; hierarchy, friendship, and social learning in a fully contained environment.', distinction: 'The school story\'s formal advantage is containment: the institution provides a closed world with its own hierarchy, rules, and power dynamics, making it a microcosm for examining social forces that would be harder to render in the open world. The pupil\'s position — subject to authority, learning the gap between official rules and actual power — is also the reader\'s position, which creates immediate identification. The form ranges from Tom Brown\'s Schooldays to Harry Potter to Never Let Me Go, each using the institution to ask a different question about formation, authority, and what education actually does to people.', examples: ['Harry Potter series', 'Never Let Me Go', 'The Secret History', 'Tom Brown\'s Schooldays'] },
      { name: 'Campus Novel', note: 'University as second coming-of-age; intellectual and personal formation in an enclosed adult community.', distinction: 'The campus novel takes the school story into adulthood, where the stakes are higher and the authority more easily questioned — but also more easily seduced. The university offers intellectual formation and the specific danger of intellectual vanity: characters convinced their ideas protect them from ordinary emotional experience. The form\'s greatest irony, exploited by everyone from Kingsley Amis to Donna Tartt, is that the people trained to think most clearly are often the most spectacularly self-deceived.', examples: ['The Secret History', 'Lucky Jim', 'Stoner', 'Rules of Civility'] },
      { name: 'Teen Film', note: 'The high school social hierarchy as the universe; genre conventions established by John Hughes and constantly revised.', distinction: 'The teen film is the coming-of-age story compressed and externalized: where the Bildungsroman explores interiority over years, the teen film renders the same formation through social performance in a compressed timeline — usually a school year or a single summer. The high school functions as a brutally transparent model of adult social dynamics: every adult hierarchy (class, beauty, athletic status) is present but stripped of its justifications, making the artificiality visible. John Hughes established the form\'s conventions; later films like Eighth Grade have used them to make something much darker.', examples: ['The Breakfast Club', 'Clueless', 'Eighth Grade', 'Lady Bird'] },
      { name: 'Road Novel as Formation', note: 'The journey as the education; departure from home, encounter with otherness, and a changed return.', distinction: 'Most coming-of-age stories confine the protagonist to a single institution — school, family, town. The road novel uses physical movement as the engine of formation. Leaving home is not incidental to the story; it is the story. Each new place and person functions as a test of the protagonist\'s emerging identity. The return — if there is one — confirms the change. What you leave behind and what you carry is the whole argument.', examples: ['On the Road', 'The Motorcycle Diaries', 'Wild', 'Into the Wild'] },
    ],
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
    subgenres: [
      { name: 'Classic Film Noir', note: '1940s-50s visual style; chiaroscuro, femme fatale, cynical detective, and moral rot beneath prosperity.', distinction: 'Film noir was not named by its makers — French critics coined the term after the war when American crime films arrived in a batch. The style emerged from the collision of German Expressionist emigre cinematographers (Lang, Siodmak, Wilder) with hard-boiled American source material and post-war anxieties. The visual grammar — low-key lighting, deep shadows, canted angles — was not decorative but expressive: the world is unstable and corrupt, and the frame says so before a word of dialogue is spoken.', examples: ['Double Indemnity', 'The Maltese Falcon', 'Sunset Boulevard', 'Out of the Past'] },
      { name: 'Neo-Noir', note: 'Noir sensibility and visual codes applied to contemporary settings; the corruption has just changed address.', distinction: 'Classic noir was rooted in a specific post-war American moment. Neo-noir keeps the moral grammar — cynicism, betrayal, the guilty protagonist, the city as moral landscape — but relocates it. The contemporary city, the corporate world, the digital age all offer their own versions of the corruption noir requires. What makes it neo-noir rather than just crime fiction is the visual and tonal inheritance: the shadows are still there, even in daylight.', examples: ['Chinatown', 'Blade Runner', 'Drive', 'Brick'] },
      { name: 'Nordic Noir', note: 'Scandinavian landscapes and social democracies as the backdrop for systemic moral failure.', distinction: 'Nordic Noir takes the US hardboiled tradition\'s central argument — corruption hides inside apparently functional institutions — and relocates it to the world\'s most functional welfare states. This creates the form\'s specific irony: the countries with the highest social trust, the lowest inequality, and the strongest institutions still contain the same violence, exploitation, and rot. The Scandinavian landscape amplifies this — the clean lines, the long silences, the blinding snow all make the darkness more visible, not less. The form is politically serious in a way American crime fiction rarely achieves.', examples: ['The Girl with the Dragon Tattoo', 'Wallander', 'The Bridge', 'The Snowman'] },
      { name: 'Hardboiled Fiction', note: 'The literary antecedent; Hammett and Chandler\'s prose style and moral vision before film got hold of it.', distinction: 'Hardboiled fiction\'s contribution to American literature is not the plots, which are often famously incoherent (Chandler himself could not explain who killed the chauffeur in The Big Sleep), but the prose style and the moral stance. The sentences are short, physical, and stripped of sentiment. The detective moves through a world of systemic corruption with nothing but a private code of honor that the world does not share or reward. This is a specific American noir argument: institutions fail, the law is corrupt, but the individual\'s moral integrity is not negotiable — even if it costs everything.', examples: ['The Big Sleep', 'The Maltese Falcon', 'Red Harvest', 'The Long Goodbye'] },
      { name: 'Tech Noir', note: 'Noir aesthetics fused with science fiction technology; Blade Runner as the defining text.', distinction: 'Tech Noir asks what noir\'s central question — who can you trust in a corrupt world? — looks like when the corruption is embedded in the technology you cannot live without. Surveillance, AI, digital identity, and corporate data are the new corrupt institutions replacing the police department and the mob. The femme fatale is now an algorithm. The private eye is now a hacker. The rain-slicked streets now glow with the light of screens.', examples: ['Blade Runner', 'Ghost in the Shell', 'Dark City', 'Minority Report'] },
      { name: 'Surreal Noir', note: 'The genre\'s logic taken past realism; dream logic, impossible spaces, and fractured chronology.', distinction: 'Classic noir uses shadow and moral ambiguity to suggest that reality is not stable. Surreal noir takes this implication literally: reality is not stable, space is impossible, chronology is broken, and the line between dream and event is deliberately uncrossable. This is a logical extension of noir\'s core insight — if corruption is total and the world cannot be trusted, why would the laws of physics be exempt? Lynch\'s Twin Peaks and Lost Highway are the defining texts. The form asks whether the noir protagonist\'s paranoia was ever actually paranoia, or just accurate perception of a world that was always more fluid than it appeared.', examples: ['Twin Peaks: Fire Walk with Me', 'Lost Highway', 'The Third Policeman', 'House of Leaves'] },
    ],
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
    subgenres: [
      { name: 'Personal Essay', note: 'The writer\'s own experience as the subject and instrument; Montaigne invented the form, everyone else has been catching up.', distinction: 'The personal essay is not autobiography — it does not narrate a life. It uses a single experience, observation, or idea as a lens to examine something larger. The writer is present not as the subject but as the thinking instrument. The reader follows the mind working through a problem in real time. This makes the form uniquely honest: the conclusion is not predetermined, and the essay earns its insight by actually earning it on the page.', examples: ['Essays of Montaigne', 'Consider the Lobster (David Foster Wallace)', 'Notes of a Native Son (James Baldwin)', 'Slouching Towards Bethlehem (Joan Didion)'] },
      { name: 'Travel Writing', note: 'Place as the vehicle for examining the writer\'s interiority and assumptions about the world.', distinction: 'Bad travel writing is a guidebook with opinions. Good travel writing uses place as a mirror — the foreign country is the context in which the writer\'s assumptions become visible to them for the first time. The best travel writers (Ryszard Kapuściński, Bruce Chatwin, Rolf Potts) understand that they are not documenting a place but documenting the collision between themselves and a place. The writing that results is as much about the writer\'s unexamined worldview as it is about the country visited.', examples: ['In Patagonia', 'The Songlines', 'Neither Here Nor There', 'An Area of Darkness'] },
      { name: 'Immersion Journalism', note: 'The journalist enters the subject\'s world to report from inside it; participation as the method.', distinction: 'Conventional journalism maintains distance from the subject — the reporter observes. Immersion journalism removes that distance deliberately. The journalist joins a community, institution, or world to report it from inside. This produces richer material and more honest empathy, but raises a genuine ethical question: at what point does participation compromise the observer? The best immersion journalism holds both the closeness and the critical distance simultaneously, which is very difficult.', examples: ['Fast Food Nation', 'Nickel and Dimed', 'The Warmth of Other Suns', 'Black Hawk Down'] },
      { name: 'True Crime', note: 'Real crime narrated with literary technique; the crime illuminates a social or institutional failure.', distinction: 'True crime is the most ethically contested nonfiction genre because its subject is real people — victims, perpetrators, and the families of both — whose suffering is the engine of the reader\'s entertainment. The best true crime acknowledges this tension and uses it. The crime is not the point; the crime is the aperture through which a broken institution, a failed community, or a systemic injustice becomes visible. When it works, the genre is social investigation. When it fails, it is voyeurism dressed as journalism.', examples: ['In Cold Blood', 'I\'ll Be Gone in the Dark', 'Helter Skelter', 'Mindhunter'] },
      { name: 'Memoir', note: 'A life or period of a life narrated by its subject; the selection of what to include IS the argument.', distinction: 'Memoir\'s central formal problem is that memory reconstructs rather than records. Every memoir is a shaped artifact, not a transcript. The honest memoirist makes this visible: they acknowledge what they cannot know, what they have compressed or dramatized for effect, and what they have withheld for reasons they may not fully understand. The dishonest memoirist pretends to be a camera. The form is most powerful when the gap between the experiencing self and the narrating self is large enough to produce genuine insight — when the writer finally understands something about their own past that they could not see while living it.', examples: ['The Liar\'s Club', 'The Year of Magical Thinking', 'Between the World and Me', 'Educated'] },
      { name: 'Essay Collection', note: 'Essays in sequence that accumulate into a larger argument no single piece could carry alone.', distinction: 'A collection of essays is not a book about multiple subjects — it is a book with a single sensibility applied to multiple subjects, and the sensibility is the point. The reader does not come to an essay collection for information; they come for the company of a particular mind working on a range of problems. This makes the collection\'s architecture crucial: the order of essays, the shifts in register, the way one piece sets up what the next dismantles — these are as carefully considered as the structure of a novel in the best collections.', examples: ['Notes of a Native Son', 'Slouching Towards Bethlehem', 'We Should All Be Feminists', 'Consider the Lobster'] },
    ],
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
    subgenres: [
      { name: 'Political Dystopia', note: 'A totalitarian state as the setting; surveillance, language control, and the systematic suppression of individuality.', distinction: 'Political dystopia is the genre\'s founding form — Zamyatin, Orwell, and Huxley all wrote in direct response to specific political threats they were watching develop in real time. The formal challenge is making oppression feel lived-in rather than instructional. The best political dystopias put the reader inside a consciousness that has already been partially shaped by the system — so the horror is not just what the state does, but what the protagonist has already accepted as normal before the story begins.', examples: ['Nineteen Eighty-Four', 'Brave New World', 'We', 'The Handmaid\'s Tale'] },
      { name: 'Climate Dystopia', note: 'Ecological collapse as the world the protagonist inherits; what human society does to itself in the aftermath.', distinction: 'Climate dystopia differs from political dystopia in that its catastrophe has no villain to overthrow. The totalitarian state has a dictator; the climate crisis has collective failure distributed across decades and billions of people. This makes revolution an inadequate response — there is no Winter Palace to storm. The best climate dystopia is therefore more morally complex than political dystopia: it asks what human communities do when the catastrophe is not someone else\'s fault, and survival requires renegotiating the values that caused the crisis.', examples: ['The Drowned World', 'The Windup Girl', 'Flight Behavior', 'Gold Fame Citrus'] },
      { name: 'Technological Dystopia', note: 'Technology serving control rather than liberation; automation, surveillance, and digital dependency as the cage.', distinction: 'Where political dystopia fears the state, technological dystopia fears the tool. The threat is not a dictator but a system — one that no single person controls or intended, but that produces oppression as a byproduct of optimization. This makes it harder to dramatize because there is no villain to confront. The most sophisticated technological dystopias locate the horror in the protagonist\'s own complicity: they use the system because it is convenient, and cannot stop even after they understand the cost.', examples: ['Black Mirror', 'The Circle', 'Her', 'Never Let Me Go'] },
      { name: 'YA Dystopia', note: 'Coming-of-age inside a collapsed or authoritarian society; the protagonist\'s formation IS the revolution.', distinction: 'YA dystopia fuses two formal advantages: the coming-of-age genre\'s guaranteed internal stakes (identity formation is always dramatic) with the dystopia\'s external stakes (the system is actively trying to prevent that formation). The protagonist is at the exact age when the system most needs to complete their indoctrination — and the story is the failure of that project. This gives YA dystopia a structural clarity that adult dystopia often lacks: the personal and political are the same conflict.', examples: ['The Hunger Games', 'Divergent', 'The Giver', 'Legend'] },
      { name: 'Post-Apocalyptic', note: 'After the fall; what survives, who rebuilds, and on whose terms the new world gets organized.', distinction: 'The post-apocalyptic story is the thought experiment that strips civilization to its foundations and asks what those foundations actually are. Every social contract, every institution, every assumption about how people should treat each other is put back in play. This is its political power: the answer to "what survives?" is the writer\'s theory of what is essential about human social life. McCarthy says almost nothing survives. Mandel says art survives. Butler says community and adaptation survive. These are not aesthetic choices but arguments about what human beings fundamentally are.', examples: ['The Road', 'Station Eleven', 'Parable of the Sower', 'The Children of Men'] },
      { name: 'Utopian Fiction', note: 'The imagined good society as argument; what we would have to become—and sacrifice—to actually build it.', distinction: 'Utopian fiction is the most unfashionable speculative form because optimism reads as naive and happy societies are dramatically inert. The best utopian fiction solves this by making the cost of the good society visible — what had to be surrendered, who had to be excluded, what freedoms had to be traded. It is not a dream but an argument: here is what a better world requires, and here is what that means. Le Guin\'s The Dispossessed is the genre\'s peak because it refuses to let the utopia be comfortable.', examples: ['The Dispossessed (Le Guin)', 'News from Nowhere', 'Ecotopia', 'A Psalm for the Wild-Built'] },
    ],
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
      transition: 'box-shadow 0.22s var(--ease-out), border-color 0.22s ease',
      boxShadow: 'var(--shadow-sm), inset 0 1px 0 rgba(255,255,255,0.8)',
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

          <div className="genre-detail-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
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
                    <span style={{ color: 'var(--amber, #C3D9A8)', flexShrink: 0, marginTop: '5px', fontSize: '8px' }}>
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
              marginBottom: '12px',
            }}>Subgenres</p>

            {/* Featured subgenres — expanded treatment */}
            {genre.subgenres.some(s => s.distinction) && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '12px' }}>
                {genre.subgenres.filter(s => s.distinction).map((s, i) => (
                  <div key={i} style={{
                    background: '#fff',
                    border: '1px solid var(--green-border)',
                    borderLeft: '3px solid var(--green)',
                    borderRadius: '8px',
                    padding: '14px 16px',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', fontWeight: '700', color: 'var(--green)', margin: 0 }}>{s.name}</p>
                    </div>
                    <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.6', margin: '0 0 8px' }}>{s.note}</p>
                    <p style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', fontWeight: '600', color: 'var(--text-dark)', margin: '0 0 4px' }}>What sets it apart</p>
                    <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.6', margin: '0 0 10px' }}>{s.distinction}</p>
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-soft)', margin: '0 0 6px' }}>Famous examples</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {s.examples.map((ex, j) => (
                        <span key={j} style={{
                          fontFamily: 'var(--font-ui)',
                          fontSize: '12px',
                          fontWeight: '500',
                          color: 'var(--text-dark)',
                          background: 'var(--green-pale)',
                          border: '1px solid var(--green-border)',
                          padding: '3px 10px',
                          borderRadius: '20px',
                        }}>{ex}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Standard subgenres — compact grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '8px' }}>
              {genre.subgenres.filter(s => !s.distinction).map((s, i) => (
                <div key={i} style={{
                  background: 'var(--off-white)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '10px 14px',
                }}>
                  <p style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', fontWeight: '600', color: 'var(--text-dark)', margin: '0 0 4px' }}>{s.name}</p>
                  <p style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--text-mid)', lineHeight: '1.5', margin: 0 }}>{s.note}</p>
                </div>
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
      <section style={{ background: 'linear-gradient(160deg, #2D5016 0%, var(--green) 55%, #4a8a24 100%)', padding: '44px 24px 40px' }}>
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
