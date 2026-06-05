export const COMPANY = {
  name: "UMP Consultants",
  tagline: "Towards Growth",
  phone: "+91 84213 45120",
  phoneRaw: "918421345120",
  email: "contact@umpconsultants.in",
  address: "206, Madhyila Heritage, Loni Kalbhor, Pune",
};

export type Industry = {
  slug: string;
  name: string;
  short: string;
  hero: string;
  overview: string;
  challenges: string[];
  solutions: string[];
  services: string[];
  benefits: string[];
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "hospitals",
    name: "Hospitals",
    short: "Healthcare surveys, patient feedback & hospital growth.",
    hero: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80",
    overview:
      "We help hospitals understand patient sentiment, evaluate local market potential, and design outreach programs that grow trust and footfall.",
    challenges: [
      "Patient acquisition in competitive catchments",
      "Measuring patient satisfaction beyond NPS",
      "Local awareness of new specialties & camps",
      "Doctor & department-level reputation",
    ],
    solutions: [
      "Patient feedback & satisfaction surveys",
      "Local market & catchment area studies",
      "Hospital branding & promotion campaigns",
      "Health camp & event support across zones",
    ],
    services: ["Surveys", "Area Coverage", "Promotion", "Event Management"],
    benefits: [
      "Evidence-based service improvements",
      "Higher OPD & IPD conversions",
      "Stronger community trust",
      "Clear ROI on outreach spend",
    ],
  },
  {
    slug: "building-construction",
    name: "Building & Construction",
    short: "Feasibility, area reports, heat maps and project marketing.",
    hero: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    overview:
      "From micro-market feasibility to launch promotion, we equip developers with the on-ground intelligence and campaign engine to sell faster.",
    challenges: [
      "Choosing the right micro-market & price band",
      "Mapping competing projects & inventory",
      "Generating qualified site visits",
      "Tracking monthly market movement",
    ],
    solutions: [
      "Feasibility mapping & demand studies",
      "Area reports and pricing heat maps",
      "Launch promotions & lead campaigns",
      "Monthly real-estate industry reports",
    ],
    services: ["Surveys", "Area Coverage", "Marketing", "Strategic Initiatives"],
    benefits: [
      "Sharper site & product decisions",
      "Lower cost per qualified lead",
      "Faster inventory absorption",
      "Continuous market visibility",
    ],
  },
  {
    slug: "social-life-politics",
    name: "Social Life / Politics",
    short: "Public opinion, voter research, campaigns & constituency reports.",
    hero: "https://images.unsplash.com/photo-1541872703-74c5e44368f4?auto=format&fit=crop&w=1600&q=80",
    overview:
      "We support political parties, candidates and civic organizations with rigorous public opinion research and a full ground campaign machinery.",
    challenges: [
      "Reading sentiment across diverse voter segments",
      "Issue prioritization at booth & ward level",
      "Mobilizing volunteers and events at scale",
      "Counter-narrative & rapid response",
    ],
    solutions: [
      "Public opinion & voter perception surveys",
      "Constituency & booth-level area reports",
      "Voter awareness & outreach campaigns",
      "Event management & rally coordination",
    ],
    services: [
      "Surveys",
      "Area Coverage",
      "Promotion",
      "Event Management",
      "Strategic Initiatives",
    ],
    benefits: [
      "Data-backed campaign strategy",
      "Targeted messaging by segment",
      "Strong on-ground execution",
      "Measurable mobilization",
    ],
  },
  {
    slug: "healthcare-pharma",
    name: "Healthcare & Pharma",
    short: "Doctor & chemist surveys, product promotion and field research.",
    hero: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1600&q=80",
    overview:
      "We help pharma brands and healthcare companies validate products, map prescribers and chemists, and design promotion programs that move scripts.",
    challenges: [
      "Understanding prescriber preferences",
      "Mapping chemist coverage & stock",
      "Launch & cycle campaign effectiveness",
      "Field force productivity & feedback",
    ],
    solutions: [
      "Doctor, chemist & patient surveys",
      "Field research across territories",
      "Product promotion & detailing support",
      "Strategic initiatives for new launches",
    ],
    services: ["Surveys", "Area Coverage", "Promotion", "Strategic Initiatives"],
    benefits: [
      "Stronger prescriber relationships",
      "Better stock availability & pull",
      "Faster product adoption",
      "Field-validated strategy",
    ],
  },
];

