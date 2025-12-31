
import React, { useEffect } from 'react';
import { CheckCircle, Phone, Package, ArrowLeft, ShoppingBag } from 'lucide-react';

interface ThankYouPageProps {
  onBack: () => void;
}

export const ThankYouPage: React.FC<ThankYouPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Mini Header */}
      <div className="p-6 flex justify-center border-b border-gray-100">
        <span className="text-2xl font-black tracking-tighter text-[#0D4B4D] italic uppercase">
          soins<span className="text-[#CDA96A]">vital</span>
        </span>
      </div>

      <div className="flex-1 flex items-center justify-center p-4 py-12">
        <div className="max-w-xl w-full text-center space-y-8">
          <div className="relative inline-block">
             <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-25"></div>
             <div className="relative bg-green-500 text-white p-6 rounded-full inline-flex items-center justify-center">
               <CheckCircle size={48} />
             </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-black text-gray-900 leading-tight italic">
              COMMANDE RÉUSSIE !
            </h1>
            <p className="text-xl text-gray-600 font-medium">
              Merci pour votre confiance. Nous préparons votre colis.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 text-left space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-2xl shadow-sm">
                <Phone className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Confirmation téléphonique</h3>
                <p className="text-sm text-gray-500">Un agent vous appellera dans les plus brefs délais pour confirmer vos informations.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-2xl shadow-sm">
                <Package className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Livraison Express</h3>
                <p className="text-sm text-gray-500">Votre commande sera livrée à votre porte sous 24h à 48h partout en Guinée.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-2xl shadow-sm">
                <ShoppingBag className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Paiement à la livraison</h3>
                <p className="text-sm text-gray-500">Préparez le montant exact en GNF pour le livreur lors de la réception.</p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button 
              onClick={onBack}
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-black transition-all hover:scale-105 shadow-xl"
            >
              <ArrowLeft size={20} />
              Retourner à la boutique
            </button>
          </div>
        </div>
      </div>

      <div className="p-8 border-t border-gray-100 bg-gray-50 text-center">
        <p className="text-gray-400 text-xs">© 2025 soinsvital Guinée - Tous droits réservés.</p>
      </div>
    </div>
  );
};
