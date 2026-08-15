import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Building2, 
  FileCheck2, 
  Receipt, 
  Stamp, 
  BookOpenCheck, 
  Bot, 
  Lock, 
  UserCircle2, 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  PhoneCall, 
  Sun, 
  Moon 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { UserProfile } from '../types';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  user?: UserProfile | null;
  userLoggedIn?: boolean;
  onOpenAiAdvisor: () => void;
  onOpenLeadModal: (serviceId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
  user,
  userLoggedIn = !!user,
  onOpenAiAdvisor,
  onOpenLeadModal
}) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const servicesList = [
    { id: 'startup', name: 'Business Registration', desc: 'Pvt Ltd, LLP, OPC, Proprietorship', icon: Building2 },
    { id: 'gst', name: 'GST Registration & Filing', desc: 'GSTIN, Monthly GSTR-1/3B Returns', icon: FileCheck2 },
    { id: 'mca-services', name: 'MCA / ROC Annual Compliance', desc: 'AOC-4, MGT-7, Director DIR-3 KYC', icon: ShieldCheck },
    { id: 'income-tax', name: 'Income Tax Return (ITR)', desc: 'Salaried, Capital Gains, Corporate ITR', icon: Receipt },
    { id: 'trademark', name: 'Trademark Registration', desc: 'Logo & Brand ™/® Class Protection', icon: Stamp },
    { id: 'accounting-bookkeeping', name: 'Accounting & Bookkeeping', desc: 'Dedicated CA, Tally & Zoho Books Sync', icon: BookOpenCheck }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#0F0F12]/95 backdrop-blur-md border-b border-slate-200 dark:border-zinc-800 text-slate-800 dark:text-slate-200 shadow-sm dark:shadow-xl transition-colors duration-200">
      {/* Top Utility Bar */}
      <div className="bg-slate-100/90 dark:bg-[#0A0A0C] px-4 py-2 text-xs text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-zinc-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-2 px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold">
                MFA & AES-256 Secured
              </span>
            </div>
            <span className="hidden sm:inline text-slate-300 dark:text-zinc-700">|</span>
            <span className="hidden sm:inline text-slate-500 dark:text-slate-400 font-mono text-[11px]">ISO 27001 Hardware Encryption Node</span>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => onOpenLeadModal()} 
              className="flex items-center text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition text-xs font-medium"
            >
              <PhoneCall className="w-3 h-3 mr-1" />
              Instant Callback SLA: 15 Mins
            </button>
            <span className="text-slate-300 dark:text-zinc-700">|</span>
            <button 
              onClick={onOpenAiAdvisor}
              className="flex items-center bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 px-2.5 py-1 rounded-full text-emerald-600 dark:text-emerald-400 text-xs font-semibold transition"
            >
              <Bot className="w-3.5 h-3.5 mr-1.5 text-emerald-600 dark:text-emerald-400" />
              Ask ComplyAI Tax Expert
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            onClick={() => onNavigate('/')} 
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-5 h-5 text-zinc-950 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center">
                <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Comply<span className="text-emerald-600 dark:text-emerald-500">Tax</span></span>
                <span className="ml-2 px-1.5 py-0.5 text-[9px] font-mono font-bold bg-slate-200 dark:bg-zinc-800 text-emerald-700 dark:text-emerald-400 border border-slate-300 dark:border-zinc-700 rounded">PRO</span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">INDIA TAX & COMPLIANCE</p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            <div className="relative">
              <button
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="flex items-center px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-zinc-800/60 transition"
              >
                Compliance Services
                <ChevronDown className="w-4 h-4 ml-1 text-slate-400 dark:text-slate-500" />
              </button>

              {/* Mega Dropdown */}
              {servicesDropdownOpen && (
                <div 
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute left-0 mt-1 w-[540px] bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl shadow-2xl p-4 grid grid-cols-2 gap-2 z-50 animate-in fade-in slide-in-from-top-2"
                >
                  {servicesList.map((svc) => {
                    const Icon = svc.icon;
                    return (
                      <div
                        key={svc.id}
                        onClick={() => {
                          setServicesDropdownOpen(false);
                          onNavigate(`/${svc.id}`);
                        }}
                        className="p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-zinc-800/80 cursor-pointer transition border border-transparent hover:border-slate-200 dark:hover:border-zinc-700/80 group"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="p-2 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">{svc.name}</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">{svc.desc}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <button
              onClick={() => onNavigate('/pricing')}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition ${currentPath === '/pricing' ? 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 font-semibold' : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800/60'}`}
            >
              Master Pricing
            </button>

            <button
              onClick={() => onNavigate('/founders-guide')}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition ${currentPath === '/founders-guide' ? 'text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10' : 'text-amber-700 dark:text-amber-300 hover:text-amber-800 dark:hover:text-amber-200 hover:bg-slate-100 dark:hover:bg-zinc-800/60'}`}
            >
              <Sparkles className="w-3.5 h-3.5 mr-1 text-amber-500 dark:text-amber-400" />
              Founders Guide 2026
            </button>

            <button
              onClick={() => onNavigate('/learn')}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition ${currentPath === '/learn' ? 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 font-semibold' : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800/60'}`}
            >
              Knowledge Hub
            </button>

            <button
              onClick={() => onNavigate('/about-us')}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition ${currentPath === '/about-us' ? 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 font-semibold' : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800/60'}`}
            >
              About
            </button>

            <button
              onClick={() => onNavigate('/contact-us')}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition ${currentPath === '/contact-us' ? 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 font-semibold' : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800/60'}`}
            >
              Contact
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 transition border border-slate-200 dark:border-zinc-700 flex items-center justify-center"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {userLoggedIn ? (
              <button
                onClick={() => onNavigate('/dashboard')}
                className="flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-4 py-2 rounded-lg font-bold text-sm shadow-md transition active:scale-95"
              >
                <UserCircle2 className="w-4 h-4 text-zinc-950" />
                <span>Client Dashboard</span>
              </button>
            ) : (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => onNavigate('/login')}
                  className="flex items-center space-x-1.5 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-slate-100 dark:hover:bg-zinc-800 transition"
                >
                  <Lock className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                  <span>Login</span>
                </button>
                <button
                  onClick={() => onNavigate('/signup')}
                  className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-emerald-500/20 transition active:scale-95"
                >
                  Get Started Free
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Trigger & Theme Toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 transition border border-slate-200 dark:border-zinc-700"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-zinc-900 border-b border-slate-200 dark:border-zinc-800 px-4 pt-2 pb-6 space-y-3 transition-colors duration-200">
          <div className="space-y-1">
            <div className="px-2 py-1 text-xs font-bold text-slate-500 uppercase tracking-wider">Compliance Verticals</div>
            {servicesList.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate(`/${s.id}`);
                }}
                className="block w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-zinc-800 hover:text-slate-900 dark:hover:text-white"
              >
                {s.name}
              </button>
            ))}
          </div>

          <div className="border-t border-slate-200 dark:border-zinc-800 pt-2 space-y-1">
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('/pricing'); }}
              className="block w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-zinc-800"
            >
              Master Pricing
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('/founders-guide'); }}
              className="block w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-amber-700 dark:text-amber-300 hover:bg-slate-100 dark:hover:bg-zinc-800"
            >
              Founders Guide 2026
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('/learn'); }}
              className="block w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-zinc-800"
            >
              Knowledge Hub
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('/about-us'); }}
              className="block w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-zinc-800"
            >
              About Us
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('/contact-us'); }}
              className="block w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-zinc-800"
            >
              Contact Us
            </button>
          </div>

          <div className="border-t border-slate-200 dark:border-zinc-800 pt-3 flex flex-col space-y-2">
            {userLoggedIn ? (
              <button
                onClick={() => { setMobileMenuOpen(false); onNavigate('/dashboard'); }}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 py-2.5 rounded-lg font-bold text-center"
              >
                Go to Dashboard
              </button>
            ) : (
              <>
                <button
                  onClick={() => { setMobileMenuOpen(false); onNavigate('/login'); }}
                  className="w-full border border-slate-300 dark:border-zinc-700 text-slate-800 dark:text-slate-200 py-2 rounded-lg font-semibold hover:bg-slate-100 dark:hover:bg-zinc-800"
                >
                  Client Login
                </button>
                <button
                  onClick={() => { setMobileMenuOpen(false); onNavigate('/signup'); }}
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 py-2.5 rounded-lg font-bold"
                >
                  Create Free Account
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
