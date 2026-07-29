import { ServiceItem, ProcessStep, ValueProp, ContactInfo } from '../types';

export const COMPANY_INFO: ContactInfo = {
  phone: '+91 9810409675',
  phoneRaw: '9810409675',
  email: 'admin@rankzdigital.com',
  whatsappUrl: 'https://wa.me/919810409675?text=Hi%20Rankz%20Digital%2C%20I%20would%20like%20to%20get%20a%20free%20growth%20and%20ads%20audit%20for%20my%20business.',
  instagram: 'https://www.instagram.com/rankzdigital/',
  facebook: 'https://www.facebook.com/profile.php?id=61560983656962',
  linkedin: 'https://www.linkedin.com/company/rankz-digital/',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'seo',
    title: 'Search Engine Optimization (SEO)',
    shortTitle: 'SEO',
    tagline: 'Claim #1 Rankings & Dominate Organic Search Intent',
    iconName: 'Search',
    accentColor: 'from-cyan-500 to-blue-600',
    glowClass: 'glow-cyan',
    badge: 'ORGANIC DOMINANCE',
    description: 'Stop burning cash on low-intent traffic. We engineer technical, content, and backlink architectures that secure top rankings for high-commercial search terms and convert organic visitors into paying clients.',
    benefits: [
      'Top-3 Google keyword rankings for high-intent buyer searches',
      'Technical SEO overhaul (Core Web Vitals, site architecture, structured data)',
      'High-authority backlink acquisition & strategic digital PR',
      'Intent-driven content strategy that builds compounding organic revenue'
    ],
    metrics: [
      { label: 'Avg Organic Growth', value: '+310%' },
      { label: 'Keyword Velocity', value: '3.4x Faster' },
      { label: 'Core Web Vitals', value: '98+ Score' }
    ],
    deliverables: [
      'Comprehensive Technical & Competitive Audit',
      'High-Intent Keyword Map & Search Funnel Architecture',
      'On-Page Optimization & Technical Schema Injection',
      'Monthly Ranking & Revenue Attribution Dashboards'
    ],
    techStack: ['Ahrefs', 'SEMrush', 'Screaming Frog', 'Search Console', 'Google Analytics 4']
  },
  {
    id: 'google-ads',
    title: 'Google Ads (PPC)',
    shortTitle: 'Google Ads',
    tagline: 'Capture Active Demand with High-ROAS Paid Search',
    iconName: 'Target',
    accentColor: 'from-blue-500 to-indigo-600',
    glowClass: 'glow-blue',
    badge: 'HIGH-CONVERSION SEARCH',
    description: 'We turn Google Search, Performance Max, and Shopping campaigns into predictable revenue engines. Every rupee spent is tracked down to the phone call or form submit with hyper-targeted audience structuring.',
    benefits: [
      'Direct pipeline to customers actively searching for your service right now',
      'Negative keyword filtering that cuts wasted ad spend by 30-50%',
      'High-converting landing page frameworks built for maximum Quality Score',
      'Granular Conversion Rate Optimization (CRO) and impression share capture'
    ],
    metrics: [
      { label: 'Average ROAS', value: '4.8x' },
      { label: 'Cost Per Lead Cut', value: '-38%' },
      { label: 'Quality Score Avg', value: '9/10' }
    ],
    deliverables: [
      'Granular Account & Competitor Keyword Intelligence',
      'Custom Ad Copy, Extensions & High-Intent Landing Pages',
      'Conversion Tracking (Calls, Forms, Purchases & Offline Events)',
      'Continuous Bid Optimization & Weekly Impression Dominance'
    ],
    techStack: ['Google Ads Editor', 'GA4 Attribution', 'Unbounce', 'CallRail', 'Looker Studio']
  },
  {
    id: 'meta-ads',
    title: 'Meta Ads (Facebook & Instagram)',
    shortTitle: 'Meta Ads',
    tagline: 'Scale Revenue with Direct-Response Paid Social',
    iconName: 'TrendingUp',
    accentColor: 'from-violet-500 to-purple-600',
    glowClass: 'glow-violet',
    badge: 'SCALE & RETARGET',
    description: 'Stop relying on boost buttons. We deploy high-converting ad angles, scroll-stopping visual hooks, and CBO/ABO funnel structures on Facebook and Instagram to drive immediate sales and qualified leads.',
    benefits: [
      'Engineered creative hooks that grab attention in the first 2 seconds',
      'Broad targeting combined with CAPI pixel conversion tracking',
      'Retargeting funnels that recover up to 45% of abandoned visitors',
      'A/B creative testing matrix designed to find runaway winner ads'
    ],
    metrics: [
      { label: 'Customer Acq. Scale', value: '3.2x' },
      { label: 'CTR Improvement', value: '+140%' },
      { label: 'CAPI Match Quality', value: '92%' }
    ],
    deliverables: [
      'Creative Strategy & High-CTR Ad Concepts',
      'Meta Conversions API (CAPI) & Pixel Setup',
      'Cold Acquisition & Retargeting Audience Architecture',
      'Weekly Creative Iteration & Budget Scaling'
    ],
    techStack: ['Meta Ads Manager', 'Conversions API', 'CapCut Pro', 'Figma', 'Triple Whale']
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    shortTitle: 'Social Media',
    tagline: 'Build an Authoritative Brand Culture & Community',
    iconName: 'Share2',
    accentColor: 'from-emerald-500 to-teal-600',
    glowClass: 'glow-cyan',
    badge: 'BRAND AUTHORITY',
    description: 'Turn your social profiles into trusted industry landmarks. We handle content creation, short-form video production, community engagement, and brand positioning across Instagram, LinkedIn, and Facebook.',
    benefits: [
      'Short-form Reels and video content optimized for viral algorithm reach',
      'Positioning your brand as the undisputed leader in your niche',
      'Direct message lead generation and proactive community engagement',
      'Consistent publishing calendar with crystal-clear brand voice'
    ],
    metrics: [
      { label: 'Organic Impression Gain', value: '450K+' },
      { label: 'Engagement Rate', value: '8.4%' },
      { label: 'DM Qualified Leads', value: '35+/mo' }
    ],
    deliverables: [
      'Monthly Short-Form Video & Visual Content Calendar',
      'High-Impact Graphic Design, Reels & Carousel Design',
      'Community Management & Inbound Inquiry Nurturing',
      'Competitor Benchmarking & Performance Reports'
    ],
    techStack: ['Canva Pro', 'Premiere Pro', 'Buffer', 'Later', 'Brand24']
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Deep Growth Audit',
    subtitle: 'Data & Competitor Intelligence',
    description: 'We analyze your current digital footprint, tracking health, ad accounts, organic rankings, and top 3 competitors to uncover immediate revenue leaks and quick-win opportunities.',
    keyOutputs: [
      'Conversion tracking & CAPI diagnostic',
      'Search demand & keyword gap analysis',
      'Competitor ad spend & hook breakdown'
    ],
    duration: 'Days 1 - 3',
    icon: 'Cpu'
  },
  {
    number: '02',
    title: 'Precision Execution',
    subtitle: 'Funnels, Ads & Technical Setup',
    description: 'We build high-converting landing pages, rewrite ad copy, restructure Google & Meta campaigns, and implement technical SEO fixes designed for maximum attribution accuracy.',
    keyOutputs: [
      'High-converting landing page deployment',
      'Cold & retargeting campaign activation',
      'Technical SEO & schema implementation'
    ],
    duration: 'Days 4 - 10',
    icon: 'Zap'
  },
  {
    number: '03',
    title: 'Aggressive Optimization',
    subtitle: 'Scale Winners & Eliminate Waste',
    description: 'We monitor live performance metrics daily. We ruthlessly cut underperforming keywords and ad creatives while scaling winning campaigns to maximize your total monthly return on investment.',
    keyOutputs: [
      'Weekly A/B creative & copy testing',
      'Bid adjustments & placement tuning',
      'Real-time client ROI reporting dashboard'
    ],
    duration: 'Continuous Scaling',
    icon: 'Activity'
  }
];

