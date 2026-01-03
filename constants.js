export const WEBSITE_TYPES = [
    { id: 'business', label: 'Business Website', description: 'Professional presence for companies with service listings.', baseMin: 25000, baseMax: 45000, timeline: [3, 5] },
    { id: 'ecommerce', label: 'E-commerce Website', description: 'Full-featured online store with products and checkout.', baseMin: 50000, baseMax: 100000, timeline: [6, 10] },
    { id: 'saas', label: 'SaaS / Web App', description: 'Complex platform with user dashboards and logic.', baseMin: 80000, baseMax: 200000, timeline: [8, 16] },
    { id: 'landing', label: 'Landing Page', description: 'High-conversion single page for specific marketing campaigns.', baseMin: 10000, baseMax: 18000, timeline: [1, 2] },
    { id: 'educational', label: 'Educational / LMS', description: 'Online learning platform with courses, quizzes, and student management.', baseMin: 60000, baseMax: 150000, timeline: [6, 12] },
    { id: 'listing', label: 'Marketplace / Listing', description: 'Property or service directory with advanced search and user submissions.', baseMin: 45000, baseMax: 120000, timeline: [5, 10] }
  ];
  
  export const PAGE_COUNTS = [
    { id: '1-3', label: '1–3 pages', cost: 0 },
    { id: '4-7', label: '4–7 pages', cost: 5000 },
    { id: '8-12', label: '8–12 pages', cost: 12000 },
    { id: 'custom', label: 'Custom / Not sure', cost: 20000 },
  ];
  
  export const FEATURES = [
    { id: 'contact', label: 'Contact Form', description: 'Direct leads to your email.', cost: 2000 },
    { id: 'auth', label: 'User Authentication', description: 'Login/Signup functionality.', cost: 10000 },
    { id: 'admin', label: 'Admin Dashboard', description: 'Manage content easily.', cost: 15000 },
    { id: 'payments', label: 'Online Payments', description: 'Razorpay / Stripe integration.', cost: 8000 },
    { id: 'blog', label: 'Blog / CMS', description: 'Publish articles effortlessly.', cost: 7000 },
    { id: 'seo', label: 'SEO Optimization', description: 'Get found on Google.', cost: 5000 },
    { id: 'apis', label: 'API Integrations', description: 'Connect external services.', cost: 10000 },
    { id: 'ai', label: 'AI-powered Features', description: 'Chatbots or AI content.', cost: 20000 },
  ];
  
  export const DESIGN_LEVELS = [
    { id: 'basic', label: 'Template-based', description: 'Clean layout using existing design patterns.', multiplier: 1.0 },
    { id: 'custom', label: 'Custom UI Design', description: 'Unique design tailored to your brand identity.', multiplier: 1.3 },
    { id: 'premium', label: 'Premium UI + Motion', description: 'High-end animations and bespoke interactions.', multiplier: 1.7 },
  ];
  
  export const SPEEDS = [
    { id: 'standard', label: 'Standard', duration: '3–4 weeks', multiplier: 1.0, timelineReduction: 1 },
    { id: 'fast', label: 'Fast Track', duration: '2 weeks', multiplier: 1.25, timelineReduction: 0.7 },
    { id: 'urgent', label: 'Urgent', duration: '1 week', multiplier: 1.5, timelineReduction: 0.4 },
  ];
  