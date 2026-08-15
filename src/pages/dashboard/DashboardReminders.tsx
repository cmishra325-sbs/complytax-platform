import React, { useState } from 'react';
import { CalendarClock, Bell, PhoneCall, Check, AlertTriangle, ShieldCheck } from 'lucide-react';
import { ComplianceReminder } from '../../types';

interface DashboardRemindersProps {
  reminders: ComplianceReminder[];
}

export const DashboardReminders: React.FC<DashboardRemindersProps> = ({ reminders }) => {
  const [whatsappAlerts, setWhatsappAlerts] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);

  return (
    <div className="space-y-6 text-white">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold">Compliance Calendar & Automated Due Date Reminders</h2>
          <p className="text-xs text-slate-400 mt-0.5">Automated SMS, Email, and WhatsApp alerts prevent GST & MCA late fee penalties.</p>
        </div>

        <div className="flex items-center space-x-3 bg-slate-900 border border-slate-800 p-2.5 rounded-xl text-xs">
          <span className="text-slate-300 font-medium">WhatsApp Reminders:</span>
          <button
            onClick={() => setWhatsappAlerts(!whatsappAlerts)}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
              whatsappAlerts ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'
            }`}
          >
            {whatsappAlerts ? 'ENABLED (+91 98765 43210)' : 'DISABLED'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {reminders.map((rem) => (
          <div key={rem.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 shadow-lg">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                {rem.category}
              </span>
              <span className="font-mono text-sm font-bold text-amber-300 flex items-center">
                <CalendarClock className="w-4 h-4 mr-1 text-amber-400" />
                Due: {rem.dueDate}
              </span>
            </div>

            <h4 className="font-bold text-base text-white">{rem.title}</h4>
            <p className="text-xs text-slate-300 leading-relaxed">{rem.description}</p>

            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/80 flex items-center justify-between text-xs">
              <span className="text-amber-300 font-mono">{rem.estimatedPenalty}</span>
              <span className="text-emerald-400 font-semibold flex items-center">
                <Check className="w-3.5 h-3.5 mr-1" />
                Alert Armed
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
