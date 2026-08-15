import React, { useState } from 'react';
import { ShieldCheck, FileText, Lock } from 'lucide-react';

interface LegalPageProps {
  initialTab?: string;
}

export const LegalPage: React.FC<LegalPageProps> = ({ initialTab = 'terms' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  const tabs = [
    { id: 'terms', label: 'Terms of Service' },
    { id: 'privacy', label: 'Privacy Policy & AES-256' },
    { id: 'refund', label: 'Refund Policy' },
    { id: 'disclaimer', label: 'CA Legal Disclaimer' },
    { id: 'confidentiality', label: 'Data Confidentiality NDA' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Legal Governance & Compliance Policies</h1>
        <p className="text-xs text-slate-400">ComplyTax operates under strict regulatory compliance and ICAI professional guidelines.</p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-800 pb-4">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
              activeTab === t.id ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-300 border border-slate-800'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 text-xs text-slate-300 leading-relaxed">
        {activeTab === 'terms' && (
          <>
            <h2 className="text-lg font-bold text-white mb-2">Terms of Service</h2>
            <p>Welcome to ComplyTax. By accessing or using our platform, client portal, or CA advisory services, you agree to comply with and be bound by these Terms of Service.</p>
            <h3 className="font-bold text-white text-sm mt-4">1. Scope of Professional Services</h3>
            <p>ComplyTax facilitates business incorporation, GST e-filing, MCA ROC compliance, and income tax return preparation through qualified Chartered Accountants and Company Secretaries. Professional fees cover service execution; government fees (stamp duty, portal charges) are payable at actual cost.</p>
            <h3 className="font-bold text-white text-sm mt-4">2. Client Responsibilities</h3>
            <p>Clients are required to provide authentic, un-tampered financial records, PAN, Aadhaar, and bank statements in a timely manner. ComplyTax is not liable for government late fee penalties resulting from client-side document delays or false representations.</p>
          </>
        )}

        {activeTab === 'privacy' && (
          <>
            <h2 className="text-lg font-bold text-white mb-2">Privacy Policy & AES-256 Encryption Standards</h2>
            <p>We treat client financial data with military-grade security protocols. All uploaded tax files, bank statements, and identity documents are encrypted at rest using AES-256-GCM algorithms before storage in our cloud vault.</p>
            <h3 className="font-bold text-white text-sm mt-4">1. Data Storage & Multi-Factor Access</h3>
            <p>Data access is granted strictly on a need-to-know basis to assigned CAs handling your order. Access requires 2FA Multi-Factor OTP authentication.</p>
            <h3 className="font-bold text-white text-sm mt-4">2. Zero Third-Party Monetization</h3>
            <p>We strictly NEVER sell, license, or expose user financial data, contact numbers, or business metrics to third-party ad networks or brokers.</p>
          </>
        )}

        {activeTab === 'refund' && (
          <>
            <h2 className="text-lg font-bold text-white mb-2">100% Transparency Refund Policy</h2>
            <p>If ComplyTax fails to initiate work or submit government filings due to our operational error, a 100% refund of professional fees will be processed within 5 business days.</p>
            <h3 className="font-bold text-white text-sm mt-4">Government Fee Non-Refundability</h3>
            <p>Once government fees (MCA filing fees, IP India TM fees, GST challans) have been paid directly to official government portals, those amounts cannot be refunded as the government portal does not issue reversals.</p>
          </>
        )}

        {activeTab === 'disclaimer' && (
          <>
            <h2 className="text-lg font-bold text-white mb-2">CA Professional Legal Disclaimer</h2>
            <p>ComplyTax operates in compliance with Institute of Chartered Accountants of India (ICAI) guidelines. Content on this website is for informational purposes and does not constitute formal legal counsel until an official engagement is signed.</p>
          </>
        )}

        {activeTab === 'confidentiality' && (
          <>
            <h2 className="text-lg font-bold text-white mb-2">Data Confidentiality & Non-Disclosure Agreement</h2>
            <p>ComplyTax enforces an automatic Non-Disclosure Agreement (NDA) on all business communications, proprietary software source code disclosures, and financial statements uploaded to our client dashboard.</p>
          </>
        )}
      </div>
    </div>
  );
};
