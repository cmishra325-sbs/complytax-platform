import React, { useState } from 'react';
import { Check, ShieldCheck, ArrowRight, Building2, FileCheck2, Receipt, Stamp, BookOpenCheck } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

interface PricingPageProps {
  onNavigate: (path: string) => void;
  onOpenLeadModal: (serviceId?: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate, onOpenLeadModal }) => {
  const [selectedVertical, setSelectedVertical] = useState<string>('all');

  const servicesList = Object.values(SERVICES_DATA);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0A0A0C] text-slate-900 dark:text-white py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 transition-colors duration-200">
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <span className="bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-400/30 px-3 py-1 rounded-full text-xs font-semibold">
          Transparent Pricing Standard
        </span>
        <h1 className="text-3xl sm:text-5xl font-light text-slate-900 dark:text-slate-100 tracking-tight">Master Compliance <span className="font-semibold text-slate-900 dark:text-white">Pricing Matrix</span></h1>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          No hidden charges or surprise invoices. Government fees billed at actuals. Every one-time filing has a matching recurring retainer option.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
        <button
          onClick={() => setSelectedVertical('all')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${selectedVertical === 'all' ? 'bg-emerald-500 text-zinc-950 shadow' : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40'}`}
        >
          All Verticals
        </button>
        {servicesList.map((s) => (
          <button
            key={s.id}
            onClick={() => setSelectedVertical(s.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${selectedVertical === s.id ? 'bg-emerald-500 text-zinc-950 shadow' : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40'}`}
          >
            {s.title}
          </button>
        ))}
      </div>

      {/* Pricing Grids */}
      <div className="space-y-12">
        {servicesList
          .filter((s) => selectedVertical === 'all' || selectedVertical === s.id)
          .map((svc) => (
            <div key={svc.id} className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm dark:shadow-md transition-colors duration-200">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">{svc.badge}</span>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-0.5">{svc.title}</h2>
                </div>
                <button
                  onClick={() => onNavigate(`/${svc.id}`)}
                  className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center cursor-pointer"
                >
                  <span>View Full Service Details</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {svc.pricingTiers.map((tier) => (
                  <div
                    key={tier.id}
                    className={`p-6 rounded-2xl flex flex-col justify-between space-y-4 border transition ${
                      tier.isPopular ? 'bg-slate-50 dark:bg-slate-900 border-2 border-emerald-500 shadow-md' : 'bg-slate-50/50 dark:bg-slate-900/90 border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-base text-slate-900 dark:text-white">{tier.name}</h3>
                        {tier.isPopular && (
                          <span className="bg-emerald-500 text-zinc-950 text-[9px] font-bold px-2 py-0.5 rounded uppercase">Popular</span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 min-h-[32px]">{tier.tagline}</p>
                      <div>
                        <span className="text-2xl font-black text-slate-900 dark:text-white font-mono">₹{tier.price.toLocaleString('en-IN')}</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 ml-1">/ {tier.billingFrequency}</span>
                      </div>

                      <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300 pt-2 border-t border-slate-200 dark:border-slate-800">
                        {tier.features.map((f, i) => (
                          <div key={i} className="flex items-start space-x-2">
                            <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenLeadModal(svc.id)}
                      className={`w-full py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                        tier.isPopular ? 'bg-emerald-500 text-zinc-950 hover:bg-emerald-400' : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                      }`}
                    >
                      {tier.ctaText}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
