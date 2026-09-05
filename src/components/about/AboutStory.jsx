import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle2, Milestone, RefreshCw, Layers } from 'lucide-react';

export default function AboutStory() {
  const storySteps = [
    {
      step: '01',
      title: 'Understanding Finances',
      subtitle: 'Mapping total clarity across all assets & liabilities',
      description: 'Most investors hold fragmented fixed deposits, mutual funds, and insurance policies across multiple apps without knowing if they add up to real financial security. We begin by organizing your complete financial landscape into one clear, transparent snapshot.',
      icon: Layers,
      highlight: 'From Fragmented Accounts to Total Clarity'
    },
    {
      step: '02',
      title: 'Building a Roadmap',
      subtitle: 'Translating life ambitions into inflation-adjusted goals',
      description: 'Instead of chasing speculative returns, we anchor every rupee to concrete life goals — early retirement, children’s overseas education, property purchases, or tax savings. Every goal gets its own dedicated timeline and target corpus.',
      icon: Milestone,
      highlight: 'Goals First, Products Second'
    },
    {
      step: '03',
      title: 'Planning Consistently',
      subtitle: 'Executing systematic step-up SIPs and tax harvesting',
      description: 'Wealth accumulation is not built on market timing, but on systematic discipline. We construct tax-efficient portfolios with automated step-up investments, tax-loss harvesting, and risk-managed asset allocation.',
      icon: CheckCircle2,
      highlight: 'Disciplined Execution Over Market Timing'
    },
    {
      step: '04',
      title: 'Reviewing Regularly',
      subtitle: 'Adapting your plan through life changes and market cycles',
      description: 'Life isn’t static — career promotions, marriage, child births, and market shifts require plan adjustments. We conduct structured quarterly and annual reviews to ensure your strategy stays continuously aligned with your evolving life.',
      icon: RefreshCw,
      highlight: 'Ongoing Fiduciary Care'
    }
  ];

  return (
    <section id="our-story" className="py-20 md:py-28 relative overflow-hidden bg-[#071C48]/30 border-y border-[#C8A24A]/15">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C8A24A]/10 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#071C48] border border-[#C8A24A]/30 text-[#E8C878] text-xs font-semibold uppercase tracking-widest font-sora">
            <BookOpen className="w-3.5 h-3.5 text-[#C8A24A]" />
            <span>OUR STORY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#F8F7F3] tracking-tight">
            Why SOLAHANA Was Created
          </h2>

          <p className="text-base sm:text-lg text-[#BAC6DA] font-inter leading-relaxed">
            For years, investors in India have been bombarded with product pitches — insurance policies sold as investments, trending funds without risk context, and speculative hype. SOLAHANA was born out of a simple belief: <span className="text-[#E8C878] font-medium">Money should be organized around your life goals, not financial products.</span>
          </p>
        </div>

        {/* Alternate Story Timeline Cards */}
        <div className="space-y-12">
          {storySteps.map((item, index) => {
            const IconComponent = item.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 rounded-3xl bg-[#071C48]/60 border border-[#C8A24A]/25 hover:border-[#C8A24A]/50 transition-all duration-300 backdrop-blur-xl shadow-[0_10px_30px_rgba(2,11,45,0.6)] ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Text Content Column */}
                <div className={`lg:col-span-7 space-y-4 text-left ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center space-x-3">
                    <span className="px-3 py-1 rounded-lg bg-[#C8A24A]/20 border border-[#E8C878]/40 text-[#E8C878] font-sora font-bold text-xs">
                      PHASE {item.step}
                    </span>
                    <span className="text-xs font-semibold text-[#BAC6DA] font-mono uppercase tracking-wider">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#F8F7F3]">
                    {item.title}
                  </h3>

                  <p className="text-sm font-semibold text-[#E8C878]">
                    {item.subtitle}
                  </p>

                  <p className="text-sm text-[#BAC6DA] leading-relaxed font-inter">
                    {item.description}
                  </p>
                </div>

                {/* Visual Accent Column */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="p-6 rounded-2xl bg-[#020B2D]/80 border border-[#C8A24A]/20 flex flex-col items-center justify-center text-center space-y-4 relative group">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E8C878]/20 to-[#C8A24A]/10 border border-[#E8C878]/40 flex items-center justify-center text-[#E8C878] group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(200,162,74,0.2)]">
                      <IconComponent className="w-8 h-8 text-[#E8C878]" />
                    </div>

                    <div className="space-y-1">
                      <span className="text-xs font-sora uppercase tracking-widest text-[#BAC6DA]">
                        SOLAHANA PRINCIPLE
                      </span>
                      <p className="text-sm font-bold text-[#F8F7F3]">
                        {item.highlight}
                      </p>
                    </div>

                    <div className="w-full pt-3 border-t border-[#C8A24A]/15 flex items-center justify-between text-[11px] text-[#BAC6DA]">
                      <span>Outcome:</span>
                      <span className="text-[#E8C878] font-semibold">100% Peace of Mind</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
