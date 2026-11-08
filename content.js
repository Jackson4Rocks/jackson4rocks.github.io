window.PORTFOLIO_CONTENT = {
  identity: {
    name: "Leon Sony",
    handle: "@jackson4rocks",
    github: "https://github.com/Jackson4Rocks",
    email: "leonsonyk@gmail.com",
    avatar: "https://avatars.githubusercontent.com/u/192235822?v=4&s=256",
    offline: "Currently offline — Back in March 2027"
  },
  hero: {
    intro: "I'm Leon — a developer working across Linux and Android. I build apps, desktop environments, Android TV experiences and low-level experiments, and I like making software feel right from the surface down.",
    marquee: ["Linux", "Android", "Low-level", "Open source", "Wayland", "Android TV", "System tooling", "Desktop environments"],
    editor: [
      { kind:"comment", text:"-- ~/.nvim/leon.profile" },
      { kind:"keyword", text:"local", key:"leon", suffix:" = {" },
      { kind:"field", key:"name", value:'"Leon Sony"', comma:true },
      { kind:"field", key:"handle", value:'"Jackson4Rocks"', comma:true },
      { kind:"field", key:"role", value:'"Linux & Android developer"', comma:true },
      { kind:"field", key:"os", value:'"Arch Linux"', comma:true },
      { kind:"field", key:"editor", value:'"Neovim"', comma:true },
      { kind:"field", key:"focus", value:'{ "linux", "android", "low-level" }', comma:true },
      { kind:"field", key:"building", value:'{ "GlyphOS", "Cipher" }', comma:true },
      { kind:"field", key:"status", value:'"offline · back 2027-03"', comma:true },
      { kind:"field", key:"motto", value:'"build · break · fix"', comma:false },
      { kind:"plain", text:"}" },
      { kind:"keyword", text:"return", key:"leon" }
    ]
  },
  about: {
    headingA:"Make it work.",
    headingB:"Then make it feel right.",
    sideIntro:"Linux and Android are the main lanes, but the part I enjoy most is finding out how each layer fits together — reading logs, tracing a bug, and learning a new layer the hard way when the easy one isn't enough.",
    intro:"I'm Leon. I work on Android apps, Android TV experiences, Linux desktop projects and low-level platform experiments — from small utilities to an entire desktop shell.",
    philosophy:"I care about functional software with a considered interface: clear interactions, useful defaults, and being honest about what works and what's still a prototype. Most of it is open source, so the code, current state and next steps are visible.",
    interests:[
      "Linux desktops, Wayland & compositors",
      "Android apps for phones, watches and TVs",
      "Low-level work and device bring-up",
      "Open-source tooling and dotfiles",
      "Interfaces that feel considered"
    ],
    environment:[
      ["os","Arch Linux"],
      ["editor","Neovim · VS Code"],
      ["shell","Fish + custom config"],
      ["desktop","Hyprland · Wayland"],
      ["vcs","Git + GitHub"],
      ["build","Gradle · CMake · Cargo"]
    ],
    toolboxIntro:"A practical kit for app development, Linux customisation and debugging systems.",
    tools:[
      { title:"Languages", items:["Kotlin","Java","Rust","C / C++","Python","Shell"] },
      { title:"Platforms", items:["Android","Android TV","AOSP","Arch Linux","Wayland","Hyprland"] },
      { title:"Frameworks & tools", items:["Jetpack Compose","GTK4","Gradle","CMake","Git"] }
    ],
    process:[
      ["$ idea","thinking it through…"],
      ["$ code && build","compiling something questionable"],
      ["$ test && debug","found the actual problem"],
      ['$ git commit -m "finally"',"✓ ready for the next rabbit hole"]
    ]
  },
  featured: [
    {
      number:"01",
      kind:"Desktop OS · Arch + Wayland",
      state:"Active development",
      name:"GlyphOS",
      tagline:"Every detail. By design.",
      description:"An independent, Nothing-inspired desktop built on Arch Linux and Wayland — with its own shell, command bar, control center and a design-token theme engine. Every value on screen comes from real system state.",
      details:[
        "glyph-shell panel, dock and control center running on GTK4 + layer-shell",
        "IPC bus with a glyphctl CLI over a Unix socket",
        "Custom Smithay compositor and bootable ISO are planned next"
      ],
      tech:["Rust","GTK4","Wayland","Arch Linux","Hyprland"],
      url:"https://github.com/Jackson4Rocks/GlyphOS",
      preview:"glyph"
    },
    {
      number:"02",
      kind:"Android launcher · Small screens",
      state:"In development",
      name:"Cipher Launcher",
      tagline:"Two PINs, two experiences.",
      description:"A watch-first launcher for tiny Android devices. A glanceable Watch Mode and a full Launcher Mode live behind separate PINs, so each space stays independent.",
      details:[
        "Large clock, date, live steps and battery on an AMOLED-black face",
        "Swipe-up drawer with search, built for very small displays",
        "Separate Watch and Launcher PINs"
      ],
      tech:["Kotlin","Android","Launcher","AMOLED"],
      url:"https://github.com/Jackson4Rocks/Cipher-Launcher",
      preview:"cipher"
    },
    {
      number:"03",
      kind:"Nothing Phone (3a) Lite utility",
      state:"v2.0",
      solidState:true,
      name:"OneGlyph",
      tagline:"Make the one dot do more.",
      description:"The Nothing Phone (3a) Lite has a single Glyph dot. OneGlyph puts it to work — music reactions, notification cues, Morse code, timers, a metronome and charging feedback.",
      details:[
        "Built for Galaxian on stock Nothing OS",
        "Useful jobs: charging feedback and low-battery alerts",
        "Fun ones: dice, breathing guide, camera countdown"
      ],
      tech:["Kotlin","Android","Glyph","Nothing OS"],
      url:"https://github.com/Jackson4Rocks/OneGlyph",
      preview:"oneglyph"
    },
    {
      number:"04",
      kind:"Android TV · Video client",
      state:"Active development",
      name:"PublivoreTube",
      tagline:"Built for the big screen.",
      description:"An open-source, TV-first video client for Android TV — big visuals, long horizontal shelves, clear focus states and D-pad navigation from the couch.",
      details:[
        "Home shelves for recommended, trending and continue watching",
        "Remote-friendly search in the same shelf layout",
        "Videos play inside the app via the official embedded player"
      ],
      tech:["Kotlin","Android TV","Leanback-style UI","D-pad"],
      url:"https://github.com/Jackson4Rocks/PublivoreTube",
      site:"https://jackson4rocks.github.io/PublivoreTube/",
      preview:"tv"
    }
  ],
  moreApps: [
    {
      name:"Oryn Player",
      kind:"Android · Local music",
      status:"UI prototype",
      description:"A local-first music player with a calm, expressive Compose interface. The UI is in place; MediaStore scanning and real playback are next.",
      tech:["Kotlin","Jetpack Compose","Material 3"],
      art:"wave"
    },
    {
      name:"AppGuard",
      kind:"Android · App security",
      status:"Builds via Actions",
      description:"A lightweight app locker. Pick apps to protect behind a PIN or your device's fingerprint / face authentication.",
      tech:["Kotlin","Biometrics","Material 3"],
      art:"shield"
    },
    {
      name:"Aevum Clock",
      kind:"Android · Clock",
      status:"v1.0",
      solidStatus:true,
      description:"A calm, modern clock based on AOSP DeskClock — alarms, world clock, timer and stopwatch, with a true-black AMOLED theme.",
      tech:["Java","AOSP","Widgets"],
      art:"clock"
    },
    {
      name:"AvenueBoot",
      kind:"Linux · CLI tool",
      status:"Completed",
      solidStatus:true,
      description:"A small command-line tool for flashing Windows installation ISOs to a USB drive from Linux — because that's usually harder than it should be.",
      tech:["Shell","Linux","CLI"],
      art:"terminal"
    }
  ],
  repositoryIndex: [
    {
      name:"CathodeOS",
      kind:"Android for PC",
      description:"An AOSP-based Android 16 project for x86_64 PCs and laptops, with a separate LineageOS-based hardware path.",
      status:"Bring-up",
      url:"https://github.com/Jackson4Rocks/CathodeROM"
    },
    {
      name:"Nord 2T device tree",
      kind:"Android device",
      description:"Device tree for the OnePlus Nord 2T 5G (karen, MT6893), targeting LineageOS 23.2 / Android 16.",
      status:"Work in progress",
      url:"https://github.com/Jackson4Rocks/android_device_oneplus_karen"
    },
    {
      name:"Miniland",
      kind:"Hyprland utility",
      description:"Adds a familiar minimize-window workflow to Hyprland using a named special workspace and a searchable picker.",
      status:"Utility",
      url:"https://github.com/Jackson4Rocks/miniland"
    },
    {
      name:"Evexia",
      kind:"Android side project",
      description:"A planning and study hub — timetable, tasks, flashcards and a small document library.",
      status:"v1.0 milestone",
      url:"https://github.com/Jackson4Rocks/Evexia"
    }
  ],
  lab: [
    ["GlyphOS","Planned","glyphwm + a bootable image","Replace the Hyprland adapter with a custom Smithay compositor, then package a live ISO and installer."],
    ["Oryn Player","Next","Real playback","MediaStore scanning, artwork and metadata, an ExoPlayer engine, queue, repeat, shuffle and lock-screen controls."],
    ["CathodeOS","Ongoing","Generic x86_64 hardware","Keep testing the PC path — boot, graphics, audio, Wi-Fi and suspend across more machines."],
    ["Cipher Launcher","Ongoing","Small-screen polish","Keep refining the compact launcher, protected spaces and the interactions that make a tiny display usable."]
  ],
  contact: {
    headingA:"Found a bug,",
    headingB:"have an idea?",
    body:"Or just want to see what I'm building? The source and project updates live on GitHub, and my inbox is open — though replies will wait until I'm back."
  },
  footer:"Built close to the system · open source where possible"
};