'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'

const lessons = {
  'what-a-scene-does': {
    title: "What a scene actually does",
    category: "Structure",
    time: "3 min",
    body: [
      { type: 'p', text: "Most beginning writers think a scene's job is to advance the plot. Get the character from A to B. Have the conversation that needs to happen. Reveal the information the audience needs." },
      { type: 'p', text: "That is the minimum. A scene that only does that is dead weight — technically necessary but dramatically inert." },
      { type: 'rule', text: "Every scene must do at least two things simultaneously." },
      { type: 'p', text: "It advances the plot AND reveals character. It raises stakes AND establishes theme. It creates tension AND deepens relationship. If you can only identify one thing a scene is doing, it needs work — or it needs to go." },
      { type: 'h3', text: "The scene test" },
      { type: 'p', text: "Ask yourself three questions about every scene you write:" },
      { type: 'list', items: ["What does my protagonist want in this scene — specifically, right now, not in the larger story?", "What stands in the way of them getting it?", "What changes by the end of this scene that cannot be unchanged?"] },
      { type: 'p', text: "If your protagonist wants nothing, there is no scene — there is only exposition wearing a costume. If nothing changes, the scene is stalling." },
      { type: 'h3', text: "Scene vs. sequel" },
      { type: 'p', text: "Dwight Swain identified two units of fiction: the scene and the sequel. A scene ends in disaster — the character fails to get what they want. A sequel is the emotional aftermath — the character reacts, thinks, and makes a new decision." },
      { type: 'p', text: "Most writers write too many sequels and not enough scenes. If your character is thinking and processing for pages at a time, you have left the story. Get back into action." },
      { type: 'tip', text: "Go through your last three scenes. Write one sentence for each: what changed? If you cannot answer in one sentence, the scene may not be earning its place." },
    ],
  },
  'midpoint': {
    title: "The midpoint is the spine",
    category: "Structure",
    time: "4 min",
    body: [
      { type: 'p', text: "The midpoint is the most underrated beat in story structure. Beginning writers often treat it as the middle of Act 2 — a vague zone somewhere between the setup and the climax. It is not. It is the hinge on which your entire story turns." },
      { type: 'rule', text: "Remove your midpoint and your story collapses. It does not slow — it collapses." },
      { type: 'h3', text: "Two types of midpoint" },
      { type: 'p', text: "Blake Snyder identified two kinds. The false victory: things appear to be going well, the protagonist seems to have what they want — then everything gets worse. The false defeat: things appear to be at their worst — then the protagonist finds a way to push forward. Both work. The key is that something must change irreversibly." },
      { type: 'h3', text: "What the midpoint does" },
      { type: 'list', items: ["It raises the stakes from personal to public — the hero is no longer just fighting for themselves.", "It introduces or intensifies the antagonist's presence.", "It marks the moment when the protagonist becomes active rather than reactive.", "It creates a 'before' and 'after' — the story cannot return to what it was."] },
      { type: 'tip', text: "Write this sentence: 'Before the midpoint, my protagonist is ____. After the midpoint, they are ____.' If both blanks feel similar, your midpoint is not working hard enough." },
    ],
  },
  'want-vs-need': {
    title: "Want vs. Need: the engine of every great character",
    category: "Character",
    time: "4 min",
    body: [
      { type: 'p', text: "Every compelling protagonist has two things: what they want and what they need. These are almost never the same thing. The gap between them is where your story lives." },
      { type: 'rule', text: "Want is external. Need is internal. The character can name the want. They rarely know the need." },
      { type: 'h3', text: "Examples from film" },
      { type: 'p', text: "In Chinatown, Jake Gittes wants to solve the case. He needs to accept that he cannot save everyone. In The Godfather, Michael Corleone wants to stay out of the family business. He needs to confront who he actually is. In Almost Famous, William wants to write the defining rock article of the decade. He needs to learn that honesty is more important than access." },
      { type: 'p', text: "In all three cases, the want and need are in direct conflict. Getting the want often requires abandoning the need — or vice versa. That conflict is the engine of the story." },
      { type: 'h3', text: "Why this matters structurally" },
      { type: 'p', text: "Your protagonist's want drives the plot. Their need drives the theme. At the end of a well-constructed story, the protagonist must choose between the two — and whichever they choose tells the audience what the story is actually about." },
      { type: 'tip', text: "Write your protagonist's want starting with 'They want to...' Then write their need starting with 'They need to learn that...' If both sentences feel the same, keep digging." },
    ],
  },
  'dialogue-subtext': {
    title: "Nobody talks to have a conversation",
    category: "Dialogue",
    time: "4 min",
    body: [
      { type: 'p', text: "Real people do not talk to exchange information. They talk to get something. To impress, to wound, to forgive, to delay, to seduce, to escape. Every line of dialogue is a transaction — someone wants something and is using language to try to get it." },
      { type: 'rule', text: "If no one wants anything in your scene, no one should be talking." },
      { type: 'h3', text: "The four functions of dialogue" },
      { type: 'list', items: ["To reveal character — how someone speaks tells us who they are.", "To advance conflict — dialogue is where characters collide.", "To deliver information — but always in service of something, never as a data dump.", "To establish relationship — how two people talk to each other tells us everything about their history."] },
      { type: 'h3', text: "What to cut" },
      { type: 'p', text: "Cut pleasantries unless they reveal character. Cut agreement — characters agreeing creates no conflict. Cut on-the-nose dialogue — characters who say exactly what they mean are rarely interesting. And cut exposition disguised as conversation: 'As you know, Bob, we've been partners for fifteen years...' No one talks like that." },
      { type: 'tip', text: "Take your last page of dialogue and ask: what does each character want in this exchange? Write it in the margin. If you cannot identify the want, the line may not belong in the scene." },
    ],
  },
  'theme': {
    title: "Theme isn't a message — it's a question",
    category: "Theme",
    time: "4 min",
    body: [
      { type: 'p', text: "Beginning writers confuse theme with message. A message is what you want to tell the audience. A theme is what the story asks them to consider. The moment your story has a clear, unambiguous answer — it has become a lecture." },
      { type: 'rule', text: "Theme is not 'crime doesn't pay.' Theme is 'what does justice cost the people who pursue it?'" },
      { type: 'p', text: "The best stories sit with the question. They do not resolve it. They dramatize it from multiple angles, give the best arguments to multiple characters, and let the audience wrestle with the weight of it." },
      { type: 'h3', text: "How theme surfaces" },
      { type: 'p', text: "Theme is rarely announced. It surfaces through pattern — through what keeps recurring in your story, through what your protagonist loses or gains, through what the antagonist represents. In Save the Cat, Snyder argued that theme is almost always stated early in the story by a minor character, and the protagonist ignores it. By the end, they finally understand what was being said." },
      { type: 'tip', text: "Write your theme as a question, not a statement. 'Is loyalty worth its cost?' is a theme. 'Loyalty is worth any cost' is a message. Stories that ask questions last longer than stories that answer them." },
    ],
  },
  'act-breaks': {
    title: "Act breaks: what they are and why they matter",
    category: "Structure",
    time: "5 min",
    body: [
      { type: 'p', text: "An act break is not a chapter ending. It is not a pause or a breath. An act break is a point of no return — an event so significant that the story can never go back to what it was before." },
      { type: 'rule', text: "Every act break must change the protagonist's situation, their understanding, or both — permanently." },
      { type: 'h3', text: "The end of Act 1" },
      { type: 'p', text: "The Act 1 break — sometimes called 'Break into Two' — is the most important structural moment in your story. It is the moment your protagonist makes a choice. Not has something happen to them. Makes a choice. They cross the threshold deliberately. They leave the ordinary world and enter the extraordinary world, and they cannot come back the same way they left." },
      { type: 'p', text: "If your protagonist is pushed into Act 2 rather than walking in — if the story happens to them rather than being driven by them — your Act 1 break is not working. The hero must be active here." },
      { type: 'h3', text: "The end of Act 2" },
      { type: 'p', text: "The Act 2 break — sometimes called 'Break into Three' — follows the All Is Lost moment. Your protagonist has lost everything. Then something happens — an insight, a combination of the A story and B story lessons, a moment of clarity — that gives them the will and the knowledge to try one final time." },
      { type: 'p', text: "This break is about synthesis. Everything your protagonist has learned in Act 2 comes together here. The B story (the relationship, the friendship, the unlikely ally) provides the missing piece. The hero does not just try harder — they try differently." },
      { type: 'h3', text: "What bad act breaks look like" },
      { type: 'list', items: ["The protagonist is forced into the new act by external circumstances rather than choice.", "The break is an event that could happen anywhere in the story — it is not structurally specific.", "Nothing in the story's power dynamic has actually changed.", "The protagonist ends the act in the same emotional state they began it."] },
      { type: 'tip', text: "Write one sentence for each act break: 'The protagonist chooses to _____, even though it means _____.' If you cannot fill in the second blank — if there is no cost — the break is not earning its place." },
    ],
  },
  'all-is-lost': {
    title: "The All Is Lost beat",
    category: "Structure",
    time: "3 min",
    body: [
      { type: 'p', text: "The All Is Lost beat is the lowest point in your story. Everything your protagonist has been working toward appears to be permanently out of reach. Their plan has failed. Their ally has betrayed them. The thing they built has collapsed." },
      { type: 'rule', text: "Something must die in the All Is Lost beat. Always." },
      { type: 'p', text: "Blake Snyder called this the 'whiff of death.' It does not have to be a literal death — though it often is. It can be the death of a dream, the death of a relationship, the death of an identity, the death of hope. But something must end. Something must be over." },
      { type: 'h3', text: "Why it has to be real" },
      { type: 'p', text: "Beginning writers often soften the All Is Lost beat because they do not want to hurt their protagonist. This is the wrong instinct. If the audience does not believe everything is truly lost, they will not feel the relief of the Break into Three. The valley must be deep enough to make the climb meaningful." },
      { type: 'p', text: "The test is this: if your hero can recover from their All Is Lost moment without fundamentally changing who they are — the beat is not working. Real loss requires real transformation." },
      { type: 'h3', text: "All Is Lost vs. Dark Night of the Soul" },
      { type: 'p', text: "These two beats are often confused. The All Is Lost is the event — the moment the bottom falls out. The Dark Night of the Soul is the reaction — the emotional aftermath where the hero sits in the wreckage. The All Is Lost is what happens. The Dark Night is how the hero feels about it." },
      { type: 'tip', text: "Ask: what specifically dies in your All Is Lost beat? Write it in one sentence. If you cannot name the specific loss, the beat is too abstract — and the audience will not feel it." },
    ],
  },
  'ghost': {
    title: "The ghost: what happened before page one",
    category: "Character",
    time: "3 min",
    body: [
      { type: 'p', text: "Every compelling character carries a wound from before the story begins. It is not backstory in the conventional sense — it is not a flashback or an explanation. It is a scar that shapes every decision the character makes, every relationship they form, every fear they carry." },
      { type: 'rule', text: "The ghost is not backstory for its own sake. It is the source of the flaw. It is the engine of the arc." },
      { type: 'p', text: "Michael Corleone's ghost is a father whose power he both fears and envies. Rick Blaine's ghost is a woman who left him at a train station in Paris. Clarice Starling's ghost is the screaming of the lambs. In each case, the ghost was established before the story began — and it drives every scene." },
      { type: 'h3', text: "What the ghost does" },
      { type: 'list', items: ["It explains the flaw without excusing it.", "It makes the character's worst decisions feel inevitable rather than stupid.", "It gives the audience something to root for — the moment of release or reckoning with the ghost.", "It connects the character's external want to their internal need."] },
      { type: 'h3', text: "The ghost does not have to be revealed" },
      { type: 'p', text: "You do not have to show the ghost to the audience. You do not have to write the flashback. You need to know it — and write every scene as if the character knows it unconsciously. The ghost shows up in behavior, not exposition." },
      { type: 'tip', text: "Write your protagonist's ghost as one specific event, not a general condition. Not 'difficult childhood' — but 'the afternoon their father walked out and never looked back.' Specificity is what makes the ghost haunt." },
    ],
  },
  'antagonist': {
    title: "Making your antagonist as strong as your hero",
    category: "Character",
    time: "5 min",
    body: [
      { type: 'p', text: "A weak antagonist makes a weak story. This is one of the most reliable rules in all of narrative craft. Your antagonist is not a problem to be solved — they are a force to be reckoned with. They exist to reveal your protagonist by opposing them." },
      { type: 'rule', text: "Your antagonist must be the hero of their own story — with a worldview that is internally consistent, even if it is wrong." },
      { type: 'h3', text: "The antagonist's argument" },
      { type: 'p', text: "Every great antagonist makes an argument. Hannibal Lecter argues that intelligence and taste are more important than conventional morality. Amy Dunne in Gone Girl argues that the social performance of femininity is a trap and that ruthlessness is the only honest response to it. The Joker argues that civilization is a thin veneer over chaos and that one bad day can break anyone." },
      { type: 'p', text: "These arguments are wrong — or at least, incomplete. But they are not stupid. The best antagonists have a point. They are responding to something real. If your antagonist's worldview cannot be articulated in a sentence that sounds at least partially reasonable, your antagonist is a cartoon." },
      { type: 'h3', text: "The antagonist mirrors the hero" },
      { type: 'p', text: "The most powerful antagonists are dark mirrors of the protagonist — a version of what the hero could become if they made different choices. Both want the same thing by different means. Both have the same wound, differently resolved. This is why we feel the antagonist as a threat rather than just an obstacle." },
      { type: 'h3', text: "What antagonists are not" },
      { type: 'list', items: ["A person who is simply cruel without reason or logic.", "An obstacle that exists only to create plot complications.", "A character who only appears to drive the plot forward.", "A representation of pure evil with no humanity or comprehensible motivation."] },
      { type: 'tip', text: "Write your antagonist's argument in one sentence: 'The world works this way, and I am the only one honest enough to act on it.' If you cannot write that sentence, your antagonist does not yet have a worldview — only a function." },
    ],
  },
  'subtext': {
    title: "Subtext: what is not being said",
    category: "Dialogue",
    time: "5 min",
    body: [
      { type: 'p', text: "Subtext is the meaning beneath the surface of a scene. It is what characters mean but do not say, what they feel but do not show, what the audience understands but is never stated. It is the space between the words." },
      { type: 'rule', text: "The best dialogue is an iceberg. What is spoken is ten percent. Two people talking about the weather can break your heart." },
      { type: 'h3', text: "Why people do not say what they mean" },
      { type: 'p', text: "In life, people avoid saying what they mean for reasons that are psychologically real: they are afraid of rejection, they do not have the vocabulary for what they feel, they are protecting someone, they are ashamed, they are testing the other person, or they genuinely do not know what they want." },
      { type: 'p', text: "These same reasons apply in fiction. If your character always says exactly what they mean, they are not a person — they are a spokesperson. Give them the same psychological complexity that prevents real people from being direct." },
      { type: 'h3', text: "How to write subtext" },
      { type: 'list', items: ["Have characters talk about one thing while really talking about another. The argument about the dishes is about the marriage.", "Use silence as an answer. What a character does not say in response to a question can be more powerful than any reply.", "Let actions contradict words. A character who says 'I'm fine' while gripping the table too hard.", "Let the scene's circumstance carry meaning. The same conversation at a funeral means something different than at a wedding."] },
      { type: 'h3', text: "On-the-nose dialogue" },
      { type: 'p', text: "'I hate you because you remind me of everything I could have been' is on the nose. 'I see you got a new car' — said with the right weight, between the right two people, at the right moment — is subtext. One tells the audience what to feel. The other makes them feel it." },
      { type: 'tip', text: "Take a scene where two characters discuss what they want directly. Now rewrite it: they cannot say what they actually want. They must talk around it. Read both versions aloud. The subtext version will almost always be more powerful." },
    ],
  },
  'arguments': {
    title: "How to write an argument that feels real",
    category: "Dialogue",
    time: "3 min",
    body: [
      { type: 'p', text: "Most written arguments are about what they appear to be about. Two characters argue about money, about a decision, about where to spend the holidays. In real life, arguments are almost never about their surface subject. They are about power, about fear, about unspoken grievances, about the accumulated weight of everything that has not been said." },
      { type: 'rule', text: "Real arguments are not about what people are arguing about. They are about what people are afraid of losing." },
      { type: 'h3', text: "The structure of a real argument" },
      { type: 'p', text: "Real arguments have an initiating wound — something that happened, or was said, or was not said, that created a vulnerability. The surface argument (about money, about the dishes, about the trip) is the vehicle. The wound is the engine. Once you know the wound, the argument writes itself." },
      { type: 'h3', text: "How arguments escalate" },
      { type: 'list', items: ["Someone says something small that the other person takes personally.", "The second person escalates — not to the same level, but one notch higher.", "The first person, now defensive, goes to the thing they know will land hardest.", "One person says the thing that cannot be unsaid.", "Silence. Or exit. Or the sudden, terrible calm of someone who has decided something."] },
      { type: 'h3', text: "What arguments reveal" },
      { type: 'p', text: "An argument is a crisis — and in crisis, people reveal their true priorities. The way your characters fight tells us what they value, what they fear, and how they hurt. A well-written argument is one of the most efficient tools for character revelation in the entire craft toolkit." },
      { type: 'tip', text: "Before writing an argument, answer: what does each character stand to lose if they lose this argument? Not the surface thing (the money, the decision) — the real thing (the respect, the relationship, the version of themselves they need to believe in). Write to those losses, not to the topic." },
    ],
  },
  'plant-payoff': {
    title: "Planting and payoff",
    category: "Theme",
    time: "3 min",
    body: [
      { type: 'p', text: "A payoff without a plant feels cheap. A plant without a payoff is dead weight. The art of dramatic construction is hiding the plant deeply enough that the audience does not anticipate it — and making the payoff feel, in retrospect, completely inevitable." },
      { type: 'rule', text: "The audience should feel, when the payoff arrives, that they should have seen it coming — and be glad they did not." },
      { type: 'h3', text: "What can be planted" },
      { type: 'list', items: ["Information — a fact established early that becomes crucial later.", "Character capability — showing a skill in Act 1 that saves the day in Act 3.", "A physical object — the gun on the mantelpiece.", "A relationship — establishing a connection early that pays off when it is needed.", "A theme — a question posed in the setup that is answered (or complicated) in the resolution."] },
      { type: 'h3', text: "How to plant without telegraphing" },
      { type: 'p', text: "The plant must be visible enough to be remembered but disguised enough not to announce itself. The best technique is to bury the plant inside a scene that appears to be about something else. Establish the character's skill in a moment of comedy or character revelation — so the audience registers it without cataloguing it as 'important.'" },
      { type: 'h3', text: "The retroactive inevitability test" },
      { type: 'p', text: "After you write a payoff, go back and ask: is the plant there? Is it specific enough that an attentive reader would find it on a second read? Is it early enough that it does not feel like cheating? If the answer to any of these is no — plant it." },
      { type: 'tip', text: "Make a list of the five most important payoffs in your story. Then find where each one is planted. If you cannot find the plant — it does not exist yet. Write it in." },
    ],
  },
  'motifs': {
    title: "How motifs work",
    category: "Theme",
    time: "3 min",
    body: [
      { type: 'p', text: "A motif is a recurring image, object, sound, phrase, or idea that accumulates meaning as a story progresses. The first time it appears, it is just a detail. The second time, the audience notices. The third time, it carries the full weight of everything that has come before." },
      { type: 'rule', text: "A motif is not a symbol, which stands for something outside itself. A motif is a pattern that resonates with the theme — it means more each time it appears." },
      { type: 'h3', text: "Examples" },
      { type: 'p', text: "In The Godfather, the orange is a motif — it appears near every major death in the film. In Schindler's List, the girl in the red coat appears twice — first alive in the crowd, then dead on a cart — and each appearance is unbearable. In Citizen Kane, 'Rosebud' is introduced as a mystery and resolved as a motif — the sled is the last moment of uncomplicated happiness in Kane's life." },
      { type: 'h3', text: "How to use motifs intentionally" },
      { type: 'list', items: ["Choose an image that connects to your theme organically — not one you force into the story.", "Introduce it early, without emphasis. Let it be a detail.", "Return to it at the story's turning points — the midpoint, the All Is Lost, the resolution.", "Let its meaning shift with each appearance. The same object should feel different in Act 3 than in Act 1."] },
      { type: 'p', text: "The mistake is overusing motifs — returning to them so often they become a tic rather than a resonance. Less is almost always more. Three appearances of a motif, well placed, will do more work than ten scattered ones." },
      { type: 'tip', text: "Look at your story and find one image that has appeared more than once without your consciously planning it. That is your motif — it emerged because your instincts know what the story is about. Now plant it one more time, deliberately, at the right moment." },
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