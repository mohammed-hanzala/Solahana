import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  TrendingUp, 
  Calculator, 
  ShieldCheck, 
  Target, 
  PieChart, 
  Building2, 
  Percent, 
  ArrowRight, 
  Sparkles, 
  Search, 
  CheckCircle2, 
  Shield, 
  Sliders
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
    <div className="min-h-screen pt-28 pb-24 bg-[#020B2D] text-[#F8F7F3] relative overflow-hidden text-left">
      {/* Ambient Lighting Layers */}
      <div className="absolute top-10 left-1/3 w-[600px] h-[600px] bg-[#C8A24A]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#071C48]/60 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header Hero Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C8A24A]/10 border border-[#C8A24A]/30 text-xs font-mono text-[#E8C878] uppercase tracking-widest shadow-lg"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C8A24A]" />
            <span>SOLAHANA FINTECH SUITE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Smart Financial Calculators
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-[#BAC6DA] font-light leading-relaxed"
          >
            Plan every financial decision with confidence using SOLAHANA's intelligent planning tools.
          </motion.p>
        </div>

        {/* Search & Filter Bar */}
        <div className="max-w-2xl mx-auto p-2 rounded-2xl bg-[#071C48]/80 border border-[#C8A24A]/30 shadow-2xl backdrop-blur-2xl flex flex-col sm:flex-row items-center gap-2">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-[#C8A24A] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search SIP, EMI, Retirement, Goal Planner..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#020B2D]/80 border border-transparent focus:border-[#C8A24A]/40 rounded-xl py-2.5 pl-10 pr-4 text-white text-xs placeholder-white/40 focus:outline-none transition-colors"
            />
          </div>

          <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#C8A24A] text-[#020B2D] shadow'
                    : 'text-[#BAC6DA] hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Calculator Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCalculators.map((calc, idx) => {
            const CalcIcon = calc.icon;

            return (
              <motion.div
                key={calc.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => navigate(calc.path)}
                className="group relative rounded-3xl bg-gradient-to-b from-[#071C48]/90 via-[#041235]/95 to-[#020B2D] border border-[#C8A24A]/25 hover:border-[#C8A24A]/60 p-6 sm:p-7 shadow-xl hover:shadow-[0_20px_50px_rgba(200,162,74,0.25)] transition-all duration-300 backdrop-blur-2xl flex flex-col justify-between cursor-pointer overflow-hidden"
              >
                {/* Top Subtle Ambient Glow on Hover */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#C8A24A]/10 rounded-full blur-2xl group-hover:bg-[#C8A24A]/25 transition-all duration-500 pointer-events-none" />

                <div className="space-y-4">
                  {/* Icon & Category Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#C8A24A]/15 border border-[#C8A24A]/40 text-[#E8C878] group-hover:bg-[#C8A24A] group-hover:text-[#020B2D] transition-colors flex items-center justify-center shadow-lg">
                      <CalcIcon className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-[#E8C878] px-2.5 py-1 rounded-full bg-[#C8A24A]/10 border border-[#C8A24A]/25">
                      {calc.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5">
                    <h3 className="font-serif-luxury text-xl font-bold text-white group-hover:text-[#E8C878] transition-colors">
                      {calc.title}
                    </h3>
                    <p className="text-xs text-[#BAC6DA] font-light leading-relaxed">
                      {calc.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Calculate Now CTA Button */}
                <div className="pt-6 mt-4 border-t border-[#C8A24A]/15 flex items-center justify-between text-xs font-bold text-[#E8C878] group-hover:text-white transition-colors">
                  <span>Calculate Now</span>
                  <div className="w-8 h-8 rounded-xl bg-[#C8A24A]/15 group-hover:bg-[#C8A24A] text-[#E8C878] group-hover:text-[#020B2D] flex items-center justify-center transition-all group-hover:translate-x-1">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom SEBI Standards Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#071C48] via-[#041235] to-[#020B2D] border border-[#C8A24A]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#C8A24A]/15 border border-[#C8A24A]/40 text-[#E8C878] flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif-luxury text-base font-bold text-white">Institutional Grade Precision</h4>
              <p className="text-xs text-[#BAC6DA] font-light mt-0.5">
                Powered by Solahana's compound interest algorithms, inflation adjustments, and wealth compounding models.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-mono text-[#E8C878] bg-[#C8A24A]/10 border border-[#C8A24A]/30 px-3 py-1.5 rounded-xl">
              100% Free & Private
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
