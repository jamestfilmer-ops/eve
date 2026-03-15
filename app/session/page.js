'use client'
export const dynamic = 'force-dynamic'
import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { supabase } from '../../lib/supabase'
import { useToast } from '../components/Toast'

// ─── Beat checklists ──────────────────────────────────────────────────────────

const sessionChecklist = {
  'save-the-cat': [
    { id: 'opening-image',  section: 'Act 1',      label: 'Opening Image defined',          question: 'What is the very first image of your story? It should be the opposite of your Final Image.',          tip: 'The Opening Image is a snapshot of your protagonist\'s problem, before anything changes. Keep it visual and specific.' },
    { id: 'theme-stated',   section: 'Act 1',      label: 'Theme stated by page 5',          question: 'What does someone say to your protagonist early on that they don\'t yet understand? This is your theme.',tip: 'The theme is rarely stated by the hero  -- it\'s usually said TO them. They\'ll only understand it at the end.' },
    { id: 'catalyst',       section: 'Act 1',      label: 'Catalyst / inciting incident',    question: 'What happens around page 12 that changes your protagonist\'s world? This is the event that kicks the story into motion.', tip: 'The catalyst is done TO the hero, not BY them. It forces them to respond.' },
    { id: 'break-into-two', section: 'Act 1 → 2',  label: 'Break into Two moment',           question: 'What choice does your protagonist make at the end of Act 1 that they cannot take back?',               tip: 'This is the most important beat. The hero must actively CHOOSE to enter Act 2  -- it cannot happen to them.' },
    { id: 'midpoint',       section: 'Act 2',      label: 'Midpoint identified',             question: 'What happens exactly in the middle that raises the stakes and changes the direction of the story?',     tip: 'The midpoint is either a "false victory" (things seem great, then get worse) or a "false defeat" (things seem terrible, then rally).' },
    { id: 'all-is-lost',    section: 'Act 2',      label: 'All Is Lost moment',              question: 'What is the lowest point for your protagonist? What do they lose here?',                               tip: 'The All Is Lost beat often involves a death  -- literal or symbolic. Something must die for the hero to be reborn.' },
    { id: 'finale',         section: 'Act 3',      label: 'Finale structure sketched',       question: 'How does your protagonist use everything they\'ve learned to win? What does winning look like?',        tip: 'The finale should mirror the setup  -- use characters, locations, and objects from Act 1 in new, meaningful ways.' },
    { id: 'final-image',    section: 'Act 3',      label: 'Final Image defined',             question: 'What is the last image of your story? It should be the opposite of your Opening Image.',               tip: 'The Final Image proves the change is real. If your hero was alone at the start, they should be surrounded by love at the end  -- or vice versa.' },
  ],
  'heros-journey': [
    { id: 'ordinary-world',     section: 'Departure',   label: 'Ordinary World established',      question: 'What is your hero\'s normal life before the adventure begins? What is their flaw or limitation?',       tip: 'The Ordinary World exists to show us what the hero stands to lose  -- and what they need to change.' },
    { id: 'call-to-adventure',  section: 'Departure',   label: 'Call to Adventure defined',       question: 'What event or message disrupts your hero\'s ordinary world and presents the challenge ahead?',           tip: 'The call can come in many forms  -- a letter, a death, a discovery. It always asks the hero to step outside their comfort zone.' },
    { id: 'refusal',            section: 'Departure',   label: 'Refusal of the Call',             question: 'Why does your hero initially refuse or hesitate to answer the call? What fear holds them back?',          tip: 'Refusal shows us the hero\'s wound. The stronger the fear, the more powerful the eventual crossing.' },
    { id: 'mentor',             section: 'Departure',   label: 'Meeting the Mentor',              question: 'Who or what gives your hero the wisdom, tool, or confidence they need to cross the threshold?',          tip: 'The mentor doesn\'t solve the problem  -- they prepare the hero and then step aside. Gandalf sends Frodo; he doesn\'t go instead.' },
    { id: 'threshold',          section: 'Departure',   label: 'Crossing the Threshold',          question: 'What is the point of no return that separates the Ordinary World from the Special World?',               tip: 'Once crossed, there is no going back to the old life. The hero is fully committed to the journey.' },
    { id: 'tests-allies',       section: 'Initiation',  label: 'Tests, Allies, and Enemies',      question: 'What tests does your hero face in the Special World? Who do they meet  -- friend and foe?',               tip: 'This section builds the hero\'s skills and relationships while escalating the danger. Everything here prepares them for the Ordeal.' },
    { id: 'ordeal',             section: 'Initiation',  label: 'The Ordeal (central crisis)',     question: 'What is the greatest challenge your hero faces? What death  -- literal or symbolic  -- do they experience?', tip: 'The Ordeal is the midpoint crisis. The hero must "die" here to be reborn with new knowledge and power.' },
    { id: 'road-back',          section: 'Return',      label: 'The Road Back',                   question: 'What drives your hero back toward the Ordinary World? What final obstacle do they face?',                tip: 'The road back often involves a chase or a final temptation. The hero must commit fully to returning.' },
    { id: 'resurrection',       section: 'Return',      label: 'Resurrection / climax',           question: 'How is your hero finally and completely transformed? What final test proves the change is real?',         tip: 'This is the last death-and-rebirth. The hero returns with the elixir  -- wisdom, love, or freedom  -- that can heal the Ordinary World.' },
  ],
  'story-circle': [
    { id: 'you',       section: 'Step 1', label: 'You  -- establish the character',     question: 'Who is your protagonist in their comfort zone? What defines their ordinary life?',                          tip: 'Start with a character who is established  -- not static, but settled. The circle is about to break that settlement.' },
    { id: 'need',      section: 'Step 2', label: 'Need  -- establish the want',          question: 'What does your character need or want? What is the itch they can\'t scratch in their current world?',      tip: 'The need is the engine. It doesn\'t have to be noble  -- greed, loneliness, ambition all work. It just has to be real.' },
    { id: 'go',        section: 'Step 3', label: 'Go  -- enter an unfamiliar world',     question: 'What is the threshold your character crosses into a new and unfamiliar situation?',                        tip: 'The "go" is a crossing point. Something changes  -- location, relationship, status  -- and the character can\'t easily return.' },
    { id: 'search',    section: 'Step 4', label: 'Search  -- road of trials',            question: 'What obstacles and trials does your character face while searching for what they need?',                    tip: 'This is the longest section. The character tries, fails, adapts, tries again. Each attempt should cost something.' },
    { id: 'find',      section: 'Step 5', label: 'Find  -- the thing they were seeking', question: 'Does your character find what they were after? What is the cost or complication of finding it?',           tip: 'The "find" is often a false victory or a revelation that changes what the character thought they wanted.' },
    { id: 'take',      section: 'Step 6', label: 'Take  -- pay the price',               question: 'What price does your character pay for what they found? What do they have to sacrifice or lose?',           tip: 'No reward without cost. The taking forces a sacrifice that proves the character\'s transformation is real.' },
    { id: 'return',    section: 'Step 7', label: 'Return  -- back to the familiar',      question: 'How does your character return to the familiar world, changed? What is different now?',                   tip: 'The return isn\'t always physical. It\'s a return to the familiar  -- but the character sees it with new eyes.' },
    { id: 'change',    section: 'Step 8', label: 'Change  -- transformation complete',   question: 'How has your character fundamentally changed? What can they now do or be that they couldn\'t before?',    tip: 'The change closes the circle. It should mirror the opening  -- same character, different person.' },
  ],
  'freeform': [
    { id: 'premise',      section: 'Foundation',  label: 'Core premise in one sentence',     question: 'What is the single most essential truth about your story? If you had to pitch it in one sentence, what would you say?', tip: 'A premise isn\'t a plot summary  -- it\'s the emotional and thematic heart. What does this story prove or explore?' },
    { id: 'protagonist',  section: 'Foundation',  label: 'Protagonist\'s wound and want',    question: 'What happened to your protagonist before the story began? What do they want because of it?',                            tip: 'The wound drives the want. Everything your protagonist does in the story is a response to something they carry from before it started.' },
    { id: 'stakes',       section: 'Foundation',  label: 'What\'s at stake if they fail',   question: 'What does your protagonist lose if they don\'t achieve their goal? Make it concrete.',                                   tip: 'Abstract stakes kill engagement. "The world will end" is weaker than "she\'ll lose the only person who ever believed in her."' },
    { id: 'opening',      section: 'Structure',   label: 'How the story opens',              question: 'What is the first scene or image? Why does the story start here and not somewhere else?',                               tip: 'The opening is a promise to the audience. It tells them what kind of story this is, tonally and thematically.' },
    { id: 'turn',         section: 'Structure',   label: 'The central turn or crisis',       question: 'What is the moment everything changes and can\'t go back? What is lost or revealed?',                                   tip: 'Every story  -- however freeform  -- has a turn. Find it. It\'s the moment the character or audience can\'t unknow something.' },
    { id: 'resolution',   section: 'Structure',   label: 'How it ends  -- and what it means',  question: 'What happens in your final scenes? What does the ending say about everything that came before it?',                     tip: 'Endings are where meaning lives. A great ending doesn\'t just conclude  -- it recontextualizes.' },
  ],
  'sequence-approach': [
    { id: 'seq-1', section: 'Sequence 1', label: 'Status quo and inciting incident',   question: 'How does your story begin? What event makes this story necessary  -- the moment everything changes?',               tip: 'The inciting incident is done TO the protagonist. It disrupts their equilibrium and forces a response.' },
    { id: 'seq-2', section: 'Sequence 2', label: 'Reaction and dramatic question',     question: 'How does your protagonist respond to the inciting incident? What is the central dramatic question now locked in?', tip: 'The dramatic question must be specific: not "will they survive?" but "will she choose her family over her freedom?"' },
    { id: 'seq-3', section: 'Sequence 3', label: 'First attempt and first failure',    question: 'What is your protagonist\'s first real attempt to solve the problem? Why does it fail?',                         tip: 'The failure should reveal that the protagonist\'s existing tools are insufficient. They must grow to solve the problem.' },
    { id: 'seq-4', section: 'Sequence 4', label: 'Midpoint reversal',                  question: 'What happens at the midpoint that changes everything? Is it a false victory or a false defeat?',                 tip: 'The midpoint raises the stakes permanently. After this, the protagonist cannot return to their previous approach.' },
    { id: 'seq-5', section: 'Sequence 5', label: 'Pressure intensifies',               question: 'What new obstacles does your protagonist face in the second half of Act 2? What is the cost of failure now?',    tip: 'Each obstacle should cost the protagonist something real  -- a relationship, a resource, their certainty about who they are.' },
    { id: 'seq-6', section: 'Sequence 6', label: 'All is lost',                        question: 'What is your protagonist\'s lowest point? What have they lost, and what truth must they now face?',             tip: 'The All Is Lost beat works best when the protagonist\'s flaw is directly responsible for the loss.' },
    { id: 'seq-7', section: 'Sequence 7', label: 'Climax and resolution of A story',   question: 'How does your protagonist make their final approach? How is the central dramatic question answered?',            tip: 'The protagonist must use what they have learned  -- not what they knew at the start. The growth must be visible.' },
    { id: 'seq-8', section: 'Sequence 8', label: 'New equilibrium',                    question: 'What is the world after the story? How has the protagonist changed? What does the ending image say?',            tip: 'Mirror your opening. Use the same characters, locations, or images  -- but let them mean something different now.' },
  ],
  'kishotenketsu': [
    { id: 'ki',       section: 'Ki  -- Introduction',    label: 'Establish the world, no conflict',   question: 'Who are your characters and what is their world? Establish this without introducing any problem.',                            tip: 'Resist every urge to add tension here. Pure establishment. The more settled the Ki, the more powerful the Ten.' },
    { id: 'ki-2',     section: 'Ki  -- Introduction',    label: 'What details anchor the world',      question: 'What specific images, objects, or textures make this world feel real? What will the audience remember?',                      tip: 'The details you introduce in Ki will be recontextualized by the Ten. Plant carefully without signaling importance.' },
    { id: 'sho',      section: 'Shō  -- Development',    label: 'Introduce a second element',         question: 'What is the second element you introduce  -- a character, a situation, a place? It should feel unrelated to Ki.',               tip: 'The apparent unrelatedness is load-bearing. If it feels connected, the Ten cannot land as a revelation.' },
    { id: 'sho-2',    section: 'Shō  -- Development',    label: 'Develop both elements independently', question: 'How does each element develop on its own terms? What is each one becoming?',                                               tip: 'Let both elements breathe. Do not force connection. The audience should have no idea a connection is coming.' },
    { id: 'ten',      section: 'Ten  -- Twist',          label: 'The pivot that recontextualizes all', question: 'What is the single image, moment, or revelation that makes the connection between Ki and Shō suddenly visible?',             tip: 'The Ten is not a plot twist  -- it is a shift in perception. The audience suddenly sees what was always there.' },
    { id: 'ketsu',    section: 'Ketsu  -- Conclusion',   label: 'Reconcile and let meaning land',     question: 'How do the elements of Ki, Shō, and Ten come together? What is the meaning the audience should carry out?',                   tip: 'Do not explain. The Ketsu shows the connection; it does not state it. Trust the audience to feel what you have built.' },
  ],
  'fichtean-curve': [
    { id: 'crisis-1', section: 'Rising Action', label: 'Opening crisis  -- begin in pressure',  question: 'What is the first crisis? The story opens here, not before. What is the protagonist already dealing with?',             tip: 'There is no setup. The first scene is already the story. The audience will catch up. Trust them.' },
    { id: 'backstory-1', section: 'Rising Action', label: 'First backstory reveal',           question: 'What does the audience need to understand from the protagonist\'s past to feel the weight of this first crisis?',        tip: 'Only reveal backstory when the crisis demands it. If the present is clear without it, cut it.' },
    { id: 'crisis-2', section: 'Rising Action', label: 'Second crisis  -- escalation',          question: 'What is the second, more serious crisis? How does it raise the stakes from the first?',                                 tip: 'Each crisis should be worse than the last  -- or reveal that a previous crisis was worse than it appeared.' },
    { id: 'crisis-3', section: 'Rising Action', label: 'Third crisis  -- deepest pressure',     question: 'What is the third crisis? The protagonist should now be at the edge of what they can withstand.',                       tip: 'This is the point where the backstory is most fully revealed  -- the crisis that only makes sense in light of the past.' },
    { id: 'backstory-2', section: 'Rising Action', label: 'Key backstory that unlocks stakes', question: 'What past event, when revealed here, makes the current crisis devastating rather than merely difficult?',              tip: 'The backstory and the crisis should fuse here  -- past and present should feel like the same wound.' },
    { id: 'climax',   section: 'Climax',        label: 'Climax  -- highest crisis point',       question: 'What is the final and definitive crisis? What must the protagonist face, decide, or sacrifice to end it?',             tip: 'The climax should make all previous crises feel like preparation. Everything was building here.' },
    { id: 'resolution', section: 'Resolution',  label: 'Brief resolution  -- aftermath',        question: 'What is the minimal aftermath needed to let the audience exhale? What has the protagonist become?',                    tip: 'Fichtean resolutions are short. The story has been told in the crises. The resolution just closes the wound.' },
  ],

  'sequence-approach': [
    { id: 'seq-1', section: 'Act 1',   label: 'Sequence 1  -- Establish & incite',    question: 'What is your sequence question for pp. 1–15? What specific problem opens, and what event closes this sequence?', tip: 'Establish the world and protagonist, then land the inciting incident. The sequence question: "Will the protagonist respond to this disruption?"' },
    { id: 'seq-2', section: 'Act 1',   label: 'Sequence 2  -- Decision & threshold',  question: 'What is your sequence question for pp. 15–30? What decision does the protagonist make that cannot be unmade?',     tip: 'This sequence ends at the Act 1 break. The question closes with the protagonist actively choosing to enter Act 2.' },
    { id: 'seq-3', section: 'Act 2A',  label: 'Sequence 3  -- New world, old methods',question: 'What is your sequence question for pp. 30–45? How does the protagonist try to solve the problem  -- and why does their approach fail?', tip: 'Old tools meet new problems. The protagonist tries what worked before. It doesn\'t work. The sequence ends in setback.' },
    { id: 'seq-4', section: 'Act 2A',  label: 'Sequence 4  -- Progress & midpoint',   question: 'What is your sequence question for pp. 45–60? What partial success or false victory leads to the midpoint?',       tip: 'The protagonist adapts and makes real progress. The midpoint closes this sequence  -- a false victory (things look great, then reverse) or false defeat (things look terrible, then rally).' },
    { id: 'seq-5', section: 'Act 2B',  label: 'Sequence 5  -- Reversal & escalation', question: 'What is your sequence question for pp. 60–75? How does the midpoint reversal compound  -- what does the protagonist lose?', tip: 'The midpoint\'s consequences arrive. Resources, allies, or advantages are stripped away. The protagonist is more vulnerable than before.' },
    { id: 'seq-6', section: 'Act 2B',  label: 'Sequence 6  -- All Is Lost & choice',  question: 'What is your sequence question for pp. 75–90? What is the protagonist\'s lowest point, and what fundamental choice must they make?', tip: 'The All Is Lost beat lives here. Something dies. The protagonist must choose who they are going to be before Act 3 can begin.' },
    { id: 'seq-7', section: 'Act 3',   label: 'Sequence 7  -- Climax begins',         question: 'What is your sequence question for pp. 90–105? How does the protagonist act on their Act 2 choice, and what is the final confrontation?', tip: 'The protagonist moves with new conviction. The final conflict begins. This sequence ends as the climax reaches its peak.' },
    { id: 'seq-8', section: 'Act 3',   label: 'Sequence 8  -- Resolution',            question: 'What is your sequence question for pp. 105–120? How does the climax resolve, and what is the final state of the world?', tip: 'The climax breaks. The protagonist demonstrates their transformation. Close with an image that mirrors  -- or inverts  -- your opening.' },
  ],
  'kishotenketsu': [
    { id: 'ki',     section: 'Ki  -- 起',    label: 'Introduction: establish the world',     question: 'What world, characters, and situation are you establishing? What does the audience need to fully inhabit this reality?', tip: 'Ki is not setup  -- it is immersion. The goal is to make the audience completely at home in a specific, clearly defined world. Resist the urge to introduce conflict.' },
    { id: 'sho',    section: 'Shō  -- 承',   label: 'Development: introduce the second thread', question: 'What second element  -- character, situation, or idea  -- seems unrelated to the first? How do you develop both threads naturally?', tip: 'The second thread should feel genuinely separate. Don\'t hint at connection too early. The audience should have no reason to suspect these threads will meet.' },
    { id: 'ten',    section: 'Ten  -- 転',   label: 'Twist: the unexpected connection',       question: 'What is your Ten  -- the pivot that brings your two threads into surprising contact? What does the audience now see that they could not before?', tip: 'The Ten is not a deception revealed  -- it is a connection discovered. The audience isn\'t fooled and corrected; they are shown something true that they couldn\'t have seen from where they were standing.' },
    { id: 'ketsu',  section: 'Ketsu  -- 結', label: 'Reconciliation: a new understanding',    question: 'How does the world settle into its new configuration? What has the audience understood that they could not have understood at the start?', tip: 'The resolution absorbs the tension of the Ten rather than resolving it through victory or defeat. The world is not fixed  -- it is seen differently.' },
  ],
  'fichtean': [
    { id: 'opening-crisis',  section: 'Opening',         label: 'Opening crisis  -- begin in the middle', question: 'What crisis does the story open with? What decision or problem drops the audience immediately into action?', tip: 'Do not set up. Drop in. The audience will catch up  -- and catching up keeps them engaged. The opening crisis should be specific and consequential.' },
    { id: 'crisis-1',        section: 'Rising Action',   label: 'First escalating crisis',               question: 'What is the first crisis after the opening? What does it cost the protagonist  -- and what backstory does it reveal?', tip: 'Each crisis should be worse than the last. Ask: what does this crisis force the protagonist to do? What does that action reveal about their history?' },
    { id: 'crisis-2',        section: 'Rising Action',   label: 'Second escalating crisis',              question: 'What is the second crisis? How does it compound the first  -- and what new pressure does it add?',              tip: 'Crises should feel like a tightening spiral, not a list. Each one should make the previous one worse in retrospect.' },
    { id: 'crisis-3',        section: 'Rising Action',   label: 'Third escalating crisis (optional)',    question: 'Is there a third crisis before the climax? What final piece of backstory does it unlock?',                   tip: 'Not every Fichtean structure needs a third pre-climax crisis. Use it if the story needs more rope or if there is essential backstory that has not yet been earned.' },
    { id: 'climax',          section: 'Climax',          label: 'Climax  -- all crises converge',          question: 'How do all previous crises converge into a single overwhelming confrontation? What is the protagonist forced to face?', tip: 'The climax is not a new event  -- it is the sum of everything that came before arriving at once. It should feel inevitable in retrospect.' },
    { id: 'resolution',      section: 'Resolution',      label: 'Brief resolution',                      question: 'How does the story end  -- quickly? What is the single final beat that closes the curve?',                    tip: 'Keep the resolution short. The Fichtean Curve does not reward long denouements. Once the climax breaks, end swiftly. What matters has already happened.' },
  ],

  'seven-point-story': [
    { id: 'hook',        section: 'Opening',  label: 'Hook defined',           question: "Who is your protagonist right now  -- before anything changes? Describe the state that is the opposite of where they will end up.", tip: "The Hook and Resolution should be mirror images. The further apart they are, the more arc you have to work with." },
    { id: 'plot-turn-1', section: 'Act 1',    label: 'Plot Turn 1',            question: "What event pulls your protagonist out of their ordinary world and into the story? This is not what they choose  -- it happens to them.", tip: "Plot Turn 1 is the inciting incident. It makes the ordinary world impossible to return to unchanged." },
    { id: 'pinch-1',     section: 'Act 1→2',  label: 'Pinch Point 1',          question: "How does the antagonistic force demonstrate its power? This is not a plot twist  -- it is a show of strength that reveals what your protagonist is up against.", tip: "The Pinch Point shows the teeth of the antagonist. The audience should feel the threat clearly." },
    { id: 'midpoint',    section: 'Act 2',    label: 'Midpoint (reaction→action)', question: "At what moment does your protagonist shift from reacting to the story to actively pursuing a goal? What makes them commit?", tip: "Before the midpoint the protagonist is driven by events. After it they drive events. The midpoint is that pivot." },
    { id: 'pinch-2',     section: 'Act 2→3',  label: 'Pinch Point 2',          question: "What is the darkest moment  -- the strongest blow the antagonistic force delivers? What does your protagonist lose here?", tip: "Unlike Pinch Point 1 (which showed the threat), Pinch Point 2 delivers it. Something real is lost." },
    { id: 'plot-turn-2', section: 'Act 3',    label: 'Plot Turn 2',            question: "What insight, tool, or decision gives your protagonist what they need to win? Where does it come from  -- and why can only they have it now?", tip: "Plot Turn 2 should emerge from the protagonist\'s transformation arc. It mirrors Plot Turn 1  -- what pulled them in now gives them the means to finish." },
    { id: 'resolution',  section: 'Act 3',    label: 'Resolution defined',     question: "Who is your protagonist at the end? How does this mirror the Hook  -- and what does the difference prove?", tip: "Write this beat before any other. The Resolution is the destination. Everything else is the route." },
  ],

  'freytags-pyramid': [
    { id: 'exposition',    section: 'Stage 1', label: 'Exposition set',       question: "What is the world, who are the characters, and what is the conflict that will drive the story? What is the \'exciting force\'  -- the event that begins the story\'s movement?", tip: "Exposition ends with the inciting incident. The setup exists to make that disruption meaningful." },
    { id: 'rising-action', section: 'Stage 2', label: 'Rising action mapped', question: "What sequence of causally linked events escalates the conflict toward the climax? Each complication should emerge from the one before it  -- not from coincidence.", tip: "Rising Action is the longest part of the pyramid. Check each complication: does it follow causally from the last?" },
    { id: 'climax',        section: 'Stage 3', label: 'Climax identified',    question: "What is the turning point  -- the moment of highest tension where the conflict\'s outcome is determined? Note: this is the pivot, not the ending.", tip: "The climax should be the peak of your pyramid. If tension has already peaked earlier, your climax is misplaced." },
    { id: 'falling-action',section: 'Stage 4', label: 'Falling action',      question: "What are the consequences of the climax? How does tension unravel and what do the characters face because of the turning point?", tip: "Falling action is often compressed in modern stories. Keep it moving  -- the audience already knows the outcome; now they need to see the cost." },
    { id: 'denouement',    section: 'Stage 5', label: 'Denouement',          question: "How is the conflict finally settled? What is the characters\' new state? What equilibrium  -- tragic or comic  -- does the world reach?", tip: "Denouement means \'untying\'. The knot of conflict is released. Be brief  -- what has not been resolved by now will not be." },
  ],

  'snowflake-method': [
    { id: 'one-sentence',  section: 'Step 1', label: 'One-sentence summary', question: "Write your story in one sentence under 25 words. It must contain: protagonist, goal, conflict, and stakes. If you cannot fit these four things, your story is not focused yet.", tip: "This is the hardest step. A clean one-sentence summary means you understand your story. A vague one means you do not yet." },
    { id: 'paragraph',     section: 'Step 2', label: 'Five-sentence outline', question: "Expand to five sentences: setup, first disaster, second disaster, third disaster, ending. Write the ending first  -- then find the disasters that make it inevitable.", tip: "These five sentences are your structural pillars. Everything else builds between them." },
    { id: 'characters',    section: 'Step 3', label: 'Character summaries',  question: "For each major character: name, one-sentence summary, motivation (what they want), goal (what they pursue), conflict (what stops them), epiphany (what they learn). One page each.", tip: "Steps 1-3 are enough to start writing. The rest of the Snowflake builds from here only if you need more scaffolding." },
    { id: 'scene-list',    section: 'Step 4', label: 'Scene list begun',     question: "List every scene you know the story needs. Each scene: whose POV, location, what changes (beginning vs end state), and how it moves the story forward.", tip: "A scene where nothing changes is not a scene  -- it is summary. Every scene must alter the situation." },
  ],

  'hauge-six-stage': [
    { id: 'setup',         section: 'Stage 1 (0–10%)',   label: 'Setup: everyday life',    question: "Who is your protagonist before anything disrupts them? What outer motivation and inner wound are visible in their ordinary life? What is the Opportunity that ends this stage?", tip: "The Setup ends with the Opportunity  -- the inciting event that presents the outer journey. Plant the wound clearly here." },
    { id: 'new-situation', section: 'Stage 2 (10–25%)',  label: 'New situation',           question: "How does your protagonist respond to the Opportunity? What specific outer goal do they identify  -- and what is the Change of Plans that ends this stage?", tip: "By the end of Stage 2, the outer goal must be specific and concrete. Vague goals produce vague stories." },
    { id: 'progress',      section: 'Stage 3 (25–50%)',  label: 'Progress',                question: "Things go relatively well. What relationships form? What brings your protagonist closer to their goal  -- and what is the Point of No Return that ends this stage?", tip: "The Point of No Return is the moment the protagonist commits fully  -- no retreat is possible. It should feel irreversible." },
    { id: 'complications', section: 'Stage 4 (50–75%)',  label: 'Complications',           question: "Everything that can go wrong does. How is the antagonistic force escalating? What is the Major Setback that strips away the protagonist\'s identity  -- ending this stage?", tip: "The Major Setback should force the protagonist out of their false self (Identity) and toward their true self (Essence)." },
    { id: 'final-push',    section: 'Stage 5 (75–90%)',  label: 'Final push',              question: "Acting from their Essence rather than their Identity, how does your protagonist make one final attempt? What is the Climax that ends this stage?", tip: "The Final Push should feel different from everything before  -- because the protagonist has changed. They act from who they actually are." },
    { id: 'aftermath',     section: 'Stage 6 (90–100%)', label: 'Aftermath',               question: "What are the consequences of the Climax? How does the protagonist\'s new state manifest? How do both the outer journey and inner journey reach completion?", tip: "Show, don\'t summarize. The aftermath should be a scene, not narration. Let the audience see the new state." },
  ],
}

