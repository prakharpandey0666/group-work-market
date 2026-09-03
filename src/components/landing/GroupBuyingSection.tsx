import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  ShoppingCart, 
  Check, 
  Sparkles, 
  Clock, 
  ArrowRight, 
  Users,
  ShieldCheck 
} from 'lucide-react';

export const GroupBuyingSection: React.FC = () => {
  const { groupBuyBundles, joinGroupBuy, setCurrentTab } = useApp();

  const essentialsBundle = groupBuyBundles[0]; // Weekly Breakfast & Kitchen Staples

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50/50 via-amber-50/20 to-white border-t border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <ShoppingCart className="w-3.5 h-3.5 text-amber-700" />
            <span>Demand Aggregation For Groceries</span>
          </div>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Buy Together.<br />
            <span className="text-amber-600">Save Together.</span>
          </h2>
          <p className="font-inter text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            One combined society order helps local suppliers and wholesale mandi distributors serve our towers in a single morning drop — passing massive wholesale savings back to residents.
          </p>
        </div>

        {/* Featured Weekly Essentials Box */}
        {essentialsBundle && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-amber-200/90 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Details & Products included */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold bg-amber-100 text-amber-900 px-3 py-1 rounded-full">
                    {essentialsBundle.badge}
                  </span>
                  <span className="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-600" />
                    <span>Closes in {essentialsBundle.closesIn}</span>
                  </span>
                </div>

                <div>
                  <h3 className="font-poppins font-bold text-2xl sm:text-3xl text-slate-900">
                    {essentialsBundle.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    {essentialsBundle.subtitle}
                  </p>
                </div>

                {/* Products List Pills */}
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5">
                    What's inside this weekly society basket:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {essentialsBundle.itemsList.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 rounded-xl bg-amber-50/50 border border-amber-100">
                        <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 font-bold" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress bar */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-800 flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-amber-600" />
                      <strong>{essentialsBundle.joinedCount}/{essentialsBundle.targetCount}</strong> neighbours joined
                    </span>
                    <span className="text-amber-700">
                      {essentialsBundle.targetCount - essentialsBundle.joinedCount} more needed for wholesale drop
                    </span>
                  </div>

                  <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-amber-500 to-amber-600 h-2.5 rounded-full transition-all duration-500"
                      style={{
                        width: `${Math.round((essentialsBundle.joinedCount / essentialsBundle.targetCount) * 100)}%`
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Price & Interactive Join Action */}
              <div className="lg:col-span-5 bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 rounded-3xl p-6 sm:p-8 text-white space-y-6 shadow-xl">
                <div>
                  <span className="text-xs uppercase tracking-wider text-amber-200 font-bold">
                    Demand Aggregation Savings
                  </span>
                  
                  <div className="flex items-baseline gap-3 mt-3">
                    <span className="text-base text-amber-200 line-through">₹{essentialsBundle.individualPrice}</span>
                    <span className="font-poppins font-extrabold text-4xl text-white">
                      ₹{essentialsBundle.groupPrice}
                    </span>
                    <span className="text-xs text-amber-100">/ household</span>
                  </div>

                  <div className="mt-2 inline-flex items-center gap-1 bg-white/20 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-full">
                    <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                    <span>You save ₹{essentialsBundle.savings} automatically</span>
                  </div>
                </div>

                <div className="text-xs text-amber-100 space-y-1.5 border-t border-amber-400/40 pt-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-200 shrink-0" />
                    <span>Free gate-level drop • Verified Quality</span>
                  </div>
                  <div>Delivery scheduled for: <strong>{essentialsBundle.deliveryDay}</strong></div>
                </div>

                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => joinGroupBuy(essentialsBundle.id)}
                    className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-poppins font-bold text-sm transition-all cursor-pointer shadow-lg ${
                      essentialsBundle.joinedByYou
                        ? 'bg-amber-950 text-amber-200'
                        : 'bg-white hover:bg-amber-50 text-slate-900 shadow-amber-900/20'
                    }`}
                  >
                    {essentialsBundle.joinedByYou ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Joined Group Buy</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-4 h-4 text-amber-600" />
                        <span>Join Group Buy</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => setCurrentTab('buy-together')}
                    className="w-full text-center text-xs font-semibold text-amber-200 hover:text-white py-1 cursor-pointer transition-colors"
                  >
                    View All Society Grocery Bundles →
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
