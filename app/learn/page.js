import Link from 'next/link'
import CategoryList from './CategoryList'

export const metadata = {
  title: "Free Screenwriting & Story Craft Lessons —Structure, Character, Dialogue",
  description: "Free craft lessons for screenwriters, novelists, and short story writers. Structure, character arc, dialogue, theme, scene work, frameworks, and short fiction publication.",
  keywords: "free screenwriting lessons, how to write a screenplay, story structure lessons, character arc, dialogue writing, how to write a novel, point of view fiction, adaptation screenwriting, save the cat beats, hero journey steps, screenwriting course free, film school alternative online",
  openGraph: {
    title: "Free Screenwriting & Story Craft Lessons",
    description: "35+ lessons on structure, character, dialogue, theme, POV, and adaptation. For screenwriters and novelists. Free forever.",
    url: "https://eve-screenwriting.vercel.app/learn",
  },
  alternates: {
    canonical: "https://eve-screenwriting.vercel.app/learn",
  },
}


const lessons = [
  {
    category: 'Start Here',
    badge: 'Free',
    items: [
      { title: 'What is a story? The simplest honest answer', slug: 'what-is-a-story', time: '5 min', level: 'Beginner', preview: 'A person who wants something, and the difficulty of getting it. Before structure, before character, the definition that actually holds up.' },
      { title: 'Character before plot: why it has to come first', slug: 'character-before-plot', time: '7 min', level: 'Beginner', preview: 'Plot is furniture. Character is the person in the room. Get this order wrong and nothing works, no matter how clever the story is.' },
      { title: 'The first page: what your opening actually has to do', slug: 'the-first-page', time: '6 min', level: 'Beginner', preview: 'Your opening page does not need a hook. It needs a world. Here is what the first page is actually for and what kills most of them.' },
      { title: 'How to start: the first thing every beginner needs to know', slug: 'how-to-start', time: '7 min', level: 'Beginner', preview: 'Most beginning writers never finish anything not because they lack talent, but because they start wrong. Here is how to actually begin.' },
      { title: 'Fear and writing: why most writers stop and how not to', slug: 'fear-and-writing', time: '6 min', level: 'Beginner', preview: 'Fear is at the root of most bad writing. Here is what writers are actually afraid of and how to write through it instead of around it.' },
      { title: 'Finding your story: where ideas actually come from', slug: 'finding-your-story', time: '6 min', level: 'Beginner', preview: 'The question every writer gets asked. The honest answer is: everywhere and nowhere. Here is how to develop the habit of noticing.' },
    ],
  },
  {
    category: 'Masters on Craft',
    badge: 'Essentials',
    items: [
      { title: "Vonnegut's rules", slug: 'vonnegut-craft', time: '6 min', level: 'Beginner', preview: 'Eight rules from Bagombo Snuff Box —the most useful craft checklist ever written, examined rule by rule.' },
      { title: 'King on writing', slug: 'king-on-writing', time: '7 min', level: 'Beginner', preview: 'From On Writing: the toolbox, the closed door, the daily practice, and why story always precedes theme.' },
      { title: 'Leonard on invisible prose', slug: 'leonard-on-craft', time: '6 min', level: 'Intermediate', preview: 'Ten rules that add up to one: if it sounds like writing, rewrite it. The case for prose that gets out of the way.' },
      { title: "Pixar's story rules", slug: 'pixar-story-rules', time: '6 min', level: 'Beginner', preview: "The 22 story rules that circulated inside Pixar —the ones that actually matter, examined from a writer's angle." },
    ],
  },
  {
    category: 'Short Fiction',
    badge: 'Short Story',
    items: [
      { title: 'Short story craft', slug: 'short-story-craft', time: '8 min', level: 'Intermediate', preview: 'The short story is not a compressed novel. It is a form with its own logic—one character, one change, one precisely loaded moment. Everything else is negotiable.' },
      { title: 'Where to submit short fiction', slug: 'short-story-markets', time: '6 min', level: 'Intermediate', preview: 'The New Yorker, Ploughshares, SmokeLong, Clarkesworld —19 serious markets with direct submission links and honest notes on what each one actually wants.' },
      { title: 'Flash fiction', slug: 'flash-fiction', time: '5 min', level: 'Beginner', preview: 'Flash forces every craft principle into a single page. Constraint is the teacher. What makes flash fiction work is the same thing that makes all fiction work —only with no room to hide.' },
    ],
  },
  {
    category: 'Structure',
    badge: 'Structure',
    items: [

      { title: 'Story structure basics', slug: 'structure-basics', time: '8 min', level: 'Beginner', preview: 'Structure is not a formula. It describes how stories work. Understanding it gives you the ability to diagnose what is broken in your own.' },
      { title: 'Stakes', slug: 'stakes', time: '7 min', level: 'Beginner', preview: 'Stakes are not explosions or death threats. They are the cost of failure. Getting them right is the difference between grip and slide.' },      { title: 'What a scene actually does', slug: 'what-a-scene-does', time: '6 min', level: 'Beginner', preview: 'Every scene must do at least two things simultaneously. If it only does one, it is a candidate for the cutting room floor.' },
      { title: 'The midpoint is the spine', slug: 'midpoint', time: '6 min', level: 'Intermediate', preview: 'Remove your midpoint and your story collapses. It is not a scene in the middle —it is the event that divides your story into a before and an after.' },
      { title: 'Act breaks: what they are and why they matter', slug: 'act-breaks', time: '7 min', level: 'Beginner', preview: 'An act break is a point of no return. Something must change so completely that your story can never go back to what it was.' },
      { title: 'All Is Lost', slug: 'all-is-lost', time: '6 min', level: 'Beginner', preview: 'Before your hero can win, they must lose everything. If your hero can recover without changing, the beat is not working.' },
      { title: 'The opening image', slug: 'opening-image', time: '5 min', level: 'Beginner', preview: 'The opening image is not decoration. It is a thesis statement —a compressed version of the entire story that the audience will only understand in retrospect.' },
    ],
  },
  {
    category: 'Scene Craft',
    badge: 'Scene',
    items: [
      { title: 'Enter late, leave early', slug: 'enter-late-leave-early', time: '3 min', level: 'Beginner', preview: 'Every scene has a moment before the real thing starts and a moment after it ends. You do not need either of them.' },
      { title: 'The scene turn', slug: 'scene-turn', time: '4 min', level: 'Beginner', preview: 'A scene without a turn is a scene without a point. Something must shift —in power, in knowledge, in relationship —before the scene ends.' },
      { title: 'Tension without action', slug: 'tension-without-action', time: '4 min', level: 'Intermediate', preview: 'The most tense scenes are often the quietest. Tension is not what happens —it is the gap between what could happen and what the audience is afraid will.' },
      { title: 'Location as character', slug: 'location-as-character', time: '3 min', level: 'Beginner', preview: 'Where a scene happens shapes what can happen in it. The best locations externalize the interior state of the scene.' },
      { title: 'How to end a scene', slug: 'scene-endings', time: '4 min', level: 'Intermediate', preview: 'The way a scene ends determines whether the audience stays. The last beat of every scene is a promise about what comes next.' },
    ],
  },
  {
    category: 'Character',
    badge: 'Character',
    items: [
      { title: 'Want vs. Need', slug: 'want-vs-need', time: '7 min', level: 'Beginner', preview: 'Your protagonist wants something they can name. They need something they cannot see yet. The gap between those two things is where your story lives.' },
      { title: 'The ghost', slug: 'ghost', time: '6 min', level: 'Beginner', preview: 'Every compelling character carries a wound from before the story starts. This ghost shapes every decision they make —even when they do not know it.' },
      { title: 'Writing villains that work', slug: 'writing-villains', time: '6 min', level: 'Intermediate', preview: 'Weak villains are evil because the plot requires it. Great villains have a worldview. They believe they are right.' },
      { title: 'The antagonist', slug: 'antagonist', time: '7 min', level: 'Intermediate', preview: 'A weak antagonist makes a weak story. Your antagonist should be the hero of their own story —with a worldview that is internally consistent, even if it is wrong.' },
      { title: 'Secondary characters', slug: 'secondary-characters', time: '4 min', level: 'Intermediate', preview: 'The best secondary characters challenge the hero. Every person in your story should want something, even if it is just a glass of water.' },
      { title: 'The lie', slug: 'the-lie', time: '4 min', level: 'Beginner', preview: 'Every great protagonist believes something false —a deep, organizing lie they have built their life around. The story is the process of dismantling it.' },
      { title: 'Character arc', slug: 'character-arc', time: '5 min', level: 'Intermediate', preview: 'A character arc is not personal growth. It is a forced transformation in how a character understands themselves —resisted until the last possible moment.' },
      { title: 'Flaw vs. wound', slug: 'flaw-vs-wound', time: '4 min', level: 'Intermediate', preview: 'A flaw without a wound is just a bad habit. The wound is what makes the audience forgive the flaw —because they can see exactly how a person would arrive at it.' },
      { title: 'Character voice', slug: 'character-voice', time: '4 min', level: 'Beginner', preview: 'Cover the names in your script and read a page of dialogue. Can you tell who is speaking? If not, your characters are sharing a voice —usually yours.' },
      { title: 'Relationship pairs', slug: 'relationship-pairs', time: '4 min', level: 'Intermediate', preview: 'A relationship is not a backdrop. It is a pressure system. The right pairing reveals things about a character that could not be revealed any other way.' },
    ],
  },
  {
    category: 'Dialogue',
    badge: 'Dialogue',
    items: [
      { title: 'How to write dialogue', slug: 'how-to-write-dialogue', time: '8 min', level: 'Beginner', preview: 'Characters should almost never say what they mean. Here is what dialogue actually is and how to build the ear for writing it.' },
      { title: 'Dialogue subtext', slug: 'dialogue-subtext', time: '7 min', level: 'Beginner', preview: 'Real people talk to get something. Every line of dialogue is a transaction. If no one wants anything, the scene is dead.' },
      { title: 'Subtext: what is not being said', slug: 'subtext', time: '6 min', level: 'Beginner', preview: 'The best dialogue is an iceberg. What is spoken is ten percent. Two people talking about the weather can break your heart.' },
      { title: 'Writing arguments', slug: 'arguments', time: '7 min', level: 'Intermediate', preview: 'Real arguments are not about what people are arguing about. They are about what people are afraid of. Write the fear, not the fight.' },
      { title: "Tarantino's dialogue: how specificity creates character", slug: 'tarantino-dialogue', time: '7 min', level: 'Advanced', preview: 'Tarantino does not write small talk. His characters talk about pop culture, food, and the mundane —because that specificity is who they are.' },
      { title: 'The Sopranos and the dramatic pause', slug: 'sopranos-drama', time: '8 min', level: 'Advanced', preview: 'The Sopranos is a masterclass in what not to rush. Silence, domesticity, and the space between scenes —that is where the show lives.' },
    ],
  },
  {
    category: 'Theme',
    badge: 'Theme',
    items: [
      { title: "Theme isn't a message —it's a question", slug: 'theme', time: '6 min', level: 'Beginner', preview: 'The moment your story has a clear answer, it has become a lecture. The best stories ask a question and let the audience wrestle with it.' },
      { title: 'Plant and payoff', slug: 'plant-payoff', time: '6 min', level: 'Beginner', preview: 'A payoff without a plant feels cheap. A plant without a payoff is dead weight. The art is burying the plant so the payoff feels inevitable.' },
      { title: 'Motifs', slug: 'motifs', time: '6 min', level: 'Intermediate', preview: 'A motif is a recurring image or idea that accumulates meaning as your story progresses. Used right, a single object can carry your entire theme.' },
      { title: 'Theme versus message: the difference matters', slug: 'theme-vs-message', time: '6 min', level: 'Beginner', preview: 'Readers can tell when a story has a message. They usually do not enjoy it. A story with a theme is different — it asks questions rather than answers them.' },
      { title: 'How to develop theme through character', slug: 'theme-through-character', time: '7 min', level: 'Intermediate', preview: 'Theme that lives in the plot is fragile. Theme embedded in character — in who these people are, what they want, what they are wrong about — cannot be extracted from the story.' },
      { title: 'Symbol and motif: the hidden architecture of meaning', slug: 'symbol-and-motif', time: '7 min', level: 'Intermediate', preview: 'Symbols and motifs are structural elements — recurring images that gather meaning and release it at moments of maximum effect. Used well, they are invisible to casual readers and unforgettable to careful ones.' },
      { title: 'Irony: what it is and how to use it', slug: 'irony-in-fiction', time: '6 min', level: 'Intermediate', preview: 'Irony is the gap between what is said and what is meant, between what characters believe and what the reader knows. It is one of literature\'s most powerful tools — and one of its most abused.' },
    ],
  },
  {
    category: 'Visual Craft',
    badge: 'Visual Craft',
    items: [
      { title: 'Color psychology', slug: 'color-psychology', time: '7 min', level: 'Intermediate', preview: 'The colors in a frame do not decorate the story. They are the story —communicating mood, power, and character before a single word is spoken.' },
      { title: 'Color theory', slug: 'color-theory', time: '12 min', level: 'Intermediate', preview: 'Red, blue, yellow, green, white, black—what each color communicates, how filmmakers use contrast and restraint, and how to write for color without directing on the page.' },
      { title: 'Cinematography', slug: 'cinematography', time: '14 min', level: 'Beginner', preview: 'Every framing decision is a storytelling decision. The complete vocabulary of shot types, camera angles, and movement—with examples from the films that defined each technique.' },
      { title: 'Camera angles and power dynamics', slug: 'camera-angles', time: '10 min', level: 'Beginner', preview: "Eye level, low angle, high angle, Dutch angle, bird's eye—what each angle communicates about power, vulnerability, and psychological state." },
      { title: 'Camera movement', slug: 'camera-movement', time: '12 min', level: 'Intermediate', preview: 'Static, dolly, handheld, steadicam, crane—how the camera moves, or refuses to move, is an argument about what the story feels like from inside.' },
      { title: 'Lighting and story', slug: 'lighting-and-story', time: '13 min', level: 'Intermediate', preview: 'Hard light, soft light, chiaroscuro, motivated sources, practical lights—lighting is emotional weather. It tells you how to feel before an actor speaks.' },
      { title: 'Color contrast', slug: 'color-contrast', time: '9 min', level: 'Intermediate', preview: 'Warm vs cool, saturated vs desaturated, complementary contrast—the mechanics of visual conflict and the emotional arguments they make.' },
      { title: 'Composition', slug: 'composition-and-meaning', time: '10 min', level: 'Beginner', preview: 'Rule of thirds, headroom, negative space, symmetry—where a character sits in the frame is always a statement about their world.' },
      { title: 'Mise-en-scene', slug: 'mise-en-scene', time: '15 min', level: 'Advanced', preview: 'Set, costume, light, performance, composition—everything visible working as one system. The directors who master it cannot be imitated.' },
    ],
  },
  {
    category: 'Craft',
    badge: 'Craft',
    items: [
      { title: 'How to end a story', slug: 'the-ending', time: '7 min', level: 'Intermediate', preview: 'An ending needs to feel inevitable. Here is how to find the one true answer to the question your story has been asking.' },
      { title: 'Pacing and rhythm', slug: 'pacing-rhythm', time: '6 min', level: 'Intermediate', preview: 'Pacing is not the speed at which things happen. It is the relationship between speed and weight. The allocation of space is meaning.' },
      { title: 'The rewrite', slug: 'the-rewrite', time: '6 min', level: 'Intermediate', preview: 'The first draft is not the work. It is the material from which the work is made. Most writers only learn this by writing a bad first draft and discovering the story hiding inside it.' },
      { title: "Show, don't tell", slug: 'show-dont-tell', time: '6 min', level: 'Beginner', preview: 'The most repeated instruction in writing and the least understood. What it actually means: let the reader do the work.' },
      { title: 'How to end a story', slug: 'the-ending', time: '7 min', level: 'Intermediate', preview: 'Endings prove what the story was about. Resolution wraps the plot. Conclusion answers the question.' },
    ],
  },
  {
    category: 'Frameworks',
    badge: 'Framework',
    items: [
      { title: 'Save the Cat: the 15 beats', slug: 'save-the-cat', time: '6 min', level: 'Beginner', preview: "Blake Snyder's 15-beat structure is the most-used framework in Hollywood. Not because it's the only way —because it works." },
      { title: "The Hero's Journey", slug: 'heros-journey', time: '5 min', level: 'Beginner', preview: "Joseph Campbell's monomyth underpins thousands of stories. Understanding it helps you know when to follow it —and when to break it." },
      { title: "The Story Circle", slug: 'story-circle', time: '4 min', level: 'Beginner', preview: "Dan Harmon's 8-step circle distills story structure to its essence. Simple enough to use in a session. Powerful enough to build a series around." },
      { title: "The Sequence Approach", slug: 'sequence-approach', time: '5 min', level: 'Intermediate', preview: "Eight sequences, each with its own tension arc. The approach used at USC Film School —and how many working screenwriters actually think." },
      { title: "Kishōtenketsu: story without conflict", slug: 'kishotenketsu', time: '5 min', level: 'Advanced', preview: "The classical East Asian structure that drives stories forward without traditional conflict. Understanding it will change how you see Western storytelling." },
      { title: "The Fichtean Curve", slug: 'fichtean-curve', time: '4 min', level: 'Intermediate', preview: "Start in crisis. Layer crises. End in resolution. The Fichtean Curve throws you into the action immediately —and never lets up." },
      { title: "Dan Wells' Seven-Point Structure", slug: 'seven-point-story', time: '6 min', level: 'Beginner', preview: "Build from the ending backward. The hook is the mirror opposite of the resolution —and everything between them is designed to bridge that distance." },
      { title: "Freytag's Pyramid", slug: 'freytags-pyramid', time: '5 min', level: 'Beginner', preview: "The 1863 five-stage arc that every modern framework descended from. Exposition, Rising Action, Climax, Falling Action, Denouement. Use it to diagnose structural problems." },
      { title: "The Snowflake Method", slug: 'snowflake-method', time: '6 min', level: 'Intermediate', preview: "Randy Ingermanson's system for novelists: expand from one sentence outward to a full blueprint. Best for plotters writing complex fiction across many scenes." },
      { title: "Hauge's Six-Stage Structure", slug: 'hauge-six-stage', time: '6 min', level: 'Intermediate', preview: "Hollywood consultant Michael Hauge maps plot against character transformation with percentage markers. The structure that makes emotional arcs precise." },
    ],
  },
  {
    category: 'Literary Craft',
    badge: 'Literary',
    items: [
      { title: 'Shakespeare on structure', slug: 'shakespeare-structure', time: '8 min', level: 'Intermediate', preview: 'Shakespeare did not invent dramatic structure — he refined it into something so practically useful that four hundred years later it still underlies almost every story told in any medium.' },
      { title: 'How adaptation works', slug: 'adaptation', time: '8 min', level: 'Intermediate', preview: 'Adaptation is translation, not transcription. The adapter\'s job is not to preserve the source — it is to find what the story essentially is and rebuild it from scratch in the new medium.' },
      { title: 'Theme vs. message', slug: 'theme-vs-message', time: '6 min', level: 'Intermediate', preview: 'A message is a conclusion dressed as a story. A theme is a question the story is genuinely trying to answer. The distinction separates meaningful fiction from lectures.' },
      { title: 'How to carry theme through character', slug: 'theme-through-character', time: '7 min', level: 'Intermediate', preview: 'Theme does not live in dialogue. It lives in characters — in what they want, what they believe, and what it costs them. The most powerful thematic statements are made through action and consequence.' },
      { title: 'Symbol and motif', slug: 'symbol-and-motif', time: '7 min', level: 'Intermediate', preview: 'A symbol that has to be explained is not working. The craft is planting the image early, letting it recur, and trusting the accumulation to carry meaning without speech.' },
      { title: 'Irony in fiction', slug: 'irony-in-fiction', time: '7 min', level: 'Intermediate', preview: 'The gap between what a character believes and what the audience knows is dramatic tension. Close it too early and you lose the story. Close it at the right moment and it produces catharsis.' },
      { title: 'Vonnegut on craft', slug: 'vonnegut-craft', time: '6 min', level: 'Beginner', preview: 'Eight rules. The best one: every sentence must do one of two things — reveal character or advance the action. Everything else is waste.' },
      { title: 'King on writing', slug: 'king-on-writing', time: '8 min', level: 'Beginner', preview: 'What the most commercially successful fiction writer alive actually believes about craft. Most of it contradicts what writing programs teach — and most of it is right.' },
    ],
  },
  {
    category: 'Directors on Craft',
    badge: 'Directors',
    items: [
      { title: 'Hitchcock on suspense: the bomb under the table', slug: 'hitchcock-suspense', time: '7 min', level: 'Intermediate', preview: 'Two people talk at a table. Under the table, a bomb. The audience knows. The characters do not. Suspense is not surprise — it is the gap between what the audience knows and what the characters do.' },
      { title: 'Kubrick on control: every frame as a statement', slug: 'kubrick-control', time: '7 min', level: 'Advanced', preview: 'Every element of a scene communicates simultaneously. If any element contradicts the intended meaning, the work is damaged at a level the audience feels without being able to name.' },
      { title: 'Kurosawa on character: the truth under pressure', slug: 'kurosawa-character', time: '7 min', level: 'Intermediate', preview: 'People reveal who they are under pressure, not in comfort. Rashomon is four incompatible truths — because each witness is protecting something. Write the cost, and the character will reveal itself.' },
      { title: 'Spielberg on empathy: the camera as guide', slug: 'spielberg-empathy', time: '6 min', level: 'Beginner', preview: 'You do not earn empathy by telling the audience someone matters. You earn it by making them feel the weight of existing as that person. Specificity before danger — always.' },
      { title: 'Tarantino on nonlinear structure: chronology is not story', slug: 'tarantino-structure', time: '7 min', level: 'Intermediate', preview: 'Audiences do not need chronology. They need causation. As long as they understand why one thing leads to another, you can arrange events in any order you choose.' },
      { title: 'Scorsese on theme: guilt is not a subplot', slug: 'scorsese-theme', time: '7 min', level: 'Advanced', preview: 'Theme is not a message attached to a story. It is the question that drives you personally. The films that last are the ones where the director cannot stop asking.' },
      { title: 'The Coen Brothers on tone: tragedy and comedy are the same story', slug: 'coen-tone', time: '6 min', level: 'Intermediate', preview: 'Tone is not mood. It is the relationship between what is happening and how the storyteller treats it. Fargo is funny and horrifying at the same time. Change the treatment and you change the genre.' },
      { title: 'Terrence Malick on subjectivity: the world as felt', slug: 'malick-subjectivity', time: '7 min', level: 'Advanced', preview: 'Story can be the record of a mind experiencing the world. Not events, not cause and effect — perception, memory, longing, loss. What is felt rather than what happened.' },
      { title: 'Bergman on psychology: two faces are a landscape', slug: 'bergman-psychology', time: '8 min', level: 'Advanced', preview: 'Cinema\'s greatest advantage is the ability to photograph a human being thinking. Not performing thought — actually thinking, with all the ambiguity and terror that involves.' },
      { title: 'David Lynch on intuition: ideas as caught things', slug: 'lynch-intuition', time: '6 min', level: 'Intermediate', preview: 'Ideas are fish. You do not create them. You catch them. The idea that comes with a feeling attached is the one worth following — the feeling knows more than the rational mind does.' },
      { title: 'David Fincher on precision: control as care', slug: 'fincher-precision', time: '6 min', level: 'Advanced', preview: 'The first way of doing something is the most expected way. Precision means refusing the acceptable version and waiting — through fifty takes, through every draft — for the true one.' },
      { title: 'Wes Anderson on detail: the geometry of feeling', slug: 'anderson-wes-detail', time: '6 min', level: 'Intermediate', preview: 'Style is not chosen after the story is decided. Style is how the story says what it cannot say directly. Anderson\'s symmetry holds grief at one remove — which is how most people actually experience grief.' },
      { title: 'Christopher Nolan on time: structure as theme', slug: 'nolan-time', time: '7 min', level: 'Advanced', preview: 'When structure and theme are the same thing, the story achieves a unity unreachable any other way. Memento gives you Leonard\'s condition rather than describing it. The form is the argument.' },
      { title: 'Billy Wilder on clarity: the audience is your collaborator', slug: 'wilder-clarity', time: '6 min', level: 'Beginner', preview: 'The audience is working alongside you, trying to understand what is happening. Your job is to give them enough to work with and trust them to do the work. The last line is a structural necessity.' },
      { title: 'John Cassavetes on truth: the camera never lies, it only misleads', slug: 'cassavetes-truth', time: '7 min', level: 'Advanced', preview: 'The most honest moment in a scene is the one the actor did not plan. Structure must be loose enough to let the unplanned truth arrive. The safest version of a scene is rarely the truest one.' },
      { title: 'Sergio Leone on silence: the scene that does not speak', slug: 'leone-silence', time: '6 min', level: 'Intermediate', preview: 'The opening of Once Upon a Time in the West is fifteen minutes before a line is spoken. Silence is not absence — it is the space where dread lives, where the audience\'s imagination does the heaviest work.' },
      { title: 'Jacques Tati on observation: the comedy of the world as it is', slug: 'tati-observation', time: '6 min', level: 'Intermediate', preview: 'The truest comedy is not invented. It is observed. Watch the world long enough and it will show you something funnier than anything you could make up. Tati\'s subject was always life, seen clearly.' },
      { title: 'Park Chan-wook on revenge: justice and the cost of getting it', slug: 'park-chanwook-revenge', time: '7 min', level: 'Advanced', preview: 'There is no satisfaction in revenge. The Vengeance Trilogy shows revenge fulfilled, completely, and reveals what it actually costs. The most powerful argument against an impulse is showing it through.' },
      { title: 'Richard Linklater on time: the longest subject', slug: 'linklater-time', time: '6 min', level: 'Intermediate', preview: 'Time is not the backdrop of a story. It can be the story. The passage of it, the specific feeling of an hour or a decade, the awareness that this particular moment is already ending — these are dramatic subjects.' },
      { title: 'Robert Altman on ensemble: no one is the story', slug: 'altman-ensemble', time: '6 min', level: 'Intermediate', preview: 'The protagonist is a convention, not a requirement. Nashville has twenty-four characters and no center. Ensemble storytelling demands that every character has a complete inner life — it is just distributed.' },
      { title: 'Tarkovsky on poetry: cinema as sculpted time', slug: 'tarkovsky-poetry', time: '8 min', level: 'Advanced', preview: 'An image that creates a feeling before a meaning is doing what only cinema can do. Explanation is the enemy of the image. Do not explain your images. Write them fully, and trust the reader.' },
      { title: 'Kieslowski on theme: chance, fate, and the lives we almost lived', slug: 'kieslowski-theme', time: '7 min', level: 'Advanced', preview: 'The theme that has lasted thousands of years has lasted because it is not resolved. If your story\'s theme is resolved by the end, you may have answered the wrong question.' },
      { title: 'Robert Bresson on restraint: the model, not the actor', slug: 'bresson-restraint', time: '7 min', level: 'Advanced', preview: 'The actor who shows you the emotion is doing your work for you. The figure who simply exists and allows the emotion to come from the audience is doing something more powerful.' },
      { title: 'Federico Fellini on autobiography: the self as infinite subject', slug: 'fellini-autobiography', time: '6 min', level: 'Intermediate', preview: 'The self is not a narrow subject. The specificity of your own experience, fully rendered, is more interesting than any general truth. The most personal work is often the most widely felt.' },
      { title: 'John Ford on landscape: the land is always a character', slug: 'ford-landscape', time: '6 min', level: 'Beginner', preview: 'Where a story takes place is not a setting. It is a statement about the people who live there and the forces that shape them. The landscape is always making an argument about what it costs to survive here.' },
    ],
  },
  {
    category: 'Novel Writing',
    badge: 'Novel',
    items: [
      { title: 'Point of view', slug: 'point-of-view', time: '7 min', level: 'Beginner', preview: 'POV is not a technical choice about pronouns. It is a decision about where consciousness lives in your story —and every other craft decision is downstream of it.' },
      { title: 'Chapter structure', slug: 'chapter-structure', time: '7 min', level: 'Beginner', preview: 'A chapter is not a unit of time or a unit of plot. It is a unit of experience. If a chapter ends and nothing has shifted, the chapter has not done its job.' },
      { title: 'Writing villains', slug: 'writing-villains', time: '6 min', level: 'Intermediate', preview: 'A villain who is purely evil is not a villain — they are a plot device. The best antagonists believe they are right. That belief is what makes them dangerous.' },
      { title: 'The rewrite', slug: 'the-rewrite', time: '8 min', level: 'Intermediate', preview: 'The first draft is not a failure to be fixed. It is reconnaissance. You write it to find out what the story actually is — then you write the real thing.' },
      { title: 'Show, don\'t tell', slug: 'show-dont-tell', time: '6 min', level: 'Beginner', preview: 'The rule is real and almost universally misunderstood. It is not about cutting adjectives. It is about where you put the reader\'s consciousness in a scene.' },
      { title: 'Pacing and rhythm', slug: 'pacing-rhythm', time: '7 min', level: 'Intermediate', preview: 'Pacing is not the speed at which things happen. It is the relationship between speed and weight — knowing when to linger and when to cut.' },
      { title: 'The ending', slug: 'the-ending', time: '7 min', level: 'Intermediate', preview: 'Endings prove what the story was about. Resolution wraps the plot. Conclusion answers the question the story has been asking all along.' },
      { title: 'Writing the ending', slug: 'writing-the-ending', time: '5 min', level: 'Intermediate', preview: 'Most writers know their ending too early or too late. Here is how to find it and how to know when you have.' },
      { title: 'Adaptation', slug: 'adaptation', time: '7 min', level: 'Advanced', preview: 'Adapting a novel into a screenplay is not translation. It is a complete reimagining of what the story is — finding the film hiding inside the book.' },
      { title: 'The Snowflake Method', slug: 'snowflake-method', time: '5 min', level: 'Beginner', preview: 'Start with one sentence. Expand to a paragraph. Expand to a page. The Snowflake builds a novel from the inside out, one layer at a time.' },
    ],
  },

]

