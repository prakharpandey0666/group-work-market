import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Building2, 
  Wrench, 
  ShoppingCart, 
  ShoppingBag, 
  ClipboardList, 
  Tag, 
  Users, 
  Calendar, 
  Wallet, 
  User, 
  Settings, 
  Plus, 
  Bell, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  Check, 
  ChevronDown,
  Coins
} from 'lucide-react';
import { NavigationTab } from '../../types';

interface DashboardViewProps {
  onOpenRepairModal: () => void;
  onOpenSellModal: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  onOpenRepairModal,
  onOpenSellModal
}) => {
  const { 
    currentTab, 
    setCurrentTab, 
    repairGroups, 
    groupBuyBundles, 
    marketplaceProducts, 
    communityPosts,
    joinRepairGroup, 
    joinGroupBuy, 
    setActiveGroupId,
    openChatWithSeller 
  } = useApp();

  const sidebarLinks: { label: string; tab: NavigationTab; icon: React.ReactNode; badge?: string }[] = [
    { label: 'Dashboard', tab: 'dashboard', icon: <Building2 className="w-4 h-4" /> },
    { label: 'Repair Requests', tab: 'services', icon: <Wrench className="w-4 h-4" />, badge: '12' },
    { label: 'Buy Together', tab: 'buy-together', icon: <ShoppingCart className="w-4 h-4" /> },
    { label: 'Marketplace', tab: 'marketplace', icon: <ShoppingBag className="w-4 h-4" /> },
    { label: 'My Bookings', tab: 'services', icon: <ClipboardList className="w-4 h-4" />, badge: '8' },
    { label: 'My Listings', tab: 'marketplace', icon: <Tag className="w-4 h-4" />, badge: '5' },
    { label: 'Community Feed', tab: 'community', icon: <Users className="w-4 h-4" /> },
    { label: 'Moving Out Sales', tab: 'moving-sale', icon: <Sparkles className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT SIDEBAR (Desktop) */}
          <aside className="hidden lg:block lg:col-span-3 space-y-6">
            <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-soft sticky top-24 space-y-6">
              
              {/* Society Badge Header */}
              <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Green Valley Society</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  Tower B • Flat 402 • KYC Verified
                </div>
              </div>

              {/* Navigation Items */}
              <nav className="space-y-1">
                {sidebarLinks.map((link) => {
                  const isActive = currentTab === link.tab;
                  return (
                    <button
                      key={link.label}
                      onClick={() => setCurrentTab(link.tab)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-slate-900 text-white shadow-xs'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {link.icon}
                        <span>{link.label}</span>
                      </div>
                      {link.badge && (
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          isActive ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'
                        }`}>
                          {link.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </nav>

              {/* Primary Action Button */}
              <div className="pt-2 border-t border-slate-100 space-y-2">
                <button
                  onClick={onOpenRepairModal}
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-2xl shadow-md shadow-emerald-600/20 text-xs sm:text-sm transition-all cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Raise Repair Request</span>
                </button>

                <button
                  onClick={onOpenSellModal}
                  className="w-full flex items-center justify-center gap-2 bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold py-2.5 rounded-2xl border border-purple-200 text-xs transition-all cursor-pointer"
                >
                  <Tag className="w-3.5 h-3.5" />
                  <span>Sell Pre-Owned Item</span>
                </button>
              </div>

              {/* Resident Verification Footer */}
              <div className="flex items-center gap-2 pt-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Verified Resident Status: Active</span>
              </div>

            </div>
          </aside>

          {/* MAIN AREA */}
          <main className="lg:col-span-9 space-y-8">
            
            {/* Top Greeting & Society Switcher */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="font-poppins font-extrabold text-2xl sm:text-3xl text-slate-900">
                    Good evening, Rajat 👋
                  </h1>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mt-1">
                  <span className="font-semibold text-slate-700">Green Valley Society</span>
                  <span>•</span>
                  <span>Tower B - Flat 402</span>
                  <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full text-[10px]">
                    ✓ Verified Resident
                  </span>
                </div>
              </div>

              {/* Top Icons & Profile */}
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setCurrentTab('community')}
                  className="relative p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 cursor-pointer"
                  title="3 society updates"
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white" />
                </button>

                <div className="flex items-center gap-2.5 pl-2 border-l border-slate-200">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm shadow-md shadow-emerald-600/20">
                    RS
                  </div>
                  <div className="hidden sm:block text-left">
                    <div className="text-xs font-bold text-slate-800">Rajat Sharma</div>
                    <div className="text-[10px] text-slate-400">Owner • Flat B-402</div>
                  </div>
                </div>
              </div>
            </div>

            {/* STATS GRID (4 Cards) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              
              <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-soft">
                <div className="flex items-center justify-between text-slate-500 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider">Active Groups</span>
                  <Wrench className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="font-poppins font-extrabold text-2xl sm:text-3xl text-slate-900">
                  12
                </div>
                <div className="text-[11px] text-emerald-700 font-medium mt-1">
                  Repairs & Groceries
                </div>
              </div>

              <div className="bg-emerald-50/60 rounded-3xl p-5 border border-emerald-200/80 shadow-soft">
                <div className="flex items-center justify-between text-emerald-800 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider">Total Saved</span>
                  <Coins className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="font-poppins font-extrabold text-2xl sm:text-3xl text-emerald-700">
                  ₹18,450
                </div>
                <div className="text-[11px] text-emerald-800 font-medium mt-1">
                  Via Society Demand
                </div>
              </div>

              <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-soft">
                <div className="flex items-center justify-between text-slate-500 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider">My Bookings</span>
                  <ClipboardList className="w-4 h-4 text-blue-600" />
                </div>
                <div className="font-poppins font-extrabold text-2xl sm:text-3xl text-slate-900">
                  8
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Services completed
                </div>
              </div>

              <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-soft">
                <div className="flex items-center justify-between text-slate-500 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider">My Listings</span>
                  <Tag className="w-4 h-4 text-purple-600" />
                </div>
                <div className="font-poppins font-extrabold text-2xl sm:text-3xl text-slate-900">
                  5
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Sold to neighbours
                </div>
              </div>

            </div>

            {/* ACTIVE GROUPS LIST */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-poppins font-bold text-lg text-slate-900">
                    Active Society Groups
                  </h2>
                  <p className="text-xs text-slate-500">
                    Join open slots with neighbours to lower price per flat.
                  </p>
                </div>
                <button
                  onClick={() => setCurrentTab('services')}
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors cursor-pointer"
                >
                  View All Groups →
                </button>
              </div>

              <div className="space-y-3">
                
                {/* 1. AC Repair Group */}
                {repairGroups.slice(0, 3).map((group) => {
                  const isJoined = group.members.some(m => m.isYou);
                  return (
                    <div
                      key={group.id}
                      className="p-4 rounded-2xl bg-slate-50/70 hover:bg-slate-50 border border-slate-200/70 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/70 flex items-center justify-center text-2xl shrink-0 shadow-xs">
                          {group.icon}
                        </div>
                        <div>
                          <div className="font-poppins font-bold text-sm text-slate-900 flex items-center gap-2">
                            <span>{group.appliance}</span>
                            <span className="text-[10px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded-md font-semibold">
                              {group.membersJoined}/{group.maxMembers} joined
                            </span>
                          </div>
                          <div className="text-xs text-slate-500 flex items-center gap-2 mt-0.5">
                            <span className="font-bold text-emerald-600">₹{group.groupPrice}/person</span>
                            <span>•</span>
                            <span className="text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.2 rounded">
                              You save ₹{group.savings}
                            </span>
                            <span>•</span>
                            <span className="text-[11px] text-amber-700 flex items-center gap-1 font-medium">
                              <Clock className="w-3 h-3" />
                              {group.closesIn} left
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setActiveGroupId(group.id);
                            setCurrentTab('group-details');
                          }}
                          className="px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                        >
                          Details
                        </button>

                        <button
                          onClick={() => isJoined ? setCurrentTab('group-details') : joinRepairGroup(group.id)}
                          className={`px-4 py-2 rounded-xl text-xs font-poppins font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                            isJoined
                              ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                              : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm shadow-emerald-600/20'
                          }`}
                        >
                          {isJoined ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Joined</span>
                            </>
                          ) : (
                            <span>Join Group</span>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}

                {/* 2. Grocery Group Buy Card */}
                {groupBuyBundles[0] && (
                  <div className="p-4 rounded-2xl bg-amber-50/40 hover:bg-amber-50/70 border border-amber-200/70 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-amber-200 flex items-center justify-center text-2xl shrink-0 shadow-xs">
                        🛒
                      </div>
                      <div>
                        <div className="font-poppins font-bold text-sm text-slate-900 flex items-center gap-2">
                          <span>Weekly Grocery Bulk Buy</span>
                          <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-md font-semibold">
                            {groupBuyBundles[0].joinedCount}/{groupBuyBundles[0].targetCount} joined
                          </span>
                        </div>
                        <div className="text-xs text-slate-500 flex items-center gap-2 mt-0.5">
                          <span className="font-bold text-amber-700">₹{groupBuyBundles[0].groupPrice}/share</span>
                          <span>•</span>
                          <span className="text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.2 rounded">
                            You save ₹{groupBuyBundles[0].savings}
                          </span>
                          <span>•</span>
                          <span className="text-[11px] text-amber-800 font-medium">
                            Closes in {groupBuyBundles[0].closesIn}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setCurrentTab('buy-together')}
                        className="px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                      >
                        Details
                      </button>

                      <button
                        onClick={() => joinGroupBuy(groupBuyBundles[0].id)}
                        className={`px-4 py-2 rounded-xl text-xs font-poppins font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                          groupBuyBundles[0].joinedByYou
                            ? 'bg-amber-200 text-amber-900'
                            : 'bg-amber-600 hover:bg-amber-700 text-white shadow-sm'
                        }`}
                      >
                        {groupBuyBundles[0].joinedByYou ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Joined</span>
                          </>
                        ) : (
                          <span>Join Group</span>
                        )}
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* TWO COLUMN BOTTOM SECTION: Community Feed & Trending Marketplace */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Community Feed Preview */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-poppins font-bold text-base text-slate-900 flex items-center gap-2">
                    <Users className="w-4 h-4 text-emerald-600" />
                    <span>Community Feed</span>
                  </h3>
                  <button
                    onClick={() => setCurrentTab('community')}
                    className="text-xs font-semibold text-emerald-700 hover:underline cursor-pointer"
                  >
                    View All
                  </button>
                </div>

                <div className="space-y-3">
                  {communityPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                      <div className="font-bold text-slate-900 mb-0.5">{post.title}</div>
                      <div className="text-slate-500 line-clamp-1">{post.content}</div>
                      <div className="text-[10px] text-emerald-700 font-medium mt-1">
                        {post.date} • {post.interestedCount} residents interested
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trending Marketplace Preview */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-poppins font-bold text-base text-slate-900 flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-purple-600" />
                    <span>Trending in Society</span>
                  </h3>
                  <button
                    onClick={() => setCurrentTab('marketplace')}
                    className="text-xs font-semibold text-purple-700 hover:underline cursor-pointer"
                  >
                    View All
                  </button>
                </div>

                <div className="space-y-3">
                  {marketplaceProducts.slice(0, 2).map((item) => (
                    <div 
                      key={item.id} 
                      onClick={() => openChatWithSeller(item)}
                      className="p-3 rounded-2xl bg-slate-50 hover:bg-purple-50/50 border border-slate-100 hover:border-purple-200 transition-all flex items-center gap-3 cursor-pointer"
                    >
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-12 h-12 rounded-xl object-cover border border-slate-200 shrink-0" 
                      />
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-slate-900 text-xs truncate">{item.title}</div>
                        <div className="text-[11px] text-slate-500">{item.age} • {item.condition}</div>
                        <div className="font-bold text-purple-700 text-xs mt-0.5">
                          ₹{item.price.toLocaleString('en-IN')}
                        </div>
                      </div>
                      <span className="text-[10px] text-purple-700 font-semibold bg-white border border-purple-200 px-2 py-1 rounded-lg">
                        Chat
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </main>

        </div>
      </div>
    </div>
  );
};
