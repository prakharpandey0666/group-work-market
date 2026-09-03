import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  ArrowRight, 
  ShieldCheck, 
  Wrench, 
  ShoppingCart, 
  Repeat, 
  Sparkles, 
  Coins, 
  Users,
  CheckCircle2
} from 'lucide-react';

interface HeroProps {
  onOpenRepairModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRepairModal }) => {
  const { setCurrentTab } = useApp();

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-white via-slate-50/50 to-[#F8FAFC]">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-100/40 via-teal-50/30 to-purple-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Copy, Actions */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>The Society Commerce Platform</span>
              <span className="text-emerald-400">•</span>
              <span className="text-emerald-700">Green Valley Society</span>
            </div>

            {/* Headline */}
            <h1 className="font-poppins font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.12]">
              Your Society,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600">
                Stronger Together.
              </span>
            </h1>

            {/* Supporting copy */}
            <p className="font-inter text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Repair, buy, sell and save with your neighbours. Everything your apartment society needs, in one trusted platform.
            </p>

            {/* Value Proposition bullets */}
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm font-medium text-slate-700 max-w-md mx-auto lg:mx-0 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Group Appliance Repairs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Bulk Grocery Savings</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Verified Flat Marketplace</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Unknown Strangers</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onOpenRepairModal}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-poppins font-bold text-sm sm:text-base px-7 py-3.5 rounded-2xl shadow-xl shadow-emerald-600/25 hover:shadow-emerald-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-emerald-200" />
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setCurrentTab('services')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-poppins font-semibold text-sm sm:text-base px-6 py-3.5 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all cursor-pointer"
              >
                <span>Explore Services</span>
              </button>
            </div>

            {/* Trust line */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-2 text-xs text-slate-500">
              <div className="flex -space-x-2 overflow-hidden">
                {['RS', 'NS', 'AV', 'PS'].map((initials, idx) => (
                  <div 
                    key={idx} 
                    className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-slate-200 text-slate-700 font-bold text-[10px] flex items-center justify-center"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <span>Joined by <strong>428 verified residents</strong> in your society</span>
            </div>

          </div>

          {/* Right Column: Hero Visual with Floating Demand Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xl bg-white p-2">
              <img
                src="/assets/hero-community.jpg"
                alt="Socio+ Indian apartment society residents repairing, buying, selling, and saving together"
                className="w-full h-auto rounded-2xl object-cover"
              />

              {/* Floating Badge 1: Repair Together (Top Left) */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-slate-100 flex items-center gap-2.5 animate-bounce duration-1000 hidden sm:flex">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-900">AC Repair Group</div>
                  <div className="text-[10px] text-emerald-700 font-semibold">5 Neighbours Joined • Save ₹170</div>
                </div>
              </div>

              {/* Floating Badge 2: Buy Together (Bottom Left) */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-slate-100 flex items-center gap-2.5 hidden sm:flex">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                  <ShoppingCart className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-900">Weekly Grocery Pool</div>
                  <div className="text-[10px] text-amber-700 font-semibold">18 Residents • ₹420/share</div>
                </div>
              </div>

              {/* Floating Badge 3: Verified Community (Top Right) */}
              <div className="absolute top-6 right-6 bg-slate-900/90 backdrop-blur-md rounded-2xl px-3 py-2 text-white shadow-xl flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-[11px] font-semibold">Verified Society</span>
              </div>

              {/* Floating Badge 4: Savings (Bottom Right) */}
              <div className="absolute bottom-6 right-6 bg-emerald-600 text-white rounded-2xl p-3 shadow-xl flex items-center gap-2">
                <Coins className="w-5 h-5 text-emerald-200" />
                <div className="text-left">
                  <div className="text-[9px] uppercase tracking-wider text-emerald-200 font-bold">Collective Savings</div>
                  <div className="font-poppins font-extrabold text-sm">₹18,450 Saved</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
