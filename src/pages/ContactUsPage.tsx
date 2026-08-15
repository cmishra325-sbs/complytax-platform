import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export const ContactUsPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0A0A0C] text-slate-900 dark:text-white py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12 transition-colors duration-200">
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <span className="bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-400/30 px-3 py-1 rounded-full text-xs font-semibold">
          24/7 Expert Support
        </span>
        <h1 className="text-3xl sm:text-5xl font-light text-slate-900 dark:text-slate-100 tracking-tight">Contact <span className="font-semibold text-slate-900 dark:text-white">ComplyTax Support</span></h1>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Speak with our senior Chartered Accountants and compliance managers directly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Col: Contact Info */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 space-y-6 shadow-sm">
          <h3 className="font-bold text-lg text-slate-900 dark:text-white border-b border-slate-200 dark:border-zinc-800 pb-3">Corporate Headquarters</h3>

          <div className="space-y-4 text-xs text-slate-600 dark:text-slate-300">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 dark:text-white block">Delhi NCR Office:</strong>
                <p>ComplyTax Tower, Sector 62, Noida, Delhi NCR - 201301</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 dark:text-white block">Toll-Free CA Helpline:</strong>
                <p className="font-mono text-sm font-bold text-emerald-600 dark:text-emerald-400">+91 1800 234 9000</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 dark:text-white block">Email Enquiries:</strong>
                <p>support@complytax.in | ca@complytax.in</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 dark:text-white block">Support Hours:</strong>
                <p>Monday - Saturday: 9:00 AM - 8:00 PM IST</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: Form */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 space-y-4 shadow-sm">
          <h3 className="font-bold text-lg text-slate-900 dark:text-white">Send Direct Message</h3>

          {submitted ? (
            <div className="text-center py-8 space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto" />
              <h4 className="font-bold text-slate-900 dark:text-white text-base">Message Dispatched</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300">Our senior CA team will respond to {email} within 15 minutes.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Email *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Message / Query *</label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold py-3 rounded-xl transition text-xs flex items-center justify-center space-x-1.5 shadow-sm cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
