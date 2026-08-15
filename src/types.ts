export type ServiceId = 
  | 'startup'
  | 'gst'
  | 'mca-services'
  | 'income-tax'
  | 'trademark'
  | 'accounting-bookkeeping';

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  price: number; // in INR
  billingFrequency: 'one-time' | 'monthly' | 'annual';
  isPopular?: boolean;
  features: string[];
  ctaText: string;
  governmentFeeNote?: string;
}

export interface ServiceDetail {
  id: ServiceId;
  slug: string;
  title: string;
  badge: string;
  heroHeadline: string;
  heroSubheadline: string;
  startingPrice: number;
  slaDays: string;
  whatsIncluded: string[];
  documentChecklist: {
    name: string;
    description: string;
    required: boolean;
  }[];
  pricingTiers: PricingTier[];
  faqs: {
    question: string;
    answer: string;
  }[];
  processSteps: {
    step: number;
    title: string;
    description: string;
  }[];
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  companyName?: string;
  gstin?: string;
  pan?: string;
  cin?: string;
  mfaEnabled: boolean;
  encryptionKeyStatus: 'Active - AES-256-GCM';
  role: 'client' | 'admin';
  createdAt: string;
}

export type OrderStatus = 
  | 'Lead Created'
  | 'Docs Pending'
  | 'Under Review'
  | 'Filing in Progress'
  | 'Govt Verification'
  | 'Completed';

export interface OrderProgressStep {
  title: string;
  description: string;
  completed: boolean;
  date?: string;
}

export interface OrderItem {
  id: string;
  userId: string;
  serviceId: ServiceId;
  serviceName: string;
  tierName: string;
  amount: number;
  status: OrderStatus;
  progressPercent: number;
  assignedExpert: string;
  expertPhone: string;
  createdAt: string;
  targetCompletionDate: string;
  steps: OrderProgressStep[];
  certificateUrl?: string;
}

export type DocVerificationStatus = 'Pending' | 'Uploaded' | 'Verified' | 'Rejected';

export interface DocumentItem {
  id: string;
  orderId: string;
  name: string;
  category: string;
  status: DocVerificationStatus;
  uploadedAt?: string;
  fileSize?: string;
  fileType?: string;
  rejectionReason?: string;
  isEncrypted: boolean;
  downloadUrl?: string;
}

export interface ExpertMessage {
  id: string;
  orderId: string;
  senderName: string;
  senderRole: 'Expert' | 'Client' | 'System';
  message: string;
  timestamp: string;
  attachments?: { name: string; url: string }[];
}

export interface ComplianceReminder {
  id: string;
  title: string;
  category: 'GST' | 'ROC' | 'Income Tax' | 'TDS' | 'Trademark';
  dueDate: string;
  isUrgent: boolean;
  status: 'Upcoming' | 'Filed' | 'Overdue';
  description: string;
  estimatedPenalty: string;
}

export interface InvoiceItem {
  id: string;
  orderId: string;
  invoiceNumber: string;
  date: string;
  serviceName: string;
  amount: number;
  gstAmount: number;
  totalAmount: number;
  status: 'Paid' | 'Pending' | 'Subscription Active';
  pdfUrl: string;
}

export interface LeadSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  serviceId?: string;
  city?: string;
  submittedAt: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: string;
  publishedDate: string;
  content: string[];
}
