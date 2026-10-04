export const site = {
  name: "Isaac Isaac",
  role: "User Experience Designer",
  email: "isaacbisaac0@gmail.com",
  phone: "407-437-3838",
  linkedin: "https://www.linkedin.com/feed/",
  instagram: "https://www.instagram.com/isaac_x_2/",
  // Drop the actual PDF at this exact path in /public for the link to work.
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

export const hero = {
  badge: "Friends Call Me Ibi",
  headline: [
    { text: "Isaac Isaac,", tone: "ink" as const, size: "sm" as const },
    { text: "solving problems in style.", tone: "accent" as const },
  ],
  tagline: "Product designer. Taste-driven. Research-backed.",
  metaTag: "UX & Product Design",
  primaryCta: { label: "The Work", href: "/projects" },
  secondaryCta: { label: "About", href: "/about" },
  tip: "Psst, click the card :D",
  card: {
    name: "IBI",
    level: 22,
    tags: [
      { label: "Type · Product", color: "#4A47B0" },
      { label: "Motion", color: "#1E7F72" },
    ],
    classYear: "UCF '26",
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
    "Hi, I'm Isaac. I design with intention, build things with my own hands, and leave a little whimsy in whatever I ship.",
    "I'm studying Digital Media at the University of Central Florida, and the habits that actually define my process came from shipping real work: talking to strangers before I let myself sketch a single wireframe, and building my own frontend so nothing gets lost between the design file and the browser.",
  ],
  workList: {
    heading: "How I Work",
    items: [
      "Running user research",
      "Wireframing & prototyping",
      "Writing design docs",
      "Building the frontend",
    ],
  },
  interestsList: {
    heading: "Other Interests",
    items: [
      "Video editing & motion design",
      "Cafés and fantasy novels",
      "Movies, games, any story I can get lost in :)",
    ],
  },
  links: [
    { label: "Linkedin", href: "https://www.linkedin.com/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "Mail", href: "mailto:isaacbisaac0@gmail.com" },
  ],
  // Which photo files feed the fanned card stack, in order. Add/remove
  // numbers here to change how many cards are in the fan — the stack
  // fans them out automatically, no layout tuning needed.
  stackPhotoIds: [2, 3, 4, 5],
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
  // CSS object-position for the card thumbnail. Defaults to "center"; set
  // this when the image's focal point (a wordmark, a face) gets cropped
  // out in the short compact-card box.
  imagePosition?: string;
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
  },
  {
    slug: "knourish",
    title: "Knourish",
    tags: ["UX Design", "Solo Project"],
    blurb: "Designing wait-time transparency for students who can't afford to guess",
    color: "#FFC904",
    textColor: "#0C0C20",
    image: "/images/projects/knourish.png",
  },
  {
    slug: "goblin-gizmos",
    title: "Goblin Gizmos",
    tags: ["UX Design", "Capstone"],
    blurb: "Building a community platform where any collection belongs",
    color: "#8FE0C9",
    textColor: "#14231F",
    image: "/images/projects/goblin-gizmos.png",
    imagePosition: "top",
  },
  {
    slug: "prizekicks",
    title: "Prizekicks",
    tags: ["UX Design", "Group Project"],
    blurb: "Designing a marketplace that finally plays fair",
    color: "#BFE3F5",
    textColor: "#1E2A3A",
    image: "/images/projects/prizekicks.png",
    imagePosition: "top",
  },
  {
    slug: "lofistory",
    title: "Lofistory",
    tags: ["UI Design", "Solo Project"],
    blurb: "Designing and building a cozy corner of the internet for the genre that got me through school",
    color: "#F0664F",
    textColor: "#F7DFA0",
    image: "/images/projects/lofistory.png",
  },
];

// Generic case-study schema — one renderer (src/components/CaseStudy.tsx)
// walks this section list for every project, so adding a new full case
// study is a content change, not a new component.
export type CaseStudyMeta = { label: string; value: string };

// `fit: "contain"` is for diagrams, flows, and other dense/text-heavy
// images where cropping loses information. `fit: "feature"` is for a
// standout piece (a logo, a style guide) that deserves a full-width,
// large, uncropped moment of its own rather than sharing a row. Leave
// unset for screenshots and mockups, which look better in the tilted,
// cropped photo treatment.
export type CaseStudyImage = { src: string; label: string; fit?: "contain" | "feature" | "row" };

// An item in an interleaved paragraph/image sequence (see InterleavedCopy
// in CaseStudy.tsx): a plain string is prose, `{ image }` drops one
// full-width image inline, and `{ row }` drops several smaller images
// side by side — all instead of dumping every image after all the text.
export type InterleavedItem = string | { image: CaseStudyImage } | { row: CaseStudyImage[] };

export type CaseStudySection =
  | { type: "intro"; heading: string; paragraphs: string[] }
  | { type: "overview"; heading: string; rows: { label: string; value: string }[] }
  | {
      type: "pills";
      heading: string;
      // `target` is another section's heading in this same case study
      // (matched case-insensitively) — clicking the pill smooth-scrolls
      // there. Omit it for a stage with no section of its own.
      items: { label: string; target?: string }[];
    }
  | {
      type: "insightCards";
      heading: string;
      intro: string[];
      // `icon` is a key into CASE_STUDY_ICONS (CaseStudy.tsx) — omit for
      // a plain title with no icon. `layout: "tracklist"` renders
      // numbered rows instead of a card grid, and `demo` lets a row show
      // its decision live (a font sample, a palette swatch) rather than
      // just describing it in text.
      layout?: "grid" | "tracklist";
      cards: { title: string; detail: string; icon?: string; demo?: "palette" | "font" }[];
      images?: CaseStudyImage[];
    }
  | { type: "quote"; label: string; text: string; attribution: string }
  | {
      type: "colorCards";
      heading: string;
      intro: string[];
      // `logo` is optional — drop the real file at that path in /public
      // and it renders; until then AssetImage shows an "add image" stub.
      // `bareLogo` skips the white badge behind it, for a logo (like a
      // self-contained circular mark) that doesn't need one for contrast.
      cards: { name: string; color: string; detail: string; logo?: string; bareLogo?: boolean }[];
      images?: CaseStudyImage[];
    }
  | {
      type: "goalChips";
      heading: string;
      intro: InterleavedItem[];
      // `icon` is a key into CASE_STUDY_ICONS (CaseStudy.tsx) — omit for
      // a plain title with no icon.
      goals: { title: string; detail: string; icon?: string }[];
      outro?: string[];
      images?: CaseStudyImage[];
    }
  | {
      type: "media";
      heading: string;
      paragraphs: InterleavedItem[];
      images?: CaseStudyImage[];
      // A row of mobile screenshots shown at their own true aspect ratio
      // in a plain rounded device frame (no notch), rather than cropped
      // to a shared box — lets several sit side by side.
      phoneRow?: { src: string; label: string }[];
      link?: { label: string; url: string };
    }
  | {
      type: "results";
      heading: string;
      intro: string[];
      items: { label: string; detail: string; icon?: string }[];
      outro?: string[];
    }
  | {
      type: "reflection";
      heading: string;
      intro: string[];
      // `layout: "tracklist"` renders numbered rows, echoing Lofistory's
      // own tracklist UI — reserved for case studies with that kind of
      // content hook rather than used as a generic style everywhere.
      layout?: "default" | "tracklist";
      lessons: { title: string; detail: string; icon?: string }[];
      thanks?: string;
    };

export type CaseStudyData = {
  eyebrow: string;
  title: string;
  meta: CaseStudyMeta[];
  heroImage: string;
  heroImagePosition?: string;
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
  shippedProductUrl: "https://www.fourddo.com/fourstories",
  shippedProductLabel: "More at Fourddo.com",
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
        "I was brought on as a Product Design Intern to design and build {{the Fellows Hub}}, a private digital platform serving as the cohort's central home base for curriculum, resources, and communication across the entire program.",
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
      // Research and Prototype map onto real sections below. Define and
      // Implement are close-enough matches (Solution is where the goals
      // got defined; Results is where it shipped). Ideate and Test have
      // no dedicated section in this case study, so they're left as
      // plain (non-clickable) stage markers.
      items: [
        { label: "Research", target: "User Research" },
        { label: "Define", target: "Solution" },
        { label: "Ideate" },
        { label: "Prototype", target: "Prototype" },
        { label: "Test" },
        { label: "Implement", target: "Results" },
      ],
    },
    {
      type: "insightCards",
      heading: "User Research",
      intro: [
        "Research was conducted to better understand the needs of first-time fellowship participants navigating a demanding creative program for the first time.",
        "Due to that research, {{key insights emerged}}:",
      ],
      cards: [
        {
          title: "No Central Home Base",
          detail:
            "Program information, curriculum, and deadlines were scattered across emails and shared documents with no single place to find what they needed.",
          icon: "house",
        },
        {
          title: "First-Time Filmmakers",
          detail:
            "Most fellows had never produced a short film before. The platform needed to support the work without adding friction to an already demanding creative process.",
          icon: "film",
        },
        {
          title: "Unclear Expectations",
          detail:
            "Deliverables, milestones, and payment requirements were communicated across multiple channels, making it easy to lose track of what was due and when.",
          icon: "eyeOff",
        },
        {
          title: "The Hub Had to Earn Trust",
          detail:
            "For the platform to actually get used, it had to feel intentional and worth returning to. A cluttered or confusing experience would push fellows back to email.",
          icon: "shield",
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
          logo: "/images/projects/logos/canvas.png",
          detail:
            "Heavy on functionality but overwhelming for first-time users. Information density without clear hierarchy creates friction before any learning begins.",
        },
        {
          name: "Google Classroom",
          color: "#1F5E70",
          logo: "/images/projects/logos/google-classroom.png",
          detail:
            "Familiar and accessible but visually flat. Lacks the brand presence needed to make a program feel intentional and designed.",
        },
        {
          name: "Notion",
          color: "#1B1B3A",
          logo: "/images/projects/logos/notion.png",
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
        { title: "Clear Navigation", detail: "Instant access to the current week", icon: "compass" },
        { title: "Milestone Visibility", detail: "Deadlines and deliverables always in view", icon: "calendar" },
        { title: "Structured Curriculum", detail: "Weekly content organized by phase", icon: "list" },
        { title: "Low Friction Access", detail: "Private and easy to get into", icon: "lock" },
        { title: "Brand Cohesion", detail: "Felt like Four Stories", icon: "palette" },
      ],
      outro: [
        "Using these goals as a benchmark, I set out to outline information architecture and draft low-fidelity sketches.",
      ],
      images: [{ src: "/images/projects/fourddo-sitemap.png", label: "Add sitemap image", fit: "contain" }],
    },
    {
      type: "media",
      heading: "Prototype",
      paragraphs: [
        "With the structure mapped out, it was time to make it real. The high-fidelity prototype was developed to bring the Fellows Hub to life within the constraints of the fellowship's existing brand and platform.",
      ],
      images: [
        {
          src: "/images/projects/fourddo-prototype-desktop.png",
          label: "Add desktop prototype screenshot/video",
          fit: "feature",
        },
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
            "For the first time, fellows had a single destination for curriculum, deliverables, resources, and program communication, {{eliminating the friction of navigating a 10-week program}} through scattered emails and shared documents.",
          icon: "house",
        },
        {
          label: "Program Clarity",
          detail:
            "A structured week-by-week layout {{gave fellows a clear view of where they were in the program}}, what was coming next, and what was expected of them at every stage of production.",
          icon: "compass",
        },
        {
          label: "Scalable Foundation",
          detail:
            "The Fellows Hub established a {{replicable content structure and design system}} that Four Stories can build on as the fellowship grows beyond its inaugural cohort.",
          icon: "layers",
        },
      ],
      outro: [
        "For a first-of-its-kind program running its inaugural cohort, the hub gave Four Stories something it didn't have before: a place that held everything together. Following the fellowship, program directors noted that {{fellows responded positively to the hub}}, citing it as a meaningful part of their experience.",
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
          icon: "puzzle",
        },
        {
          title: "Clarity is the design:",
          detail:
            "Designing for first-time fellows meant if a fellow couldn't find what they needed in the first few seconds of logging in, the design had failed regardless of how it looked.",
          icon: "target",
        },
        {
          title: "Stakes make better designers:",
          detail:
            "This wasn't a prototype or a concept. It was a live platform that four fellows relied on throughout a demanding 10-week program. That responsibility made every decision feel more considered.",
          icon: "shield",
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
  heroImagePosition: "top",
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
        "Sneaker resale runs on scarcity and hype, and the platforms built around it reflect that. Prices are opaque, interfaces are cluttered, and buyers are left guessing whether they got a fair deal or got played. Two classmates and I had all felt it. PrizeKicks was our answer. {{A marketplace that treats the buyer as the customer, not the mark}}.",
        "I treated the research like it was the product. I led UI and UX from market analysis through two rounds of user testing and a live demo.",
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
            "Existing resale platforms bury product discovery under clutter and give buyers {{no signal for what a fair price looks like}}. Users leave frustrated or leave entirely.",
        },
        {
          label: "Solution",
          value:
            "A buyer-first marketplace with {{price comparison built into the browsing experience}}, a simplified information architecture, and a clean visual system that gets out of the way.",
        },
        {
          label: "My Role",
          value:
            "Lead UI/UX Designer (Market Research, Interviews and Surveys, Personas, Information Architecture, Wireframing, Style Guide, Prototyping, User Testing)",
        },
        { label: "Tools", value: "Figma, Adobe Photoshop, Canva, Figjam" },
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
            "I audited GOAT, Grailed, and Flight Club myself, cataloguing each as strengths and weaknesses in a shared market matrix. All three treated density as a feature. Finding a specific shoe meant fighting the interface first.",
          icon: "grid",
        },
        {
          title: "No Sense of Fair",
          detail:
            "I wrote interviews targeting price, frequency, sites used, frustrations, and habits, then ran a companion survey rating feelings 1 to 10. {{None of the platforms gave buyers a clear read on whether a listing was fair}}. Comparison meant opening tabs and doing the math yourself.",
          icon: "scale",
        },
        {
          title: "Trust Was Missing",
          detail:
            "Interviews and surveys kept circling the same theme. Buyers didn't feel these platforms were on their side, and that suspicion shaped every interaction.",
          icon: "shield",
        },
      ],
      images: [
        { src: "/images/projects/prizekicks-survey-price.png", label: "Survey: price influences my decision", fit: "row" },
        { src: "/images/projects/prizekicks-survey-deals.png", label: "Survey: sales or deals influence my decision", fit: "row" },
        { src: "/images/projects/prizekicks-survey-authenticity.png", label: "Survey: I consider authenticity when buying shoes", fit: "row" },
      ],
    },
    {
      type: "colorCards",
      heading: "Competitive Audit",
      intro: [
        "I audited GOAT, Grailed, and Flight Club myself, cataloguing each against a shared feature matrix spanning nine marketplaces. Every platform had strong inventory and authentication, but little regard for the buyer's actual experience finding and trusting a listing.",
      ],
      cards: [
        {
          name: "GOAT",
          color: "#1A1A1A",
          logo: "/images/projects/logos/goat.png",
          detail:
            "Vast selection with real authentication and pricing history, but shipping has no standard timeline and fees stack up around returns and verification.",
        },
        {
          name: "Grailed",
          color: "#23262F",
          logo: "/images/projects/logos/grailed.webp",
          detail:
            "Negotiation-friendly and flexible on price, but it isn't sneaker-specific and authentication is looser, trading certainty for deal-making room.",
        },
        {
          name: "Flight Club",
          color: "#7A1F2B",
          logo: "/images/projects/logos/flight-club.webp",
          detail:
            "Curated, authenticated, and backed by physical stores, but prices run high with no negotiation and a mostly-final sale policy.",
        },
      ],
      images: [
        { src: "/images/projects/prizekicks-audit-matrix.webp", label: "Full feature matrix across nine marketplaces", fit: "contain" },
      ],
    },
    {
      type: "goalChips",
      heading: "Defining the Product",
      intro: [
        "Research shaped four personas and a set of use cases that clarified what buyers actually needed from a marketplace, letting me hold the full range of buyers in view and see where their needs overlapped and pulled apart.",
        { image: { src: "/images/projects/prizekicks-personas.png", label: "Add personas", fit: "contain" } },
        "From there, a data dictionary catalogued every system the platform required, profiles, payment, notifications, trending, featured, reviews, price comparison, which became the backbone of the information architecture. We showed that architecture to potential users before designing a single screen and revised it based on what they told us.",
        {
          image: {
            src: "/images/projects/prizekicks-ia.png",
            label: "Add information architecture / data dictionary",
            fit: "contain",
          },
        },
        "From this, PrizeKicks' core goals were set:",
      ],
      goals: [
        { title: "Price Transparency", detail: "Fair price context on every listing", icon: "tag" },
        { title: "Clean Navigation", detail: "Find the shoe without fighting the interface", icon: "compass" },
        { title: "Buyer First", detail: "Hierarchy and features built around the customer", icon: "user" },
        { title: "Trust Signals", detail: "Reviews and accountability baked in", icon: "shield" },
      ],
    },
    {
      type: "media",
      heading: "Prototype",
      paragraphs: [
        "The research pointed to three things. Price context on every listing, navigation that doesn't fight you, and a hierarchy built around the buyer, not the seller.",
        "The low-fidelity prototype covered the full shopping flow: sign up, home, search and filters, product pages, price comparison, checkout, and confirmation. We ran think-aloud sessions with users, catalogued every point of friction, and fixed them before moving to high fidelity.",
        { image: { src: "/images/projects/prizekicks-lofi.png", label: "Add lo-fi screens", fit: "contain" } },
        "A style guide locked in the visual identity, then the final prototype went through one more round of testing and refinement.",
        { image: { src: "/images/projects/prizekicks-hifi-home.webp", label: "Hi-fi: Home" } },
        {
          row: [
            { src: "/images/projects/prizekicks-hifi-product.webp", label: "Hi-fi: Product page" },
            { src: "/images/projects/prizekicks-hifi-search.png", label: "Hi-fi: Search" },
            { src: "/images/projects/prizekicks-style-guide.png", label: "Add style guide" },
          ],
        },
      ],
      link: { label: "View Live Demo", url: "https://prizekicks-demo.netlify.app/" },
    },
    {
      type: "results",
      heading: "Results",
      intro: [],
      items: [
        {
          label: "Buyers Could Actually Compare",
          detail:
            "{{Price context on the product page removed the tab-juggling}} that defined every other platform.",
          icon: "scale",
        },
        {
          label: "Navigation Stopped Being Work",
          detail:
            "Testers moved through core flows without stalling. {{The second round of testing surfaced tweaks, not blockers}}.",
          icon: "compass",
        },
        {
          label: "Scoped to What Mattered",
          detail:
            "By cutting the marketplace down to the features that differentiated it, {{the final prototype demonstrated the product's value}} without pretending to be something it wasn't yet.",
          icon: "target",
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
          icon: "skip",
        },
        {
          title: "Users Will Surprise You:",
          detail:
            "Feedback caught me off guard more than once. I've come to think that's the point. The process exists because you can't predict everything on the first try.",
          icon: "user",
        },
        {
          title: "Rely and Be Relied On:",
          detail:
            "Leading design on a team meant trusting people with parts of the project I cared about. That exchange made the final product better than anything I could have built alone.",
          icon: "heart",
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
        "The team didn't have to go far to find inspiration. We just looked at our own shelves. Vinyls, figurines, business cards, blind boxes, books. Each of us collects something, and each of us had the same quiet frustration. There was nowhere online to show it all off the way we wanted to. The platforms we found were too limited, too cluttered, or looked like they hadn't been touched since 2009.",
        "We wanted something warmer. Something like Letterboxd, but for everything. And we didn't want to stop at a prototype. Over two semesters, a five-person team took Goblin Gizmos from a research question to {{a working site with real accounts, real uploads, and a real database}}. I led design, UI, and branding, and wrote front-end code alongside the team.",
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
            "A social, community-first platform with {{a two-layer collection system and a bounty board for trading}}. Designed in Figma, built on PHP and MySQL, validated and responsive.",
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
      type: "pills",
      heading: "Process",
      // Unlike Fourddo, every stage here has a real, exact section to
      // jump to — the project's own narrative already runs in this order.
      items: [
        { label: "Research", target: "What We Found" },
        { label: "Define", target: "The Decision That Shaped Everything" },
        { label: "Ideate", target: "Brand" },
        { label: "Prototype", target: "Design" },
        { label: "Test", target: "Testing" },
        { label: "Implement", target: "Build" },
      ],
    },
    {
      type: "intro",
      heading: "What We Found",
      paragraphs: [
        "We each took a set of existing collector platforms and worked through them. Colnect, CollectorsCorner, Kolekto, MyFigureCollection, CatalogIt. Every one of them had outdated interfaces, cluttered navigation, one niche per site, and a paywall that locked out casual users before they'd gotten started.",
        "Interviews and surveys with collectors across different hobbies confirmed the gap. Nobody wanted another spreadsheet. They wanted something quick to update, easy to browse, and genuinely social. A place to connect over the things they love.",
      ],
    },
    {
      type: "media",
      heading: "The Decision That Shaped Everything",
      paragraphs: [
        "The structural choice we were most deliberate about was the two-layer collection system. A user has collections (say, books), and within each collection they have individual items (a first edition, a worn paperback with notes in the margins). It sounds simple, but it solved the core problem every competitor had: {{how do you let one person hold vinyls and figurines and books on the same shelf without the organization collapsing}}? Each trinket gets room to express its own history. The broader structure stays clean. Nearly every downstream decision, from the data dictionary to the database schema, traced back to this.",
      ],
      images: [
        { src: "/images/projects/goblin-gizmos-use-cases.png", label: "Add use cases", fit: "contain" },
        { src: "/images/projects/goblin-gizmos-ia.png", label: "Add information architecture", fit: "contain" },
        {
          src: "/images/projects/goblin-gizmos-data-dictionary.png",
          label: "Add data dictionary",
          fit: "contain",
        },
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
        { src: "/images/projects/goblin-gizmos-style-guide.png", label: "Add style guide", fit: "feature" },
        { src: "/images/projects/goblin-gizmos-mascot.png", label: "Add mascot", fit: "feature" },
        { src: "/images/projects/goblin-gizmos-palette.png", label: "Add palette", fit: "contain" },
      ],
    },
    {
      type: "media",
      heading: "Design",
      paragraphs: [
        "The lo-fi prototype covered the primary journeys: sign-up, home, category browsing, adding a trinket, the community tab, accessibility settings. Keeping it rough was intentional. It made it easier to cycle ideas if need be.",
        { image: { src: "/images/projects/goblin-gizmos-lofi.png", label: "Add lo-fi screens", fit: "contain" } },
        "A round of user feedback on the lo-fi surfaced friction we hadn't anticipated. Button placement moved, calls to action got clearer, and the category browser got a more prominent path from the home page. Then the high-fidelity prototype brought the full identity to every screen: community feed, category browser, trinket pages, profiles, and the bounty board where users post items to sell or trade.",
        { image: { src: "/images/projects/goblin-gizmos-feedback.png", label: "Add feedback notes", fit: "contain" } },
        { image: { src: "/images/projects/goblin-gizmos-hifi.png", label: "Add hi-fi screens", fit: "contain" } },
      ],
    },
    {
      type: "media",
      heading: "Build",
      paragraphs: [
        "This is where Goblin Gizmos separates from a design exercise.",
        "The stack was HTML, CSS, JavaScript, PHP, and MySQL. PHP handles server-side logic, encrypted passwords, and differentiated access levels. MySQL stores everything from profiles and collections to posts and images. GitHub let five people contribute without stepping on each other.",
        { image: { src: "/images/projects/goblin-gizmos-stack.png", label: "Add stack diagram", fit: "contain" } },
        "Responsiveness runs on three breakpoints: mobile under 600px, tablet from 600px to 1000px, desktop above. On mobile, vertical menus replace dropdowns, buttons scale up for touch, and content is prioritized to cut clutter. Accessibility carried through from design into code: contrast, alt text support, and in-app controls for font size and color scheme. The site passed W3C Markup Validation.",
        {
          image: {
            src: "/images/projects/goblin-gizmos-responsive.png",
            label: "Add responsive screens",
            fit: "contain",
          },
        },
        "The design held up in code. That was the point.",
      ],
      link: {
        label: "View in Figma",
        url: "https://www.figma.com/design/46bklatue2LniKF7D1sEWA/Goblin-Gizmos---HiFi-Desktop?node-id=0-1&t=LguNwJYx7JhQeLfb-1",
      },
    },
    {
      type: "results",
      heading: "Testing",
      intro: [
        "Three usability sessions put {{real people in front of the actual product}} instead of a clickable mockup. Each tester worked through sign-up, navigation, and posting, with later sessions adding editing, comments, and filters as those features came online.",
      ],
      items: [
        {
          label: "The Cut-Off Post Bug",
          detail:
            "The \"view post\" link was routinely clipped on posts past a certain length, blocking testers from opening a post, reading comments, or reaching edit and delete. It surfaced independently across multiple sessions and {{became the milestone's top fix}}.",
          icon: "eyeOff",
        },
        {
          label: "Sign-Up Friction",
          detail:
            "The sign-up confirmation message read as confusing, and testers wanted a sign-up option visible directly on the nav bar instead of buried behind login. We also caught the email field accepting input without an \"@\", a gap worth closing before real accounts depend on it.",
          icon: "lock",
        },
        {
          label: "Small Asks That Mattered",
          detail:
            "Testers wanted the logo to double as a home link and the ability to edit their profile picture, neither of which existed in the earlier build. {{Both shipped by the third round of testing}}.",
          icon: "list",
        },
        {
          label: "What the Fixes Bought Us",
          detail:
            "By the third session, testers could edit and delete both posts and their profile photo, post comments and see them populate, and use search and filters, {{on a build the first two testers couldn't have completed}}.",
          icon: "trophy",
        },
      ],
      outro: [
        "The core flows, sign-up, login, navigation, posting, held up across every session. The real lesson was that a single layout bug, an enlarged footer clipping the post view, can quietly block an entire set of features from ever being tested, let alone used. {{Fixing it unblocked testing on comments, edit, and delete in the same pass}}.",
      ],
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
          icon: "layers",
        },
        {
          title: "Identity Is a North Star:",
          detail:
            "We had a concept we believed in but couldn't agree on how it should look, and once we committed to the goblin direction, everything accelerated. A strong visual identity is a creative north star, and you lose a lot of time without one.",
          icon: "compass",
        },
        {
          title: "Design for the Edges:",
          detail:
            "The testers who challenged our assumptions most were the ones we almost didn't include: the accessibility-conscious user, the person adding a trinket from their phone, the newcomer who doesn't know what a bounty is. Designing for them made the core experience better for everyone.",
          icon: "eyeOff",
        },
        {
          title: "It Was a Democracy:",
          detail:
            "I didn't always get to set the tone, and that was fine. I'm as proud of how we built it as what we built. I'm leaving this project with a clearer sense of who I am as a designer and what I'm capable of when I'm working with the right people. That's the most valuable treasure I could ask for.",
          icon: "scale",
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
  heroImage: "/images/projects/lofistory.png",
  heroBg: "#F0664F",
  heroText: "#F7DFA0",
  accent: "#C24A32",
  footer: "#2B160E",
  sections: [
    {
      type: "intro",
      heading: "Context",
      paragraphs: [
        "Lo-fi hip hop has been a constant companion through every late-night study session, every deadline, every render that took too long. It's a genre with an unmistakable visual identity. Ramen shops, rainy nights, the studying girl at her desk, the warm grain over everything. But when I went looking for a place that told its story, I found Wikipedia pages and playlist descriptions. {{Nothing that felt like the music}}.",
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
            "A warm, low-key three-page site that lets the genre's own visual language do the talking. Cards over forms, hand-drawn type over system fonts, {{live artist data from the Spotify API}}, and a looping rainy ramen shop behind everything.",
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
        "Most of my projects start with a user problem. This one started with a feeling. The question wasn't “what does the user need,” it was “what does this genre feel like, and {{can a website feel like that too}}?”",
        "That framing set three rules before I drew anything.",
      ],
      cards: [
        {
          title: "Nothing Should Feel Urgent",
          detail:
            "Lo-fi is background music by design. No pop-ups, no CTAs shouting for attention, no forms. {{If the site asked anything of you, it had already failed}}.",
          icon: "cup",
        },
        {
          title: "Let the Genre's Own Language Lead",
          detail:
            "The aesthetic already exists and people already love it. My job was to translate it faithfully, not reinvent it.",
          icon: "music",
        },
        {
          title: "Short Enough to Read in One Track",
          detail:
            "Content had to be curated, not exhaustive. A handful of foundational tracks, a few key figures, the conventions that define the sound. Enough to make someone go listen.",
          icon: "clock",
        },
      ],
    },
    {
      type: "insightCards",
      heading: "Design Decisions",
      intro: [],
      layout: "tracklist",
      cards: [
        {
          title: "Three Pages, One Mood",
          detail:
            "Home, About, Artist. Each page has one job. Home sets the atmosphere and invites you in. About tells the story of where the sound came from and what defines it. Artist is where you go listen. Splitting it this way kept every page short enough to feel unhurried, which a single long scroll couldn't do.",
          icon: "layers",
        },
        {
          title: "The Background Was Non-Negotiable",
          detail:
            "A looping ramen shop in the rain sits behind the entire site. It sets the tone before a single word is read and {{does the work a hero section would normally do}}. Everything else is layered on top with enough transparency to let it breathe.",
          icon: "image",
        },
        {
          title: "Cards Instead of Sections",
          detail:
            "Information lives in playful, loosely stacked cards rather than rigid page sections. Each card holds one thing: a track, a producer, a convention. It mirrors the way lo-fi playlists are assembled, one small piece at a time.",
          icon: "cards",
        },
        {
          title: "Hand-Drawn Type",
          detail:
            "Headers run in Just Another Hand, a handwritten font that echoes the sketchy, homemade quality of lo-fi cover art. Body text stays clean and readable so the personality never costs legibility.",
          icon: "pen",
          demo: "font",
        },
        {
          title: "A Palette Pulled From the Art",
          detail:
            "Coral, cornflower blue, and sage green, sampled straight from the live screens, with a pale cream for type and a deep plum instead of true black. Nothing pure white, nothing pure black. Everything stays soft enough to feel handmade.",
          icon: "palette",
          demo: "palette",
        },
        {
          title: "Real Artists, Not Screenshots",
          detail:
            "The Artist page pulls from Spotify rather than a hardcoded list. Album art, names, and links {{stay current without me touching the content}}, and every card goes straight to the music. The genre is alive, so the page should be too.",
          icon: "music",
        },
      ],
      images: [
        { src: "/images/projects/lofistory-mockups.png", label: "Add Figma mockups", fit: "feature" },
        { src: "/images/projects/lofistory-palette.png", label: "Add palette", fit: "contain" },
      ],
    },
    {
      type: "media",
      heading: "Build",
      paragraphs: [
        "A design about restraint deserved a build to match. The site runs on a small set of React components. I used cards, a card grid, a header, the ambient background layer, and React Router handling the three routes. The Artist page calls the Spotify Web API on load and renders the results into cards, so album art, artist names, and links {{stay accurate on their own}}, with a direct button on every card to open the track in Spotify. The looping GIF is optimized so the atmosphere doesn't cost load time.",
        "Wiring up the API was the part that turned this from a mockup into a product. Handling auth, structuring the response, and rendering it inside cards I'd designed without it in mind forced a few layout decisions I wouldn't have made on paper. The album art became the visual anchor of every artist card, {{which was better than what I had drawn}}.",
        "Building it myself meant the details I cared about in Figma survived contact with a browser. The card spacing, the transparency over the background, the way type sits against the grain. Those get lost in handoff, and there was no handoff.",
      ],
      images: [
        { src: "/images/projects/lofistory-desktop-home.webp", label: "Add desktop screenshot", fit: "feature" },
        { src: "/images/projects/lofistory-desktop-artist-icons.webp", label: "Add desktop screenshot", fit: "row" },
        { src: "/images/projects/lofistory-desktop-artist-pioneers.webp", label: "Add desktop screenshot", fit: "row" },
        { src: "/images/projects/lofistory-desktop-about.webp", label: "Add desktop screenshot", fit: "row" },
      ],
      phoneRow: [
        { src: "/images/projects/lofistory-responsive-1.png", label: "Home" },
        { src: "/images/projects/lofistory-responsive-2.png", label: "Artist" },
        { src: "/images/projects/lofistory-responsive-3.png", label: "About" },
      ],
      link: { label: "View Live Site", url: "https://lofistory.netlify.app/" },
    },
    {
      type: "reflection",
      heading: "Reflection",
      intro: [],
      layout: "tracklist",
      lessons: [
        {
          title: "Restraint Is a Decision:",
          detail:
            "Lofistory is the smallest project in my portfolio and the one I come back to most. It taught me that designing for feel is a different muscle than designing for a task, and that the two aren't in competition. Restraint is a decision. Warmth is a decision. Leaving something out is a decision.",
          icon: "skip",
        },
        {
          title: "The Figma File Isn't the Finished Thing:",
          detail:
            "It also settled something for me about code. Turning a mockup into a running site changed my relationship to my own designs, and connecting it to a live API made that shift permanent. I stopped thinking of the Figma file as the finished thing.",
          icon: "code",
        },
      ],
    },
  ],
};

export const knourishCaseStudy: CaseStudyData = {
  eyebrow: "Time Is on the Menu",
  title: "Designing wait-time transparency for students who can't afford to guess",
  meta: [
    { label: "Program", value: "Google UX Design Certificate" },
    { label: "Role", value: "Solo UX/UI Designer" },
    { label: "Platform", value: "Mobile" },
    { label: "Timeline", value: "2025 – 2026" },
  ],
  heroImage: "/images/projects/knourish-hero.png",
  // Knourish's own documented brand: UCF black and gold, on purpose. The
  // true brand gold (#FFC904) reads great on the dark hero/footer below,
  // but as text on the light paper body background it's a 1.4:1 contrast
  // failure (WCAG AA needs 4.5:1) — so the body-section accent is a
  // darkened, same-hue gold instead; the bright gold stays reserved for
  // the dark hero/footer.
  heroBg: "#0C0C20",
  heroText: "#F6FAF9",
  accent: "#7A6000",
  footer: "#08080F",
  sections: [
    {
      type: "intro",
      heading: "Context",
      paragraphs: [
        "Thirty-three minutes and fifty-six seconds. That's how long it took to get the sandwich I ordered at UCF's Student Union. I'd missed my bus, I was late to class, and I didn't even have time to enjoy the thing without missing more of the lecture. Nobody had done anything wrong. The kitchen was slammed, and {{the self-service kiosk I ordered from just didn't tell me}}.",
        "That's the whole problem. Campus ordering interfaces let you order, but they don't help you decide. For a student with fifteen minutes between lectures, the question isn't \"what do I want,\" it's {{\"can I get it and still make it to class.\"}} Knourish is a mobile ordering concept for the UCF campus built around answering that before you commit.",
      ],
    },
    {
      type: "overview",
      heading: "Overview",
      rows: [
        { label: "Project Type", value: "Google UX Design Certificate / Mobile App Concept" },
        {
          label: "Problem",
          value:
            "Campus ordering apps give students no visibility into wait times, so {{every order is a gamble against their schedule}}. Time-pressured students skip meals or risk being late.",
        },
        {
          label: "Solution",
          value:
            "A mobile ordering app that surfaces an Estimated Wait Time before checkout, backed by a Low Wait / Busy / Packed status system and {{a Leave By prompt at confirmation}}, so students can plan around when they need to go.",
        },
        {
          label: "My Role",
          value:
            "Solo UX/UI Designer (Research, Competitive Audit, Empathy Maps, Personas, User Flows, Storyboarding, Information Architecture, Wireframing, Design System, Logo, High-Fidelity Prototyping, Usability Testing)",
        },
        { label: "Tools", value: "Figma, FigJam, React, Claude with Figma MCP" },
      ],
    },
    {
      type: "insightCards",
      heading: "Research",
      intro: [
        "Before designing anything, I built a research plan around one question: how do UCF students actually decide where to eat between classes, and what goes wrong? I ran a ten-question survey on ordering habits at the Student Union, followed by short follow-up interviews with respondents who'd been late or missed transit because of an order. A journey map built around Fez, the primary persona, traced how {{a single lunch order escalates from anxious to frustrated across four stages}}, and that emotional arc drove the rest of the research.",
        "The findings below reflect the patterns this research was designed to surface. Sample data is illustrative and will be updated as responses come in.",
      ],
      cards: [
        {
          title: "The Problem Isn't Ordering, It's Deciding",
          detail:
            "Students consistently know what they want. What they don't know is whether they have time for it. {{The friction lives before the order, not during it}}.",
          icon: "fork",
        },
        {
          title: "Time Pressure Is the Only Fixed Variable",
          detail:
            "The gap between classes doesn't move. The wait time does. Students are deciding with one known number and one hidden one, and the hidden one decides everything.",
          icon: "clock",
        },
        {
          title: "Skipping Is the Default Fallback",
          detail:
            "When a student can't gauge the wait, the safest move is not to eat. Uncertainty costs meals, not just minutes.",
          icon: "skip",
        },
        {
          title: "The Apps Solve the Wrong Half",
          detail:
            "I audited Transact, the campus ordering system, against Uber Eats. Both had polished menus and checkout. Neither surfaced wait time, where the decision happens.",
          icon: "eyeOff",
        },
      ],
      images: [
        { src: "/images/projects/knourish-survey.png", label: "Add survey form", fit: "contain" },
        { src: "/images/projects/knourish-journey-map.png", label: "Add journey map", fit: "contain" },
      ],
    },
    {
      type: "colorCards",
      heading: "Competitive Audit",
      intro: [
        "I audited Knourish against the two apps it would actually compete with for a student's attention: Transact, the existing campus system, and Uber Eats, the commercial app students already trust and compare everything else to.",
        "The gap was the same across every criterion. Campus apps had the payment infrastructure commercial apps don't need, but none of their UX polish. Knourish's opening was never beating Uber Eats on restaurant variety. It was being {{the one app that actually told a student how long they'd wait}}.",
      ],
      cards: [
        {
          name: "Transact (Campus System)",
          color: "#4A4A4A",
          logo: "/images/projects/logos/transact.png",
          detail:
            "Minimal wait-time transparency, just a static \"ready\" notification. Navigation is cluttered with hidden menus, and screen-reader support is inconsistent. Its one edge: direct integration with student ID and meal funds.",
        },
        {
          name: "Uber Eats (Commercial Benchmark)",
          color: "#1C6B4F",
          logo: "/images/projects/logos/uber-eats.png",
          detail:
            "Dynamic, real-time countdowns and an intuitive, search-driven interface set the bar for polish. None of that logic is built for a 15-minute gap between classes, though.",
        },
        {
          name: "Knourish (The Opportunity)",
          color: "#8A6914",
          logo: "/images/projects/knourish-logo.png",
          bareLogo: true,
          detail:
            "Live EWT tied to campus walking time, a clean card-based UI, and one-tap ordering for saved favorites. WCAG-compliant contrast, built around motor-friendly interaction.",
        },
      ],
    },
    {
      type: "media",
      heading: "Who I Designed For",
      paragraphs: [
        "Fez is the primary persona: a student with back-to-back classes and a tight window who needs to know, fast, whether an order is realistic. Fez isn't browsing. Fez is deciding.",
        { image: { src: "/images/projects/knourish-persona-fez.png", label: "Add Fez persona", fit: "contain" } },
        "Vega is the counterweight: an HR director coordinating meals for a busy office who runs into confusing interfaces and customization anxiety, the fear of getting an order wrong when it's for other people. Vega kept the app honest for anyone ordering with more at stake than their own lunch.",
        { image: { src: "/images/projects/knourish-persona-vega.png", label: "Add Vega persona", fit: "contain" } },
        "Fez's flow drove the core design. Vega's kept the customization and menu screens from being an afterthought.",
        { image: { src: "/images/projects/knourish-fez-flow.png", label: "Add Fez user flow", fit: "contain" } },
        { image: { src: "/images/projects/knourish-storyboard.png", label: "Add storyboard", fit: "contain" } },
      ],
    },
    {
      type: "media",
      heading: "The One Feature That Mattered",
      paragraphs: [
        "Everything in Knourish serves the Estimated Wait Time. Rather than a number buried on a confirmation screen, EWT shows up where the decision happens: on the restaurant card, before you tap in. A three-level status system (Low Wait, Busy, Packed) gives an at-a-glance read, and the specific estimate sits beside it. A student scanning Home can {{rule out half the options in two seconds}}.",
        { image: { src: "/images/projects/knourish-ewt.png", label: "Add EWT component", fit: "contain" } },
        "At the other end of the flow, the confirmation screen tells you when to leave. Not just \"your order will be ready in 12 minutes,\" but a Leave By time that closes the loop on the whole problem.",
        { image: { src: "/images/projects/knourish-leave-by.png", label: "Add Leave By prompt", fit: "contain" } },
        "The information architecture stayed deliberately flat to protect that speed. Four top-level nodes: Home, Browse, Orders, Profile, with persistent search available everywhere. Home shows restaurants by context (what's fast right now); Browse is for looking deliberately. Nothing else earned a place unless it got a student to a confident decision faster.",
        { image: { src: "/images/projects/knourish-ia.png", label: "Add IA diagram", fit: "contain" } },
      ],
    },
    {
      type: "media",
      heading: "Real-world Considerations",
      paragraphs: [
        "A wait time is only useful if it's accurate, and only viable if it doesn't make anyone's job harder. Before going further, I had to work out how Estimated Wait Time would actually be calculated, how it would reach students, and what it would ask of the staff behind the counter.",
        "Each estimate comes from the queue, adjusted for how many stations are working and learned from how long orders actually take. It's rounded up and shown as a range because a wait that ends early feels like a win, and one that runs long is the exact problem Knourish exists to solve.",
        "Staff takes on almost nothing new. They already mark orders ready, and that tap is what keeps the estimate honest. When a rush hits faster than the numbers can catch up, they can flip a restaurant straight to High Wait.",
      ],
      images: [
        { src: "/images/projects/knourish-ewt-system.png", label: "Add EWT system graphic", fit: "contain" },
      ],
    },
    {
      type: "media",
      heading: "Design System",
      paragraphs: [
        "Knourish is a UCF product, so it wears UCF colors on purpose. Black and gold (#FFC904) as the core palette, with a dedicated set of status colors for the Low Wait / Busy / Packed system so the wait-time signal never competes with the brand.",
        { image: { src: "/images/projects/knourish-style-guide.png", label: "Add style guide", fit: "contain" } },
        "Knockout for display, Inter for body. An 8pt spacing system. Phosphor Icons in Regular weight. The component library covers buttons with variants, input fields, restaurant cards, busy indicator chips, the EWT display, and the bottom nav.",
        { image: { src: "/images/projects/knourish-components.png", label: "Add components", fit: "contain" } },
        "The logo is a circle with a bowl in the lower half, a K lettermark at the center, and a four-pointed star accent, nodding toward the product's affiliation with food, UCF, and our moniker all at once. Knockout carries the wordmark.",
        { image: { src: "/images/projects/knourish-logo.png", label: "Add logo", fit: "contain" } },
      ],
    },
    {
      type: "media",
      heading: "Prototype",
      paragraphs: [
        "Digital lo-fi wireframes covered the full core flow, including Login, Home, Browse, Restaurant, Menu, Item and Customization, Confirm, and Checkout.",
        { image: { src: "/images/projects/knourish-lofi.png", label: "Add lo-fi wireframes", fit: "contain" } },
        "The high-fidelity prototype carries the full persona journey. Users land on Home, scan wait times, pick a spot, build an order, confirm with a Leave By time, check out, and track it. Every screen is built from the component library.",
        { image: { src: "/images/projects/knourish-hifi.png", label: "Add hi-fi screens", fit: "contain" } },
        "To test with real interactions instead of hotspots, I used Claude with Figma's MCP to translate the high-fidelity screens and design tokens into a working React prototype. I directed the structure and reviewed every component against the Figma source; Claude handled the boilerplate.",
      ],
    },
    {
      type: "media",
      heading: "Testing",
      paragraphs: [
        "[Fill after your five-person round: participants, tasks, what broke, what changed. This is the section that turns the project from a concept into evidence.]",
      ],
    },
    {
      type: "reflection",
      heading: "Reflection",
      intro: [],
      lessons: [
        {
          title: "One Problem, Fully:",
          detail:
            "My instinct on earlier projects was to design everything. Knourish was the first time I picked one problem and refused to let anything else in. The app is better for it, and so is the case study.",
          icon: "target",
        },
        {
          title: "The Decision Is the Product:",
          detail:
            "Ordering was never the hard part. Once I understood that the real user moment was the decision before the order, every screen had a clear job. I want to find that moment earlier on every project.",
          icon: "fork",
        },
        {
          title: "Brand as Constraint:",
          detail:
            "Designing inside UCF's identity could have felt limiting. Instead, it gave the app an immediate sense of place and purpose. Serving that identity was crucial to having Knourish thrive.",
          icon: "palette",
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
  knourish: knourishCaseStudy,
};

export const extras = {
  heading: "Extras",
  motion: {
    heading: "Things in Motion",
    subheading: "Motion design and animation - made in After Effects",
    items: [
      { video: "/images/motion/birdworm.mp4", alt: "Bird and worm motion piece" },
      { video: "/images/motion/birbworm2.mp4", alt: "Bird and worm motion piece, second pass" },
      { video: "/images/motion/kuroskai1.mp4", alt: "Kurosaki motion piece" },
      { video: "/images/motion/kurosaki2.mp4", alt: "Kurosaki motion piece, second pass" },
      { video: "/images/motion/ramen.mp4", alt: "Ramen motion piece" },
      { video: "/images/motion/graph.mp4", alt: "Graph motion piece" },
      { video: "/images/motion/miseducation.mp4", alt: "Miseducation motion piece" },
      { video: "/images/motion/pizazz.mp4", alt: "Pizazz motion piece" },
      { video: "/images/motion/bum.mp4", alt: "Bum motion piece" },
      { video: "/images/motion/ppp.mp4", alt: "PPP motion piece" },
    ],
  },
  contact: {
    heading: "Contact",
    blurb: "Hit my line, anytime! I'm looking forward to hearing from you and seeing what we can create together!",
  },
};
