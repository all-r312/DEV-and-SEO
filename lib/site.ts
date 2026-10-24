export const siteName = "DEV and SEO";
export const siteDescription =
  "Thoughtful websites and practical SEO for businesses ready to grow online.";
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "http://localhost:3000";

export const services = [
  {
    slug: "web-development",
    title: "Website design & development",
    shortTitle: "Web development",
    description:
      "A clear, polished website that explains what you do and makes it easy for the right customers to take the next step.",
    detail:
      "We plan and build responsive business websites around your customers, your goals, and the content you actually need.",
    icon: "window",
    deliverables: ["Responsive page design", "Clear calls to action", "SEO-ready page structure", "Launch checks and handover"],
    fit: "Businesses that need a professional online home, from a first website to a more capable digital presence.",
  },
  {
    slug: "business-websites",
    title: "Business website development",
    shortTitle: "Business websites",
    description:
      "A useful, trustworthy website that gives customers the information they need to choose your business.",
    detail:
      "We turn your services, strengths, and customer questions into a focused website with a sensible structure and simple ways to get in touch.",
    icon: "briefcase",
    deliverables: ["Page and content planning", "Custom visual direction", "Contact pathways", "Responsive implementation"],
    fit: "Service businesses, consultants, and growing teams that want a better way to present their work.",
  },
  {
    slug: "ecommerce",
    title: "E-commerce websites",
    shortTitle: "E-commerce",
    description:
      "A straightforward shopping experience designed to help customers browse, understand, and buy with confidence.",
    detail:
      "We can help plan a product-led storefront, simplify key shopping journeys, and build a foundation that can grow with your catalogue.",
    icon: "cart",
    deliverables: ["Storefront structure", "Product and category templates", "Mobile-first shopping journey", "Platform and launch guidance"],
    fit: "Businesses preparing to sell products online or improve an existing storefront.",
  },
  {
    slug: "landing-pages",
    title: "Landing page development",
    shortTitle: "Landing pages",
    description:
      "A focused page that gives a campaign or offer a clear message and a useful next step.",
    detail:
      "We shape a dedicated page around one audience and one clear goal, with concise content, responsive design, and a considered conversion path.",
    icon: "window",
    deliverables: ["Audience and goal alignment", "Focused page structure", "Responsive page build", "Form or inquiry pathway"],
    fit: "Businesses running a campaign or introducing a specific service, product, or offer.",
  },
  {
    slug: "website-redesign",
    title: "Website redesign & optimization",
    shortTitle: "Redesign & optimization",
    description:
      "Make an existing website clearer, easier to use, and better aligned with where your business is going.",
    detail:
      "We review the current site and identify practical opportunities across its structure, content, experience, and performance before proposing a redesign scope.",
    icon: "window",
    deliverables: ["Current site review", "Prioritized improvement plan", "Updated visual and page direction", "Responsive refinements"],
    fit: "Businesses whose current website no longer reflects their offer or makes key information hard to find.",
  },
  {
    slug: "seo",
    title: "Search engine optimization",
    shortTitle: "SEO",
    description:
      "A practical SEO foundation that helps search engines understand your site and customers find useful answers.",
    detail:
      "We focus on sound site structure, useful content, technical basics, and measurable improvements—without ranking guarantees.",
    icon: "search",
    deliverables: ["Technical and on-page review", "Keyword and intent research", "Content recommendations", "Prioritized action plan"],
    fit: "Businesses that want a clearer, sustainable approach to improving their search visibility.",
  },
  {
    slug: "technical-seo",
    title: "Technical SEO",
    shortTitle: "Technical SEO",
    description:
      "Address the technical foundations that help search engines access, understand, and index your website.",
    detail:
      "We review relevant technical SEO signals, identify issues worth prioritizing, and make or scope practical improvements for your site.",
    icon: "search",
    deliverables: ["Technical site review", "Crawlability and indexation checks", "Prioritized fixes", "Implementation guidance"],
    fit: "Businesses looking to identify technical barriers or improve the foundations of an existing website.",
  },
  {
    slug: "on-page-seo",
    title: "On-page SEO",
    shortTitle: "On-page SEO",
    description:
      "Make important pages more useful to visitors and easier for search engines to interpret.",
    detail:
      "We improve page structure and on-page signals in context, keeping the content clear for people rather than writing for search engines alone.",
    icon: "search",
    deliverables: ["Page-by-page review", "Heading and metadata guidance", "Internal linking recommendations", "Content refinement priorities"],
    fit: "Businesses with useful pages that need a clearer structure, more focused content, or improved on-page foundations.",
  },
  {
    slug: "keyword-content-strategy",
    title: "Keyword research & content strategy",
    shortTitle: "Keyword & content strategy",
    description:
      "Understand what your audience is looking for and plan content that answers their real questions.",
    detail:
      "We research search intent and topic opportunities, then organize useful content priorities around your services and the questions customers ask.",
    icon: "search",
    deliverables: ["Audience and intent research", "Relevant keyword themes", "Content topic priorities", "Practical content structure"],
    fit: "Businesses ready to make a more focused plan for useful, search-aware website content.",
  },
  {
    slug: "local-seo",
    title: "Local SEO",
    shortTitle: "Local SEO",
    description:
      "Help nearby customers discover your business with accurate information and useful location-focused content.",
    detail:
      "We review the local search essentials that apply to your business and help make your services, contact details, and service information clear.",
    icon: "pin",
    deliverables: ["Local presence review", "On-page location recommendations", "Business profile guidance", "Local content priorities"],
    fit: "Businesses serving customers in a defined local area. Recommendations depend on your real locations and service area.",
  },
  {
    slug: "maintenance",
    title: "Website maintenance & support",
    shortTitle: "Maintenance",
    description:
      "Keep your website cared for with planned updates, practical fixes, and a clear point of contact.",
    detail:
      "Ongoing support can be scoped around your site and priorities. We agree what is included before any recurring work begins.",
    deliverables: ["Agreed update scope", "Routine health checks", "Small improvements by agreement", "Clear support communication"],
    fit: "Owners who want a dependable plan for keeping an existing website up to date.",
    icon: "window",
  },
] as const;

