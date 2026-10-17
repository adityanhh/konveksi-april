'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { FaTimes, FaWhatsapp, FaChevronLeft, FaChevronRight, FaExpand } from 'react-icons/fa';

const WHATSAPP_NUMBER = '6285122909300';

export default function ImageLightbox({
  isOpen,
  onClose,
  item,
  onPrev,
  onNext,
  hasPrev = false,
  hasNext = false
}) {
  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev && onPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext && onNext) onNext();
    },
    [isOpen, onClose, hasPrev, onPrev, hasNext, onNext]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !item) return null;

  const waQuery = encodeURIComponent(
    `Halo Konveksi April, saya melihat foto produk "${item.title}". Apakah bisa konsultasi pemesanan model ini?`
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title || 'Foto Produk Pop-up'}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Close button top right */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white/90 hover:text-white backdrop-blur-lg border border-white/20 transition-all duration-200 shadow-xl cursor-pointer"
        aria-label="Tutup Pop-up"
      >
        <FaTimes className="text-xl" />
      </button>

      {/* Prev Navigation Button */}
      {hasPrev && onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-2 sm:left-6 z-40 p-3.5 rounded-full bg-black/40 hover:bg-indigo-600 text-white backdrop-blur-md border border-white/10 transition-all duration-200 hover:scale-110 shadow-2xl cursor-pointer"
          aria-label="Foto Sebelumnya"
        >
          <FaChevronLeft className="text-xl" />
        </button>
      )}

      {/* Next Navigation Button */}
      {hasNext && onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-2 sm:right-6 z-40 p-3.5 rounded-full bg-black/40 hover:bg-indigo-600 text-white backdrop-blur-md border border-white/10 transition-all duration-200 hover:scale-110 shadow-2xl cursor-pointer"
          aria-label="Foto Berikutnya"
        >
          <FaChevronRight className="text-xl" />
        </button>
      )}

      {/* Lightbox Content Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700/60 flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200"
      >
        {/* Photo Area */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-black flex items-center justify-center overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-contain"
            priority
          />
          {item.category && (
            <div className="absolute top-4 left-4 bg-indigo-600/90 backdrop-blur-md text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg">
              {item.category}
            </div>
          )}
        </div>

        {/* Info & Action Bar */}
        <div className="p-5 sm:p-7 bg-slate-900 text-white border-t border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            {item.client && (
              <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider block">
                Klien: {item.client}
              </span>
            )}
            <h3 className="text-lg sm:text-xl font-black text-white leading-snug">
              {item.title}
            </h3>
            {item.material && (
              <p className="text-xs sm:text-sm text-slate-300">
                <span className="text-slate-400 font-medium">Bahan:</span> {item.material}
                {item.print && (
                  <>
                    <span className="mx-2 text-slate-600">•</span>
                    <span className="text-slate-400 font-medium">Aplikasi:</span> {item.print}
                  </>
                )}
              </p>
            )}
            {item.materials && (
              <p className="text-xs sm:text-sm text-slate-300">
                <span className="text-slate-400 font-medium">Bahan:</span> {item.materials}
                {item.sablon && (
                  <>
                    <span className="mx-2 text-slate-600">•</span>
                    <span className="text-slate-400 font-medium">Aplikasi:</span> {item.sablon}
                  </>
                )}
              </p>
            )}
          </div>

          <div className="flex items-center gap-3 pt-2 sm:pt-0">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <FaWhatsapp className="text-lg" />
              <span>Pesan Model Seperti Ini</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
