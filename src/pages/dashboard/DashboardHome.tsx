import React from 'react';
import { 
  FileCheck2, 
  FolderLock, 
  CalendarClock, 
  MessageSquare, 
  ArrowUpRight, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Download,
  AlertTriangle,
  Building2
} from 'lucide-react';
import { OrderItem, DocumentItem, ComplianceReminder, ExpertMessage } from '../../types';

interface DashboardHomeProps {
  orders: OrderItem[];
  documents: DocumentItem[];
  reminders: ComplianceReminder[];
  messages: ExpertMessage[];
  onNavigateTab: (tab: string) => void;
}

export const DashboardHome: React.FC<DashboardHomeProps> = ({
  orders,
  documents,
  reminders,
  messages,
  onNavigateTab
}) => {
  const activeOrdersCount = orders.filter(o => o.status !== 'Completed').length;
  const pendingDocsCount = documents.filter(d => d.status === 'Pending' || d.status === 'Uploaded').length;
  const urgentRemindersCount = reminders.filter(r => r.isUrgent && r.status === 'Upcoming').length;

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-slate-200 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <ShieldCheck className="w-32 h-32 text-white" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>AES-256 Hardware Encrypted Vault Active</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-light text-slate-200">
              Welcome back, <span className="font-semibold text-white">Rajesh</span>
            </h1>
            <p className="text-xs text-slate-400 mt-1 max-w-xl">
              CIN: U72900DL2025PTC389102 | GSTIN: 07AAAAA0000A1Z5 | PAN: AAACN1234F
            </p>
          </div>
          <button
            onClick={() => onNavigateTab('documents')}
            className="bg-white hover:bg-emerald-400 text-black font-bold text-xs px-4 py-2.5 rounded-lg shadow-md transition-colors flex items-center space-x-2"
          >
            <FolderLock className="w-4 h-4" />
            <span>Open Encrypted Vault</span>
          </button>
        </div>
      </div>

      {/* Metric Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div 
          onClick={() => onNavigateTab('orders')} 
          className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700/80 rounded-xl p-5 cursor-pointer transition shadow-md group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Active Services</span>
            <div className="p-2 rounded bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition">
              <FileCheck2 className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline space-x-2">
            <span className="text-2xl font-mono font-bold text-white">{activeOrdersCount}</span>
            <span className="text-xs text-emerald-400 font-medium">In Progress</span>
          </div>
        </div>

        <div 
          onClick={() => onNavigateTab('documents')} 
          className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700/80 rounded-xl p-5 cursor-pointer transition shadow-md group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Vault Docs</span>
            <div className="p-2 rounded bg-amber-500/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-zinc-950 transition">
              <FolderLock className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline space-x-2">
            <span className="text-2xl font-mono font-bold text-white">{pendingDocsCount}</span>
            <span className="text-xs text-amber-400 font-medium">Awaiting Verification</span>
          </div>
        </div>

        <div 
          onClick={() => onNavigateTab('reminders')} 
          className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700/80 rounded-xl p-5 cursor-pointer transition shadow-md group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Deadlines</span>
            <div className="p-2 rounded bg-rose-500/10 text-rose-400 group-hover:bg-rose-500 group-hover:text-white transition">
              <CalendarClock className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline space-x-2">
            <span className="text-2xl font-mono font-bold text-white">{urgentRemindersCount}</span>
            <span className="text-xs text-rose-400 font-medium">Urgent Next 15 Days</span>
          </div>
        </div>

        <div 
          onClick={() => onNavigateTab('messages')} 
          className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700/80 rounded-xl p-5 cursor-pointer transition shadow-md group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">CA Expert Thread</span>
            <div className="p-2 rounded bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition">
              <MessageSquare className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline space-x-2">
            <span className="text-2xl font-mono font-bold text-white">{messages.length}</span>
            <span className="text-xs text-blue-400 font-medium">Active Notes</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Orders & Reminders */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Col (2 cols): Active Orders Progress */}
        <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-slate-200 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
            <h3 className="font-semibold text-lg text-white">Live Service Orders & Status</h3>
            <button
              onClick={() => onNavigateTab('orders')}
              className="text-xs font-bold text-emerald-400 hover:underline flex items-center"
            >
              <span>View All Orders</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>

          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="bg-zinc-950/50 border border-zinc-800/80 rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-mono text-slate-500">{order.id}</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        order.status === 'Completed' ? 'bg-emerald-500/20 text-emerald-400' :
                        order.status === 'Govt Verification' ? 'bg-amber-500/20 text-amber-300' :
                        'bg-zinc-800 text-slate-300'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                    <h4 className="font-semibold text-white text-sm mt-1">{order.serviceName}</h4>
                    <p className="text-xs text-slate-400">Assigned Expert: <strong className="text-slate-300">{order.assignedExpert}</strong></p>
                  </div>
                  <span className="font-mono text-sm font-bold text-emerald-400">₹{order.amount.toLocaleString('en-IN')}</span>
                </div>

                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                    <span>Target Date: {order.targetCompletionDate}</span>
                    <span className="font-mono font-semibold text-emerald-400">{order.progressPercent}% Complete</span>
                  </div>
                  <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-emerald-500 h-full rounded-full transition-all duration-500" 
                      style={{ width: `${order.progressPercent}%` }} 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Col (1 col): Compliance Calendar */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-slate-200 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
            <h3 className="font-semibold text-lg text-white">Upcoming Due Dates</h3>
            <button
              onClick={() => onNavigateTab('reminders')}
              className="text-xs font-bold text-emerald-400 hover:underline"
            >
              Calendar
            </button>
          </div>

          <div className="space-y-3">
            {reminders.slice(0, 3).map((rem) => (
              <div key={rem.id} className="p-3 bg-zinc-950/50 border border-zinc-800/80 rounded-lg text-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {rem.category}
                  </span>
                  <span className="font-mono text-xs font-semibold text-slate-400">{rem.dueDate}</span>
                </div>
                <h5 className="font-semibold text-white pt-1">{rem.title}</h5>
                <p className="text-slate-400 text-[11px] line-clamp-1">{rem.description}</p>
                <div className="text-[10px] text-amber-400 pt-1 font-mono">{rem.estimatedPenalty}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
