import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Building2, 
  Wrench, 
  TrendingDown, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  ShieldCheck, 
  Sparkles,
  ShoppingBag,
  ShoppingCart
} from 'lucide-react';

interface HowItWorksViewProps {
  onOpenRepairModal: () => void;
}

export const HowItWorksView: React.FC<HowItWorksViewProps> = ({ onOpenRepairModal }) => {
  const { setCurrentTab } = useApp();

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>The Power of Demand Aggregation</span>
          </div>
          <h1 className="font-poppins font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight">
            How Socio+ Transforms Society Living
          </h1>
          <p className="font-inter text-slate-600 text-base sm:text-lg leading-relaxed">
            In typical apartment societies, hundreds of residents independently call different mechanics, order from fragmented delivery apps, and buy new items when neighbours are selling barely-used ones.
          </p>
        </div>

        {/* The Traditional Broken Way vs Socio+ Demand Aggregation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* The Broken Way */}
          <div className="bg-white rounded-3xl p-8 border border-rose-200/80 shadow-soft space-y-6">
            <div className="flex items-center gap-3 text-rose-700">
              <div className="w-10 h-10 rounded-2xl bg-rose-50 flex items-center justify-center">
                <XCircle className="w-6 h-6" />
              </div>
              <h2 className="font-poppins font-bold text-xl text-slate-900">
                The Traditional Way
              </h2>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold mt-0.5">✕</span>
                <span><strong>5 separate trips:</strong> 5 mechanics travel 15km each to visit the same society on different days.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold mt-0.5">✕</span>
                <span><strong>High travel & acquisition markup:</strong> You pay ₹650+ for a simple AC jet spray because the technician covers heavy fuel & platform commission.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold mt-0.5">✕</span>
                <span><strong>Unknown strangers in society:</strong> Unvetted third-party handymen entering without resident background checks.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold mt-0.5">✕</span>
                <span><strong>No bargaining power:</strong> Lone residents have zero leverage when dealing with spare part pricing.</span>
              </li>
            </ul>

            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-100 text-xs text-rose-800 font-medium">
              Result: Higher costs, wasted fuel, repeated society gate security hassles, and zero savings.
            </div>
          </div>

          {/* The Socio+ Way */}
          <div className="bg-white rounded-3xl p-8 border border-emerald-300 shadow-card space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-600 text-white font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-bl-xl">
              Demand Aggregation
            </div>

            <div className="flex items-center gap-3 text-emerald-700">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h2 className="font-poppins font-bold text-xl text-slate-900">
                The Socio+ Way
              </h2>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                <span><strong>1 coordinated visit:</strong> 1 top-rated verified mechanic serves 5–8 neighbours in the same tower sequentially.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                <span><strong>Wholesale group discount:</strong> Price drops from ₹650 to ₹480/person. You save ₹170 automatically!</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                <span><strong>Trusted community rating:</strong> Technicians build long-term relationships with the society RWA.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                <span><strong>Works across everything:</strong> Groceries, AC repairs, RO purifier filters, and moving out sales.</span>
              </li>
            </ul>

            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-bold">
              Result: 20% to 35% savings on home expenses, greener society, and stronger neighbour trust.
            </div>
          </div>

        </div>

        {/* 4 Multi-Step Process Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-slate-900">
              Four Simple Steps to Massive Society Savings
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Engineered specifically for Indian high-rise gated communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-soft">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center mb-3">
                01
              </div>
              <h3 className="font-poppins font-bold text-base text-slate-900 mb-1">
                Raise Request
              </h3>
              <p className="text-xs text-slate-500">
                Choose your appliance, describe the problem, and pick your preferred day.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-soft">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center mb-3">
                02
              </div>
              <h3 className="font-poppins font-bold text-base text-slate-900 mb-1">
                AI Neighbour Match
              </h3>
              <p className="text-xs text-slate-500">
                Socio+ searches across all towers for flats with similar service needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-soft">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center mb-3">
                03
              </div>
              <h3 className="font-poppins font-bold text-base text-slate-900 mb-1">
                Group Locks In
              </h3>
              <p className="text-xs text-slate-500">
                As neighbours join, live countdown timers tick down and the per-flat price drops.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-soft">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center mb-3">
                04
              </div>
              <h3 className="font-poppins font-bold text-base text-slate-900 mb-1">
                Repairs Done & Save
              </h3>
              <p className="text-xs text-slate-500">
                Verified provider services all units smoothly in one scheduled trip.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-slate-900 to-emerald-950 rounded-3xl p-8 text-center text-white space-y-4">
          <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-white">
            Ready to experience demand aggregation?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            Join 428 neighbours in Green Valley Society already saving on repairs and essentials.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenRepairModal}
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-poppins font-bold text-sm px-8 py-3.5 rounded-2xl shadow-lg transition-all cursor-pointer"
            >
              Raise a Repair Request Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
