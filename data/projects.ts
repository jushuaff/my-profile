export type Project = {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  liveUrl: string;
  sourceUrl: string;
  image: string;
  stack: string[];
  highlight: string;
};

export const projects: Project[] = [
  {
    slug: "foam-coffee",
    title: "Foam Coffee Baguio",
    category: "Business / Cafe Concept Website",
    shortDescription:
      "A polished local café concept website with brand storytelling, maps, menu presentation, and inquiry flow.",
    description:
      "Foam Coffee Baguio is a concept website designed to present a premium local café brand online with clear messaging, service highlights, menu browsing, and a conversion-focused inquiry experience.",
    liveUrl: "https://foam-cafe.vercel.app/",
    sourceUrl: "https://github.com/jushuaff/foam-cafe",
    image: "/projects/foam.webp",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Resend", "Zod", "Vercel"],
    highlight: "Business website concept built around brand and conversion flow.",
  },
  {
    slug: "valencias-restaurant",
    title: "Valencia's Restaurant",
    category: "Restaurant Business Website Concept",
    shortDescription:
      "A multi-page restaurant website with menu filtering, reservation inquiry, gallery, and accessible content structure.",
    description:
      "This restaurant concept focuses on a better guest journey with clear menu experiences, event information, reservation inquiry, and responsive layout across devices.",
    liveUrl: "https://valencias-restaurant.vercel.app/",
    sourceUrl: "https://github.com/jushuaff/valencias-restaurant",
    image: "/projects/valencias.webp",
    stack: ["Vue 3", "Vite", "JavaScript", "Vue Router", "Composition API", "Lucide Vue", "Resend", "Zod", "Vercel"],
    highlight: "Multi-page restaurant concept with accessible booking and inquiry flow.",
  },
  {
    slug: "highland-brew",
    title: "Highland Brew Cafe",
    category: "Cafe Business Website Concept",
    shortDescription:
      "A premium cafe site with a mountain-inspired aesthetic, strong editorial layout, and contact flow.",
    description:
      "Highland Brew Cafe explores a refined visual identity for a Baguio café concept with a strong menu experience, accessible mobile navigation, and a clean inquiry pattern.",
    liveUrl: "https://highlandbrew-cafe-sm.vercel.app/",
    sourceUrl: "https://github.com/jushuaff/highlandbrew-cafe-sm",
    image: "/projects/highland-brew.webp",
    stack: ["React", "Vite", "JavaScript", "Resend", "Vercel"],
    highlight: "Premium cafe concept with editorial design and conversion-oriented sections.",
  },
];

export const projectCaseStudies = {
  "foam-coffee": {
    overview:
      "A concept website for a Baguio café brand, designed to present its identity, menu, location, and inquiry flow in a polished and conversion-friendly way.",
    challenge:
      "The goal was to craft a business website that felt premium and welcoming while communicating location, offerings, and contact information clearly across both mobile and desktop views.",
    approach:
      "I structured the content to feel editorial and approachable, pairing strong brand storytelling with clear calls to action and a responsive, maintainable front-end setup.",
    features: [
      "Responsive layout and mobile-first navigation",
      "Menu presentation and story-driven sections",
      "Location and map integration details",
      "Inquiry form with validation and email set-up",
      "Server-side email handling using environment-protected variables",
    ],
    implementation:
      "The site uses a modern Next.js App Router setup with server-side contact processing, reusable sections, and a clean data-driven content structure for easier future updates.",
    result:
      "This is an independent business website concept demonstrating how a local business can present itself professionally online with modern UX and practical conversion features.",
  },
  "valencias-restaurant": {
    overview:
      "A multi-page restaurant concept website focused on menu browsing, reservations, and explanatory content for guests and event inquiries.",
    challenge:
      "The project needed to feel welcoming and highly usable while balancing menu content, visuals, and practical inquiry flows without overwhelming the visitor.",
    approach:
      "I organized the experience into clear sections for dining, events, gallery, contact, and reservations so users can find information quickly and easily.",
    features: [
      "Multi-page architecture for clearer navigation",
      "Menu filtering and category browsing",
      "Reservation and contact inquiry flows",
      "Gallery and event information sections",
      "SEO-aware metadata and accessibility-conscious content structure",
    ],
    implementation:
      "The site was built with Vue 3 and Vite, using composable patterns, serverless email endpoints, and validation to keep the experience responsive and practical.",
    result:
      "This concept demonstrates how a restaurant website can combine a polished visual identity with functionality needed for inquiry and reservation workflows.",
  },
  "highland-brew": {
    overview:
      "A premium café concept website using a mountain-inspired visual direction and clean editorial layout to convey atmosphere and service.",
    challenge:
      "The aim was to create a site that feels premium and memorable without becoming overly decorative or difficult to maintain.",
    approach:
      "I focused on clear hierarchy, a balanced palette, structured content blocks, and mobile-friendly navigation to create a more professional business presentation.",
    features: [
      "Responsive design with dedicated menu experience",
      "Custom brand direction and visual identity",
      "Accessible mobile navigation and content flow",
      "Contact form and serverless email support",
      "Structured layout for easy business updates",
    ],
    implementation:
      "The concept uses a lightweight React and Vite setup to keep performance efficient while still presenting a premium front-end experience.",
    result:
      "This project shows how a business website can communicate warmth, professionalism, and clarity through disciplined UX and modern front-end design.",
  },
};
