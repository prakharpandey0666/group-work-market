import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Building2, 
  Wrench, 
  ShoppingBag, 
  ShoppingCart, 
  Users, 
  ShieldCheck, 
  Menu, 
  X, 
  LayoutDashboard,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { NavigationTab, UserRole } from '../../types';

interface NavbarProps {
  onOpenAuthModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuthModal }) => {
  const { role, setRole, currentTab, setCurrentTab } = useApp();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);

  const navLinks: { label: string; tab: NavigationTab; icon?: React.ReactNode }[] = [
    { label: 'Home', tab: 'landing' },
    { label: 'How It Works', tab: 'how-it-works' },
    { label: 'Repairs & Services', tab: 'services' },
    { label: 'Marketplace', tab: 'marketplace' },
    { label: 'Buy Together', tab: 'buy-together' },
    { label: 'Community', tab: 'community' },
  ];

  const handleNavClick = (tab: NavigationTab) => {
    setCurrentTab(tab);
    setIsMobileMenuOpen(false);
  };

  const roleLabels: Record<UserRole, { title: string; subtitle: string; badge: string; color: string }> = {
    resident: {
      title: 'Rajat Sharma',
      subtitle: 'Resident • Green Valley B-402',
      badge: '✓ Verified Resident',
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    provider: {
      title: 'Manoj Kumar',
      subtitle: 'Manoj AC & Care • 4.8★',
      badge: '✓ Verified Provider',
      color: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    admin: {
      title: 'Vikram Mehta',
      subtitle: 'RWA President • Admin',
      badge: 'Society Admin',
      color: 'bg-purple-50 text-purple-700 border-purple-200'
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      {/* Top micro-banner highlighting demand aggregation */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white text-xs font-medium py-1.5 px-4 text-center flex items-center justify-center gap-2 shadow-inner">
        <span className="flex h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
        <span>
          <strong>Demand Aggregation in Action:</strong> 12 active repair & grocery groups running in <strong>Green Valley Society</strong> right now.
        </span>
        <button 
          onClick={() => setCurrentTab('services')}
          className="underline hover:text-emerald-100 font-semibold cursor-pointer ml-1 hidden sm:inline"
        >
          View Savings →
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('landing')} 
            className="flex items-center gap-2.5 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-emerald-400 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-poppins font-extrabold text-2xl tracking-tight text-slate-900">
                  Socio<span className="text-emerald-600">+</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded-full">
                  Society App
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium tracking-wide -mt-1 hidden sm:block">
                Repair • Buy • Sell • Save
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = currentTab === link.tab;
              return (
                <button
                  key={link.tab}
                  onClick={() => handleNavClick(link.tab)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                    isActive
                      ? 'text-emerald-700 bg-emerald-50/80 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Area & Persona Switcher */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Persona Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
                className={`flex items-center gap-2 px-2.5 py-1.5 rounded-xl border text-xs font-medium cursor-pointer transition-all shadow-xs hover:shadow-sm ${roleLabels[role].color}`}
                title="Switch demo persona to test Resident, Provider, or Society Admin"
              >
                <div className="w-2 h-2 rounded-full bg-current animate-ping" />
                <div className="text-left">
                  <div className="font-semibold leading-tight">{roleLabels[role].title}</div>
                  <div className="text-[10px] opacity-80">{roleLabels[role].badge}</div>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isRoleDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isRoleDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in zoom-in-95 duration-100">
                  <div className="px-3.5 py-1.5 border-b border-slate-100 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Switch Test Persona
                  </div>
                  
                  <button
                    onClick={() => { setRole('resident'); setIsRoleDropdownOpen(false); }}
                    className={`w-full text-left px-3.5 py-2.5 flex items-start gap-2.5 hover:bg-slate-50 transition-colors cursor-pointer ${
                      role === 'resident' ? 'bg-emerald-50/70' : ''
                    }`}
                  >
                    <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-700 mt-0.5">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        Resident View
                        {role === 'resident' && <span className="text-[10px] bg-emerald-600 text-white px-1.5 py-0.2 rounded-full">Active</span>}
                      </div>
                      <div className="text-[11px] text-slate-500">Rajat Sharma • Flat B-402</div>
                    </div>
                  </button>

                  <button
                    onClick={() => { setRole('provider'); setIsRoleDropdownOpen(false); }}
                    className={`w-full text-left px-3.5 py-2.5 flex items-start gap-2.5 hover:bg-slate-50 transition-colors cursor-pointer ${
                      role === 'provider' ? 'bg-blue-50/70' : ''
                    }`}
                  >
                    <div className="p-1.5 rounded-lg bg-blue-100 text-blue-700 mt-0.5">
                      <Wrench className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        Service Provider View
                        {role === 'provider' && <span className="text-[10px] bg-blue-600 text-white px-1.5 py-0.2 rounded-full">Active</span>}
                      </div>
                      <div className="text-[11px] text-slate-500">Manoj Kumar • Technician (4.8★)</div>
                    </div>
                  </button>

                  <button
                    onClick={() => { setRole('admin'); setIsRoleDropdownOpen(false); }}
                    className={`w-full text-left px-3.5 py-2.5 flex items-start gap-2.5 hover:bg-slate-50 transition-colors cursor-pointer ${
                      role === 'admin' ? 'bg-purple-50/70' : ''
                    }`}
                  >
                    <div className="p-1.5 rounded-lg bg-purple-100 text-purple-700 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        Society Admin View
                        {role === 'admin' && <span className="text-[10px] bg-purple-600 text-white px-1.5 py-0.2 rounded-full">Active</span>}
                      </div>
                      <div className="text-[11px] text-slate-500">Vikram Mehta • RWA President</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Login / Sign Up Button */}
            <button
              onClick={onOpenAuthModal}
              className="hidden sm:flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-emerald-700 px-2.5 py-1.5 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <span>Login / Sign Up</span>
            </button>

            {/* Role-specific CTA / Dashboard button */}
            {role === 'resident' && (
              <button
                onClick={() => handleNavClick(currentTab === 'dashboard' ? 'landing' : 'dashboard')}
                className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 rounded-xl transition-all shadow-sm hover:shadow cursor-pointer"
              >
                <LayoutDashboard className="w-4 h-4 text-emerald-400" />
                <span className="hidden sm:inline">{currentTab === 'dashboard' ? 'Landing View' : 'My Dashboard'}</span>
                <span className="sm:hidden">{currentTab === 'dashboard' ? 'Home' : 'App'}</span>
              </button>
            )}

            {role === 'provider' && (
              <button
                onClick={() => handleNavClick('provider-jobs')}
                className="flex items-center gap-1.5 bg-blue-700 hover:bg-blue-800 text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 rounded-xl transition-all shadow-sm cursor-pointer"
              >
                <Wrench className="w-4 h-4" />
                <span>Provider Jobs</span>
              </button>
            )}

            {role === 'admin' && (
              <button
                onClick={() => handleNavClick('admin')}
                className="flex items-center gap-1.5 bg-purple-700 hover:bg-purple-800 text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 rounded-xl transition-all shadow-sm cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Admin Console</span>
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 py-3 px-2 space-y-1 bg-white animate-in slide-in-from-top-2 duration-150">
            {navLinks.map((link) => (
              <button
                key={link.tab}
                onClick={() => handleNavClick(link.tab)}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between cursor-pointer ${
                  currentTab === link.tab
                    ? 'bg-emerald-50 text-emerald-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{link.label}</span>
                {currentTab === link.tab && <span className="text-emerald-600 font-bold">•</span>}
              </button>
            ))}

            <div className="pt-2 border-t border-slate-100 mt-2">
              <button
                onClick={() => handleNavClick('dashboard')}
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-2.5 rounded-xl text-sm font-semibold shadow-md shadow-emerald-500/20"
              >
                <Sparkles className="w-4 h-4" />
                Open Resident Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
