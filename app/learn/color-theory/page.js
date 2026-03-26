import Link from 'next/link'
import PaywallBlur from '../../components/PaywallBlur'
import { WikiImage, ImagePair } from '../../components/CraftImage'
import LessonProgress from '../../components/LessonProgress'

export const metadata = {
  title: 'Color Theory in Film and Fiction—Visual Storytelling | Eve',
  description: 'How color functions as storytelling language. Red, blue, yellow, and the psychological associations that make color one of the fastest communicators in film.',
}

const colors = [
  {
    name: 'Red',
    hex: '#C0392B',
    photo: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Metropolis_movie_image.jpg/900px-Metropolis_movie_image.jpg', credit: 'Oladimeji Ajegbile', creditUrl: 'https://unsplash.com/@diimejii', caption: 'Saturated red—the most physiologically arousing color, earning its power through contrast' },
    light: '#fdf2f2',
    border: '#f5c6c6',
    primary: 'Danger, passion, violence, love, power, warning',
    secondary: 'Revolution, sin, life force, anger, obsession',
    howItWorks: 'Red is the most physiologically arousing color—it actually raises heart rate and blood pressure. In storytelling, this makes it the most emotionally loaded choice available. But red only works when it is used with restraint and specificity. A film drenched in red stops being dangerous and starts being decorative. Red earns its power through contrast: a red coat in a grey world, a red door in a white house, a red dress at a black-tie funeral.',
    examples: [
      {
        work: 'Schindler\'s List',
        year: 1993,
        detail: 'Spielberg shoots the film in black and white except for the red coat of a small girl the audience watches being killed. The single color in a monochrome film turns the abstract enormity of the Holocaust into a specific, particular person whose death the audience can hold. The red coat reappears later on a cart of bodies. The color does in two shots what pages of dialogue could not.',
      },
      {
        work: 'Don\'t Look Now',
        year: 1973,
        detail: 'Nicolas Roeg uses a red raincoat to link a drowned child to the figure John keeps glimpsing through the canals of Venice. Red here is haunting rather than danger—it is grief made visible. The color carries the film\'s central mystery: is the red figure his daughter\'s ghost, or a warning?',
      },
      {
        work: 'The Sixth Sense',
        year: 1999,
        detail: "Shyamalan plants red in every scene involving the supernatural—a doorknob, a sweater, a tent, a dress. The audience doesn't notice consciously, but they feel it. On second viewing, red functions as a map of every moment where death and the supernatural intrude on the living world.",
      },
      {
        work: 'Her',
        year: 2013,
        detail: "Spike Jonze dressed Theodore and his world in warm reds and oranges to create the feeling of warmth and intimacy his character is seeking. The color palette is the emotional argument: this is a film about the desire for connection, and the world is saturated in the color of warmth.",
      },
    ],
    writersNote: 'In prose, red rarely appears as "the red ___" unless you are using it symbolically. More often you write around it: "the lipstick she had borrowed from her sister," "the stop sign he drove through," "the wine he kept refilling." The color earns its power through the specific object, not the adjective.',
  },
  {
    name: 'Blue',
    hex: '#2471A3',
    photo: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Metropolis_movie_image.jpg/900px-Metropolis_movie_image.jpg', credit: 'Josh Hild', creditUrl: 'https://unsplash.com/@joshhild', caption: 'Cool blue hour—distance, isolation, the receding quality of blue in a frame' },
    light: '#f0f6fc',
    border: '#c5dff8',
    primary: 'Cold, isolation, melancholy, trust, technology, authority',
    secondary: 'Calm, distance, the past, masculinity (in contemporary coding), death',
    howItWorks: 'Blue is the receding color—it creates psychological distance, making subjects feel farther away or more isolated. In film, blue has become the dominant shorthand for two contradictory things: corporate authority (suits, boardrooms, police) and emotional desolation (the cold house of an unhappy marriage, the empty flat of someone who has lost everything). The teal-orange look that dominated blockbusters from roughly 2008-2020 uses blue-shifted shadows to make the orange skin tones of actors pop—but it also creates a world that feels slightly inhuman.',
    examples: [
      {
        work: 'Three Colors: Blue',
        year: 1993,
        detail: "Kieslowski's film uses blue so systematically that it becomes the film's argument: the character is trying to isolate herself in grief, and the entire world has turned the color of her attempt. The blue lighting, blue water, blue sugar cube—all become the film's emotional language.",
      },
      {
        work: 'Moonlight',
        year: 2016,
        detail: "Barry Jenkins uses blue for Chiron's childhood and vulnerability—the most intimate, frightened moments of his life are bathed in a cool blue light that feels like exposure. As Chiron armors himself in adulthood, the palette warms.",
      },
      {
        work: 'Blade Runner 2049',
        year: 2017,
        detail: "Roger Deakins uses blue-grey for the industrial wastelands and cold environments that define the film's dehumanized world. The few moments of warmth—the hologram of Joi, the memory sequences—are specifically not blue. Color marks the boundary between what is human and what is system.",
      },
      {
        work: 'Parasite',
        year: 2019,
        detail: "Bong Joon-ho uses the cool, desaturated blue of the Park family's glass house to signal their world's antiseptic privilege. The Kim family's basement lives in warm, dirty amber. The class argument is embedded in the palette before a word is spoken.",
      },
    ],
    writersNote: 'Blue in fiction often works through temperature: cold rooms, cold mornings, cold water. The prose equivalent of blue lighting is environmental temperature and the quality of light—"the thin grey light of a February morning" is blue without the word.',
  },
  {
    name: 'Yellow / Amber',
    hex: '#D4AC0D',
    photo: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Metropolis_movie_image.jpg/900px-Metropolis_movie_image.jpg', credit: 'Alvin Engler', creditUrl: 'https://unsplash.com/@alvin_engler', caption: 'Golden hour amber—warmth and nostalgia versus the sickly chartreuse of unease' },
    light: '#fefbea',
    border: '#f7e68e',
    primary: 'Unease, caution, cowardice, warmth, nostalgia, madness',
    secondary: 'Sickness, decay, gold, autumn, sunlight, the past',
    howItWorks: 'Yellow is the most psychologically complex color in film. Pure, saturated yellow creates unease—it is the color of warning signs, caution tape, and the sickly fluorescent light of institutions. But warm amber-yellow (the color of firelight, late afternoon sun, old photographs) creates nostalgia and longing. The difference is saturation and hue: sickly chartreuse-yellow signals wrongness; warm gold signals beauty and loss. Horror and thriller directors have long known that yellow fluorescent light makes audiences deeply uncomfortable in a way they cannot articulate.',
    examples: [
      {
        work: 'No Country for Old Men',
        year: 2007,
        detail: "The Coens and Roger Deakins fill the film with the parched, bleached yellow of the West Texas landscape—a yellow that communicates desolation and moral emptiness. The landscape is not beautiful; it is inhuman. The color choice makes the argument before Chigurh appears.",
      },
      {
        work: 'Gone Girl',
        year: 2014,
        detail: 'Fincher uses amber and gold for the flashback "perfect marriage" sequences—warmth and nostalgia are Amy\'s greatest weapon and her greatest lie. The color palette tells you not to trust the memories before you know to question them.',
      },
      {
        work: 'Drive',
        year: 2011,
        detail: "Nicolas Winding Refn uses neon yellow and pink against black for Los Angeles at night—making the city look like a fever dream. The yellow of the Driver's scorpion jacket functions as both a warning and an emblem of the film's mythological register.",
      },
      {
        work: 'The Shining',
        year: 1980,
        detail: "Kubrick fills the Overlook's interior with a sickly yellow-green that makes every room feel wrong. The yellow of the hedge maze, the yellow of the bathroom where Jack goes mad, the yellow of the 1920s photograph at the film's close—it is the color of the hotel's poisonous nostalgia.",
      },
    ],
    writersNote: 'In fiction, yellow unease is written through quality of light: fluorescent, flickering, jaundiced, the color of old newspaper. Gold and amber are written through objects: candlelight, photographs, honey, the last hour before sunset. The specific noun carries what the color adjective cannot.',
  },
  {
    name: 'Green',
    hex: '#1E8449',
    photo: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Metropolis_movie_image.jpg/900px-Metropolis_movie_image.jpg', credit: 'Eberhard Grossgasteiger', creditUrl: 'https://unsplash.com/@eberhardgross', caption: 'Dark forest green—the tension between natural abundance and the uncanny' },
    light: '#f0fbf4',
    border: '#a9dfbf',
    primary: 'Nature, growth, envy, poison, the uncanny, money',
    secondary: 'Alien, sickness, surveillance, the supernatural, decay',
    howItWorks: 'Green in film splits almost perfectly between its natural connotations (growth, life, the organic world) and its artificial ones (poison, surveillance, the uncanny). This is partly a historical accident of cinematography: early two-strip color and later Technicolor rendered greens with a slightly toxic quality, and filmmakers learned to use this. The Matrix\'s green tint coded the artificial world as inhuman. The Joker\'s green is theatrical decay. But the green of fairy tales and enchanted forests is abundance and magic. Green almost always signals that the natural world is present—the question is whether that presence is welcoming or threatening.',
    examples: [
      {
        work: 'The Matrix',
        year: 1999,
        detail: "The Wachowskis tinted all of the Matrix sequences green—a subtle but pervasive quality that codes the artificial world as inhuman before the narrative explains it. The real world has no green tint. The color division IS the film's argument about reality and simulation.",
      },
      {
        work: 'Vertigo',
        year: 1958,
        detail: "Hitchcock dresses Madeleine/Judy in grey-green throughout, and when Scottie forces her transformation, the key sequence is lit entirely in the green light coming through the hotel window. The color becomes the film's argument about obsession—Scottie is not seeing a person, he is seeing a color.",
      },
      {
        work: 'Pan\'s Labyrinth',
        year: 2006,
        detail: "Del Toro uses green for the fairy tale world and amber-orange for the fascist real world. The color boundary between the two worlds is the film's central question: which world is more real, and which provides more protection?",
      },
      {
        work: 'Parasite',
        year: 2019,
        detail: "The peach fuzz plant that Mr. Park guards obsessively is a deep, unnatural green that becomes one of the film's central symbols. The color of the garden—lush, maintained, artificial—is the color of the Park family's performed naturalness.",
      },
    ],
    writersNote: 'Green in prose functions almost entirely through botanical imagery: the specific plants, the quality of the light through leaves, the smell of cut grass or decay. A room "painted green" is interior design; "the smell of mold under the floorboards" is uncanny green without the word.',
  },
  {
    name: 'White',
    hex: '#E8E8E8',
    light: '#f9f9f9',
    border: '#e0e0e0',
    primary: 'Purity, emptiness, clinical, sterile, death (in Asian cinema), innocence',
    secondary: 'Cold, technology, the void, blank slate, hospital, Arctic',
    howItWorks: 'White is the most culturally variable color in film storytelling. In Western tradition, white signals purity and innocence—the bridal dress, the baptism, the blank page. But white also signals the absence of information: the blizzard that makes you lose your way, the hospital where identity is erased, the empty room that refuses to tell you what it is. In East Asian cinema (and increasingly in global horror), white is the color of death and ghosts—mourning clothes are white, the supernatural is pale. A filmmaker using white must decide which tradition they are working in, or consciously colliding both.',
    examples: [
      {
        work: 'The Shining',
        year: 1980,
        detail: "The Overlook's white bathroom—where Jack types, where the woman in room 237 manifests, where Jack eventually loses his mind—uses white not as purity but as erasure. The white walls and white surfaces make the gore more shocking and the absence before the gore more threatening.",
      },
      {
        work: '2001: A Space Odyssey',
        year: 1968,
        detail: 'Kubrick uses the brilliant white of HAL\'s corridors and the sterile white of the ship\'s interior to signal the dehumanized future. When Dave enters the room beyond the stargate—a white, neoclassically furnished room—it signals that he is outside the known entirely.',
      },
      {
        work: 'Black Swan',
        year: 2010,
        detail: "Aronofsky divides his film between white (the ballet company, the mother's apartment, Nina's fragile virtue) and black (the dark double, the nightclub, the loss of control). The film is the story of white's corruption into black, and every white space in the first act is a room waiting to be violated.",
      },
      {
        work: 'Oldboy',
        year: 2003,
        detail: 'Park Chan-wook uses white in the hallway of Oh Dae-su\'s prison and in the corridor fight sequence—clinical, institutional white that drains the violence of context, making it feel more dreamlike and more horrible simultaneously.',
      },
    ],
    writersNote: 'White in prose is often a sign of being in a transitional space: airports, hospitals, newly fallen snow, the blank page. It functions as the before—the condition that will be disrupted. When you want to signal that something is about to be ruined or revealed, white is the preparation.',
  },
  {
    name: 'Black',
    hex: '#2C3E50',
    photo: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Metropolis_movie_image.jpg/900px-Metropolis_movie_image.jpg', credit: 'Drew Hays', creditUrl: 'https://unsplash.com/@drew_hays', caption: 'A single light source in darkness—black as the condition of possibility, not absence' },
    light: '#f4f6f7',
    border: '#d5dbdf',
    primary: 'Death, authority, elegance, absence, grief, nihilism, the unknown',
    secondary: 'Evil, power, sophistication, void, the unconscious, night',
    howItWorks: 'Black in film works differently from other colors because it is often not a choice but a default—the absence of light. But when used deliberately, black carries enormous weight. The black clothing of villains, executioners, and widows. The black of the screen before a film begins, which is the condition of possibility. The black of noir—the parts of the frame that withhold information. Black is what you do not know and what cannot be seen, which makes it the most useful color for suggesting threat. In a brightly lit world, pockets of black are always menacing.',
    examples: [
      {
        work: 'Psycho',
        year: 1960,
        detail: "Hitchcock shot Psycho in black and white partly for budget, partly for censorship (the shower scene would never have passed in color), but the black-and-white palette creates a moral world stripped of warmth and comfort. The Bates house against the grey sky, the black blood in the drain—monochrome as moral emptiness.",
      },
      {
        work: 'Double Indemnity',
        year: 1944,
        detail: "Wilder and cinematographer John Seitz use the Venetian blind light—horizontal stripes of light and shadow on characters' faces—to trap them in a cage of their own making. The shadows are prison bars the characters have built for themselves.",
      },
      {
        work: 'Mad Max: Fury Road',
        year: 2015,
        detail: "George Miller uses black—the black of the War Boys' bodies, the black of the Citadel—against the orange of the desert to make the human world look like a pathology against the natural world. Black here is not absence but corruption.",
      },
      {
        work: 'Frances Ha',
        year: 2012,
        detail: "Baumbach shoots in black and white not to signal death or moral emptiness but to place Frances in the tradition of French New Wave—the black-and-white is a genre claim, situating a story about millennial urban failure in the cinematic tradition of Godard and Truffaut.",
      },
    ],
    writersNote: 'Black in prose is written through absence of light and the specific conditions of night: the quality of darkness, the sounds that replace sight, the feeling of existing in a world that cannot be seen. "It was dark" is not black. "She could not see her hand in front of her face" is black used as narrative pressure.',
  },
]

