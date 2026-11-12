
export const updatePageMeta = (title: string, description: string, keywords: string[] = [], canonicalUrl?: string) => {
  // Update title
  document.title = title;

  // Update or create meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', description);

  // Update or create meta keywords
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.setAttribute('content', keywords.join(', '));

  // Add canonical URL
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', canonicalUrl || window.location.href);

  // Update Open Graph tags
  updateOpenGraphTags(title, description);

  // Update Twitter Card tags
  updateTwitterCardTags(title, description);

  // Add structured data
  addStructuredData(title, description);
};

const updateOpenGraphTags = (title: string, description: string) => {
  const ogTags = [
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: window.location.href },
    { property: 'og:site_name', content: 'CodeArya' },
    { property: 'og:locale', content: 'en_IN' },
    { property: 'og:image', content: 'https://www.codearya.com/og-image.jpg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' }
  ];

  ogTags.forEach(tag => {
    let element = document.querySelector(`meta[property="${tag.property}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('property', tag.property);
      document.head.appendChild(element);
    }
    element.setAttribute('content', tag.content);
  });
};

const updateTwitterCardTags = (title: string, description: string) => {
  const twitterTags = [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:site', content: '@CodeArya' },
    { name: 'twitter:image', content: 'https://www.codearya.com/og-image.jpg' }
  ];

  twitterTags.forEach(tag => {
    let element = document.querySelector(`meta[name="${tag.name}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('name', tag.name);
      document.head.appendChild(element);
    }
    element.setAttribute('content', tag.content);
  });
};

const addStructuredData = (title: string, description: string) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CodeArya",
    "description": description,
    "url": "https://www.codearya.com",
    "logo": "https://www.codearya.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-90342-55732",
      "contactType": "Customer Service",
      "areaServed": "IN",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jind",
      "addressRegion": "Haryana",
      "addressCountry": "India"
    },
    "sameAs": [
      "https://linkedin.com/company/codearya",
      "https://twitter.com/codearya"
    ]
  };

  let script = document.querySelector('script[type="application/ld+json"]');
  if (!script) {
    script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(structuredData);
};

