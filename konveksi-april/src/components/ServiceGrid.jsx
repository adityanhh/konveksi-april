'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { services } from './services';
import ImageLightbox from './ImageLightbox';
import { FaWhatsapp, FaArrowRight, FaCheckCircle, FaClock, FaBoxOpen, FaSearchPlus } from 'react-icons/fa';

const WHATSAPP_NUMBER = '6285122909300';
const CATEGORIES = ['Semua', 'Kaos', 'Polo', 'Kemeja', 'Jaket'];

export default function ServiceGrid() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [selectedIdx, setSelectedIdx] = useState(null);

  const filteredServices = activeCategory === 'Semua'
    ? services
    : services.filter((s) => s.category === activeCategory);

  const currentItem = selectedIdx !== null ? filteredServices[selectedIdx] : null;

  return (
    <div className="w-full">
      {/* Category Filter Tabs */}
      <div className="flex items-center justify-center flex-wrap gap-2 mb-10 sm:mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setSelectedIdx(null);
            }}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
              activeCategory === cat
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 scale-105'
                : 'bg-white text-slate-600 hover:text-indigo-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map((product, index) => {
          const waMessage = encodeURIComponent(
            `Halo Konveksi April, saya tertarik konsultasi pemesanan produk: ${product.title} (${product.category}). Mohon info estimasi harga dan ketentuan bahannya.`
          );

          return (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5"
            >
              {/* Product Image Container with Pop-up trigger */}
              <div
                onClick={() => setSelectedIdx(index)}
                className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden cursor-pointer group/photo"
                title="Klik untuk melihat foto lebih besar"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover/photo:scale-108 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                {/* Zoom Overlay on Hover */}
                <div className="absolute inset-0 bg-indigo-950/40 opacity-0 group-hover/photo:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-white font-bold text-xs sm:text-sm backdrop-blur-[2px]">
                  <span className="p-2.5 rounded-full bg-white/20 backdrop-blur-md shadow-lg border border-white/30 flex items-center gap-1.5">
                    <FaSearchPlus className="text-base text-amber-300" />
                    <span>Lihat Foto Penuh</span>
                  </span>
                </div>

                {/* Badge Top Left */}
                {product.badge && (
                  <div className="absolute top-3 left-3 bg-indigo-600/90 backdrop-blur-md text-white text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-md pointer-events-none">
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    onClick={() => setSelectedIdx(index)}
                    className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors cursor-pointer"
                  >
                    {product.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {/* Highlights / Specs Chips */}
                  <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
                    <div className="flex items-start gap-2">
                      <FaCheckCircle className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span><strong className="text-slate-800">Bahan:</strong> {product.materials}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaBoxOpen className="text-indigo-500 flex-shrink-0" />
                      <span><strong className="text-slate-800">Min. Order:</strong> {product.minOrder}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaClock className="text-amber-500 flex-shrink-0" />
                      <span><strong className="text-slate-800">Pengerjaan:</strong> {product.leadTime}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2.5">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-sm hover:shadow-indigo-500/25"
                  >
                    <FaWhatsapp className="text-base text-emerald-300" />
                    <span>Tanya Harga ke Admin</span>
                  </a>
                  <Link
                    href={product.link}
                    className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-indigo-600 rounded-xl transition-colors"
                    aria-label={`Detail ${product.title}`}
                  >
                    <FaArrowRight className="text-sm" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pop-up Image Lightbox */}
      <ImageLightbox
        isOpen={selectedIdx !== null}
        onClose={() => setSelectedIdx(null)}
        item={currentItem}
        onPrev={() => setSelectedIdx((prev) => (prev > 0 ? prev - 1 : filteredServices.length - 1))}
        onNext={() => setSelectedIdx((prev) => (prev < filteredServices.length - 1 ? prev + 1 : 0))}
        hasPrev={filteredServices.length > 1}
        hasNext={filteredServices.length > 1}
      />
    </div>
  );
}

