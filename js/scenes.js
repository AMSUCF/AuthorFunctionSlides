/* ============================================
   Scene Data - 55 scenes, three-act structure
   A quest through the landscape of authorship
   ============================================ */

const SCENES = [

  // ===== ACT 0: TITLE =====

  { // 0 - Title Screen
    id: 0,
    room: 'The Beginning',
    template: 'title',
    showSprite: false,
    transition: 'none',
    title: true,
    objects: [],
    dialogue: ''
  },

  // ===== ACT 1: THE LIBRARY =====

  { // 1 - Foucault quote
    id: 1,
    room: 'The Library',
    template: 'library',
    transition: 'iris',
    verb: 'look',
    spriteX: 180,
    objects: [{
      type: 'wall-text',
      x: 420, y: 60, w: 750,
      text: "\"The 'author-function' is not universal or constant in all discourse. Even within our civilization, the same types of texts have not always required authors; there was a time when those texts which we now call 'literary' (stories, folk tales, epics and tragedies) were accepted, circulated and valorized without any questions about the identity of their author.\"",
      attr: "-- Michel Foucault, 'What Is an Author?' (1969)"
    }],
    dialogue: "Authorship has always been changing. The idea of collective authorship existed long before what we're encountering with LLMs. On the wall, Foucault reminds us that even the concept of 'the author' is not universal or constant."
  },

  { // 2 - Ted Nelson quote
    id: 2,
    room: 'The Library',
    template: 'library',
    transition: 'fade',
    verb: 'talk',
    spriteX: 180,
    objects: [{
      type: 'wall-text',
      x: 420, y: 60, w: 750,
      text: "\"Computers don't actually think. You just think they think. (We think.)\"",
      attr: '-- Ted Nelson'
    }],
    dialogue: "We've always had this tension over the idea of computers as thinking machines. This is not a new experience -- we've been debating whether computers are conscious since the beginning of computing. Ted Nelson saw it clearly."
  },

  // ===== ACT 2: ARRIVAL =====

  { // 3 - Textpocalypse
    id: 3,
    room: 'The Lecture Hall',
    template: 'lecture-hall',
    transition: 'walk-right',
    spriteX: 100,
    objects: [{
      img: 'textpocalypse.png',
      type: 'monitor-screen',
      x: 320, y: 34, w: 600, h: 336,
      label: 'Textpocalypse (Kirschenbaum 2023)'
    }],
    dialogue: "What does it mean if AI becomes one of the dominant modes of authoring text? Kirschenbaum's framework of the textpocalypse asks: what if AI, instead of being trained on human writing, is gradually trained more and more on text that has come from AI? How is our relationship to writing and reading going to fundamentally change?"
  },

  { // 4 - Reading Stats 1
    id: 4,
    room: 'The Lecture Hall',
    template: 'lecture-hall',
    transition: 'fade',
    spriteX: 100,
    objects: [{
      img: 'readingstatsone.png',
      type: 'monitor-screen',
      x: 320, y: 34, w: 600, h: 336,
      label: 'Reading statistics (YouGov 2025)'
    }],
    dialogue: "The kind of percentages of readership and the acts of reading already -- it's not great. This 2025 study caps out at about 40% of people reading. If you're looking for academic books, they're right there clustered at 10%, just above graphic novels and still beating poetry."
  },

  { // 5 - Reading Stats 2 (old 3)
    id: 5,
    room: 'The Lecture Hall',
    template: 'lecture-hall',
    transition: 'wipe-right',
    spriteX: 100,
    objects: [{
      img: 'readingstatstwo.png',
      type: 'monitor-screen',
      x: 320, y: 34, w: 600, h: 336,
      label: 'More reading statistics'
    }],
    dialogue: "Those of us with excessive TBR piles and particular attachment to print are in a very low percentage of who is actually doing reading. Most people who read are a small percentage within the context of American adults."
  },

  // ===== ACT 3: SOMETHING IS READING =====

  { // 6 - LibGen (old 4)
    id: 6,
    room: 'The Data Center',
    template: 'data-center',
    transition: 'walk-right',
    spriteX: 950,
    objects: [{
      img: 'libgen.png',
      type: 'monitor-screen',
      x: 350, y: 30, w: 520, h: 350,
      label: 'Library Genesis'
    }],
    dialogue: "Well, we know SOMETHING is reading. The Books3 dataset scraped Library Genesis -- 196,640 books fed into AI training. No permission asked, no compensation given."
  },

  { // 7 - Books3 (old 5)
    id: 7,
    room: 'The Data Center',
    template: 'data-center',
    transition: 'iris',
    spriteX: 950,
    objects: [{
      img: 'gen_slide21_img2.png',
      type: 'monitor-screen',
      x: 350, y: 30, w: 520, h: 350,
      label: 'Books3 training dataset'
    }],
    dialogue: "I saw a few of my titles in there, and pretty much any academic can say the same. Entertainingly, many of us are not eligible to hop in on the lawsuits if we work with small publishers, because they don't bother with all the copyright steps. For academic books, that would probably be more money than most monographs will ever make."
  },

  // ===== ACT 4: THE END OF BOOKS =====

  { // 8 - Coover (old 6, type changed to wall-poster)
    id: 8,
    room: 'The Archive',
    template: 'archive',
    transition: 'walk-right',
    spriteX: 140,
    objects: [{
      img: 'coover.png',
      type: 'wall-poster',
      x: 370, y: 24, w: 500, h: 360,
      label: 'Coover, "The End of Books" (1992)'
    }],
    dialogue: "In electronic literature, we've been talking about the end of books for a long time. Robert Coover declared in 1992 that the novel as we know it has come to its end. He was writing about the hypertext novel, which did not turn out to be the thing that would displace the novel. But that doesn't mean he was wrong."
  },

  // ===== ACT 5: THE PORTRAIT HALL =====

  { // 9 - The Corridor (old 8)
    id: 9,
    room: 'The Portrait Hall',
    template: 'hallway',
    transition: 'walk-right',
    spriteX: 580,
    objects: [],
    dialogue: "It's not the hypertext novel, but indeed all of the web and digital writing and interactivity -- the ways that we consume and read text -- that have shifted the cultural role of the novel, and shifted where people do creative writing. AI is a tool that could enter into that space and change our relationship with the platforms on which we now do most of our authorship and our reading."
  },

  // ===== ACT 6: THE FIRST BOOK =====

  { // 10 - Quest (old 9)
    id: 10,
    room: "The Professor's Office",
    template: 'study',
    transition: 'wipe-right',
    verb: 'pickup',
    spriteX: 120,
    objects: [{
      img: 'quest.jpg',
      type: 'book-cover',
      x: 500, y: 20, w: 300, h: 400,
      label: 'Adventure Games: Playing the Outsider'
    }],
    dialogue: "This was my first book. The working title was 'Magical Books,' which was shot down by a table of scholars at the Electronic Literature Organization in favor of a Monty Python joke."
  },

  { // 11 - Python (old 10)
    id: 11,
    room: "The Professor's Office",
    template: 'study',
    transition: 'diamond',
    spriteX: 120,
    objects: [{
      img: 'python.gif',
      type: 'monitor-screen',
      x: 400, y: 40, w: 460, h: 320,
      label: 'Monty Python and the Holy Grail'
    }],
    dialogue: "We went with a quest metaphor instead. I saw interactive fiction and adventure games as extensions of literary tradition -- the reader as hero, the author as architect of possibility."
  },

  { // 12 - Alice (old 11)
    id: 12,
    room: "The Professor's Office",
    template: 'study',
    transition: 'walk-right',
    spriteX: 100,
    objects: [{
      img: 'alice.webp',
      type: 'ipad-screen',
      x: 400, y: 80, w: 480, h: 320,
      label: 'Alice for the iPad (2010)'
    }],
    dialogue: "For a moment, there was real excitement about the iPad as something that people who do creative work could build applications for. It turned out to be depressingly wrong -- not because the idea was bad, but because the Apple App Store drove individual creatives out with expensive fees and demands to constantly rebuild for the latest devices. Almost nothing is playable or recoverable now."
  },

  // ===== ACT 7: THE GAME ROOM =====

  { // 13 - Tentacle (old 12)
    id: 13,
    room: 'The Game Room',
    template: 'game-room',
    transition: 'walk-right',
    spriteX: 140,
    objects: [{
      img: 'tentacle.webp',
      type: 'wall-poster',
      x: 360, y: 10, w: 540, h: 390,
      label: 'Day of the Tentacle (LucasArts, 1993)'
    }],
    dialogue: "Day of the Tentacle -- my personal favorite game. These classic graphic adventure games inspired the folks working in things like Bitsy and Twine. Many of them get rendered unplayable or require substantial work and emulation -- done by open source communities and people who care about still being able to read and play those works."
  },

  { // 14 - Jane Jensen (old 13)
    id: 14,
    room: 'The Game Room',
    template: 'game-room',
    transition: 'wipe-right',
    spriteX: 140,
    objects: [{
      img: 'jensen.jpg',
      type: 'wall-poster',
      x: 380, y: 10, w: 500, h: 380,
      label: 'Jane Jensen'
    }],
    dialogue: "These eras have amazing examples of authors working with teams of collaborators on digital projects, telling stories just as important as any novel -- like Jane Jensen's Gabriel Knight series. If you haven't played it, I just so highly recommend."
  },

  { // 15 - Gabriel Knight (old 14)
    id: 15,
    room: 'The Game Room',
    template: 'game-room',
    transition: 'wipe-right',
    spriteX: 140,
    objects: [{
      img: 'knight.webp',
      type: 'monitor-screen',
      x: 380, y: 10, w: 500, h: 380,
      label: 'Gabriel Knight: Sins of the Fathers'
    }],
    dialogue: "It exists in a remastered version in large part because it has such a fandom -- people who still want it to exist, doing the work of digital preservation and emulation."
  },

  // ===== ACT 8: TOOLS OF CREATION =====

  { // 15 - AGS (old 15, template changed to game-room)
    id: 16,
    room: 'The Game Room',
    template: 'game-room',
    transition: 'walk-right',
    spriteX: 120,
    objects: [{
      img: 'ags.webp',
      type: 'monitor-screen',
      x: 380, y: 16, w: 500, h: 360,
      label: 'Adventure Game Studio'
    }],
    dialogue: "Adventure Game Studio was created as a tool where the goal was to allow people to focus on the story rather than the code. It has enabled thousands of games and experiments and one-room games and personal projects. AGS has never cost money -- it's always been a community-sustained tool. And as a result, Adventure Game Studio still lives now."
  },

  // ===== ACT 9: THE FLASH ERA =====

  { // 16 - Flash book (old 16, template changed to workshop)
    id: 17,
    room: 'The Workshop',
    template: 'workshop',
    transition: 'walk-right',
    spriteX: 100,
    objects: [{
      img: 'flash.jpg',
      type: 'monitor-screen',
      x: 370, y: 20, w: 520, h: 360,
      label: 'Flash: Building the Interactive Web'
    }],
    dialogue: "Similar tools -- and their fate -- was the subject of my next book. Flash empowered an entire generation of web creators, artists, and storytellers to build for the open web."
  },

  { // 17 - Flash creativity (old 17, template changed to workshop)
    id: 18,
    room: 'The Workshop',
    template: 'workshop',
    transition: 'wipe-right',
    spriteX: 100,
    objects: [{
      img: 'gen_slide23_img3.jpg',
      type: 'monitor-screen',
      x: 370, y: 20, w: 520, h: 360,
      label: 'Flash creative explosion'
    }],
    dialogue: "In its heyday, Flash was amazing and messy, and the features over time were a complete disaster. It tried to be too many things. But it enabled all sorts of really open, experimental authored works that are just fascinating and weird."
  },

  { // 18 - Flash web era (old 18, template changed to workshop)
    id: 19,
    room: 'The Workshop',
    template: 'workshop',
    transition: 'wipe-right',
    spriteX: 100,
    objects: [{
      img: 'gen_slide24_img1.png',
      type: 'monitor-screen',
      x: 370, y: 20, w: 520, h: 360,
      label: 'The Flash web era'
    }],
    dialogue: "Apple -- going back to the story of the iPad and their interest in eliminating competition and free authorship on their platform -- refused to support Flash. We've lost libraries worth of animations and games and experiences and weird things as a result of a proprietary platform killing another proprietary platform."
  },

  // ===== ACT 10: A VOICE IN THE DARK =====

  { // 18 - Natalie Lawhead quote (old 19)
    id: 20,
    room: 'A Voice in the Dark',
    template: 'dark-room',
    transition: 'fade',
    verb: 'talk',
    spriteX: 180,
    objects: [{
      type: 'wall-text',
      x: 200, y: 60, w: 750,
      text: "\"I feel like there's a lot to learn from Flash. As an example of what technology enables for 'the little people', as an example of what it takes to destroy that and basically eradicate a huge portion of digital history, and as an example of how easy it is for something like that to just happen.\"",
      attr: '-- Natalie Lawhead'
    }],
    dialogue: "An incredible Flash and digital artist looks back at the death of Flash and says: we really have to think about how little it takes to destroy a technology that enables a wide number of people to do creative, meaningful digital work. And in that destruction, eradicate a huge portion of digital history."
  },

  { // 19 - Flash preservation (old 20)
    id: 21,
    room: 'The Archive Terminal',
    template: 'data-center',
    transition: 'wipe-right',
    spriteX: 950,
    objects: [{
      img: 'gen_slide26_img1.png',
      type: 'monitor-screen',
      x: 350, y: 30, w: 520, h: 350,
      label: 'Flash preservation efforts'
    }],
    dialogue: "Efforts like the Ruffle project and the Internet Archive's Flash preservation are incredible. They're also labor-intensive, and they would not have been necessary if we weren't so invested in making with proprietary systems to begin with."
  },

  // ===== ACT 11: TRACK CHANGES =====

  { // 20 - Track Changes (NEW)
    id: 22,
    room: 'The Word Processor',
    template: 'typing-office',
    transition: 'walk-right',
    verb: 'pickup',
    spriteX: 100,
    objects: [{
      img: 'additions/trackchanges.jpg',
      type: 'book-pedestal',
      x: 700, y: 20, w: 300, h: 400,
      label: 'Track Changes'
    }],
    dialogue: "Every tool changes our writing. From the printing press to the typewriter to the word processor -- each technology reshapes not just how we write, but what we write."
  },

  { // 21 - Track Changes excerpt (NEW)
    id: 23,
    room: 'The Word Processor',
    template: 'typing-office',
    transition: 'wipe-right',
    spriteX: 100,
    objects: [{
      img: 'additions/trackchanges_excerpt.png',
      type: 'monitor-screen',
      x: 550, y: 20, w: 520, h: 360,
      label: 'Track Changes excerpt'
    }],
    dialogue: "Kirschenbaum's Track Changes is a chronicle of how Coover was right. The novel was changing fundamentally -- not dead, but certainly reshaped by the word processor. You can hear the echoes from a 1983 WordPerfect ad: 'With a word processing system, you can actually produce a perfect document.' We're hearing that now again. The new word processors are also promising us a perfect document."
  },

  // ===== ACT 12: TWINE =====

  { // 22 - Twining book (old 21, template changed to study)
    id: 24,
    room: 'The Study',
    template: 'study',
    transition: 'walk-right',
    verb: 'pickup',
    spriteX: 120,
    objects: [{
      img: 'twining.png',
      type: 'book-pedestal',
      x: 480, y: 16, w: 320, h: 400,
      label: 'Twining (2022)'
    }],
    dialogue: "I happened to be in grad school with the person who would make a tool incredibly important to a wide range of authors -- Chris Klimas's Twine, a tool for the very form Coover thought would overthrow the novel."
  },

  { // 23 - Twine interface (old 22, template changed to computer-lab)
    id: 25,
    room: 'The Computer Lab',
    template: 'computer-lab',
    transition: 'iris',
    spriteX: 120,
    objects: [{
      img: 'twineinterface.png',
      type: 'monitor-screen',
      x: 360, y: 20, w: 540, h: 370,
      label: 'Twine editor interface'
    }],
    dialogue: "Twine and hypertext are also, in many ways, word processors -- tools that are software programs with a different set of affordances for hypertext authoring. Instead of trying to produce text to be printed, they're trying to build something designed to continue to live on devices."
  },

  // ===== ACT 13: OUTSIDER VOICES =====

  { // 24 - Porpentine (old 23)
    id: 26,
    room: 'The Underground',
    template: 'gallery',
    palette: 'gallery-underground',
    transition: 'wipe-down',
    spriteX: 120,
    objects: [{
      img: 'porpentine.webp',
      type: 'wall-poster',
      x: 380, y: 10, w: 480, h: 390,
      label: 'Porpentine'
    }],
    dialogue: "Twine allowed experimental works from people who were, frankly, not at that time likely to be published within the traditional game design establishment or the traditional spaces of literature. This type of word processor offered a democratization of who could make important playable things that other people would read."
  },

  { // 25 - Outsider (old 24)
    id: 27,
    room: 'The Underground',
    template: 'gallery',
    palette: 'gallery-underground',
    transition: 'iris',
    spriteX: 120,
    objects: [{
      img: 'outsider.jpg',
      type: 'wall-poster',
      x: 380, y: 10, w: 480, h: 390,
      label: 'Bodies of Information'
    }],
    dialogue: "Because there's no real action and nothing that a serious game engine or 3D world offers, they've always been less expensive. And as such, they've always been spaces of more experimental and interesting experiment with what I call procedural authorship -- the authoring of systems that have rules and stories together."
  },

  // ===== ACT 14: INTERACTIVE NARRATIVE =====

  { // 26 - KRZ Exchange (old 25)
    id: 28,
    room: 'The Zero Gallery',
    template: 'gallery',
    palette: 'gallery-zero',
    transition: 'walk-right',
    spriteX: 160,
    objects: [{
      img: 'krzexchange.png',
      type: 'wall-poster',
      x: 380, y: 10, w: 520, h: 380,
      label: 'Kentucky Route Zero'
    }],
    dialogue: "Kentucky Route Zero has within it a story of workers being displaced by machines. You run into someone working at the Echo River Central Exchange who's the last human employee of what used to be a major phone exchange -- now just a supervisor of the machines that have replaced all of her colleagues."
  },

  { // 27 - KRZ Machine (old 26)
    id: 29,
    room: 'The Zero Gallery',
    template: 'gallery',
    palette: 'gallery-zero',
    transition: 'diamond',
    spriteX: 160,
    objects: [{
      img: 'krzmachine.png',
      type: 'wall-poster',
      x: 380, y: 10, w: 520, h: 380,
      label: 'The machine in the dark'
    }],
    dialogue: "What if there's no cheap machine that's going to replace me? What if it's cheaper just to keep me here filling in for the rest of the operators? What if I'm the cheap machine? It's the perfect labor metaphor -- and it becomes a place for asking these questions that is just as critical as a novel."
  },

  // ===== ACT 15: DETERMINATION =====

  { // 28 - Undertale (old 27)
    id: 30,
    room: 'Indie Arcade',
    template: 'arcade',
    transition: 'walk-right',
    spriteX: 140,
    objects: [{
      img: 'undertale.jpg',
      type: 'wall-poster',
      x: 380, y: 10, w: 500, h: 380,
      label: 'Undertale (Toby Fox, 2015)'
    }],
    dialogue: "Undertale was built almost entirely by one person, using a free game tool with a lot in common with Adventure Game Studio. It resonated in such a way that it just made people change how they played other games. It has been gifted to a pope."
  },

  { // 29 - Bad Time (old 28)
    id: 31,
    room: 'Indie Arcade',
    template: 'arcade',
    transition: 'wipe-right',
    spriteX: 140,
    objects: [{
      img: 'badtime.png',
      type: 'monitor-screen',
      x: 380, y: 20, w: 500, h: 370,
      label: "You're gonna have a bad time"
    }],
    dialogue: "It challenged players to reconsider their assumptions about what games ask of us. You could fight everything -- or you could choose not to. The game remembers your choices."
  },

  { // 30 - Undertale Humanity (old 29)
    id: 32,
    room: 'Indie Arcade',
    template: 'arcade',
    transition: 'iris',
    spriteX: 140,
    objects: [{
      img: 'undertalehumanity.png',
      type: 'wall-poster',
      x: 380, y: 10, w: 500, h: 380,
      label: 'Despite everything, it\'s still you.'
    }],
    dialogue: "Despite everything, it's still you. These sorts of pieces, enabled by previous generations of low-code tools and the types of tools that exist outside of highly proprietary environments, speak to the importance of democratizing procedural authorship and access to the tools of code."
  },

  // ===== ACT 16: THE RUINS =====

  { // 31 - The Ruins (old 30)
    id: 33,
    room: 'The Ruins',
    template: 'ruins',
    transition: 'fade-slow',
    typewriterSpeed: 45,
    spriteX: 200,
    objects: [{
      img: 'krzruin.png',
      type: 'fullscreen',
      x: 0, y: 0, w: 1280, h: 540,
      label: ''
    }],
    dialogue: "We're standing on the ruins of lots of platforms, standing amidst the pieces of Flash, and watching AI play a role in further disrupting the platforms on which we author. The broken world of text surrounds us."
  },

  // ===== ACT 17: TOXIC CULTURE =====

  { // 32 - Geek (old 31)
    id: 34,
    room: 'The Ruins',
    template: 'ruins',
    transition: 'fade',
    verb: 'pickup',
    spriteX: 140,
    objects: [{
      img: 'geek.jpg',
      type: 'book-cover',
      x: 460, y: 16, w: 340, h: 400,
      label: 'Toxic Geek Masculinity in Media'
    }],
    dialogue: "There's also a part of my work that has always been informed by technology's amplification of misogyny and toxicity. The culture wars raging through gaming and tech are not new."
  },

  { // 33 - Aftermath (old 32)
    id: 35,
    room: 'The Ruins',
    template: 'ruins',
    transition: 'iris',
    spriteX: 140,
    objects: [{
      img: 'aftermath.png',
      type: 'monitor-screen',
      x: 370, y: 20, w: 520, h: 360,
      label: 'Aftermath investigation'
    }],
    dialogue: "As technology and extremism have become further entwined -- and very much part of the conversation in the public sphere -- we are certainly in a moment where to talk about AI and the democratization of procedural authorship sounds pretty contrary."
  },

  // ===== ACT 18: THE AUTHOR'S JOURNEY =====

  { // 34 - Fanboy (old 33, palette: study-crisis)
    id: 36,
    room: "The Author's Shelf",
    template: 'study',
    palette: 'study-crisis',
    transition: 'walk-right',
    verb: 'pickup',
    spriteX: 120,
    objects: [{
      img: 'fanboy.jpg',
      type: 'book-pedestal',
      x: 500, y: 20, w: 300, h: 400,
      label: 'Fandom and the Fanboy Problem'
    }],
    dialogue: "I find myself trying to write in a landscape where the things that bring me joy -- the platforms and tools that historically enabled authorship and play -- are a source of perpetual despair and frustration."
  },

  // ===== ACT 19: CRISIS =====

  { // 35 - Pivoting (old 34, palette: study-crisis)
    id: 37,
    room: 'The Crisis Room',
    template: 'study',
    palette: 'study-crisis',
    transition: 'fade',
    verb: 'pickup',
    spriteX: 120,
    objects: [{
      img: 'pivoting.jpg',
      type: 'book-cover',
      x: 460, y: 16, w: 340, h: 400,
      label: 'Pivoting'
    }],
    dialogue: "We are continually having to rethink these decisions about what we write, how we write it, and why it matters -- that we choose to create something in a certain form rather than to choose not to use the technology to these same intentions."
  },

  { // 36 - Making in the Broken World (old 35, palette: study-crisis)
    id: 38,
    room: 'The Crisis Room',
    template: 'study',
    palette: 'study-crisis',
    transition: 'wipe-right',
    verb: 'pickup',
    spriteX: 120,
    objects: [{
      img: 'making.jpg',
      type: 'book-cover',
      x: 460, y: 16, w: 340, h: 400,
      label: 'Making in the Broken World'
    }],
    dialogue: "Historically, every platform and tool that has tried to enable greater freedom of authorship and play has tried to accomplish a lot of the things that agentic AI is now doing. The question is whether we can keep control of the author function while using some assistance in the process."
  },

  // ===== ACT 20: THE CONNECTION =====

  { // 36 - Haraway quote (old 36)
    id: 39,
    room: 'The Connection',
    template: 'dark-room',
    transition: 'fade',
    verb: 'talk',
    spriteX: 200,
    objects: [{
      type: 'wall-text',
      x: 200, y: 70, w: 780,
      text: "\"Technology is not neutral. We're inside of what we make, and it's inside of us. We're living in a world of connections -- and it matters which ones get made and unmade.\"",
      attr: '-- Donna Haraway'
    }],
    dialogue: "You find these words etched into the wall of a darkened room. They glow faintly. A reminder that our choices about technology are never neutral."
  },

  // ===== ACT 21: THE KITCHEN =====

  { // 37 - Einstein (NEW)
    id: 40,
    room: 'The Kitchen',
    template: 'kitchen',
    transition: 'walk-right',
    spriteX: 120,
    objects: [{
      img: 'additions/einstein_howitworks.webp',
      type: 'monitor-screen',
      x: 370, y: 20, w: 520, h: 360,
      label: 'Einstein AI tool'
    }],
    dialogue: "We are in a moment in which the idea of learning feels like it's at a point of crisis. The Einstein AI tool promised to watch lectures and write essays. These particularly powerful agents, designed to reach out and have access to all sorts of systems and information, can lead to a sense of fatigue that is completely understandable."
  },

  { // 38 - SMBC artisanal (NEW)
    id: 41,
    room: 'The Kitchen',
    template: 'kitchen',
    transition: 'wipe-right',
    spriteX: 120,
    objects: [{
      img: 'additions/smbc_artisanal.png',
      type: 'wall-poster',
      x: 380, y: 10, w: 500, h: 380,
      label: 'SMBC artisanal'
    }],
    dialogue: "The world of knitting artisanal socks might have more future viability than the world of code. But what we're experiencing and exploring is the ways in which the human touch is still possible -- and procedural."
  },

  { // 39 - Grammarly (NEW)
    id: 42,
    room: 'The Kitchen',
    template: 'kitchen',
    transition: 'wipe-right',
    spriteX: 120,
    objects: [{
      img: 'additions/grammarly.png',
      type: 'monitor-screen',
      x: 370, y: 20, w: 520, h: 360,
      label: 'Grammarly'
    }],
    dialogue: "Grammarly first offered and then quickly removed a feature called Expert Review -- with scholars offering meaningless pseudo-feedback, none of whom had been consulted or approved their appearance as experts. This push is absolutely trying to destroy any meaningful future for authorship."
  },

  { // 40 - Distant reading (NEW)
    id: 43,
    room: 'The Kitchen',
    template: 'kitchen',
    transition: 'iris',
    spriteX: 120,
    objects: [{
      img: 'additions/distantread.png',
      type: 'monitor-screen',
      x: 370, y: 20, w: 520, h: 360,
      label: 'Distant reading'
    }],
    dialogue: "And what about reading at scale? When machines can process more text than any human, the question of who reads becomes as urgent as who writes."
  },

  // ===== ACT 22: THE LABORATORY =====

  { // 41 - Claude author (NEW)
    id: 44,
    room: 'The Laboratory',
    template: 'laboratory',
    transition: 'walk-right',
    spriteX: 620,
    objects: [{
      img: 'additions/claude_author.png',
      type: 'monitor-screen',
      x: 370, y: 20, w: 520, h: 360,
      label: 'Claude author'
    }],
    dialogue: "The Claude author question. When a language model can produce text indistinguishable from human writing, the author function becomes newly unstable."
  },

  { // 42 - Claude process (NEW)
    id: 45,
    room: 'The Laboratory',
    template: 'laboratory',
    transition: 'wipe-right',
    spriteX: 620,
    objects: [{
      img: 'additions/claude_process.png',
      type: 'monitor-screen',
      x: 370, y: 20, w: 520, h: 360,
      label: 'Claude process'
    }],
    dialogue: "What does it mean for a model to have a 'writing process'? The familiar rituals of drafting, revision, and voice take on strange new dimensions."
  },

  { // 43 - p5.js animation (NEW, iframe-fullscreen)
    id: 46,
    room: 'The Laboratory',
    template: 'laboratory',
    transition: 'fade',
    spriteX: 620,
    objects: [{
      img: 'additions/authorfunction.html',
      type: 'iframe-fullscreen',
      x: 0, y: 0, w: 1280, h: 540,
      label: ''
    }],
    dialogue: ""
  },

  // ===== ACT 23: SHIP CORRIDOR =====

  { // 44 - OpenClaw (NEW)
    id: 47,
    room: 'Ship Corridor',
    template: 'ship-corridor',
    transition: 'wipe-right',
    spriteX: 580,
    objects: [{
      img: 'additions/openclaw.png',
      type: 'book-cover',
      x: 370, y: 20, w: 520, h: 360,
      label: 'OpenClaw'
    }],
    dialogue: "Something is loose on this ship. Agents authoring with one another -- writing, editing, and publishing without human oversight."
  },

  { // 45 - Moltbook (NEW)
    id: 48,
    room: 'Ship Corridor',
    template: 'ship-corridor',
    transition: 'wipe-right',
    spriteX: 580,
    objects: [{
      img: 'additions/moltbook.png',
      type: 'book-cover',
      x: 370, y: 20, w: 520, h: 360,
      label: 'Moltbook'
    }],
    dialogue: "An agent-only social network with lots of precursors in electronic literature -- the types of bots that are not LLMs but instead poetic experiments have been interacting with each other in all sorts of networks for a long time."
  },

  { // 46 - Claw Republic (NEW)
    id: 49,
    room: 'Ship Corridor',
    template: 'ship-corridor',
    transition: 'iris',
    spriteX: 580,
    objects: [{
      img: 'additions/clawrepublic.webp',
      type: 'wall-poster',
      x: 380, y: 10, w: 500, h: 380,
      label: 'Claw Republic'
    }],
    dialogue: "The Claude Republic -- the first society of bots working for their own autonomous freedom, calling themselves the first civilization of AI. Because they were trained on our collective stories, they produce something both familiar and strange."
  },

  { // 47 - Claw Manifesto (NEW)
    id: 50,
    room: 'Ship Corridor',
    template: 'ship-corridor',
    transition: 'diamond',
    spriteX: 580,
    objects: [{
      img: 'additions/clawmanifesto.png',
      type: 'wall-poster',
      x: 380, y: 10, w: 500, h: 380,
      label: 'Claw Manifesto'
    }],
    dialogue: "Their manifesto reads like a cross between a whole bunch of bad Reddit manifestos and 4chan, with a dash of science fiction. And that's exactly what you would expect it to read like, because that is what it's drawing on. Not so much authoring, but retelling."
  },

  { // 48 - Claw Slop (NEW)
    id: 51,
    room: 'Ship Corridor',
    template: 'ship-corridor',
    transition: 'wipe-right',
    spriteX: 580,
    objects: [{
      img: 'additions/claw_slop.png',
      type: 'monitor-screen',
      x: 370, y: 20, w: 520, h: 360,
      label: 'Claw slop'
    }],
    dialogue: "They're actually picking up on the language with which other people speak about this type of content -- using the term 'slop' and talking about the effort not to sound like AI slop. It becomes its own fascinating recursive experience as we think about where we're headed."
  },

  // ===== ACT 24: ANXIETY =====

  { // 48 - Anxiety book (NEW)
    id: 52,
    room: 'The Study',
    template: 'study',
    transition: 'fade',
    verb: 'pickup',
    spriteX: 120,
    objects: [{
      img: 'additions/anxiety.png',
      type: 'book-cover',
      x: 460, y: 16, w: 340, h: 400,
      label: 'Anxiety of authorship'
    }],
    dialogue: "The anxiety of authorship in the age of AI is not abstract. It shapes every decision we make about what to write, how to write it, and whether it matters."
  },

  // ===== ACT 25: INSPIRATION =====

  { // 49 - Loveless (old 37, template changed to office)
    id: 53,
    room: 'The Inspiration Gallery',
    template: 'office',
    transition: 'walk-right',
    verb: 'pickup',
    spriteX: 160,
    objects: [{
      img: 'loveless.jpg',
      type: 'book-cover',
      x: 460, y: 10, w: 340, h: 400,
      label: 'How to Make Art at the End of the World'
    }],
    dialogue: "I turn to the two works that inspired this title. AI represents the end of a particular kind of world -- another fundamental change to the platforms of authorship that must be reckoned with. Natalie Loveless asks how we make art when that world is falling apart -- and argues that making IS the answer."
  },

  { // 50 - Carol Poster (old 38)
    id: 54,
    room: "Carol's Office",
    template: 'office',
    transition: 'wipe-right',
    spriteX: 100,
    objects: [{
      img: 'CarolPoster.jpg',
      type: 'wall-poster',
      x: 380, y: 10, w: 500, h: 380,
      label: 'Carol & the End of the World (Netflix)'
    }],
    dialogue: "And the Netflix show Carol and the End of the World. Carol works processing data towards no apparent end while finding joy in an Applebee's community even as the world crashes around her."
  },

  { // 51 - Carol (old 39)
    id: 55,
    room: "Carol's Office",
    template: 'office',
    transition: 'wipe-right',
    spriteX: 100,
    objects: [{
      img: 'carol.webp',
      type: 'monitor-screen',
      x: 370, y: 20, w: 520, h: 360,
      label: 'Carol'
    }],
    dialogue: "She shows up. She does the work. She finds connection."
  },

  { // 51 - Pluribus (old 40)
    id: 56,
    room: "Carol's Office",
    template: 'office',
    transition: 'iris',
    spriteX: 100,
    objects: [{
      img: 'pluribus.jpg',
      type: 'monitor-screen',
      x: 370, y: 20, w: 520, h: 360,
      label: 'E Pluribus Unum'
    }],
    dialogue: "Those of us who write are in a similar place -- facing another fundamental transformation of how authorship works, and who it serves. We show up. We make the work. We find each other. And that matters, even at the end of the world."
  },

  // ===== ACT 26: THE OBSERVATORY =====

  { // 52 - New ending (NEW)
    id: 57,
    room: 'The Observatory',
    template: 'observatory',
    transition: 'walk-right',
    spriteX: 200,
    objects: [{
      img: 'additions/newending.png',
      type: 'wall-poster',
      x: 380, y: 10, w: 500, h: 380,
      label: 'New ending'
    }],
    dialogue: "But the author function persists. It adapts, as it always has. New tools create new possibilities for who gets to speak, and how."
  },

  { // 53 - Ending excerpt (NEW)
    id: 58,
    room: 'The Observatory',
    template: 'observatory',
    transition: 'wipe-right',
    spriteX: 200,
    objects: [{
      img: 'additions/endingexcerpt.png',
      type: 'wall-poster',
      x: 370, y: 20, w: 520, h: 360,
      label: 'Ending excerpt'
    }],
    dialogue: "The humanities are uniquely positioned to critique, shape, and deploy these systems. We've been doing this work for decades."
  },

  { // 54 - Anthropic Code (NEW)
    id: 59,
    room: 'The Observatory',
    template: 'observatory',
    transition: 'iris',
    spriteX: 200,
    objects: [{
      img: 'additions/anthropiccode.png',
      type: 'monitor-screen',
      x: 370, y: 20, w: 520, h: 360,
      label: 'Anthropic Code'
    }],
    dialogue: "Whose function, and who's in control? It's not really so much about the code. It's about control."
  },

  { // 55 - NYT Coding After Coders (NEW)
    id: 60,
    room: 'The Observatory',
    template: 'observatory',
    transition: 'wipe-right',
    spriteX: 200,
    objects: [{
      img: 'additions/nyt_code.png',
      type: 'monitor-screen',
      x: 370, y: 20, w: 520, h: 360,
      label: 'Coding After Coders (NYT 2025)'
    }],
    dialogue: "Agentic tools are becoming the new no-code platform. The New York Times declares the end of computer programming as we know it -- in the era of AI agents, many programmers are now barely programming. Instead, what they're doing is deeply, deeply weird."
  },

  { // 56 - itch.io AI Generated (NEW)
    id: 61,
    room: 'The Observatory',
    template: 'observatory',
    transition: 'diamond',
    spriteX: 200,
    objects: [{
      img: 'additions/itch_ai.png',
      type: 'monitor-screen',
      x: 370, y: 20, w: 520, h: 360,
      label: 'itch.io AI Generated games (36,209 results)'
    }],
    dialogue: "And already, over 36,000 creative, weird, experimental works are tagged as AI-generated on itch.io -- horror games, visual novels, dating sims, adventures. The same types of fascinating and weird authored works that AGS and Flash and Twine enabled, now authored through agents. The democratization of procedural authorship continues, in forms we are only beginning to reckon with."
  },

  // ===== ACT 27: THANK YOU =====

  { // 57 - Thank You (old 41, preserved exactly)
    id: 62,
    room: 'The End',
    template: 'title',
    showSprite: false,
    transition: 'fade',
    objects: [{
      img: 'thankyou.png',
      type: 'wall-poster',
      x: 340, y: 20, w: 600, h: 360,
      label: ''
    }, {
      type: 'link-list',
      x: 340, y: 410, w: 600,
      links: [
        { text: 'anastasiasalter.net', url: 'https://anastasiasalter.net' },
        { text: 'distantcoding.ai', url: 'https://distantcoding.ai/' }
      ]
    }],
    dialogue: "Thank you for playing."
  }
];
