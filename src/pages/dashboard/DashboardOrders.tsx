import React, { useState } from 'react';
import { FileCheck2, CheckCircle, Clock, UserCheck, Phone, Download, ArrowRight } from 'lucide-react';
import { OrderItem } from '../../types';

interface DashboardOrdersProps {
  orders: OrderItem[];
}

export const DashboardOrders: React.FC<DashboardOrdersProps> = ({ orders }) => {
  const [selectedOrderId, setSelectedOrderId] = useState<string>(orders[0]?.id || '');

  const selectedOrder = orders.find((o) => o.id === selectedOrderId) || orders[0];

  return (
    <div className="space-y-6 text-white">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Orders & Service Status Tracking</h2>
          <p className="text-xs text-slate-400 mt-0.5">Track live progress, government portal filings, and assigned CA experts.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Orders List */}
        <div className="space-y-3">
          {orders.map((ord) => (
            <div
              key={ord.id}
              onClick={() => setSelectedOrderId(ord.id)}
              className={`p-4 rounded-2xl border transition cursor-pointer ${
                ord.id === selectedOrderId
                  ? 'bg-blue-600/20 border-blue-500 shadow-lg'
                  : 'bg-slate-900 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-mono text-slate-400">{ord.id}</span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  ord.status === 'Completed' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-500/20 text-blue-300'
                }`}>
                  {ord.status}
                </span>
              </div>
              <h4 className="font-bold text-sm text-white">{ord.serviceName}</h4>
              <p className="text-xs text-slate-400 mt-1">{ord.tierName}</p>
              <div className="mt-3 flex items-center justify-between text-xs text-slate-300">
                <span>Expert: {ord.assignedExpert}</span>
                <span className="font-mono font-bold text-emerald-400">₹{ord.amount.toLocaleString('en-IN')}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Order Detail Stepper */}
        {selectedOrder && (
          <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono text-blue-400">{selectedOrder.id}</span>
                <h3 className="text-lg font-bold text-white mt-0.5">{selectedOrder.serviceName}</h3>
                <p className="text-xs text-slate-400">{selectedOrder.tierName} | Created on {selectedOrder.createdAt}</p>
              </div>

              {selectedOrder.certificateUrl && (
                <button
                  onClick={() => alert(`Downloading government issued certificate for ${selectedOrder.serviceName}...`)}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-4 py-2 rounded-xl transition flex items-center space-x-1.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Certificate</span>
                </button>
              )}
            </div>

            {/* Assigned Expert Contact */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-600/30 text-blue-300 flex items-center justify-center font-bold text-sm border border-blue-500/40">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-sm text-white">{selectedOrder.assignedExpert}</h5>
                  <p className="text-xs text-slate-400">Lead Corporate Secretarial & Tax Expert</p>
                </div>
              </div>
              <a
                href={`tel:${selectedOrder.expertPhone}`}
                className="bg-slate-700 hover:bg-slate-600 text-slate-200 px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1 transition"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{selectedOrder.expertPhone}</span>
              </a>
            </div>

            {/* Step-by-Step Progress Timeline */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Fulfillment Timeline & Stepper</h4>
              <div className="space-y-4 pl-2 border-l-2 border-slate-800">
                {selectedOrder.steps.map((step, idx) => (
                  <div key={idx} className="relative pl-6">
                    <div className={`absolute -left-[17px] top-0.5 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                      step.completed ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400 border border-slate-700'
                    }`}>
                      {step.completed ? <CheckCircle className="w-5 h-5" /> : idx + 1}
                    </div>
                    <div className="bg-slate-800/50 p-3.5 rounded-xl border border-slate-700/60">
                      <div className="flex items-center justify-between text-xs">
                        <h5 className="font-bold text-white text-sm">{step.title}</h5>
                        {step.date && <span className="font-mono text-slate-400">{step.date}</span>}
                      </div>
                      <p className="text-xs text-slate-300 mt-1">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
