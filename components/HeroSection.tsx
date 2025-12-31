
import React, { useState } from 'react';
import { Star, ChevronRight, CheckCircle2 } from 'lucide-react';
import { PRODUCT_DATA } from '../constants';
import { CODForm } from './CODForm';

interface HeroSectionProps {
  onOrderSuccess: (amount: number) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOrderSuccess }) => {
  const [activeImage, setActiveImage] = useState(PRODUCT_DATA.images[0]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left: Gallery */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 group relative">
            <img 
              src={activeImage} 
              alt="Shilajit Gummies" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              -17% OFF
            </div>
          </div>
          
          <div className="flex overflow-x-auto space-x-4 pb-2 custom-scrollbar">
            {PRODUCT_DATA.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(img)}
                className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-all ${
                  activeImage === img ? 'border-[#0D4B4D] shadow-md scale-95' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Info & Form */}
        <div className="flex flex-col">
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-3">
              <div className="flex text-[#FFB74A]">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <span className="text-sm font-semibold text-gray-500 underline">8 avis clients</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-[#1A1A1A]">
              {PRODUCT_DATA.name}
            </h1>

            <div className="flex items-baseline space-x-3 mb-6">
              <span className="text-3xl font-bold text-[#0D4B4D]">{PRODUCT_DATA.price.toLocaleString()} {PRODUCT_DATA.currency}</span>
              <span className="text-xl text-gray-400 line-through">{PRODUCT_DATA.comparePrice.toLocaleString()} {PRODUCT_DATA.currency}</span>
            </div>

            <div className="bg-[#f9fafb] p-6 rounded-2xl border border-gray-100 space-y-4 mb-8">
              <BenefitItem text="Boost de Testostérone Naturelle" />
              <BenefitItem text="Performance & Énergie Physique" />
              <BenefitItem text="Améliore le Bien-être Masculin" />
              <BenefitItem text="Sommeil Réparateur & Concentration" />
              <BenefitItem text="100% Vegan, HALAL & Sans Sucre Ajouté" />
            </div>
          </div>

          <div id="purchase-form">
            <CODForm onSuccess={onOrderSuccess} />
          </div>

          {/* Accordion Details */}
          <div className="mt-8 border-t border-gray-100 pt-6">
            <DetailAccordion title="Comment les consommer ?" content="Prends simplement 2 gummies par jour, de préférence pendant un repas pour une absorption optimale." />
            <DetailAccordion title="Livraison & Garantie" content="Livraison gratuite en 24/48h partout en Guinée. Paiement à la livraison. Retours sous 7 jours." />
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center space-x-3">
    <CheckCircle2 className="text-[#0D4B4D] flex-shrink-0" size={20} />
    <span className="font-semibold text-sm md:text-base">{text}</span>
  </div>
);

const DetailAccordion: React.FC<{ title: string; content: string }> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left hover:text-[#0D4B4D] transition-colors"
      >
        <span className="font-bold text-base">{title}</span>
        <ChevronRight size={20} className={`transform transition-transform ${isOpen ? 'rotate-90' : ''}`} />
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-600 text-sm leading-relaxed">
          {content}
        </div>
      )}
    </div>
  );
};