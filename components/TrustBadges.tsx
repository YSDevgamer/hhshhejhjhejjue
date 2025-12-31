
import React from 'react';
import { Truck, RotateCcw, Headphones, Users } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const badges = [
    { icon: <Truck size={32} />, title: "Livraison offerte", sub: "Sans minimum d’achat" },
    { icon: <RotateCcw size={32} />, title: "Satisfait ou remboursé", sub: "7 jours pour tester" },
    { icon: <Headphones size={32} />, title: "Service client 7/7j", sub: "Support réactif" },
    { icon: <Users size={32} />, title: "+10.000 clients", sub: "Fiers de vous servir" }
  ];

  return (
    <section className="bg-[#0D4B4D] py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {badges.map((b, i) => (
          <div key={i} className="flex flex-col items-center text-center text-white">
            <div className="bg-white/10 p-5 rounded-full mb-4">
              {b.icon}
            </div>
            <h4 className="font-bold text-lg mb-1">{b.title}</h4>
            <p className="text-white/60 text-sm">{b.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
