// API-related type definitions for K&L Recycling

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  timestamp?: string;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
  sort?: string;
  order?: "asc" | "desc";
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// Form submission APIs
export interface ContactFormSubmission {
  service: string;
  details: string;
  name: string;
  email: string;
  phone: string;
  message?: string;
  preferredContact?: "email" | "phone";
  timestamp: string;
}

export interface QuoteRequestSubmission {
  service: string;
  details: string;
  name: string;
  email: string;
  phone: string;
  materialType?: string;
  estimatedVolume?: string;
  location?: string;
  timeline?: string;
  timestamp: string;
}

// CMS API responses (Sanity)
export interface SanityAsset {
  _type: "image" | "file";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface SanityImage extends SanityAsset {
  _type: "image";
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
}

// Pricing API
export interface PricingItem {
  name: string;
  price: number;
  unit: string;
  lastUpdated: string;
  category?: string;
}

export interface PricingUpdateRequest {
  materialId: string;
  newPrice: number;
  unit: string;
}

// Service location APIs
export interface LocationSearchParams {
  zipCode?: string;
  city?: string;
  state?: string;
  service?: string;
  radius?: number; // miles
}

export interface ServiceAvailabilityResponse {
  locationId: string;
  serviceId: string;
  available: boolean;
  nextAvailableDate?: string;
  estimatedDuration?: string;
}

// File upload APIs
export interface FileUploadResponse {
  fileId: string;
  filename: string;
  size: number;
  type: string;
  url: string;
  publicId?: string; // Cloudinary specific
}

// Error handling
export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
  field?: string; // for validation errors
}

export interface ValidationError extends ApiError {
  field: string;
  value: unknown;
}
