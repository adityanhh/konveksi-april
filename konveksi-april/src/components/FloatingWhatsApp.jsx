'use client';

import { useState } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const WHATSAPP_NUMBER = '6285122909300';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20Konveksi%20April%2C%20saya%20ingin%20tanya%20estimasi%20harga%20dan%20minimal%20order%20pakaian.`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5">
      {/* Interactive Tooltip Chat Bubble */}
      {showTooltip && (
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-2xl border border-slate-200/80 max-w-xs animate-bounce duration-1000 relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 flex items-center justify-center text-[10px] transition-colors"
            aria-label="Tutup pesan bantuan"
          >
            <FaTimes />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">
              Customer Support Online
            </span>
          </div>
          <p className="text-xs text-slate-700 leading-snug">
            Butuh penawaran harga cepat atau konsultasi bahan gratis? Hubungi admin kami di WhatsApp!
          </p>
        </div>
      )}

      {/* Main WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transition-all duration-300 transform hover:scale-105 active:scale-95"
        aria-label="Hubungi kami via WhatsApp"
      >
        <span className="relative flex items-center justify-center">
          <FaWhatsapp className="w-7 h-7 sm:w-8 sm:h-8" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-300 border-2 border-white animate-pulse" />
        </span>
        <span className="hidden sm:inline font-bold text-sm tracking-wide pr-1">
          Chat WhatsApp
        </span>
      </a>
    </div>
  );
}