import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, TrendingUp, PieChart, ShieldCheck, Sparkles, Target, Wallet, Layers } from 'lucide-react';

export default function InvestmentsHero({ onExploreOptions, onStartPlanning }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#020B2D]">
      {/* Golden Radial Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] bg-gradient-to-br from-[#C8A24A]/20 via-[#071C48]/40 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column — Editorial Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Small Gold Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#071C48]/80 border border-[#C8A24A]/40 text-[#E8C878] text-xs font-semibold uppercase tracking-widest font-sora shadow-[0_0_15px_rgba(200,162,74,0.2)]">
              <Compass className="w-3.5 h-3.5 text-[#C8A24A]" />
              <span>INVESTMENT ADVISORY</span>
            </div>

            {/* Main Editorial Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold text-[#F8F7F3] leading-[1.15] tracking-tight">
              Invest With <span className="text-gradient-gold">Purpose</span>. <br />
              Grow With Discipline.
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-[#BAC6DA] font-inter leading-relaxed max-w-2xl font-normal">
              SOLAHANA helps you choose investment strategies that support your financial goals, timeline and risk profile — without speculative trading or market noise.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreOptions}
                className="gold-glow-button px-8 py-4 rounded-full text-xs sm:text-sm font-bold tracking-wide flex items-center space-x-2.5 group"
              >
                <span>Explore Investment Options</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onStartPlanning}
                className="px-7 py-4 rounded-full text-xs sm:text-sm font-semibold text-[#F8F7F3] hover:text-[#E8C878] bg-[#071C48]/60 hover:bg-[#071C48] border border-[#C8A24A]/30 hover:border-[#C8A24A]/60 transition-all flex items-center space-x-2"
              >
                <span>Start Financial Planning</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#C8A24A]/15 max-w-xl">
              <div>
                <p className="text-xl font-bold font-sora text-[#E8C878]">100%</p>
                <p className="text-xs text-[#BAC6DA] mt-0.5">Zero-Commission Direct</p>
              </div>
              <div>
                <p className="text-xl font-bold font-sora text-[#F8F7F3]">Multi-Asset</p>
                <p className="text-xs text-[#BAC6DA] mt-0.5">Diversified Portfolios</p>
              </div>
              <div>
                <p className="text-xl font-bold font-sora text-[#E8C878]">Annual</p>
                <p className="text-xs text-[#BAC6DA] mt-0.5">LTCG Tax Harvesting</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Premium Wealth Allocation Dashboard Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Dashboard Container Glass Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#071C48]/95 via-[#071C48]/70 to-[#020B2D]/95 border border-[#C8A24A]/35 shadow-[0_20px_60px_rgba(2,11,45,0.9)] backdrop-blur-2xl text-left space-y-6">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[#C8A24A]/15">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E8C878] to-[#B8862B] p-[1px]">
                    <div className="w-full h-full bg-[#020B2D] rounded-[11px] flex items-center justify-center text-[#E8C878]">
                      <PieChart className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#F8F7F3] font-serif-luxury">Wealth Allocation Matrix</h4>
                    <p className="text-[10px] text-[#E8C878] font-sora">SOLAHANA Portfolio</p>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                  BALANCED GROWTH
                </span>
              </div>

              {/* Top Metric: Total Portfolio Growth */}
              <div className="p-4 rounded-2xl bg-[#020B2D]/80 border border-[#C8A24A]/25 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#BAC6DA] uppercase tracking-wider font-sora">Planned Investment Corpus</span>
                  <p className="text-2xl font-bold font-sora text-[#F8F7F3] mt-0.5">₹1,84,50,000</p>
                </div>
                <div className="p-3 rounded-xl bg-[#C8A24A]/15 text-[#E8C878]">
                  <TrendingUp className="w-6 h-6" />
                </div>
              </div>

              {/* 2 Grid Widgets: Monthly SIP & Risk Meter */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Monthly SIP */}
                <div className="p-4 rounded-2xl bg-[#020B2D]/80 border border-[#C8A24A]/20 space-y-2">
                  <span className="text-[11px] text-[#BAC6DA]">Step-Up Monthly SIP</span>
                  <p className="text-base font-bold text-[#E8C878] font-sora">₹75,000 / mo</p>
                  <div className="w-full h-1.5 rounded-full bg-[#071C48] overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#E8C878] to-[#B8862B] w-[82%]" />
                  </div>
                  <span className="text-[10px] text-[#BAC6DA]">10% Step-Up Yearly</span>
                </div>

                {/* Risk Profile */}
                <div className="p-4 rounded-2xl bg-[#020B2D]/80 border border-[#C8A24A]/20 space-y-2">
                  <span className="text-[11px] text-[#BAC6DA]">Risk Alignment</span>
                  <p className="text-base font-bold text-[#F8F7F3] font-sora">Moderate Growth</p>
                  <div className="w-full h-1.5 rounded-full bg-[#071C48] overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-400 to-[#E8C878] w-[65%]" />
                  </div>
                  <span className="text-[10px] text-emerald-400">Optimal Volatility Shield</span>
                </div>

              </div>

              {/* Goal Progress Bar Card */}
              <div className="p-4 rounded-2xl bg-[#020B2D]/80 border border-[#C8A24A]/20 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#F8F7F3] font-semibold flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-[#C8A24A]" />
                    Tax Efficient Allocation
                  </span>
                  <span className="text-[#E8C878] text-[11px] font-sora">Sec 80C + LTCG Active</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-sora">
                  <div className="p-2 rounded-lg bg-[#071C48] border border-[#C8A24A]/20">
                    <p className="text-[#BAC6DA]">Equity MFs</p>
                    <p className="text-[#E8C878] font-bold mt-0.5">65%</p>
                  </div>
                  <div className="p-2 rounded-lg bg-[#071C48] border border-[#C8A24A]/20">
                    <p className="text-[#BAC6DA]">AAA Bonds</p>
                    <p className="text-[#E8C878] font-bold mt-0.5">25%</p>
                  </div>
                  <div className="p-2 rounded-lg bg-[#071C48] border border-[#C8A24A]/20">
                    <p className="text-[#BAC6DA]">Gold/SGB</p>
                    <p className="text-[#E8C878] font-bold mt-0.5">10%</p>
                  </div>
                </div>
              </div>

              {/* Bottom Footer */}
              <div className="pt-3 border-t border-[#C8A24A]/15 flex items-center justify-between text-[11px] text-[#BAC6DA]">
                <span>No Trading • No Speculation</span>
                <span className="text-[#E8C878] font-semibold font-sora">Long-Term Wealth</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
