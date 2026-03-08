'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'

const lessons = {
  'what-a-scene-does': {
    title: 'What a scene actually does',
    category: 'Structure',
    time: '6 min',
    body: [
      { type: 'p', text: 'Most beginning writers think a scene\'s job is to advance the plot. Get the character from A to B. Have the conversation that needs to happen. Deliver the information the audience needs to understand what comes next. This is the minimum. A scene that only does this is technically necessary and dramatically inert. It is dead weight.' },
      { type: 'rule', text: 'Every scene must do at least two things simultaneously. If you can only identify one thing a scene is doing, it needs work — or it needs to go.' },
      { type: 'h3', text: 'The two-thing requirement' },
      { type: 'p', text: 'The scene advances the plot and reveals character. The scene raises stakes and establishes theme. The scene creates conflict and deepens a relationship. The scene delivers information and complicates the protagonist\'s situation in a way that makes the information matter. Two things, always. Not one thing twice — two distinct dramatic functions operating simultaneously.' },
      { type: 'p', text: 'In Chinatown, the scene where Jake meets Evelyn Mulwray for the first time is plot: he discovers she is the real Evelyn, not the woman who hired him. But it is simultaneously character revelation — Jake\'s vanity, his assumption that he can read people, his irritation at being wrong, and Evelyn\'s composure under pressure that hints at everything she is hiding. Two functions. Neither one would work alone.' },
      { type: 'h3', text: 'The three questions every scene must answer' },
      { type: 'p', text: 'Ask these questions about every scene you write, in order:' },
      { type: 'list', items: ['What does my protagonist want in this scene — specifically, right now, not in the larger story? Not \'to solve the case\' — to get this specific person to tell them this specific thing. Scene-level want, immediate and concrete.', 'What stands in the way of them getting it? The obstacle cannot be passive. It must be active — another person who wants something else, a circumstance that actively resists, a revelation that changes what the protagonist wants before they can get it.', 'What changes by the end of this scene that cannot be unchanged? This is the most important question. If the answer is \'nothing\' — the scene is stalling.'] },
      { type: 'h3', text: 'The scene that changes nothing' },
      { type: 'p', text: 'The most common structural problem in first drafts is the scene that changes nothing. The protagonist has a conversation that confirms what they already know. The protagonist fails in a way that has no consequence. Two characters discuss the situation without altering it. These scenes feel like they\'re necessary because information is being conveyed or atmosphere is being established — but if nothing changes, the information could be delivered in a sentence of narration and the atmosphere is being used as a reason to avoid drama.' },
      { type: 'p', text: 'The diagnosis is simple: read the scene and ask what is different at the end from the beginning. Not different in the audience\'s understanding — different in the story\'s situation. If the protagonist is in the same power position, with the same knowledge, the same relationships, and the same emotional state at the end of a scene as at the beginning — cut the scene or break it open and find the version of it in which something changes.' },
      { type: 'h3', text: 'Scene vs. sequel — and why most writers overuse the sequel' },
      { type: 'p', text: 'Dwight Swain identified two units of fiction: the scene and the sequel. A scene ends in disaster — the character fails to get what they want. A sequel is the emotional aftermath — the character reacts, thinks, and makes a new decision that launches the next scene. Both are necessary. Most writers write too many sequels. If your character is thinking, processing, remembering, and deciding for more than a page at a time — you have left the story. Drama requires action and resistance. Get back into the scene.' },
      { type: 'tip', text: 'Take your last three scenes. For each, write one sentence: \'By the end of this scene, [what changed]?\' If you cannot complete the sentence — if nothing changed — that is the problem to solve. Find the version of the scene in which the story\'s situation is different at the end than at the beginning. Find what changes, and build toward it.' },
    ],
  },
  'midpoint': {
    title: 'The midpoint is the spine',
    category: 'Structure',
    time: '6 min',
    body: [
      { type: 'p', text: 'The midpoint is the most underrated beat in story structure. Most writers — even experienced ones — treat it like a rest stop. Something to fill the middle of Act 2 before the real drama starts. That is wrong. Remove your midpoint and your story collapses. It does not slow — it collapses.' },
      { type: 'p', text: 'Here is why: Act 2 without a midpoint is just a long list of complications. The hero tries, fails, tries, fails. By page sixty-five, the audience doesn\'t know why they should keep caring. The midpoint is the answer to that question. It is the moment the story shifts from being about what the protagonist wants to being about what the story actually costs.' },
      { type: 'rule', text: 'Before the midpoint: the protagonist is reactive — responding to what the world throws at them. After the midpoint: they are active — choosing to engage, even when they could walk away.' },
      { type: 'h3', text: 'Two types — and why both work' },
      { type: 'p', text: 'Blake Snyder identified two kinds of midpoint and both pivot on the same mechanism. The false victory: things appear to be going well. The protagonist has what they wanted. The couple gets together. The case seems solved. The business is taking off. Then everything gets worse, and worse faster than before — because now there\'s something to lose. The false defeat: things appear to be at their worst. The protagonist has been humiliated, exposed, beaten. Then something small shifts, and they find the will to push forward. Rocky getting destroyed in training montages before he decides he doesn\'t need to beat Apollo — he just needs to go the distance.' },
      { type: 'p', text: 'What matters is not which type you use. What matters is that something changes irreversibly. The stakes shift. They become bigger than the protagonist — they become public, communal, moral. What began as a personal goal reveals itself as something the character cannot walk away from without becoming less than who they are.' },
      { type: 'h3', text: 'What the midpoint actually does' },
      { type: 'p', text: 'In Chinatown, the midpoint is the moment Jake Gittes finds the bodies in the reservoir — and realizes this case is not about infidelity. It is about murder, water rights, and a power structure so entrenched that nothing he does will clean it. He could walk away. He does not. That choice, made in full knowledge of the danger, is the spine. Everything before it is setup. Everything after it is consequence.' },
      { type: 'p', text: 'In Toy Story, Woody and Buzz trapped in Sid\'s house is the false defeat midpoint — they are completely stuck, completely alone, with no plan and no prospect of escape. Then Buzz sees himself on the commercial and has his identity crisis. This is not filler. This is the moment the film earns its emotional climax. Buzz choosing to try, even knowing he can\'t really fly — that choice only means something because of how thoroughly he was broken at the midpoint.' },
      { type: 'h3', text: 'What a bad midpoint looks like' },
      { type: 'p', text: 'A bad midpoint is an event that could happen anywhere in the story. It does not change the stakes — it just intensifies them. The hero fails a little harder. The villain shows up a little more menacingly. Nothing shifts about who the protagonist is, what they\'re fighting for, or how much it will cost to win.' },
      { type: 'p', text: 'Another bad midpoint is a romance beat inserted to slow the story down. Two characters get together. They share a meal. They almost kiss. This is not a midpoint — this is the story pausing. A midpoint cannot be a pause. It has to be the hinge the whole story swings on.' },
      { type: 'h3', text: 'The before-and-after test' },
      { type: 'p', text: 'There is a simple way to test whether your midpoint is working. Write two sentences:' },
      { type: 'list', items: ['Before the midpoint, my protagonist is fighting to ____ because ____.', 'After the midpoint, my protagonist is fighting to ____ because ____.'] },
      { type: 'p', text: 'The first blank in each sentence can be similar. The second blank cannot. The \'because\' must change. If the reason your protagonist is fighting is identical before and after the midpoint — the stakes have not actually shifted. You have a complication, not a midpoint.' },
      { type: 'tip', text: 'Find your midpoint scene. Now ask: what could your protagonist know after this scene that would make quitting impossible? Not just harder — impossible. The midpoint is the moment they learn that information. If that moment doesn\'t exist, write it.' },
    ],
  },
  'want-vs-need': {
    title: 'Want vs. Need: the engine of every great character',
    category: 'Character',
    time: '7 min',
    body: [
      { type: 'p', text: 'Every compelling protagonist has two things: what they want and what they need. These are almost never the same thing. The gap between them is where your story lives. Not the want, not the need — the gap.' },
      { type: 'p', text: 'This distinction sounds simple. It is simple. It is also violated constantly by writers who understand it intellectually but haven\'t made it structural. They know their character wants money and needs love. But every scene is about the money. The need has been named but not dramatized. A want-need structure that only exists in the character document is not a want-need structure — it is a summary.' },
      { type: 'rule', text: 'Want is external. Need is internal. The character can name the want — they pursue it openly. They rarely know the need exists. If the protagonist can articulate their own need, the arc is already resolved.' },
      { type: 'h3', text: 'Three examples, examined closely' },
      { type: 'p', text: 'In Chinatown, Jake Gittes wants to solve the case. He is a detective — solving cases is what he does. He is confident, competent, professional. His need is to accept that his competence cannot fix everything, that some situations are irredeemably corrupt, that the desire to save someone can destroy them. The tragedy is that Gittes gets everything he wants — he solves the case, he uncovers the truth — and it kills Evelyn. The want succeeded. The need was never addressed. That is the tragedy.' },
      { type: 'p', text: 'In The Godfather, Michael Corleone wants to stay out of the family business. He is at the wedding in his military uniform, proud of his separation from what his family is. He wants Americana — the legitimate life, Kay Adams, a future that doesn\'t involve murder. His need is to confront who he actually is: his father\'s son, not by accident or circumstance, but by character. Every time Michael tells someone \'I\'m not my father,\' he is proving he has not yet addressed his need. By the end, he is his father. The want was abandoned in Virgil Sollozzo\'s restaurant. The arc is the story of that abandonment.' },
      { type: 'p', text: 'In Almost Famous, William wants the story — the definitive, honest account of Stillwater\'s tour that will make him a real journalist. His need is to learn that honesty requires choosing truth over access, reporting over belonging. He wants to be inside the world of the band. He needs to learn that being inside it compromises his ability to see it. The whole film is the tension between those two things: the closer he gets, the less he can write.' },
      { type: 'h3', text: 'Why this matters structurally' },
      { type: 'p', text: 'The want drives the plot. Without a want, there is no story — just a person existing. The need drives the theme. Without a need, the story has events but no argument. The theme is what the story says about the human condition, and the theme is only expressed when the character is forced to choose between want and need.' },
      { type: 'p', text: 'That choice is the climax. In the climax, the protagonist faces a situation where pursuing the want requires abandoning the need, or addressing the need requires sacrificing the want. What they choose tells the audience what the story is about. Michael chooses the want. Jake cannot stop pursuing the want even when it kills the thing he was trying to protect. William, finally, chooses the need — he tells the truth, loses the access, publishes the story. Different choices, different genres, different arguments — but all made at the exact same structural moment.' },
      { type: 'h3', text: 'The failure mode' },
      { type: 'p', text: 'The most common failure is a character who gets both the want and the need without having to sacrifice either. They solve the case and have the insight. They get the girl and realize what really matters. They win and grow simultaneously. This is the hallmark of a story that hasn\'t committed to its own argument. If the character doesn\'t have to give something up, the theme has no teeth. The want and the need must be in real tension — choosing one must cost the other.' },
      { type: 'tip', text: 'Write two sentences. \'At the climax, my protagonist chooses ____ (the want) / ____ (the need).\' Then: \'This choice costs them ____.\' If you can\'t fill in that last blank — if the choice is cost-free — the want-need structure hasn\'t been made structural yet. Find the cost.' },
    ],
  },
  'dialogue-subtext': {
    title: 'Nobody talks to have a conversation',
    category: 'Dialogue',
    time: '7 min',
    body: [
      { type: 'p', text: 'Watch people talk in real life. Not at a dinner party where everyone is performing, but in an airport, in a waiting room, in the parking lot after a bad meeting. They are not exchanging information. They are not having a conversation in any philosophical sense. They are negotiating. Every sentence is an offer, a test, a deflection, a plea, a threat disguised as a question.' },
      { type: 'p', text: 'Dialogue in fiction fails when it forgets this. When two characters say exactly what they mean and respond precisely to what was said and the conversation ends when the information has been exchanged — that is not dialogue. That is exposition wearing the costume of dialogue. And the audience knows it, even if they can\'t say why.' },
      { type: 'rule', text: 'Every line of dialogue is a transaction. Someone wants something and is using language to try to get it. If no one wants anything in your scene, no one should be talking.' },
      { type: 'h3', text: 'What subtext actually is' },
      { type: 'p', text: 'Subtext is not a technique you apply to dialogue. It is what happens when characters cannot say what they mean. And characters cannot say what they mean for one of four reasons: they don\'t know what they mean, they know but are afraid to say it, they know but saying it would make it real, or they know but saying it would destroy the relationship they\'re simultaneously trying to protect.' },
      { type: 'p', text: 'The most subtext-rich scenes are the ones where all four are operating at once. Think of the dinner scene in Ordinary People — Conrad sitting across from Beth, both of them talking about food and schedules while the conversation about their dead son, about who is to blame, about whether this family has a future — that conversation is happening in the space between every sentence. The subtext is not hidden. It is right there on the surface, running alongside the words like a shadow.' },
      { type: 'h3', text: 'The iceberg principle' },
      { type: 'p', text: 'Hemingway said the dignity of movement of an iceberg is due to only one-eighth of it being above water. What is spoken in a scene is the one-eighth. The seven-eighths is what each character wants, fears, knows, suspects, needs, remembers, and is deliberately not saying. The audience doesn\'t need to be told about the seven-eighths. They feel it. The job of the writer is to ensure it\'s there.' },
      { type: 'p', text: 'Two people talking about the weather — genuinely, with nothing else going on — is boring. Two people talking about the weather while one of them knows the other is dying and the dying person knows that the other person knows and neither of them is going to acknowledge it — that is devastating. The subject of the conversation is irrelevant. The weight beneath it is everything.' },
      { type: 'h3', text: 'The four functions of dialogue' },
      { type: 'list', items: ['To reveal character — not just what they say, but how they say it, what they avoid, how long they wait before answering.', 'To advance conflict — conflict is not argument. Conflict is two people wanting different things simultaneously. The most civilized conversation can contain conflict.', 'To deliver information — but always as a byproduct of the other three, never as the primary purpose. The moment delivering information becomes the scene\'s purpose, the audience checks out.', 'To establish relationship — the way two people talk to each other tells us everything about their history, their power dynamic, their unspoken agreements about what can and cannot be said.'] },
      { type: 'h3', text: 'What to cut' },
      { type: 'p', text: 'Cut pleasantries that don\'t reveal character. Cut agreement — two characters who agree about something have nothing to say to each other. Cut on-the-nose dialogue, where characters say exactly what they feel: \'I feel like you don\'t respect me.\' Nobody says that. They say something else that means it. Cut exposition dressed as conversation: \'As you know, John, we\'ve been partners for fifteen years.\' No one talks like that. And cut the ending of scenes — most scenes should end one beat earlier than they do, before the characters have resolved the surface topic.' },
      { type: 'h3', text: 'The scene where nothing is said' },
      { type: 'p', text: 'Some of the best dialogue scenes contain almost no dialogue. A long pause after a question. The camera on a face while the other person talks. The answer that does not address the question asked. The word repeated — \'fine,\' \'fine,\' \'fine\' — until it no longer means fine at all. Learn to write silence as deliberately as you write speech. The pause between lines is dialogue.' },
      { type: 'tip', text: 'Take your last page of dialogue. Go through each line and write in the margin what the character actually wants — not what they\'re saying, but the thing they\'re trying to get by saying it. If the want is identical to what they\'re saying, the line has no subtext. Rewrite it toward the want, not toward the information.' },
    ],
  },
  'theme': {
    title: 'Theme isn\'t a message — it\'s a question',
    category: 'Theme',
    time: '6 min',
    body: [
      { type: 'p', text: 'Beginning writers confuse theme with message. A message is what you want to say to the audience. A theme is what the story forces the audience to think about. These are not the same thing, and the difference is the difference between a story that challenges the reader and a story that lectures them.' },
      { type: 'p', text: 'A message is a conclusion: crime doesn\'t pay, love conquers all, family is everything. A theme is a question: what does justice cost the people who pursue it? What do we owe each other in the aftermath of violence? Can a person choose who they become, or are they determined by what they were made to be? The best stories sit with the question. They do not resolve it. They dramatize it from multiple angles, give the strongest arguments to multiple characters, and let the audience wrestle with the weight.' },
      { type: 'rule', text: 'Theme is not \'crime doesn\'t pay.\' Theme is \'what does justice cost the people who pursue it?\' A theme stated as a conclusion is a sermon. A theme stated as a question is a story.' },
      { type: 'h3', text: 'How theme surfaces — without being stated' },
      { type: 'p', text: 'Theme is never announced in a functional story. It surfaces through pattern — through what keeps recurring, through what the protagonist keeps losing or gaining, through what the antagonist represents. It surfaces through the story\'s argument: the series of events that the structure makes causal, which implicitly argue that the world works a certain way.' },
      { type: 'p', text: 'In Save the Cat, Blake Snyder argued that theme is almost always stated early in the story by a minor character — and the protagonist ignores it or dismisses it. By the end, they finally understand what was being said. The thematic statement and the moment of understanding bracket the entire arc. The story is the protagonist\'s journey from not-understanding to understanding the theme. When you find that early statement in a finished film and watch it again knowing what it means — it is almost always devastating.' },
      { type: 'h3', text: 'The antagonist embodies the counter-argument' },
      { type: 'p', text: 'This is one of the most useful structural insights in screenwriting: the antagonist is not the villain. The antagonist is the character who embodies the story\'s counter-argument — the strongest possible case for the opposite of what the story ultimately argues. This is why weak antagonists produce weak stories. If the counter-argument is weak, the story\'s argument has not been tested. The theme is only as strong as the antagonist\'s challenge to it.' },
      { type: 'p', text: 'In To Kill a Mockingbird, Atticus Finch argues for justice and the equal dignity of all people. The town of Maycomb argues for tradition, order, and the protection of social hierarchy. The town\'s argument is not stupid — it has a coherent internal logic, it reflects real values held by real people, and in a certain reading it even wins. The theme only means something because the counter-argument is this formidable.' },
      { type: 'h3', text: 'What happens when you make the theme a message' },
      { type: 'p', text: 'When a story has decided its own question in advance — when the theme is a message rather than an inquiry — the storytelling becomes selective in a way the audience feels. Characters who represent the \'wrong\' position are made stupid or cruel. Evidence that complicates the conclusion is withheld. The story begins to feel rigged, because it is. The audience can feel when they\'re being maneuvered toward a predetermined conclusion, and they resist it.' },
      { type: 'p', text: 'The strongest arguments in fiction are the ones that genuinely consider the counter-argument and give the best possible case for it — and then show, through the story\'s events, why the story\'s position is the more defensible one. Not by stacking the deck. By following the logic.' },
      { type: 'tip', text: 'State your theme as a question, not a sentence. \'Is loyalty worth its cost?\' is a theme. \'Loyalty is worth any cost\' is a message. Now write the strongest possible argument for the opposite answer — the best case the story could make for \'no, loyalty costs too much.\' Is that argument in your story? Does your antagonist or secondary character make it? If not, your theme hasn\'t been tested yet.' },
    ],
  },
  'act-breaks': {
    title: 'Act breaks: what they are and why they matter',
    category: 'Structure',
    time: '7 min',
    body: [
      { type: 'p', text: 'An act break is not a chapter ending. It is not a pause in the story or a breath before the drama resumes. An act break is a point of no return — an event so significant that the story cannot return to what it was before it happened. The protagonist\'s situation, their understanding of the world, or both — changes permanently. The story that existed before the act break is over. A different story begins.' },
      { type: 'rule', text: 'Every act break must permanently change the protagonist\'s situation, their understanding, or both. A moment that merely intensifies without redirecting is not an act break.' },
      { type: 'h3', text: 'The Act 1 break — the threshold' },
      { type: 'p', text: 'The Act 1 break is the most important structural moment in your story. It is not the inciting incident — that is the moment the protagonist\'s ordinary world is disrupted. The Act 1 break is the moment the protagonist chooses to enter the story. Not has something happen to them. Chooses. They cross the threshold deliberately, even when they don\'t want to, even when they know the cost.' },
      { type: 'p', text: 'This distinction — active versus passive — is everything. If your protagonist is pushed into Act 2 rather than walking in — if the plot happens to them rather than being driven by them — the Act 1 break is not working. The hero who is dragged into the adventure is a passenger. The hero who steps across the threshold, knowing what it will cost, is a protagonist.' },
      { type: 'p', text: 'In The Godfather, Michael Corleone is not pushed into shooting Sollozzo and McCluskey. He volunteers. He argues for it. He plans it. He walks into that restaurant having made a choice that will end the life he wanted, and he makes it anyway. That is why the Act 1 break of The Godfather is so devastating — the protagonist did it to himself. The audience cannot feel good about the drama to come.' },
      { type: 'h3', text: 'The Act 2 break — synthesis' },
      { type: 'p', text: 'The Act 2 break follows the All Is Lost moment. The protagonist has lost everything. Their plan has failed. The relationship is over. The goal that organized Act 2 is gone. Then something happens — an insight, a conversation, a sudden connection between two things they\'ve learned — that makes them believe one more attempt is possible.' },
      { type: 'p', text: 'This is a synthesis event, not just a recovery. The A story (the plot, the external goal) and the B story (the relationship, the emotional arc) converge. The thing the protagonist learned in the B story gives them the key to the A story. Or the A story\'s failure reveals what the B story was actually about. The hero does not simply try harder — they try differently, armed with understanding they did not have before.' },
      { type: 'h3', text: 'What bad act breaks look like' },
      { type: 'list', items: ['The protagonist is pushed into the new act by circumstances, not choice. A person who is dragged forward is not an active protagonist.', 'The break is an event that could plausibly happen anywhere in the story — it is not structurally specific to this moment.', 'The story\'s power dynamic hasn\'t actually changed. The same forces are in play with the same relationships and the same stakes.', 'The protagonist ends the act in essentially the same emotional state they began it. No learning, no loss, no transformation.', 'The break is announced rather than dramatized. Characters say \'everything has changed now\' instead of the change being felt in the scene.'] },
      { type: 'h3', text: 'The cost test' },
      { type: 'p', text: 'Every act break must cost something. The protagonist who crosses the Act 1 threshold pays with the life they were living — their safety, their comfortable identity, their ability to claim ignorance. The protagonist who breaks into Act 3 pays with the hope that they could have not done this — they are now fully committed, fully responsible, fully in.' },
      { type: 'tip', text: 'Write one sentence for each act break in your story: \'The protagonist chooses to _____, even though it means _____.\' The second blank is the cost. If you cannot fill it in — if the act break is cost-free — it is not yet an act break. Find the version of the moment in which something is sacrificed to cross the threshold. That sacrifice is what makes the break structural rather than incidental.' },
    ],
  },
  'all-is-lost': {
    title: 'The All Is Lost beat',
    category: 'Structure',
    time: '6 min',
    body: [
      { type: 'p', text: 'Writers protect their protagonists. It is a natural impulse — you have spent months with this person, you understand them, you want things to go well for them. You need to fight this instinct. At the All Is Lost beat, things cannot go well. Things must go as badly as they can possibly go. And if you soften it because it feels cruel, you have just made your third act meaningless.' },
      { type: 'p', text: 'The All Is Lost beat is the lowest point in your story. Not the second-lowest. Not a setback that can be recovered from with determination. The lowest point. Everything your protagonist has been building toward is gone. Their plan has failed. The relationship they risked everything for is over. The thing they sacrificed everything to protect has been destroyed anyway.' },
      { type: 'rule', text: 'Something must die in the All Is Lost beat. Blake Snyder called it the \'whiff of death.\' It does not have to be a person. It can be the death of a dream, a relationship, an identity, a hope. But something must end — permanently enough that the protagonist cannot simply try the same approach again.' },
      { type: 'h3', text: 'Why the depth of the valley determines the height of the climb' },
      { type: 'p', text: 'The All Is Lost beat exists in structural relationship to the Break into Three that follows it. The distance between your protagonist at the bottom and your protagonist in the finale is the measure of their transformation. A shallow All Is Lost — a mere setback, a problem that looks bad but could obviously be fixed — produces a shallow arc. The audience does not feel the comeback because they were never convinced there was anything to come back from.' },
      { type: 'p', text: 'In Toy Story, Buzz has just watched himself on TV and learned, with certainty, that he is a toy. Not a space ranger — a toy. He climbs to the roof, attempts to fly, and falls. He lands in a box. His arm breaks. He sits in that box with a broken arm and a broken identity and no plan. This is a complete collapse. Woody finds him and tries to cheer him up and Buzz refuses to move. That refusal — the not-getting-up — is what earns everything that comes after.' },
      { type: 'h3', text: 'All Is Lost vs. Dark Night of the Soul' },
      { type: 'p', text: 'These two beats are usually placed adjacent to each other and are often confused. They are different in kind, not just in order. The All Is Lost is an event — something that happens, externally, that removes the protagonist\'s last option or delivers the decisive blow. The Dark Night of the Soul is what happens inside the protagonist in the aftermath. It is the emotional processing — the sitting in the wreckage, the asking what any of it was for, the moment of genuine despair before the turning.' },
      { type: 'p', text: 'Both are necessary. The All Is Lost without a Dark Night of the Soul is action without consequence — we see the blow land but not the damage. The Dark Night without a preceding All Is Lost is introspection without cause — a character contemplating their situation without the specific destruction that makes the contemplation earned.' },
      { type: 'h3', text: 'What death looks like' },
      { type: 'p', text: 'The most literal All Is Lost beats involve an actual death — Old Yeller, Mufasa, Gandalf. These work because death is legible and irreversible. But the most powerful ones involve the death of something abstract — and the specificity of naming that abstract thing is what makes it hit. In Whiplash, the All Is Lost is not that Fletcher sees the car accident happen. It is Andrew sitting on the stage in front of an audience, unable to start, publicly dismantled by the person who made him. The dream of becoming a great musician — the specific version of that dream that required Fletcher\'s validation — dies there.' },
      { type: 'h3', text: 'The two mistakes writers make here' },
      { type: 'p', text: 'The first mistake is softening the loss because it feels too cruel. The second mistake is making the loss too abstract to feel. \'He lost everything\' is not felt by the audience. \'He watched the specific thing he had given up the specific relationship for burn in the specific fire he could have stopped\' — that is felt. The All Is Lost beat requires the same specificity as every other beat. Vague loss produces no catharsis.' },
      { type: 'tip', text: 'Ask this: what does your protagonist value most at this point in the story — not abstractly, but concretely? Name the object, the relationship, the accomplishment. Now write the scene in which that specific thing is gone. If the scene does not feel devastating to write, it is not devastating enough.' },
    ],
  },
  'ghost': {
    title: 'The ghost: what happened before page one',
    category: 'Character',
    time: '6 min',
    body: [
      { type: 'p', text: 'Every compelling character carries a wound they do not talk about. Not a quirk, not a preference, not a personality trait — a wound. Something happened before the story begins that broke something in them, and they have been walking around with the break ever since.' },
      { type: 'p', text: 'In screenwriting, this is called the ghost. It is not backstory in the conventional sense. It does not require a flashback. It does not require an explanation. The audience never needs to be told about the ghost directly. But you — the writer — need to know it in precise detail, because every scene you write will be different depending on what happened.' },
      { type: 'rule', text: 'The ghost is not backstory for its own sake. It is the source of the flaw that drives the arc. It is the thing the character has been compensating for since before we met them.' },
      { type: 'h3', text: 'Specificity is everything' },
      { type: 'p', text: 'A vague ghost produces a vague character. \'She had a difficult childhood\' is not a ghost — it is a placeholder. \'The afternoon her father left, she was the one who answered the door and heard him say he wasn\'t coming back, and she never told her mother\' — that is a ghost. That specific event, that specific knowledge she\'s been carrying alone, that specific way it rearranged her understanding of loyalty and silence — that is something a character can be built from.' },
      { type: 'p', text: 'Rick Blaine\'s ghost is not \'a woman hurt him.\' It is the specific image of standing at a train station in the rain with tickets to Marseille while Ilsa never appears. The specificity of that abandonment — the tickets, the rain, the waiting, the moment he finally has to accept she is not coming — is what makes every scene between Rick and Ilsa in Casablanca carry the weight it does.' },
      { type: 'p', text: 'Clarice Starling\'s ghost is not \'she had a hard childhood\' or \'she saw something traumatic.\' It is the screaming of the lambs — the specific night she woke up, went to the barn, found the lambs being slaughtered, tried to carry one and run, and was caught. The specificity is what gives Hannibal Lecter the power to find it. A vague wound cannot be found. Only a specific one can be uncovered.' },
      { type: 'h3', text: 'How the ghost shows up' },
      { type: 'p', text: 'You do not show the ghost. You show what the ghost produces. The ghost produces the flaw, the defense mechanism, the pattern of behavior the character repeats without knowing why. Michael Corleone\'s ghost — a father he both idolized and feared, whose power he saw as a trap even as he inherited it — shows up as a man who swears he will never become his father, and becomes him exactly. The ghost is never explained. It is enacted.' },
      { type: 'p', text: 'The ghost also produces the moment of maximum vulnerability. When the story arrives at the exact situation that rhymes with the ghost — the same type of abandonment, the same test of loyalty, the same impossible choice — the character either overcomes the ghost or is destroyed by it. That moment is the climax. The climax is always about the ghost, even when it appears to be about the plot.' },
      { type: 'h3', text: 'The ghost and the lie' },
      { type: 'p', text: 'The ghost and the lie the character believes are directly connected. The ghost is the event; the lie is the conclusion the character drew from it. The father who left at age eight becomes the adult who believes they are fundamentally unlovable — that people always leave in the end, so it is better to leave first. The ghost created the lie. The arc is the process of the character discovering the lie is a lie. You cannot write a convincing lie without a specific ghost to generate it.' },
      { type: 'h3', text: 'The ghost does not require a reveal' },
      { type: 'p', text: 'A common mistake is to build toward a flashback scene where the ghost is finally shown — a \'now we understand everything\' moment. Resist this. It almost always deflates rather than deepens. The power of the ghost is in what it produces, not in the event itself. Showing the event often reduces it. The audience\'s imagination, guided by the behavior patterns you\'ve established, will generate something more powerful than anything you can depict.' },
      { type: 'tip', text: 'Write your protagonist\'s ghost as a single, specific event — not a period of time, not a pattern, but one moment. Write it in a paragraph as if you were writing the scene, even if you never use it. The detail you put in will emerge in the character\'s behavior whether or not you ever refer to it directly.' },
    ],
  },
  'antagonist': {
    title: 'Making your antagonist as strong as your hero',
    category: 'Character',
    time: '7 min',
    body: [
      { type: 'p', text: 'A weak antagonist makes a weak story. This is one of the most reliable rules in all of narrative craft — and one of the most violated. Writers spend months building their protagonist\'s complexity, their wound, their voice, their arc. Then they hand the protagonist an obstacle with no interior life and wonder why the story feels thin.' },
      { type: 'p', text: 'Your antagonist is not a problem to be solved. They are not the plot\'s engine or the third act\'s mechanism. They are a person — with a worldview, a history, a logic, and a wound of their own. They exist to reveal your protagonist by opposing them. The quality of that opposition determines the quality of the story.' },
      { type: 'rule', text: 'Your antagonist must be the hero of their own story. They must have a worldview that is internally consistent, that responds to something real about the world — even if that worldview leads to terrible things.' },
      { type: 'h3', text: 'The antagonist\'s argument' },
      { type: 'p', text: 'Every great antagonist makes an argument. Not an excuse — an argument. Hannibal Lecter argues that intelligence and aesthetic sensibility exempt certain people from conventional morality, that the rude deserve to be eaten because civilization requires standards. This is wrong. It is also coherent. It reflects a real (if repellent) position that has been held by real people throughout history.' },
      { type: 'p', text: 'Amy Dunne in Gone Girl argues that the performance of femininity is a trap that punishes honesty and rewards performance, that the \'Cool Girl\' is a construct designed to serve men, and that ruthlessness is the only honest response to a social system rigged against women. This argument is made explicitly in one of the most stunning monologues in recent American film. It is also the argument of a sociopath. But it is not a stupid argument. It responds to something real. That is why it lands.' },
      { type: 'p', text: 'Anton Chigurh in No Country for Old Men argues that death is impartial — that it comes for everyone regardless of their virtue, that the idea that good people are protected from bad outcomes is a delusion, and that he is simply the physical manifestation of that truth. He does not kill for pleasure. He kills with the detachment of someone executing an inevitable process. The horror of Chigurh is that his argument is, on a certain level, correct. The world is indifferent. He has simply decided to embody that indifference.' },
      { type: 'h3', text: 'The antagonist mirrors the hero' },
      { type: 'p', text: 'The most powerful antagonists are dark mirrors of the protagonist — a version of what the hero could become if they made different choices, or if their wound had resolved differently. Both want the same thing by different means. Both have the same kind of wound, differently interpreted. Both operate by a logic that makes sense from the inside.' },
      { type: 'p', text: 'Michael Corleone and Virgil Sollozzo both want power and protection for their families. Michael and Hyman Roth are both men who learned their business from Vito Corleone. The Joker and Batman are both people made by violence and loss — the same event, processed by different psychologies. This is why the confrontation between protagonist and antagonist feels like something more than a fight. It feels like a person confronting a version of themselves.' },
      { type: 'h3', text: 'Giving them a wound' },
      { type: 'p', text: 'The antagonist needs a ghost as much as the protagonist does. They do not need to be sympathetic — they need to be comprehensible. The wound explains why their worldview formed, why the argument they\'re making felt true from the inside, why the terrible choices they\'ve made had an internal logic. You do not have to show this wound on screen. You have to know it. It will show up in the way they move through the story.' },
      { type: 'h3', text: 'What antagonists are not' },
      { type: 'list', items: ['A person who is simply cruel without cause, logic, or history. Pure cruelty is not menacing — it is boring, because it has no argument.', 'An obstacle that exists to generate plot complications. An obstacle is a door. An antagonist is a person.', 'A character whose only function is to appear when the protagonist needs to be challenged and disappear when they don\'t.', 'Pure evil with no humanity. Pure evil is a cartoon. Cartoons do not frighten.'] },
      { type: 'p', text: 'The test is this: if you removed the protagonist from your story and followed the antagonist instead — would there be a story? Would the antagonist have goals, methods, relationships, a worldview they were pursuing? If the answer is no, the antagonist only exists in relation to your protagonist\'s needs, not as a person in their own right. That is the problem to solve.' },
      { type: 'tip', text: 'Write your antagonist\'s argument in one sentence: \'The world works this way, and I am the only one honest enough to act on it.\' Fill in the first half. Make it as strong as possible — give the antagonist the best possible case for their position. Then ask: does your story genuinely engage with this argument? Does the antagonist get to make it, clearly and with force? If the protagonist defeats the antagonist without ever genuinely engaging with the argument — the story hasn\'t earned the victory.' },
    ],
  },
  'subtext': {
    title: 'Subtext: what is not being said',
    category: 'Dialogue',
    time: '6 min',
    body: [
      { type: 'p', text: 'Subtext is not a technique writers add to dialogue to make it feel literary. It is what happens when two people want something that language cannot safely carry. It is the byproduct of human beings trying to coexist while protecting themselves. Every person in every room is managing the gap between what they feel and what they are willing to say. Your characters should be doing the same thing.' },
      { type: 'rule', text: 'The best dialogue is an iceberg. What is spoken is ten percent. Two people talking about the weather can break your heart — if the writer has built the pressure correctly.' },
      { type: 'h3', text: 'Why people don\'t say what they mean' },
      { type: 'p', text: 'There are four reasons characters — like real people — avoid direct statement. They don\'t yet know what they feel. They know but fear that saying it will make it real. They know but are protecting the other person. They know and are trying to get something without the exposure of asking for it directly. The most subtext-rich scenes are the ones where multiple reasons are operating simultaneously, and the audience feels the pressure building even though nothing explicit has been said.' },
      { type: 'h3', text: 'The scene beneath the scene' },
      { type: 'p', text: 'In The Remains of the Day, the entire film is a subtext scene. Stevens and Miss Kenton talk about household management. They talk about books. They stand in doorways. They discuss schedules. The scene beneath the scene — the one that cannot be spoken about because Stevens has organized his entire life around the suppression of feeling — is a love story that runs for twenty years without ever being acknowledged. The film is devastating not because anything is said, but because nothing is.' },
      { type: 'p', text: 'This is the extreme version. You can build enormous subtext without that level of restraint. The Godfather conversation between Michael and Sonny about strategy — the surface is tactical, the subtext is Michael asserting, for the first time, that he is his father\'s true heir and he wants Sonny to acknowledge it. Sonny won\'t. The scene is about that refusal, not about the tactics.' },
      { type: 'h3', text: 'What subtext is not' },
      { type: 'p', text: 'Subtext is not characters being vague or confusing. It is not dialogue where the writer has withheld information to create mystery. It is not stylized indirection for its own sake. Subtext requires the audience to understand exactly what is not being said — not to be confused about what\'s happening, but to feel the pressure of the gap between what is said and what is meant. If the audience doesn\'t know what the subtext is, the scene has failed. The subtext must be legible even as it remains unspoken.' },
      { type: 'h3', text: 'On-the-nose dialogue and why it kills scenes' },
      { type: 'p', text: 'On-the-nose dialogue is the opposite of subtext: characters saying exactly what they mean. \'I feel like you don\'t value me.\' \'I\'m afraid that if I let you in, you\'ll hurt me.\' \'This is about more than the money — it\'s about respect.\' These lines are not wrong because they\'re false. They\'re wrong because real people do not make themselves this vulnerable in conversation. Characters who speak their subtext directly stop being people and become mouthpieces. The audience feels the writer\'s hand, not the character\'s experience.' },
      { type: 'h3', text: 'Building subtext through context' },
      { type: 'p', text: 'Subtext is not built in a single scene — it is built by establishing the context that makes a scene carry weight. The audience needs to know what a character cannot say before the scene in which they almost say it can work. This is why great dialogue writers build carefully toward their subtext moments. The scene where nothing is said requires the prior scenes that established what\'s at stake if it is said.' },
      { type: 'tip', text: 'Find a scene in your work where a character says something true about themselves or their situation. Ask: why would this person say this, right now, to this other person? Would saying it expose them? Cost them something? If the answer is no — the line has no subtext risk. Find the version of the line that gets to the same place without making the character that vulnerable. That version is the scene.' },
    ],
  },
  'arguments': {
    title: 'How to write an argument that feels real',
    category: 'Dialogue',
    time: '7 min',
    body: [
      { type: 'p', text: 'Most written arguments are about what they appear to be about. Two characters fight about money, or who forgot to make a reservation, or whether they should move to another city. The argument unfolds logically. Each character makes their point. The better argument wins or a compromise is reached. It is completely inert.' },
      { type: 'p', text: 'Real arguments are almost never about their surface subject. They are about what people are afraid of losing. The fight about money is about whether one person respects the other enough to be honest. The fight about the reservation is about the accumulated weight of feeling invisible. The fight about moving is about who has already decided they don\'t have a future here, and whether they have the nerve to say so.' },
      { type: 'rule', text: 'Real arguments are not about what people are arguing about. They are about the wound underneath — and someone, eventually, will stop fighting about the surface and say the wound out loud. That moment is the scene.' },
      { type: 'h3', text: 'The structure of escalation' },
      { type: 'p', text: 'Arguments in real life and in good writing share a structure that writers often ignore because it feels counterintuitive. Arguments rarely get louder in a straight line. They escalate in steps, with pauses. One person says something. The other person doesn\'t respond immediately — they adjust. They decide how much of the truth to say. They say a version of it. The first person hears the version and understands the real meaning and goes to the next level.' },
      { type: 'p', text: 'The most powerful thing in an argument scene is what a character chooses not to say. The held-back accusation is more dangerous than the one voiced, because the audience knows it is coming. Every line after the near-miss carries the pressure of the thing that hasn\'t been said yet.' },
      { type: 'h3', text: 'The thing that cannot be unsaid' },
      { type: 'p', text: 'Every real argument has a threshold — the line someone crosses from which there is no return. Before the threshold: both people are still fighting to preserve the relationship, even while attacking each other. After the threshold: something has changed permanently. One person said the true thing, the cruel thing, the thing they cannot take back. Now both people are in different territory.' },
      { type: 'p', text: 'In Who\'s Afraid of Virginia Woolf, George and Martha spend the entire play building to that threshold — and the genius is that each time you think they\'ve crossed it, they pull back, circle, and go again. The threshold becomes the shape of the whole film. Your job is to know where your threshold is and to make the audience feel it approaching.' },
      { type: 'h3', text: 'What arguments reveal that nothing else can' },
      { type: 'p', text: 'An argument is a diagnostic. Under enough pressure, characters cannot maintain their social performance. They revert to pattern. The person who always deflects with humor stops being funny. The one who controls the room with competence suddenly sounds like a frightened child. The one who never raises their voice says the most devastating thing in the quietest tone.' },
      { type: 'p', text: 'This is why arguments are the most efficient tool for character revelation in the craft toolkit. Five pages of character backstory will tell the audience less about who someone is than one well-constructed argument. Put two people in genuine conflict over something that actually matters to both of them, and truth will surface whether they want it to or not.' },
      { type: 'h3', text: 'What makes arguments fail on the page' },
      { type: 'list', items: ['Both characters make equally valid points and the argument ends in a draw — no one learned anything and nothing changed.', 'The argument is about the surface subject only. They fight about the dishes and it\'s really just about the dishes.', 'One character says what they mean immediately. Real people almost never do — they circle the actual grievance for minutes before landing on it.', 'The argument ends cleanly. One person wins. The other concedes. Real arguments don\'t close — they pause, they go underground, they resurface.', 'The characters are too articulate. People under emotional pressure lose access to their vocabulary. They repeat themselves. They reach for words they can\'t find. They say the wrong word and mean the right one.'] },
      { type: 'h3', text: 'Silence as argument' },
      { type: 'p', text: 'Some of the most devastating arguments in film and literature contain almost no dialogue. Two people in a car not speaking. The specific quality of a silence after something has been said. The refusal to look up. The look up that lasts half a second too long before looking away. Silence in an argument is not the absence of argument — it is argument at its most intense. Learn to write it.' },
      { type: 'tip', text: 'Before writing an argument scene, answer three questions: What does each character stand to lose if they lose this argument — not the surface thing, but the real thing? What is the one true thing neither of them wants to say? And what happens to them after — not in the scene, but in the hours or days that follow? Write toward those answers, not toward resolution.' },
    ],
  },
  'plant-payoff': {
    title: 'Planting and payoff: the architecture of surprise',
    category: 'Theme',
    time: '6 min',
    body: [
      { type: 'p', text: 'A payoff without a plant feels like a cheat. The gun appears in the third act from nowhere and solves the problem and the audience feels vaguely dissatisfied without being able to explain why. A plant without a payoff is dead weight — a detail that the story called attention to and then never used, which trains the audience to stop paying attention. The art is in making the plant invisible and the payoff feel, in retrospect, completely inevitable.' },
      { type: 'rule', text: 'The audience should feel, when the payoff arrives, that they should have seen it coming — and be glad they did not. That combination of surprise and inevitability is the specific pleasure of a well-executed plant.' },
      { type: 'h3', text: 'Chekhov\'s gun — and what he actually meant' },
      { type: 'p', text: 'Anton Chekhov\'s instruction was specific: if you show a gun in the first act, it must go off by the third. The reverse is equally true — if it goes off in the third, it must have been shown in the first. The principle extends to everything in a story that requires dramatic justification: skills, information, relationships, objects, character traits. Nothing should arrive at the moment of payoff without having been established at the moment of plant.' },
      { type: 'p', text: 'What Chekhov was really describing is audience trust. The audience makes an implicit contract with the story: I will pay attention to what you show me, and you will reward that attention. When a payoff arrives from something that was planted, the audience feels that contract honored. When it arrives from nowhere, they feel deceived — not by the plot twist, but by the contract being broken.' },
      { type: 'h3', text: 'What can be planted' },
      { type: 'list', items: ['Information — a fact, a history, a detail established early that becomes crucial when the stakes are highest.', 'Character capability — the skill shown in a low-stakes moment in Act 1 that is the only thing that works in Act 3.', 'A physical object — the weapon, the photograph, the letter. Objects are particularly powerful plants because they\'re concrete.', 'A relationship — the connection established in passing that, when it pays off, feels both surprising and completely logical.', 'A character flaw — the habit or limitation introduced early that causes the maximum damage at the worst possible moment.'] },
      { type: 'h3', text: 'The art of the disguised plant' },
      { type: 'p', text: 'The plant must be visible enough to be remembered but disguised enough not to announce itself as important. The best technique is to bury the plant inside a scene that appears to be about something else entirely. Show the character\'s mechanical skill in a comedy beat — make the audience laugh while cataloguing the capability. Show the detail in a scene about something more pressing, so the detail is noticed and set aside rather than marked.' },
      { type: 'p', text: 'In Raiders of the Lost Ark, Indiana Jones\'s fear of snakes is planted early in an exchange played for comedy. It pays off in the Well of Souls — but the audience has forgotten about the plant long enough that the payoff feels both surprising and earned. The comedy made the plant land softly. The drama made the payoff land hard. This is the mechanism.' },
      { type: 'h3', text: 'The retroactive inevitability test' },
      { type: 'p', text: 'After writing a payoff, go back to the plant. Ask: is it specific enough that an attentive reader would find it on a second read? Is it early enough in the story that it doesn\'t feel like setup? Is it disguised by sufficient other activity that it won\'t read as a planted plant? And — the hardest question — does it feel, in retrospect, like the only possible payoff? If there is another, equally plausible payoff that the plant could have supported, the connection between plant and payoff isn\'t specific enough. Tighten it.' },
      { type: 'tip', text: 'Make a list of your story\'s five most important payoffs. For each, trace backwards until you find the scene where it\'s established. If you can\'t find the scene — it doesn\'t exist yet. If the scene is closer to the payoff than to the beginning of the story — it\'s not early enough. If the plant is made obvious — make it quieter. The plant should feel like furniture. The payoff should feel like the room was designed around it.' },
    ],
  },
  'motifs': {
    title: 'How motifs work — and why they fail',
    category: 'Theme',
    time: '6 min',
    body: [
      { type: 'p', text: 'A motif is a recurring element — image, object, sound, phrase, color, gesture — that accumulates meaning as a story progresses. The first time it appears, it is just a detail. The second time, the audience notices. The third time, if it has been placed correctly, it carries the full weight of everything that has happened between its appearances. It is not decoration. It is the story\'s emotional architecture made visible.' },
      { type: 'rule', text: 'A motif is not a symbol. A symbol stands for something outside itself — the green light in Gatsby stands for the American Dream. A motif resonates with the theme through repetition — it means more each time it appears because of what the story has accumulated around it.' },
      { type: 'h3', text: 'Three examples that work' },
      { type: 'p', text: 'In The Godfather, oranges appear near every major death and moment of danger in the film. Don Corleone is buying oranges when he is shot. There are oranges on the table at the meeting where Sonny\'s ambush is arranged. Oranges roll across the floor when Vito dies. Coppola claimed it was unintentional, at least partly. That does not matter. The effect is real: the orange became a motif through repetition, and once the audience\'s unconscious has catalogued it, each appearance carries dread.' },
      { type: 'p', text: 'In Schindler\'s List, the girl in the red coat appears twice. First alive in the crowd — the only color in the film\'s black-and-white palette — and then later on a cart of bodies, still that red coat, clearly dead. She appears for a total of perhaps ninety seconds. She is one of the most devastating images in the history of cinema. The motif works because the first appearance makes her specific — she is not \'the Jews,\' she is this child, in this coat — and the second appearance makes her loss specific. The coat is the same. She is gone. That is the whole Holocaust in one image.' },
      { type: 'p', text: 'In No Country for Old Men, Anton Chigurh\'s coin appears in nearly every scene where he has power over someone\'s life. It is both a literal object and a motif for fate, randomness, and the absurdity of the idea that luck can protect you from what\'s coming. The coin\'s last appearance — the call to Carla Jean — is the film\'s most disturbing scene not despite the coin but because of it. By that point, the coin has been loaded by every prior appearance.' },
      { type: 'h3', text: 'Why motifs fail' },
      { type: 'p', text: 'Motifs fail in three ways. Overuse: the image appears so frequently that it stops resonating and becomes a tic. Forced meaning: the writer chooses an image that has no organic connection to the story\'s emotional logic and deploys it anyway, hoping the repetition will manufacture meaning. Announcement: the writer signals the motif\'s importance too explicitly, so the audience understands it as a Symbol rather than experiencing it as a recurring image. The moment a motif becomes legible as intentional, it loses most of its power.' },
      { type: 'h3', text: 'Finding your motif vs. inventing it' },
      { type: 'p', text: 'The most reliable motifs are not invented — they are discovered. Write the story, and then look at what keeps returning without your having planned it. The specific object a character keeps touching. The particular phrase that appears in multiple scenes. The image that recurs in description. These organic returns are your instincts telling you something about what the story is about. Your job is to recognize them and then place them with intention — to go back to the earlier appearances and calibrate them, and to plant the final appearance at the exact moment it will carry the most weight.' },
      { type: 'tip', text: 'Read through your draft and mark every time a specific image, object, phrase, or gesture appears more than once. You are looking for what your unconscious returned to. Pick the most resonant of these recurring elements. Now ask: is it present at the midpoint? At the All Is Lost? At the resolution? If not — plant it at those moments deliberately. Three well-placed appearances of a motif will do more work than ten scattered ones.' },
    ],
  },
  'secondary-characters': {
    title: "Secondary characters who earn their place",
    category: "Character",
    time: "4 min",
    body: [
      { type: 'p', text: "Secondary characters are not furniture. They are not there to deliver information, provide comic relief, or move the plot. Every person in your story wants something — even if it is only a glass of water. The moment a character wants nothing, they stop being a person and become a function." },
      { type: 'rule', text: "Every secondary character must have a life that exists when the protagonist is not in the room." },
      { type: 'h3', text: "What secondary characters do" },
      { type: 'p', text: "The best secondary characters serve multiple functions simultaneously: they advance the plot, they reveal the protagonist by contrast or reflection, and they carry their own internal logic that is independent of the hero's story." },
      { type: 'p', text: "The B Story character — the love interest, the best friend, the unexpected ally — often carries the theme. They say the thing the protagonist cannot yet hear. They model the change the protagonist needs to make. They are not there to be saved or to save — they are there to complicate the hero's world in ways that matter." },
      { type: 'h3', text: "The test for secondary characters" },
      { type: 'list', items: ["Can this character want something the protagonist cannot simply give them?", "Does this character have an opinion about the story's central conflict — not just a role in it?", "Would this character behave differently if the protagonist were not present?", "Is there a version of this story where this character is the protagonist?"] },
      { type: 'h3', text: "Cutting secondary characters" },
      { type: 'p', text: "If a secondary character only exists to give the protagonist information, consider whether that information can be discovered another way. Secondary characters who are only exposition delivery systems flatten the story. Combine them, cut them, or give them a want that creates friction." },
      { type: 'tip', text: "Pick your most prominent secondary character. Write one paragraph from their point of view — what do they want from this story? What do they think of the protagonist? If you cannot write that paragraph, the character is not yet a person." },
    ],
  },
  'the-lie': {
    title: "The lie your character believes",
    category: "Character",
    time: "4 min",
    body: [
      { type: 'p', text: "Every great protagonist believes something false about themselves or the world. Not a misunderstanding that gets cleared up in the first act — a deep, organizing lie they have built their life around. This lie is the engine of their arc. The story is, in one sense, the process of dismantling it." },
      { type: 'rule', text: "The lie is not stupidity. It is a coping mechanism. It made perfect sense when the character formed it — usually as a response to pain." },
      { type: 'p', text: "In The Shawshank Redemption, Red believes that hope is a dangerous thing — that it will get you killed inside. His lie protects him from disappointment. In Good Will Hunting, Will believes he is not worth the effort of being saved. His lie protects him from the vulnerability of being loved. In both cases, the lie is understandable. You can see exactly how a person would arrive at it." },
      { type: 'h3', text: "The lie and the ghost" },
      { type: 'p', text: "The lie almost always grows out of the ghost. Something happened — a failure, a loss, a wound — and the character drew a conclusion about how the world works or what they deserve. That conclusion calcified into the lie. The ghost created it; the arc dismantles it." },
      { type: 'p', text: "This is why the lie must feel earned. If it appears out of nowhere, it feels like a character flaw assigned from the outside. If it grows naturally from a specific past event, it feels like psychology — which is to say, it feels true." },
      { type: 'h3', text: "How the lie shows up in scenes" },
      { type: 'list', items: ["It shapes every major decision the protagonist makes — they choose in ways that protect the lie.", "It creates their flaw — the behavior pattern that keeps hurting them and the people around them.", "Other characters can see the lie even when the protagonist cannot. This creates dramatic irony and tension.", "The antagonist often exploits it — or embodies the opposite lie, making them a perfect foil."] },
      { type: 'h3', text: "The moment of truth" },
      { type: 'p', text: "The climax of most character arcs is the moment the protagonist is forced to either abandon the lie or double down on it. In a positive arc, they let it go — often at great cost. In a negative arc, they choose the lie over the truth, and we watch them destroy themselves or others. Either way, the story is about the lie." },
      { type: 'tip', text: "Write your protagonist's lie in one sentence beginning with 'I believe...' Then ask: what would they have to lose to stop believing it? That loss is your climax." },
    ],
  },
  'character-arc': {
    title: "How a character arc actually works",
    category: "Character",
    time: "5 min",
    body: [
      { type: 'p', text: "A character arc is not a protagonist getting better at something over the course of a story. It is not personal growth in the self-help sense. A character arc is a transformation in the character's fundamental understanding of themselves or the world — often forced on them by events they did not choose and resisted until the last possible moment." },
      { type: 'rule', text: "Transformation must be earned. A character who changes because the plot demands it has not completed an arc — they have been moved like a chess piece." },
      { type: 'h3', text: "The three-part structure of an arc" },
      { type: 'p', text: "Most character arcs follow a pattern: the character begins with a flaw rooted in a lie. The story places them in circumstances that challenge that lie. By the end, they have been changed by those circumstances — either they have grown past the lie (positive arc) or been destroyed by their refusal to (negative arc) or remained fundamentally unchanged despite everything (flat arc, where the character's stability is the point)." },
      { type: 'p', text: "The key word is 'challenged.' The story must not simply expose the character to different experiences. It must put pressure on the specific lie they believe, at the specific wound that created it, until something breaks open." },
      { type: 'h3', text: "Positive vs. negative arcs" },
      { type: 'p', text: "Positive arcs — Walter White before he became Heisenberg, Atticus Finch, Elizabeth Bennet — involve a character who learns something true about themselves and changes for the better. Negative arcs — Macbeth, Michael Corleone, Amy Dunne — involve a character who has every opportunity to change and refuses, descending instead. Both are valid. Both require the same internal architecture." },
      { type: 'p', text: "The flat arc is less commonly discussed but equally powerful. Think of characters like Atticus Finch or Sherlock Holmes — characters whose internal certainty is precisely what allows them to challenge and change the world around them. The flat arc is about a character who does not change because they are already right — and proving it costs them everything." },
      { type: 'h3', text: "The mistake most writers make" },
      { type: 'list', items: ["The change happens too easily — the protagonist learns the lesson at the midpoint and coasts to the end.", "The change is told rather than dramatized — someone explains to the protagonist what they have learned instead of us watching them earn it.", "The arc is imposed from outside — the character changes because someone tells them to, not because the story made it impossible not to.", "The change is the same at Act 1 break, midpoint, and climax — the arc is not building, just repeating."] },
      { type: 'tip', text: "Map your protagonist's internal state at five points: opening scene, Act 1 break, midpoint, All Is Lost, final scene. Write one sentence per moment. If those five sentences do not show a clear progression, your arc needs work." },
    ],
  },
  'flaw-vs-wound': {
    title: "Flaw vs. wound: why the difference matters",
    category: "Character",
    time: "4 min",
    body: [
      { type: 'p', text: "Most writing advice tells you to give your protagonist a flaw. This is correct — a perfect protagonist is unreadable. But the advice usually stops there, and that's where the problem starts. A flaw without a wound is just a bad habit. It creates a character we find annoying rather than one we recognize." },
      { type: 'rule', text: "A flaw is behavior. A wound is the reason for the behavior. Write the flaw. Know the wound. The wound is what makes the audience forgive the flaw." },
      { type: 'h3', text: "What a wound looks like" },
      { type: 'p', text: "A wound is a specific past experience — not a personality type, not a general disposition — that left a mark. Will Hunting is arrogant and self-sabotaging (flaw). He was abused as a child and learned that being close to people means getting hurt (wound). Tony Soprano is controlling, paranoid, and violent (flaws). He was raised by a mother who was cold and manipulative and a father who showed love through power and fear (wound)." },
      { type: 'p', text: "In both cases, the flaw makes complete sense once you understand the wound. You can see the causality. That causality is what separates a character with a flaw from a character with a psychology." },
      { type: 'h3', text: "The flaw must create consequences" },
      { type: 'p', text: "A flaw that does not cost the character anything is not a flaw — it is a quirk. The flaw must actively damage the character's relationships, plans, or shot at what they want. The story should repeatedly put the protagonist in situations where their flaw makes things worse. The arc is the process of the flaw becoming untenable." },
      { type: 'h3', text: "Flaws audiences can still root through" },
      { type: 'list', items: ["Flaws rooted in recognizable fear are more forgivable than flaws rooted in cruelty.", "Characters who are aware of their flaw and still cannot stop are more sympathetic than characters who are oblivious.", "A flaw that hurts the character more than others creates sympathy. A flaw that hurts others more than the character creates dislike.", "The flaw should be the cost of survival — something that once protected the character and now limits them."] },
      { type: 'tip', text: "Write your protagonist's flaw as a behavior: 'They always ____.' Then write the wound as a specific past event: 'This started when ____.' If the second sentence feels like a real human experience rather than a writing exercise, you have found the wound." },
    ],
  },
  'character-voice': {
    title: "Why every character needs a different voice",
    category: "Character",
    time: "4 min",
    body: [
      { type: 'p', text: "Cover the names in your screenplay or manuscript. Read a page of dialogue. Can you tell who is speaking from the words alone? If not, you have a voice problem — and it is one of the most common weaknesses in developing writers' work." },
      { type: 'rule', text: "Every character should sound like they grew up in a different house, with different fears, and a different relationship to language itself." },
      { type: 'h3', text: "Voice is not just vocabulary" },
      { type: 'p', text: "Beginning writers think character voice is about word choice — give the teenager slang, give the professor jargon. That is the surface level. Real voice is about how a character thinks, what they notice, what they reach for when they are under pressure. It is about what they say when they do not know what to say." },
      { type: 'p', text: "A character who deflects with humor when challenged has a different voice than one who goes quiet. A character who speaks in declarative sentences has a different voice than one who qualifies everything. A character who uses metaphors from sports has a different inner world than one who reaches for music or cooking or warfare. These differences are not decoration. They are psychology." },
      { type: 'h3', text: "What shapes a character's voice" },
      { type: 'list', items: ["Education — not just how much, but what kind and in what context.", "Class background — which shapes vocabulary, register, and what is considered polite or rude.", "Relationship to power — whether a character is used to being listened to changes how they speak.", "What they are afraid of — people avoid language that touches their wounds.", "How much they need to be understood — some characters speak to connect; others speak to deflect."] },
      { type: 'h3', text: "The practical test" },
      { type: 'p', text: "Write the same piece of information — say, 'I think we should leave now' — as five different characters in your story would say it. Not paraphrase it. The way each character says that thing should tell us something about who they are. If all five versions feel similar, your characters are sharing a voice — which usually means they are sharing yours." },
      { type: 'tip', text: "Pick your two most similar characters. Write a scene where they disagree about something small — where to eat, whether to trust someone. Their voices should diverge under pressure. If they start to sound the same, you have found a place where one of them needs more specific development." },
    ],
  },
  'relationship-pairs': {
    title: "How two characters define each other",
    category: "Character",
    time: "4 min",
    body: [
      { type: 'p', text: "We understand characters in relation to other characters. No one exists in isolation. A protagonist reads differently opposite a loyal friend than opposite a rival, a mentor, or someone they have wronged. The character is the same on paper — but the relationship changes who we see." },
      { type: 'rule', text: "A relationship is not a backdrop. It is a pressure system. The right pairing reveals things about a character that could not be revealed any other way." },
      { type: 'h3', text: "The four classic pairings" },
      { type: 'p', text: "The mentor and student (Obi-Wan and Luke, Hannibal and Clarice) reveal the protagonist's potential — and their limits. The rival (Salieri and Mozart, Jordan Belfort and everyone) reveals what the protagonist most wants and fears about themselves. The ally (Samwise and Frodo, Watson and Holmes) reveals the protagonist's values under stress — how they treat the people who love them most. The foil — a character who shares the protagonist's situation but makes opposite choices — reveals the road not taken and gives the protagonist's choices moral weight." },
      { type: 'h3', text: "What relationships must do" },
      { type: 'p', text: "A relationship in a story needs to change. Two characters who end a story in exactly the same relationship they began it — with no shift in power, trust, intimacy, or understanding — have been static. The relationship does not have to end in the same valence it began. Love can become grief. Rivalry can become respect. Trust can become betrayal. The change is the story." },
      { type: 'h3', text: "The gap between what is said and what is felt" },
      { type: 'p', text: "The most powerful relationships in fiction are defined by what the characters cannot say to each other. The thing that goes unspoken between them — the apology, the admission, the question — is where the subtext lives. When that thing finally gets said (or cannot be said and the relationship ends), that is the emotional climax of the relationship arc." },
      { type: 'list', items: ["What do these two characters want from each other that they will not ask for directly?", "What does each one know about the other that the other does not know they know?", "What would it take for this relationship to break? Have you tested it?", "What would it take for this relationship to be fully repaired — and is that possible by the story's end?"] },
      { type: 'tip', text: "Take your two most important characters. Write the one thing each of them has never said to the other — and needs to. Now ask: does your story create the conditions where that thing might finally be said? If not, consider building toward that moment." },
    ],
  },

  'enter-late-leave-early': {
    title: "Enter late, leave early",
    category: "Scene Craft",
    time: "3 min",
    body: [
      { type: 'p', text: "Most scenes have a beginning they do not need and an ending that goes on too long. The real scene — the part that matters — is somewhere in the middle, waiting for you to cut away everything around it." },
      { type: 'rule', text: "Enter the scene at the last possible moment. Leave at the first possible moment." },
      { type: 'p', text: "Think about how a conversation actually starts. There is small talk. There is throat-clearing. There is two people finding their footing before they say the thing they actually came to say. You do not need any of that. Start at the thing." },
      { type: 'h3', text: "What 'enter late' looks like" },
      { type: 'p', text: "Two characters need to have a confrontation about a betrayal. Most beginning writers open the scene with one character arriving, knocking on the door, small talk, eventually getting to the point. Enter late means you open on the confrontation already underway — 'How long have you known?' — and let the audience catch up." },
      { type: 'p', text: "The audience is smarter than you think. They do not need the setup. They will assemble context from what is said in the heat of the scene. What feels like missing information is often just tension." },
      { type: 'h3', text: "What 'leave early' looks like" },
      { type: 'p', text: "Once the dramatic moment has landed — the revelation, the decision, the break — end the scene. Do not let characters process it on screen. Do not resolve the emotional tension before the cut. Leave on the wound while it is still fresh, and let the next scene carry the aftermath." },
      { type: 'p', text: "The scene ending is a promise about what comes next. If you let characters wrap things up neatly before the cut, you have released all the tension you built. Cut while the air is still charged." },
      { type: 'h3', text: "The exercise" },
      { type: 'list', items: [
        "Take a scene you have already written.",
        "Find the first line where something real is at stake.",
        "Delete everything before it.",
        "Find the last line where something real happens.",
        "Delete everything after it.",
        "Read what remains."
      ]},
      { type: 'p', text: "What you will find, most of the time, is a tighter, more alive scene — and nothing important has been lost." },
      { type: 'tip', text: "Go through your script and mark the first line in each scene where genuine conflict or meaningful information appears. If it is not the first line — consider whether the scene needs everything before it." },
    ],
  },
    body_academic: [
      { type: 'p', text: "The principle of in medias res — beginning in the middle of action — has governed dramatic construction since Aristotle's Poetics. Its application at the scene level is frequently neglected in favor of expository scene-setting that serves the writer's comfort rather than the narrative's momentum." },
      { type: 'rule', text: "Scenic economy demands that every unit of dramatic action begin at the latest possible moment of relevance and conclude at the earliest moment of dramatic sufficiency." },
      { type: 'p', text: "Screenwriting theorist Linda Seger describes this as eliminating transitional material — the social conventions that precede conflict in naturalistic discourse but that carry zero dramatic charge. The audience's narrative competence allows them to reconstruct context from in medias action; expository preamble underestimates that competence." },
      { type: 'h3', text: "Late entry: structural implications" },
      { type: 'p', text: "Late scene entry is not merely an editing technique — it is an epistemological choice. To open a confrontation scene on 'How long have you known?' is to withhold the same information from the audience that one character withholds from another, creating immediate dramatic irony and forcing active inference. The audience becomes a participant in the scene's logic rather than a passive recipient of its exposition." },
      { type: 'h3', text: "Early exit: the unresolved ending" },
      { type: 'p', text: "Early scene exit operates on what David Mamet calls uninflected action — ending before the emotional aftermath, before characters have processed the event they just experienced. This creates what narratologists call an open situation: a gap between scene-end and scene-meaning that the audience must fill. That active participation creates investment." },
      { type: 'p', text: "The common failure — allowing characters to process on-screen — confuses dramatic event with dramatic consequence. The event belongs in scene; the consequence, handled elliptically, belongs in the white space between scenes and in the next scene's opening emotional condition." },
      { type: 'tip', text: "Audit each scene: identify the first beat of genuine dramatic weight — conflict, revelation, decision. Everything preceding it is a candidate for removal. Then identify the last beat of irreversible change. Everything following it dilutes forward momentum." },
    ],

  'scene-turn': {
    title: "The scene turn",
    category: "Scene Craft",
    time: "4 min",
    body: [
      { type: 'p', text: "A scene that ends the same way it started is not a scene. It is a photograph. Something must change — in power, in knowledge, in relationship, in the audience's understanding — before the last line." },
      { type: 'rule', text: "Every scene needs a turn. Not a conclusion. A turn." },
      { type: 'p', text: "A turn is the moment a scene shifts direction. The protagonist comes in wanting one thing and leaves with something different — either they got it and that turns out to be complicated, or they did not get it and something else happened instead, or they got something they did not ask for." },
      { type: 'h3', text: "The turn is not the resolution" },
      { type: 'p', text: "Beginning writers often confuse the scene turn with resolution. Resolution settles things. A turn unsettles them. Resolution lowers the stakes. A turn — even a positive one — raises them." },
      { type: 'p', text: "In Chinatown, almost every scene ends with Jake Gittes knowing less than he thought he knew. He comes into scenes with information and leaves with questions. That is a consistent scene turn: the protagonist's certainty is undermined. It creates relentless forward momentum — because the audience needs to know what is actually true." },
      { type: 'h3', text: "Three types of scene turn" },
      { type: 'list', items: [
        "Reversal: what the protagonist expected to happen is reversed. They thought they were safe — they are not. They thought they had lost — they have not.",
        "Revelation: new information changes the meaning of everything that came before it. The audience, or the character, or both, now understand something they did not.",
        "Decision: the character is forced to choose, and the choice has immediate consequences. The turn is in the choosing — not in what happens next.",
      ]},
      { type: 'h3', text: "The value shift" },
      { type: 'p', text: "Story consultant Robert McKee talks about the 'value shift' in a scene — the movement from one emotional or situational pole to its opposite, or somewhere toward its opposite. A scene begins with hope and ends with doubt. Or begins in safety and ends in danger. Map the value at the start of your scene and the value at the end. If they are the same, the scene has not turned." },
      { type: 'tip', text: "For every scene in your script, write two words: the emotional value at the start, and the emotional value at the end. (Safe / Threatened. Confident / Shaken. Apart / Connected.) If the words are the same — or close — the scene may not be earning its place." },
    ],
    body_academic: [
      { type: 'p', text: "Robert McKee's concept of the 'value charge' provides the most rigorous analytical framework for scene construction. Every scene must move along a spectrum of charged values — from positive to negative, or negative to positive — representing a substantive shift in the human experience being dramatized." },
      { type: 'rule', text: "A scene that begins and ends at the same value charge has not turned — it has tread water. The turn is not optional; it is the definition of a functioning dramatic scene." },
      { type: 'p', text: "This distinguishes dramatically active scenes from what screenwriter William Goldman calls 'bus scenes' — transitory scenes that exist to move characters from one location to another without advancing the story's value states. Goldman's axiom: if a scene can be summarized as 'character goes from A to B,' it functions as a bus scene and should be cut or reconceived as drama." },
      { type: 'h3', text: "Aristotle's peripeteia at the scene level" },
      { type: 'p', text: "Aristotle identified peripeteia — reversal of fortune — as one of the two most powerful elements of plot (the other being anagnorisis, or recognition). At the scene level, these translate into three distinct turn types: reversal (the protagonist's situation inverts), revelation (new information recontextualizes prior events), and decision (a choice forecloses other possibilities). All three embody the irreversibility that defines dramatic action as distinct from mere event." },
      { type: 'h3', text: "Scene turns and cumulative structure" },
      { type: 'p', text: "Scene turns do not operate in isolation — they participate in a cumulative value arc across the narrative. Each scene turn advances or retreats along the story's central value axis, and the pattern of these advances and retreats constitutes what McKee calls the 'story design.' A story whose scenes all turn in the same direction becomes monotonous; one whose turns are strategically varied generates the rhythm of engagement and relief that sustains feature-length dramatic investment." },
      { type: 'tip', text: "Apply McKee's value charge analysis: write the dominant value at scene open (hope, safety, connection, certainty) and at scene close. Map these across your entire script. The resulting value arc is your story's actual emotional argument — and reveals where your structure is working and where it is marking time." },
    ],
  },

  'tension-without-action': {
    title: "Writing tension without action",
    category: "Scene Craft",
    time: "4 min",
    body: [
      { type: 'p', text: "Beginning writers often mistake movement for tension. Chase scenes, fights, explosions — these feel tense because something is happening. But the most suffocating tension in cinema is almost always still. Two people at a dinner table. A character walking down a hallway and not finding what they expected. Silence that goes on a beat too long." },
      { type: 'rule', text: "Tension is not what is happening. It is the gap between what could happen and what the audience is afraid will." },
      { type: 'h3', text: "The three sources of tension" },
      { type: 'list', items: [
        "Information asymmetry: the audience knows something a character does not — or a character knows something the audience does not yet understand. Either gap creates unbearable suspense.",
        "Unspoken stakes: two characters are having a conversation that appears ordinary, but we know — or sense — that something important is on the line. The stakes are submerged. That pressure is tension.",
        "Deferred inevitability: we know something is coming. The tension is in the waiting. Hitchcock's bomb under the table. The tension is not the explosion — it is the six minutes before it.",
      ]},
      { type: 'h3', text: "What Hitchcock understood" },
      { type: 'p', text: "Hitchcock made the distinction between surprise and suspense. Surprise is: two characters talk at a table, a bomb goes off, the audience is shocked — fifteen seconds of emotion. Suspense is: two characters talk at a table, but we have seen the bomb under it — and they have not — and for six minutes we watch them talk about baseball, unable to do anything." },
      { type: 'p', text: "Suspense requires the audience to have more information than the character, or to understand the implications of information the character does not yet grasp. That asymmetry is the engine of tension." },
      { type: 'h3', text: "Tension in dialogue" },
      { type: 'p', text: "Two people having a conversation where both want different things, and both know it, and neither will say it directly — that is tension. The subtext is doing the work. What is not being said is louder than what is. The scene is about one thing on the surface and something else entirely underneath. That gap is where the tension lives." },
      { type: 'tip', text: "Find a scene in your script that feels flat. Ask: what does the audience know that at least one character does not? If the answer is nothing, you may be missing the source of tension. Consider what information, if given to the audience early — in a previous scene — would make this scene unbearable to watch." },
    ],
  },
    body_academic: [
      { type: 'p', text: "Alfred Hitchcock's famous distinction between surprise and suspense constitutes perhaps the most cited formulation in dramatic theory. Surprise — the bomb detonating without warning — generates a maximum of fifteen seconds of shock. Suspense — the audience's knowledge of the bomb's presence throughout an ordinary conversation — generates minutes of sustained dread. The distinction maps onto a fundamental asymmetry of information between audience and character." },
      { type: 'rule', text: "Dramatic tension is a function of information asymmetry, not physical action. The gap between what the audience knows and what characters know is the structural source of suspense." },
      { type: 'p', text: "This insight — elaborated by Hitchcock but traceable to Aristotle's concept of dramatic irony — has profound implications for scene construction. A scene depicting physical conflict may be narratively inert if the audience holds no information advantage. Conversely, two characters discussing weather over coffee can generate unbearable tension if the audience is aware of stakes the characters have not yet recognized." },
      { type: 'h3', text: "The three vectors of scenic tension" },
      { type: 'p', text: "Theorist Yves Lavandier identifies three structural sources of dramatic tension: suspense (anxiety about future events), surprise (reaction to unexpected events), and curiosity (retrospective puzzlement about past events). Effective tension scenes typically engage at least two of these simultaneously — the audience is curious about what has already happened, anxious about what is about to happen, and the character is unaware of either." },
      { type: 'h3', text: "Subtext as tension mechanism" },
      { type: 'p', text: "Harold Pinter's dramatic work provides the canonical case study in subtext-as-tension. The surface transaction of a Pinter scene — two people discussing something mundane — is systematically undermined by what remains unspoken: territorial claims, historical grievances, power dynamics. The tension derives not from what is said but from the audience's recognition of the gap between the ostensible subject and the actual subject." },
      { type: 'tip', text: "For each scene you write, identify what the audience knows that at least one character does not. This information asymmetry is your primary tension instrument. If no such asymmetry exists, consider what prior scene could establish one — placing dramatic irony's bomb under the table before the scene begins." },
    ],

  'location-as-character': {
    title: "The location is never just a location",
    category: "Scene Craft",
    time: "3 min",
    body: [
      { type: 'p', text: "Where a scene happens is not a backdrop. It is an argument. The best locations externalize something that is happening internally — in the character, in the relationship, in the story's emotional temperature." },
      { type: 'rule', text: "Every location choice is a statement about the scene before anyone speaks." },
      { type: 'p', text: "Think about what it means to set a confrontation scene in a hospital waiting room versus a boxing ring. The content of the confrontation might be identical. But the hospital implies fragility, impermanence, the presence of death. The boxing ring implies combat as spectacle, performance, a fight that has rules. Location is the frame through which we read everything inside it." },
      { type: 'h3', text: "What location can do" },
      { type: 'list', items: [
        "It can externalize interior state. A character falling apart lives in a cluttered, broken-down apartment. A character who is repressing everything lives in a space that is controlled to the point of emptiness.",
        "It can create contrast. A tender conversation in a violent environment. A brutal confrontation in a beautiful one. The mismatch between setting and content is itself information.",
        "It can restrict action. A scene in a car, a small room, or a crowded public space forces characters into proximity they would otherwise avoid. Constraint creates pressure.",
        "It can carry thematic weight. A story about gentrification set in a neighborhood mid-demolition. A story about family legacy set in the family home. The location becomes a symbol without the script ever announcing it.",
      ]},
      { type: 'h3', text: "The practical test" },
      { type: 'p', text: "For every scene you write, ask: why here? Could this scene happen anywhere? If yes — if the location is interchangeable — then you are missing an opportunity. A scene that could happen anywhere usually feels like it happens nowhere." },
      { type: 'p', text: "The best locations are specific. Not 'a bar' — this bar, with these details, this light, this noise level, this clientele. Specificity is what makes a location feel real. And a location that feels real becomes a presence in the scene — a character that does not speak but shapes everything." },
      { type: 'tip', text: "Take a scene you have written and ask: what does this location say about this scene before anyone talks? If the answer is 'nothing,' try rewriting the scene in three different locations and see how each one changes what the scene is about." },
    ],
  },
    body_academic: [
      { type: 'p', text: "The semiotics of filmic space — the study of how location generates meaning — has produced extensive theoretical literature, from the mise-en-scène analyses of André Bazin to the spatial theory of Edward Soja. For the working screenwriter, the operative principle is simpler: every location choice is an argument made before a character speaks." },
      { type: 'rule', text: "Location in dramatic writing functions semiotically: it signifies beyond its denotative content, embedding thematic, psychological, and relational meaning into the scene's visual grammar before dialogue begins." },
      { type: 'p', text: "The Marxist film theorist Raymond Durgnat argued that Hollywood's preference for particular locations — the family home, the office, the diner — reflects ideological assumptions about where significant social transactions occur. The screenwriter who chooses a location unreflectively reproduces those assumptions; the screenwriter who chooses deliberately can deploy them, subvert them, or charge them with meaning the genre did not anticipate." },
      { type: 'h3', text: "Spatial constraint as dramatic pressure" },
      { type: 'p', text: "The confined location — the car, the elevator, the small room — has become a genre convention precisely because it operationalizes dramatic pressure architecturally. When characters cannot exit, subtext must be navigated rather than avoided. The location removes the escape hatch that social convention provides. What the mise-en-scène makes impossible, the characters must endure." },
      { type: 'h3', text: "Location as thematic argument" },
      { type: 'p', text: "In Carol Reed's The Third Man, the bombed-out ruins of post-war Vienna are not background — they are the film's thesis about moral collapse and historical consequence. In Barry Jenkins' Moonlight, the specific geography of Liberty City — its particular quality of light, its architecture of poverty — carries the film's argument about visibility and invisibility in ways dialogue cannot approximate." },
      { type: 'tip', text: "For each scene, write a single sentence answering: what does this location argue about the scene before anyone speaks? If you cannot write that sentence, the location is functioning as neutral background rather than as dramatic argument. Consider what location would make the scene's underlying conflict or theme spatially legible." },
    ],

  'scene-endings': {
    title: "How to end a scene so the next one cannot wait",
    category: "Scene Craft",
    time: "4 min",
    body: [
      { type: 'p', text: "Every scene ending is a bet. You are betting that the audience will stay — that what you have left them with is interesting enough, unresolved enough, urgent enough to keep them watching. Most scenes lose this bet by resolving too much." },
      { type: 'rule', text: "End scenes on energy, not on closure." },
      { type: 'h3', text: "The two traps" },
      { type: 'p', text: "The first trap is the scene that ends when it is done. The characters have said what needed to be said, the situation is settled, there is a natural stopping point — and that is where the scene ends. This is the right instinct for real conversations and the wrong instinct for scenes. Endings that feel complete release tension. You want endings that hold tension forward." },
      { type: 'p', text: "The second trap is the scene that ends with a character's reaction rather than an action. A character hears something and looks worried. The scene ends on their face. This is not inherently wrong — but it is passive. An ending on an action, a decision, a line of dialogue that opens a new question — these are almost always more alive." },
      { type: 'h3', text: "What good scene endings do" },
      { type: 'list', items: [
        "They leave something unresolved — not vague, but specifically unresolved. The audience knows what question is open. They want the answer.",
        "They create a consequence that must be dealt with in the next scene. The ending is a setup for what follows.",
        "They change something. Not gradually — decisively. A door closes. A decision is made. A line is said that cannot be unsaid.",
        "They end on a specific image, action, or line that lingers. Not a summary. Not a conclusion. Something that the brain keeps turning over.",
      ]},
      { type: 'h3', text: "Scene-to-scene momentum" },
      { type: 'p', text: "The best scripts have a scene-to-scene logic that feels inevitable. Each scene creates a condition — a new problem, a new question, a shift in power — that the next scene must address. This is not the same as plot mechanics. It is about emotional urgency. The audience follows because they need to know how the next scene responds to the conditions the last scene created." },
      { type: 'p', text: "A useful test: after every scene, ask 'and then?' If the answer feels arbitrary — if the next scene could be almost anything — the scene has not ended with enough forward pressure. You want the ending of every scene to make the next scene feel necessary." },
      { type: 'tip', text: "Go through your last five scene endings. For each one, write: what question does this ending leave open? If you cannot name the open question in one sentence, the scene may be closing too much." },
    ],
  },
    body_academic: [
      { type: 'p', text: "The problem of scenic closure is one of the central technical challenges of dramatic writing. Closure — the satisfying resolution of a dramatic unit — is simultaneously necessary at the macro level (the story must end) and actively harmful at the micro level (each scene must resist completion to generate forward momentum). The scene ending, properly executed, is a paradox: it must feel complete as a unit while remaining open as a vector." },
      { type: 'rule', text: "The scene ending should constitute what narratologist Meir Sternberg calls a 'narrative gap' — a moment of productive incompletion that activates the audience's anticipatory engagement with what follows." },
      { type: 'p', text: "This concept is related to what Russian Formalists called 'retardation' — the deliberate delaying of resolution to sustain reader engagement. At the scene level, retardation operates through strategic incompletion: the scene ends before the expected resolution, forcing the audience to carry their anticipation forward. The next scene inherits that anticipation as a narrative debt." },
      { type: 'h3', text: "The hook and the gap" },
      { type: 'p', text: "David Bordwell's cognitive approach to narrative identifies two mechanisms of scene-to-scene engagement: the 'hook' (a new question or development that demands resolution) and the 'dangling cause' (an incomplete causal chain that must be followed through). Effective scene endings deploy at least one of these — typically the hook, since it is immediately perceptible — to ensure that the gap between scenes is experienced as urgency rather than interruption." },
      { type: 'h3', text: "Resolution as structural error" },
      { type: 'p', text: "The most common scene-ending failure is what might be called premature closure: the scene resolves its own tension before the cut, releasing the pressure it has built. This is a structural error because it treats the scene as a self-contained dramatic unit rather than as a node in a larger pressure system. Each scene should exit under load — its unresolved tensions transferred to the following scene as inherited obligation." },
      { type: 'tip', text: "Apply Sternberg's gap analysis to your scene endings: identify the open question each scene leaves at its close. This question should be specific and urgent — not 'what happens next?' (too vague) but 'will she find out before he tells her?' (specific, stakes-defined). If the scene closes without generating a specific open question, it is closing too completely." },
    ],
}

