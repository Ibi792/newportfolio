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

// Shared neutral canvas used for page bodies, so color reads as an accent
// (hero bands, headings, buttons, cards) rather than wallpaper. The case
// study family keeps its own cooler neutral — see `caseStudy` below.
const paper = "#FAF6EF";
const paperInk = "#241F1A";
const footerText = "#F3EFE6";

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
  caseStudy: {
    heroBg: "#4A47B0",
    heroText: "#EEF0FB",
    heroAccent: "#EEF0FB",
    bodyBg: "#EEF0FB",
    bodyInk: "#232042",
    bodyAccent: "#5B57C9",
    nav: "#1B1830",
    navInk: "#EEF0FB",
    footer: "#1B1830",
    footerText,
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
    tags: ["UX Design", "Branding"],
    blurb: "Designing a marketplace that finally plays fair",
    color: "#BFE3F5",
    textColor: "#1E2A3A",
    image: "/images/projects/prizekicks.png",
    hasFullCaseStudy: false,
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

export const fourddoCaseStudy = {
  eyebrow: "Guiding Future Filmmakers",
  title: "Designing a hub for emerging filmmakers to learn, create, and connect",
  meta: [
    { label: "Company", value: "Fourddo" },
    { label: "Role", value: "Lead Product Design Intern" },
    { label: "Year", value: "2026" },
  ],
  heroImage: "/images/projects/four-stories-hero.png",
  shippedProductUrl: "#",
  fellowship: {
    heading: "The Fellowship",
    paragraphs: [
      "Fourddo is a nonprofit dedicated to amplifying causes and initiatives that shape the lives of today's youth. This past summer, they launched Four Stories, a 10-week filmmaking fellowship in Boston pairing four emerging directors with mentors to develop, produce, and premiere original PSA films.",
      "I was brought on as a Product Design Intern to design and build the Fellows Hub, a private digital platform serving as the cohort's central home base for curriculum, resources, and communication across the entire program.",
    ],
  },
  overview: {
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
  process: {
    heading: "Process",
    steps: ["Research", "Define", "Ideate", "Prototype", "Test", "Implement"],
  },
  userResearch: {
    heading: "User Research",
    intro:
      "Research was conducted to better understand the needs of first-time fellowship participants navigating a demanding creative program for the first time.",
    insightsIntro: "Due to that research, key insights emerged:",
    insights: [
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
    quote: {
      label: "A Note From the field",
      text: "There's just a lot going on, and it's hard to keep track of where everything lives.",
      attribution: "Fellow, Week 1 check-in",
    },
  },
  competitiveAnalysis: {
    heading: "Competitive Analysis",
    intro:
      "Existing fellowship and learning platforms were reviewed to understand how structured programs communicate curriculum, deadlines, and resources to participants.",
    items: [
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
  solution: {
    heading: "Solution",
    intro: "Through this research, the Fellows Hub's main goals were identified.",
    goals: [
      { title: "Clear Navigation", detail: "Instant access to the current week" },
      { title: "Milestone Visibility", detail: "Deadlines and deliverables always in view" },
      { title: "Structured Curriculum", detail: "Weekly content organized by phase" },
      { title: "Low Friction Access", detail: "Private and easy to get into" },
      { title: "Brand Cohesion", detail: "Felt like Four Stories" },
    ],
    outro:
      "Using these goals as a benchmark, I set out to outline information architecture and draft low-fidelity sketches.",
    sitemapImage: "/images/projects/fourddo-sitemap.png",
  },
  prototype: {
    heading: "Prototype",
    intro:
      "With the structure mapped out, it was time to make it real. The high-fidelity prototype was developed to bring the Fellows Hub to life within the constraints of the fellowship's existing brand and platform.",
    desktopImage: "/images/projects/fourddo-prototype-desktop.png",
    mobileImage: "/images/projects/fourddo-prototype-mobile.png",
  },
  results: {
    heading: "Results",
    intro:
      "The Fellows Hub launched on June 12th in time for the first kickoff session. All four fellows received access and used the platform throughout the program. The practical impacts of the design quickly became clear:",
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
    outro:
      "For a first-of-its-kind program running its inaugural cohort, the hub gave Four Stories something it didn't have before: a place that held everything together. Following the fellowship, program directors noted that fellows responded positively to the hub, citing it as a meaningful part of their experience.",
  },
  improvements: {
    heading: "Improvements",
    intro:
      "Based on feedback from the team and cohort, a “meet the fellows” section was added, highlighting the fellows and their films.",
    image: "/images/projects/fourddo-cohort.png",
  },
  reflection: {
    heading: "Reflection",
    intro:
      "My time with Fourddo marks several firsts for me. First established brand, first real technology constraints, first time designing specifically for a defined group of users. Each one pushed me in a different direction and left me with something I carry forward.",
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
