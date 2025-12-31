
import React from 'react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#0D4B4D] text-white py-2 overflow-hidden whitespace-nowrap border-b border-white/10">
      <div className="flex animate-marquee space-x-12">
        <span className="text-xs md:text-sm font-bold tracking-wider uppercase">LIVRAISON GRATUITE EN GUINÉE</span>
        <span className="text-xs md:text-sm font-bold tracking-wider uppercase">SATISFACTION GARANTIE : OU REMBOURSÉ</span>
        <span className="text-xs md:text-sm font-bold tracking-wider uppercase">INGRÉDIENTS 100% NATURELS</span>
        <span className="text-xs md:text-sm font-bold tracking-wider uppercase">LIVRAISON GRATUITE EN GUINÉE</span>
        <span className="text-xs md:text-sm font-bold tracking-wider uppercase">SATISFACTION GARANTIE : OU REMBOURSÉ</span>
        <span className="text-xs md:text-sm font-bold tracking-wider uppercase">INGRÉDIENTS 100% NATURELS</span>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};
