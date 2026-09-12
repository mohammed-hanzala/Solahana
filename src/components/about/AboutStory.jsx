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
    <section id="our-story" className="py-20 md:py-28 relative overflow-hidden bg-[#F3EFE9] border-y border-[#C89A4B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full gold-badge text-[#9A7326] text-xs font-semibold uppercase tracking-widest font-sora">
            <BookOpen className="w-3.5 h-3.5 text-[#C89A4B]" />
            <span>OUR STORY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#0F172A] tracking-tight">
            Why SOLAHANA Was Created
          </h2>

          <p className="text-base sm:text-lg text-[#475569] font-inter leading-relaxed">
            For years, investors in India have been bombarded with product pitches — insurance policies sold as investments, trending funds without risk context, and speculative hype. SOLAHANA was born out of a simple belief: <span className="text-[#9A7326] font-semibold">Money should be organized around your life goals, not financial products.</span>
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {storySteps.map((step, index) => {
            const IconComp = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-8 rounded-3xl bg-white border border-[#C89A4B]/20 hover:border-[#C89A4B] backdrop-blur-xl shadow-md transition-all space-y-5"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#C89A4B]/10 border border-[#C89A4B]/30 text-[#C89A4B] flex items-center justify-center font-bold">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-sora font-bold text-[#C89A4B]">
                    STAGE {step.step}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-serif-luxury font-bold text-[#0F172A]">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#9A7326] font-sora mt-1 font-medium">
                    {step.subtitle}
                  </p>
                </div>

                <p className="text-sm text-[#475569] font-inter leading-relaxed">
                  {step.description}
                </p>

                <div className="pt-4 border-t border-[#C89A4B]/15 text-xs text-[#0F172A] font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C89A4B]" />
                  <span>{step.highlight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
