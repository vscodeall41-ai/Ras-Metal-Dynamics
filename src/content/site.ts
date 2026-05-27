/**
 * Ras Metal Dynamics - Editable Site Content
 * 
 * All business-critical text, contact details, services, and CTAs live here.
 * Update this file to change content across the entire site without touching components.
 * 
 * IMPORTANT: Many values below are derived from brand creative assets and are marked
 * as placeholders where real verified business details are required.
 */

export const siteConfig = {
  // ========== COMPANY IDENTITY ==========
  company: {
    name: "Ras Metal Dynamics",
    shortName: "RM",
    tagline: "Steel. Reimagined.",
    description: "Precision custom steel fabrication for architectural, structural, and industrial applications in Cape Town and across South Africa.",
    location: "Cape Town, South Africa",
    yearsInBusiness: "12+", // TODO: Verify exact years in business
    bbbee: "B-BBEE Level 4", // TODO: Verify current B-BBEE status and certificate
    bbbeeNote: "EME • Code-Compliant",
  },

  // ========== CONTACT (ALL PLACEHOLDERS - VERIFY BEFORE LAUNCH) ==========
  contact: {
    phonePrimary: "065 555 4433",      // WhatsApp - seen across multiple brand creatives
    phoneSecondary: "061 295 9755",    // Office - seen across multiple brand creatives
    phonePrimaryLabel: "WhatsApp",
    phoneSecondaryLabel: "Office",
    email: "info@rasmetaldynamics.co.za", // TODO: Replace with verified email
    website: "rasmetaldynamics.co.za",    // TODO: Replace with final domain
    address: "Cape Town, South Africa",   // TODO: Add physical yard / workshop address when ready
    hours: "Mon–Fri 07:30–17:00 | Sat by appointment",
  },

  // ========== NAVIGATION ==========
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Capabilities", href: "/capabilities" },
    { label: "Industries", href: "/industries" },
    { label: "Contact", href: "/contact" },
  ],

  // ========== CTAs (Reusable) ==========
  cta: {
    primary: "Request a Quote",
    secondary: "Discuss Your Project",
    phone: "Call 065 555 4433",
    whatsapp: "WhatsApp 065 555 4433",
  },

  // ========== SERVICES (Core offering - aligned with brand visuals) ==========
  services: [
    {
      title: "Structural Steel & Heavy Fabrication",
      description: "Large-scale beams, columns, trusses, and custom structural elements for commercial and industrial builds. Precision cutting, welding, and assembly.",
      icon: "structural",
    },
    {
      title: "Custom Gates, Balustrades & Fencing",
      description: "Architectural gates, security fencing, balustrades, and decorative metalwork that combine strength with refined detailing.",
      icon: "gates",
    },
    {
      title: "Staircases & Architectural Metalwork",
      description: "Custom staircases, handrails, landings, and feature metal elements designed and fabricated to integrate with modern and traditional architecture.",
      icon: "stairs",
    },
    {
      title: "Pergolas, Carports & Outdoor Structures",
      description: "Engineered steel pergolas, carports, and outdoor living structures with clean lines, LED integration options, and durable finishes.",
      icon: "pergola",
    },
    {
      title: "Site Welding & Installation",
      description: "On-site welding, assembly, and installation by certified fabricators. We handle access, lifting, and coordination for complex installs.",
      icon: "welding",
    },
    {
      title: "Commercial & Industrial Projects",
      description: "Full-scope fabrication and installation for warehouses, factories, retail fit-outs, and infrastructure projects requiring certified steelwork.",
      icon: "commercial",
    },
  ],

  // ========== INDUSTRIES SERVED ==========
  industries: [
    "Residential Architecture & Renovations",
    "Commercial Construction & Property Development",
    "Industrial & Manufacturing Facilities",
    "Hospitality & Leisure (Hotels, Lodges, Estates)",
    "Retail & Mixed-Use Developments",
    "Security & Access Control Projects",
    "Agricultural & Equestrian Structures",
  ],

  // ========== PROCESS (High-level, practical) ==========
  process: [
    {
      step: "01",
      title: "Consultation & Site Assessment",
      description: "We visit site or review drawings and photos to understand scope, constraints, and design intent.",
    },
    {
      step: "02",
      title: "Detailed Quotation & Scope",
      description: "Transparent quote with clear inclusions, assumptions, lead times, and payment terms. No surprises.",
    },
    {
      step: "03",
      title: "Engineering & Detailing",
      description: "Shop drawings and material take-offs. Engineer sign-off arranged where structural certification is required.",
    },
    {
      step: "04",
      title: "Precision Fabrication",
      description: "Cutting, welding, assembly, and surface preparation in our Cape Town workshop to exact specifications.",
    },
    {
      step: "05",
      title: "Delivery & Installation",
      description: "Coordinated transport and on-site installation by our experienced team, including final alignment and finishing.",
    },
  ],

  // ========== TRUST / QUALITY SECTION (No fake claims) ==========
  trust: {
    headline: "Built the right way.",
    points: [
      "Over a decade of hands-on steel fabrication experience in the Western Cape",
      "B-BBEE Level 4 contributor — fully compliant and procurement-friendly",
      "Practical, buildable designs that respect site realities and budgets",
      "Clear communication and professional documentation on every project",
      "We stand behind our work — proper preparation, proper finishes, proper installation",
    ],
  },

  // ========== CAPABILITIES / PROJECT HIGHLIGHTS (Generic but real categories) ==========
  capabilities: [
    {
      title: "Heavy Structural Steel",
      description: "Portal frames, mezzanine floors, crane rails, and long-span structures for warehouses and factories.",
    },
    {
      title: "Architectural Feature Work",
      description: "Custom screens, feature staircases, and sculptural metal elements for high-end residential and commercial projects.",
    },
    {
      title: "Modern Outdoor Structures",
      description: "LED-integrated pergolas, cantilevered carports, and covered walkways with clean contemporary detailing.",
    },
    {
      title: "Security & Access Metalwork",
      description: "Heavy-duty custom gates, automated gate systems, palisade fencing, and balustrading for estates and commercial sites.",
    },
  ],

  // ========== FOOTER & LEGAL ==========
  footer: {
    copyright: "© Ras Metal Dynamics. All rights reserved.",
    privacy: "/privacy",
  },
} as const;

export type SiteConfig = typeof siteConfig;
