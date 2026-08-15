import { ServiceDetail } from '../types';

export const SERVICES_DATA: Record<string, ServiceDetail> = {
  'startup': {
    id: 'startup',
    slug: 'startup',
    title: 'Business Registration',
    badge: 'Pvt Ltd / LLP / OPC / Proprietorship',
    heroHeadline: 'Incorporation & Business Registration in India',
    heroSubheadline: 'Launch your company seamlessly with zero hassle. We handle MCA filings, Name Approval, DIN, DSC, PAN, TAN, and Bank Account setup with end-to-end expert guidance.',
    startingPrice: 1999,
    slaDays: '3–7 Working Days',
    whatsIncluded: [
      'Digital Signature Certificates (2 DSCs included)',
      'Director Identification Numbers (2 DINs included)',
      'RUN Name Approval Reservation with MCA',
      'Certificate of Incorporation (COI) & Spice+ Filing',
      'Company PAN, TAN & Provident Fund (EPFO) Registration',
      'Zero-Balance Corporate Bank Account Opening Assistance'
    ],
    documentChecklist: [
      { name: 'PAN Card', description: 'Self-attested PAN card copy of all directors/partners', required: true },
      { name: 'Identity Proof', description: 'Aadhaar Card, Passport or Voter ID of all directors', required: true },
      { name: 'Address Proof', description: 'Bank Statement, Electricity Bill or Mobile Bill (< 2 months old)', required: true },
      { name: 'Registered Office Address Proof', description: 'Electricity Bill / Property Tax Receipt of office address', required: true },
      { name: 'NOC from Owner', description: 'No Objection Certificate from property owner for address use', required: true }
    ],
    pricingTiers: [
      {
        id: 'startup-basic',
        name: 'Starter Registration',
        tagline: 'Ideal for early-stage startups needing basic incorporation',
        price: 1999,
        billingFrequency: 'one-time',
        features: [
          '2 DSCs + 2 DINs included',
          'Name Reservation (RUN)',
          'Spice+ Article & Memorandum (MoA/AoA)',
          'Certificate of Incorporation (COI)',
          'PAN & TAN Generation',
          'Standard Support'
        ],
        ctaText: 'Start Incorporation',
        governmentFeeNote: '*Govt stamp duty & MCA fees billed at actuals based on state'
      },
      {
        id: 'startup-popular',
        name: 'Startup Launchpad',
        tagline: 'Complete company launch with GST registration & 1st year secretarial support',
        price: 4999,
        billingFrequency: 'one-time',
        isPopular: true,
        features: [
          'Everything in Starter',
          'Instant GSTIN Registration included',
          'MSME / Udyam Registration Certificate',
          'Trademark Name Search Report',
          'First Board Resolution Drafting',
          '1st Year INC-20A Commencement of Business Filing',
          'Dedicated Chartered Accountant Assigned'
        ],
        ctaText: 'Get Popular Package',
        governmentFeeNote: 'Includes full incorporation assistance + GST registration'
      },
      {
        id: 'startup-premium',
        name: 'Complete Business Retainer',
        tagline: 'Incorporation + GST Filing + 1 Year ROC Compliance + Accounting Bundle',
        price: 14999,
        billingFrequency: 'annual',
        features: [
          'Everything in Launchpad',
          '12 Months GSTR-1 & GSTR-3B Monthly Returns',
          'Full 1st Year MCA ROC Annual Filing (AOC-4 & MGT-7)',
          'Director DIR-3 KYC Filing for 2 Directors',
          'Cloud Accounting Software Subscription',
          'Quarterly Financial Health Audit',
          'Priority WhatsApp Support with Senior CA'
        ],
        ctaText: 'Subscribe Annual Bundle',
        governmentFeeNote: 'All-in-one yearly business compliance shield'
      }
    ],
    processSteps: [
      { step: 1, title: 'Name Availability Search', description: 'Verify your proposed company name against MCA database and existing trademarks.' },
      { step: 2, title: 'DSC & Document Collection', description: 'Upload director identity proofs safely into our AES-256 encrypted vault.' },
      { step: 3, title: 'Spice+ E-Filing on MCA Portal', description: 'Our legal experts prepare MoA/AoA and submit form SPICe+ to Central Processing Centre.' },
      { step: 4, title: 'COI & Bank Account Setup', description: 'Receive your Certificate of Incorporation along with PAN, TAN, and bank account setup.' }
    ],
    faqs: [
      { question: 'How many days does it take to register a Private Limited Company?', answer: 'The standard MCA processing time is 3 to 7 working days once all director documents and address proofs are submitted and verified.' },
      { question: 'What is the minimum capital required to start a Pvt Ltd company?', answer: 'There is no minimum paid-up capital requirement under the Companies Act 2013. You can start with as low as ₹1,000 capital.' },
      { question: 'Can an employee or NRI be a director in an Indian company?', answer: 'Yes, an NRI or foreign national can be a director provided at least one director on the board is a resident of India (stayed 182+ days).' },
      { question: 'Are government fees included in the starting price?', answer: 'Professional fees cover preparation, filing, and advisory. MCA government stamp duty varies by state and authorized capital and is charged at actual receipt cost.' }
    ]
  },

  'gst': {
    id: 'gst',
    slug: 'gst',
    title: 'GST Registration & Return Filing',
    badge: 'GSTIN Activation & Monthly GSTR-1 / 3B Compliance',
    heroHeadline: 'GST Registration & Automated Return Filing',
    heroSubheadline: 'Get your 15-digit GSTIN activated seamlessly and maintain 100% compliance with monthly GSTR-1, GSTR-3B, and GSTR-9 annual return filings without notices or penalties.',
    startingPrice: 999,
    slaDays: '2–4 Working Days',
    whatsIncluded: [
      'GSTIN Application Preparation & Portal E-filing',
      'TRN (Temporary Reference Number) Generation',
      'Application Clarification / Officer Query Reply Handling',
      'Official GST Registration Certificate (Form REG-06)',
      'Automated Monthly GSTR-1 & GSTR-3B Preparation',
      'Input Tax Credit (ITC) Reconciliation against GSTR-2B'
    ],
    documentChecklist: [
      { name: 'PAN of Applicant / Entity', description: 'PAN Card of proprietor, partnership or company', required: true },
      { name: 'Aadhaar Card', description: 'Linked with active mobile number for e-signature OTP', required: true },
      { name: 'Business Address Proof', description: 'Electricity Bill, Property tax receipt, or Rent Agreement', required: true },
      { name: 'Bank Details', description: 'Cancelled Cheque, Passbook, or Bank Statement copy', required: true },
      { name: 'Passport Size Photo', description: 'Clear photo of proprietor or authorized signatory', required: true }
    ],
    pricingTiers: [
      {
        id: 'gst-registration',
        name: 'GSTIN Registration Only',
        tagline: 'For new businesses needing immediate 15-digit GSTIN activation',
        price: 999,
        billingFrequency: 'one-time',
        features: [
          'GST Application Filing on Portal',
          'TRN Tracking & Officer Liaisoning',
          'Form REG-06 GST Certificate Issuance',
          'HSN/SAC Code Classification',
          'Primary Bank Account Mapping',
          'Email & Phone Support'
        ],
        ctaText: 'Get GSTIN Registration',
        governmentFeeNote: 'Government GST registration fee is ₹0'
      },
      {
        id: 'gst-popular',
        name: 'GST Filing Subscription (Annual)',
        tagline: 'Full year of GSTR-1, GSTR-3B filings with Input Tax Credit optimization',
        price: 6999,
        billingFrequency: 'annual',
        isPopular: true,
        features: [
          'Free GST Registration Included',
          '12 Months GSTR-1 Monthly Turnover Filing',
          '12 Months GSTR-3B Summary Tax Payment Filing',
          'GSTR-2B Input Tax Credit (ITC) Reconciliation',
          'E-Way Bill & E-Invoicing Guidance',
          'GST Notice Resolution & Advisory',
          'Dedicated Tax Accountant & Whatsapp Support'
        ],
        ctaText: 'Start Annual GST Shield',
        governmentFeeNote: 'Includes 24 return filings + free registration'
      },
      {
        id: 'gst-premium',
        name: 'Enterprise GST & Billing Suite',
        tagline: 'Multi-state GST filings + E-Invoicing integration + Quarterly Audit',
        price: 14999,
        billingFrequency: 'annual',
        features: [
          'Everything in Annual Filing',
          'Multi-Branch / Multi-State GSTIN Management',
          'GSTR-9 & GSTR-9C Annual Return Preparation',
          'Automated E-Invoicing QR Code Generator API',
          'LUT Filing for Export / Service Exporters',
          'Quarterly ITC Mismatch Reconciliation Audit',
          'Senior Tax Partner Consultation'
        ],
        ctaText: 'Subscribe Enterprise Suite',
        governmentFeeNote: 'For businesses above ₹1 Crore turnover'
      }
    ],
    processSteps: [
      { step: 1, title: 'Document Upload & Verification', description: 'Upload PAN, Aadhaar, and premise proofs to our secure vault.' },
      { step: 2, title: 'TRN Generation & Portal E-Filing', description: 'Our GST specialist drafts Form REG-01 and generates TRN on GST portal.' },
      { step: 3, title: 'Aadhaar Authentication & Query Reply', description: 'Complete OTP Aadhaar e-KYC. We address any GST officer clarification within 24 hours.' },
      { step: 4, title: 'GSTIN Certificate Download', description: 'Download your official Form REG-06 GST Certificate directly from your dashboard.' }
    ],
    faqs: [
      { question: 'When is GST registration mandatory in India?', answer: 'GST registration is mandatory if turnover exceeds ₹40 Lakhs for goods (₹20 Lakhs for special states) or ₹20 Lakhs for services (₹10 Lakhs for special states), or for e-commerce sellers and interstate transactions regardless of turnover.' },
      { question: 'How long does it take to get a GSTIN number?', answer: 'Usually 2 to 4 working days upon successful Aadhaar authentication. If an officer issues a query notice, it takes an extra 2–3 days after reply.' },
      { question: 'What happens if I miss GSTR-3B filing due date?', answer: 'Late filing attracts a penalty of ₹50/day (₹20/day for NIL return) along with 18% annual interest on outstanding tax liabilities.' },
      { question: 'Can I file NIL GST returns if there are no sales in a month?', answer: 'Yes! NIL returns are mandatory every month even if you had zero transactions, to prevent late fees and portal blocking.' }
    ]
  },

  'mca-services': {
    id: 'mca-services',
    slug: 'mca-services',
    title: 'MCA / ROC Annual Compliance',
    badge: 'AOC-4 / MGT-7 / DIR-3 KYC / Statutory Records',
    heroHeadline: 'End-to-End MCA & ROC Compliance Services',
    heroSubheadline: 'Protect your Private Limited or LLP company from heavy MCA penalties of ₹100/day. We handle annual financial filings (AOC-4), director report (MGT-7), Director KYC (DIR-3 KYC), and minutes maintenance.',
    startingPrice: 1499,
    slaDays: '3–5 Working Days',
    whatsIncluded: [
      'AOC-4 Financial Statement E-filing with MCA Portal',
      'MGT-7 / MGT-7A Annual Return Preparation & Certification',
      'DIR-3 KYC Filing for all active company directors',
      'INC-20A Certificate of Commencement of Business Filing',
      'Board Meeting Resolutions & Minutes Book Drafting',
      'Statutory Registers Maintenance (Form MGT-1)'
    ],
    documentChecklist: [
      { name: 'Audited Financial Statements', description: 'Balance sheet, P&L statement certified by CA', required: true },
      { name: 'Auditor Report & Notes', description: 'ADT-1 Auditor appointment copy and audit report', required: true },
      { name: 'Director PAN & Aadhaar', description: 'Updated PAN and Aadhaar for DIR-3 KYC e-KYC OTP', required: true },
      { name: 'Director Mobile & Email', description: 'Active email and phone number linked with Aadhaar', required: true }
    ],
    pricingTiers: [
      {
        id: 'mca-kyc',
        name: 'Director DIR-3 KYC',
        tagline: 'Annual mandatory KYC filing for DIN holders before September 30th',
        price: 1499,
        billingFrequency: 'one-time',
        features: [
          'DIR-3 KYC E-Form / Web Filing',
          'Mobile & Email OTP Verification',
          'DIN Status Reactivation',
          'MCA SRN Payment Receipt',
          'Same-Day Filing Confirmation'
        ],
        ctaText: 'File Director KYC',
        governmentFeeNote: 'Govt fee ₹0 if filed before Sep 30 (Late fee ₹5000)'
      },
      {
        id: 'mca-popular',
        name: 'Annual ROC Compliance Shield',
        tagline: 'Complete yearly ROC package for active Private Limited Companies',
        price: 7999,
        billingFrequency: 'annual',
        isPopular: true,
        features: [
          'Form AOC-4 Financial Statements Filing',
          'Form MGT-7 / MGT-7A Annual Return Filing',
          'DIR-3 KYC Filing for up to 2 Directors',
          'Preparation of Directors Report & Notice of AGM',
          'Drafting 4 Board Meeting Minutes',
          'Maintenance of Statutory Registers',
          'Dedicated Corporate Secretarial Expert'
        ],
        ctaText: 'Get Annual ROC Package',
        governmentFeeNote: 'Excludes MCA filing portal stamp fees'
      },
      {
        id: 'mca-premium',
        name: 'Comprehensive Corporate Governance',
        tagline: 'ROC Filings + Auditor Appointment ADT-1 + DPT-3 + MSME-1 Filings',
        price: 13999,
        billingFrequency: 'annual',
        features: [
          'Everything in Annual ROC Package',
          'Form ADT-1 Auditor Appointment Filing',
          'Form DPT-3 Annual Deposit Return Filing',
          'Form MSME-1 Half-Yearly Outstanding Payments Return',
          'Share Transfer & Allotment Advisory',
          'DIN & Board Resolution Secretarial Support',
          'Priority MCA Officer Liaison'
        ],
        ctaText: 'Subscribe Full Corporate Governance',
        governmentFeeNote: 'Complete corporate immunity shield'
      }
    ],
    processSteps: [
      { step: 1, title: 'Financial Statement Review', description: 'Upload audited P&L statement, balance sheet, and board report.' },
      { step: 2, title: 'Form Preparation (AOC-4 & MGT-7)', description: 'Our CS team drafts AOC-4 XBRL/Standard e-forms and MGT-7 annual return.' },
      { step: 3, title: 'Digital Signature (DSC) Attachment', description: 'Attach director and practicing CS digital signatures securely.' },
      { step: 4, title: 'MCA Submission & SRN Receipt', description: 'Submit on V3 MCA portal and send approved SRN confirmation to dashboard.' }
    ],
    faqs: [
      { question: 'What is the penalty for late ROC annual filing?', answer: 'Late filing of AOC-4 or MGT-7 incurs a heavy mandatory MCA penalty of ₹100 per day per form with no maximum cap, plus potential disqualification of directors.' },
      { question: 'What is DIR-3 KYC and who must file it?', answer: 'Every individual who holds a Director Identification Number (DIN) must complete DIR-3 KYC annually on or before 30th September.' },
      { question: 'When is INC-20A required?', answer: 'INC-20A (Declaration of Commencement of Business) must be filed within 180 days of company incorporation before commencing business operations or issuing shares.' }
    ]
  },

  'income-tax': {
    id: 'income-tax',
    slug: 'income-tax',
    title: 'Income Tax Return (ITR) & TDS Filing',
    badge: 'ITR-1 to ITR-7 / TDS Quarterly Returns / Notice Defence',
    heroHeadline: 'Income Tax Return E-Filing & TDS Compliance',
    heroSubheadline: 'Maximize your tax refunds and achieve 100% tax compliance. Certified CAs handle ITR filing for Salaried Individuals, Business Owners, Capital Gains, Freelancers, Companies, and TDS Returns.',
    startingPrice: 1299,
    slaDays: '1–3 Working Days',
    whatsIncluded: [
      'Computation of Total Income & Tax Liability Calculation',
      'Old vs New Tax Regime Optimization Comparison',
      'Form 16, 26AS & AIS / TIS Data Reconciliation',
      'Capital Gains (Stocks, Crypto, Real Estate) Tax E-Filing',
      'Audit & Non-Audit Business ITR Filing (ITR-3 / ITR-4)',
      'Tax Notice Reply & Refund Status Tracking Support'
    ],
    documentChecklist: [
      { name: 'Form 16 / Salary Slips', description: 'Issued by employer for salaried professionals', required: false },
      { name: 'Form 26AS & AIS / TIS', description: 'Annual Information Statement downloaded from Income Tax Portal', required: true },
      { name: 'Bank Account Statements', description: 'All active bank account statements for interest income computation', required: true },
      { name: 'Investment Proofs', description: 'Section 80C (PPF, ELSS, Insurance), 80D (Health Insurance) receipts', required: false }
    ],
    pricingTiers: [
      {
        id: 'itr-salaried',
        name: 'Salaried & Freelancer ITR',
        tagline: 'For individuals with salary, house property, & interest income (ITR-1 / ITR-2)',
        price: 1299,
        billingFrequency: 'one-time',
        features: [
          'ITR-1 / ITR-2 E-filing by Expert CA',
          'AIS/TIS & Form 26AS Verification',
          'Tax Savings Deductions Maximization',
          'Tax Refund Processing Assistance',
          'E-Verification Guidance',
          'PDF Computation Sheet Included'
        ],
        ctaText: 'File Salaried ITR',
        governmentFeeNote: 'Fast refund processing in 15 days'
      },
      {
        id: 'itr-business',
        name: 'Business & Capital Gains ITR',
        tagline: 'For traders, freelancers, professionals, and presumptive business (ITR-3 / ITR-4)',
        price: 3499,
        billingFrequency: 'one-time',
        isPopular: true,
        features: [
          'Everything in Salaried',
          'Presumptive Taxation Section 44AD / 44ADA',
          'F&O, Intraday & Crypto Capital Gains Calculation',
          'Audit Exemption Verification',
          'Loss Carry-forward Setoff Analysis',
          'Advance Tax Calculation & Challan Generation',
          'Dedicated Chartered Accountant Consultation'
        ],
        ctaText: 'File Business ITR',
        governmentFeeNote: 'Covers stock market trading & business income'
      },
      {
        id: 'itr-tds-bundle',
        name: 'Corporate ITR + 4 Qtr TDS Retainer',
        tagline: 'Pvt Ltd Company ITR-6 + 26Q / 24Q Quarterly TDS Filing Bundle',
        price: 9999,
        billingFrequency: 'annual',
        features: [
          'Company ITR-6 Income Tax Return E-Filing',
          '4 Quarterly TDS Return Filings (Form 26Q / 24Q / 27Q)',
          'Form 16A TDS Certificate Generation',
          'TDS Rate Advisory under Sec 194C, 194J, 194I',
          'TRACES Portal Registration & Correction Filings',
          'Advance Tax Reminders & Computation',
          'Priority CA Notice Defence'
        ],
        ctaText: 'Subscribe Tax Retainer',
        governmentFeeNote: 'Complete corporate tax suite'
      }
    ],
    processSteps: [
      { step: 1, title: 'Document & AIS Import', description: 'Provide PAN & DOB to automatically fetch Form 26AS, AIS, and TIS records.' },
      { step: 2, title: 'Computation & Tax Optimization', description: 'Our CA compares Old vs New Regime and applies maximum legitimate tax deductions.' },
      { step: 3, title: 'E-Filing on IT Portal', description: 'Review computation summary and authorize CA to e-file on the Income Tax portal.' },
      { step: 4, title: 'E-Verification & Refund Tracking', description: 'Complete instant Aadhaar OTP e-verification and track refund status on dashboard.' }
    ],
    faqs: [
      { question: 'What is the last date to file Income Tax Return for FY 2025-26?', answer: 'For non-audit individuals and businesses, the due date is July 31st. For audit cases, the due date is October 31st.' },
      { question: 'Which tax regime is better: Old or New Tax Regime?', answer: 'The New Tax Regime offers lower slab rates without exemptions. The Old Tax Regime allows 80C, 80D, HRA, and Home Loan interest deductions. Our platform automatically calculates which regime saves you more money.' },
      { question: 'How quickly will I receive my tax refund?', answer: 'Once e-verified, income tax refunds are usually credited directly to your validated bank account within 10 to 25 days.' }
    ]
  },

  'trademark': {
    id: 'trademark',
    slug: 'trademark',
    title: 'Trademark Registration & Brand Protection',
    badge: 'Logo & Brand Name TM Registration / Class 1-45',
    heroHeadline: 'Trademark Registration & Intellectual Property Shield',
    heroSubheadline: 'Protect your brand name, logo, slogan, and business identity legally across India. Get instant ™ symbol usage rights and full protection against copycats.',
    startingPrice: 1999,
    slaDays: '1–2 Working Days for TM Receipt',
    whatsIncluded: [
      'Comprehensive IP India Trademark Public Search',
      'Trademark Class Selection (Goods & Services Classes 1–45)',
      'TM Application Drafting & E-Filing (Form TM-A)',
      'Instant™ Tag Usage Rights & Official TM Receipt',
      'Application Status Tracking & Examiner Report Monitoring',
      'MSME 50% Govt Fee Discount Assistance'
    ],
    documentChecklist: [
      { name: 'Brand Name / Logo Graphic', description: 'High-resolution logo image PNG or JPEG format', required: true },
      { name: 'Applicant Identity Proof', description: 'PAN Card and Aadhaar Card of individual / partner / director', required: true },
      { name: 'Udyam / MSME Certificate', description: 'Mandatory for 50% discount on Government trademark fees', required: false },
      { name: 'User Affidavit', description: 'If brand is already in prior commercial use in India', required: false }
    ],
    pricingTiers: [
      {
        id: 'tm-basic',
        name: 'Trademark Filing (TM-A)',
        tagline: 'Search + Application filing for startups & small businesses',
        price: 1999,
        billingFrequency: 'one-time',
        features: [
          'Pre-Filing Trademark Search Report',
          'Trademark Class Mapping',
          'Form TM-A E-Filing on IP Portal',
          'Instant Official Government Filing Receipt',
          'Use ™ Symbol Immediately',
          'Status Tracking'
        ],
        ctaText: 'File Trademark Now',
        governmentFeeNote: '*Govt Fee: ₹4,500 for Individual/MSME; ₹9,000 for non-MSME Company'
      },
      {
        id: 'tm-popular',
        name: 'TM Protection & Examination Shield',
        tagline: 'Filing + Formal Reply to Examiner Examination Report / Objections',
        price: 4999,
        billingFrequency: 'one-time',
        isPopular: true,
        features: [
          'Everything in Basic Filing',
          'Comprehensive Examination Report Analysis',
          'Drafting Formal Legal Reply to Section 9 / Section 11 Objections',
          'Affidavit of Prior User Proof Preparation',
          'IP Portal Reply Submission',
          'Senior IP Attorney Consultation'
        ],
        ctaText: 'Get Protection Package',
        governmentFeeNote: 'Complete legal objection defense included'
      },
      {
        id: 'tm-premium',
        name: 'Complete Brand Watch & Opposition Suite',
        tagline: 'Filing + Objection Reply + 1 Year Brand Infringement Monitoring',
        price: 8999,
        billingFrequency: 'annual',
        features: [
          'Everything in Protection Package',
          '1 Year Trademark Journal Watch Service',
          'Automated Infringement Alerts for Similar Logos',
          'Legal Cease & Desist Notice Drafting',
          'Hearing Representation Guidance',
          'Trademark Registration Certificate Delivery (® symbol)',
          '10-Year Renewal Tracking'
        ],
        ctaText: 'Subscribe Brand Guard',
        governmentFeeNote: 'Full 360-degree brand security'
      }
    ],
    processSteps: [
      { step: 1, title: 'AI & Legal Trademark Search', description: 'Perform deep phonetical and visual search in IP India database across chosen classes.' },
      { step: 2, title: 'Application Preparation', description: 'Draft Form TM-A with precise specification of goods/services and prior user claim.' },
      { step: 3, title: 'E-Filing & ™ Receipt', description: 'Submit on IP India portal. Get instant official receipt and start using ™ symbol.' },
      { step: 4, title: 'Examination & ® Certificate', description: 'Monitor examiner status. Upon journal publication and approval, receive official ® certificate.' }
    ],
    faqs: [
      { question: 'When can I start using the TM symbol on my logo?', answer: 'You can legally use the ™ symbol immediately upon getting the official government TM application receipt (usually within 24 hours of e-filing).' },
      { question: 'What is the difference between ™ and ® symbols?', answer: '™ indicates that a trademark application is filed and pending. ® can only be used after the trademark registration certificate is officially granted by the IP Registry.' },
      { question: 'How much is the Government fee for trademark registration?', answer: 'For Individuals, Proprietorships, and MSME/Udyam registered entities, government fee is ₹4,500 per class. For non-MSME companies, it is ₹9,000 per class.' }
    ]
  },

  'accounting-bookkeeping': {
    id: 'accounting-bookkeeping',
    slug: 'accounting-bookkeeping',
    title: 'Accounting & Bookkeeping Services',
    badge: 'Tally / Zoho Books Sync & Monthly Financials',
    heroHeadline: 'Dedicated Online Accounting & Bookkeeping',
    heroSubheadline: 'Streamline your company finances with dedicated Chartered Accountants. Get automated transaction ledgering, GST-compliant invoicing, bank reconciliation, and monthly P&L / Balance Sheet statements.',
    startingPrice: 2999,
    slaDays: 'Monthly Continuous Service',
    whatsIncluded: [
      'Dedicated Accountant & Senior CA Supervisor Assigned',
      'Sales, Purchase, Expense & Bank Statement Ledgering',
      'Bank Reconciliation Statement (BRS) Preparation',
      'GST Input Tax Credit & Sales Reconciliation',
      'Monthly Profit & Loss (P&L) and Balance Sheet Generation',
      'Integration with Tally Prime, Zoho Books, or QuickBooks'
    ],
    documentChecklist: [
      { name: 'Bank Account Statements', description: 'Monthly PDF bank statements of all business accounts', required: true },
      { name: 'Sales Invoices', description: 'Copies of issued customer invoices / sales receipts', required: true },
      { name: 'Purchase Bills & Expense Vouchers', description: 'Vendor bills, office rent, utility receipts', required: true },
      { name: 'Payment Gateway Statements', description: 'Razorpay, Stripe, or PayU monthly payout settlement reports', required: false }
    ],
    pricingTiers: [
      {
        id: 'acc-starter',
        name: 'Starter Bookkeeping',
        tagline: 'Up to 50 monthly transactions for small startups & freelancers',
        price: 2999,
        billingFrequency: 'monthly',
        features: [
          'Up to 50 Ledger Vouchers / Month',
          'Monthly Bank Reconciliation',
          'Quarterly Financial Statement',
          'Cloud Accounting Portal Access',
          'GST Ledger Sync',
          'Email Support'
        ],
        ctaText: 'Start Starter Plan',
        governmentFeeNote: 'Billed monthly, cancel anytime'
      },
      {
        id: 'acc-popular',
        name: 'Growth Accounting + GST Bundle',
        tagline: 'Up to 200 monthly transactions + Monthly GST Filing Included',
        price: 5999,
        billingFrequency: 'monthly',
        isPopular: true,
        features: [
          'Up to 200 Ledger Vouchers / Month',
          'Monthly P&L, Balance Sheet, & Cash Flow Statement',
          'Free GSTR-1 & GSTR-3B Return Filings Included',
          'Vendor Payment Tracking & Accounts Payable',
          'TDS Calculation on Vendor Invoices',
          'Dedicated Chartered Accountant On-Call',
          'Priority WhatsApp Support'
        ],
        ctaText: 'Choose Growth Bundle',
        governmentFeeNote: 'Most popular all-inclusive plan'
      },
      {
        id: 'acc-enterprise',
        name: 'Virtual CFO & Financial Director',
        tagline: 'Unlimited transactions + MIS Dashboard + Inventory & Audit Support',
        price: 14999,
        billingFrequency: 'monthly',
        features: [
          'Unlimited Monthly Transactions',
          'Weekly Financial MIS Reports & Cash Burn Analytics',
          'Virtual CFO Consultation (2 Calls / Month)',
          'Inventory & Stock Valuation Accounting',
          'Year-End Statutory Audit Preparation',
          'Board Presentation Financial Decks',
          'Dedicated Senior Partner Assigned'
        ],
        ctaText: 'Get Virtual CFO',
        governmentFeeNote: 'For growing scale-ups and high turnover companies'
      }
    ],
    processSteps: [
      { step: 1, title: 'Accounting Software Sync', description: 'Connect your bank statements or Zoho/Tally software to our secure vault.' },
      { step: 2, title: 'Transaction Ledgering & BRS', description: 'Your dedicated accountant categorizes income, expenses, and reconciles bank balances.' },
      { step: 3, title: 'GST & TDS Reconciliation', description: 'Cross-check vendor GST numbers and ensure accurate ITC claims for return filing.' },
      { step: 4, title: 'Monthly MIS & P&L Delivery', description: 'Receive monthly financial statements directly on your ComplyTax dashboard.' }
    ],
    faqs: [
      { question: 'Do I need to install accounting software on my computer?', answer: 'No! Our team works with cloud accounting systems (Zoho Books, Tally on Cloud, QuickBooks) or manages ledgering directly in our encrypted secure portal.' },
      { question: 'Is GST return filing included in the bookkeeping packages?', answer: 'Yes! Our Growth and Virtual CFO plans include full monthly GSTR-1 and GSTR-3B filings at no extra cost.' },
      { question: 'Can I send physical bills or do I upload digital PDFs?', answer: 'You can simply drag-and-drop digital PDFs or take photos of receipts via mobile directly into your dashboard document vault.' }
    ]
  }
};
