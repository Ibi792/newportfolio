export const site = {
  name: "Isaac Isaac",
  role: "User Experience Designer",
  email: "isaacbisaac0@gmail.com",
  phone: "407-437-3838",
  linkedin: "https://www.linkedin.com/",
  instagram: "https://www.instagram.com/",
  resumeUrl: "/resume.pdf",
};

export const nav = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Extras!", href: "/extras" },
];

// Shared neutral canvas used for every page body — including case
// studies — so color reads as an accent (hero bands, headings, buttons,
// cards) rather than wallpaper. One universal neutral means no case
// study's hero/accent color bleeds into another's "neutral" background.
export const paper = "#FAF6EF";
export const paperInk = "#241F1A";
export const footerText = "#F3EFE6";

// Per-page color themes, sampled from the original site. Approximate —
// tune freely once real brand values / assets are locked in.
//
// Shape: each page gets a saturated `hero*` band (top section, first
// impression) and a neutral `body*` canvas everywhere else, so color reads
// as an intentional accent rather than a full-bleed backdrop. Footers are
// a standardized "ink" family: always dark, always the same text color and
// layout, tinted toward that page's own hue — a consistent rule with
// intentional variation, rather than unrelated colors per page.
export const themes = {
  home: {
    heroBg: "#DCEEF8",
    heroText: "#1E2A3A",
    heroAccent: "#D6486B",
    bodyBg: paper,
    bodyInk: paperInk,
    bodyAccent: "#D6486B",
    nav: "#CCE6F5",
    navInk: "#1E2A3A",
    footer: "#182A3B",
    footerText,
    tagline: "Friends Call Me Ibi :D",
  },
  about: {
    heroBg: "#4C7C93",
    heroText: "#FDF6EC",
    heroAccent: "#F7DFA0",
    bodyBg: paper,
    bodyInk: paperInk,
    bodyAccent: "#2F6478",
    nav: "#3E6B80",
    navInk: "#FDF6EC",
    footer: "#132A32",
    footerText,
    tagline: "Friends Call Me Ibi :P",
  },
  projects: {
    heroBg: "#FBE7B0",
    heroText: "#1E2A3A",
    heroAccent: "#D6486B",
    bodyBg: paper,
    bodyInk: paperInk,
    bodyAccent: "#D6486B",
    nav: "#FBE7B0",
    navInk: "#1E2A3A",
    footer: "#2E2417",
    footerText,
    tagline: "Friends Call Me Ibi :V",
  },
  extras: {
    heroBg: "#2E9E77",
    heroText: "#FDF6EC",
    heroAccent: "#F7DFA0",
    bodyBg: paper,
    bodyInk: paperInk,
    bodyAccent: "#1F7A57",
    nav: "#2E9E77",
    navInk: "#FDF6EC",
    footer: "#122A20",
    footerText,
    tagline: "Friends call me ibi :)",
  },
  // Case studies don't get a fixed color scheme here — each one carries
  // its own heroBg/heroText/accent/footer in its CaseStudyData (see
  // below), so Prizekicks doesn't inherit Fourddo's indigo. This entry
  // just holds the shared footer easter-egg tagline for that page family.
  caseStudy: {
    tagline: "Friends Call Me Ibi ↻ ◁ ‖ ▷ ↺",
  },
} as const;

export type ThemeKey = keyof typeof themes;

// Placeholder copy — swap freely. Built around the strongest line from
// your own draft ("the research and the rethinks left in"); the nickname
// moves from the giant wordmark to a small badge so the real headline
// carries the weight instead.
export const hero = {
  badge: "Friends Call Me Ibi",
  headline: [
    { text: "Show the work,", tone: "ink" as const },
    { text: "not the polish.", tone: "accent" as const },
  ],
  tagline: "Four shipped case studies with the research and the rethinks left in.",
  metaTag: "UX & Product Design · Orlando, FL",
  primaryCta: { label: "The Work", href: "/projects" },
  secondaryCta: { label: "Read CV", href: "/resume.pdf" },
  tip: "Psst, click the card :D",
  card: {
    name: "IBI",
    level: 22,
    tags: [
      { label: "Type · Product", color: "#4A47B0" },
      { label: "Motion", color: "#1E7F72" },
    ],
    classYear: "UCF '27",
    portraitBadge: "Open to Work",
    moves: [
      {
        color: "#1D6FA5",
        title: "Research Dive",
        power: 40,
        detail: "Nine interviews before a single wireframe. Reveals the real question.",
      },
      {
        color: "#1E7F72",
        title: "Ship It",
        power: 70,
        detail: "Builds the frontend himself, so handoff isn't a wall.",
      },
    ],
    flavorText: "Designs with intention, honesty, and a touch of whimsy. Found in cafés after midnight.",
    setInfo: "001/004 · WORKSHOP SET",
    rarity: 3,
    // Holo border cycles through the real project colors — the card is
    // literally made of the same palette as the four case studies.
    holoColors: ["#D6486B", "#F7DFA0", "#1E7F72", "#1D6FA5", "#4A47B0"],
  },
};

