import React, { useState } from 'react';
import { MessageSquare, Send, UserCheck, Bot } from 'lucide-react';
import { ExpertMessage } from '../../types';

interface DashboardMessagesProps {
  messages: ExpertMessage[];
  onSendMessage: (msgText: string) => void;
}

export const DashboardMessages: React.FC<DashboardMessagesProps> = ({
  messages,
  onSendMessage
}) => {
  const [text, setText] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSendMessage(text.trim());
    setText('');
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white space-y-4 shadow-xl max-w-4xl mx-auto">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600/30 text-indigo-300 flex items-center justify-center font-bold">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-base">Assigned Chartered Accountant & Expert Thread</h3>
            <p className="text-xs text-slate-400">Order: ORD-2026-9043 (GST Registration & Annual Return Filing)</p>
          </div>
        </div>
        <span className="bg-emerald-500/20 text-emerald-400 text-xs font-semibold px-2.5 py-1 rounded border border-emerald-500/30">
          CA Ankit Verma (Assigned)
        </span>
      </div>

      {/* Message History */}
      <div className="space-y-4 h-96 overflow-y-auto p-4 bg-slate-950/60 rounded-xl border border-slate-800/80">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex flex-col space-y-1 ${m.senderRole === 'Client' ? 'items-end' : 'items-start'}`}
          >
            <div className="flex items-center space-x-2 text-[11px] text-slate-400">
              <span className="font-semibold text-slate-300">{m.senderName} ({m.senderRole})</span>
              <span>•</span>
              <span className="font-mono">{m.timestamp}</span>
            </div>
            <div
              className={`p-3.5 rounded-2xl text-xs max-w-[80%] leading-relaxed ${
                m.senderRole === 'Client'
                  ? 'bg-blue-600 text-white rounded-tr-none'
                  : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-tl-none shadow-md'
              }`}
            >
              {m.message}
            </div>
          </div>
        ))}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSend} className="flex items-center space-x-2 pt-2">
        <input
          type="text"
          placeholder="Type your message or tax question for CA Ankit Verma..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-indigo-500"
        />
        <button
          type="submit"
          disabled={!text.trim()}
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-5 py-3 rounded-xl transition text-xs flex items-center space-x-1.5 disabled:opacity-50"
        >
          <span>Send Note</span>
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
};
