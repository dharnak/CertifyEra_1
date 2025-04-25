import React from 'react';
import HeroSection from './components/HeroSection';
import AboutWebinar from './components/AboutWebinar';
import SpeakerSection from './components/SpeakerSection';
import BenefitsSection from './components/BenefitsSection';
import BonusesSection from './components/BonusesSection';
import RegisterSection from './components/RegisterSection';
import Footer from './components/Footer';
import ReviewsSection from './components/ReviewsSection';

function App() {
  return (
    <div className="App font-sans">
      <HeroSection />
      <AboutWebinar />
      <SpeakerSection />
      <BenefitsSection />
      <BonusesSection />
      <RegisterSection />
      <ReviewsSection/>
      <Footer />
    </div>
  );
}

export default App;