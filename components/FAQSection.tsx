
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';

export const FAQSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">FAQ</h2>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <FAQItem key={idx} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem: React.FC<{ faq: { question: string; answer: string } }> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-6 text-left transition-colors ${isOpen ? 'bg-[#0D4B4D]/5 text-[#0D4B4D]' : 'bg-white hover:bg-gray-50'}`}
      >
        <span className="font-bold text-lg">{faq.question}</span>
        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
      </button>
      {isOpen && (
        <div className="p-6 pt-0 bg-[#0D4B4D]/5 text-gray-700 leading-relaxed text-sm md:text-base border-t border-[#0D4B4D]/10">
          {faq.answer}
        </div>
      )}
    </div>
  );
};
