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

export const hero = {
  eyebrow: "Hi, i'm Isaac but...",
  lines: [
    [
      { text: "FRIENDS", color: "#8FCBEA", variant: "outline" },
      { text: "CALL", color: "#D6486B", variant: "fill" },
    ],
    [
      { text: "ME", color: "#F7DFA0", variant: "fill" },
      { text: "IBI", color: "#3E6B80", variant: "fill" },
    ],
  ],
  tagline: "Designing Experiences with intention, honesty, and a touch of whimsy",
  portraitBadge: "UCF Senior · Digital Media",
  primaryCta: { label: "View My Work", href: "/projects" },
  secondaryCta: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/extras#contact" },
  ],
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
    tags: ["UX Design", "Branding"],
    blurb: "Building a community platform where any collection belongs",
    color: "#A8CF45",
    textColor: "#2B3A1F",
    image: "/images/projects/goblin-gizmos.png",
    hasFullCaseStudy: false,
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
    tags: ["UX Design", "Graphic Design"],
    blurb: "Designing a warm, cozy corner of the internet for a genre that deserves one",
    color: "#F0664F",
    textColor: "#F7DFA0",
    image: "/images/projects/lofistory.png",
    hasFullCaseStudy: false,
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
  // A "prize"/trophy-gold identity of its own — deliberately not the
  // pale blue used for its small teaser card (that blue was chosen to
  // complement Fourddo's indigo in the Selected Work lineup) and not
  // Fourddo's indigo either. Distinct hue from every other page on site.
  heroBg: "#E3A63C",
  heroText: "#241A08",
  accent: "#A66A1B",
  footer: "#2B1D0A",
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

export const caseStudies: Record<string, CaseStudyData> = {
  fourddo: fourddoCaseStudy,
  prizekicks: prizekicksCaseStudy,
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
