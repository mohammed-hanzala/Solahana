import React, { useEffect } from 'react';
import InvestmentsHero from '../components/investments/InvestmentsHero';
import WhyInvestingMatters from '../components/investments/WhyInvestingMatters';
import InvestmentCategories from '../components/investments/InvestmentCategories';
import GoalStrategyTimeline from '../components/investments/GoalStrategyTimeline';
import PortfolioPreview from '../components/investments/PortfolioPreview';
import BuildPortfolioProcess from '../components/investments/BuildPortfolioProcess';
import InvestmentFAQ from '../components/investments/InvestmentFAQ';
import InvestmentsCTA from '../components/investments/InvestmentsCTA';

export default function InvestmentsPage({ onOpenSearch }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleExploreOptions = () => {
    const el = document.getElementById('investment-categories');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative z-10">
      {/* SECTION 1: HERO BANNER */}
      <InvestmentsHero 
        onExploreOptions={handleExploreOptions}
        onStartPlanning={onOpenSearch}
      />

      {/* SECTION 2: WHY INVESTING MATTERS */}
      <WhyInvestingMatters />

      {/* SECTION 3: INVESTMENT CATEGORIES */}
      <InvestmentCategories onSelectCategory={onOpenSearch} />

      {/* SECTION 4: GOAL-BASED INVESTMENT STRATEGY */}
      <GoalStrategyTimeline />

      {/* SECTION 5: DIVERSIFIED PORTFOLIO PREVIEW */}
      <PortfolioPreview />

      {/* SECTION 6: HOW SOLAHANA BUILDS YOUR PORTFOLIO */}
      <BuildPortfolioProcess />

      {/* SECTION 7: INVESTMENT FAQ */}
      <InvestmentFAQ />

      {/* SECTION 8: FINAL CTA */}
      <InvestmentsCTA 
        onStartPlanning={onOpenSearch}
        onBookConsultation={onOpenSearch}
      />
    </div>
  );
}
