import React, { useEffect } from 'react';
import InvestmentsHero from '../components/investments/InvestmentsHero';
import BuildPortfolioProcess from '../components/investments/BuildPortfolioProcess';
import InvestmentCategories from '../components/investments/InvestmentCategories';
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
      {/* SECTION 1: HERO BANNER & OVERVIEW */}
      <InvestmentsHero 
        onExploreOptions={handleExploreOptions}
        onStartPlanning={onOpenSearch}
      />

      {/* SECTION 2: THE PORTFOLIO METHODOLOGY */}
      <BuildPortfolioProcess />

      {/* SECTION 3: MULTI-ASSET MATRIX */}
      <InvestmentCategories onSelectCategory={onOpenSearch} />

      {/* SECTION 4: CONSULTATION CTA */}
      <InvestmentsCTA 
        onStartPlanning={onOpenSearch}
        onBookConsultation={onOpenSearch}
      />
    </div>
  );
}