export type Service = {
  slug: string;
  name: string;
  short: string;
  icon: string;
  hero: string;
  description: string;
  benefits: string[];
  process: { title: string; desc: string }[];
  industries: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "surveys",
    name: "Surveys",
    short: "Quantitative & qualitative research designed for clarity.",
    icon: "ClipboardList",
    hero: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80",
    description:
      "We design and execute surveys across the spectrum — public opinion, customer satisfaction, doctor/chemist, employee, exit polls, brand tracking and more — with rigorous sampling, multilingual fieldwork and clean reporting.",
    benefits: [
      "Statistically sound sampling & weighting",
      "Trained multilingual field teams",
      "Real-time dashboards & geo-tagged data",
      "Actionable insights, not just numbers",
    ],
    process: [
      { title: "Define", desc: "Objectives, hypotheses, target universe." },
      { title: "Design", desc: "Sampling plan, questionnaire, pilot." },
      { title: "Fieldwork", desc: "Trained enumerators, quality audits." },
      { title: "Analyze", desc: "Cleaning, weighting, segmentation." },
      { title: "Report", desc: "Insights, visualizations, recommendations." },
    ],
    industries: ["Hospitals", "Politics", "Pharma", "Construction"],
  },
  {
    slug: "area-coverage",
    name: "Area Coverage",
    short: "On-ground reach across constituencies, catchments and territories.",
    icon: "MapPin",
    hero: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1600&q=80",
    description:
      "We deploy structured ground teams to cover wards, booths, catchments, distributor zones and chemist beats — generating reliable footprint, intelligence and visibility for your brand or campaign.",
    benefits: [
      "Granular geographic planning",
      "Daily activity tracking",
      "Mapped & geo-tagged execution",
      "Scalable team size on demand",
    ],
    process: [
      { title: "Map", desc: "Define zones, beats and frequency." },
      { title: "Mobilize", desc: "Recruit and train ground teams." },
      { title: "Execute", desc: "Daily coverage with check-ins." },
      { title: "Track", desc: "Live dashboards, geo-stamped." },
      { title: "Report", desc: "Coverage maps & insights." },
    ],
    industries: ["Politics", "Pharma", "Hospitals", "Construction"],
  },
  {
    slug: "promotion",
    name: "Promotion",
    short: "Targeted promotion that turns attention into action.",
    icon: "Megaphone",
    hero: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
    description:
      "From hospital camps and pharma detailing to political outreach and real-estate launches, we craft promotions tied to clear KPIs — leads, footfalls, scripts or votes.",
    benefits: [
      "KPI-led creative & messaging",
      "Mix of digital, print & on-ground",
      "Audience-specific targeting",
      "Transparent performance reports",
    ],
    process: [
      { title: "Audience", desc: "Identify segments and triggers." },
      { title: "Message", desc: "Craft creative and channel mix." },
      { title: "Deploy", desc: "Launch across selected channels." },
      { title: "Optimize", desc: "A/B test and reallocate." },
      { title: "Report", desc: "Measure against KPIs." },
    ],
    industries: ["Hospitals", "Pharma", "Politics", "Construction"],
  },
  {
    slug: "marketing",
    name: "Marketing",
    short: "Full-funnel marketing strategy and execution.",
    icon: "TrendingUp",
    hero: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    description:
      "We help brands position, plan and execute integrated marketing — research-led positioning, content, digital, BTL, lead funnels and analytics — calibrated to your sector.",
    benefits: [
      "Research-led positioning",
      "Integrated digital + offline",
      "Lead funnel & CRM design",
      "Monthly review cadence",
    ],
    process: [
      { title: "Insight", desc: "Market & customer research." },
      { title: "Strategy", desc: "Positioning, channels, budget." },
      { title: "Build", desc: "Assets, funnels, campaigns." },
      { title: "Run", desc: "Always-on execution." },
      { title: "Review", desc: "KPIs, ROI, next steps." },
    ],
    industries: ["Construction", "Hospitals", "Pharma"],
  },
  {
    slug: "event-management",
    name: "Event Management",
    short: "End-to-end event planning and on-ground execution.",
    icon: "CalendarDays",
    hero: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1600&q=80",
    description:
      "Whether it's a health camp, public rally, conference, CME, project launch or door-to-door drive — we plan logistics, vendors, permissions and on-site teams for a flawless show.",
    benefits: [
      "Single point of accountability",
      "Vendor & permissions handled",
      "Trained on-site coordinators",
      "Post-event analytics & coverage",
    ],
    process: [
      { title: "Brief", desc: "Goals, scale and audience." },
      { title: "Plan", desc: "Venue, vendors, run-of-show." },
      { title: "Setup", desc: "Logistics & permissions." },
      { title: "Execute", desc: "On-ground coordination." },
      { title: "Wrap", desc: "Report, media, learnings." },
    ],
    industries: ["Politics", "Hospitals", "Pharma", "Construction"],
  },
  {
    slug: "strategic-initiatives",
    name: "Strategic Initiatives",
    short: "Custom programs for entries, launches and turnarounds.",
    icon: "Target",
    hero: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    description:
      "When the brief is bigger than a single project — a new market entry, a campaign turnaround, a brand reset — we build a custom program combining research, ground teams and marketing.",
    benefits: [
      "Cross-functional senior team",
      "Tailored to specific outcomes",
      "Quarterly milestones & reviews",
      "Confidential & accountable",
    ],
    process: [
      { title: "Discover", desc: "Deep dive into context." },
      { title: "Frame", desc: "Hypotheses & options." },
      { title: "Design", desc: "Program & milestones." },
      { title: "Run", desc: "Execute with you." },
      { title: "Sustain", desc: "Handover & review." },
    ],
    industries: ["Politics", "Pharma", "Construction", "Hospitals"],
  },
];

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  date: string;
  category: string;
  image: string;
};

