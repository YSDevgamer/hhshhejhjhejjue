
import React, { useState, useEffect } from 'react';
import { Truck, ShieldCheck, Loader2 } from 'lucide-react';
import { PRODUCT_DATA } from '../constants';

interface CODFormProps {
  onSuccess: (amount: number) => void;
}

export const CODForm: React.FC<CODFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    quantity: 1
  });
  const [isLoading, setIsLoading] = useState(false);
  const [orderDate, setOrderDate] = useState('');

  const VARIANT_PRICE = PRODUCT_DATA.price;
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbys4aeyaoFrTc_jD_yVmOTgbLmhqMLjEqoDTJkJZN76RE0AbNbQHpltximv5Ns1ozLP/exec';

  useEffect(() => {
    const today = new Date();
    setOrderDate(today.toISOString().slice(0, 19).replace('T', ' '));
  }, []);

  const totalCharge = VARIANT_PRICE * formData.quantity;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const data = new FormData();
    data.append('Order date', orderDate);
    data.append('SKU', 'SHILAJIT-8X1-GUMMIES');
    data.append('Product variant', formData.quantity === 2 ? 'Pack 2 Sachets' : 'Single Sachet');
    data.append('Total quantity', formData.quantity.toString());
    data.append('Full name', formData.name);
    data.append('Variant price', VARIANT_PRICE.toString());
    data.append('Total charge', totalCharge.toString());
    data.append('Total shipping fees', '0');
    data.append('Phone', formData.phone);
    data.append('City', formData.city);

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: data,
        mode: 'no-cors'
      });
      
      onSuccess(totalCharge);
    } catch (error) {
      console.error('Submission error:', error);
      alert('Une erreur est survenue lors de l\'envoi de votre commande. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-[#0D4B4D]/10 shadow-xl overflow-hidden transition-all duration-500">
      {/* Form Header */}
      <div className="bg-[#0D4B4D]/5 p-4 border-b border-[#0D4B4D]/10 flex items-center justify-between">
        <span className="font-bold text-[#0D4B4D] flex items-center text-sm md:text-base">
          <Truck className="mr-2" size={18} />
          Commande avec paiement à la livraison
        </span>
        <div className="bg-[#0D4B4D] text-white text-[10px] px-2 py-1 rounded uppercase font-bold tracking-tighter">
          Best Seller
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        {/* Pack Selection */}
        <div className="space-y-3">
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Sélectionnez votre cure</label>
          <div className="grid grid-cols-2 gap-3">
             <button 
               type="button"
               onClick={() => setFormData({...formData, quantity: 1})}
               className={`p-4 rounded-xl border-2 text-center transition-all duration-300 flex flex-col items-center justify-center space-y-1 ${
                 formData.quantity === 1 
                 ? 'border-[#0D4B4D] bg-[#0D4B4D]/5 ring-4 ring-[#0D4B4D]/10' 
                 : 'border-gray-100 bg-white hover:border-gray-300'
               }`}
             >
               <div className="font-extrabold text-lg text-gray-800">1 Sachet</div>
               <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Cure 1 mois</div>
             </button>

             <button 
               type="button"
               onClick={() => setFormData({...formData, quantity: 2})}
               className={`p-4 rounded-xl border-2 text-center transition-all duration-300 relative flex flex-col items-center justify-center space-y-1 ${
                 formData.quantity === 2 
                 ? 'border-[#0D4B4D] bg-[#0D4B4D]/5 ring-4 ring-[#0D4B4D]/10' 
                 : 'border-gray-100 bg-white hover:border-gray-300'
               }`}
             >
               <span className="absolute -top-3 -right-1 bg-red-600 text-white text-[9px] px-2 py-0.5 rounded-full font-black shadow-lg shadow-red-600/20">
                 OFFRE -45%
               </span>
               <div className="font-extrabold text-lg text-gray-800">2 Sachets</div>
               <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest text-[#0D4B4D]">Meilleur Choix</div>
             </button>
          </div>
          <div className="flex justify-between items-center text-xs pt-2 px-1">
            <span className="text-gray-400 font-medium">Total à payer à la réception:</span>
            <span className="font-black text-[#0D4B4D] text-base">{totalCharge.toLocaleString()} {PRODUCT_DATA.currency}</span>
          </div>
        </div>

        {/* User Info Fields */}
        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="Nom et Prénom" 
            required
            className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-4 focus:ring-[#0D4B4D]/10 focus:border-[#0D4B4D] outline-none transition-all text-lg placeholder:text-gray-300"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input 
            type="tel" 
            placeholder="N° de Téléphone" 
            required
            pattern="[0-9]+"
            className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-4 focus:ring-[#0D4B4D]/10 focus:border-[#0D4B4D] outline-none transition-all text-lg placeholder:text-gray-300"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
          <input 
            type="text" 
            placeholder="Votre Ville" 
            required
            className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-4 focus:ring-[#0D4B4D]/10 focus:border-[#0D4B4D] outline-none transition-all text-lg placeholder:text-gray-300"
            value={formData.city}
            onChange={(e) => setFormData({...formData, city: e.target.value})}
          />
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={isLoading}
          className="group w-full bg-[#EC1515] hover:bg-[#D41212] disabled:bg-gray-300 text-white py-5 rounded-2xl font-black text-xl shadow-xl shadow-red-600/20 transition-all transform hover:-translate-y-1 flex flex-col items-center justify-center leading-none overflow-hidden"
        >
          {isLoading ? (
            <Loader2 className="animate-spin" size={28} />
          ) : (
            <>
              <span className="flex items-center gap-2">
                COMMANDER MAINTENANT
              </span>
              <span className="text-[10px] font-bold mt-1.5 opacity-80 uppercase tracking-widest flex items-center">
                <Truck size={12} className="mr-1" /> Livraison Gratuite en Guinée
              </span>
            </>
          )}
        </button>

        {/* Form Footer */}
        <div className="flex flex-col items-center space-y-2 pt-2">
          <div className="flex items-center space-x-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            <ShieldCheck size={14} className="text-green-600" />
            <span>Transaction 100% Sécurisée</span>
          </div>
          <p className="text-[9px] text-gray-400 text-center leading-tight">
            En cliquant sur "Commander", vous acceptez d'être contacté par téléphone pour la confirmation de votre commande.
          </p>
        </div>
      </form>
    </div>
  );
};