const frameworkLabel = {
  'save-the-cat':       'Save the Cat',
  'heros-journey':      "Hero's Journey",
  'story-circle':       'Story Circle',
  'freeform':           'Freeform',
  'sequence-approach':  'Sequence Approach',
  'kishotenketsu':      'Kishōtenketsu',
  'fichtean':           'Fichtean Curve',
  'seven-point-story':  "Dan Wells' Seven-Point",
  'freytags-pyramid':   "Freytag's Pyramid",
  'snowflake-method':   'Snowflake Method',
  'hauge-six-stage':    "Hauge's Six-Stage",
}

// ─── Main Component ────────────────────────────────────────────────────────────

// ─── Daily writing prompts ────────────────────────────────────────────────────

const writingPrompts = [
  { category: 'Character', prompt: 'Write a scene where your protagonist does something that contradicts what everyone thinks they believe. No explanation. Just action.' },
  { category: 'Dialogue', prompt: 'Two characters who need to talk about something serious talk about something completely unrelated instead. The real subject must be felt but never named.' },
  { category: 'Scene Craft', prompt: 'Write a scene where the location itself is the antagonist. The physical space fights the character.' },
  { category: 'Structure', prompt: 'Start your scene at the moment of maximum tension  -- not the buildup. Drop the reader into the middle of impact.' },
  { category: 'Character', prompt: 'Write the scene your protagonist is most afraid to be in. Put them there. See who they become.' },
  { category: 'Dialogue', prompt: 'A character asks a direct question. The other person answers a different question entirely. Neither acknowledges this.' },
  { category: 'Theme', prompt: 'Write a scene where a minor object  -- a mug, a photograph, a door  -- carries the full emotional weight of the moment.' },
  { category: 'Scene Craft', prompt: 'Enter the scene three lines later than you think you should. Cut the last three lines you wrote. Does the scene work better?' },
  { category: 'Character', prompt: 'Write the backstory scene you have never shown  -- the one that explains everything. Then decide whether it belongs in the story at all.' },
  { category: 'Structure', prompt: 'Write your midpoint scene: the moment when everything your protagonist thought they wanted turns out to be the wrong thing.' },
  { category: 'Dialogue', prompt: 'Two characters argue about something small. The argument is actually about something irreparable. Neither says what it is really about.' },
  { category: 'Theme', prompt: 'Find the image that recurs in your story  -- even if you have not written it yet. Write a scene where it appears for the second time, changed.' },
  { category: 'Character', prompt: 'Write a scene where your protagonist wants something so badly they are willing to be cruel to get it. Let them be cruel.' },
  { category: 'Scene Craft', prompt: 'Write a scene between two characters where no one speaks. Convey the full emotional content through action, movement, and space.' },
  { category: 'Structure', prompt: 'Write the moment just after your All Is Lost beat. Your protagonist is alone. What do they do with their hands?' },
  { category: 'Dialogue', prompt: 'Write a scene where the most important line is the one the character almost says but stops. What they stop themselves from saying is the scene.' },
  { category: 'Character', prompt: 'Write the scene where your protagonist lies to someone they love. Make the lie convincing. Make us understand why.' },
  { category: 'Scene Craft', prompt: 'Take a scene that is not working and write it from a different character\'s point of view  -- someone watching from outside.' },
  { category: 'Theme', prompt: 'Your protagonist has a want and a need that are different. Write the scene where they choose the want over the need, and it costs them.' },
  { category: 'Structure', prompt: 'Write your opening image: the single frame that contains your whole story in miniature. What does the audience see before anything happens?' },
  { category: 'Character', prompt: 'Write a scene where your antagonist is completely right. Give them the best possible argument. Let them win the scene.' },
  { category: 'Dialogue', prompt: 'Write a scene where a character tells the truth, but in a way that functions as a lie. The words are accurate. The impression is false.' },
  { category: 'Scene Craft', prompt: 'Cut the first and last paragraph from a scene you have already written. Does anything essential disappear? If not, leave them cut.' },
  { category: 'Character', prompt: 'Write the scene your protagonist has been avoiding for ten years. Not around it  -- into it.' },
  { category: 'Theme', prompt: 'Every story is about a lie the protagonist believes. Write the scene where they first learned that lie was true.' },
]