export const BLOGS: Article[] = [
  {
    slug: "primary-research-still-wins",
    title: "Why Primary Research Still Wins in the Age of AI",
    excerpt:
      "Models are powerful — but they cannot replace boots-on-ground evidence. Here is why primary research is the backbone of smart decisions.",
    body: "AI tools have made secondary research faster and cheaper than ever. Yet the most important questions — what your patients feel, what voters fear, what chemists actually stock — can only be answered by going to the source.\n\nAt UMP, we combine the speed of digital with the depth of fieldwork. Our enumerators are trained, our questionnaires are piloted, and our analysis is sharp. The result: insights you can defend in a board room and act on the next morning.\n\nPrimary research is not nostalgia. It is the only way to build a moat of proprietary evidence in a market where everyone has access to the same models.",
    date: "May 18, 2026",
    category: "Research",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "healthcare-promotion-playbook",
    title: "A Modern Playbook for Healthcare Promotion",
    excerpt:
      "How leading hospitals turn community trust into sustainable OPD growth — without sounding like an ad.",
    body: "Healthcare promotion is uniquely sensitive. Patients do not respond to discounts the way retail shoppers do. They respond to credibility, accessibility and outcomes.\n\nThe modern playbook blends three things: hyperlocal awareness (camps, school programs, RWAs), credible content (doctor-led explainers), and experience (a smooth first visit). UMP helps hospitals orchestrate this across catchments with research-backed targeting.",
    date: "May 4, 2026",
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "political-surveys-india",
    title: "What Good Political Surveys Look Like in India",
    excerpt:
      "Sample design, multilingual fieldwork and the discipline to publish what the data says — not what the client wants.",
    body: "A political survey is only as good as its sample. In India, that means thinking about caste, language, age, gender, urban-rural splits and turnout history — not just population.\n\nGood surveys publish their methodology. Great surveys correct for likely turnout and weight by the latest electoral rolls. UMP brings academic rigor to political research, in the field.",
    date: "April 21, 2026",
    category: "Politics",
    image:
      "https://images.unsplash.com/photo-1541872703-74c5e44368f4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "real-estate-micro-markets",
    title: "Decoding Real-Estate Micro-Markets",
    excerpt: "A practical framework for developers to choose the right pocket, price and product.",
    body: "Pune, like every major Indian city, is a federation of micro-markets. The dynamics of Wagholi are not the dynamics of Baner. Choosing wrong costs years.\n\nWe walk every pocket, map competing inventory, talk to channel partners and triangulate with online demand. The result is a feasibility view you can actually price against.",
    date: "April 7, 2026",
    category: "Real Estate",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "business-growth-evidence",
    title: "Evidence-Led Growth Beats Hustle",
    excerpt: "Why the businesses that win the next decade will be the ones that learn fastest.",
    body: "Hustle without evidence is just expensive motion. The companies that compound are the ones that turn every campaign, every launch, every quarter into a learning loop.\n\nResearch is the engine of that loop. UMP makes it affordable and continuous.",
    date: "March 24, 2026",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
];

export const NEWS: Article[] = [
  {
    slug: "ump-launches-pune",
    title: "UMP Consultants Officially Launches Operations in Pune",
    excerpt:
      "UMP opens its headquarters in Loni Kalbhor, Pune — anchored by a research and field operations team serving four core sectors.",
    body: "UMP Consultants today announced the formal launch of its operations from 206, Madhyila Heritage, Loni Kalbhor, Pune. The firm brings together research, area coverage and marketing under one roof for clients in hospitals, construction, politics and pharma.",
    date: "May 30, 2026",
    category: "Company",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "pune-voter-pulse-2026",
    title: "UMP Releases Pune Voter Pulse Report 2026",
    excerpt:
      "A constituency-level snapshot of issues, awareness and sentiment ahead of the upcoming civic cycle.",
    body: "The latest UMP Voter Pulse covers 14 assembly segments across Pune district, with a sample of 9,800 respondents. Top issues this cycle: traffic, water and housing affordability.",
    date: "May 12, 2026",
    category: "Research",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "pharma-coverage-expansion",
    title: "Pharma Coverage Network Expands to 6 States",
    excerpt:
      "UMP's chemist and doctor coverage panels now span Maharashtra, Karnataka, Gujarat, MP, Telangana and Goa.",
    body: "With the addition of three new field offices, UMP's structured chemist beat coverage now reaches more than 22,000 outlets monthly across six states.",
    date: "April 28, 2026",
    category: "Pharma",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "hospital-camp-series",
    title: "Hospital Camp Series Reaches 50,000 Citizens",
    excerpt:
      "A cross-city health camp series organized by UMP and partner hospitals crosses a major milestone.",
    body: "Over the past six months, UMP-led health camps have screened more than 50,000 citizens across Pune, Mumbai and Nashik for diabetes, hypertension and basic cardiac risk.",
    date: "April 10, 2026",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "construction-monthly-report",
    title: "Launching: Pune Real-Estate Monthly Report",
    excerpt:
      "A new subscription report tracking launches, inventory, absorption and price movements across Pune micro-markets.",
    body: "UMP's new monthly publication gives developers, investors and channel partners a single source of truth on Pune's residential market — updated by the 5th of every month.",
    date: "March 30, 2026",
    category: "Real Estate",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
];
