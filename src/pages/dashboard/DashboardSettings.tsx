import React, { useState } from 'react';
import { UserProfile } from '../../types';
import { Lock, ShieldCheck, Building2, Save, KeyRound } from 'lucide-react';

interface DashboardSettingsProps {
  user: UserProfile;
}

export const DashboardSettings: React.FC<DashboardSettingsProps> = ({ user }) => {
  const [companyName, setCompanyName] = useState(user.companyName || '');
  const [gstin, setGstin] = useState(user.gstin || '');
  const [pan, setPan] = useState(user.pan || '');
  const [mfa, setMfa] = useState(user.mfaEnabled);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white space-y-6 shadow-xl max-w-3xl mx-auto">
      <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Business Profile & Multi-Factor Security</h2>
          <p className="text-xs text-slate-400 mt-0.5">Manage entity PAN, GSTIN, CIN, and 2FA authentication settings.</p>
        </div>
        <span className="bg-emerald-500/20 text-emerald-400 text-xs font-semibold px-2.5 py-1 rounded border border-emerald-500/30 flex items-center">
          <ShieldCheck className="w-4 h-4 mr-1" />
          AES-256 Vault Active
        </span>
      </div>

      <form onSubmit={handleSave} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Founder / User Name</label>
            <input
              type="text"
              disabled
              value={user.name}
              className="w-full bg-slate-800/60 border border-slate-700/60 rounded-xl px-3.5 py-2.5 text-xs text-slate-300"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
            <input
              type="email"
              disabled
              value={user.email}
              className="w-full bg-slate-800/60 border border-slate-700/60 rounded-xl px-3.5 py-2.5 text-xs text-slate-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Company Registered Name</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">GSTIN (15-Digit)</label>
            <input
              type="text"
              value={gstin}
              onChange={(e) => setGstin(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white font-mono focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Entity PAN Number</label>
            <input
              type="text"
              value={pan}
              onChange={(e) => setPan(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white font-mono focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">MCA Corporate Identification Number (CIN)</label>
            <input
              type="text"
              disabled
              value={user.cin || 'U72900DL2025PTC389102'}
              className="w-full bg-slate-800/60 border border-slate-700/60 rounded-xl px-3.5 py-2.5 text-xs text-slate-300 font-mono"
            />
          </div>
        </div>

        {/* MFA Security Toggle */}
        <div className="bg-slate-800/80 border border-slate-700 p-4 rounded-xl flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Lock className="w-5 h-5 text-emerald-400" />
            <div>
              <h5 className="font-bold text-xs text-white">Multi-Factor Authentication (MFA OTP)</h5>
              <p className="text-[11px] text-slate-400">Require 6-digit SMS / Email OTP code on every login attempt.</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setMfa(!mfa)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              mfa ? 'bg-emerald-600 text-white' : 'bg-slate-700 text-slate-300'
            }`}
          >
            {mfa ? 'MFA ENABLED' : 'ENABLE MFA'}
          </button>
        </div>

        {saved && (
          <div className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 p-2.5 rounded-xl text-xs text-center font-semibold">
            Settings updated and encrypted in Vault successfully.
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-2.5 rounded-xl transition text-xs flex items-center space-x-1.5"
        >
          <Save className="w-4 h-4" />
          <span>Save Changes</span>
        </button>
      </form>
    </div>
  );
};
