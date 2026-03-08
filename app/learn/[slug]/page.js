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
    title: 'Secondary characters who earn their place',
    category: 'Character',
    time: '6 min',
    body: [
      { type: 'p', text: 'A secondary character who exists only to move the protagonist from scene to scene is furniture. They are present because the plot requires someone to deliver information, provide transportation, or fill a role. The audience knows it. Furniture characters don\'t register, don\'t linger, and don\'t do any of the work that secondary characters at their best can do: reveal the protagonist by contrast, embody the theme\'s counter-argument, or carry the emotional weight that the protagonist cannot carry directly.' },
      { type: 'rule', text: 'Every character in your story should want something, even if it\'s just a glass of water. A character with no desire is not a character — they are a plot mechanism wearing clothes.' },
      { type: 'h3', text: 'What secondary characters are for' },
      { type: 'p', text: 'Secondary characters serve three functions. They reveal the protagonist by being different from them — by responding to the same situation in a way that highlights, by contrast, what is specific about the protagonist\'s response. They carry thematic weight that the protagonist cannot carry while remaining dramatically credible — the person who says the true thing the protagonist cannot yet accept. And they create the texture of a world that exists independently of the protagonist, which is what makes the world feel real.' },
      { type: 'h3', text: 'The character who tells the truth' },
      { type: 'p', text: 'Almost every well-structured story has a secondary character whose function is to tell the protagonist the truth they are not ready to hear. In Blake Snyder\'s framework, this is the B story character — the person who states the theme. They say it early, the protagonist ignores it or dismisses it, and the story ends when the protagonist finally understands what was being said.' },
      { type: 'p', text: 'In Good Will Hunting, Robin Williams\'s Sean is this character. He tells Will directly what the problem is. Will deflects, attacks, and intellectualizes. The therapy scenes are the story of Will wearing down his resistance to the truth Sean has been offering from the beginning. Sean works as a secondary character because he has his own wound, his own grief, his own reason for being exactly this person in this conversation. He is not a device. He is a person who happens to be what Will needs.' },
      { type: 'h3', text: 'The mirror and the foil' },
      { type: 'p', text: 'Secondary characters who mirror or foil the protagonist are doing some of the most efficient work in drama. The mirror shows the protagonist a version of themselves — usually a version further along the same path, showing where this road ends. The foil shows the protagonist a version of themselves who made a different choice at the same fork.' },
      { type: 'p', text: 'Donnie in Donnie Brasco is a foil for the undercover agent\'s crisis of loyalty. Lefty is a mirror — a man who did exactly what Donnie is becoming, and arrived at exactly this. Both are secondary characters. Both reveal the protagonist more efficiently than any amount of internal monologue could.' },
      { type: 'h3', text: 'Giving secondary characters their own story' },
      { type: 'p', text: 'The most vivid secondary characters feel like they have a life that continues outside the scenes we see. They have opinions about things the story never asks them about. They have relationships with people other than the protagonist. They have histories that precede this story and will continue after it ends.' },
      { type: 'p', text: 'You do not need to show all of this. You need to know enough of it that when you write the character in a scene, they are responding to their own situation as well as the scene\'s situation. That double awareness — their life and the scene\'s demands — is what produces the moment where a secondary character does something unexpected and completely right. The unexpected behavior that feels inevitable is always the result of a character who was built as a person rather than a function.' },
      { type: 'tip', text: 'Pick your three most important secondary characters. For each, write two things: what they want from the protagonist specifically, and what they want from their life that has nothing to do with the protagonist. If the second answer is empty — if the character only exists in relation to the protagonist — they need more building. The life beyond the protagonist is what makes a secondary character feel real.' },
    ],
  },
  'the-lie': {
    title: 'The lie your character believes',
    category: 'Character',
    time: '6 min',
    body: [
      { type: 'p', text: 'Every great protagonist believes something false. Not a simple misunderstanding that gets cleared up early — a deep, organizing lie they have built their entire life around. This lie is not incidental to their character. It is the architecture. The story is the process of dismantling it, and the climax is the moment they either face it or refuse to.' },
      { type: 'rule', text: 'The lie is not stupidity. The lie is the best explanation the character could construct for what happened to them. It made sense once. It may have even protected them. It is only wrong now.' },
      { type: 'h3', text: 'Where the lie comes from' },
      { type: 'p', text: 'The lie is always a response to the ghost — the wound that happened before the story began. The character experienced something painful, isolating, or catastrophic, and they drew a conclusion from it. That conclusion became the lie. A child abandoned by a parent concludes: people always leave, so don\'t let them in. A person who failed publicly concludes: I am not good enough, so I must be perfect or not try at all. A survivor concludes: attachment is dangerous, so stay separate.' },
      { type: 'p', text: 'The lie is the character\'s theory of self-protection. It worked — or seemed to work — for years. The story is the event that finally proves the theory wrong, or costs the character too much to maintain.' },
      { type: 'h3', text: 'Three examples examined' },
      { type: 'p', text: 'In Good Will Hunting, Will\'s lie is that he is unworthy of love — that anyone who gets close will eventually confirm this by leaving. The lie is so perfectly constructed that Will preemptively abandons every relationship before it can hurt him. Skylar is the test. The story ends when Will drives to California — not because the lie disappears, but because he chooses to act against it for the first time.' },
      { type: 'p', text: 'In The Social Network, Mark Zuckerberg\'s lie is that intellectual superiority is sufficient — that being the smartest person in the room is a substitute for the human connection he cannot maintain. He creates a social network for everyone because he cannot actually socialize. The film ends with him refreshing Erica\'s Facebook page in an empty room. He built the world he wanted. He is still alone. The lie was never confronted.' },
      { type: 'p', text: 'In Toy Story, Woody\'s lie is that he is defined by being Andy\'s favorite — that his worth is contingent on being chosen. When Buzz arrives, Woody\'s lie is immediately threatened. Everything terrible Woody does in the first act flows directly from the lie. The arc is not Woody learning to share. It is Woody discovering that his value is not comparative.' },
      { type: 'h3', text: 'The lie and the theme' },
      { type: 'p', text: 'The lie is the thematic engine. The story\'s argument is almost always about whether the lie is true. The protagonist acts as if it is. Events challenge it. The antagonist often embodies it — or embodies its opposite with equal force. By the climax, the protagonist must choose: keep the lie, or let it go. What they choose is what the story says.' },
      { type: 'h3', text: 'The lie must be specific' },
      { type: 'p', text: 'The most common failure is a lie that is too abstract: \'she doesn\'t believe in herself\' or \'he thinks he\'s better than everyone.\' These are character summaries, not lies. A lie is a specific false belief that produces specific behaviors. \'She believes that asking for help is proof of weakness, because her father left the family the year they needed him most\' — that is specific enough to generate scenes. The test: can you write three different scenes where the lie produces different consequences? If yes, it is specific enough.' },
      { type: 'tip', text: 'Write your protagonist\'s lie as a single sentence beginning with \'I am...\' or \'The world is...\' or \'People always...\' Then trace it back to the ghost. Can you connect the lie directly to a specific event? If the connection feels indirect or vague, the lie hasn\'t been grounded yet. The ghost makes the lie feel inevitable rather than assigned.' },
    ],
  },
  'character-arc': {
    title: 'How a character arc actually works',
    category: 'Character',
    time: '7 min',
    body: [
      { type: 'p', text: 'A character arc is not a protagonist getting better at something. It is not personal growth in the self-help sense. A character arc is a transformation in the character\'s fundamental understanding of themselves or the world — usually forced on them by events they did not choose, resisted until the last possible moment, and arrived at through loss rather than gain.' },
      { type: 'p', text: 'The confusion comes from how arcs are described: \'she learns to trust again,\' \'he discovers his worth,\' \'they find what really matters.\' These are outcomes. They tell you where the character ends up. They do not tell you what makes an arc — the mechanism, the resistance, the cost.' },
      { type: 'rule', text: 'An arc is not what a character learns. It is what a character is forced to confront — and whether they face it or don\'t. The direction of the confrontation determines the genre.' },
      { type: 'h3', text: 'The three components' },
      { type: 'p', text: 'Every functioning arc has three interlocking parts. The lie the character believes at the start — the false understanding of themselves or the world that organizes their behavior. The need — the truth they must accept for the lie to be dismantled. And the cost — what the character must give up in order to change. Without the cost, there is no arc. If the character can have the truth and keep everything they had before, transformation comes too cheap.' },
      { type: 'h3', text: 'The positive arc' },
      { type: 'p', text: 'In a positive arc, the character begins with the lie, is placed under pressure by events that challenge it, resists the challenge, loses something that forces the confrontation, and emerges changed. Schindler begins Schindler\'s List as a war profiteer — a man who believes that people are fungible, that survival is transactional. He ends the film having saved 1,200 lives at enormous personal cost, weeping that he could have saved more. The arc is not \'Schindler was a bad man who became good.\' It is the specific, grinding process by which a particular false belief was dismantled by the experience of specific human faces.' },
      { type: 'h3', text: 'The negative arc' },
      { type: 'p', text: 'In a negative arc, the character is offered the truth and refuses it. The lie is never dismantled — it is instead confirmed or doubled down on. Michael Corleone is offered the truth multiple times: by Kay, by his father, by Tom Hagen, by his own reflection. He consistently chooses the lie — that he can control the violence, that power protects what he loves, that he is different from what he is becoming. By the end of The Godfather Part II, he has destroyed everything the lie was supposed to protect. Negative arcs are tragedies. The arc still works the same way — the same components, the same mechanism — but the character chooses wrong at the moment of choice.' },
      { type: 'h3', text: 'The flat arc' },
      { type: 'p', text: 'In a flat arc, the protagonist does not change — the world does. The protagonist already knows the truth that everyone around them denies. The story is the process of them imposing that truth on a resistant world. Atticus Finch does not change. The courtroom changes, or fails to. James Bond does not change. The threat is neutralized. Flat arcs require extremely strong external conflict because the internal conflict is absent. They are harder to write than they appear.' },
      { type: 'h3', text: 'What kills an arc' },
      { type: 'p', text: 'Arcs die in two ways. The character changes too easily — the transformation costs nothing, or the lie is abandoned after a single conversation rather than a series of losses. Or the character changes for reasons external to the arc — they change because the plot requires it, not because something internal broke. The audience feels both failures as manipulation. Change that is earned through accumulating pressure and genuine cost feels inevitable. Change imposed by the writer feels false.' },
      { type: 'tip', text: 'Test your arc with three questions. What specifically does your protagonist believe at the start that is false? What is the single moment when the lie becomes untenable — the moment they can no longer hold it? And what do they have to give up to let it go? If the third answer is \'nothing\' — if change is cost-free — the arc has not been built yet. Find the cost.' },
    ],
  },
  'flaw-vs-wound': {
    title: 'Flaw vs. wound: why the difference matters',
    category: 'Character',
    time: '6 min',
    body: [
      { type: 'p', text: 'Most writing advice tells you to give your protagonist a flaw. This is correct — a perfect protagonist is unreadable. But the advice usually stops there, and that is where the problem starts. A flaw without a wound is just a bad habit. It gives the audience a character they find irritating rather than one they recognize.' },
      { type: 'rule', text: 'The flaw is behavior. The wound is the cause. The audience can forgive the flaw the moment they see the wound that produced it — not because the behavior is excused, but because it becomes comprehensible.' },
      { type: 'h3', text: 'What the flaw is' },
      { type: 'p', text: 'The flaw is the character\'s externally visible deficiency — the thing that creates friction with other characters and drives conflict. Anger, cowardice, dishonesty, arrogance, emotional unavailability, recklessness. The flaw is what the audience sees in the first act and finds difficult. It is what makes the character hard to be around.' },
      { type: 'p', text: 'The flaw must create consequences. A flaw that exists as a character note but never costs the protagonist anything is not a flaw — it is a description. The point of the flaw is the damage it does to the protagonist\'s relationships, goals, and world. If the flaw does not generate plot, it is decoration.' },
      { type: 'h3', text: 'What the wound is' },
      { type: 'p', text: 'The wound is the specific past event or condition that explains the flaw. Not a general history — a specific wound. William Foster in Falling Down is visibly aggressive and disconnected from reality. The wound is not \'he had a bad life\' — it is a specific collapse: divorce, job loss, the moment the American promise he had organized his life around was revoked. The aggression is comprehensible because the wound is comprehensible.' },
      { type: 'p', text: 'Tony Soprano is controlling, violent, unfaithful, and emotionally brutal. The wound is Livia — a mother who was herself deeply wounded, who could not love without destroying, who taught Tony that vulnerability was annihilation. His panic attacks are the wound expressing itself. His therapy is the story\'s framework for exposing it. The flaw is enormous. The wound makes it legible.' },
      { type: 'h3', text: 'Why the audience forgives' },
      { type: 'p', text: 'The audience does not forgive the flaw because of the wound. They forgive the flaw because the wound makes the behavior feel human rather than arbitrary. Arbitrary badness in a protagonist is alienating. Earned badness — behavior that emerged logically from a specific, comprehensible history — produces identification. The audience thinks: I understand how a person becomes this way. That understanding is not approval. It is recognition, and recognition is the precondition for caring.' },
      { type: 'h3', text: 'The relationship between flaw and arc' },
      { type: 'p', text: 'The arc is the process by which the wound is addressed and the flaw becomes unnecessary. If the wound is never touched, the flaw cannot change — and if the flaw cannot change, there is no arc. The character who becomes \'less angry\' without the wound being addressed has not changed. They have just had their thermostat adjusted. Real change requires going back to the wound — which is why the All Is Lost beat so often involves the wound being reactivated at maximum intensity. The climax works because it forces a choice: keep the flaw (which requires keeping the wound intact), or face the wound and let the flaw go.' },
      { type: 'tip', text: 'Write your protagonist\'s flaw in one sentence. Then write the wound in one sentence. Now ask: is the connection between them direct and specific? Does the wound obviously produce the flaw — not in a generic \'trauma causes problems\' way, but in a way that a reader could trace the logic? If the answer is no, either the wound isn\'t specific enough or the wrong wound has been assigned to the flaw. Keep tracing backward until the connection feels inevitable.' },
    ],
  },
  'character-voice': {
    title: 'Why every character needs a different voice',
    category: 'Character',
    time: '6 min',
    body: [
      { type: 'p', text: 'Cover the names in your screenplay. Read a full page of dialogue. Can you tell who is speaking from the words alone — without attribution, without action lines, just from the language? If not, your characters are sharing a voice. And in almost every case, the voice they are sharing is yours.' },
      { type: 'rule', text: 'Every character should sound like they grew up in a different house, went to different schools, and wanted different things. The same vocabulary, the same sentence rhythms, the same patterns of deflection and directness — these flatten characters into mouthpieces.' },
      { type: 'h3', text: 'Voice is not vocabulary' },
      { type: 'p', text: 'The most common mistake is treating character voice as a vocabulary problem. One character uses slang. Another uses formal language. A third has an accent. These are surface markers. They make characters sound different — but a character who is written with formal language still sounds like the writer if they share the writer\'s rhythms, the writer\'s tendency to arrive at conclusions, the writer\'s emotional logic.' },
      { type: 'p', text: 'Voice is the sum of what a character notices, what they choose to say versus leave unsaid, how they handle uncertainty, how quickly they commit to a position, whether they use humor as deflection or aggression or connection, how they respond to being challenged. Two characters with identical vocabulary can have completely different voices if their emotional logic operates differently.' },
      { type: 'h3', text: 'The factors that create voice' },
      { type: 'p', text: 'Class shapes voice more than most writers acknowledge. A character who grew up working-class speaks with different directness than one who grew up in a family where language was used to manage social performance. Education shapes sentence length and comfort with abstraction. Profession shapes vocabulary in specific ways — not just jargon, but habits of reasoning. A doctor speaks in causes and mechanisms. A lawyer speaks in distinctions and precedents. A carpenter speaks in what works.' },
      { type: 'p', text: 'The wound shapes voice most deeply of all. A character whose wound is abandonment speaks defensively, with deflection, keeping the emotional distance they need to feel safe. A character whose wound is humiliation speaks carefully, measuring the response before committing. A character whose wound is violence may be hypervigilant, hearing things the other characters miss, responding to subtext that wasn\'t directed at them. The wound creates the emotional filter through which language passes.' },
      { type: 'h3', text: 'The Coen Brothers test' },
      { type: 'p', text: 'Study the Coen Brothers\' dialogue — No Country for Old Men, Fargo, The Big Lebowski. Cover the names and read any scene. Every character is immediately identifiable not because they use different words but because they process the world differently. Llewelyn Moss is direct, sparse, physical. Sheriff Bell is ruminative, circular, reaching for meaning in language that keeps failing him. Anton Chigurh is precise, formal, operating by a logic that treats conversation as a formality before the inevitable. The Dude is associative, digressive, comfortable with tangents. Same scene, four different voices, four completely different minds.' },
      { type: 'h3', text: 'How to develop distinct voices' },
      { type: 'p', text: 'Build each character\'s voice from the inside out rather than the outside in. Know their class, their education, their wound, their dominant emotional defense. Know whether they tend toward action or reflection when under pressure. Know what they are afraid to say and how they talk around it. Know their humor — whether they have it, what it protects them from, who they show it to.' },
      { type: 'p', text: 'Then write an off-page scene: a moment not in your story where this character talks about something that has nothing to do with the plot. How do they discuss a meal they had? A disappointment? A memory from childhood? The scene will never appear in the story. It will tell you everything you need to know about how they speak.' },
      { type: 'tip', text: 'Take your three most important characters. Write a single paragraph for each where they describe the same mundane experience — a commute, waiting in a line, an unexpected phone call. The content is identical. Everything else — length, syntax, what they notice, what they skip, whether they find it funny or annoying or interesting — should be completely different. If the three paragraphs feel like the same person, the voices have not been built yet.' },
    ],
  },
  'relationship-pairs': {
    title: 'How two characters define each other',
    category: 'Character',
    time: '6 min',
    body: [
      { type: 'p', text: 'We understand characters in relation to other characters. No one exists in isolation — not on the page, not in life. A protagonist reads differently opposite a loyal friend than opposite a rival, a mentor, or someone they have wronged. The character on paper may be identical, but the relationship reveals dimensions that nothing else can.' },
      { type: 'rule', text: 'A relationship is not a backdrop. It is a pressure system. The right pairing reveals things about a character that could not be revealed any other way — things the character could not tell us, would not tell us, and may not know about themselves.' },
      { type: 'h3', text: 'What relationships reveal' },
      { type: 'p', text: 'Relationships reveal characters by creating the conditions for their worst and best behavior simultaneously. The person someone is with their mentor is not the person they are with their rival. The person they are with someone they have hurt is not the person they are with someone who has hurt them. Each relationship creates a different set of pressures, and pressure reveals character more reliably than any amount of direct description.' },
      { type: 'p', text: 'In The Silence of the Lambs, Clarice Starling is defined differently by each relationship. With Crawford, she is competent and deferential — professional under pressure. With the prison guards, she is navigating institutional contempt. With Hannibal Lecter, she is exposed — her intelligence fully matched, her vulnerability fully visible, her wound available to be found. The Lecter relationship reveals what no other relationship in the film could: what is underneath the competence.' },
      { type: 'h3', text: 'The foil' },
      { type: 'p', text: 'The foil is a character who shares enough with the protagonist to create comparison while differing on the axis that matters most to the story\'s argument. The foil is not the antagonist — they are often an ally. What they reveal is what the protagonist is not, or what the protagonist might have become.' },
      { type: 'p', text: 'Harvey Dent is Bruce Wayne\'s foil in The Dark Knight. Both are committed to Gotham\'s safety. Both are willing to sacrifice. Both love Rachel. The difference is the lie each one lives by — Dent\'s that justice can be clean, Wayne\'s that he can operate outside the law without becoming what he fights. Dent breaks when his lie is exposed. The foil asks: what if you had made different choices? The answer illuminates the protagonist.' },
      { type: 'h3', text: 'The mirror' },
      { type: 'p', text: 'The mirror relationship shows the protagonist a version of themselves — usually a version they are afraid of, or have refused to acknowledge. The mentor who warns them about where the path leads. The antagonist who made the same choice and took it further. The secondary character who represents where the protagonist will end up if they don\'t change.' },
      { type: 'p', text: 'In Breaking Bad, Gus Fring is Walt\'s mirror — a man of extraordinary intelligence, self-control, and capability, who organized his entire existence around revenge and pride and calls it professionalism. Walt sees in Gus what he is building toward, and is both attracted to it and terrified by it. The mirror relationship creates the recognition that makes the character\'s choices feel consequential rather than incidental.' },
      { type: 'h3', text: 'The A story and B story as relationship test' },
      { type: 'p', text: 'The B story — the secondary plot, usually a relationship — is where the protagonist\'s need is addressed. The A story is where the want is pursued. The B story character is the one who, consciously or not, tells the protagonist what they actually need. In Save the Cat terms, the B story character states the theme early. They are often the person the protagonist pushes away, undervalues, or takes for granted — until the All Is Lost beat, when the A story has collapsed and the B story character is all that remains.' },
      { type: 'tip', text: 'For every major relationship in your story, write one sentence: \'What can this relationship reveal about my protagonist that no other relationship could?\' If the answer is the same as another relationship, the relationships are redundant — one of them should be cut or rebuilt on a different pressure axis. Each major relationship should reveal a different dimension. Together they should assemble a complete picture of who the protagonist is.' },
    ],
  },
  'enter-late-leave-early': {
    title: 'Enter late, leave early',
    category: 'Scene Craft',
    time: '5 min',
    body: [
      { type: 'p', text: 'Every scene has a moment before the real scene starts — the arrival, the pleasantries, the establishing of the physical situation. And every scene has a moment after it ends — the reactions, the processing, the quiet after the door closes. You do not need either of them. In almost every case, you do not want them.' },
      { type: 'rule', text: 'Enter the scene at the last possible moment before the dramatic action begins. Leave at the first moment after the essential dramatic action is complete. Everything outside those two points is the scene commenting on itself.' },
      { type: 'h3', text: 'Why scenes begin too early' },
      { type: 'p', text: 'Writers begin scenes early because they are anxious about context. They want the audience to understand the physical space, the relationship between the characters, the reason the scene is happening. This anxiety is reasonable but the response is wrong. Context that matters will become clear during the dramatic action. Context that does not become clear during the action is context the audience did not need.' },
      { type: 'p', text: 'The scene that begins with two characters arriving at a location, greeting each other, sitting down, and then having the difficult conversation — loses something in every one of those preliminary beats. Each unnecessary beat reduces the pressure that should be building. Arrive in the middle of the sentence that matters. The audience will catch up.' },
      { type: 'h3', text: 'Why scenes end too late' },
      { type: 'p', text: 'Scenes end too late for the same reason they begin too early: the writer wants to ensure the audience understood what happened. After the confrontation, the scene lingers on one character processing their emotions. After the revelation, someone summarizes what the revelation means. After the goodbye, the camera stays on the door after it has closed.' },
      { type: 'p', text: 'This is the scene explaining itself. A scene that needs to explain itself has not done its work. Cut before the explanation. Leave at the first moment the essential thing has happened — the decision has been made, the thing has been said, the line has been crossed. The reaction belongs to the next scene, or to the white space between them.' },
      { type: 'h3', text: 'The cut as punctuation' },
      { type: 'p', text: 'In cinema, the cut is the most powerful tool available. A well-placed cut does not just end a scene — it creates meaning through juxtaposition with what comes next. The scene that ends at exactly the right moment, with exactly the right image or line, becomes more powerful in combination with what follows than it could ever be alone. Ending too late prevents this. You cannot cut on the right moment if you have already moved past it.' },
      { type: 'p', text: 'Chinatown cuts relentlessly on action. Scenes end on the moment of maximum charge — never on the processing, never on the explanation. The audience is left with the impact and immediately given the next impact. This is why Chinatown feels like it moves faster than it does. The cuts do not waste a frame.' },
      { type: 'tip', text: 'Take your last completed scene. Find the first line of actual dramatic substance — the first moment something is actually at stake. That is probably where the scene should start. Then find the last moment of actual dramatic consequence — the last moment something changes. That is probably where it should end. Cut everything before the first and after the last. Read it. In almost every case, the scene is now better.' },
    ],
  },
  'scene-turn': {
    title: 'The scene turn',
    category: 'Scene Craft',
    time: '5 min',
    body: [
      { type: 'p', text: 'A scene without a turn is a scene without a point. The turn is the moment something shifts — in the power relationship between characters, in one character\'s knowledge or understanding, in the direction the scene was heading. Before the turn, the scene is going one way. After the turn, it is going another. A scene that ends in the same direction it began has not earned its place in the story.' },
      { type: 'rule', text: 'The turn is not the scene\'s climax. It is the moment the scene\'s trajectory changes. It can be large or small, internal or external, dramatic or quiet. It cannot be absent.' },
      { type: 'h3', text: 'Types of turn' },
      { type: 'p', text: 'Power turns: one character begins the scene with the advantage and ends it without. The detective interrogation that begins with the detective in control and ends with the suspect having the information the detective wanted to conceal. The negotiation that reverses. The argument where the person who seemed to be winning suddenly reveals something that changes everything.' },
      { type: 'p', text: 'Knowledge turns: a character learns something that changes their understanding of the situation. Not necessarily through information being delivered — through observation, realization, or something in another character\'s behavior that reveals the truth. The moment a character understands something they didn\'t understand at the scene\'s opening is a turn.' },
      { type: 'p', text: 'Decision turns: a character arrives at a scene undecided and leaves having decided. Or arrives having decided and leaves having changed their mind. The turn is the moment the decision crystallizes or reverses. Decision turns are the most important in narrative — they move the story because they change what will happen next.' },
      { type: 'h3', text: 'The emotional turn' },
      { type: 'p', text: 'In intimate drama — the scenes that are not about information or power but about feeling — the turn is emotional. One character begins closed and ends open. Or begins open and ends having shut down again. Or begins angry and ends, against their will, moved. The emotional turn is harder to write than a power turn because it cannot be signaled by the dialogue — it has to be earned by the scene\'s accumulation and felt by the audience rather than told.' },
      { type: 'p', text: 'The dinner scene in Ordinary People, where Beth and Calvin sit across from each other discussing Conrad\'s return to swimming, turns three times in twelve minutes. Each turn is emotional. Each turn is established through what is not said. The audience understands exactly what is happening even though none of the characters say what they mean.' },
      { type: 'h3', text: 'The scene that does not turn' },
      { type: 'p', text: 'A scene that does not turn delivers information. The detective explains the case to a colleague. The characters discuss the plan. Two people talk about what is happening. Information is conveyed. The situation does not change. These scenes are the hardest to diagnose because they feel necessary — the information seems important. Ask: does the audience actually need this information in a scene, or could it be delivered in a line, in action, in the background of a scene about something else? If the answer is \'in a scene,\' find the turn — find the version of this information-delivery where the act of delivery changes the situation. The scene becomes necessary when it turns.' },
      { type: 'tip', text: 'Read your last five scenes. For each, complete this sentence: \'By the end of this scene, [something specific] has changed.\' Name the specific thing. If you cannot name it — if the scene ends in the same power, knowledge, and emotional state it began — that scene has no turn. Find the version of the scene that turns, or find a different place to deliver what the scene is currently delivering.' },
    ],
  },
  'tension-without-action': {
    title: 'Writing tension without action',
    category: 'Scene Craft',
    time: '6 min',
    body: [
      { type: 'p', text: 'Most beginning writers equate tension with action. Chase scenes, confrontations, revelations, violence. These create tension through event — something is happening, so the audience is engaged. But the most memorable tension in cinema is often the quietest. Two people eating dinner. A phone call where one person knows something the other doesn\'t. A character standing outside a door they have not yet opened. Nothing is happening. The audience cannot breathe.' },
      { type: 'rule', text: 'Tension is not what is happening. Tension is the gap between what could happen and what the audience fears will happen. The wider the gap, and the more specific the fear, the greater the tension. Action fills the gap. Anticipation holds it open.' },
      { type: 'h3', text: 'The mechanics of anticipation' },
      { type: 'p', text: 'Hitchcock called it the bomb under the table. Two men eat lunch. Ordinary conversation. No tension. Under the table, there is a bomb. The audience knows. The men do not. Now the ordinary conversation is unbearable. Nothing about the scene changed. Everything about the scene changed. The information the audience holds that the characters lack is the entire source of the tension.' },
      { type: 'p', text: 'This is not limited to physical danger. The same mechanism works with emotional stakes. The audience knows the relationship is ending. The characters at dinner are talking about their vacation plans. The vacation plans are meaningless but the audience cannot look away, because every sentence is carrying the weight of what is coming. The information gap creates tension in any register — romantic, familial, professional, mortal.' },
      { type: 'h3', text: 'Tension through restraint' },
      { type: 'p', text: 'The scene that shows everything is less tense than the scene that shows almost everything. A door that opens reveals what is behind it. A door that stays closed — while the audience knows something is behind it — is more disturbing than whatever the writer could place on the other side. Tension lives in withholding. The moment of revelation ends the tension. The approach to the moment, held as long as possible without releasing, maximizes it.' },
      { type: 'p', text: 'In No Country for Old Men, the motel room scenes with Chigurh are almost entirely quiet. He does not threaten. He does not raise his voice. He is precise and patient and certain. The tension is unbearable not because of what he does but because of the absolute certainty that he will do something, and the helplessness of everyone in the scene to prevent it.' },
      { type: 'h3', text: 'Tension through character incompatibility' },
      { type: 'p', text: 'Two characters who want incompatible things in the same scene create tension without action. Not conflict — tension. Conflict is when the incompatibility erupts. Tension is the period before it erupts, when both characters are managing the incompatibility with social behavior. The dinner where both people know the conversation that must happen and both are avoiding it. Every polite exchange increases the pressure. The audience waits for the explosion. The explosion may not come in this scene — which is often more powerful than if it does.' },
      { type: 'h3', text: 'The cost of releasing tension too early' },
      { type: 'p', text: 'The most common mistake is releasing tension at the first opportunity. The scene builds to a moment of maximum charge, and then a character speaks the subtext, or the confrontation happens, or the information is delivered. The writer, anxious that the tension is becoming uncomfortable, defuses it. This is usually wrong. The tension was working. The discomfort was the scene doing its job. Hold it. The release, when it finally comes, will be proportional to how long the tension was sustained.' },
      { type: 'tip', text: 'Find a scene in your work that currently depends on action or dialogue to generate tension. Ask: what does the audience know that at least one character in this scene doesn\'t know? If the answer is nothing — if the audience knows exactly as much as the characters — there is no information gap. Create one. Put something into the scene\'s context that the audience knows and that makes the surface behavior of the characters quietly terrible. Then hold it as long as you can before releasing.' },
    ],
  },
  'location-as-character': {
    title: 'The location is never just a location',
    category: 'Scene Craft',
    time: '5 min',
    body: [
      { type: 'p', text: 'Amateur screenwriters describe locations as containers. The scene happens in a kitchen. The confrontation takes place in an office. The climax occurs at a warehouse. These are accurate but inert. A location is a container if you treat it as one. A location is a character in its own right if you choose it the way you choose characters — for what it reveals, what it pressures, what it cannot be separated from.' },
      { type: 'rule', text: 'The best locations externalize the interior state of the scene. They make visible what the scene is about before a word is spoken. They create pressure that the dialogue inherits.' },
      { type: 'h3', text: 'Location as emotional argument' },
      { type: 'p', text: 'In The Godfather, the most important conversations happen in the Don\'s study — a room of warmth, books, shadow, and absolute privacy. The room argues for the intimacy and isolation of power. When Michael has his own study by The Godfather Part II, it is architecturally similar and emotionally opposite — larger, colder, the warm light replaced by institutional distance. The rooms make the argument about what has been lost before anyone speaks.' },
      { type: 'p', text: 'In There Will Be Blood, the oil derricks and the desert are not background. They are the physical manifestation of Plainview\'s psychology — the landscape of extraction, of stripping the earth for personal gain, with nothing left. When we see Plainview in a bowling alley at the end — the most domestic, civilian, low-stakes location in the film — he is comically out of place. The location mocks him. The juxtaposition is the scene\'s whole argument.' },
      { type: 'h3', text: 'Location as constraint' },
      { type: 'p', text: 'Location creates constraint, and constraint generates drama. Two people who need to have an honest conversation but are at a dinner party surrounded by people who cannot hear it — the location creates the pressure. The more inappropriate the location for the scene that must happen, the more tension. A job interview where the interviewer reveals something personal. A hospital corridor where two characters have to have the conversation they should have had years ago in private. The location forces characters into behavior they would not choose.' },
      { type: 'h3', text: 'Finding the right location' },
      { type: 'p', text: 'The right location for a scene is the one that makes the scene\'s subtext visible or the one that creates maximum pressure on what the scene needs to accomplish. Ask two questions about every scene: What does this location make difficult that would be easy somewhere else? And what does the physical space say about the characters who chose to meet here, or who are forced to be here?' },
      { type: 'p', text: 'A scene that could happen anywhere will feel like it could happen anywhere — placeless, without texture, generic. A scene that could only happen in this specific location, at this specific time of day, in this specific physical configuration — that scene has been located. The location is doing work.' },
      { type: 'tip', text: 'Take your next scene. Ask: why here? Why is this conversation or confrontation happening in this specific place rather than any other? If the answer is \'because the characters need to be there for plot reasons\' — that is not enough. Find what this location makes harder, or more dangerous, or more ironic, or more revealing. If you cannot find it, consider whether a different location would make the scene work harder.' },
    ],
  },
  'scene-endings': {
    title: 'How to end a scene so the next one cannot wait',
    category: 'Scene Craft',
    time: '6 min',
    body: [
      { type: 'p', text: 'The last beat of a scene is a promise about what comes next. It tells the audience whether they are allowed to exhale or whether they must keep leaning forward. The scene that ends cleanly, with resolution and closure, releases the audience. The scene that ends on an unresolved charge — a question, an image, an action that demands response — keeps them in.' },
      { type: 'rule', text: 'End scenes on charge, not on resolution. Resolution belongs to acts, not scenes. A scene that fully resolves its own tension is a chapter, not a scene. Scenes should end with something left open.' },
      { type: 'h3', text: 'The question ending' },
      { type: 'p', text: 'The most reliable scene ending generates a specific question in the audience\'s mind. Not a vague sense that something is unresolved — a specific question: Will she tell him? Does he know? What did that look mean? Is that gun going to be used? The more specific the question, the more urgently the next scene is needed. The question is a hook into what follows. Design it deliberately.' },
      { type: 'h3', text: 'The reversal ending' },
      { type: 'p', text: 'A scene that ends in reversal — where the last beat contradicts or undermines what came before — creates momentum through surprise. The negotiation that seemed settled, ended on the moment one party says something that undoes the settlement. The reconciliation scene that ends with one line that reopens everything. The reversal ending does not resolve the scene; it reverses it, and the audience needs to see what happens next immediately.' },
      { type: 'h3', text: 'The image ending' },
      { type: 'p', text: 'Some scenes end not on dialogue or action but on an image that carries the scene\'s emotional charge concentrated into a visual. A face. An object. A door. A person walking away. The image ending works when the image has been invested with meaning earlier in the scene — when the last thing we see is the scene\'s emotional truth made concrete. Chinatown ends its most devastating scene on a specific image — not on what is said, but on what is seen — and the image does more than any dialogue could.' },
      { type: 'h3', text: 'What kills scene endings' },
      { type: 'p', text: 'Scenes end badly when they end on explanation. A character summarizes what just happened. Two characters process the scene together. The camera lingers on someone\'s emotional response until the emotion is fully legible. All of this is the scene explaining itself to the audience, which is a vote of no confidence in the preceding scene\'s ability to communicate. Trust the scene. End before the explanation. The audience is smarter than the explanation assumes.' },
      { type: 'p', text: 'Scenes also end badly when they end too symmetrically — when the ending mirrors the opening in a way that makes the scene feel complete and enclosed. A complete, enclosed scene releases all its charge. You want to leave some of the charge for the next scene to inherit. The scene that ends slightly off-balance, slightly forward-leaning, creates the momentum that pulls the story.' },
      { type: 'h3', text: 'The scene-to-scene connection' },
      { type: 'p', text: 'The best screenwriting creates scene connections — where the end of one scene and the beginning of the next create meaning through juxtaposition. This is only possible if the scene ends in the right place, on the right beat. The scene that ends too late has already moved past the moment that could have connected to what follows. The scene that ends too early hasn\'t arrived at it. The right ending note is the one that the next scene answers or complicates or ignores in a way that reveals something.' },
      { type: 'tip', text: 'Go through your last ten scene endings. For each, ask: what is the audience\'s last image or line, and what specific question does it generate? Write the question down. If no specific question emerges — if the scene ended on resolution or summary — rewrite the ending to land on the moment just before the resolution. Find the charge. End there.' },
    ],
  },
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
        <div style={{ marginTop: '52px', padding: '28px 32px', background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderRadius: '12px' }}>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '16px' }}>Further reading</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {lessonBooks[slug].map((book, i) => (
              <a key={i} href={book.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', textDecoration: 'none' }}>
                <div>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: '700', fontSize: '14px', color: 'var(--text-dark)' }}>{book.title}</span>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: 'var(--text-soft)', marginLeft: '8px' }}>{book.author}</span>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: 'var(--text-mid)', margin: '3px 0 0', lineHeight: '1.5' }}>{book.note}</p>
                </div>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: '600', color: 'var(--green)', whiteSpace: 'nowrap', paddingTop: '2px' }}>Amazon ↗</span>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Prev / Next */}
      <div style={{ marginTop: '64px', paddingTop: '32px', borderTop: '1px solid var(--border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        {prevSlug && lessons[prevSlug] ? (
          <Link href={`/learn/${prevSlug}`} style={{ textDecoration: 'none' }}>
            <div className="card" style={{ padding: '22px 24px' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-mono)' }}>&larr; Previous</p>
              <p style={{ fontSize: '16px', fontFamily: 'Playfair Display, serif', color: 'var(--text-dark)', lineHeight: '1.4', fontWeight: '600' }}>{lessons[prevSlug].title}</p>
            </div>
          </Link>
        ) : <div />}
        {nextSlug && lessons[nextSlug] ? (
          <Link href={`/learn/${nextSlug}`} style={{ textDecoration: 'none' }}>
            <div className="card" style={{ padding: '22px 24px', textAlign: 'right' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-mono)' }}>Next &rarr;</p>
              <p style={{ fontSize: '16px', fontFamily: 'Playfair Display, serif', color: 'var(--text-dark)', lineHeight: '1.4', fontWeight: '600' }}>{lessons[nextSlug].title}</p>
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