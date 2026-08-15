import React, { useState } from 'react';
import { X, Bot, Send, Sparkles, ShieldCheck, User } from 'lucide-react';

interface AiTaxAdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiTaxAdvisorModal: React.FC<AiTaxAdvisorModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<{ sender: 'ai' | 'user'; text: string }[]>([
    {
      sender: 'ai',
      text: 'Namaste! I am ComplyAI, your AI Chartered Accountant & Legal Assistant. Ask me anything about GST registration, Pvt Ltd vs LLP, MCA due dates, Income tax notice replies, or capital gains taxation.'
    }
  ]);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userText = query.trim();
    setQuery('');
    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setLoading(true);

    try {
      const res = await fetch('/api/ai/advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: userText })
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { sender: 'ai', text: data.answer || 'No answer generated.' }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: 'The AI Tax Advisor experienced a network interruption. In summary, GST RFD-11 LUT is required for export service zero-rating, and Director DIR-3 KYC is due before September 30th annually.'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in">
      <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl max-w-xl w-full h-[600px] flex flex-col overflow-hidden shadow-2xl text-slate-800 dark:text-slate-200 transition-colors duration-200">
        {/* Header */}
        <div className="bg-slate-50 dark:bg-zinc-950 p-4 flex items-center justify-between border-b border-slate-200 dark:border-zinc-800">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/20">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold text-slate-900 dark:text-white text-base">ComplyAI Tax Assistant</h3>
                <span className="bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold px-1.5 py-0.5 rounded border border-emerald-500/20 font-mono">
                  Gemini Powered
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">Instant answers referenced against Companies Act & GST Law</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-200 dark:bg-zinc-900 hover:bg-slate-300 dark:hover:bg-zinc-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 dark:bg-[#0A0A0C]">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex items-start space-x-2.5 ${m.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${m.sender === 'user' ? 'bg-emerald-500 text-zinc-950 shadow-sm' : 'bg-white dark:bg-zinc-900 text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-zinc-800 shadow-sm'}`}>
                {m.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>
              <div
                className={`max-w-[80%] p-3.5 rounded-xl text-xs leading-relaxed whitespace-pre-line ${
                  m.sender === 'user'
                    ? 'bg-emerald-500 text-zinc-950 font-medium rounded-tr-none shadow-sm'
                    : 'bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-800 dark:text-slate-200 rounded-tl-none shadow-sm'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 text-xs p-2 font-mono">
              <Sparkles className="w-4 h-4 animate-spin text-emerald-600 dark:text-emerald-400" />
              <span>Analyzing Indian tax acts and court precedents...</span>
            </div>
          )}
        </div>

        {/* Query Input */}
        <form onSubmit={handleSend} className="p-3 bg-white dark:bg-zinc-900 border-t border-slate-200 dark:border-zinc-800 flex items-center space-x-2">
          <input
            type="text"
            placeholder="Ask anything (e.g. Can an NRI be a director in Pvt Ltd?)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-lg px-4 py-2.5 text-xs text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-emerald-500"
          />
          <button
            type="submit"
            disabled={loading || !query.trim()}
            className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 p-2.5 rounded-lg transition disabled:opacity-50 cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
