import React from 'react';
import { ShieldCheck, Lock, Award, FileText, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-100 dark:bg-[#0A0A0C] text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-zinc-800 transition-colors duration-200">
      {/* Trust & Security Badge Strip */}
      <div className="border-b border-slate-200 dark:border-zinc-800 bg-slate-200/60 dark:bg-[#0F0F12] py-6 px-4 transition-colors duration-200">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="flex flex-col items-center p-2">
            <Lock className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mb-1" />
            <span className="text-xs font-semibold text-slate-900 dark:text-white">256-Bit AES Encryption</span>
            <span className="text-[11px] text-slate-500">Bank-grade vault security</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mb-1" />
            <span className="text-xs font-semibold text-slate-900 dark:text-white">ISO 27001 Certified</span>
            <span className="text-[11px] text-slate-500">Strict data confidentiality</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Award className="w-5 h-5 text-amber-600 dark:text-amber-400 mb-1" />
            <span className="text-xs font-semibold text-slate-900 dark:text-white">MCA & GST Filing Partner</span>
            <span className="text-[11px] text-slate-500">Direct portal API access</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mb-1" />
            <span className="text-xs font-semibold text-slate-900 dark:text-white">100% SLA Guarantee</span>
            <span className="text-[11px] text-slate-500">On-time filing protection</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => onNavigate('/')} 
              className="flex items-center space-x-2.5 cursor-pointer"
            >
              <div className="w-8 h-8 rounded bg-emerald-500 flex items-center justify-center text-zinc-950 font-bold text-lg">
                <ShieldCheck className="w-5 h-5 text-zinc-950 stroke-[2.5]" />
              </div>
              <span className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Comply<span className="text-emerald-600 dark:text-emerald-500">Tax</span></span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              India's premier technology-driven tax, business incorporation, GST compliance, and MCA annual filing platform built for ambitious founders and enterprises.
            </p>
            <div className="pt-2 text-xs text-slate-600 dark:text-slate-400 space-y-1">
              <p><strong className="text-slate-800 dark:text-slate-300">Sumy Business Solutions (SBS)</strong></p>
              <p>Registered Office: Cyber City Phase 2, Gurugram / Connaught Place, New Delhi</p>
              <p>Helpline: +91 (011) 4900 8800 | Support: help@complytax.in</p>
            </div>
          </div>

          {/* Column 1 - Company */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><button onClick={() => onNavigate('/about-us')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">About ComplyTax</button></li>
              <li><button onClick={() => onNavigate('/learn')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Knowledge Hub / Blog</button></li>
              <li><button onClick={() => onNavigate('/founders-guide')} className="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-medium transition">Founders Guide 2026</button></li>
              <li><button onClick={() => onNavigate('/contact-us')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Contact Us & Support</button></li>
            </ul>
          </div>

          {/* Column 2 - Platforms & Tools */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Services & Tools</h4>
            <ul className="space-y-2.5 text-sm">
              <li><button onClick={() => onNavigate('/startup')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Business Incorporation</button></li>
              <li><button onClick={() => onNavigate('/gst')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">GST Registration & Return</button></li>
              <li><button onClick={() => onNavigate('/mca-services')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">MCA / ROC Annual Filings</button></li>
              <li><button onClick={() => onNavigate('/income-tax')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Income Tax Return (ITR)</button></li>
              <li><button onClick={() => onNavigate('/trademark')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Trademark Registration</button></li>
              <li><button onClick={() => onNavigate('/pricing')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Master Pricing Matrix</button></li>
            </ul>
          </div>

          {/* Column 3 - Usage & Legal Policies */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Legal & Governance</h4>
            <ul className="space-y-2.5 text-sm">
              <li><button onClick={() => onNavigate('/termsconditions')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Terms & Conditions</button></li>
              <li><button onClick={() => onNavigate('/privacypolicy')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Privacy Policy</button></li>
              <li><button onClick={() => onNavigate('/refund-policy')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Refund & Cancellation</button></li>
              <li><button onClick={() => onNavigate('/confidentiality-policy')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Confidentiality Policy</button></li>
              <li><button onClick={() => onNavigate('/disclaimer')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Legal Disclaimer</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright Bar matching theme */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-500 space-y-4 md:space-y-0">
          <p>© 2026 ComplyTax Technologies Ltd. All Data Strictly Regulated.</p>
          <div className="flex flex-wrap items-center gap-6 font-mono text-[10px] uppercase">
            <span>Server Latency: 14ms</span>
            <span>Region: Asia-South (Mumbai)</span>
            <span className="text-emerald-600 dark:text-emerald-500 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
              System Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