export const about = {
  heading: "About Me",
  bio: [
    "Hi, I'm Isaac, a current senior at University of Central Florida studying Digital Media with a focus on Web & Social Platforms. I've spent the last few years honing skills in various aspects of the craft, but I've taken an interest above all in User Experience Design.",
    "I want to guide and facilitate the beautiful communication that happens between the everyday consumer and a good product.",
  ],
  workList: {
    heading: "I Work Primarily to",
    items: [
      "Create website wireframes",
      "Research User Behavior",
      "Create Design Documentation",
      "Develop Frontend",
    ],
  },
  interestsList: {
    heading: "Other Interest",
    items: [
      "Video editing & Motion Design",
      "I spend most of my time in cafes or fantasy novels",
      "I love movies, games, just stories in all forms :)",
    ],
  },
  links: [
    { label: "Linkedin", href: "https://www.linkedin.com/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "Mail", href: "mailto:isaacbisaac0@gmail.com" },
  ],
  skillsHeading: "Skills, Expertise & Certifications",
  tools: ["Figma", "Premiere Pro", "JavaScript", "CSS3", "Photoshop", "After Effects", "HTML5", "GitHub"],
  coreSkills: ["User Research", "Design Documentation", "Wireframes", "Communication", "Collaboration"],
  certifications: [
    { name: "Figma Essential Training Certification", source: "LinkedIn" },
    { name: "UX Foundations: Multidevice Design", source: "LinkedIn" },
    { name: "React Native Essential Training", source: "LinkedIn" },
    { name: "Foundations of User Experience (UX) Design", source: "Google" },
    { name: "Start the UX Design Process: Empathize, Define, and Ideate", source: "Google" },
  ],
};

export type Project = {
  slug: string;
  title: string;
  tags: string[];
  blurb: string;
  color: string;
  textColor: string;
  image: string;
  externalUrl?: string;
  hasFullCaseStudy: boolean;
};

export const projects: Project[] = [
  {
    slug: "fourddo",
    title: "Four Stories",
    tags: ["UX Design", "Internship"],
    blurb: "Building a Digital Home for Four Emerging Filmmakers",
    color: "#4A47B0",
    textColor: "#F7DFA0",
    image: "/images/projects/four-stories.png",
    hasFullCaseStudy: true,
  },
  {
    slug: "goblin-gizmos",
    title: "Goblin Gizmos",
    tags: ["UX Design", "Capstone"],
    blurb: "Building a community platform where any collection belongs",
    color: "#8FE0C9",
    textColor: "#14231F",
    image: "/images/projects/goblin-gizmos.png",
    hasFullCaseStudy: true,
  },
  {
    slug: "prizekicks",
    title: "Prizekicks",
    tags: ["UX Design", "Group Project"],
    blurb: "Designing a marketplace that finally plays fair",
    color: "#BFE3F5",
    textColor: "#1E2A3A",
    image: "/images/projects/prizekicks.png",
    hasFullCaseStudy: true,
  },
  {
    slug: "lofistory",
    title: "Lofistory",
    tags: ["UI Design", "Solo Project"],
    blurb: "Designing and building a cozy corner of the internet for the genre that got me through school",
    // Placeholder — the actual palette line in the case study is itself
    // flagged [Confirm] between amber/purple/teal, so keeping the
    // existing warm coral here rather than guessing. Swap once locked.
    color: "#F0664F",
    textColor: "#F7DFA0",
    image: "/images/projects/lofistory.png",
    hasFullCaseStudy: true,
  },
];

// Generic case-study schema — one renderer (src/components/CaseStudy.tsx)
// walks this section list for every project, so adding a new full case
// study is a content change, not a new component.
export type CaseStudyMeta = { label: string; value: string };

export type CaseStudySection =
  | { type: "intro"; heading: string; paragraphs: string[] }
  | { type: "overview"; heading: string; rows: { label: string; value: string }[] }
  | { type: "pills"; heading: string; items: string[] }
  | {
      type: "insightCards";
      heading: string;
      intro: string[];
      cards: { title: string; detail: string }[];
      images?: { src: string; label: string }[];
    }
  | { type: "quote"; label: string; text: string; attribution: string }
  | {
      type: "colorCards";
      heading: string;
      intro: string[];
      cards: { name: string; color: string; detail: string }[];
    }
  | {
      type: "goalChips";
      heading: string;
      intro: string[];
      goals: { title: string; detail: string }[];
      outro?: string[];
      images?: { src: string; label: string }[];
    }
  | {
      type: "media";
      heading: string;
      paragraphs: string[];
      images?: { src: string; label: string }[];
      link?: { label: string; url: string };
    }
  | {
      type: "results";
      heading: string;
      intro: string[];
      items: { label: string; detail: string }[];
      outro?: string[];
    }
  | {
      type: "reflection";
      heading: string;
      intro: string[];
      lessons: { title: string; detail: string }[];
      thanks?: string;
    };

export type CaseStudyData = {
  eyebrow: string;
  title: string;
  meta: CaseStudyMeta[];
  heroImage: string;
  shippedProductUrl?: string;
  shippedProductLabel?: string;
  // Each case study carries its own complete color identity — hero band,
  // body accent (headings, chip borders, labels), and footer — rather
  // than inheriting a shared "case study" scheme. Body canvas stays the
  // universal `paper` neutral so no project's hue bleeds into another's.
  heroBg: string;
  heroText: string;
  accent: string;
  footer: string;
  sections: CaseStudySection[];
};

export const fourddoCaseStudy: CaseStudyData = {
  eyebrow: "Guiding Future Filmmakers",
  title: "Designing a hub for emerging filmmakers to learn, create, and connect",
  meta: [
    { label: "Company", value: "Fourddo" },
    { label: "Role", value: "Lead Product Design Intern" },
    { label: "Year", value: "2026" },
  ],
  heroImage: "/images/projects/four-stories-hero.png",
  shippedProductUrl: "#",
  shippedProductLabel: "View Shipped Product",
  heroBg: "#4A47B0",
  heroText: "#EEF0FB",
  accent: "#5B57C9",
  footer: "#1B1830",
  sections: [
    {
      type: "intro",
      heading: "The Fellowship",
      paragraphs: [
        "Fourddo is a nonprofit dedicated to amplifying causes and initiatives that shape the lives of today's youth. This past summer, they launched Four Stories, a 10-week filmmaking fellowship in Boston pairing four emerging directors with mentors to develop, produce, and premiere original PSA films.",
        "I was brought on as a Product Design Intern to design and build the Fellows Hub, a private digital platform serving as the cohort's central home base for curriculum, resources, and communication across the entire program.",
      ],
    },
    {
      type: "overview",
      heading: "Overview",
      rows: [
        { label: "Project Type", value: "Internship project - Full Website Design" },
        {
          label: "Summary",
          value:
            "Fourddo launched Four Stories, a 10-week filmmaking fellowship in Boston pairing four emerging directors with mentors to develop, produce, and premiere original PSA films. This project focused on designing and building the digital platform that brought the entire program together in one place.",
        },
        {
          label: "Problem",
          value:
            "Four Stories had no centralized digital home for its inaugural cohort. Program information, curriculum, deliverables, and communication were scattered across emails and documents, creating friction for fellows trying to stay on top of a demanding 10-week program while also making their first film.",
        },
      ],
    },
    {
      type: "pills",
      heading: "Process",
      items: ["Research", "Define", "Ideate", "Prototype", "Test", "Implement"],
    },
    {
      type: "insightCards",
      heading: "User Research",
      intro: [
        "Research was conducted to better understand the needs of first-time fellowship participants navigating a demanding creative program for the first time.",
        "Due to that research, key insights emerged:",
      ],
      cards: [
        {
          title: "No Central Home Base",
          detail:
            "Program information, curriculum, and deadlines were scattered across emails and shared documents with no single place to find what they needed.",
        },
        {
          title: "First-Time Filmmakers",
          detail:
            "Most fellows had never produced a short film before. The platform needed to support the work without adding friction to an already demanding creative process.",
        },
        {
          title: "Unclear Expectations",
          detail:
            "Deliverables, milestones, and payment requirements were communicated across multiple channels, making it easy to lose track of what was due and when.",
        },
        {
          title: "The Hub Had to Earn Trust",
          detail:
            "For the platform to actually get used, it had to feel intentional and worth returning to. A cluttered or confusing experience would push fellows back to email.",
        },
      ],
    },
    {
      type: "quote",
      label: "A Note From the field",
      text: "There's just a lot going on, and it's hard to keep track of where everything lives.",
      attribution: "Fellow, Week 1 check-in",
    },
    {
      type: "colorCards",
      heading: "Competitive Analysis",
      intro: [
        "Existing fellowship and learning platforms were reviewed to understand how structured programs communicate curriculum, deadlines, and resources to participants.",
      ],
      cards: [
        {
          name: "Canvas",
          color: "#8B3A4B",
          detail:
            "Heavy on functionality but overwhelming for first-time users. Information density without clear hierarchy creates friction before any learning begins.",
        },
        {
          name: "Google Classroom",
          color: "#1F5E70",
          detail:
            "Familiar and accessible but visually flat. Lacks the brand presence needed to make a program feel intentional and designed.",
        },
        {
          name: "Notion",
          color: "#1B1B3A",
          detail:
            "Flexible and clean but requires too much setup from the user. Works best when someone already knows how to navigate it.",
        },
      ],
    },
    {
      type: "goalChips",
      heading: "Solution",
      intro: ["Through this research, the Fellows Hub's main goals were identified."],
      goals: [
        { title: "Clear Navigation", detail: "Instant access to the current week" },
        { title: "Milestone Visibility", detail: "Deadlines and deliverables always in view" },
        { title: "Structured Curriculum", detail: "Weekly content organized by phase" },
        { title: "Low Friction Access", detail: "Private and easy to get into" },
        { title: "Brand Cohesion", detail: "Felt like Four Stories" },
      ],
      outro: [
        "Using these goals as a benchmark, I set out to outline information architecture and draft low-fidelity sketches.",
      ],
      images: [{ src: "/images/projects/fourddo-sitemap.png", label: "Add sitemap image" }],
    },
    {
      type: "media",
      heading: "Prototype",
      paragraphs: [
        "With the structure mapped out, it was time to make it real. The high-fidelity prototype was developed to bring the Fellows Hub to life within the constraints of the fellowship's existing brand and platform.",
      ],
      images: [
        { src: "/images/projects/fourddo-prototype-desktop.png", label: "Add desktop prototype screenshot/video" },
        { src: "/images/projects/fourddo-prototype-mobile.png", label: "Add mobile prototype screenshot" },
      ],
    },
    {
      type: "results",
      heading: "Results",
      intro: [
        "The Fellows Hub launched on June 12th in time for the first kickoff session. All four fellows received access and used the platform throughout the program. The practical impacts of the design quickly became clear:",
      ],
      items: [
        {
          label: "Centralized Access",
          detail:
            "For the first time, fellows had a single destination for curriculum, deliverables, resources, and program communication — eliminating the friction of navigating a 10-week program through scattered emails and shared documents.",
        },
        {
          label: "Program Clarity",
          detail:
            "A structured week-by-week layout gave fellows a clear view of where they were in the program, what was coming next, and what was expected of them at every stage of production.",
        },
        {
          label: "Scalable Foundation",
          detail:
            "The Fellows Hub established a replicable content structure and design system that Four Stories can build on as the fellowship grows beyond its inaugural cohort.",
        },
      ],
      outro: [
        "For a first-of-its-kind program running its inaugural cohort, the hub gave Four Stories something it didn't have before: a place that held everything together. Following the fellowship, program directors noted that fellows responded positively to the hub, citing it as a meaningful part of their experience.",
      ],
    },
    {
      type: "media",
      heading: "Improvements",
      paragraphs: [
        "Based on feedback from the team and cohort, a “meet the fellows” section was added, highlighting the fellows and their films.",
      ],
      images: [{ src: "/images/projects/fourddo-cohort.png", label: "Add cohort feature screenshot" }],
    },
    {
      type: "reflection",
      heading: "Reflection",
      intro: [
        "My time with Fourddo marks several firsts for me. First established brand, first real technology constraints, first time designing specifically for a defined group of users. Each one pushed me in a different direction and left me with something I carry forward.",
      ],
      lessons: [
        {
          title: "Constraints are invitations:",
          detail:
            "Balancing team requests, platform limitations, and a highly specific audience taught me to work with what I had rather than wish for what I didn't. Building inside Squarespace meant every decision had to account for what the platform could and couldn't do, which pushed me toward creative solutions rather than ideal ones.",
        },
        {
          title: "Clarity is the design:",
          detail:
            "Designing for first-time fellows meant if a fellow couldn't find what they needed in the first few seconds of logging in, the design had failed regardless of how it looked.",
        },
        {
          title: "Stakes make better designers:",
          detail:
            "This wasn't a prototype or a concept. It was a live platform that four fellows relied on throughout a demanding 10-week program. That responsibility made every decision feel more considered.",
        },
      ],
      thanks: "Thank you for reading!",
    },
  ],
};

export const prizekicksCaseStudy: CaseStudyData = {
  eyebrow: "Putting the Sneaker Buyer First",
  title: "Designing a marketplace that finally plays fair",
  meta: [
    { label: "Program", value: "University of Central Florida" },
    { label: "Role", value: "Lead UI/UX Designer" },
    { label: "Team", value: "Team of 3" },
    { label: "Timeline", value: "Aug 2024 – May 2025" },
  ],
  heroImage: "/images/projects/prizekicks-hero.png",
  // Same blue as the teaser card (its real brand color), but with its own
  // proper accent/footer — a deeper cobalt for headings and chip borders
  // and a blue-tinted dark footer — instead of borrowing Fourddo's indigo.
  heroBg: "#BFE3F5",
  heroText: "#1E2A3A",
  accent: "#1D6FA5",
  footer: "#122A3D",
  sections: [
    {
      type: "intro",
      heading: "Context",
      paragraphs: [
        "Sneaker resale runs on scarcity and hype, and the platforms built around it reflect that. Prices are opaque, interfaces are cluttered, and buyers are left guessing whether they got a fair deal or got played. Two classmates and I had all felt it. PrizeKicks was our answer: a marketplace that treats the buyer as the customer, not the mark.",
        "I led UI and UX across the full process, from market research to a tested high-fidelity prototype and a live demo.",
      ],
    },
    {
      type: "overview",
      heading: "Overview",
      rows: [
        { label: "Project Type", value: "University Group Project / Full Product Design" },
        {
          label: "Summary",
          value:
            "PrizeKicks is a sneaker marketplace concept built to bring price transparency and clarity to a market that offers neither.",
        },
        {
          label: "Problem",
          value:
            "Existing resale platforms bury product discovery under clutter and give buyers no signal for what a fair price looks like. Users leave frustrated or leave entirely.",
        },
        {
          label: "Solution",
          value:
            "A buyer-first marketplace with price comparison built into the browsing experience, a simplified information architecture, and a clean visual system that gets out of the way.",
        },
        {
          label: "My Role",
          value:
            "Lead UI/UX Designer (Market Research, Interviews and Surveys, Personas, Information Architecture, Wireframing, Style Guide, Prototyping, User Testing)",
        },
        { label: "Tools", value: "Figma, Adobe Photoshop" },
      ],
    },
    {
      type: "insightCards",
      heading: "Research",
      intro: ["We started with the market, then went to the people shopping in it."],
      cards: [
        {
          title: "Cluttered by Default",
          detail:
            "GOAT, Grailed, and Flight Club all treated density as a feature. Finding a specific shoe meant fighting the interface first.",
        },
        {
          title: "No Sense of Fair",
          detail:
            "None of the platforms gave buyers a clear read on whether a listing was a good price. Comparison meant opening tabs and doing the math yourself.",
        },
        {
          title: "Trust Was Missing",
          detail:
            "Interviews and surveys kept circling the same theme. Buyers didn't feel these platforms were on their side, and that suspicion shaped every interaction.",
        },
      ],
    },
    {
      type: "quote",
      label: "From the Interviews",
      text: "[pull one real quote from your interview notes here]",
      attribution: "Interview participant",
    },
    {
      type: "goalChips",
      heading: "Defining the Product",
      intro: [
        "Research shaped four personas and a set of use cases that clarified what buyers actually needed from a marketplace. From there, a data dictionary catalogued every system the platform required, which became the backbone of the information architecture. We showed that architecture to potential users before designing a single screen and revised it based on what they told us.",
        "From this, PrizeKicks' core goals were set:",
      ],
      goals: [
        { title: "Price Transparency", detail: "Fair price context on every listing" },
        { title: "Clean Navigation", detail: "Find the shoe without fighting the interface" },
        { title: "Buyer First", detail: "Hierarchy and features built around the customer" },
        { title: "Trust Signals", detail: "Reviews and accountability baked in" },
      ],
      images: [
        { src: "/images/projects/prizekicks-personas.png", label: "Add personas" },
        { src: "/images/projects/prizekicks-ia.png", label: "Add information architecture / data dictionary" },
      ],
    },
    {
      type: "media",
      heading: "Prototype",
      paragraphs: [
        "The low-fidelity prototype covered the full shopping flow: sign up, home, search and filters, product pages, price comparison, checkout, and confirmation. We ran think-aloud sessions with users, catalogued every point of friction, and fixed them before moving to high fidelity.",
        "A style guide locked in the visual identity, then the final prototype went through one more round of testing and refinement.",
      ],
      images: [
        { src: "/images/projects/prizekicks-lofi.png", label: "Add lo-fi screens" },
        { src: "/images/projects/prizekicks-style-guide.png", label: "Add style guide" },
        { src: "/images/projects/prizekicks-hifi.png", label: "Add hi-fi screens" },
      ],
      link: { label: "View Live Demo", url: "#" },
    },
    {
      type: "results",
      heading: "Results",
      intro: [],
      items: [
        {
          label: "Buyers Could Actually Compare",
          detail:
            "Price context on the product page removed the tab-juggling that defined every other platform.",
        },
        {
          label: "Navigation Stopped Being Work",
          detail:
            "Testers moved through core flows without stalling. The second round of testing surfaced tweaks, not blockers.",
        },
        {
          label: "Scoped to What Mattered",
          detail:
            "By cutting the marketplace down to the features that differentiated it, the final prototype demonstrated the product's value without pretending to be something it wasn't yet.",
        },
      ],
    },
    {
      type: "reflection",
      heading: "Reflection",
      intro: ["PrizeKicks was my first full case study, and it changed how I think about the process."],
      lessons: [
        {
          title: "Restraint Is a Feature:",
          detail:
            "Our first plan was far bigger than what we could build. Cutting it back to the features that actually mattered made the product sharper. Knowing what to leave out is as much a design skill as knowing what to build.",
        },
        {
          title: "Users Will Surprise You:",
          detail:
            "Feedback caught me off guard more than once. I've come to think that's the point. The process exists because you can't predict everything on the first try.",
        },
        {
          title: "Rely and Be Relied On:",
          detail:
            "Leading design on a team meant trusting people with parts of the project I cared about. That exchange made the final product better than anything I could have built alone.",
        },
      ],
    },
  ],
};

export const goblinGizmosCaseStudy: CaseStudyData = {
  eyebrow: "A Digital Shelf for Every Kind of Collector",
  title: "Building a community platform where any collection belongs",
  meta: [
    { label: "Program", value: "UCF Capstone Project" },
    { label: "Role", value: "Design, UI, and Branding Lead" },
    { label: "Team", value: "Team of 5" },
    { label: "Timeline", value: "Aug 2025 – May 2026" },
  ],
  heroImage: "/images/projects/goblin-gizmos-hero.png",
  // Their own documented brand: teal + mint primaries, near-black
  // secondary, off-white background. Hero runs the deeper teal; the
  // lighter mint is the teaser card's color (see the projects array).
  heroBg: "#1E7F72",
  heroText: "#F4FBF8",
  accent: "#146B60",
  footer: "#0C1F1B",
  sections: [
    {
      type: "intro",
      heading: "Context",
      paragraphs: [
        "The team didn't have to go far to find inspiration. We just looked at our own shelves. Vinyls, figurines, business cards, blind boxes, books. Each of us collects something, and each of us had the same quiet frustration: there was nowhere online to show it all off the way we wanted to. The platforms we found were too limited, too cluttered, or looked like they hadn't been touched since 2009.",
        "We wanted something warmer. Something like Letterboxd, but for everything. And we didn't want to stop at a prototype. Over two semesters, a five-person team took Goblin Gizmos from a research question to a working site with real accounts, real uploads, and a real database. I led design, UI, and branding, and wrote front-end code alongside the team.",
      ],
    },
    {
      type: "overview",
      heading: "Overview",
      rows: [
        { label: "Project Type", value: "Capstone / Product Design and Full-Stack Build" },
        {
          label: "Problem",
          value:
            "Collector platforms are dated, siloed to one niche, and often paywalled. Collectors had databases to maintain, not places to connect.",
        },
        {
          label: "Solution",
          value:
            "A social, community-first platform with a two-layer collection system and a bounty board for trading. Designed in Figma, built on PHP and MySQL, validated and responsive.",
        },
        {
          label: "My Role",
          value:
            "Design, UI, and Branding Lead (Competitive Analysis, Interviews, Use Cases, Information Architecture, Brand Identity, Prototyping, User Testing, Front-End Development)",
        },
        { label: "Tools", value: "Figma, Adobe Photoshop, HTML, CSS, JavaScript, PHP, MySQL, GitHub" },
      ],
    },
    {
      type: "intro",
      heading: "What We Found",
      paragraphs: [
        "We each took a set of existing collector platforms and worked through them. Colnect, CollectorsCorner, Kolekto, MyFigureCollection, CatalogIt. The pattern was consistent: outdated interfaces, cluttered navigation, one niche per site, and paywalls that locked out casual users before they'd gotten started.",
        "Interviews and surveys with collectors across different hobbies confirmed the gap. Nobody wanted another spreadsheet. They wanted something quick to update, easy to browse, and genuinely social. A place to connect over the things they love.",
      ],
    },
    {
      type: "media",
      heading: "The Decision That Shaped Everything",
      paragraphs: [
        "The structural choice we were most deliberate about was the two-layer collection system. A user has collections (say, books), and within each collection they have individual items (a first edition, a worn paperback with notes in the margins). It sounds simple, but it solved the core problem every competitor had: how do you let one person hold vinyls and figurines and books on the same shelf without the organization collapsing? Each trinket gets room to express its own history. The broader structure stays clean. Nearly every downstream decision, from the data dictionary to the database schema, traced back to this.",
      ],
      images: [
        { src: "/images/projects/goblin-gizmos-use-cases.png", label: "Add use cases" },
        { src: "/images/projects/goblin-gizmos-ia.png", label: "Add information architecture" },
        { src: "/images/projects/goblin-gizmos-data-dictionary.png", label: "Add data dictionary" },
      ],
    },
    {
      type: "media",
      heading: "Brand",
      paragraphs: [
        "Landing on a direction was one of our earliest struggles. Once Goblin Gizmos clicked as the name, everything fell into place. Goblins gave us mischief, treasure obsession, and community. I ran with it.",
        "Teal and mint primaries, a near-black secondary, off-white background. Clean and modern without being sterile, with just enough green to feel fantastical. Tilt Warp for headers (bold and a little chaotic in the best way), Joti One for the logo, Rubik for body text. Our design artist built the mascot in three variations for flexibility across contexts.",
      ],
      images: [
        { src: "/images/projects/goblin-gizmos-style-guide.png", label: "Add style guide" },
        { src: "/images/projects/goblin-gizmos-mascot.png", label: "Add mascot" },
        { src: "/images/projects/goblin-gizmos-palette.png", label: "Add palette" },
      ],
    },
    {
      type: "media",
      heading: "Design",
      paragraphs: [
        "The lo-fi prototype covered the primary journeys: sign-up, home, category browsing, adding a trinket, the community tab, accessibility settings. Keeping it rough was intentional. It made it easier to throw ideas away.",
        "A round of user feedback on the lo-fi surfaced friction we hadn't anticipated. Button placement moved, calls to action got clearer, and the category browser got a more prominent path from the home page. Then the high-fidelity prototype brought the full identity to every screen: community feed, category browser, trinket pages, profiles, and the bounty board where users post items to sell or trade.",
      ],
      images: [
        { src: "/images/projects/goblin-gizmos-lofi.png", label: "Add lo-fi screens" },
        { src: "/images/projects/goblin-gizmos-feedback.png", label: "Add feedback notes" },
        { src: "/images/projects/goblin-gizmos-hifi.png", label: "Add hi-fi screens" },
      ],
    },
    {
      type: "media",
      heading: "Build",
      paragraphs: [
        "This is where Goblin Gizmos separates from a design exercise.",
        "The stack was HTML, CSS, JavaScript, PHP, and MySQL. PHP handles server-side logic, encrypted passwords, and differentiated access levels. MySQL stores everything from profiles and collections to posts and images. GitHub let five people contribute without stepping on each other.",
        "Responsiveness runs on three breakpoints: mobile under 600px, tablet from 600px to 1000px, desktop above. On mobile, vertical menus replace dropdowns, buttons scale up for touch, and content is prioritized to cut clutter. Accessibility carried through from design into code: contrast, alt text support, and in-app controls for font size and color scheme. The site passed W3C Markup Validation.",
        "The design held up in code. That was the point.",
      ],
      images: [
        { src: "/images/projects/goblin-gizmos-stack.png", label: "Add stack diagram" },
        { src: "/images/projects/goblin-gizmos-responsive.png", label: "Add responsive screens" },
      ],
      link: { label: "View Live Site", url: "#" },
    },
    {
      type: "reflection",
      heading: "Reflection",
      intro: [
        "Goblin Gizmos was the most collaborative and most creatively demanding thing I've worked on, and most of what it taught me was about the parts of design that don't show up on a screen.",
      ],
      lessons: [
        {
          title: "The Documents Are the Design:",
          detail:
            "I underestimated how much of the work lives in the documents. The use cases, the data dictionary, the information architecture. These weren't formalities. They were the scaffolding that held the design together, and when we skipped a step we felt it later in the build.",
        },
        {
          title: "Identity Is a North Star:",
          detail:
            "We had a concept we believed in but couldn't agree on how it should look, and once we committed to the goblin direction, everything accelerated. A strong visual identity is a creative north star, and you lose a lot of time without one.",
        },
        {
          title: "Design for the Edges:",
          detail:
            "The testers who challenged our assumptions most were the ones we almost didn't include: the accessibility-conscious user, the person adding a trinket from their phone, the newcomer who doesn't know what a bounty is. Designing for them made the core experience better for everyone.",
        },
        {
          title: "It Was a Democracy:",
          detail:
            "I didn't always get to set the tone, and that was fine. I'm as proud of how we built it as what we built.",
        },
      ],
    },
  ],
};

export const lofistoryCaseStudy: CaseStudyData = {
  eyebrow: "A Love Letter to Lo-Fi",
  title: "Designing and building a cozy corner of the internet for the genre that got me through school",
  meta: [
    { label: "Type", value: "Solo Project" },
    { label: "Role", value: "Designer and Developer" },
    { label: "Tools", value: "Figma, Adobe Photoshop, React, Spotify Web API" },
    { label: "Year", value: "2025" },
  ],
  heroImage: "/images/projects/lofistory-hero.png",
  // Placeholder hero — the palette itself is flagged [Confirm] within the
  // content below (amber/purple/teal), so keeping the existing warm coral
  // rather than guessing. Update once the real palette is locked.
  heroBg: "#F0664F",
  heroText: "#F7DFA0",
  accent: "#C24A32",
  footer: "#2B160E",
  sections: [
    {
      type: "intro",
      heading: "Context",
      paragraphs: [
        "Lo-fi hip hop has been in my headphones through every late night study session, every deadline, every render that took too long. It's a genre with an unmistakable visual identity: the ramen shop in the rain, the girl at her desk, the warm grain over everything. But when I went looking for a place that told its story, I found Wikipedia pages and playlist descriptions. Nothing that felt like the music.",
        "Lofistory started as a class design exercise and became something I couldn't leave as a mockup. It's a three-page site: a Home that sets the mood, an About that traces the genre's roots and conventions, and an Artist page that pulls the producers who shaped it straight from Spotify. I designed it in Figma and built it myself in React.",
      ],
    },
    {
      type: "overview",
      heading: "Overview",
      rows: [
        { label: "Project Type", value: "Solo Project / Web Design and Front-End Development" },
        {
          label: "Problem",
          value:
            "Lo-fi hip hop has a rich history and one of the most recognizable aesthetics in music, but no dedicated space that honors both with any visual care.",
        },
        {
          label: "Solution",
          value:
            "A warm, low-key three-page site that lets the genre's own visual language do the talking. Cards over forms, hand-drawn type over system fonts, live artist data from the Spotify API, and a looping rainy ramen shop behind everything.",
        },
        {
          label: "My Role",
          value: "Solo Designer and Developer (Visual Design, Content Curation, UI Design, React Build, API Integration)",
        },
        { label: "Tools", value: "Figma, Adobe Photoshop, React, Spotify Web API" },
      ],
    },
    {
      type: "insightCards",
      heading: "The Brief I Gave Myself",
      intro: [
        "Most of my projects start with a user problem. This one started with a feeling. The question wasn't “what does the user need,” it was “what does this genre feel like, and can a website feel like that too?”",
        "That framing set three rules before I drew anything.",
      ],
      cards: [
        {
          title: "Nothing Should Feel Urgent",
          detail:
            "Lo-fi is background music by design. No pop-ups, no CTAs shouting for attention, no forms. If the site asked anything of you, it had already failed.",
        },
        {
          title: "Let the Genre's Own Language Lead",
          detail:
            "The aesthetic already exists and people already love it. My job was to translate it faithfully, not reinvent it.",
        },
        {
          title: "Short Enough to Read in One Track",
          detail:
            "Content had to be curated, not exhaustive. A handful of foundational tracks, a few key figures, the conventions that define the sound. Enough to make someone go listen.",
        },
      ],
    },
    {
      type: "insightCards",
      heading: "Design Decisions",
      intro: [],
      cards: [
        {
          title: "Three Pages, One Mood",
          detail:
            "Home, About, Artist. Each page has one job. Home sets the atmosphere and invites you in. About tells the story of where the sound came from and what defines it. Artist is where you go listen. Splitting it this way kept every page short enough to feel unhurried, which a single long scroll couldn't do.",
        },
        {
          title: "The Background Was Non-Negotiable",
          detail:
            "A looping ramen shop in the rain sits behind the entire site. It sets the tone before a single word is read and does the work a hero section would normally do. Everything else is layered on top with enough transparency to let it breathe.",
        },
        {
          title: "Cards Instead of Sections",
          detail:
            "Information lives in playful, loosely stacked cards rather than rigid page sections. Each card holds one thing: a track, a producer, a convention. It mirrors the way lo-fi playlists are assembled, one small piece at a time.",
        },
        {
          title: "Hand-Drawn Type",
          detail:
            "Headers use a hand-drawn font to echo the sketchy, homemade quality of lo-fi cover art. Body text stays clean and readable so the personality never costs legibility.",
        },
        {
          title: "A Palette Pulled From the Art",
          detail:
            "[Confirm: warm ambers, muted purples, and soft teals sampled directly from iconic lo-fi visuals.] Nothing pure white, nothing pure black. Everything sits in the same warm midtone range the genre lives in.",
        },
        {
          title: "Real Artists, Not Screenshots",
          detail:
            "The Artist page pulls from Spotify rather than a hardcoded list. Album art, names, and links stay current without me touching the content, and every card goes straight to the music. The genre is alive, so the page should be too.",
        },
      ],
      images: [
        { src: "/images/projects/lofistory-mockups.png", label: "Add Figma mockups" },
        { src: "/images/projects/lofistory-palette.png", label: "Add palette" },
        { src: "/images/projects/lofistory-type.png", label: "Add type" },
      ],
    },
    {
      type: "media",
      heading: "Build",
      paragraphs: [
        "A design about restraint deserved a build to match. The site runs on a small set of React components: a card, a card grid, a header, the ambient background layer, and [confirm: React Router] handling the three routes. The Artist page calls the Spotify Web API on load and renders the results into cards, so album art, artist names, and links stay accurate on their own. [Confirm: users can open artists directly in Spotify.] The looping gif is optimized so the atmosphere doesn't cost load time.",
        "Wiring up the API was the part that turned this from a mockup into a product. Handling auth, structuring the response, and rendering it inside cards I'd designed without it in mind forced a few layout decisions I wouldn't have made on paper. The album art became the visual anchor of every artist card, which was better than what I had drawn.",
        "Building it myself meant the details I cared about in Figma survived contact with a browser. The card spacing, the transparency over the background, the way type sits against the grain. Those get lost in handoff, and there was no handoff.",
      ],
      images: [{ src: "/images/projects/lofistory-responsive.png", label: "Add responsive screens" }],
      link: { label: "View Live Site", url: "#" },
    },
    {
      type: "reflection",
      heading: "Reflection",
      intro: [],
      lessons: [
        {
          title: "Restraint Is a Decision:",
          detail:
            "Lofistory is the smallest project in my portfolio and the one I come back to most. It taught me that designing for feel is a different muscle than designing for a task, and that the two aren't in competition. Restraint is a decision. Warmth is a decision. Leaving something out is a decision.",
        },
        {
          title: "The Figma File Isn't the Finished Thing:",
          detail:
            "It also settled something for me about code. Turning a mockup into a running site changed my relationship to my own designs, and connecting it to a live API made that shift permanent. I stopped thinking of the Figma file as the finished thing.",
        },
      ],
    },
  ],
};

export const caseStudies: Record<string, CaseStudyData> = {
  fourddo: fourddoCaseStudy,
  prizekicks: prizekicksCaseStudy,
  "goblin-gizmos": goblinGizmosCaseStudy,
  lofistory: lofistoryCaseStudy,
};

export const extras = {
  heading: "Extras",
  motion: {
    heading: "Things in Motion",
    subheading: "Motion design and animation - made in After Effects",
    // Real clips/thumbnails to be dropped into /public/images/motion/
    items: Array.from({ length: 9 }).map((_, i) => ({
      image: `/images/motion/placeholder-${i + 1}.png`,
      alt: `Motion design piece ${i + 1}`,
    })),
  },
  contact: {
    heading: "Contact",
    blurb: "Hit my line, anytime! I'm looking forward to hearing from you and seeing what we can create together!",
  },
};