// Enhanced page-specific SEO data with optimized titles and descriptions
export const pageSEOData = {
  home: {
    title: "CodeArya - Best Web Development Company India | Digital Marketing & IT Services",
    description: "CodeArya is India's leading web development and digital marketing agency. We offer custom website development, SEO services, AI solutions, and tech internships.",
    keywords: [
      "best web development company in India",
      "digital marketing agency India",
      "custom website development India",
      "IT services India",
      "SEO services India",
      "web development agency Delhi",
      "software development company India",
      "tech internships India",
      "CodeArya India",
      "website design agency India"
    ]
  },
  services: {
    title: "Our Services - Web Development, AI/ML, Digital Marketing | CodeArya India",
    description: "Comprehensive digital solutions: Web development, AI/ML solutions, digital marketing, UI/UX design. Affordable website development & SEO services in India.",
    keywords: [
      "web development services India",
      "digital marketing services India",
      "AI ML solutions India",
      "UI UX design company India",
      "affordable website development India",
      "SEO services for small business India",
      "PPC advertising agency India",
      "IT consulting services India",
      "responsive web design company India",
      "software development services India"
    ]
  },
  serviceWebDev: {
    title: "Web Development Services India - Websites, Web Apps, E-commerce | CodeArya",
    description: "Custom website development, web applications, and e-commerce solutions in India. Fast, secure, SEO-friendly sites built with modern stacks.",
    keywords: [
      "best web development company India",
      "website development agency India",
      "website development company India",
      "ecommerce website developers India",
      "react development company India",
      "custom web app India",
      "frontend development India",
      "backend development India",
      "full stack development India",
      "SEO friendly website India",
      "responsive web design India",
      "headless CMS development India"
    ]
  },
  serviceUIUX: {
    title: "UI/UX Design Company India - Product Design & Prototyping | CodeArya",
    description: "Human-centered UI/UX design: research, wireframes, prototypes, and design systems. Intuitive, modern interfaces that convert.",
    keywords: [
      "best UI UX design company India",
      "product design studio India",
      "product design company India",
      "UX research India",
      "wireframing prototyping India",
      "design system India",
      "mobile app UI design India",
      "website redesign India",
      "conversion focused design India",
      "user interface design India",
      "user experience design India"
    ]
  },
  serviceDigitalMarketing: {
    title: "Digital Marketing Agency India - SEO, PPC, Social Media | CodeArya",
    description: "Performance-driven digital marketing: SEO, PPC ads, social media, and content. Grow traffic, leads, and revenue in India.",
    keywords: [
      "best digital marketing agency India",
      "SEO services India",
      "PPC agency India",
      "social media marketing India",
      "content marketing India",
      "local SEO India",
      "ecommerce SEO India",
      "Google Ads management India",
      "Facebook ads India",
      "growth marketing India"
    ]
  },
  serviceAIML: {
    title: "AI/ML Solutions India - Automation, Analytics, Chatbots | CodeArya",
    description: "AI and machine learning solutions: automation, predictive analytics, and chatbots for Indian businesses. Turn data into decisions.",
    keywords: [
      "AI development company India",
      "machine learning consulting India",
      "machine learning India",
      "predictive analytics India",
      "computer vision India",
      "NLP chatbot India",
      "data science consulting India",
      "process automation AI India",
      "recommendation systems India",
      "time series forecasting India",
      "AI for ecommerce India"
    ]
  },
  projects: {
    title: "Our Projects - Creative Tech Solutions & Case Studies | CodeArya India",
    description: "Explore CodeArya's portfolio of innovative web development, AI/ML, and digital marketing projects. See how we've helped Indian businesses grow with tech.",
    keywords: [
      "web development portfolio India",
      "software development projects India",
      "AI ML case studies India",
      "digital marketing success stories India",
      "ecommerce website developers India",
      "custom software solutions India",
      "tech portfolio India",
      "website design examples India",
      "mobile app development India",
      "IT project showcase India"
    ]
  },
  internships: {
    title: "Tech Internships 2025 India - Web Development, AI/ML | CodeArya",
    description: "Join CodeArya's tech internship programs in India. Paid internships in web development, AI/ML, digital marketing, and UI/UX design for students.",
    keywords: [
      "IT internships in India",
      "web development internships India",
      "digital marketing internships India",
      "AI ML internships India",
      "paid internships tech India",
      "summer internships IT companies India",
      "fresher internship opportunities IT India",
      "tech internship programs India",
      "student internships web development India",
      "remote internships digital marketing India"
    ]
  },
  about: {
    title: "About CodeArya - Leading IT Agency & Digital Solutions Provider India",
    description: "Learn about CodeArya, India's trusted IT agency providing web development, digital marketing, and tech solutions. Empowering Indian businesses with innovation.",
    keywords: [
      "about CodeArya India",
      "IT company India",
      "web development team India",
      "digital agency India",
      "software development company India",
      "tech solutions provider India",
      "IT services company India",
      "web design agency India",
      "digital transformation India",
      "technology consulting India"
    ]
  },
  contact: {
    title: "Contact CodeArya - Get Quote for Web Development & Digital Marketing India",
    description: "Contact CodeArya for web development, digital marketing, and IT services in India. Located in Jind, Haryana. Call +91 90342 55732 for custom solutions.",
    keywords: [
      "contact CodeArya India",
      "web development quote India",
      "digital marketing consultation India",
      "IT services Jind Haryana",
      "website development cost India",
      "SEO services quote India",
      "custom software development India",
      "digital agency contact India",
      "web design consultation India",
      "IT support services India"
    ]
  },
  blog: {
    title: "Tech Blog - Web Development, AI/ML, Digital Marketing Insights | CodeArya",
    description: "Latest tech trends, web development tutorials, AI/ML insights, and digital marketing strategies. Expert blogs from CodeArya's team in India.",
    keywords: [
      "tech blog India",
      "web development blog India",
      "AI ML blog India",
      "digital marketing blog India",
      "programming tutorials India",
      "technology insights India",
      "software development blog India",
      "IT industry news India",
      "coding tips India",
      "tech trends India"
    ]
  }
};
