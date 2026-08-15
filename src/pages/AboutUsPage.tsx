import React from 'react';
import { Building2, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';

export const AboutUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0A0A0C] text-slate-900 dark:text-white py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12 transition-colors duration-200">
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <span className="bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-400/30 px-3 py-1 rounded-full text-xs font-semibold">
          About ComplyTax
        </span>
        <h1 className="text-3xl sm:text-5xl font-light text-slate-900 dark:text-slate-100 tracking-tight">Simplifying Business Compliance for <span className="font-semibold text-slate-900 dark:text-white">Indian Entrepreneurs</span></h1>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          ComplyTax is a tech-enabled corporate compliance and tax advisory platform. We combine cloud software automation with senior Chartered Accountants and Company Secretaries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-6 rounded-2xl space-y-2 shadow-sm">
          <h3 className="font-bold text-2xl text-emerald-600 dark:text-emerald-400 font-mono">5,000+</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">Companies & Startups Incorporated & Serviced</p>
        </div>
        <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-6 rounded-2xl space-y-2 shadow-sm">
          <h3 className="font-bold text-2xl text-emerald-600 dark:text-emerald-400 font-mono">100% AES-256</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">Encrypted Document Vault Storage</p>
        </div>
        <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-6 rounded-2xl space-y-2 shadow-sm">
          <h3 className="font-bold text-2xl text-emerald-600 dark:text-emerald-400 font-mono">15-Min SLA</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">Assigned CA Call Response SLA</p>
        </div>
      </div>
    </div>
  );
};
