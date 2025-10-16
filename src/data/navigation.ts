export const navLinks = [
  {
    href: "/quote",
    label: "Get Quote",
    primary: true, // Mark as primary CTA
  },
  {
    href: "/services",
    label: "Services",
  },
  {
    href: "/materials",
    label: "Materials",
    dropdown: [
      { href: "/materials-we-buy", label: "Materials We Buy" },
      { href: "/materials-guide", label: "Materials Guide" },
    ],
  },
  {
    href: "/locations",
    label: "Locations",
  },
  {
    href: "/contact",
    label: "Contact",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/resources",
    label: "Resources",
    dropdown: [
      {
        columnTitle: "Tools & Guides",
        links: [
          { name: "Materials Guide", href: "/materials-guide" },
          { name: "Impact Calculator", href: "/impact-calculator" },
          { name: "Frequently Asked Questions", href: "/faq" },
        ],
      },
      {
        columnTitle: "Company & Community",
        links: [
          { name: "Blog", href: "/blog" },
          { name: "Sustainability", href: "/sustainability" },
          { name: "Compliance & Certifications", href: "/compliance-certifications" },
          { name: "Careers", href: "/careers" },
        ],
      },
    ],
  },
];

export const quickLinks = [
  { href: "/quote", label: "Get Quote" },
  { href: "/schedule-pickup", label: "Schedule Pickup" },
  { href: "/services#roll-off", label: "Roll-Off Services" },
  { href: "/locations", label: "Find Location" },
];