const promptCategoryColors = {
  'Character': { bg: 'var(--green-pale)', color: 'var(--green)', border: 'var(--green-border)' },
  'Dialogue':  { bg: '#EFF6FF', color: '#1D4ED8', border: '#BFDBFE' },
  'Scene Craft': { bg: '#FEF3C7', color: '#92400E', border: '#FDE68A' },
  'Structure': { bg: '#F3E8FF', color: '#7C3AED', border: '#DDD6FE' },
  'Theme':     { bg: '#ECFDF5', color: '#065F46', border: '#A7F3D0' },
}

function DailyPrompt() {
  const [promptIdx, setPromptIdx] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Set date-based prompt after mount to avoid hydration mismatch
    const today = new Date()
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000)
    setPromptIdx(dayOfYear % writingPrompts.length)
    setMounted(true)
  }, [])
  const prompt = writingPrompts[promptIdx]
  const colors = promptCategoryColors[prompt.category] || promptCategoryColors['Character']

  return (
    <div style={{ border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', marginBottom: '32px' }}>
      <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--off-white)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-soft)' }}>Writing Prompt</span>
          <span style={{ fontSize: '11px', fontWeight: '600', padding: '2px 8px', borderRadius: '20px', background: colors.bg, color: colors.color, border: '1px solid ' + colors.border, fontFamily: 'var(--font-ui)' }}>{prompt.category}</span>
        </div>
        <button
          onClick={() => setPromptIdx(i => (i + 1) % writingPrompts.length)}
          style={{ background: 'none', border: '1px solid var(--border)', borderRadius: '6px', padding: '4px 10px', fontSize: '12px', color: 'var(--text-soft)', cursor: 'pointer', fontFamily: 'var(--font-ui)' }}
        >
          Next prompt
        </button>
      </div>
      <div style={{ padding: '18px 20px' }}>
        {!revealed ? (
          <div>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-soft)', marginBottom: '12px', fontStyle: 'italic' }}>
              A prompt to start the session. Use it or ignore it.
            </p>
            <button
              onClick={() => setRevealed(true)}
              style={{ background: 'var(--green)', color: '#fff', border: 'none', borderRadius: '7px', padding: '9px 18px', fontSize: '13px', fontFamily: 'var(--font-ui)', fontWeight: '600', cursor: 'pointer' }}
            >
              Reveal prompt
            </button>
          </div>
        ) : (
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '15px', color: 'var(--text-dark)', lineHeight: '1.75', margin: 0 }}>
            {prompt.prompt}
          </p>
        )}
      </div>
    </div>
  )
}

