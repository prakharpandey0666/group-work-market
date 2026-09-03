import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Package, 
  Clock, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface MovingSaleSectionProps {
  onOpenSellModal: () => void;
}

export const MovingSaleSection: React.FC<MovingSaleSectionProps> = ({ onOpenSellModal }) => {
  const { movingSales, setCurrentTab } = useApp();

  const sale = movingSales[0]; // "Relocating to Bengaluru - Complete 3BHK Clearance"

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50/70 via-purple-50/40 to-white border-t border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Package className="w-3.5 h-3.5 text-purple-600" />
            <span>Society Moving Out Clearance</span>
          </div>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Moving Out?<br />
            <span className="text-purple-700">Sell everything to your neighbours.</span>
          </h2>
          <p className="font-inter text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            No expensive packers for bulky furniture. Create an "Everything Must Go" bundle so neighbours can pick up pre-loved items before flat handover.
          </p>
        </div>

        {/* Featured Moving Out Card */}
        {sale && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-purple-200/90 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-xs font-bold bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                    {sale.totalItems} items listed
                  </span>
                  <span className="text-xs font-bold bg-amber-100 text-amber-800 px-3 py-1 rounded-full flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{sale.daysLeft} days left</span>
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {sale.urgency}
                  </span>
                </div>

                <div>
                  <h3 className="font-poppins font-bold text-2xl sm:text-3xl text-slate-900 leading-snug">
                    {sale.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mt-2">
                    <div className="font-semibold text-slate-800 flex items-center gap-1">
                      <span>{sale.residentName}</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {sale.tower} • {sale.flat}
                    </span>
                  </div>
                </div>

                {/* Items Highlights Pill Grid */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Available Items in this Collection:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {sale.itemHighlights.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-purple-50/50 border border-purple-100/70">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900">
                  <strong>Neighbour Perks:</strong> {sale.pricingNote}
                </div>
              </div>

              {/* Right Column: CTA & Visual Card */}
              <div className="lg:col-span-5 bg-gradient-to-br from-purple-700 to-purple-900 rounded-3xl p-6 sm:p-8 text-white space-y-6 shadow-xl">
                <div>
                  <span className="text-xs uppercase tracking-wider text-purple-200 font-bold">
                    Need to relocate soon?
                  </span>
                  <h4 className="font-poppins font-extrabold text-2xl text-white mt-1">
                    Clear Your Apartment Without Hassle
                  </h4>
                  <p className="text-xs sm:text-sm text-purple-200 mt-2 leading-relaxed">
                    Post your full list of household items. Neighbours inspect downstairs and transfer via UPI instantly.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <button
                    onClick={onOpenSellModal}
                    className="w-full flex items-center justify-center gap-2 bg-white hover:bg-purple-50 text-purple-950 font-poppins font-bold text-sm py-3.5 rounded-2xl shadow-lg transition-all cursor-pointer"
                  >
                    <Package className="w-4 h-4 text-purple-700" />
                    <span>Create Moving Sale</span>
                  </button>

                  <button
                    onClick={() => setCurrentTab('moving-sale')}
                    className="w-full text-center text-xs font-semibold text-purple-200 hover:text-white py-1 cursor-pointer transition-colors"
                  >
                    View All Moving Sales in Green Valley →
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
