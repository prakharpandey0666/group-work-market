import React from 'react';
import { useApp } from '../../context/AppContext';
import { Building2, Shield, Heart, Sparkles, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentTab, setRole } = useApp();

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-emerald-400 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-poppins font-extrabold text-2xl tracking-tight text-white">
                Socio<span className="text-emerald-400">+</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              The community-first residential commerce platform. Aggregating demand inside apartment societies so neighbours can repair appliances together, unlock wholesale bulk grocery savings, and buy & sell second-hand safely.
            </p>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 font-semibold text-emerald-400">
                <Shield className="w-4 h-4" />
                <span>Verified Society Protection</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-normal">
                Restricted to verified apartment residents. Zero anonymous spam, 100% price transparency, and genuine society recommendations.
              </p>
            </div>
          </div>

          {/* Col 3: Platform Solutions */}
          <div>
            <h4 className="font-poppins font-semibold text-white text-sm tracking-wide mb-4 uppercase text-xs">
              Platform Modules
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => setCurrentTab('services')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Repair Together (AC, Fridge, RO)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentTab('buy-together')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Buy Together (Groceries & Staples)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentTab('marketplace')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Second-Hand Marketplace
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentTab('moving-sale')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Moving Out Clearance Sales
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentTab('community')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Society Noticeboard & Events
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: For Communities */}
          <div>
            <h4 className="font-poppins font-semibold text-white text-sm tracking-wide mb-4 uppercase text-xs">
              For Communities
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => { setRole('provider'); setCurrentTab('provider-jobs'); }}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span>Become a Verified Provider</span>
                  <span className="text-[10px] bg-blue-900/60 text-blue-300 px-1.5 py-0.5 rounded">Mechanics</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setRole('admin'); setCurrentTab('admin'); }}
                  className="hover:text-purple-400 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span>RWA Society Admin Console</span>
                  <span className="text-[10px] bg-purple-900/60 text-purple-300 px-1.5 py-0.5 rounded">RWA</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentTab('how-it-works')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  How Demand Aggregation Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentTab('dashboard')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Resident Dashboard
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Society Contact & Support */}
          <div>
            <h4 className="font-poppins font-semibold text-white text-sm tracking-wide mb-4 uppercase text-xs">
              Society Care
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Green Valley Society, Sector 45, Gurugram / NCR</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>1800-SOCIO-PLUS (Toll Free)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>support@socioplus.in</span>
              </div>

              <div className="pt-2">
                <div className="inline-flex items-center gap-1.5 bg-emerald-950/60 border border-emerald-800/50 text-emerald-300 px-3 py-1.5 rounded-xl text-xs font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>₹2Cr+ Saved by Indian Societies</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Socio+ Technologies Pvt Ltd. All rights reserved.</span>
          </div>

          <div className="font-poppins font-semibold text-emerald-400 text-sm">
            Better together. Better living.
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="hover:text-slate-200 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-200 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-slate-200 cursor-pointer">Resident Guidelines</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
