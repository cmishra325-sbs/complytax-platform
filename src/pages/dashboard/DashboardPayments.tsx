import React, { useState } from 'react';
import { CreditCard, Download, CheckCircle, RefreshCw, ShieldCheck, Check } from 'lucide-react';
import { InvoiceItem } from '../../types';

interface DashboardPaymentsProps {
  invoices: InvoiceItem[];
}

export const DashboardPayments: React.FC<DashboardPaymentsProps> = ({ invoices }) => {
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Growth Annual GST Shield - ₹6,999/yr');
  const [autoRenew, setAutoRenew] = useState(true);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentSuccess(true);
    setTimeout(() => {
      setPaymentSuccess(false);
      setShowCheckoutModal(false);
    }, 2000);
  };

  return (
    <div className="space-y-6 text-white">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold">Payments, Invoices & Subscriptions</h2>
          <p className="text-xs text-slate-400 mt-0.5">Manage order tax invoices, active recurring retainers, and payment methods.</p>
        </div>
        <button
          onClick={() => setShowCheckoutModal(true)}
          className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-4 py-2.5 rounded-xl text-xs transition flex items-center space-x-1.5 shadow-lg shadow-emerald-600/20"
        >
          <CreditCard className="w-4 h-4" />
          <span>Renew / Upgrade Subscription</span>
        </button>
      </div>

      {/* Subscription Card */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-indigo-700/50 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <RefreshCw className="w-3.5 h-3.5 text-indigo-400" />
            <span>Active Recurring Subscription</span>
          </div>
          <h3 className="text-lg font-bold">Annual GST & Compliance Shield Retainer</h3>
          <p className="text-xs text-slate-300 mt-1">12 Months GSTR-1 & 3B Monthly Return Filings included. Renews on <strong className="text-white">July 20, 2027</strong>.</p>
        </div>

        <div className="flex items-center space-x-4 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
          <div className="text-xs">
            <span className="text-slate-400 block text-[10px]">Auto-Billing:</span>
            <span className="font-bold text-emerald-400">{autoRenew ? 'ACTIVE (Razorpay UPI Mandate)' : 'DISABLED'}</span>
          </div>
          <button
            onClick={() => setAutoRenew(!autoRenew)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              autoRenew ? 'bg-slate-800 text-slate-300 hover:text-white' : 'bg-emerald-600 text-white'
            }`}
          >
            {autoRenew ? 'Disable' : 'Enable Auto-Renew'}
          </button>
        </div>
      </div>

      {/* Invoice History Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
        <h3 className="font-bold text-base text-white border-b border-slate-800 pb-3">Official GST Tax Invoices</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-800/80 text-slate-400 text-[11px] uppercase tracking-wider">
              <tr>
                <th className="p-3">Invoice No.</th>
                <th className="p-3">Date</th>
                <th className="p-3">Service</th>
                <th className="p-3">GST Breakup</th>
                <th className="p-3">Total Amount</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {invoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-slate-800/40">
                  <td className="p-3 font-mono text-white font-semibold">{inv.invoiceNumber}</td>
                  <td className="p-3 font-mono">{inv.date}</td>
                  <td className="p-3 font-semibold text-white">{inv.serviceName}</td>
                  <td className="p-3 font-mono">₹{inv.gstAmount.toFixed(2)} (18%)</td>
                  <td className="p-3 font-mono font-bold text-emerald-400">₹{inv.totalAmount.toLocaleString('en-IN')}</td>
                  <td className="p-3">
                    <span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded text-[10px] font-bold border border-emerald-500/30">
                      {inv.status}
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => alert(`Downloading Tax Invoice ${inv.invoiceNumber} PDF...`)}
                      className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center space-x-1"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Razorpay Checkout Modal Simulation */}
      {showCheckoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 animate-in fade-in">
          <div className="bg-slate-900 border border-slate-700/90 rounded-2xl max-w-md w-full overflow-hidden shadow-2xl p-6 text-white space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center space-x-2">
                <CreditCard className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-base">Razorpay / UPI Payment Gateway</h3>
              </div>
              <button onClick={() => setShowCheckoutModal(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            {paymentSuccess ? (
              <div className="text-center py-6 space-y-2">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="font-bold text-white text-lg">Payment Successful!</h4>
                <p className="text-xs text-slate-300">Tax Invoice generated and mailed to founder@complytax.in</p>
              </div>
            ) : (
              <form onSubmit={handleSimulatePayment} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Select Service Plan</label>
                  <select
                    value={selectedPlan}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white"
                  >
                    <option value="Growth Annual GST Shield - ₹6,999/yr">Growth Annual GST Shield - ₹6,999/yr</option>
                    <option value="Annual ROC Compliance Shield - ₹7,999/yr">Annual ROC Compliance Shield - ₹7,999/yr</option>
                    <option value="Complete Business Retainer Bundle - ₹14,999/yr">Complete Business Retainer Bundle - ₹14,999/yr</option>
                  </select>
                </div>

                <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 text-xs space-y-1">
                  <div className="flex justify-between text-slate-300">
                    <span>Base Amount:</span>
                    <span className="font-mono">₹5,931.36</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>GST (18%):</span>
                    <span className="font-mono">₹1,067.64</span>
                  </div>
                  <div className="flex justify-between text-emerald-400 font-bold border-t border-slate-700 pt-1 text-sm">
                    <span>Total Payable:</span>
                    <span className="font-mono">₹6,999.00</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl transition shadow-lg text-xs"
                >
                  Pay ₹6,999 via Razorpay / GPay / PhonePe UPI
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
