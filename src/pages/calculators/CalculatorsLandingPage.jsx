import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  Search, 
  CheckCircle2, 
} from 'lucide-react';
import { CALCULATOR_META } from '../../components/calculators/CalculatorLayout';

export default function CalculatorsLandingPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Investing', 'Loans', 'Retirement', 'Planning', 'Savings'];

  const filteredCalculators = CALCULATOR_META.filter((calc) => {
    const matchesSearch = calc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      calc.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || calc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-28 pb-24 bg-[#FAF8F5] text-[#0F172A] relative overflow-hidden text-left">
      {/* Background Soft Glow */}
      <div className="absolute top-10 left-1/3 w-[600px] h-[600px] bg-[#C89A4B]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header Hero Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gold-badge text-xs font-sora font-semibold text-[#9A7326] uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C89A4B]" />
            <span>SOLAHANA FINTECH SUITE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#0F172A] leading-tight"
          >
            Smart Financial Calculators
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#475569] leading-relaxed font-inter"
          >
            Simulate your wealth growth, compute exact EMIs, calculate retirement FIRE numbers, and test goal feasibility with complete mathematical precision.
          </motion.p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-[#C89A4B]/20 shadow-sm">
          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold font-sora transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0F172A] text-white shadow-md'
                    : 'bg-[#FAF8F5] text-[#475569] hover:bg-white hover:text-[#C89A4B] border border-[#C89A4B]/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search calculator..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FAF8F5] border border-[#C89A4B]/20 rounded-xl pl-9 pr-3 py-2 text-xs text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#C89A4B]"
            />
          </div>
        </div>

        {/* Grid of Calculator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCalculators.map((calc, idx) => {
            const IconComp = calc.icon;
            return (
              <motion.div
                key={calc.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                onClick={() => navigate(calc.path)}
                className="group p-6 rounded-3xl bg-white border border-[#C89A4B]/20 hover:border-[#C89A4B] shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#C89A4B]/10 text-[#C89A4B] group-hover:bg-[#C89A4B] group-hover:text-white transition-colors flex items-center justify-center">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-sora font-semibold text-[#9A7326] px-2.5 py-1 rounded-full bg-[#FAF8F5] border border-[#C89A4B]/20">
                      {calc.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif-luxury font-bold text-[#0F172A] group-hover:text-[#C89A4B] transition-colors">
                      {calc.title}
                    </h3>
                    <p className="text-xs text-[#475569] leading-relaxed mt-2 font-inter">
                      {calc.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#C89A4B]/15 flex items-center justify-between text-xs font-semibold text-[#0F172A] group-hover:text-[#C89A4B]">
                  <span>Launch Tool</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
