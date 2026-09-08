import React, { useEffect } from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutStory from '../components/about/AboutStory';
import AboutMissionVision from '../components/about/AboutMissionVision';
import AboutValues from '../components/about/AboutValues';
import WhySolahanaExists from '../components/about/WhySolahanaExists';
import AboutCTA from '../components/about/AboutCTA';

export default function AboutPage({ onOpenSearch }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleExplorePhilosophy = () => {
    const el = document.getElementById('our-story');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative z-10">
      {/* SECTION 1: HERO BANNER */}
      <AboutHero 
        onExplorePhilosophy={handleExplorePhilosophy}
        onOpenSearch={onOpenSearch}
      />

      {/* SECTION 2: OUR STORY */}
      <AboutStory />

      {/* SECTION 3: MISSION & VISION */}
      <AboutMissionVision />

      {/* SECTION 4: OUR VALUES */}
      <AboutValues />

      {/* SECTION 5: WHY SOLAHANA EXISTS */}
      <WhySolahanaExists />

      {/* SECTION 6: FINAL CTA */}
      <AboutCTA 
        onStartPlanning={onOpenSearch}
        onBookConsultation={onOpenSearch}
      />
    </div>
  );
}
