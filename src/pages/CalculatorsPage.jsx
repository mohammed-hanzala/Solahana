import React, { useEffect } from 'react';
import CalculatorsHero from '../components/calculators/CalculatorsHero';
import CalculatorCategoriesGrid from '../components/calculators/CalculatorCategoriesGrid';
import FeaturedCalculators from '../components/calculators/FeaturedCalculators';
import InteractiveCalculatorPreview from '../components/calculators/InteractiveCalculatorPreview';
import { WhyUseCalculators } from '../components/calculators/WhyUseCalculators';
import { PopularTools } from '../components/calculators/PopularTools';
import { CalculatorsFAQ } from '../components/calculators/CalculatorsFAQ';
import { CalculatorsCTA } from '../components/calculators/CalculatorsCTA';

export const CalculatorsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Financial Calculators | SOLAHANA — Wealth Planning Hub";
  }, []);

  return (
    <main className="min-h-screen bg-[#020B2D] text-white selection:bg-[#C8A24A]/30 selection:text-[#E8C878]">
      {/* 1 Hero Banner */}
      <CalculatorsHero />

      {/* 2 Calculator Categories */}
      <div id="calculator-categories">
        <CalculatorCategoriesGrid />
      </div>

      {/* 3 Featured Calculators */}
      <FeaturedCalculators />

      {/* 4 Interactive Calculator Preview */}
      <div id="interactive-preview">
        <InteractiveCalculatorPreview />
      </div>

      {/* 5 Why Use Financial Calculators */}
      <WhyUseCalculators />

      {/* 6 Popular Planning Tools */}
      <PopularTools />

      {/* 7 FAQ */}
      <CalculatorsFAQ />

      {/* 8 Final CTA */}
      <CalculatorsCTA />
    </main>
  );
};
