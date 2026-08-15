import React from 'react';
import { 
  Building2, 
  FileCheck2, 
  ShieldCheck, 
  Receipt, 
  Stamp, 
  BookOpenCheck, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Lock, 
  Clock, 
  Sparkles, 
  HelpCircle,
  PhoneCall,
  UserCheck
} from 'lucide-react';
import { CompanySearchWidget } from '../components/CompanySearchWidget';
import { TaxCalculatorsWidget } from '../components/TaxCalculatorsWidget';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenLeadModal: (serviceId?: string) => void;
  onOpenAiAdvisor: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenLeadModal,
  onOpenAiAdvisor
}) => {
  const serviceCards = [
    { id: 'startup', title: 'Business Registration', desc: 'Pvt Ltd, LLP, OPC, Proprietorship & Partnership in 3-7 days', icon: Building2 },
    { id: 'gst', title: 'GST Registration & Filing', desc: '15-digit GSTIN activation & monthly GSTR-1/3B compliance', icon: FileCheck2 },
    { id: 'mca-services', title: 'MCA / ROC Annual Filings', desc: 'AOC-4, MGT-7, DIR-3 KYC & board resolutions', icon: ShieldCheck },
    { id: 'income-tax', title: 'Income Tax Return (ITR)', desc: 'Salaried, capital gains, corporate ITR-1 to ITR-7 filing', icon: Receipt },
    { id: 'trademark', title: 'Trademark Registration', desc: 'Brand name & logo trademark search & ™/® class protection', icon: Stamp },
    { id: 'accounting-bookkeeping', title: 'Accounting & Bookkeeping', desc: 'Dedicated Chartered Accountant & Zoho/Tally sync', icon: BookOpenCheck }
  ];

  const faqs = [
    {
      q: 'How does ComplyTax streamline GST registration and monthly filings?',
      a: 'ComplyTax handles end-to-end document verification, TRN generation, Aadhaar e-KYC, and officer query responses. Once registered, our automated dashboard prepares GSTR-1 sales returns and GSTR-3B tax payment returns every month with Input Tax Credit (ITC) reconciliation against GSTR-2B.'
    },
    {
      q: 'What is included in the monthly and annual compliance subscription packages?',
      a: 'Subscribing to a recurring retainer guarantees zero-penalty compliance. It includes all monthly GST return filings, annual MCA ROC filings (AOC-4 and MGT-7), director DIR-3 KYC, income tax e-filing, and direct phone/WhatsApp access to your assigned Chartered Accountant.'
    },
    {
      q: 'Do I need to pay government fees upfront during incorporation?',
      a: 'Government stamp duty and MCA processing fees vary by state and authorized capital. We present transparent fee breakdowns upfront — professional fees cover full preparation, e-filing, and advisory, while government fees are billed at actual cost.'
    },
    {
      q: 'How does the AES-256 encrypted Document Vault protect my sensitive financial data?',
      a: 'All PAN cards, Aadhaar documents, bank statements, and company certificates uploaded to ComplyTax are encrypted at rest using AES-256-GCM hardware keys. Only authorized, verified Chartered Accountants working on your specific order can view your files.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0A0A0C] text-slate-800 dark:text-slate-200 selection:bg-emerald-500 selection:text-zinc-950 transition-colors duration-200">
      {/* Section 2 — Hero */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full text-xs font-bold text-emerald-600 dark:text-emerald-400 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>AES-256 Encrypted Tax & Corporate Compliance Platform</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-slate-900 dark:text-slate-200 leading-tight">
            India's Most Trusted <span className="font-semibold text-slate-900 dark:text-white">Compliance & Tax Platform</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
            Incorporate your company, activate your GSTIN, file MCA ROC returns, and shield your business from tax notices — supported by dedicated CAs and hardware encrypted data vaults.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenLeadModal()}
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold px-8 py-3.5 rounded-lg shadow-lg transition active:scale-95 flex items-center justify-center space-x-2 text-sm cursor-pointer"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenAiAdvisor}
              className="w-full sm:w-auto bg-white dark:bg-zinc-900 hover:bg-slate-100 dark:hover:bg-zinc-800/80 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-zinc-800 font-semibold px-6 py-3.5 rounded-lg transition flex items-center justify-center space-x-2 text-sm shadow-sm cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Ask ComplyAI Tax Assistant</span>
            </button>
          </div>

          <p className="text-xs text-slate-500 flex items-center justify-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>No credit card required to create an account & start name search</span>
          </p>
        </div>
      </section>

      {/* Section 3 — Service Shortcut Row */}
      <section className="py-8 bg-slate-100/70 dark:bg-[#0F0F12] border-y border-slate-200 dark:border-zinc-800 px-4 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Select Your Compliance Vertical</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {serviceCards.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  onClick={() => onNavigate(`/${svc.id}`)}
                  className="p-4 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-emerald-500/50 rounded-xl cursor-pointer transition transform hover:-translate-y-1 shadow-sm dark:shadow-md group text-center"
                >
                  <div className="w-10 h-10 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center mb-3 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-xs text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition leading-snug">{svc.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4 — Social Proof Trust Strip */}
      <section className="py-10 px-4 max-w-7xl mx-auto">
        <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl p-6 text-center space-y-4 shadow-sm dark:shadow-md">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Trusted by 5,000+ Growing Indian Businesses & Scale-ups</span>
          <div className="flex flex-wrap items-center justify-center gap-8 text-slate-500 dark:text-slate-400 font-mono text-xs font-bold opacity-80">
            <span>NEXUS AI LABS</span>
            <span>CYBERCORE TECH</span>
            <span>SUMY SOLUTIONS</span>
            <span>HYPERION LOGISTICS</span>
            <span>ZEPHYR FINTECH</span>
            <span>APEX RETAIL INDIA</span>
          </div>
        </div>
      </section>

      {/* Interactive Tools Row: MCA Search & Calculators */}
      <section className="py-12 px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <CompanySearchWidget onSelectName={() => onOpenLeadModal('startup')} />
        <TaxCalculatorsWidget />
      </section>

      {/* Section 5 — Platform Automation Explainer */}
      <section className="py-16 px-4 bg-slate-100/70 dark:bg-[#0F0F12] border-y border-slate-200 dark:border-zinc-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl space-y-3 shadow-sm dark:shadow-md">
            <div className="w-10 h-10 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-base text-slate-900 dark:text-white">256-Bit Encrypted Vault</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Never email sensitive PAN, Aadhaar, or bank credentials. Our hardware encrypted vault keeps all client financial documents safe from unauthorized access.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl space-y-3 shadow-sm dark:shadow-md">
            <div className="w-10 h-10 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-base text-slate-900 dark:text-white">15-Minute SLA Guarantee</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              No waiting for days. Our lead management system routes your query to an assigned Chartered Accountant or Company Secretary within 15 minutes.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl space-y-3 shadow-sm dark:shadow-md">
            <div className="w-10 h-10 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-base text-slate-900 dark:text-white">Automated Penalty Shield</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Our compliance calendar tracks GST, ROC, and ITR deadlines automatically with SMS, Email, and WhatsApp alerts to prevent ₹100/day late fee penalties.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 — Founder Trust Block */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-slate-100 to-white dark:from-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-xl p-8 lg:p-12 shadow-md dark:shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-3">
              <div className="w-20 h-20 rounded bg-emerald-500 text-zinc-950 flex items-center justify-center text-2xl font-bold shadow-xl">
                SBS
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Sumy Business Solutions</h3>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">Founding Leadership Team</p>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
              <blockquote className="text-sm sm:text-base text-slate-700 dark:text-slate-300 italic leading-relaxed">
                "Indian founders lose millions of rupees every year to unnecessary compliance penalties, opaque pricing, and slow legal processes. We built ComplyTax to deliver transparent pricing, bank-grade encryption, and direct CA accountability — so you can focus 100% on building your company."
              </blockquote>
              <div className="flex items-center space-x-4 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-1" /> Transparent Pricing</span>
                <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-1" /> Dedicated CA Support</span>
                <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-1" /> Zero Hidden Fees</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 — Full Service Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-slate-900 dark:text-slate-200">End-to-End <span className="font-semibold text-slate-900 dark:text-white">Compliance Suite</span></h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">Select a service below to explore detailed pricing, document requirements, and SLAs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                onClick={() => onNavigate(`/${svc.id}`)}
                className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-emerald-500/60 rounded-xl p-6 cursor-pointer transition transform hover:-translate-y-1 shadow-sm dark:shadow-xl flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-zinc-950 transition">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">{svc.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{svc.desc}</p>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-zinc-800 flex items-center justify-between text-xs">
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold group-hover:underline">Explore Details & Pricing</span>
                  <ArrowRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 8 — Customer Stories */}
      <section className="py-16 px-4 bg-slate-100/70 dark:bg-[#0F0F12] border-y border-slate-200 dark:border-zinc-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Founder Success Stories</h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Real feedback from Indian business owners using ComplyTax.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl space-y-3 shadow-sm dark:shadow-md">
              <div className="flex items-center space-x-1 text-emerald-600 dark:text-emerald-400 text-xs font-mono">★★★★★</div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                "Got our Pvt Ltd incorporation certificate and GSTIN within 4 days. The encrypted vault made document sharing effortless!"
              </p>
              <div className="pt-2 border-t border-slate-200 dark:border-zinc-800">
                <h5 className="font-bold text-xs text-slate-900 dark:text-white">Rajesh K.</h5>
                <p className="text-[10px] text-slate-500">Founder, CyberCore Tech</p>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl space-y-3 shadow-sm dark:shadow-md">
              <div className="flex items-center space-x-1 text-emerald-600 dark:text-emerald-400 text-xs font-mono">★★★★★</div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                "Their annual GST filing subscription saved us from a ₹50,000 late fee penalty. Assigned CA Ankit Verma is always available on WhatsApp."
              </p>
              <div className="pt-2 border-t border-slate-200 dark:border-zinc-800">
                <h5 className="font-bold text-xs text-slate-900 dark:text-white">Priya Sundaram</h5>
                <p className="text-[10px] text-slate-500">Director, Apex Retail India</p>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl space-y-3 shadow-sm dark:shadow-md">
              <div className="flex items-center space-x-1 text-emerald-600 dark:text-emerald-400 text-xs font-mono">★★★★★</div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                "Filed our brand trademark with MSME discount and got instant ™ usage rights receipt on the same day. Outstanding service!"
              </p>
              <div className="pt-2 border-t border-slate-200 dark:border-zinc-800">
                <h5 className="font-bold text-xs text-slate-900 dark:text-white">Anand Mehta</h5>
                <p className="text-[10px] text-slate-500">CEO, Hyperion Logistics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9 — FAQ */}
      <section className="py-16 px-4 max-w-4xl mx-auto space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Clear answers to top questions asked by Indian business founders.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="p-5 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl space-y-2 shadow-sm dark:shadow-md">
              <h4 className="font-semibold text-sm text-slate-900 dark:text-white flex items-start space-x-2">
                <HelpCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>{f.q}</span>
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-6">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 10 — Final CTA Band */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-emerald-600 to-teal-800 dark:from-zinc-900 dark:to-zinc-950 border border-emerald-500/20 dark:border-zinc-800 rounded-xl p-8 sm:p-12 text-center text-white space-y-4 shadow-xl dark:shadow-2xl">
          <h2 className="text-3xl font-light text-white dark:text-slate-200">Ready to <span className="font-semibold text-white">Automate Your Compliance?</span></h2>
          <p className="text-xs sm:text-sm text-emerald-100 dark:text-slate-400 max-w-xl mx-auto">
            Get instant expert consultation, 256-bit encrypted document vault, and zero-penalty assurance.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenLeadModal()}
              className="bg-white hover:bg-emerald-100 dark:hover:bg-emerald-400 text-slate-950 font-bold px-8 py-3.5 rounded-lg shadow-lg transition-colors text-sm cursor-pointer"
            >
              Start Filing & Registration Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
