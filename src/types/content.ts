// Content-related type definitions for K&L Recycling

// CMS Content (Sanity)
export interface SanityBlock {
  _type: "block";
  children: {
    _type: "span";
    text: string;
    marks?: string[];
  }[];
  markDefs?: {
    _key: string;
    _type: string;
    [key: string]: unknown;
  }[];
  style?: string;
  _key?: string;
}

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
    url?: string;
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  alt?: string;
  caption?: string;
  _key?: string;
}

export interface SanityPortableText {
  _type: "block" | "image";
  _key?: string;
  children?: {
    _type: "span";
    text: string;
    marks?: string[];
  }[];
  style?: string;
  asset?: {
    _ref: string;
    _type: "reference";
    url?: string;
  };
  [key: string]: unknown;
}

// Blog Content
export interface BlogPost {
  _id: string;
  _type: "post";
  title: string;
  slug: {
    current: string;
  };
  excerpt?: string;
  mainImage?: SanityImage;
  body?: SanityPortableText[];
  publishedAt: string;
  author?: {
    name: string;
    image?: SanityImage;
  };
  categories?: {
    title: string;
    slug: {
      current: string;
    };
  }[];
  tags?: string[];
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
}

// Service Content
export interface ServiceData {
  _id: string;
  title: string;
  subtitle?: string;
  slug: {
    current: string;
  };
  description?: SanityPortableText[];
  icon?: SanityImage;
  heroImage?: SanityImage;
  features?: {
    title: string;
    description: string;
    icon?: SanityImage;
  }[];
  benefits?: string[];
  pricing?: {
    basePrice?: number;
    unit?: string;
    tiers?: {
      name: string;
      price: number;
      features: string[];
    }[];
  };
  operationalDetails?: {
    permits?: string[];
    crewSize?: string;
    equipment?: string[];
    notes?: string;
  };
  availableLocations?: string[];
  publishedAt: string;
  seoTitle?: string;
  seoDescription?: string;
}

// Career Content
export interface CareerPosting {
  _id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract";
  description?: SanityPortableText[];
  requirements?: string[];
  responsibilities?: string[];
  benefits?: string[];
  salary?: {
    min: number;
    max: number;
    currency: string;
    period: "hour" | "month" | "year";
  };
  applicationDeadline?: string;
  publishedAt: string;
  isActive: boolean;
}

// Testimonial Content
export interface Testimonial {
  _id: string;
  name: string;
  title: string;
  company?: string;
  quote: string;
  rating?: number;
  image?: SanityImage;
  serviceUsed?: string;
  publishedAt: string;
  featured: boolean;
}

// Company Content
export interface CompanyInfo {
  _id: string;
  name: string;
  tagline?: string;
  description?: SanityPortableText[];
  established?: string;
  headquarters?: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  certifications?: {
    name: string;
    logo: SanityImage;
    issuedBy: string;
    expiryDate?: string;
  }[];
  values?: {
    title: string;
    description: string;
    icon?: SanityImage;
  }[];
  mission?: SanityPortableText[];
  vision?: SanityPortableText[];
  history?: SanityPortableText[];
}

// Material Content
export interface MaterialCategory {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  description?: SanityPortableText[];
  icon?: SanityImage;
  materials?: Material[];
}

export interface Material {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  category: "ferrous" | "non-ferrous";
  description?: SanityPortableText[];
  mainImage?: SanityImage;
  gallery?: SanityImage[];
  grades?: {
    name: string;
    description: string;
    priceRange: string;
    marketValue: number;
  }[];
  preparationTips?: string[];
  commonSources?: string[];
  currentPrice?: {
    value: number;
    unit: string;
    lastUpdated: string;
  };
  accepted: boolean;
  popular: boolean;
}

export interface MaterialDetail {
  slug: string;
  name: string;
  category: string;
  image: string;
  description: string;
  longDescription: string;
  grades: {
    name: string;
    description: string;
    priceRange: string;
    marketValue: number;
  }[];
  preparationTips: string[];
  commonSources: string[];
  currentPrice: {
    value: number;
    unit: string;
    lastUpdated: string;
  };
  seoKeywords: string[];
}

// Location Content
export interface Location {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  type: "headquarters" | "branch" | "satellite";
  address: string;
  city: string;
  state: string;
  zipCode: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  phone?: string;
  email?: string;
  manager?: string;
  hours?: {
    weekdays: string;
    saturday?: string;
    sunday?: string;
    holidays?: string;
  };
  services?: string[];
  facilities?: string[];
  images?: SanityImage[];
  isActive: boolean;
}

// Navigation Content
export interface Navigation {
  _id: string;
  name: string;
  items: NavItem[];
}

export interface NavItem {
  _key: string;
  name: string;
  href: string;
  description?: string;
  icon?: SanityImage;
  external?: boolean;
  badge?: string;
  children?: NavItem[];
}

// Community Content
export interface CommunityEvent {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description?: SanityPortableText[];
  date: string;
  location: string;
  type: "education" | "cleanup" | "workshop" | "volunteer";
  image?: SanityImage;
  capacity?: number;
  registrationRequired?: boolean;
  publishedAt: string;
}

export interface SustainabilityInitiative {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description?: SanityPortableText[];
  category: "environmental" | "community" | "education";
  impact?: {
    metric: string;
    value: number;
    unit: string;
  }[];
  image?: SanityImage;
  publishedAt: string;
}

// Form Content (for dynamic forms)
export interface FormField {
  _key: string;
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select" | "checkbox" | "radio" | "file";
  required: boolean;
  placeholder?: string;
  options?: {
    value: string;
    label: string;
  }[];
  validation?: {
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    message?: string;
  };
}

export interface FormConfig {
  _id: string;
  name: string;
  title: string;
  description?: SanityPortableText[];
  fields: FormField[];
  submitAction: "email" | "api";
  submitEndpoint?: string;
  successMessage?: SanityPortableText[];
  errorMessage?: string;
}

// Resource Content
export interface Resource {
  title: string;
  description: string;
  slug: string;
  category: "tools" | "company";
}

// FAQ Content
export interface FAQ {
  _id: string;
  question: string;
  answer: SanityPortableText[];
  category?: string;
  tags?: string[];
  priority: number; // for ordering
  publishedAt: string;
}
