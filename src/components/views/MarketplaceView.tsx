import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Search, 
  Filter, 
  Heart, 
  ShieldCheck, 
  MapPin, 
  Plus, 
  MessageSquare, 
  ArrowUpDown,
  Sparkles
} from 'lucide-react';
import { MarketplaceProduct } from '../../types';

interface MarketplaceViewProps {
  onOpenSellModal: () => void;
}

export const MarketplaceView: React.FC<MarketplaceViewProps> = ({ onOpenSellModal }) => {
  const { 
    marketplaceProducts, 
    toggleFavoriteProduct, 
    openChatWithSeller 
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTower, setSelectedTower] = useState<string>('All');
  const [selectedCondition, setSelectedCondition] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'newest' | 'price_low' | 'price_high'>('newest');

  const categories = ['All', 'Appliances', 'Furniture', 'Electronics', 'Kids', 'Home & Kitchen'];
  const towers = ['All', 'Tower A', 'Tower B', 'Tower C'];

  const filteredProducts = marketplaceProducts
    .filter(p => {
      const matchesSearch = 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const matchesTower = selectedTower === 'All' || p.tower === selectedTower;
      const matchesCondition = selectedCondition === 'All' || p.condition === selectedCondition;

      return matchesSearch && matchesCategory && matchesTower && matchesCondition;
    })
    .sort((a, b) => {
      if (sortBy === 'price_low') return a.price - b.price;
      if (sortBy === 'price_high') return b.price - a.price;
      return 0; // default newest
    });

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Title & CTA */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
              <span>Green Valley Society • Verified Residents Only</span>
            </div>
            <h1 className="font-poppins font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Second-Hand Society Marketplace
            </h1>
            <p className="font-inter text-slate-600 text-sm sm:text-base mt-1">
              Buy and sell pre-owned appliances, furniture, and household products directly from neighbours.
            </p>
          </div>

          <button
            onClick={onOpenSellModal}
            className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-poppins font-bold text-sm px-6 py-3.5 rounded-2xl shadow-md shadow-purple-600/25 transition-all cursor-pointer shrink-0"
          >
            <Plus className="w-5 h-5" />
            <span>Sell an Item</span>
          </button>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-soft space-y-4">
          
          {/* Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Search washing machine, sofa, fridge, study table..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 bg-slate-50/50"
            />
          </div>

          {/* Filter Pills & Selectors */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
            
            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-purple-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Tower & Sort */}
            <div className="flex items-center gap-3">
              {/* Tower Filter */}
              <select
                value={selectedTower}
                onChange={(e) => setSelectedTower(e.target.value)}
                className="text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-700 font-medium focus:outline-none cursor-pointer"
              >
                {towers.map(t => (
                  <option key={t} value={t}>
                    {t === 'All' ? 'All Towers' : t}
                  </option>
                ))}
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-700 font-medium focus:outline-none cursor-pointer"
              >
                <option value="newest">Newest First</option>
                <option value="price_low">Price: Low to High</option>
                <option value="price_high">Price: High to Low</option>
              </select>
            </div>

          </div>
        </div>

        {/* Results Count */}
        <div className="text-xs text-slate-500 font-semibold">
          Showing {filteredProducts.length} items available in Green Valley Society
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <button
                    onClick={() => toggleFavoriteProduct(product.id)}
                    className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-slate-400 hover:text-red-500 shadow-md transition-colors cursor-pointer"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        product.isFavorite ? 'fill-red-500 text-red-500' : ''
                      }`}
                    />
                  </button>

                  <div className="absolute bottom-3.5 left-3.5 bg-slate-900/85 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg">
                    {product.condition} • {product.age}
                  </div>

                  <div className="absolute top-3.5 left-3.5 bg-purple-600/90 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md">
                    {product.category}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-baseline justify-between mb-1.5">
                    <span className="font-poppins font-extrabold text-2xl text-slate-900">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-slate-400 line-through">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>

                  <h3 className="font-poppins font-bold text-base text-slate-900 mb-1.5 line-clamp-1 group-hover:text-purple-700 transition-colors">
                    {product.title}
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center text-xs">
                        {product.sellerName.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800 flex items-center gap-1">
                          <span>{product.sellerName}</span>
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        </div>
                        <div className="text-[11px] text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          <span>{product.tower} • {product.flat}</span>
                        </div>
                      </div>
                    </div>

                    <span className="text-[10px] text-slate-400">
                      {product.postedDate}
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5 pt-0">
                <button
                  onClick={() => openChatWithSeller(product)}
                  className="w-full flex items-center justify-center gap-2 bg-purple-50 hover:bg-purple-100 text-purple-700 font-poppins font-semibold text-xs sm:text-sm py-2.5 rounded-xl border border-purple-200 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-purple-600" />
                  <span>Chat with Seller (Flat Visit)</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
