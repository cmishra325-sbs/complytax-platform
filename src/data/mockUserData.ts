import { UserProfile, OrderItem, DocumentItem, ExpertMessage, ComplianceReminder, InvoiceItem } from '../types';

export const DEMO_USER: UserProfile = {
  id: 'usr_782910',
  name: 'Vikramaditya Roy',
  email: 'founder@complytax.in',
  phone: '+91 98765 43210',
  companyName: 'Nexus AI Technologies Pvt Ltd',
  gstin: '07AAAAA0000A1Z5',
  pan: 'AAACN1234F',
  cin: 'U72900DL2025PTC389102',
  mfaEnabled: true,
  encryptionKeyStatus: 'Active - AES-256-GCM',
  role: 'client',
  createdAt: '2025-11-12'
};

export const INITIAL_ORDERS: OrderItem[] = [
  {
    id: 'ORD-2026-8812',
    userId: 'usr_782910',
    serviceId: 'startup',
    serviceName: 'Company Incorporation (Pvt Ltd)',
    tierName: 'Startup Launchpad',
    amount: 4999,
    status: 'Completed',
    progressPercent: 100,
    assignedExpert: 'CS Ritu Sharma',
    expertPhone: '+91 98112 33445',
    createdAt: '2026-01-15',
    targetCompletionDate: '2026-01-22',
    certificateUrl: '/certificates/coi_nexus_ai.pdf',
    steps: [
      { title: 'Name Approval Reservation (RUN)', description: 'Company name "Nexus AI Technologies Pvt Ltd" reserved with MCA.', completed: true, date: '2026-01-16' },
      { title: 'DSC & Director KYC Verification', description: 'Digital signatures generated for 2 directors.', completed: true, date: '2026-01-17' },
      { title: 'Spice+ E-Filing on MCA Portal', description: 'MoA, AoA & SPICe+ forms filed at CPC.', completed: true, date: '2026-01-19' },
      { title: 'Certificate of Incorporation Issued', description: 'COI, PAN, TAN & Bank Account allotment completed.', completed: true, date: '2026-01-22' }
    ]
  },
  {
    id: 'ORD-2026-9043',
    userId: 'usr_782910',
    serviceId: 'gst',
    serviceName: 'GST Registration & Monthly Filing',
    tierName: 'GST Filing Subscription (Annual)',
    amount: 6999,
    status: 'Govt Verification',
    progressPercent: 75,
    assignedExpert: 'CA Ankit Verma',
    expertPhone: '+91 98711 00223',
    createdAt: '2026-07-20',
    targetCompletionDate: '2026-08-12',
    steps: [
      { title: 'TRN Generation & Application Draft', description: 'Temporary Reference Number TRN generated on GST portal.', completed: true, date: '2026-07-21' },
      { title: 'Aadhaar e-KYC Authentication', description: 'Aadhaar OTP e-signature verified for primary director.', completed: true, date: '2026-07-22' },
      { title: 'GST Officer Review & Verification', description: 'Application under official review with State Tax Officer.', completed: true, date: '2026-07-25' },
      { title: '15-Digit GSTIN Certificate Issue', description: 'Final REG-06 Certificate expected in 24-48 hours.', completed: false }
    ]
  },
  {
    id: 'ORD-2026-9210',
    userId: 'usr_782910',
    serviceId: 'trademark',
    serviceName: 'Trademark Registration (Brand Name)',
    tierName: 'TM Protection & Examination Shield',
    amount: 4999,
    status: 'Filing in Progress',
    progressPercent: 50,
    assignedExpert: 'Adv. Suresh Iyer',
    expertPhone: '+91 99001 88776',
    createdAt: '2026-08-01',
    targetCompletionDate: '2026-08-15',
    steps: [
      { title: 'Phonetic Trademark Search', description: 'Zero conflict found in Class 42 for "NEXUS AI".', completed: true, date: '2026-08-02' },
      { title: 'Form TM-A Drafting', description: 'Goods & Services specification drafted with MSME discount.', completed: true, date: '2026-08-05' },
      { title: 'IP India Portal E-Filing', description: 'Official TM application e-filing scheduled.', completed: false },
      { title: 'TM Application Receipt Delivery', description: 'Receive official TM receipt & start using ™ symbol.', completed: false }
    ]
  }
];

