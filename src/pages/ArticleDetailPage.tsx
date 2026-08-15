import React from 'react';
import { ArrowLeft, Clock, User, Share2, ArrowRight } from 'lucide-react';
import { ARTICLES_DATA } from '../data/articlesData';

interface ArticleDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenLeadModal: () => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenLeadModal
}) => {
  const article = ARTICLES_DATA.find((a) => a.slug === slug) || ARTICLES_DATA[0];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0A0A0C] text-slate-900 dark:text-white py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8 transition-colors duration-200">
      <button
        onClick={() => onNavigate('/learn')}
        className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center space-x-1 cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Knowledge Hub</span>
      </button>

      <div className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center space-x-3 text-xs text-slate-500 dark:text-slate-400">
          <span className="bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-400/30 px-2.5 py-0.5 rounded font-semibold">{article.category}</span>
          <span>•</span>
          <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1" />{article.readTime}</span>
          <span>•</span>
          <span className="font-mono">Published {article.publishedDate}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-light text-slate-900 dark:text-slate-100 leading-tight tracking-tight">{article.title}</h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 font-normal leading-relaxed">{article.excerpt}</p>

        <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400 pt-2">
          <User className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>Written by <strong className="text-slate-900 dark:text-white">{article.author}</strong></span>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-none text-slate-700 dark:text-slate-300 text-xs sm:text-sm space-y-4 leading-relaxed">
        {Array.isArray(article.content) ? article.content.map((p, idx) => (
          <p key={idx}>{p}</p>
        )) : <p>{article.content}</p>}
      </div>

      {/* Inline CTA Banner */}
      <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 text-center space-y-3 shadow-sm">
        <h3 className="font-bold text-lg text-slate-900 dark:text-white">Need Expert Help with {article.category}?</h3>
        <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto">Get connected with a senior Chartered Accountant for personal tax planning and filing.</p>
        <button
          onClick={onOpenLeadModal}
          className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold px-6 py-3 rounded-xl transition text-xs shadow-sm cursor-pointer"
        >
          Schedule CA Callback
        </button>
      </div>
    </div>
  );
};
