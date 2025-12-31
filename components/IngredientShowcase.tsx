
import React from 'react';
import { INGREDIENTS } from '../constants';

export const IngredientShowcase: React.FC = () => {
  return (
    <section className="bg-[#CDA96A] py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
           <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
             Une formule simple, des ingrédients qui font la différence
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INGREDIENTS.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-3xl shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative mb-6">
                <div className="absolute -top-4 -left-4 text-7xl font-black text-[#CDA96A]/20">
                  {item.number}
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden relative z-10 border border-gray-100">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-[#1A1A1A]">{item.title}</h3>
              <ul className="space-y-3">
                {item.description.map((desc, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-600 leading-relaxed">
                    <span className="mr-2 text-[#CDA96A]">•</span>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Floating Call to Action */}
        <div className="mt-20 text-center">
           <div className="prose prose-lg mx-auto text-black/80 max-w-2xl mb-8">
             <p className="text-xl md:text-2xl font-bold italic">
               "2 gummies par jour suffisent pour dire adieu à la fatigue, au stress et au manque de vitalité."
             </p>
           </div>
           <button 
             onClick={() => document.getElementById('purchase-form')?.scrollIntoView({ behavior: 'smooth' })}
             className="bg-[#1A1A1A] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-black transition-all hover:scale-105 shadow-2xl"
           >
             COMMENCER MA CURE
           </button>
        </div>
      </div>
    </section>
  );
};
