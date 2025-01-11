import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import GallerySection from './components/gallery/GallerySection';
import TestimonialsSection from './components/testimonials/TestimonialsSection';
import Portfolio from './components/Portfolio';
import ContactSection from './components/contact/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/chat/WhatsAppButton';
import CookieConsent from './components/cookies/CookieConsent';
import PrivacyPage from './components/privacy/PrivacyPage';

function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  const togglePrivacy = () => {
    setShowPrivacy(!showPrivacy);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onPrivacyClick={togglePrivacy} />
      <div data-main-content className={showPrivacy ? 'hidden' : ''}>
        <Hero />
        <Services />
        <GallerySection />
        <TestimonialsSection />
        <Portfolio />
        <ContactSection />
      </div>
      <div data-privacy-section className={showPrivacy ? 'block' : 'hidden'}>
        <PrivacyPage />
      </div>
      <Footer onPrivacyClick={togglePrivacy} />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
}

export default App;