const colorInPractice = [
  {
    title: 'The Monochromatic Scene',
    body: 'Some of the most powerful sequences in film are monochromatic—a single color dominates so completely that it becomes the atmosphere itself. The blue room, the red hallway, the all-white hospital. When every element in a frame shares a color, the color stops being a detail and becomes the world the character is inside. Use it sparingly: one monochromatic scene in a film is a statement; a whole film in one color can feel suffocating.',
  },
  {
    title: 'The Color Arc',
    body: "A film's palette should change as the story changes. The warm, saturated world of the first act is not the desaturated, cold world of the third—unless the film argues for stasis. Study how Parasite, Moonlight, and The Wizard of Oz all shift their palette at the exact moment the story shifts. Color is not a constant backdrop—it is a variable that tracks emotional and narrative temperature.",
  },
  {
    title: 'The Planted Color',
    body: 'The most sophisticated color work in film is planted so early and so quietly that the audience does not register it as significant—and then, later, it arrives with enormous force. The red coat in Schindler\'s List, the red in The Sixth Sense, the specific green of Pan\'s Labyrinth\'s fairy world. For a screenwriter, this means thinking in images: what object in act one will return in act three carrying new weight?',
  },
  {
    title: 'Color Contradiction',
    body: 'When a story wants to signal that something is wrong with a surface—that the beautiful is dangerous, the warm is actually cold, the promising actually threatening—one of the most effective tools is color contradiction. A warm, welcoming color palette over a scene of violence or deception. A cold, sterile palette during a moment of genuine connection. The dissonance creates unease the dialogue cannot produce.',
  },
  {
    title: 'Writing for Color Without Directing',
    body: "Screenwriters cannot write 'this scene should be blue.' But they can write a world that makes blue inevitable. A character described as 'standing at the window in the early morning, the city below her still dark' is asking for blue light without specifying it. A character described as 'in the hospital corridor, under fluorescent lights, waiting for news she already knows' is asking for yellow-green unease. The specific, physical world you write will make specific visual demands on the people who shoot it.",
  },
]

