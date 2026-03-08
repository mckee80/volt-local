export const siteConfig = {
  // Basic info
  name: 'Volt Local',
  shortName: 'Volt Local',
  tagline: 'Websites, SEO & GBP for Trades Businesses',
  description:
    'Custom websites, local SEO, and Google Business Profile management for trades businesses — personal service at a price that makes sense for small operators.',

  // URLs
  url: 'https://volt-local.com',
  baseUrl: '/',

  // Contact
  contact: {
    email: 'sean@volt-local.com',
  },

  // Owner info (used in schema.org structured data only — not displayed on site)
  owner: {
    name: 'Sean McKee',
    title: 'Founder, Volt Local',
  },

  // Branding
  brand: {
    colors: {
      primary: '#1E3A5F',
      'primary-dark': '#152C47',
      'primary-light': '#2563EB',
      accent: '#F59E0B',
      'accent-dark': '#D97706',
      'accent-light': '#FBBF24',
      dark: '#0F172A',
      'dark-light': '#475569',
    },
  },

  // SEO defaults
  seo: {
    titleTemplate: '%s | Volt Local',
    defaultTitle: 'Volt Local | Websites, SEO & GBP for Trades Businesses',
    defaultDescription:
      'Custom websites, local SEO, and Google Business Profile management for trades businesses — personal service at a price that makes sense for small operators.',
    defaultImage: '/images/og-image.jpg',
    keywords: [
      'HVAC website design',
      'plumber website',
      'electrician SEO',
      'trades business website',
      'local SEO for contractors',
      'Google Business Profile for HVAC',
      'plumbing company SEO',
      'contractor website builder',
      'trades marketing',
      'Volt Local',
    ],
  },

  // Navigation structure
  navigation: {
    main: [
      { name: 'About', href: '/about/' },
      { name: 'Services', href: '/services/' },
      { name: 'Blog', href: '/blog/' },
      { name: 'Contact', href: '/contact/' },
    ],
    footer: {
      quickLinks: [
        { name: 'About', href: '/about/' },
        { name: 'Services', href: '/services/' },
        { name: 'Blog', href: '/blog/' },
        { name: 'Contact', href: '/contact/' },
      ],
    },
  },

  // Pricing
  pricing: {
    setup: {
      price: '$1,500',
      label: 'one-time',
      name: 'Website Build',
      description: 'A custom, SEO-optimized website built for your trades business. Your site, your code — yours to keep.',
      features: [
        'Custom design for your trade and service area',
        'SEO-ready from day one',
        'Near-perfect Lighthouse scores',
        'Schema markup and semantic HTML',
        'Mobile-responsive',
        'You own the code — no lock-in',
      ],
    },
    monthly: {
      price: '$400',
      label: '/month',
      name: 'SEO & GBP Management',
      description: 'Ongoing SEO and Google Business Profile management. No contracts — cancel anytime.',
      features: [
        'Monthly SEO review and optimization',
        'Google Business Profile management',
        'Monthly blog post targeting local search terms',
        'Weekly Google Business Profile updates',
        'Monthly performance report',
        'Direct access — no call centers, no ticket queues',
      ],
    },
  },

  // Services
  services: [
    {
      name: 'Custom Website Build',
      description:
        'A fast, modern website built for your trades business — with SEO baked in from day one. Every site gets a unique design and content that reflects what you do and where you do it. Your site, your code, yours to keep.',
      icon: 'code',
    },
    {
      name: 'Local SEO',
      description:
        'Citation cleanup, local rank tracking, technical optimization, and content that targets what your customers actually search for. Monthly blog posts, service pages, and a plain-English report showing what\'s working.',
      icon: 'search',
    },
    {
      name: 'Google Business Profile Management',
      description:
        'Your GBP is often the first thing customers see. I optimize your listing, post weekly updates, manage reviews, and make sure your profile works as hard as you do.',
      icon: 'map',
    },
  ],
};

export type SiteConfig = typeof siteConfig;
