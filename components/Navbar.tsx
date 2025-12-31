
import React from 'react';
import { ShoppingCart, User, Menu } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 py-3 md:py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button className="md:hidden p-2 text-gray-700">
          <Menu size={24} />
        </button>

        <div className="flex-1 flex justify-center md:justify-start">
          <div className="flex items-center space-x-2">
            <span className="text-2xl md:text-3xl font-black tracking-tighter text-[#0D4B4D] italic uppercase">
              soins<span className="text-[#CDA96A]">vital</span>
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-4 md:space-x-6">
          <a href="#" className="hidden sm:block text-gray-700 hover:text-[#0D4B4D] transition-colors">
            <User size={22} />
          </a>
          <button className="relative p-2 text-gray-700 hover:text-[#0D4B4D] transition-colors">
            <ShoppingCart size={22} />
            <span className="absolute top-0 right-0 bg-[#0D4B4D] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
              1
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};
