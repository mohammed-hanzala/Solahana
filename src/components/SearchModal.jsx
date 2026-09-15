import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Target, ShieldCheck, ArrowRight, Calculator, PieChart } from 'lucide-react';

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
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-white border border-[#E7D7B5] rounded-2xl shadow-2xl overflow-hidden text-left z-10"
          >
            {/* Input Header */}
            <div className="flex items-center px-5 py-4 border-b border-[#E7D7B5] bg-[#FCFAF6]">
              <Search className="w-5 h-5 text-[#C89B3C] mr-3" />
              <input
                type="text"
                autoFocus
                placeholder="Search SOLAHANA financial strategies or calculators..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-[#1A1A1A] placeholder-[#555555]/60 focus:outline-none text-base font-inter"
              />
              {query && (
                <button onClick={() => setQuery('')} className="p-1 text-[#555555] hover:text-[#1A1A1A] mr-2">
                  <X className="w-4 h-4" />
                </button>
              )}
              <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-xs text-[#555555] bg-[#F8F5EF] border border-[#E7D7B5] rounded font-mono">
                ESC
              </kbd>
            </div>

            {/* Content Body */}
            <div className="p-5 max-h-[60vh] overflow-y-auto space-y-4">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#555555]">
                <span>Financial Planning Topics</span>
                <span className="text-[#C89B3C] font-sora font-bold">SOLAHANA Wealth Desk</span>
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
                        className="w-full text-left p-3.5 rounded-xl border border-[#E7D7B5] bg-[#FCFAF6] hover:bg-[#F8F5EF] hover:border-[#C89B3C] transition-all flex items-center justify-between group cursor-pointer"
                      >
                        <div className="flex items-center space-x-3.5">
                          <div className="p-2 rounded-lg bg-[#C89B3C]/10 border border-[#E7D7B5] group-hover:bg-[#C89B3C] group-hover:text-white transition-colors text-[#C89B3C]">
                            <IconComp className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-[#1A1A1A] group-hover:text-[#C89B3C] transition-colors">
                              {item.title}
                            </p>
                            <span className="text-[10px] text-[#555555] font-mono">
                              {item.category}
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#555555] group-hover:text-[#C89B3C] group-hover:translate-x-1 transition-all" />
                      </button>
                    );
                  })
                ) : (
                  <div className="py-8 text-center text-xs text-[#555555]">
                    No matching financial tools or topics found.
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
