
import React, { useEffect, useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VideoTestimonials } from './components/VideoTestimonials';
import { IngredientShowcase } from './components/IngredientShowcase';
import { FAQSection } from './components/FAQSection';
import { TrustBadges } from './components/TrustBadges';
import { Footer } from './components/Footer';
import { ThankYouPage } from './components/ThankYouPage';
import { PRODUCT_DATA } from './constants';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [view, setView] = useState<'landing' | 'thanks'>('landing');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOrderSuccess = (amount: number) => {
    // Facebook Pixel Lead Tracking
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: PRODUCT_DATA.name,
        currency: PRODUCT_DATA.currency,
        value: amount
      });
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setView('thanks');
  };

  const handleBackToStore = () => {
    setView('landing');
  };

  if (view === 'thanks') {
    return <ThankYouPage onBack={handleBackToStore} />;
  }

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] selection:bg-[#0D4B4D] selection:text-white overflow-x-hidden">
      <AnnouncementBar />
      <Navbar />
      
      <main id="main">
        {/* Product Details & Form */}
        <HeroSection onOrderSuccess={handleOrderSuccess} />

        {/* Social Proof Stats */}
        <section className="py-12 bg-white border-y border-gray-100">
           <div className="max-w-7xl mx-auto px-4 text-center">
             <h2 className="text-2xl md:text-4xl font-bold mb-4">
               90% de clients satisfaits, merci pour votre confiance !
             </h2>
             <p className="text-gray-500 max-w-2xl mx-auto">
               Des milliers de clients en Guinée nous font confiance pour leur bien-être quotidien.
             </p>
           </div>
        </section>

        {/* Vertical Video Carousel */}
        <VideoTestimonials />

        {/* Big Banner Image */}
        <section className="w-full">
           <img 
             src="https://vitamiam.shop/cdn/shop/files/shilajit1.jpg?v=1759331256&width=1400" 
             alt="Shilajit Life" 
             className="w-full h-auto object-cover max-h-[800px]"
           />
        </section>

        {/* Ingredients Reveal Section */}
        <IngredientShowcase />

        {/* FAQ */}
        <FAQSection />

        {/* Pre-Footer Trust Icons */}
        <TrustBadges />
      </main>

      <Footer />

      {/* Floating CTA for Mobile */}
      <div className={`fixed bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur shadow-2xl transition-transform duration-300 md:hidden z-50 ${scrollY > 500 ? 'translate-y-0' : 'translate-y-full'}`}>
        <button 
          onClick={() => document.getElementById('purchase-form')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full bg-[#EC1515] text-white py-4 rounded-lg font-bold text-lg animate-bounce shadow-xl"
        >
          COMMANDER MAINTENANT
        </button>
      </div>
    </div>
  );
};

export default App;