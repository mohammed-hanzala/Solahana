import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Target, TrendingUp, ShieldCheck, ArrowRight, Calculator, PieChart, Lock } from 'lucide-react';

export default function SearchModal({ isOpen, onClose, onSelectAction }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const quickPrompts = [
    { title: 'Calculate Tax Savings for FY 2025-26', category: 'Tax Optimization', icon: Calculator, link: 'tax' },
    { title: 'Simulate Early Retirement FIRE Target at 48', category: 'Goal Planner', icon: Target, link: 'advisory' },
    { title: 'Section 80C & 80D Investment Placement', category: 'Tax Strategy', icon: ShieldCheck, link: 'tax' },
    { title: 'NRI DTAA Tax Benefit & FEMA Regulations', category: 'NRI Wealth', icon: ShieldCheck, link: 'nri' },
    { title: 'Explore Multi-Asset Mutual Funds & SIPs', category: 'Investments', icon: PieChart, link: 'invest' },
  ];

  const filteredPrompts = query
    ? quickPrompts.filter(p => p.title.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase()))
    : quickPrompts;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#020B2D]/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-[#071C48]/90 border border-[#C8A24A]/30 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-2xl z-10"
          >
            {/* Input Header */}
            <div className="flex items-center px-5 py-4 border-b border-[#C8A24A]/20 bg-[#020B2D]/40">
              <Search className="w-5 h-5 text-[#C8A24A] mr-3" />
              <input
                type="text"
                autoFocus
                placeholder="Search SOLAHANA financial strategies or calculators..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-[#F8F7F3] placeholder-[#BAC6DA]/60 focus:outline-none text-base font-inter"
              />
              {query && (
                <button onClick={() => setQuery('')} className="p-1 text-[#BAC6DA] hover:text-white mr-2">
                  <X className="w-4 h-4" />
                </button>
              )}
              <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-xs text-[#BAC6DA] bg-[#020B2D]/60 border border-[#C8A24A]/20 rounded font-num">
                ESC
              </kbd>
            </div>

            {/* Content Body */}
            <div className="p-5 max-h-[60vh] overflow-y-auto space-y-4">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#BAC6DA]">
                <span>Financial Planning Topics</span>
                <span className="text-[#C8A24A] font-sora">SOLAHANA Wealth Desk</span>
              </div>

              <div className="space-y-2">
                {filteredPrompts.length > 0 ? (
                  filteredPrompts.map((item, idx) => {
                    const IconComp = item.icon;
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          if (onSelectAction) onSelectAction(item);
                          onClose();
                        }}
                        className="w-full text-left p-3.5 rounded-xl border border-[#C8A24A]/10 bg-[#020B2D]/40 hover:bg-[#020B2D]/80 hover:border-[#C8A24A]/40 transition-all flex items-center justify-between group"
                      >
                        <div className="flex items-center space-x-3.5">
                          <div className="p-2 rounded-lg bg-[#C8A24A]/10 border border-[#C8A24A]/20 group-hover:bg-[#C8A24A] group-hover:text-[#020B2D] transition-colors text-[#C8A24A]">
                            <IconComp className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-[#F8F7F3] group-hover:text-[#E8C878] transition-colors">
                              {item.title}
                            </div>
                            <div className="text-xs text-[#BAC6DA]">
                              {item.category}
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#BAC6DA] group-hover:text-[#C8A24A] group-hover:translate-x-1 transition-all" />
                      </button>
                    );
                  })
                ) : (
                  <div className="py-8 text-center text-[#BAC6DA]">
                    No direct match found for <span className="text-[#E8C878]">"{query}"</span>. Search another term.
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="px-5 py-3 border-t border-[#C8A24A]/15 bg-[#020B2D]/70 flex items-center justify-between text-xs text-[#BAC6DA]">
              <div className="flex items-center space-x-2">
                <Lock className="w-3.5 h-3.5 text-[#C8A24A]" />
                <span>Bank-grade 256-bit Encryption • SEBI Registered</span>
              </div>
              <div className="text-[#E8C878]">
                Press <span className="font-semibold text-white">Cmd + K</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