const LEVEL_COLORS = {
  'Beginner':     { bg: '#EFF6E7', color: '#2D5016' },
  'Intermediate': { bg: '#FFF7ED', color: '#7A4C07' },
  'Advanced':     { bg: '#EEF2FF', color: '#3730A3' },
}

const readingList = [
  { title: 'Save the Cat!', author: 'Blake Snyder', note: 'The most practical story structure book ever written.' },
  { title: 'Story', author: 'Robert McKee', note: 'Dense, thorough, and worth every page.' },
  { title: 'The Hero with a Thousand Faces', author: 'Joseph Campbell', note: 'The mythic source of all story.' },
  { title: 'Bird by Bird', author: 'Anne Lamott', note: 'On writing badly —and why that is the only way to start.' },
  { title: 'Screenplay', author: 'Syd Field', note: 'The book that defined three-act structure for Hollywood.' },
  { title: 'The Anatomy of Story', author: 'John Truby', note: 'Twenty-two steps of story structure. More granular than anyone else.' },
]

const writtenSlugs = [
  'what-is-a-story', 'character-before-plot', 'the-first-page',
  'how-to-start', 'fear-and-writing', 'finding-your-story',
  'vonnegut-craft', 'king-on-writing', 'leonard-on-craft', 'pixar-story-rules',
  'what-a-scene-does', 'midpoint', 'want-vs-need', 'dialogue-subtext', 'theme',
  'act-breaks', 'all-is-lost', 'ghost', 'antagonist', 'subtext', 'arguments',
  'plant-payoff', 'motifs', 'secondary-characters', 'the-lie', 'character-arc',
  'flaw-vs-wound', 'character-voice', 'relationship-pairs',
  'structure-basics', 'stakes', 'opening-image',
  'how-to-write-dialogue', 'writing-the-ending', 'show-dont-tell',
  'shakespeare-structure',
  'color-psychology', 'tarantino-dialogue', 'sopranos-drama',
  'sequence-approach', 'kishotenketsu', 'fichtean-curve',
  'enter-late-leave-early', 'scene-turn', 'tension-without-action',
  'location-as-character', 'scene-endings',
  'short-story-craft', 'short-story-markets', 'flash-fiction',
  'color-theory', 'cinematography',
  'camera-angles', 'camera-movement', 'lighting-and-story',
  'color-palettes',
  'color-contrast', 'color-symbolism', 'color-grading', 'writing-for-color',
  'lenses-and-depth', 'composition-and-meaning', 'mise-en-scene',
  'tracks', 'story-circle', 'save-the-cat', 'hauge-six-stage',
  'snowflake-method', 'heros-journey', 'seven-point-story', 'freytags-pyramid',
  'pacing-rhythm', 'the-rewrite', 'the-ending', 'writing-villains',
  'point-of-view', 'chapter-structure', 'adaptation',
  'hitchcock-suspense', 'kubrick-control', 'kurosawa-character', 'spielberg-empathy',
  'tarantino-structure', 'scorsese-theme', 'coen-tone', 'malick-subjectivity',
  'bergman-psychology', 'lynch-intuition', 'fincher-precision', 'anderson-wes-detail',
  'nolan-time', 'wilder-clarity', 'cassavetes-truth', 'leone-silence',
  'tati-observation', 'park-chanwook-revenge', 'linklater-time', 'altman-ensemble',
  'tarkovsky-poetry', 'kieslowski-theme', 'bresson-restraint', 'fellini-autobiography',
  'ford-landscape',
  'theme-vs-message', 'theme-through-character', 'symbol-and-motif', 'irony-in-fiction',
]