const lessonBooks = {
  'what-a-scene-does': [
    { title: 'Techniques of the Selling Writer', author: 'Dwight Swain', url: 'https://www.amazon.com/Techniques-Selling-Writer-Dwight-Swain/dp/0806111917', note: 'Origin of the scene-sequel model cited in this lesson' },
    { title: 'Making a Good Script Great', author: 'Linda Seger', url: 'https://www.amazon.com/Making-Good-Script-Great-Linda/dp/0935296417', note: 'Multi-function scene analysis' },
  ],
  'midpoint': [
    { title: 'Save the Cat', author: 'Blake Snyder', url: 'https://www.amazon.com/Save-Cat-Last-Screenwriting-Book/dp/1932907009', note: 'False victory vs. false defeat midpoint types' },
  ],
  'want-vs-need': [
    { title: 'Creating Character Arcs', author: 'K.M. Weiland', url: 'https://www.amazon.com/Creating-Character-Arcs-Masterful-Compelling/dp/0985780401', note: 'The clearest book-length treatment of this concept' },
    { title: 'Story', author: 'Robert McKee', url: 'https://www.amazon.com/Story-Substance-Structure-Principles-Screenwriting/dp/0060391685', note: 'McKee\'s conscious desire vs. unconscious need formulation' },
  ],
  'dialogue-subtext': [
    { title: 'Story', author: 'Robert McKee', url: 'https://www.amazon.com/Story-Substance-Structure-Principles-Screenwriting/dp/0060391685', note: 'McKee on the four functions of dialogue' },
  ],
  'theme': [
    { title: 'Story', author: 'Robert McKee', url: 'https://www.amazon.com/Story-Substance-Structure-Principles-Screenwriting/dp/0060391685', note: 'McKee\'s controlling idea formulation' },
    { title: 'The Anatomy of Story', author: 'John Truby', url: 'https://www.amazon.com/Anatomy-Story-Steps-Becoming-Master/dp/086547800X', note: 'Theme as structural constraint, not ornament' },
  ],
  'act-breaks': [
    { title: 'Screenplay', author: 'Syd Field', url: 'https://www.amazon.com/Screenplay-Foundations-Screenwriting-Syd-Field/dp/0385339038', note: 'Field\'s original plot point formulation' },
    { title: 'The Writer\'s Journey', author: 'Christopher Vogler', url: 'https://www.amazon.com/Writers-Journey-Mythic-Structure-Storytellers/dp/1615932283', note: 'The threshold crossing and volitional crossing distinction' },
    { title: 'Save the Cat', author: 'Blake Snyder', url: 'https://www.amazon.com/Save-Cat-Last-Screenwriting-Book/dp/1932907009', note: 'Break into Two and Break into Three beat placement' },
  ],
  'all-is-lost': [
    { title: 'Save the Cat', author: 'Blake Snyder', url: 'https://www.amazon.com/Save-Cat-Last-Screenwriting-Book/dp/1932907009', note: 'Snyder\'s whiff of death and the All Is Lost beat' },
  ],
  'ghost': [
    { title: 'Creating Character Arcs', author: 'K.M. Weiland', url: 'https://www.amazon.com/Creating-Character-Arcs-Masterful-Compelling/dp/0985780401', note: 'The wound and the ghost as arc engine' },
  ],
  'antagonist': [
    { title: 'Story', author: 'Robert McKee', url: 'https://www.amazon.com/Story-Substance-Structure-Principles-Screenwriting/dp/0060391685', note: 'McKee on the antagonist\'s principle' },
    { title: 'The Anatomy of Story', author: 'John Truby', url: 'https://www.amazon.com/Anatomy-Story-Steps-Becoming-Master/dp/086547800X', note: 'The opponent and the thematic counter-argument' },
  ],
  'subtext': [
    { title: 'Story', author: 'Robert McKee', url: 'https://www.amazon.com/Story-Substance-Structure-Principles-Screenwriting/dp/0060391685', note: 'McKee on text vs. subtext in scene construction' },
  ],
  'plant-payoff': [
    { title: 'Making a Good Script Great', author: 'Linda Seger', url: 'https://www.amazon.com/Making-Good-Script-Great-Linda/dp/0935296417', note: 'Setup and payoff as structural principle' },
  ],
}

