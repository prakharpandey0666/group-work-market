import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, Info, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toast, clearToast } = useApp();

  if (!toast) return null;

  const isSuccess = toast.type === 'success';

  return (
    <div className="fixed bottom-20 lg:bottom-8 right-4 lg:right-8 z-50 max-w-sm w-full animate-in slide-in-from-bottom-5 fade-in duration-200">
      <div className={`p-4 rounded-2xl shadow-xl border flex items-start gap-3 backdrop-blur-md ${
        isSuccess 
          ? 'bg-emerald-900/95 text-white border-emerald-500/50 shadow-emerald-950/30' 
          : 'bg-slate-900/95 text-white border-slate-700/70 shadow-slate-950/30'
      }`}>
        <div className="shrink-0 mt-0.5">
          {isSuccess ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          ) : (
            <Info className="w-5 h-5 text-blue-400" />
          )}
        </div>

        <div className="flex-1 pr-2">
          <h4 className="font-poppins font-semibold text-sm leading-tight text-white">
            {toast.title}
          </h4>
          <p className="text-xs text-slate-300 mt-1 leading-normal">
            {toast.message}
          </p>
        </div>

        <button
          onClick={clearToast}
          className="text-slate-400 hover:text-white transition-colors p-1 -mr-1 -mt-1 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