export const VALUE_PROPS: ValueProp[] = [
  {
    id: 'direct-access',
    title: 'Direct Access to Senior Specialists',
    highlightText: 'No Account Manager Middlemen',
    description: 'You speak directly with the strategists running your SEO and paid ad campaigns. Quick decisions, instant adjustments, zero game of telephone.',
    icon: 'Users',
    statNumber: '100%',
    statLabel: 'Direct Strategic Communication'
  },
  {
    id: 'transparent-reporting',
    title: 'Transparent Real-Time Dashboards',
    highlightText: 'Clear Revenue & Lead Metrics',
    description: 'No vanity metrics or 50-page PDF reports designed to confuse you. You get a live 24/7 dashboard showing true leads, cost-per-acquisition, and return on ad spend.',
    icon: 'BarChart3',
    statNumber: '24/7',
    statLabel: 'Live Performance Access'
  },
  {
    id: 'integrated-team',
    title: 'One Integrated Growth Unit',
    highlightText: 'SEO & Paid Media Working Together',
    description: 'Your paid ads feed valuable keyword data directly into your SEO strategy, while organic insights refine paid targeting. A unified strategy with no channel silos.',
    icon: 'Layers',
    statNumber: '4.2x',
    statLabel: 'Higher Funnel Efficiency'
  },
  {
    id: 'regular-reviews',
    title: 'Weekly Reviews & Continuous Scaling',
    highlightText: 'Proactive Revenue Growth',
    description: 'We do not set-and-forget. Every week we review conversion data, prune poor performers, test new hooks, and pitch fresh growth angles to keep your momentum compounding.',
    icon: 'ShieldCheck',
    statNumber: 'Weekly',
    statLabel: 'Sprint Optimization Cycles'
  }
];

