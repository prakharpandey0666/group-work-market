import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Home, Wrench, Plus, ShoppingBag, User, X, Sparkles, ShoppingCart, Tag } from 'lucide-react';
import { NavigationTab } from '../../types';

interface BottomNavigationProps {
  onOpenRepairModal: () => void;
  onOpenSellModal: () => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  onOpenRepairModal,
  onOpenSellModal
}) => {
  const { currentTab, setCurrentTab } = useApp();
  const [isActionSheetOpen, setIsActionSheetOpen] = useState(false);

  const handleTabClick = (tab: NavigationTab) => {
    setCurrentTab(tab);
    setIsActionSheetOpen(false);
  };

  return (
    <>
      {/* Action Sheet Backdrop */}
      {isActionSheetOpen && (
        <div 
          onClick={() => setIsActionSheetOpen(false)}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 lg:hidden animate-in fade-in duration-200"
        />
      )}

      {/* Floating Action Modal/Sheet */}
      {isActionSheetOpen && (
        <div className="fixed bottom-20 left-4 right-4 bg-white rounded-3xl p-5 shadow-2xl border border-slate-200 z-50 lg:hidden animate-in slide-in-from-bottom-6 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="font-poppins font-bold text-base text-slate-900">
                Society Quick Actions
              </h3>
              <p className="text-xs text-slate-500">
                Green Valley Society (Tower B - 402)
              </p>
            </div>
            <button
              onClick={() => setIsActionSheetOpen(false)}
              className="p-1.5 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-2.5 pt-4">
            <button
              onClick={() => {
                setIsActionSheetOpen(false);
                onOpenRepairModal();
              }}
              className="w-full flex items-center gap-3.5 p-3.5 rounded-2xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200/80 text-left transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-600/20">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <div className="font-poppins font-semibold text-sm text-slate-900">
                  Raise Repair Request
                </div>
                <div className="text-xs text-emerald-700 font-medium">
                  Find neighbours with same repair & save up to 35%
                </div>
              </div>
            </button>

            <button
              onClick={() => {
                setIsActionSheetOpen(false);
                onOpenSellModal();
              }}
              className="w-full flex items-center gap-3.5 p-3.5 rounded-2xl bg-purple-50 hover:bg-purple-100/80 border border-purple-200/80 text-left transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-purple-600/20">
                <Tag className="w-5 h-5" />
              </div>
              <div>
                <div className="font-poppins font-semibold text-sm text-slate-900">
                  Sell an Item
                </div>
                <div className="text-xs text-purple-700 font-medium">
                  List pre-owned furniture or appliances inside society
                </div>
              </div>
            </button>

            <button
              onClick={() => {
                setIsActionSheetOpen(false);
                setCurrentTab('buy-together');
              }}
              className="w-full flex items-center gap-3.5 p-3.5 rounded-2xl bg-amber-50 hover:bg-amber-100/80 border border-amber-200/80 text-left transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-amber-500/20">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <div>
                <div className="font-poppins font-semibold text-sm text-slate-900">
                  Buy Together Request
                </div>
                <div className="text-xs text-amber-700 font-medium">
                  Pool orders for groceries & essentials at wholesale
                </div>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Bottom Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2 z-40 lg:hidden flex items-center justify-between shadow-lg">
        {/* Home */}
        <button
          onClick={() => handleTabClick('landing')}
          className={`flex flex-col items-center justify-center flex-1 py-1 cursor-pointer transition-colors ${
            currentTab === 'landing' ? 'text-emerald-600 font-bold' : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] mt-1 font-medium">Home</span>
        </button>

        {/* Services */}
        <button
          onClick={() => handleTabClick('services')}
          className={`flex flex-col items-center justify-center flex-1 py-1 cursor-pointer transition-colors ${
            currentTab === 'services' || currentTab === 'group-details'
              ? 'text-emerald-600 font-bold'
              : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          <Wrench className="w-5 h-5" />
          <span className="text-[10px] mt-1 font-medium">Services</span>
        </button>

        {/* Central Action Button (+) */}
        <div className="flex-1 flex justify-center -mt-6">
          <button
            onClick={() => setIsActionSheetOpen(!isActionSheetOpen)}
            className="w-13 h-13 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all cursor-pointer border-4 border-white"
            aria-label="Create society request"
          >
            <Plus className={`w-6 h-6 transition-transform duration-200 ${isActionSheetOpen ? 'rotate-45' : ''}`} />
          </button>
        </div>

        {/* Marketplace */}
        <button
          onClick={() => handleTabClick('marketplace')}
          className={`flex flex-col items-center justify-center flex-1 py-1 cursor-pointer transition-colors ${
            currentTab === 'marketplace' ? 'text-emerald-600 font-bold' : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          <ShoppingBag className="w-5 h-5" />
          <span className="text-[10px] mt-1 font-medium">Marketplace</span>
        </button>

        {/* Profile / Dashboard */}
        <button
          onClick={() => handleTabClick('dashboard')}
          className={`flex flex-col items-center justify-center flex-1 py-1 cursor-pointer transition-colors ${
            currentTab === 'dashboard' ? 'text-emerald-600 font-bold' : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          <User className="w-5 h-5" />
          <span className="text-[10px] mt-1 font-medium">Dashboard</span>
        </button>
      </nav>
    </>
  );
};
