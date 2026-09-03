import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  ShoppingCart, 
  Check, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Users, 
  Truck,
  ArrowRight
} from 'lucide-react';

export const BuyTogetherView: React.FC = () => {
  const { groupBuyBundles, joinGroupBuy } = useApp();

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
            <ShoppingCart className="w-3.5 h-3.5 text-amber-700" />
            <span>Demand Aggregation For Household Essentials</span>
          </div>
          <h1 className="font-poppins font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Buy Together. Save Together.
          </h1>
          <p className="font-inter text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
            By pooling orders across 428 society flats, local wholesale suppliers drop bulk packages straight to our society gate at 15% to 35% lower than individual retail grocery apps.
          </p>
        </div>

        {/* How it works 3-pill banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-amber-50/60 p-5 rounded-3xl border border-amber-200/80">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
              1
            </div>
            <div>
              <div className="font-poppins font-bold text-xs text-slate-900">Neighbours Join Pool</div>
              <div className="text-[11px] text-slate-600">Select weekly essentials before cut-off time.</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
              2
            </div>
            <div>
              <div className="font-poppins font-bold text-xs text-slate-900">Direct Wholesale Drop</div>
              <div className="text-[11px] text-slate-600">Farmer cooperatives & Mandis pack fresh crates.</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
              3
            </div>
            <div>
              <div className="font-poppins font-bold text-xs text-slate-900">Pick Up at Society Gate</div>
              <div className="text-[11px] text-slate-600">Collect in the morning with your Flat token.</div>
            </div>
          </div>
        </div>

        {/* Bundles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groupBuyBundles.map((bundle) => {
            const progressPercent = Math.min(100, Math.round((bundle.joinedCount / bundle.targetCount) * 100));

            return (
              <div
                key={bundle.id}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full">
                      {bundle.category}
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-600" />
                      {bundle.closesIn} left
                    </span>
                  </div>

                  <h3 className="font-poppins font-bold text-lg text-slate-900 mb-1">
                    {bundle.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">
                    {bundle.subtitle}
                  </p>

                  {/* Items List */}
                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100 mb-4 space-y-1.5">
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Included in this pack:
                    </div>
                    {bundle.itemsList.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3 h-3 text-amber-600 shrink-0 font-bold" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-1.5 mb-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-800 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-amber-600" />
                        <strong>{bundle.joinedCount}/{bundle.targetCount}</strong> joined
                      </span>
                      <span className="text-[11px] text-amber-700 font-medium">
                        {bundle.targetCount - bundle.joinedCount} more needed
                      </span>
                    </div>

                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-amber-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>

                  {/* Price breakdown */}
                  <div className="flex items-baseline justify-between pt-2 border-t border-slate-100 mb-4">
                    <div>
                      <span className="text-xs text-slate-400 line-through">₹{bundle.individualPrice}</span>
                      <div className="text-[10px] text-slate-400">Regular store</div>
                    </div>
                    <div className="text-right">
                      <span className="font-poppins font-extrabold text-2xl text-amber-700">
                        ₹{bundle.groupPrice}
                      </span>
                      <div className="text-[10px] text-emerald-700 font-bold">
                        Save ₹{bundle.savings}
                      </div>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-500 flex items-center gap-1.5 mb-4">
                    <Truck className="w-3.5 h-3.5 text-slate-400" />
                    <span>Drop: <strong>{bundle.deliveryDay}</strong></span>
                  </div>
                </div>

                <button
                  onClick={() => joinGroupBuy(bundle.id)}
                  className={`w-full py-3 rounded-xl font-poppins font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-sm ${
                    bundle.joinedByYou
                      ? 'bg-amber-100 text-amber-900 border border-amber-300'
                      : 'bg-amber-600 hover:bg-amber-700 text-white shadow-amber-600/20'
                  }`}
                >
                  {bundle.joinedByYou ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Joined (Order Queued)</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-4 h-4" />
                      <span>Join Group Buy</span>
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