export default function ColorTheoryLesson() {
  return (
    <div style={{ background: 'var(--off-white)', minHeight: '100vh' }}>

      {/* Lesson header */}
      <div style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '20px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Link href="/visual-craft" style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-soft)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Visual Craft
            </Link>
            <span style={{ color: 'var(--border)' }}>/</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-dark)', fontWeight: '600' }}>Color Theory</span>
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span className="badge">Visual</span>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'var(--text-soft)' }}>12 min</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-soft)' }}>Intermediate</span>
                      <LessonProgress slug="color-theory" />
          </div>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #2D5016 0%, var(--green) 55%, #4a8a24 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '740px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 5vw, 46px)', fontWeight: '700', color: '#fff', lineHeight: '1.15', marginBottom: '20px' }}>
            Color Theory in Film and Fiction
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '17px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '580px', margin: '0' }}>
            Color is not mood board decoration. It is a second layer of narrative running beneath the dialogue, scoring every scene before the actors speak. These are the six colors every visual storyteller must understand, how they work, and the films that prove it.
          </p>
        </div>
      </section>

      <PaywallBlur>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '52px 24px 80px' }}>

        {/* Intro */}
        <section style={{ marginBottom: '52px' }}>
          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '28px 32px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '16px' }}>
              The fundamental rule of color in storytelling
            </h2>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '14px' }}>
              Color only works when it is earned. A single red coat in a black-and-white film carries the weight of a life. A film drenched in red carries nothing. The power of color in storytelling is almost entirely a function of contrast and specificity—where the color appears, how often, and what surrounds it.
            </p>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '14px' }}>
              Color psychology in film is not a system of fixed meanings—"red always means danger" is useful as a starting point and wrong as a rule. The same color communicates differently depending on its saturation, its context, its contrast with surrounding colors, and the cultural tradition the film is working in. What color theory gives you is a vocabulary, not a code.
            </p>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.8', color: 'var(--text-dark)', margin: '0' }}>
              Study the films below not to memorize what colors "mean" but to understand how filmmakers deploy color as a deliberate system—planted in act one, developed through the middle, resolved or violated at the end.
            </p>
          </div>
        </section>

        {/* Color entries */}
        {colors.map((color, i) => (
          <section key={color.name} style={{ marginBottom: '48px', scrollMarginTop: '80px' }} id={color.name.toLowerCase()}>
            {/* Color header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '20px',
              paddingBottom: '16px',
              borderBottom: `2px solid ${color.hex}`,
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: color.hex,
                border: color.hex === '#F5F5F5' || color.hex === '#FFFFFF' ? '2px solid var(--border)' : 'none',
                flexShrink: 0,
              }} />
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: '700', color: 'var(--text-dark)', margin: '0 0 3px' }}>
                  {color.name}
                </h2>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-mid)', margin: 0 }}>
                  {color.primary}
                </p>
              </div>
            </div>

            {/* Associations grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
              <div style={{ background: color.light, border: `1px solid ${color.border}`, borderRadius: '8px', padding: '14px 16px' }}>
                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '6px' }}>Primary associations</p>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-dark)', margin: 0, lineHeight: '1.6' }}>{color.primary}</p>
              </div>
              <div style={{ background: color.light, border: `1px solid ${color.border}`, borderRadius: '8px', padding: '14px 16px' }}>
                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '6px' }}>Secondary / subversive</p>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-dark)', margin: 0, lineHeight: '1.6' }}>{color.secondary}</p>
              </div>
            </div>

            {/* How it works */}
            <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '20px 22px', marginBottom: '16px' }}>
              <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '10px' }}>How it works</p>
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', lineHeight: '1.8', color: 'var(--text-dark)', margin: 0 }}>{color.howItWorks}</p>
            </div>

            {color.photo && (
              <div style={{ marginBottom: '16px' }}>
                <WikiImage
                  src={color.photo.src}
                  alt={color.photo.alt || color.photo.caption}
                  caption={color.photo.caption}
                  aspectRatio="16/9"
                />
              </div>
            )}

            {/* Film examples */}
            <div style={{ marginBottom: '16px' }}>
              <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '10px' }}>Key examples</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {color.examples.map((ex) => (
                  <div key={ex.work} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '8px', padding: '14px 18px' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'baseline', marginBottom: '6px', flexWrap: 'wrap' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: '700', color: 'var(--text-dark)' }}>{ex.work}</span>
                      <span style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--text-soft)' }}>({ex.year})</span>
                    </div>
                    <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', lineHeight: '1.7', color: 'var(--text-mid)', margin: 0 }}>{ex.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Writer's note */}
            <div style={{ background: color.light, border: `1px solid ${color.border}`, borderRadius: '8px', padding: '14px 18px' }}>
              <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '8px' }}>For writers: how to use this in prose</p>
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', lineHeight: '1.7', color: 'var(--text-dark)', margin: 0, fontStyle: 'italic' }}>{color.writersNote}</p>
            </div>
          </section>
        ))}

        {/* Color in practice */}
        <section style={{ marginBottom: '52px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '8px', paddingBottom: '16px', borderBottom: '2px solid var(--green)' }}>
            Color in practice: five techniques
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px' }}>
            {colorInPractice.map((item, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '20px 22px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ flexShrink: 0, width: '26px', height: '26px', borderRadius: '50%', background: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px' }}>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', fontWeight: '700', color: '#fff' }}>{i + 1}</span>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: '700', color: 'var(--text-dark)', margin: '0 0 8px' }}>{item.title}</h3>
                    <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', lineHeight: '1.75', color: 'var(--text-dark)', margin: 0 }}>{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Nav to next lesson */}
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
          <Link href="/visual-craft" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--text-mid)', textDecoration: 'none' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Visual Craft home
          </Link>
          <Link href="/learn/cinematography" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--text-dark)', textDecoration: 'none' }}>
            Next: Cinematography
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
    </PaywallBlur>
    </div>
  )
}
