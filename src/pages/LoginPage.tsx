import React, { useState } from 'react';
import { Lock, ShieldCheck, ArrowRight, UserCheck } from 'lucide-react';

interface LoginPageProps {
  onLoginRequest: (phoneOrEmail: string) => void;
  onNavigateSignup: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLoginRequest, onNavigateSignup }) => {
  const [identifier, setIdentifier] = useState('founder@complytax.in');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier.trim()) return;

    onLoginRequest(identifier.trim());
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 sm:p-8 space-y-6 shadow-2xl">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center font-black text-white text-xl mx-auto shadow-lg shadow-blue-600/30">
            C
          </div>
          <h2 className="text-2xl font-bold text-white">Sign In to ComplyTax</h2>
          <p className="text-xs text-slate-400">Access your 256-bit encrypted compliance vault and order status.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Email or Mobile Number *</label>
            <input
              type="text"
              required
              placeholder="e.g. founder@complytax.in or +91 98765 43210"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 text-xs text-emerald-300 flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>2FA Security Enabled: We will send a 6-digit OTP code to verify your identity.</span>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition shadow-lg text-xs flex items-center justify-center space-x-2"
          >
            <span>Proceed to 2FA Verification</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center text-xs text-slate-400 border-t border-slate-800 pt-4">
          <span>Don't have an account yet? </span>
          <button onClick={onNavigateSignup} className="text-blue-400 font-semibold hover:underline">
            Register New Business
          </button>
        </div>
      </div>
    </div>
  );
};
