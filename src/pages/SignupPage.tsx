import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, Building2 } from 'lucide-react';

interface SignupPageProps {
  onSignupRequest: (phoneOrEmail: string) => void;
  onNavigateLogin: () => void;
}

export const SignupPage: React.FC<SignupPageProps> = ({ onSignupRequest, onNavigateLogin }) => {
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    onSignupRequest(email.trim());
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 sm:p-8 space-y-6 shadow-2xl">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center font-black text-white text-xl mx-auto shadow-lg shadow-blue-600/30">
            C
          </div>
          <h2 className="text-2xl font-bold text-white">Create Founder Account</h2>
          <p className="text-xs text-slate-400">Automate GST, MCA ROC, and ITR compliance in 15 minutes.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Founder / Managing Director Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. Vikramaditya Roy"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Company / Proposed Brand Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. Nexus AI Technologies Pvt Ltd"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Work Email Address *</label>
            <input
              type="email"
              required
              placeholder="founder@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl transition shadow-lg text-xs flex items-center justify-center space-x-2"
          >
            <span>Create Encrypted Vault & Verify 2FA</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center text-xs text-slate-400 border-t border-slate-800 pt-4">
          <span>Already have an account? </span>
          <button onClick={onNavigateLogin} className="text-blue-400 font-semibold hover:underline">
            Sign In Here
          </button>
        </div>
      </div>
    </div>
  );
};
