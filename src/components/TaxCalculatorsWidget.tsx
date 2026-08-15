import React, { useState } from 'react';
import { Calculator, ArrowRightLeft, DollarSign, CheckCircle } from 'lucide-react';

export const TaxCalculatorsWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'gst' | 'income'>('gst');

  // GST State
  const [gstAmount, setGstAmount] = useState<number>(100000);
  const [gstRate, setGstRate] = useState<number>(18);

  // Income Tax State
  const [income, setIncome] = useState<number>(1200000);
  const [deductions, setDeductions] = useState<number>(150000);

  // Calculations
  const cgst = (gstAmount * (gstRate / 2) / 100).toFixed(2);
  const sgst = (gstAmount * (gstRate / 2) / 100).toFixed(2);
  const totalGst = (gstAmount * (gstRate / 100)).toFixed(2);
  const grandTotal = (gstAmount + Number(totalGst)).toFixed(2);

  // Income Tax Calculations
  let newRegimeTax = 0;
  if (income > 1200000) newRegimeTax = (income - 1200000) * 0.20 + 90000;
  else if (income > 900000) newRegimeTax = (income - 900000) * 0.15 + 45000;
  else if (income > 700000) newRegimeTax = (income - 700000) * 0.10 + 25000;

  const taxableOld = Math.max(0, income - deductions - 50000);
  let oldTax = 0;
  if (taxableOld > 1000000) oldTax = (taxableOld - 1000000) * 0.30 + 112500;
  else if (taxableOld > 500000) oldTax = (taxableOld - 500000) * 0.20 + 12500;

  const bestRegime = newRegimeTax <= oldTax ? 'New Tax Regime' : 'Old Tax Regime';
  const taxSavings = Math.abs(Math.round(oldTax - newRegimeTax));

  return (
    <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 text-slate-900 dark:text-white shadow-sm dark:shadow-xl transition-colors duration-200">
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-zinc-800 pb-4 mb-5">
        <div className="flex items-center space-x-2">
          <Calculator className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          <h3 className="text-lg font-bold">Interactive Tax Calculators 2026</h3>
        </div>
        <div className="flex bg-slate-100 dark:bg-zinc-800 p-1 rounded-xl border border-slate-200 dark:border-zinc-700">
          <button
            onClick={() => setActiveTab('gst')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition cursor-pointer ${activeTab === 'gst' ? 'bg-amber-500 text-slate-950 shadow font-bold' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'}`}
          >
            GST Calculator
          </button>
          <button
            onClick={() => setActiveTab('income')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition cursor-pointer ${activeTab === 'income' ? 'bg-amber-500 text-slate-950 shadow font-bold' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'}`}
          >
            Old vs New ITR Calculator
          </button>
        </div>
      </div>

      {activeTab === 'gst' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Net Invoice Value (₹)</label>
              <input
                type="number"
                value={gstAmount}
                onChange={(e) => setGstAmount(Number(e.target.value))}
                className="w-full bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-xl px-3.5 py-2.5 text-sm font-mono text-slate-900 dark:text-white focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">GST Rate (%)</label>
              <div className="grid grid-cols-4 gap-2">
                {[5, 12, 18, 28].map((rate) => (
                  <button
                    key={rate}
                    onClick={() => setGstRate(rate)}
                    className={`py-2 rounded-xl text-xs font-bold border transition cursor-pointer ${gstRate === rate ? 'bg-amber-500 text-slate-950 border-amber-400' : 'bg-slate-50 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-zinc-700 hover:border-slate-400 dark:hover:border-zinc-500'}`}
                  >
                    {rate}%
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-zinc-800/90 border border-slate-200 dark:border-zinc-700 rounded-xl p-4 space-y-2 text-xs">
            <span className="font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block border-b border-slate-200 dark:border-zinc-700 pb-2">Tax Breakdown Result</span>
            <div className="flex justify-between py-1">
              <span className="text-slate-600 dark:text-slate-300">Net Taxable Amount:</span>
              <span className="font-mono font-bold text-slate-900 dark:text-white">₹{gstAmount.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between py-1 text-amber-700 dark:text-amber-300 font-medium">
              <span>CGST ({gstRate / 2}%):</span>
              <span className="font-mono font-bold">₹{Number(cgst).toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between py-1 text-amber-700 dark:text-amber-300 font-medium">
              <span>SGST ({gstRate / 2}%):</span>
              <span className="font-mono font-bold">₹{Number(sgst).toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between py-1 border-t border-slate-200 dark:border-zinc-700 pt-2 text-sm text-emerald-700 dark:text-emerald-400 font-bold">
              <span>Grand Total Invoice Value:</span>
              <span className="font-mono">₹{Number(grandTotal).toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Annual Gross Income (₹)</label>
              <input
                type="number"
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
                className="w-full bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-xl px-3.5 py-2.5 text-sm font-mono text-slate-900 dark:text-white focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Total Deductions 80C + 80D (Old Regime)</label>
              <input
                type="number"
                value={deductions}
                onChange={(e) => setDeductions(Number(e.target.value))}
                className="w-full bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-xl px-3.5 py-2.5 text-sm font-mono text-slate-900 dark:text-white focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-zinc-800/90 border border-slate-200 dark:border-zinc-700 rounded-xl p-4 space-y-3 text-xs">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-zinc-700 pb-2">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Regime Comparison</span>
              <span className="bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded font-bold border border-emerald-500/30">
                Recommended: {bestRegime}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="bg-white dark:bg-zinc-900 p-2.5 rounded-lg border border-slate-200 dark:border-zinc-700 shadow-sm">
                <span className="text-[11px] text-slate-500 dark:text-slate-400 block">New Tax Regime</span>
                <span className="font-mono text-base font-bold text-slate-900 dark:text-white mt-1 block">₹{Math.round(newRegimeTax).toLocaleString('en-IN')}</span>
              </div>
              <div className="bg-white dark:bg-zinc-900 p-2.5 rounded-lg border border-slate-200 dark:border-zinc-700 shadow-sm">
                <span className="text-[11px] text-slate-500 dark:text-slate-400 block">Old Tax Regime</span>
                <span className="font-mono text-base font-bold text-slate-900 dark:text-white mt-1 block">₹{Math.round(oldTax).toLocaleString('en-IN')}</span>
              </div>
            </div>
            <p className="text-[11px] text-emerald-700 dark:text-emerald-300 text-center font-medium">
              Choosing {bestRegime} saves you approximately ₹{taxSavings.toLocaleString('en-IN')} in tax outflow!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
