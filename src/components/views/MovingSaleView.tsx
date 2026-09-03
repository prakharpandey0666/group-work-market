import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Package, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  Plus, 
  Phone,
  Sparkles
} from 'lucide-react';

interface MovingSaleViewProps {
  onOpenSellModal: () => void;
}

export const MovingSaleView: React.FC<MovingSaleViewProps> = ({ onOpenSellModal }) => {
  const { movingSales } = useApp();

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Package className="w-3.5 h-3.5 text-purple-600" />
              <span>Full Apartment Clearance Sales</span>
            </div>
            <h1 className="font-poppins font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Moving Out Sales in Society
            </h1>
            <p className="font-inter text-slate-600 text-sm sm:text-base mt-1">
              Residents moving to other cities offering complete household packages directly to neighbours at massive bundle discounts.
            </p>
          </div>

          <button
            onClick={onOpenSellModal}
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-poppins font-bold text-sm px-6 py-3.5 rounded-2xl shadow-md shadow-purple-600/20 transition-all cursor-pointer shrink-0"
          >
            <Plus className="w-5 h-5" />
            <span>Post Moving Out Sale</span>
          </button>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {movingSales.map((sale) => (
            <div
              key={sale.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-purple-200/90 shadow-soft hover:shadow-card transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                    {sale.totalItems} items in collection
                  </span>
                  <span className="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-600" />
                    <span>{sale.daysLeft} days left</span>
                  </span>
                </div>

                <h3 className="font-poppins font-bold text-xl sm:text-2xl text-slate-900">
                  {sale.title}
                </h3>

                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
                  <span className="font-semibold text-slate-800 flex items-center gap-1">
                    {sale.residentName}
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {sale.tower} • {sale.flat}
                  </span>
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Key Items Available:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {sale.itemHighlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 bg-purple-50/50 rounded-xl border border-purple-100/60">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900">
                  <strong>Special Note:</strong> {sale.pricingNote}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-500 font-medium">
                  {sale.urgency}
                </span>

                <button
                  onClick={() => alert(`Connecting you to ${sale.residentName} (${sale.tower} - ${sale.flat}) to inspect items!`)}
                  className="w-full sm:w-auto px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-poppins font-semibold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer"
                >
                  Contact Resident for Inspection
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
