import React, { useState } from 'react';
import { Search, BookOpen, Clock, ArrowRight, User, Tag } from 'lucide-react';
import { ARTICLES_DATA } from '../data/articlesData';

interface LearnPageProps {
  onNavigate: (path: string) => void;
}

export const LearnPage: React.FC<LearnPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Startup Incorporation', 'GST & Indirect Tax', 'MCA & ROC Compliance', 'Income Tax & ITR', 'Trademarks & IP'];

  const filteredArticles = ARTICLES_DATA.filter((art) => {
    const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0A0A0C] text-slate-900 dark:text-white py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8 transition-colors duration-200">
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <span className="bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-400/30 px-3 py-1 rounded-full text-xs font-semibold">
          Tax & Legal Knowledge Hub
        </span>
        <h1 className="text-3xl sm:text-5xl font-light text-slate-900 dark:text-slate-100 tracking-tight">ComplyTax <span className="font-semibold text-slate-900 dark:text-white">Founder Academy</span></h1>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          In-depth guides on Indian tax acts, GST returns, MCA due dates, and startup incorporation best practices.
        </p>
      </div>

      {/* Search & Category Filter */}
      <div className="space-y-4 max-w-3xl mx-auto">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
          <input
            type="text"
            placeholder="Search guides (e.g., GST LUT filing, Pvt Ltd vs LLP, ITR-3 capital gains)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl pl-11 pr-4 py-3 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 shadow-xs"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                selectedCategory === cat ? 'bg-emerald-500 text-zinc-950 shadow-sm' : 'bg-white dark:bg-zinc-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-zinc-800 hover:border-emerald-500/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((art) => (
          <div
            key={art.slug}
            onClick={() => onNavigate(`/learn/${art.slug}`)}
            className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-emerald-500/80 rounded-2xl p-6 cursor-pointer transition transform hover:-translate-y-1 shadow-sm dark:shadow-xl flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span className="bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded font-semibold">{art.category}</span>
                <span className="flex items-center"><Clock className="w-3 h-3 mr-1" />{art.readTime}</span>
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition leading-snug">{art.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">{art.excerpt}</p>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>By {art.author}</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold group-hover:underline flex items-center">
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