export const TESTIMONIALS = [
  {
    quote: "Rankz Digital transformed our paid ads completely. Within 45 days, our Google Ads ROAS jumped from 1.8x to 4.6x while slashing our lead cost by 35%. They talk straight and deliver real revenue.",
    clientName: "Vikram Malhotra",
    company: "Apex Real Estate Holdings",
    growthStat: "+180% Qualified Inquiries"
  },
  {
    quote: "Most agencies give you fluff metrics like 'impressions'. Rankz Digital gave us top 3 rankings for our primary commercial keywords in 3 months and drove 350+ organic leads directly to our sales team.",
    clientName: "Neha Sharma",
    company: "SaaSify Solutions",
    growthStat: "#1 Ranking for Primary Keyword"
  },
  {
    quote: "Their Meta Ads strategy combined with proactive social media management brought us consistent 5x monthly return. Working directly with their team without endless sales reps makes a huge difference.",
    clientName: "Rohan Kapoor",
    company: "UrbanFit E-Commerce",
    growthStat: "5.1x Return on Ad Spend"
  }
];

export const FAQS = [
  {
    question: "How quickly can I expect results from SEO vs Google/Meta Ads?",
    answer: "Google Ads and Meta Ads can start generating qualified leads within 24 to 72 hours of campaign launch. SEO is a compounding long-term growth engine that typically shows significant rank jumps and traffic growth within 60 to 90 days."
  },
  {
    question: "Do you lock clients into long-term restrictive contracts?",
    answer: "No. We believe in earning your business every single month. We offer flexible performance-driven agreements because we are confident in our ability to generate positive ROI."
  },
  {
    question: "How will I track my campaign performance and leads?",
    answer: "You get access to a live 24/7 custom dashboard tracking real leads, cost per lead (CPL), search rankings, phone calls, and return on ad spend (ROAS). No fluff metrics."
  },
  {
    question: "What ad budget do I need to get started with Google and Meta Ads?",
    answer: "Budget depends on your industry and competition, but we usually recommend a starting monthly ad spend that allows enough conversion data for quick testing and rapid optimization."
  }
];
