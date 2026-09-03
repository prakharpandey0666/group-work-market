import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  ShoppingBag, 
  X, 
  Upload, 
  ShieldCheck, 
  Tag, 
  Building, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { MarketplaceProduct } from '../../types';

interface SellProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SellProductModal: React.FC<SellProductModalProps> = ({ isOpen, onClose }) => {
  const { createMarketplaceListing } = useApp();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<MarketplaceProduct['category']>('Appliances');
  const [brand, setBrand] = useState('');
  const [age, setAge] = useState('1 year old');
  const [condition, setCondition] = useState<MarketplaceProduct['condition']>('Excellent');
  const [price, setPrice] = useState('');
  const [tower, setTower] = useState('Tower B');
  const [flat, setFlat] = useState('Flat 402');
  const [description, setDescription] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !price) return;

    createMarketplaceListing({
      title,
      category,
      brand,
      age,
      condition,
      price: parseFloat(price),
      tower,
      flat,
      description: description || `Listed by verified resident of ${tower} - ${flat}. Available for direct inspection.`
    });

    onClose();
    // Reset fields
    setTitle('');
    setPrice('');
    setDescription('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-150 flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-purple-50/50">
          <div>
            <div className="flex items-center gap-1.5 text-purple-700 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-purple-600" />
              <span>Society Marketplace • Verified Resident</span>
            </div>
            <h3 className="font-poppins font-bold text-lg text-slate-900 mt-0.5">
              Sell an Item to Neighbours
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto flex-1 space-y-4">
          
          {/* Photo upload placeholder */}
          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1">
              Product Photos
            </label>
            <div className="border-2 border-dashed border-purple-200 hover:border-purple-400 rounded-2xl p-5 text-center bg-purple-50/20 transition-all cursor-pointer">
              <Upload className="w-8 h-8 text-purple-500 mx-auto mb-1" />
              <div className="text-xs font-semibold text-slate-700">
                Tap to upload real item photos
              </div>
              <div className="text-[10px] text-slate-400">
                Front, back, and any cosmetic marks
              </div>
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1">
              Item Title *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. LG 7kg Inverter Washing Machine or 3 Seater Sofa"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500"
            />
          </div>

          {/* Category & Brand */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 bg-white"
              >
                <option value="Appliances">Appliances</option>
                <option value="Furniture">Furniture</option>
                <option value="Electronics">Electronics</option>
                <option value="Kids">Kids & Toys</option>
                <option value="Home & Kitchen">Home & Kitchen</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Brand Name
              </label>
              <input
                type="text"
                placeholder="e.g. LG, Samsung, Urban Ladder"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500"
              />
            </div>
          </div>

          {/* Age & Condition */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Age of Item
              </label>
              <input
                type="text"
                placeholder="e.g. 1.5 years old"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Condition
              </label>
              <select
                value={condition}
                onChange={(e) => setCondition(e.target.value as any)}
                className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 bg-white"
              >
                <option value="Like New">Like New</option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
              </select>
            </div>
          </div>

          {/* Price */}
          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1">
              Selling Price (₹) *
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-2.5 text-slate-500 font-bold">₹</span>
              <input
                type="number"
                required
                placeholder="8000"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500"
              />
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Society deals sell 3x faster when priced fairly for neighbours.
            </p>
          </div>

          {/* Tower & Flat */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Tower
              </label>
              <select
                value={tower}
                onChange={(e) => setTower(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-300 text-sm bg-white"
              >
                <option value="Tower A">Tower A</option>
                <option value="Tower B">Tower B</option>
                <option value="Tower C">Tower C</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Flat Number
              </label>
              <input
                type="text"
                value={flat}
                onChange={(e) => setFlat(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-300 text-sm"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1">
              Description & Reason for Selling
            </label>
            <textarea
              rows={3}
              placeholder="e.g. Excellent condition, always covered with throw, upgrading to 450L model. Neighbours can inspect between 6 PM - 9 PM."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500"
            />
          </div>

          {/* Privacy Note */}
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-800">Verified Society Privacy</strong>
              <p className="text-[11px] text-slate-500 leading-normal mt-0.5">
                Your listing is only visible to verified residents of Green Valley Society. Only neighbours can request flat inspection via chat.
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 rounded-xl shadow-lg shadow-purple-600/20 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Publish Listing for Society</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
