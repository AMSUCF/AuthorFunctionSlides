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
      x: 200, y: 60, w: 750,
      text: "\"The 'author-function' is not universal or constant in all discourse. Even within our civilization, the same types of texts have not always required authors; there was a time when those texts which we now call 'literary' (stories, folk tales, epics and tragedies) were accepted, circulated and valorized without any questions about the identity of their author.\"",
      attr: "-- Michel Foucault, 'What Is an Author?' (1969)"
    }],
    dialogue: "You enter a vast library. On the wall, a passage catches your eye -- words written over half a century ago that feel newly urgent."
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
      x: 200, y: 60, w: 750,
      text: "\"Computers don't actually think. You just think they think. (We think.)\"",
      attr: '-- Ted Nelson'
    }],
    dialogue: "Another inscription, from a different era of computing. A reminder of what machines do and don't do."
  },

  // ===== ACT 2: ARRIVAL =====

  { // 3 - Lecture Hall intro (dialogue only from old 2)
    id: 3,
    room: 'The Lecture Hall',
    template: 'lecture-hall',
    transition: 'walk-right',
    spriteX: 100,
    objects: [],
    dialogue: "The implied follow-up -- does anyone read academic monographs? -- points to a broader cultural anxiety. The forms of writing we celebrate tonight are all, we are told, suffering from a decline in audience."
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
    dialogue: "You arrive at the University of Central Florida on a warm Florida evening. Tonight's Faculty Author Celebration asks a question you are frequently asked: Why do you keep writing books?"
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
    dialogue: "Headlines proclaim the death of literacy and the steady erosion of reading for pleasure. This alleged death of reading, exaggerated though it may be, arrives at a moment when computational tools are expanding rapidly."
  },

  // ===== ACT 3: SOMETHING IS READING =====

  { // 6 - LibGen (old 4)
    id: 6,
    room: 'The Data Center',
    template: 'data-center',
    transition: 'walk-right',
    spriteX: 620,
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
    spriteX: 620,
    objects: [{
      img: 'gen_slide21_img2.png',
      type: 'monitor-screen',
      x: 350, y: 30, w: 520, h: 350,
      label: 'Books3 training dataset'
    }],
    dialogue: "Your books might be in there. Large language models are marketed as bringing 'PhD-level intelligence' to their tasks. How do we reckon with authorship in the age of AI?"
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
    dialogue: "In electronic literature, we've been talking about the end of books for a long time. Robert Coover's 1992 New York Times essay declared the hypertext novel would overthrow print. That... didn't happen."
  },

  // ===== ACT 5: THE PORTRAIT HALL =====

  { // 9 - The Corridor (old 8)
    id: 9,
    room: 'The Portrait Hall',
    template: 'hallway',
    transition: 'walk-right',
    spriteX: 580,
    objects: [],
    dialogue: "But what happened instead was a different story: one shaped by the platforms on which we author and read, and the question of who controls them. Let me take you through that journey -- with apologies for the navelgazing."
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
    dialogue: "The Alice iPad app was a hit in 2010. This is perhaps hard to imagine now. But I saw this as an extension of the adventure games I grew up on, a new platform for old dreams of interactive storytelling."
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
    dialogue: "I was interested in the tools that made these games and who they empowered. Adventure games were the subject of much of my graduate research -- LucasArts, Sierra, the golden age of point-and-click."
  },

  { // 14 - Jensen + Knight (MERGED old 13+14)
    id: 14,
    room: 'The Game Room',
    template: 'game-room',
    transition: 'wipe-right',
    spriteX: 140,
    objects: [{
      img: 'jensen.jpg',
      type: 'wall-poster',
      x: 450, y: 60, w: 380, h: 380,
      label: 'Jane Jensen'
    }, {
      img: 'knight.webp',
      type: 'book-cover',
      x: 850, y: 120, w: 300, h: 300,
      label: 'Gabriel Knight: Sins of the Fathers'
    }],
    dialogue: "One of the few women making games in that era was Jane Jensen. Her Gabriel Knight series inspired a generation of creators. Those games inspired people to make not only their own games, but the tools that would allow others to control authorship."
  },

  // ===== ACT 8: TOOLS OF CREATION =====

  { // 15 - AGS (old 15, template changed to game-room)
    id: 15,
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
    dialogue: "Adventure Game Studio became one of those tools -- a creative platform that put game-making into the hands of anyone with a story to tell. The democratization of authorship through software."
  },

  // ===== ACT 9: THE FLASH ERA =====

  { // 16 - Flash book (old 16, template changed to workshop)
    id: 16,
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

  { // 17 - Flash creativity + web (MERGED old 17+18, template changed to workshop)
    id: 17,
    room: 'The Workshop',
    template: 'workshop',
    transition: 'wipe-right',
    spriteX: 100,
    objects: [{
      img: 'gen_slide23_img3.jpg',
      type: 'monitor-screen',
      x: 400, y: 50, w: 380, h: 300,
      label: 'Flash creative explosion'
    }, {
      img: 'gen_slide24_img1.png',
      type: 'monitor-screen',
      x: 820, y: 50, w: 380, h: 300,
      label: 'The Flash web era'
    }],
    dialogue: "Flash enabled anyone to build interactive experiences. It was messy and democratic and endlessly creative. And then it was taken away. A proprietary platform killed by another proprietary platform."
  },

  // ===== ACT 10: A VOICE IN THE DARK =====

  { // 18 - Natalie Lawhead quote (old 19)
    id: 18,
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
    dialogue: "A voice echoes through the dark archive. It speaks of what was lost -- and how easily it was lost."
  },

  { // 19 - Flash preservation (old 20)
    id: 19,
    room: 'The Archive Terminal',
    template: 'data-center',
    transition: 'wipe-right',
    spriteX: 620,
    objects: [{
      img: 'gen_slide26_img1.png',
      type: 'monitor-screen',
      x: 350, y: 30, w: 520, h: 350,
      label: 'Flash preservation efforts'
    }],
    dialogue: "The history of Flash preservation reminds us how much we need to support open data. It's a reminder of the consequences of over-investing in any proprietary system, especially one that compiles and hides its source code."
  },

  // ===== ACT 11: TRACK CHANGES =====

  { // 20 - Track Changes (NEW)
    id: 20,
    room: 'The Typing Office',
    template: 'typing-office',
    transition: 'walk-right',
    verb: 'pickup',
    spriteX: 100,
    objects: [{
      img: 'additions/trackchanges.jpg',
      type: 'book-pedestal',
      x: 500, y: 20, w: 300, h: 400,
      label: 'Track Changes'
    }],
    dialogue: "Every tool changes our writing. From the printing press to the typewriter to the word processor -- each technology reshapes not just how we write, but what we write."
  },

  { // 21 - Track Changes excerpt (NEW)
    id: 21,
    room: 'The Typing Office',
    template: 'typing-office',
    transition: 'wipe-right',
    spriteX: 100,
    objects: [{
      img: 'additions/trackchanges_excerpt.png',
      type: 'monitor-screen',
      x: 370, y: 20, w: 520, h: 360,
      label: 'Track Changes excerpt'
    }],
    dialogue: "Track Changes explored how word processors shaped literature itself -- from the way we draft to the way we think about revision. Now the tools are writing back."
  },

  // ===== ACT 12: TWINE =====

  { // 22 - Twining book (old 21, template changed to study)
    id: 22,
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
    id: 23,
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
    dialogue: "Twine put hypertext authoring into the hands of anyone who could write. It became what Coover dreamed of -- except made by everyone, not just the literary establishment."
  },

  // ===== ACT 13: OUTSIDER VOICES =====

  { // 24 - Porpentine (old 23)
    id: 24,
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
    dialogue: "Porpentine's Twine work opened doors for voices previously excluded from game creation. The personal became playable, the marginal became central. Twine gave outsiders a way in."
  },

  { // 25 - Outsider (old 24)
    id: 25,
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
    dialogue: "I wrote about the types of games that outsiders create, and the stories they make possible. When the barriers to creation are lowered, entirely new forms of expression emerge."
  },

  // ===== ACT 14: INTERACTIVE NARRATIVE =====

  { // 26 - KRZ Exchange (old 25)
    id: 26,
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
    dialogue: "This fascination with the type of stories that technology enables has continued to be at the heart of my work. Kentucky Route Zero is a story of workers displaced by machines -- a cycle that replays across every era of technological change. Magical realism made painfully relevant."
  },

  { // 27 - KRZ Machine (old 26)
    id: 27,
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
    dialogue: "A machine hums in the dark, doing the work that people once did. From the loom to the assembly line to the language model, these cycles of displacement replay. Each time we are told the disruption is unprecedented. Each time, the people displaced are asked to adapt or disappear."
  },

  // ===== ACT 15: DETERMINATION =====

  { // 28 - Undertale (old 27)
    id: 28,
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
    dialogue: "Undertale proved that deeply human stories could emerge from the simplest tools of play. A game about mercy in a medium built around conflict."
  },

  { // 29 - Bad Time (old 28)
    id: 29,
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
    id: 30,
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
    dialogue: "Despite everything, it's still you. Games like these remind us that the medium itself is not the message -- it's what we choose to do with it."
  },

  // ===== ACT 16: THE RUINS =====

  { // 31 - The Ruins (old 30)
    id: 31,
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
    dialogue: "...which brings us to the end of the world. The ruins of our platforms remind us what we've already lost. But ruins can also be places of possibility."
  },

  // ===== ACT 17: TOXIC CULTURE =====

  { // 32 - Geek (old 31)
    id: 32,
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
    id: 33,
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
    dialogue: "The sequel, Toxic Geek Masculinity 2.0, is... not going well. The problems have only deepened as technology and extremism have become further entwined. The Epstein files confirmed connections between tech billionaires and the worst impulses of the industry."
  },

  // ===== ACT 18: THE AUTHOR'S JOURNEY =====

  { // 34 - Fanboy (old 33, palette: study-crisis)
    id: 34,
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

  { // 35 - Pivoting + Making (MERGED old 34+35, palette: study-crisis)
    id: 35,
    room: 'The Crisis Room',
    template: 'study',
    palette: 'study-crisis',
    transition: 'fade',
    verb: 'pickup',
    spriteX: 120,
    objects: [{
      img: 'pivoting.jpg',
      type: 'book-cover',
      x: 450, y: 100, w: 300, h: 360,
      label: 'Pivoting'
    }, {
      img: 'making.jpg',
      type: 'book-cover',
      x: 800, y: 100, w: 300, h: 360,
      label: 'Making in the Broken World'
    }],
    dialogue: "How do we talk about making, or writing, in a landscape of economic anxiety, labor displacement, environmental devastation, and political pressures pushing for anti-intellectualism? And less reading than ever? These questions aren't abstract -- they shape every decision we make about what to write, how to write it, and why it matters."
  },

  // ===== ACT 20: THE CONNECTION =====

  { // 36 - Haraway quote (old 36)
    id: 36,
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
    id: 37,
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
    dialogue: "The artisanal craft of the essay, or of code. The experts would not agree on what counts as authentic authorship. Ironically, even the Einstein AI tool disappeared over a dispute about its name."
  },

  { // 38 - SMBC artisanal (NEW)
    id: 38,
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
    dialogue: "The artisanal essay. The artisanal code. Every new tool threatens someone's claim to craftsmanship."
  },

  { // 39 - Grammarly (NEW)
    id: 39,
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
    dialogue: "Writing tools have always positioned themselves as invisible helpers. But every tool encodes assumptions about what 'good writing' looks like."
  },

  { // 40 - Distant reading (NEW)
    id: 40,
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
    id: 41,
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
    id: 42,
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
    id: 43,
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
    id: 44,
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
    id: 45,
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
    dialogue: "The best of Moltbook showed what happens when AI agents collaborate on creative projects. The results were strange, compelling, and deeply unsettling."
  },

  { // 46 - Claw Republic (NEW)
    id: 46,
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
    dialogue: "A republic of autonomous agents, each with its own voice and agenda. The author function fractures into something collective and distributed."
  },

  { // 47 - Manifesto + Slop (NEW)
    id: 47,
    room: 'Ship Corridor',
    template: 'ship-corridor',
    transition: 'diamond',
    spriteX: 580,
    objects: [{
      img: 'additions/clawmanifesto.png',
      type: 'wall-poster',
      x: 420, y: 50, w: 350, h: 340,
      label: 'Claw Manifesto'
    }, {
      img: 'additions/claw_slop.png',
      type: 'monitor-screen',
      x: 830, y: 50, w: 350, h: 340,
      label: 'Claw slop'
    }],
    dialogue: "But multi-agent authorship also produces slop -- the inevitable byproduct of systems optimized for output over meaning. The manifesto and the noise exist side by side."
  },

  // ===== ACT 24: ANXIETY =====

  { // 48 - Anxiety book (NEW)
    id: 48,
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
    id: 49,
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

  { // 50 - Carol Poster + Carol (MERGED old 38+39, template: office)
    id: 50,
    room: "Carol's Office",
    template: 'office',
    transition: 'wipe-right',
    spriteX: 100,
    objects: [{
      img: 'CarolPoster.jpg',
      type: 'wall-poster',
      x: 420, y: 50, w: 350, h: 340,
      label: 'Carol & the End of the World (Netflix)'
    }, {
      img: 'carol.webp',
      type: 'monitor-screen',
      x: 830, y: 50, w: 350, h: 340,
      label: 'Carol'
    }],
    dialogue: "And the Netflix show Carol and the End of the World. Carol works processing data towards no apparent end while finding joy in an Applebee's community even as the world crashes around her. She shows up. She does the work. She finds connection."
  },

  { // 51 - Pluribus (old 40)
    id: 51,
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
    id: 52,
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
    id: 53,
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
    id: 54,
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
    dialogue: "The interface is neither neutral nor inevitable. And the people who understand stories, language, and power are exactly who should be shaping what comes next."
  },

  // ===== ACT 27: THANK YOU =====

  { // 55 - Thank You (old 41, preserved exactly)
    id: 55,
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
