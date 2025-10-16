// Component-specific type definitions for K&L Recycling

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  "data-testid"?: string;
}

// Form Components
export interface FormFieldProps extends BaseComponentProps {
  label: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
}

export interface TextInputProps extends FormFieldProps {
  type?: "text" | "email" | "tel" | "password" | "url";
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
  pattern?: string;
}

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends FormFieldProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  multiple?: boolean;
}

export interface CheckboxProps extends Omit<FormFieldProps, "label"> {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}

// UI Components
export interface ButtonProps extends BaseComponentProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  href?: string;
  external?: boolean;
}

export interface ModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: "sm" | "md" | "lg" | "full";
  closable?: boolean;
}

export interface LoadingSpinnerProps extends BaseComponentProps {
  size?: "sm" | "md" | "lg";
  color?: string;
  message?: string;
}

export interface SkeletonProps extends BaseComponentProps {
  width?: string | number;
  height?: string | number;
  variant?: "text" | "rectangular" | "circular";
}

export interface ToastProps extends BaseComponentProps {
  type?: "success" | "error" | "warning" | "info";
  message: string;
  duration?: number;
  onClose?: () => void;
  action?: {
    label: string;
    onClick: () => void;
  };
}

// Layout Components
export interface HeaderProps extends BaseComponentProps {
  variant?: "default" | "sticky" | "fixed";
  transparent?: boolean;
}

export interface FooterProps extends BaseComponentProps {
  variant?: "default" | "minimal";
}

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: "summary" | "summary_large_image";
  structuredData?: Record<string, unknown>;
}

// Data Display Components
export interface TableColumn<T = unknown> {
  key: keyof T | string;
  header: string;
  render?: (value: unknown, item: T) => React.ReactNode;
  sortable?: boolean;
  width?: string;
  align?: "left" | "center" | "right";
}

export interface TableProps<T = unknown> extends BaseComponentProps {
  data: T[];
  columns: TableColumn<T>[];
  loading?: boolean;
  emptyMessage?: string;
  selectable?: boolean;
  onRowClick?: (item: T) => void;
  onSelectionChange?: (selected: T[]) => void;
}

// Navigation Components
export interface NavItem {
  name: string;
  href: string;
  description?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  external?: boolean;
  badge?: string;
}

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

// Hero Components
export interface HeroProps extends BaseComponentProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  cta?: {
    text: string;
    href: string;
    external?: boolean;
  }[];
  variant?: "default" | "centered" | "split";
}

// Animation Components
export interface AnimatedCounterProps extends BaseComponentProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  separator?: boolean;
  decimals?: number;
}

// Cart/Checkout Components (future use)
export interface CartItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image?: string;
}

export interface CartProps extends BaseComponentProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

// Trust/Social Proof Components
export interface TrustBadge {
  name: string;
  logo: string;
  alt: string;
  href?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company?: string;
  rating?: number;
  avatar?: string;
}