export const INITIAL_DOCUMENTS: DocumentItem[] = [
  {
    id: 'DOC-101',
    orderId: 'ORD-2026-8812',
    name: 'Director PAN Card (Vikramaditya Roy)',
    category: 'Identity Proof',
    status: 'Verified',
    uploadedAt: '2026-01-16 10:30 AM',
    fileSize: '1.2 MB',
    fileType: 'PDF',
    isEncrypted: true,
    downloadUrl: '#'
  },
  {
    id: 'DOC-102',
    orderId: 'ORD-2026-8812',
    name: 'Registered Office Rental Agreement',
    category: 'Address Proof',
    status: 'Verified',
    uploadedAt: '2026-01-16 11:15 AM',
    fileSize: '3.8 MB',
    fileType: 'PDF',
    isEncrypted: true,
    downloadUrl: '#'
  },
  {
    id: 'DOC-103',
    orderId: 'ORD-2026-9043',
    name: 'Electricity Bill (< 2 months old)',
    category: 'Premises Proof',
    status: 'Verified',
    uploadedAt: '2026-07-21 04:20 PM',
    fileSize: '2.1 MB',
    fileType: 'PDF',
    isEncrypted: true,
    downloadUrl: '#'
  },
  {
    id: 'DOC-104',
    orderId: 'ORD-2026-9043',
    name: 'Cancelled Cheque - HDFC Bank Account',
    category: 'Bank Account Proof',
    status: 'Uploaded',
    uploadedAt: '2026-07-21 04:25 PM',
    fileSize: '850 KB',
    fileType: 'PNG',
    isEncrypted: true,
    downloadUrl: '#'
  },
  {
    id: 'DOC-105',
    orderId: 'ORD-2026-9210',
    name: 'Nexus AI High-Res Brand Logo',
    category: 'Trademark Asset',
    status: 'Uploaded',
    uploadedAt: '2026-08-01 02:10 PM',
    fileSize: '4.5 MB',
    fileType: 'PNG',
    isEncrypted: true,
    downloadUrl: '#'
  },
  {
    id: 'DOC-106',
    orderId: 'ORD-2026-9210',
    name: 'Udyam MSME Certificate',
    category: 'Govt Fee Discount Proof',
    status: 'Pending',
    isEncrypted: true
  }
];

export const INITIAL_MESSAGES: ExpertMessage[] = [
  {
    id: 'MSG-1',
    orderId: 'ORD-2026-9043',
    senderName: 'CA Ankit Verma',
    senderRole: 'Expert',
    message: 'Hello Vikram! I have verified your address proofs for the GST registration. Application ARN has been submitted to the Delhi GST Ward. You will receive an Aadhaar OTP link on your registered phone.',
    timestamp: '2026-07-22 09:30 AM'
  },
  {
    id: 'MSG-2',
    orderId: 'ORD-2026-9043',
    senderName: 'Vikramaditya Roy',
    senderRole: 'Client',
    message: 'Thanks Ankit! I completed the Aadhaar OTP verification on the UIDAI link. Please check if the portal status reflects Authentication Successful.',
    timestamp: '2026-07-22 10:15 AM'
  },
  {
    id: 'MSG-3',
    orderId: 'ORD-2026-9043',
    senderName: 'CA Ankit Verma',
    senderRole: 'Expert',
    message: 'Yes! Aadhaar authentication confirmed. The application is now with the State Tax Officer. We expect final REG-06 approval in 24-48 hours.',
    timestamp: '2026-07-22 11:00 AM'
  }
];

export const INITIAL_REMINDERS: ComplianceReminder[] = [
  {
    id: 'REM-1',
    title: 'GSTR-3B Monthly Return Filing (July 2026)',
    category: 'GST',
    dueDate: '2026-08-20',
    isUrgent: true,
    status: 'Upcoming',
    description: 'Summary return for outward sales and Input Tax Credit (ITC) tax payment.',
    estimatedPenalty: '₹50 / day late fee after Aug 20'
  },
  {
    id: 'REM-2',
    title: 'DIR-3 Director KYC Filing (FY 2025-26)',
    category: 'ROC',
    dueDate: '2026-09-30',
    isUrgent: false,
    status: 'Upcoming',
    description: 'Annual mandatory director identification verification with MCA.',
    estimatedPenalty: '₹5,000 late fee per DIN'
  },
  {
    id: 'REM-3',
    title: 'Form AOC-4 Company Financial Statement Filing',
    category: 'ROC',
    dueDate: '2026-10-30',
    isUrgent: false,
    status: 'Upcoming',
    description: 'Audited Balance Sheet and Profit & Loss filing for FY 2025-26.',
    estimatedPenalty: '₹100 / day per form'
  },
  {
    id: 'REM-4',
    title: 'Advance Tax Installment 2 (FY 2026-27)',
    category: 'Income Tax',
    dueDate: '2026-09-15',
    isUrgent: false,
    status: 'Upcoming',
    description: '45% cumulative advance tax liability payment to Income Tax Department.',
    estimatedPenalty: '1% interest / month under Sec 234C'
  }
];

export const INITIAL_INVOICES: InvoiceItem[] = [
  {
    id: 'INV-2026-001',
    orderId: 'ORD-2026-8812',
    invoiceNumber: 'INV/2026/01/8812',
    date: '2026-01-15',
    serviceName: 'Company Incorporation - Startup Launchpad',
    amount: 4236.44,
    gstAmount: 762.56,
    totalAmount: 4999,
    status: 'Paid',
    pdfUrl: '#'
  },
  {
    id: 'INV-2026-002',
    orderId: 'ORD-2026-9043',
    invoiceNumber: 'INV/2026/07/9043',
    date: '2026-07-20',
    serviceName: 'GST Registration & Annual Return Filing',
    amount: 5931.36,
    gstAmount: 1067.64,
    totalAmount: 6999,
    status: 'Subscription Active',
    pdfUrl: '#'
  },
  {
    id: 'INV-2026-003',
    orderId: 'ORD-2026-9210',
    invoiceNumber: 'INV/2026/08/9210',
    date: '2026-08-01',
    serviceName: 'Trademark Registration - Protection Package',
    amount: 4236.44,
    gstAmount: 762.56,
    totalAmount: 4999,
    status: 'Paid',
    pdfUrl: '#'
  }
];
