import React, { useState } from 'react';
import { BookOpen, Download, CheckCircle2, Lock, ShieldCheck } from 'lucide-react';

export const FoundersGuidePage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setDownloaded(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0A0A0C] text-slate-900 dark:text-white py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12 transition-colors duration-200">
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <span className="bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-400/30 px-3 py-1 rounded-full text-xs font-semibold">
          Exclusive Founder Resource 2026
        </span>
        <h1 className="text-3xl sm:text-5xl font-light text-slate-900 dark:text-slate-100 tracking-tight">The Indian Founder's <span className="font-semibold text-slate-900 dark:text-white">2026 Tax & Compliance Playbook</span></h1>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          A comprehensive 45-page PDF manual covering startup incorporation choices, GST zero-rating for exports, ESOP taxation, and MCA penalty protection.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-8 shadow-md dark:shadow-2xl transition-colors">
        {/* Playbook Preview Column */}
        <div className="space-y-4">
          <div className="p-6 bg-slate-50 dark:bg-zinc-800 rounded-2xl border border-slate-200 dark:border-zinc-700 text-center space-y-3">
            <BookOpen className="w-12 h-12 text-amber-500 dark:text-amber-400 mx-auto" />
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">45-Page Comprehensive Manual</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300">Authored by Senior Chartered Accountants and Corporate Law Experts at ComplyTax.</p>
          </div>

          <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Pvt Ltd vs LLP vs OPC structural comparison matrix</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Export SaaS GST RFD-11 LUT step-by-step setup</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>DPIIT Startup India tax exemption eligibility checklist</span>
            </div>
          </div>
        </div>

        {/* Download Form */}
        <div className="bg-slate-50 dark:bg-zinc-950 p-6 rounded-2xl border border-slate-200 dark:border-zinc-800 space-y-4">
          <h3 className="font-bold text-base text-slate-900 dark:text-white">Download Free PDF Copy</h3>

          {downloaded ? (
            <div className="text-center py-6 space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto" />
              <h4 className="font-bold text-slate-900 dark:text-white text-base">PDF Link Dispatched!</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300">We emailed the 2026 Playbook PDF link to <strong className="text-slate-900 dark:text-white">{email}</strong>.</p>
              <button
                onClick={() => {}}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center justify-center space-x-1.5 mx-auto cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Direct PDF Download</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleDownload} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikramaditya Roy"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Work Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="founder@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 rounded-xl transition text-xs shadow-md flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Get Instant Free PDF Playbook</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
