
import React from 'react';
import { Send } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D4B4D] pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
        
        <div className="space-y-6">
          <h4 className="text-white font-bold text-2xl">Nous contacter</h4>
          <div className="text-white/70 space-y-2">
            <p>Représentant légal Guinée</p>
            <p>Par téléphone : <span className="underline decoration-[#CDA96A] text-white font-bold">06 87 16 25 72</span></p>
            <p>Disponible du Lundi au Samedi de 9h à 19h</p>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-white font-bold text-2xl">Recevez nos dernières offres.</h4>
          <div className="relative max-w-md">
            <input 
              type="email" 
              placeholder="Votre adresse email" 
              className="w-full bg-white/5 border border-white/20 rounded-full px-6 py-4 text-white outline-none focus:border-[#CDA96A] transition-colors"
            />
            <button className="absolute right-2 top-2 bg-[#CDA96A] text-black w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 transition-transform">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <p className="text-white/40 text-sm">
          © 2025, soinsvital. Tous droits réservés.
        </p>
        <div className="flex space-x-6">
           <span className="text-xl font-black tracking-tighter text-white/50 italic uppercase">
             soins<span className="text-[#CDA96A]/50">vital</span>
           </span>
        </div>
      </div>
    </footer>
  );
};
