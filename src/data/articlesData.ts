import { Article } from '../types';

export const ARTICLES_DATA: Article[] = [
  {
    id: '1',
    slug: 'pvt-ltd-vs-llp-comparison-india-2026',
    title: 'Private Limited vs LLP: Complete Founders Guide for Indian Startups',
    excerpt: 'Deciding between Private Limited Company and Limited Liability Partnership (LLP)? Compare incorporation costs, tax rates, funding eligibility, and annual compliance requirements.',
    category: 'Business Registration',
    author: 'CS Ritu Sharma, Head of Corporate Secretarial',
    readTime: '6 min read',
    publishedDate: 'August 2, 2026',
    content: [
      'Choosing the right business structure is the single most important legal decision for an Indian startup founder.',
      'A Private Limited Company (Pvt Ltd) is the preferred structure if you plan to raise equity capital from Venture Capitalists or Angel Investors, issue ESOPs to key employees, or scale nationwide.',
      'A Limited Liability Partnership (LLP), on the other hand, is ideal for professional service firms, consultancies, and boot-strapped businesses looking for lower compliance burdens and zero dividend distribution tax friction.',
      'Key Differences at a Glance:',
      '1. Equity Capital: Pvt Ltd can issue equity shares, preference shares, and convertible notes. LLPs cannot issue shares.',
      '2. Annual MCA Compliance: Pvt Ltd requires mandatory statutory audit every year regardless of turnover. LLPs require statutory audit only if turnover exceeds ₹40 Lakhs or capital exceeds ₹25 Lakhs.',
      '3. Tax Slabs: Corporate tax rate for domestic manufacturing/new Pvt Ltd is 22% + surcharge. LLPs are taxed at a flat 30% + surcharge.'
    ]
  },
  {
    id: '2',
    slug: 'gst-registration-thresholds-freelancers-exporters',
    title: 'GST Registration Guide 2026: Thresholds, Exemptions & Export LUT Filing',
    excerpt: 'Everything freelancers, software exporters, and e-commerce sellers need to know about mandatory GSTIN registration, Letter of Undertaking (LUT), and zero-rated exports.',
    category: 'GST & Taxes',
    author: 'CA Ankit Verma, Lead GST Strategist',
    readTime: '5 min read',
    publishedDate: 'July 28, 2026',
    content: [
      'Are you a software developer, consultant, or freelancer exporting services to foreign clients via Stripe, Wise, or PayPal? Here is why GST registration and LUT filing are essential.',
      'Under Indian GST law, export of services is classified as a "Zero-Rated Supply". This means you do not pay 18% GST to the government provided you file a Letter of Undertaking (LUT) in Form GST RFD-11 annually.',
      'Mandatory Threshold Limits:',
      '• Service Providers: Mandatory GSTIN if annual turnover exceeds ₹20 Lakhs (₹10 Lakhs in Special Category States).',
      '• E-Commerce Sellers: Mandatory GSTIN from Rupee 1 regardless of turnover if selling through Amazon, Flipkart, or Meesho.',
      '• Goods Traders: Mandatory GSTIN if turnover exceeds ₹40 Lakhs (₹20 Lakhs in Special Category States).'
    ]
  },
  {
    id: '3',
    slug: 'how-to-reply-to-gst-notice-asmt-10-drc-01',
    title: 'How to Handle and Reply to GST ASMT-10 Notices Without Penalties',
    excerpt: 'Received an ASMT-10 notice for GSTR-3B vs GSTR-2B input tax credit mismatch? Step-by-step resolution strategy by tax experts.',
    category: 'Tax Notice Defense',
    author: 'CA Vivek Gupta, Tax Litigation Partner',
    readTime: '7 min read',
    publishedDate: 'July 15, 2026',
    content: [
      'Getting a notice from the GST department can be daunting, but Form ASMT-10 is simply a scrutinizing communication highlighting discrepancies between your filed returns and GSTR-2B or GSTR-1 data.',
      'Common Reasons for ASMT-10 Notices:',
      '1. Excess Input Tax Credit (ITC) claimed in GSTR-3B compared to auto-drafted GSTR-2B.',
      '2. Taxable turnover mismatch between GSTR-1 sales and GSTR-3B tax paid.',
      '3. Non-payment of tax under Reverse Charge Mechanism (RCM).',
      'How to Reply in Form ASMT-11:',
      '• Step 1: Download GSTR-2B monthly reconciliation sheets to pinpoint supplier default.',
      '• Step 2: Prepare a itemized reconciliation table showing invoices and payment proof.',
      '• Step 3: File written explanation in Form ASMT-11 within 30 days of notice receipt.'
    ]
  },
  {
    id: '4',
    slug: 'mca-compliance-calendar-due-dates-2026',
    title: 'MCA Annual Compliance Calendar 2026: Due Dates for AOC-4, MGT-7, and DIR-3 KYC',
    excerpt: 'Stay ahead of MCA penalties with our official compliance calendar. Complete list of filing deadlines for Pvt Ltd companies and LLPs.',
    category: 'MCA & Corporate Law',
    author: 'CS Ritu Sharma',
    readTime: '4 min read',
    publishedDate: 'June 30, 2026',
    content: [
      'Failing to file MCA annual forms incurs a steep mandatory penalty of ₹100 per day per form. Mark these key due dates in your calendar:',
      '• DIR-3 KYC (Director KYC): September 30, 2026',
      '• Form ADT-1 (Auditor Appointment): Within 15 days of AGM',
      '• Form AOC-4 (Financial Statements): October 30, 2026 (30 days from AGM)',
      '• Form MGT-7 / MGT-7A (Annual Return): November 29, 2026 (60 days from AGM)',
      '• LLP Form 11 (Annual Return): May 30, 2026',
      '• LLP Form 8 (Statement of Accounts): October 30, 2026'
    ]
  }
];