function renderBody(body) {
  return body.map((block, i) => {
    if (block.type === 'p') return (
      <p key={i} style={{ fontSize: '16px', color: 'var(--text-dark)', lineHeight: '1.85', marginBottom: '22px', fontFamily: 'Source Sans 3, sans-serif' }}>{block.text}</p>
    )
    if (block.type === 'h3') return (
      <h3 key={i} style={{ fontSize: '19px', fontFamily: 'Playfair Display, serif', color: 'var(--green)', marginTop: '36px', marginBottom: '14px' }}>{block.text}</h3>
    )
    if (block.type === 'rule') return (
      <div key={i} style={{ margin: '28px 0', padding: '20px 26px', borderLeft: '4px solid var(--green)', background: 'var(--green-pale)', borderRadius: '0 10px 10px 0' }}>
        <p style={{ fontSize: '17px', fontFamily: 'Playfair Display, serif', color: 'var(--green)', lineHeight: '1.65', fontStyle: 'italic', margin: 0 }}>{block.text}</p>
      </div>
    )
    if (block.type === 'list') return (
      <ul key={i} style={{ margin: '0 0 22px 0', paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {block.items.map((item, j) => (
          <li key={j} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--green-light)', flexShrink: 0, marginTop: '10px' }} />
            <span style={{ fontSize: '15px', color: 'var(--text-dark)', lineHeight: '1.75', fontFamily: 'Source Sans 3, sans-serif' }}>{item}</span>
          </li>
        ))}
      </ul>
    )
    if (block.type === 'tip') return (
      <div key={i} className="tip-box" style={{ marginTop: '36px' }}>
        <strong>Try this:</strong> {block.text}
      </div>
    )
    return null
  })
}

export default function LessonPage() {
  const params = useParams()
  const slug = params?.slug
  const lesson = lessons[slug]
  const [tone, setTone] = useState('mentor')

  useEffect(() => {
    try {
      const saved = localStorage.getItem('eve-lesson-tone')
      if (saved === 'academic' || saved === 'mentor') setTone(saved)
    } catch {}
  }, [])

  function switchTone(t) {
    setTone(t)
    try { localStorage.setItem('eve-lesson-tone', t) } catch {}
  }

  const allSlugs = Object.keys(lessons)
  const currentIndex = allSlugs.indexOf(slug)
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null

  const hasAcademic = lesson && !!lesson.body_academic
  const activeBody = (tone === 'academic' && hasAcademic) ? lesson.body_academic : lesson?.body

  if (!lesson) return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '28px', marginBottom: '12px' }}>Lesson not found</h1>
      <p style={{ color: 'var(--text-soft)', marginBottom: '24px', fontSize: '15px' }}>This lesson hasn&apos;t been written yet. It&apos;s coming.</p>
      <Link href="/learn" style={{ textDecoration: 'none' }}>
        <button className="btn-primary">Back to craft library</button>
      </Link>
    </div>
  )

  return (
    <div style={{ maxWidth: '740px', margin: '0 auto', padding: '48px 24px' }}>

      <Link href="/learn" style={{ fontSize: '13px', color: 'var(--text-soft)', textDecoration: 'none', display: 'inline-block', marginBottom: '36px' }}>
        &larr; Craft library
      </Link>

      <div className="fade-up" style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '18px', alignItems: 'center' }}>
          <span className="badge">{lesson.category}</span>
          <span style={{ fontSize: '12px', color: 'var(--text-soft)' }}>{lesson.time} read</span>
        </div>
        <h1 style={{ fontSize: 'clamp(24px, 3.5vw, 38px)', lineHeight: '1.2', marginBottom: '0' }}>{lesson.title}</h1>
      </div>

      {/* Tone switcher */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px', paddingBottom: '28px', borderBottom: '1px solid var(--border)' }}>
        <span style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)', marginRight: '4px' }}>Voice:</span>
        {[
          { key: 'mentor', label: 'Mentor', desc: 'Conversational' },
          { key: 'academic', label: 'Academic', desc: 'Theoretical' },
        ].map(({ key, label, desc }) => {
          const active = tone === key
          const available = key === 'mentor' || hasAcademic
          return (
            <button
              key={key}
              onClick={() => available && switchTone(key)}
              title={!available ? 'Academic voice coming soon for this lesson' : desc}
              style={{
                padding: '6px 14px', borderRadius: '6px', fontSize: '12px', fontWeight: active ? '600' : '400',
                fontFamily: 'var(--font-mono)', cursor: available ? 'pointer' : 'not-allowed',
                border: active ? '1.5px solid var(--green)' : '1.5px solid var(--border)',
                background: active ? 'var(--green-pale)' : 'transparent',
                color: active ? 'var(--green)' : available ? 'var(--text-mid)' : 'var(--text-soft)',
                opacity: available ? 1 : 0.45,
                transition: 'all 0.15s',
              }}
            >
              {label}
              {!available && <span style={{ marginLeft: '5px', fontSize: '10px' }}>soon</span>}
            </button>
          )
        })}
        {tone === 'academic' && hasAcademic && (
          <span style={{ fontSize: '11px', color: 'var(--text-soft)', marginLeft: '4px', fontStyle: 'italic' }}>
            Theoretical framework mode
          </span>
        )}
      </div>

      <div className="fade-up fade-up-delay-1">
        {renderBody(activeBody)}
      </div>

            {/* Books cited */}
      {lessonBooks[slug] && lessonBooks[slug].length > 0 && (
        <div style={{ marginTop: '52px', padding: '28px 32px', background: 'var(--amber-pale)', border: '1px solid var(--amber-border)', borderRadius: '12px' }}>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '16px' }}>Further reading</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {lessonBooks[slug].map((book, i) => (
              <a key={i} href={book.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', textDecoration: 'none' }}>
                <div>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: '700', fontSize: '14px', color: 'var(--text-dark)' }}>{book.title}</span>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: 'var(--text-soft)', marginLeft: '8px' }}>{book.author}</span>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: 'var(--text-mid)', margin: '3px 0 0', lineHeight: '1.5' }}>{book.note}</p>
                </div>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: '600', color: 'var(--amber)', whiteSpace: 'nowrap', paddingTop: '2px' }}>Amazon ↗</span>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Prev / Next */}
      <div style={{ marginTop: '64px', paddingTop: '32px', borderTop: '1px solid var(--border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        {prevSlug && lessons[prevSlug] ? (
          <Link href={`/learn/${prevSlug}`} style={{ textDecoration: 'none' }}>
            <div className="card" style={{ padding: '16px 18px' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>&larr; Previous</p>
              <p style={{ fontSize: '14px', fontFamily: 'Playfair Display, serif', color: 'var(--green)', lineHeight: '1.4' }}>{lessons[prevSlug].title}</p>
            </div>
          </Link>
        ) : <div />}
        {nextSlug && lessons[nextSlug] ? (
          <Link href={`/learn/${nextSlug}`} style={{ textDecoration: 'none' }}>
            <div className="card" style={{ padding: '16px 18px', textAlign: 'right' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Next &rarr;</p>
              <p style={{ fontSize: '14px', fontFamily: 'Playfair Display, serif', color: 'var(--green)', lineHeight: '1.4' }}>{lessons[nextSlug].title}</p>
            </div>
          </Link>
        ) : <div />}
      </div>

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <Link href="/learn" style={{ textDecoration: 'none' }}>
          <button className="btn-ghost" style={{ fontSize: '13px' }}>All lessons</button>
        </Link>
      </div>

    </div>
  )
}