import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Heart, 
  ShieldCheck, 
  MapPin, 
  ArrowRight, 
  Plus, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { MarketplaceProduct } from '../../types';

interface MarketplacePreviewProps {
  onOpenSellModal: () => void;
}

export const MarketplacePreview: React.FC<MarketplacePreviewProps> = ({ onOpenSellModal }) => {
  const { 
    marketplaceProducts, 
    toggleFavoriteProduct, 
    openChatWithSeller, 
    setCurrentTab 
  } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Appliances', 'Furniture', 'Electronics', 'Kids', 'Home & Kitchen'];

  const filteredProducts = selectedCategory === 'All' 
    ? marketplaceProducts.slice(0, 3) 
    : marketplaceProducts.filter(p => p.category === selectedCategory).slice(0, 3);

  return (
    <section className="py-20 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
              <span>Zero Strangers • Verified Society Marketplace</span>
            </div>
            <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Buy & Sell Inside Your Society
            </h2>
            <p className="font-inter text-slate-600 text-sm sm:text-base mt-2">
              Trusted neighbours. Nearby products. Direct lift inspections with zero delivery fees.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSellModal}
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-poppins font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-md shadow-purple-600/20 transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Sell an Item</span>
            </button>

            <button
              onClick={() => setCurrentTab('marketplace')}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-purple-700 hover:text-purple-900 px-3 py-2 rounded-xl hover:bg-purple-50 transition-colors cursor-pointer"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container with Overlay */}
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Favorite Toggle */}
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

                  {/* Condition Badge */}
                  <div className="absolute bottom-3.5 left-3.5 bg-slate-900/85 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg">
                    {product.condition} • {product.age}
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3.5 left-3.5 bg-purple-600/90 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md">
                    {product.category}
                  </div>
                </div>

                {/* Details */}
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

                  {/* Seller & Tower Info */}
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

              {/* Action Button */}
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
    </section>
  );
};
