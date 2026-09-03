import React from 'react';
import { useApp } from '../../context/AppContext';
import { ArrowRight, Sparkles, Building2, ShoppingBag } from 'lucide-react';

interface FinalCTAProps {
  onOpenRepairModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenRepairModal }) => {
  const { setCurrentTab } = useApp();

  return (
    <section className="py-20 bg-gradient-to-tr from-slate-950 via-slate-900 to-emerald-950 text-white relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>Socio+ for Residential Societies</span>
        </div>

        <h2 className="font-poppins font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
          Your neighbours are already here.<br />
          <span className="text-emerald-400">Are you in?</span>
        </h2>

        <p className="font-inter text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Join Green Valley Society on Socio+, unlock better collective prices, and make everyday living more joyful, affordable, and secure.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => setCurrentTab('dashboard')}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-poppins font-bold text-sm sm:text-base px-8 py-4 rounded-2xl shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <Building2 className="w-5 h-5" />
            <span>Enter Resident Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setCurrentTab('marketplace')}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-poppins font-semibold text-sm sm:text-base px-8 py-4 rounded-2xl border border-white/20 backdrop-blur-md transition-all cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5 text-purple-300" />
            <span>Explore Marketplace</span>
          </button>
        </div>

        <p className="text-xs text-slate-400 pt-3">
          100% Free for verified apartment residents • Instant KYC verification
        </p>

      </div>
    </section>
  );
};
