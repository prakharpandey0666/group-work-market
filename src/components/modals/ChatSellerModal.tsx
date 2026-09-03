import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  X, 
  Send, 
  ShieldCheck, 
  MapPin, 
  Tag, 
  MessageSquare, 
  Clock,
  Sparkles
} from 'lucide-react';

export const ChatSellerModal: React.FC = () => {
  const { isChatOpen, closeChat, activeChatProduct, showToast } = useApp();
  
  const [messages, setMessages] = useState<Array<{ sender: 'you' | 'seller'; text: string; time: string }>>([
    {
      sender: 'seller',
      text: 'Hi Rajat! Yes, this item is available for inspection in Flat 302.',
      time: '10:15 AM'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  if (!isChatOpen || !activeChatProduct) return null;

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const newMsg = {
      sender: 'you' as const,
      text,
      time: 'Just now'
    };

    setMessages(prev => [...prev, newMsg]);
    setInputMessage('');

    // Simulate seller friendly response after 900ms
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          sender: 'seller' as const,
          text: `Sounds perfect! You can buzz Flat ${activeChatProduct.flat.replace('Flat ', '')} around 7:30 PM today. Let me know if you need help carrying it down the lift!`,
          time: 'Just now'
        }
      ]);
      showToast(
        `Reply from ${activeChatProduct.sellerName}`,
        'Inspection time confirmed for this evening!',
        'info'
      );
    }, 900);
  };

  const quickReplies = [
    'Can I come inspect it today evening?',
    'Is the price slightly negotiable?',
    'Is the original invoice/warranty card available?'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-150 flex flex-col h-[560px] max-h-[90vh]">
        
        {/* Header */}
        <div className="px-5 py-3.5 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center text-sm">
              {activeChatProduct.sellerName.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="font-poppins font-bold text-sm text-slate-900">
                  {activeChatProduct.sellerName}
                </h4>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-1.5 py-0.2 rounded-full flex items-center gap-0.5">
                  <ShieldCheck className="w-3 h-3" />
                  Verified
                </span>
              </div>
              <div className="text-[11px] text-slate-500 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-400" />
                <span>{activeChatProduct.tower} • {activeChatProduct.flat}</span>
              </div>
            </div>
          </div>

          <button
            onClick={closeChat}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Product mini bar */}
        <div className="px-5 py-2.5 bg-purple-50/60 border-b border-purple-100/80 flex items-center justify-between">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <img 
              src={activeChatProduct.image} 
              alt={activeChatProduct.title} 
              className="w-10 h-10 rounded-lg object-cover border border-purple-200 shrink-0" 
            />
            <div className="truncate">
              <div className="text-xs font-semibold text-slate-800 truncate">
                {activeChatProduct.title}
              </div>
              <div className="text-[11px] font-bold text-purple-700">
                ₹{activeChatProduct.price.toLocaleString('en-IN')}
              </div>
            </div>
          </div>
          <span className="text-[10px] bg-white text-purple-700 border border-purple-200 px-2 py-0.5 rounded-md font-medium shrink-0">
            {activeChatProduct.condition}
          </span>
        </div>

        {/* Messages List */}
        <div className="p-4 flex-1 overflow-y-auto space-y-3 bg-[#F8FAFC]">
          <div className="text-center">
            <span className="text-[10px] bg-slate-200/70 text-slate-600 px-2.5 py-0.5 rounded-full">
              Neighbour-to-neighbour private society chat
            </span>
          </div>

          {messages.map((msg, idx) => {
            const isMe = msg.sender === 'you';
            return (
              <div 
                key={idx} 
                className={`flex flex-col ${isMe ? 'items-end' : 'items-start'} animate-in fade-in duration-100`}
              >
                <div 
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-xs ${
                    isMe 
                      ? 'bg-purple-600 text-white rounded-br-xs shadow-xs' 
                      : 'bg-white text-slate-800 border border-slate-200 rounded-bl-xs shadow-xs'
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[9px] text-slate-400 mt-1 px-1">{msg.time}</span>
              </div>
            );
          })}
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-2 bg-white border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {quickReplies.map((reply, i) => (
            <button
              key={i}
              onClick={() => handleSendMessage(reply)}
              className="text-[10px] bg-slate-100 hover:bg-purple-50 hover:text-purple-700 text-slate-600 px-2.5 py-1 rounded-full whitespace-nowrap transition-colors border border-slate-200/60 cursor-pointer shrink-0"
            >
              {reply}
            </button>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
          <input
            type="text"
            placeholder={`Message ${activeChatProduct.sellerName}...`}
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1 p-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500"
          />
          <button
            onClick={() => handleSendMessage()}
            className="p-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white transition-colors cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
