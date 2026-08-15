import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  PhoneCall, 
  FileText, 
  Check, 
  Sparkles, 
  HelpCircle,
  Building2,
  Lock
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceId } from '../types';

interface ServicePageProps {
  serviceId: ServiceId;
  onNavigate: (path: string) => void;
  onOpenLeadModal: (serviceId?: string) => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({
  serviceId,
  onNavigate,
  onOpenLeadModal
}) => {
  const service = SERVICES_DATA[serviceId] || SERVICES_DATA['startup'];

  // Lead Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, serviceId })
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const scrollToPricing = () => {
    const el = document.getElementById('pricing-table-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0A0A0C] text-slate-900 dark:text-white transition-colors duration-200">
      {/* 1 & 2. Hero + Headline + Price Above the Fold + Lead Form High on Page */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (7 cols): Outcomes, Price Above Fold, What's Included */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-400/30 px-3 py-1 rounded-full text-xs font-semibold">
              {service.badge}
            </span>

            <h1 className="text-3xl sm:text-5xl font-light text-slate-900 dark:text-slate-100 leading-tight tracking-tight">
              {service.heroHeadline}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {service.heroSubheadline}
            </p>

            {/* Price Banner Above Fold */}
            <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 shadow-sm dark:shadow-lg transition-colors">
              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Professional Package Fee:</span>
                <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
                  Starting from ₹{service.startingPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 block mt-0.5">SLA Turnaround: {service.slaDays}</span>
              </div>
              <button
                onClick={scrollToPricing}
                className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center cursor-pointer"
              >
                <span>View Full 3-Tier Pricing Table</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </button>
            </div>

            {/* What's Included Bullets */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">What's Included in Scope</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.whatsIncluded.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-slate-800 dark:text-slate-200 bg-white dark:bg-zinc-900/60 p-2.5 rounded-xl border border-slate-200 dark:border-zinc-800/80 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): High Lead Form */}
          <div className="lg:col-span-5 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 shadow-xl relative text-slate-900 dark:text-white transition-colors">
            <div className="border-b border-slate-200 dark:border-zinc-800 pb-3 mb-4">
              <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
                <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>15-Min Guaranteed Callback SLA</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Start {service.title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Fill details below to get direct consultation with an assigned CA.</p>
            </div>

            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto" />
                <h4 className="font-bold text-lg text-slate-900 dark:text-white">Callback Dispatched!</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300">An assigned Chartered Accountant will call you on <strong className="text-slate-900 dark:text-white">{phone}</strong> within 15 minutes.</p>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikramaditya Roy"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Mobile Number (WhatsApp) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="founder@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center space-x-1.5 pt-1">
                  <Lock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>No credit card required to start consultation.</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold py-3 rounded-xl transition shadow-md text-xs disabled:opacity-50 cursor-pointer"
                >
                  {loading ? 'Connecting Expert...' : `Request ${service.title} Callback`}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* 5. Repeated Client Logos Strip */}
      <section className="py-6 bg-slate-100/70 dark:bg-zinc-900/60 border-y border-slate-200 dark:border-zinc-800 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-600 dark:text-slate-400">
          <span className="font-bold text-slate-900 dark:text-slate-300 font-sans">Trusted for {service.title} by:</span>
          <span>NEXUS AI LABS</span>
          <span>CYBERCORE TECH</span>
          <span>SUMY SOLUTIONS</span>
          <span>HYPERION LOGISTICS</span>
          <span>ZEPHYR FINTECH</span>
        </div>
      </section>

      {/* 6. 3-Tier Pricing Table (Tier 2 Marked "Popular") */}
      <section id="pricing-table-section" className="py-16 px-4 max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-light text-slate-900 dark:text-white">Simple Packages. <span className="font-semibold text-slate-900 dark:text-white">Transparent Pricing.</span></h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Registration fees charged at actual cost. Upgrade or add services anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {service.pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-2xl p-6 flex flex-col justify-between space-y-6 transition shadow-md relative ${
                tier.isPopular
                  ? 'bg-white dark:bg-zinc-900 border-2 border-emerald-500 ring-4 ring-emerald-500/10'
                  : 'bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-500 text-zinc-950 text-[11px] font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Most Popular Choice
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{tier.name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 min-h-[32px]">{tier.tagline}</p>
                </div>

                <div>
                  <span className="text-3xl font-black text-slate-900 dark:text-white font-mono">₹{tier.price.toLocaleString('en-IN')}</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 ml-1.5 font-medium">/ {tier.billingFrequency}</span>
                  {tier.governmentFeeNote && (
                    <p className="text-[10px] text-amber-600 dark:text-amber-300 mt-1">{tier.governmentFeeNote}</p>
                  )}
                </div>

                <div className="border-t border-slate-200 dark:border-zinc-800 pt-4 space-y-2.5 text-xs text-slate-700 dark:text-slate-200">
                  <span className="font-semibold text-slate-500 dark:text-slate-400 block uppercase tracking-wider text-[10px]">Tier Features:</span>
                  {tier.features.map((feat, fidx) => (
                    <div key={fidx} className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenLeadModal(service.id)}
                className={`w-full py-3 rounded-xl text-xs font-bold transition shadow-md cursor-pointer ${
                  tier.isPopular
                    ? 'bg-emerald-500 hover:bg-emerald-400 text-zinc-950'
                    : 'bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-slate-900 dark:text-white border border-slate-200 dark:border-zinc-700'
                }`}
              >
                {tier.ctaText}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4 bg-slate-100/50 dark:bg-zinc-900/50 border-y border-slate-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-light text-slate-900 dark:text-white">How the Process <span className="font-semibold text-slate-900 dark:text-white">Works</span></h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">4 simple steps to complete your compliance filing.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((s) => (
              <div key={s.step} className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-5 rounded-2xl space-y-2 relative shadow-xs">
                <span className="w-8 h-8 rounded-full bg-emerald-500 text-zinc-950 font-black text-xs flex items-center justify-center">
                  {s.step}
                </span>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white pt-1">{s.title}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Checklist & FAQs */}
      <section className="py-16 px-4 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Document Checklist */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 space-y-4 shadow-sm">
          <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center space-x-2">
            <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <span>Required Documents Checklist</span>
          </h3>

          <div className="space-y-3">
            {service.documentChecklist.map((doc, idx) => (
              <div key={idx} className="p-3 bg-slate-50 dark:bg-zinc-800/80 rounded-xl border border-slate-200 dark:border-zinc-700/80 text-xs">
                <div className="flex items-center justify-between">
                  <h5 className="font-bold text-slate-900 dark:text-white">{doc.name}</h5>
                  <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                    doc.required ? 'bg-amber-500/10 text-amber-700 dark:text-amber-300' : 'bg-slate-200 dark:bg-zinc-700 text-slate-600 dark:text-slate-400'
                  }`}>
                    {doc.required ? 'Mandatory' : 'Optional'}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-[11px] mt-1">{doc.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 space-y-4 shadow-sm">
          <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center space-x-2">
            <HelpCircle className="w-5 h-5 text-amber-500 dark:text-amber-400" />
            <span>Service FAQs</span>
          </h3>

          <div className="space-y-3">
            {service.faqs.map((f, idx) => (
              <div key={idx} className="p-3 bg-slate-50 dark:bg-zinc-800/80 rounded-xl border border-slate-200 dark:border-zinc-700/80 text-xs space-y-1">
                <h5 className="font-bold text-slate-900 dark:text-white">{f.question}</h5>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px]">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
