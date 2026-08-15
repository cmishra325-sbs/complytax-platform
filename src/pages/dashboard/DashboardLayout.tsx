import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  FileCheck2, 
  FolderLock, 
  MessageSquare, 
  CreditCard, 
  CalendarClock, 
  Settings, 
  LogOut, 
  ShieldCheck,
  UserCircle2,
  Sun,
  Moon
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { UserProfile, OrderItem, DocumentItem, ComplianceReminder, ExpertMessage, InvoiceItem } from '../../types';
import { DashboardHome } from './DashboardHome';
import { DashboardOrders } from './DashboardOrders';
import { DashboardDocuments } from './DashboardDocuments';
import { DashboardMessages } from './DashboardMessages';
import { DashboardPayments } from './DashboardPayments';
import { DashboardReminders } from './DashboardReminders';
import { DashboardSettings } from './DashboardSettings';

interface DashboardLayoutProps {
  user: UserProfile;
  orders: OrderItem[];
  documents: DocumentItem[];
  reminders: ComplianceReminder[];
  messages: ExpertMessage[];
  invoices: InvoiceItem[];
  onUploadDocument: (docName: string, category: string) => void;
  onSendMessage: (msgText: string) => void;
  onLogout: () => void;
  onNavigateHome: () => void;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  user,
  orders,
  documents,
  reminders,
  messages,
  invoices,
  onUploadDocument,
  onSendMessage,
  onLogout,
  onNavigateHome
}) => {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('home');

  const navTabs = [
    { id: 'home', label: 'Overview', icon: LayoutDashboard },
    { id: 'orders', label: 'Services & Orders', icon: FileCheck2 },
    { id: 'documents', label: 'Document Vault', icon: FolderLock },
    { id: 'messages', label: 'CA Messages', icon: MessageSquare },
    { id: 'payments', label: 'Invoices & Billing', icon: CreditCard },
    { id: 'reminders', label: 'Calendar', icon: CalendarClock },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0A0A0C] text-slate-900 dark:text-slate-200 flex flex-col md:flex-row transition-colors duration-200">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-white dark:bg-[#0F0F12] border-r border-slate-200 dark:border-zinc-800 p-4 flex flex-col justify-between shrink-0 shadow-sm dark:shadow-none transition-colors duration-200">
        <div className="space-y-6">
          {/* Logo & Theme Toggle */}
          <div className="flex items-center justify-between px-2">
            <div 
              onClick={onNavigateHome} 
              className="flex items-center space-x-2.5 cursor-pointer"
            >
              <div className="w-8 h-8 rounded bg-emerald-500 flex items-center justify-center font-bold text-zinc-950 text-base shadow-sm">
                <ShieldCheck className="w-5 h-5 text-zinc-950 stroke-[2.5]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Comply<span className="text-emerald-600 dark:text-emerald-500">Tax</span></span>
            </div>
            <button
              onClick={toggleTheme}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="p-1.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 transition border border-slate-200 dark:border-zinc-700"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
          </div>

          {/* User Badge */}
          <div className="bg-slate-50 dark:bg-zinc-900 p-3 rounded-xl border border-slate-200 dark:border-zinc-800 space-y-1.5">
            <div className="flex items-center space-x-2">
              <UserCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="font-bold text-xs text-slate-900 dark:text-white truncate">{user.name}</span>
            </div>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">{user.companyName}</p>
            <span className="inline-block bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[9px] font-mono px-2 py-0.5 rounded border border-emerald-500/20 font-semibold">
              AES-256 Hardware Authenticated
            </span>
          </div>

          {/* Nav List */}
          <nav className="space-y-1">
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-xs font-semibold transition ${
                    isActive
                      ? 'bg-emerald-500 text-zinc-950 font-bold shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-zinc-800/80 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-200 dark:border-zinc-800 space-y-2">
          <button
            onClick={onNavigateHome}
            className="w-full text-left px-3 py-2 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition"
          >
            ← Back to Main Website
          </button>
          <button
            onClick={onLogout}
            className="w-full flex items-center space-x-2 px-3 py-2 rounded-lg text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-500/10 transition"
          >
            <LogOut className="w-4 h-4" />
            <span>Secure Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {activeTab === 'home' && (
          <DashboardHome
            orders={orders}
            documents={documents}
            reminders={reminders}
            messages={messages}
            onNavigateTab={setActiveTab}
          />
        )}

        {activeTab === 'orders' && <DashboardOrders orders={orders} />}

        {activeTab === 'documents' && (
          <DashboardDocuments documents={documents} onUploadDocument={onUploadDocument} />
        )}

        {activeTab === 'messages' && (
          <DashboardMessages messages={messages} onSendMessage={onSendMessage} />
        )}

        {activeTab === 'payments' && <DashboardPayments invoices={invoices} />}

        {activeTab === 'reminders' && <DashboardReminders reminders={reminders} />}

        {activeTab === 'settings' && <DashboardSettings user={user} />}
      </main>
    </div>
  );
};