export const faqs = [
  {
    question: "How much does a website project cost?",
    answer:
      "Cost depends on the pages, features, content, and integrations involved. Share a little about your goals and we’ll provide a clear scope and estimate before work begins.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Timing depends on the project scope and how quickly content and feedback are available. We’ll agree a realistic schedule during planning rather than promise a one-size-fits-all deadline.",
  },
  {
    question: "Can you help with SEO after launch?",
    answer:
      "Yes. SEO can be scoped as a technical review, on-page improvements, local search support, or an ongoing plan. Search rankings are never guaranteed.",
  },
  {
    question: "Do you work with businesses outside Pakistan?",
    answer:
      "We’re currently based in Pakistan and can discuss projects with international clients. We’ll confirm availability, communication, and scope before making a commitment.",
  },
];

export const demoProjects = [
  {
    title: "Northstar Studio",
    category: "Business website concept",
    description:
      "A demonstration concept for a creative studio, focused on a clear portfolio, considered typography, and a straightforward inquiry path.",
    services: "Web design · Development",
    tone: "project-blue",
  },
  {
    title: "Field & Form",
    category: "E-commerce concept",
    description:
      "A clearly labeled storefront concept exploring product discovery, thoughtful product details, and a calmer mobile shopping experience.",
    services: "E-commerce · UX",
    tone: "project-sand",
  },
  {
    title: "Harbor Dental",
    category: "Local service concept",
    description:
      "A fictional local-service concept designed to make essential information, service pages, and appointment inquiries easier to find.",
    services: "Web design · Local SEO",
    tone: "project-mint",
  },
] as const;

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
