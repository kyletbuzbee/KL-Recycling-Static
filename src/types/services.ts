// Service-specific type definitions for K&L Recycling

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  details: string[];
  content: string;
  benefits?: string[];
  icon: string;
  operationalDetails?: {
    permits?: string[];
    crewSize?: string;
    equipment?: string[];
    notes?: string;
  };
  availableLocations?: string[];
  category?: ServiceCategory;
  pricing?: ServicePricing;
  features?: ServiceFeature[];
  requirements?: string[];
  timeline?: string;
  contactInfo?: ServiceContact;
}

export type ServiceCategory = "industrial" | "construction" | "residential" | "automotive" | "electronics" | "demolition" | "oilfield" | "marine" | "other";

export interface ServicePricing {
  type: "fixed" | "hourly" | "tonnage" | "volume" | "custom";
  basePrice?: number;
  unit?: string;
  currency?: string;
  tiers?: PricingTier[];
  minimumFee?: number;
  travelFee?: number;
}

export interface PricingTier {
  name: string;
  range: {
    min?: number;
    max?: number;
  };
  price: number;
  unit: string;
  description?: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon?: string;
  included: boolean;
}

export interface ServiceContact {
  name?: string;
  phone?: string;
  email?: string;
  department?: string;
}

// Business service categories
export interface IndustrialServices {
  type: "industrial";
  subcategories: IndustrialServiceType[];
}

export type IndustrialServiceType = "machinery-removal" | "equipment-demolition" | "facility-cleanout" | "manufacturing-waste" | "scrap-metal-collection";

export interface ConstructionServices {
  type: "construction";
  subcategories: ConstructionServiceType[];
  permits?: ConstructionPermit[];
}

export type ConstructionServiceType = "site-preparation" | "debris-removal" | "concrete-recycling" | "metal-structure-removal" | "excavation-waste";

export interface ConstructionPermit {
  type: string;
  required: boolean;
  obtainingParty: "client" | "contractor";
  leadTime?: string;
}

export interface ResidentialServices {
  type: "residential";
  subcategories: ResidentialServiceType[];
  restrictions?: ResidentialRestriction[];
}

export type ResidentialServiceType = "appliance-removal" | "furniture-disposal" | "garage-cleanout" | "yard-waste" | "holiday-decorations";

export interface ResidentialRestriction {
  type: "weight" | "size" | "material" | "hazardous";
  description: string;
  allowed: boolean;
}

export interface AutomotiveServices {
  type: "automotive";
  subcategories: AutomotiveServiceType[];
}

export type AutomotiveServiceType = "vehicle-removal" | "auto-parts-recycling" | "tire-disposal" | "fluid-collection" | "battery-recycling";

export interface ElectronicsServices {
  type: "electronics";
  subcategories: ElectronicsServiceType[];
  dataDestruction?: DataDestructionOptions;
}

export type ElectronicsServiceType = "computer-recycling" | "tv-monitor-disposal" | "phone-tablet-recycling" | "appliance-electronics" | "cable-wire-stripping";

export interface DataDestructionOptions {
  methods: DataDestructionMethod[];
  certifications?: string[];
  fees?: number;
}

export type DataDestructionMethod = "physical-destruction" | "software-wipe" | "degaussing" | "certified-shredding";

export interface DemolitionServices {
  type: "demolition";
  subcategories: DemolitionServiceType[];
  environmentalImpact?: EnvironmentalAssessment[];
}

export type DemolitionServiceType = "structure-demolition" | "interior-demolition" | "selective-demolition" | "concrete-breaking" | "asbestos-abatement";

export interface EnvironmentalAssessment {
  type: string;
  required: boolean;
  leadTime: string;
  cost: number;
}

export interface OilfieldServices {
  type: "oilfield";
  subcategories: OilfieldServiceType[];
  equipment: OilfieldEquipment[];
}

export type OilfieldServiceType = "drill-pipe-recovery" | "casing-removal" | "tank-cleaning" | "pipeline-demolition" | "platform-decommissioning";

export interface OilfieldEquipment {
  type: string;
  specifications: string[];
  certifications: string[];
}

// Service operations
export interface ServiceRequest {
  id: string;
  serviceId: string;
  clientInfo: ClientInfo;
  location: ServiceLocation;
  details: ServiceRequestDetails;
  scheduling: ServiceScheduling;
  status: ServiceStatus;
  createdAt: string;
  updatedAt: string;
}

export interface ClientInfo {
  companyName?: string;
  contactName: string;
  email: string;
  phone: string;
  address?: Address;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}

export interface ServiceLocation {
  type: "residential" | "commercial" | "industrial" | "rural";
  access: Accessibility;
  parkingAvailable: boolean;
  restrictions?: string[];
}

export interface Accessibility {
  driveway: boolean;
  streetLevel: boolean;
  hoistRequired: boolean;
  gateCode?: string;
  specialInstructions?: string;
}

export interface ServiceRequestDetails {
  volume?: Quantity;
  materials: ServiceMaterial[];
  specialHandling?: SpecialHandling[];
  urgency: "standard" | "rush" | "emergency";
  budget?: Budget;
}

export interface Quantity {
  amount: number;
  unit: "tons" | "cubic-yards" | "pieces" | "loads" | "truckloads";
  estimated: boolean;
}

export interface ServiceMaterial {
  type: string;
  quantity?: Quantity;
  condition: "clean" | "mixed" | "hazardous";
  preparation?: string[];
}

export interface SpecialHandling {
  type: "asbestos" | "lead" | "mercury" | "chemicals" | "biological" | "radioactive";
  description: string;
  requirements: string[];
}

export interface Budget {
  estimatedValue: number;
  currency: string;
  confidenceLevel: "low" | "medium" | "high";
}

export interface ServiceScheduling {
  preferredDate?: string;
  preferredTime?: string;
  flexibility: "exact" | "flexible" | "anytime";
  duration?: Duration;
}

export interface Duration {
  estimated: number; // hours
  unit: "hours" | "days";
  weatherDependent: boolean;
}

export type ServiceStatus = "pending" | "scheduled" | "in-progress" | "completed" | "cancelled" | "issue";

// Service metrics and analytics
export interface ServiceMetrics {
  serviceId: string;
  period: {
    start: string;
    end: string;
  };
  requests: number;
  completed: number;
  averageRating: number;
  revenue: number;
  costs: {
    labor: number;
    equipment: number;
    transportation: number;
    disposal: number;
  };
  efficiency: {
    averageDuration: number;
    onTimeRate: number;
    customerSatisfaction: number;
  };
}