function SessionInner() {
  const router       = useRouter()
  const searchParams = useSearchParams()
  const toast        = useToast()

  const [user,        setUser]        = useState(null)
  const [projects,    setProjects]    = useState([])
  const [projectId,   setProjectId]   = useState(searchParams.get('project') || null)
  const [project,     setProject]     = useState(null)
  const [answers,     setAnswers]     = useState({})
  const [saved,       setSaved]       = useState({})
  const [expanded,    setExpanded]    = useState(null)
  const [loading,     setLoading]     = useState(true)
  const [saving,      setSavingBeat]  = useState(null)

  // ── Load user + projects ──────────────────────────────────────────────────
  useEffect(() => {
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      if (!user) { setLoading(false); return }
      setUser(user)

      const { data: projs } = await supabase
        .from('projects')
        .select('id, title, framework, status')
        .eq('user_id', user.id)
        .order('updated_at', { ascending: false })
      setProjects(projs || [])

      // If a project is pre-selected, load its beats
      const pid = searchParams.get('project')
      if (pid && projs) {
        const p = projs.find(x => x.id === pid)
        if (p) {
          setProject(p)
          setProjectId(pid)
          await loadBeats(pid, p.framework)
        }
      }
      setLoading(false)
    })
  }, [])

  async function loadBeats(pid, framework) {
    const { data } = await supabase
      .from('session_beats')
      .select('*')
      .eq('project_id', pid)
      .eq('framework', framework)
    if (data) {
      const a = {}
      const s = {}
      data.forEach(b => {
        a[b.beat_key] = b.notes || ''
        s[b.beat_key] = b.completed || false
      })
      setAnswers(a)
      setSaved(s)
      // Auto-expand first incomplete beat
      const checklist = sessionChecklist[framework] || []
      const first = checklist.find(c => !s[c.id])
      setExpanded(first?.id || checklist[0]?.id || null)
    }
  }

  async function selectProject(pid) {
    const p = projects.find(x => x.id === pid)
    if (!p) return
    setProject(p)
    setProjectId(pid)
    setAnswers({})
    setSaved({})
    setLoading(true)
    await loadBeats(pid, p.framework)
    setLoading(false)
    // Update URL without full navigation
    window.history.replaceState(null, '', `/session?project=${pid}`)
  }

  async function handleSave(beatId) {
    if (!answers[beatId]?.trim() || !project) return
    setSavingBeat(beatId)

    const { error } = await supabase
      .from('session_beats')
      .upsert({
        project_id: projectId,
        framework:  project.framework,
        beat_key:   beatId,
        notes:      answers[beatId].trim(),
        completed:  true,
      }, { onConflict: 'project_id,framework,beat_key' })

    if (error) {
      toast.error('Could not save beat.')
      setSavingBeat(null)
      return
    }

    setSaved(prev => ({ ...prev, [beatId]: true }))
    toast.success('Beat saved.')

    // Auto-advance to next incomplete beat
    const checklist = sessionChecklist[project.framework] || []
    const idx = checklist.findIndex(c => c.id === beatId)
    const next = checklist.slice(idx + 1).find(c => !saved[c.id] && c.id !== beatId)
    if (next) setExpanded(next.id)
    else setExpanded(null)

    setSavingBeat(null)
  }

  // ── No user ───────────────────────────────────────────────────────────────
  if (!loading && !user) {
    return (
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
        <div className="card" style={{ padding: '48px 40px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px' }}>Sign in to use Session Mode</h2>
          <p style={{ color: 'var(--text-mid)', marginBottom: '24px', lineHeight: '1.65' }}>
            Session mode saves your beat answers to your project so you can pick up exactly where you left off.
          </p>
          <button className="btn-primary" onClick={() => router.push('/auth')}>Sign in</button>
        </div>
      </div>
    )
  }

  // ── No project selected ───────────────────────────────────────────────────
  if (!loading && !project) {
    return (
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '48px 24px' }}>
        <Link href="/dashboard" style={{ fontSize: '13px', color: 'var(--text-soft)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px', marginBottom: '32px' }}>
          ← Dashboard
        </Link>

        <div className="fade-up">
          <h1 style={{ fontSize: '28px', marginBottom: '8px' }}>Session Mode</h1>
          <p style={{ color: 'var(--text-mid)', marginBottom: '32px', lineHeight: '1.65' }}>
            Work through your story beats one at a time. Every answer saves automatically.
          </p>

          {projects.length === 0 ? (
            <div className="empty-state">
              <h3>No projects yet</h3>
              <p>Create a project first, then come back to run a session on it.</p>
              <Link href="/projects/new" style={{ textDecoration: 'none' }}>
                <button className="btn-primary" style={{ marginTop: '16px' }}>Create a project</button>
              </Link>
            </div>
          ) : (
            <div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '14px' }}>
                Choose a project
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {projects.map(p => (
                  <button
                    key={p.id}
                    onClick={() => selectProject(p.id)}
                    style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '18px 22px', borderRadius: '10px', cursor: 'pointer', textAlign: 'left',
                      background: '#fff', border: '1px solid var(--border)',
                      transition: 'border-color 0.15s, box-shadow 0.15s',
                      fontFamily: 'var(--font-ui)',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--green)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(45,80,22,0.08)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none' }}
                  >
                    <div>
                      <p style={{ fontWeight: '600', fontSize: '15px', color: 'var(--text-dark)', marginBottom: '3px' }}>{p.title}</p>
                      <p style={{ fontSize: '12px', color: 'var(--text-soft)' }}>{frameworkLabel[p.framework] || p.framework}</p>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: 'var(--text-soft)', flexShrink: 0 }}>
                      <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  // ── Session in progress ───────────────────────────────────────────────────
  const checklist = sessionChecklist[project?.framework] || []
  const completed = checklist.filter(c => saved[c.id]).length
  const pct       = checklist.length > 0 ? Math.round((completed / checklist.length) * 100) : 0

  if (loading) {
    return (
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '48px 24px' }}>
        <div style={{ height: '28px', width: '220px', borderRadius: '6px', marginBottom: '8px' }} className="skeleton" />
        <div style={{ height: '16px', width: '160px', borderRadius: '4px', marginBottom: '32px' }} className="skeleton" />
        {[0,1,2,3].map(i => <div key={i} className="skeleton" style={{ height: '64px', borderRadius: '10px', marginBottom: '10px' }} />)}
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '680px', margin: '0 auto', padding: '48px 24px' }}>

      {/* Header */}
      <div className="fade-up" style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <Link href="/dashboard" style={{ fontSize: '13px', color: 'var(--text-soft)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            ← Dashboard
          </Link>
          <span style={{ color: 'var(--border)' }}>·</span>
          <button
            onClick={() => { setProject(null); setProjectId(null); window.history.replaceState(null, '', '/session') }}
            style={{ background: 'none', border: 'none', fontSize: '13px', color: 'var(--text-soft)', cursor: 'pointer', padding: 0 }}
          >
            Switch project
          </button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <p style={{ fontSize: '12px', color: 'var(--text-soft)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>
              Session Mode · {frameworkLabel[project.framework] || project.framework}
            </p>
            <h1 style={{ fontSize: '28px', marginBottom: '4px' }}>{project.title}</h1>
            <p style={{ fontSize: '14px', color: 'var(--text-mid)' }}>Work through one question at a time. Every answer saves to your project.</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '28px', fontFamily: 'var(--font-display)', color: 'var(--green)', fontWeight: '700' }}>{pct}%</p>
            <p style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>{completed} of {checklist.length} beats</p>
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ marginTop: '20px', height: '6px', background: 'var(--green-pale)', borderRadius: '3px' }}>
          <div style={{ width: `${pct}%`, height: '100%', background: 'var(--green)', borderRadius: '3px', transition: 'width 0.5s ease' }} />
        </div>
      </div>

      {/* Daily prompt */}
      <DailyPrompt />

      {/* Beat checklist */}
      <div className="fade-up fade-up-delay-1" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {checklist.map((item, i) => {
          const isDone = saved[item.id]
          const isOpen = expanded === item.id
          const isSaving = saving === item.id

          return (
            <div
              key={item.id}
              className="card"
              style={{
                overflow: 'hidden',
                border: isDone
                  ? '1px solid var(--green-border)'
                  : isOpen ? '2px solid var(--green)' : '1px solid var(--border)',
                background: isDone ? 'var(--green-pale)' : '#fff',
              }}
            >
              {/* Beat row */}
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '16px 20px', cursor: 'pointer' }}
                onClick={() => setExpanded(isOpen ? null : item.id)}
              >
                <div style={{
                  width: '22px', height: '22px', borderRadius: '50%', flexShrink: 0,
                  background: isDone ? 'var(--green)' : 'transparent',
                  border: isDone ? 'none' : '2px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {isDone
                    ? <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 5.5l2.5 2.5L9 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    : <span style={{ fontSize: '11px', color: 'var(--text-soft)', fontWeight: '600', fontFamily: 'var(--font-mono)' }}>{i + 1}</span>
                  }
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '14px', fontWeight: '600', color: isDone ? 'var(--green)' : 'var(--text-dark)', textDecoration: isDone ? 'line-through' : 'none' }}>
                    {item.label}
                  </p>
                  <p style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>{item.section}</p>
                </div>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', color: 'var(--text-soft)', flexShrink: 0 }}>
                  <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Expanded content */}
              {isOpen && (
                <div style={{ padding: '0 20px 20px', borderTop: '1px solid var(--border)' }}>
                  <p style={{ fontSize: '15px', color: 'var(--text-dark)', fontWeight: '500', margin: '16px 0 8px', lineHeight: '1.5' }}>
                    {item.question}
                  </p>
                  <div className="tip-box" style={{ marginBottom: '14px' }}>
                    <strong>Craft tip:</strong> {item.tip}
                  </div>
                  <textarea
                    className="input"
                    placeholder="Write your answer here…"
                    value={answers[item.id] || ''}
                    onChange={e => setAnswers(prev => ({ ...prev, [item.id]: e.target.value }))}
                    style={{ minHeight: '90px', marginBottom: '12px' }}
                  />
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      className="btn-primary"
                      onClick={() => handleSave(item.id)}
                      disabled={!answers[item.id]?.trim() || isSaving}
                      style={{ opacity: answers[item.id]?.trim() ? 1 : 0.4 }}
                    >
                      {isSaving ? 'Saving…' : isDone ? 'Update →' : 'Save & continue →'}
                    </button>
                    <button className="btn-ghost" onClick={() => setExpanded(null)}>
                      Come back later
                    </button>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Completion message */}
      {pct === 100 && (
        <div className="fade-up" style={{ marginTop: '32px', textAlign: 'center', padding: '32px', background: 'var(--green-pale)', borderRadius: '12px', border: '1px solid var(--green-border)' }}>
          <p style={{ fontSize: '18px', fontFamily: 'var(--font-display)', color: 'var(--green)', marginBottom: '8px' }}>Session complete.</p>
          <p style={{ fontSize: '14px', color: 'var(--text-mid)', marginBottom: '20px' }}>All beats answered. Time to write.</p>
          <Link href={`/projects/${projectId}`} style={{ textDecoration: 'none' }}>
            <button className="btn-primary">Back to project →</button>
          </Link>
        </div>
      )}

    </div>
  )
}

export default function Session() {
  return (
    <Suspense fallback={
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '48px 24px' }}>
        <div className="skeleton" style={{ height: '28px', width: '200px', borderRadius: '6px', marginBottom: '8px' }} />
        <div className="skeleton" style={{ height: '16px', width: '300px', borderRadius: '4px', marginBottom: '40px' }} />
        {[0,1,2,3].map(i => (
          <div key={i} className="skeleton" style={{ height: '72px', borderRadius: '10px', marginBottom: '12px' }} />
        ))}
      </div>
    }>
      <SessionInner />
    </Suspense>
  )
}