const totalLessons = lessons.reduce((sum, cat) => sum + cat.items.length, 0)
const writtenCount = writtenSlugs.length

export default function LearnPage() {
  return (
    <div style={{ background: 'var(--off-white)', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(160deg, #2D5016 0%, var(--green) 55%, #4a8a24 100%)',
        padding: '44px 24px 40px',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="badge" style={{ marginBottom: '12px', background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.25)' }}>Craft Library</div>
          <h1 style={{
            fontSize: 'clamp(26px, 3.5vw, 38px)', marginBottom: '12px',
            lineHeight: '1.15', color: '#fff',
            textShadow: '0 2px 12px rgba(0,0,0,0.25)',
          }}>
            The craft library.
          </h1>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.78)', lineHeight: '1.7', maxWidth: '520px', marginBottom: '24px' }}>
            100+ lessons on structure, character, dialogue, directors on craft, and everything else that separates a story that works from one that doesn&apos;t. Written from first principles. No AI. No filler.
          </p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <span className="stat-pill">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1.5L8 5h3.5L9 7.5l1 3.5-3.5-2L3 11l1-3.5L1.5 5H5z" fill="currentColor"/></svg>
              {writtenCount} lessons available
            </span>
            <span className="stat-pill">{totalLessons} total planned</span>
            <span className="stat-pill">{lessons.length} categories</span>
          </div>
        </div>
      </section>

      {/* Category accordions */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '32px 24px 72px' }}>
        <CategoryList lessons={lessons} writtenSlugs={writtenSlugs} />
      </div>
    </div>
  )
}
