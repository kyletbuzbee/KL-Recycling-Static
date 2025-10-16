// Global type definitions for K&L Recycling website
// Re-export all domain-specific types for easy importing

// API types
export type { ApiResponse, PaginationParams, PaginatedResponse, ContactFormSubmission, QuoteRequestSubmission, PricingItem, PricingUpdateRequest, LocationSearchParams, ServiceAvailabilityResponse, FileUploadResponse, ApiError, ValidationError, SanityAsset, SanityImage as SanityImageAsset } from "./api";

// Component types
export type { BaseComponentProps, FormFieldProps, TextInputProps, SelectProps, SelectOption, CheckboxProps, ButtonProps, ModalProps, LoadingSpinnerProps, SkeletonProps, ToastProps, HeaderProps, FooterProps, SEOProps as ComponentSEOProps, TableColumn, TableProps, NavItem as ComponentNavItem, BreadcrumbItem, HeroProps, AnimatedCounterProps, CartItem, CartProps, TrustBadge, Testimonial as ComponentTestimonial } from "./components";

// Content types
export type { SanityBlock, SanityPortableText, BlogPost, ServiceData, CareerPosting, Testimonial as ContentTestimonial, CompanyInfo, MaterialCategory, Material, Location as ContentLocation, Navigation, NavItem, CommunityEvent, SustainabilityInitiative, FormField, FormConfig, FAQ } from "./content";

// Service types
export type { Service as ServiceType, ServiceCategory, ServicePricing, PricingTier, ServiceFeature, ServiceContact, IndustrialServices, IndustrialServiceType, ConstructionServices, ConstructionServiceType, ConstructionPermit, ResidentialServices, ResidentialServiceType, ResidentialRestriction, AutomotiveServices, AutomotiveServiceType, ElectronicsServices, ElectronicsServiceType, DataDestructionOptions, DataDestructionMethod, DemolitionServices, DemolitionServiceType, EnvironmentalAssessment, OilfieldServices, OilfieldServiceType, OilfieldEquipment, ServiceRequest, ClientInfo, Address, ServiceLocation, Accessibility, ServiceRequestDetails, Quantity, ServiceMaterial, SpecialHandling, Budget, ServiceScheduling, Duration, ServiceStatus, ServiceMetrics } from "./services";

// Legacy types (to be gradually migrated to domain-specific files)
export interface FormData {
  service: string;
  details: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  timeline?: string;
}

export interface ContactFormData extends FormData {
  message?: string;
  preferredContact?: "email" | "phone";
}

export interface QuoteFormData extends FormData {
  materialType?: string;
  estimatedVolume?: string;
  location?: string;
}

export interface JobOpening {
  id: string;
  title: string;
  location: string;
  type: "Full-Time" | "Part-Time" | "Contract";
  department: string;
  description: string;
  requirements: string[];
  benefits?: string[];
  posted: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  description?: string;
  icon?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
