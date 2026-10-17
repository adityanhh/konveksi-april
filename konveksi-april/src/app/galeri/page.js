'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaWhatsapp, FaSearchPlus, FaTag, FaTshirt } from 'react-icons/fa';
import ImageLightbox from '@/components/ImageLightbox';

const WHATSAPP_NUMBER = '6285122909300';

const GALLERY_CATEGORIES = ['Semua', 'Kaos Distro', 'Kemeja & Rompi', 'Jaket & Safety', 'Polo & Jersey'];
 
 const PROJECTS = [
   {
     id: 1,
     title: 'Kaos Distro Heavyweight 24s - FRUTELLA',
     category: 'Kaos Distro',
     image: '/images/Kaos.jpeg',
     client: 'Clothing Brand / Streetwear',
     qty: '120 Pcs',
     material: 'Cotton Combed 24s Jet Black',
     print: 'Sablon High-Density Plastisol Timbul'
   },
   {
     id: 2,
     title: 'Kemeja Kerja Korporat - iFORTE',
     category: 'Kemeja & Rompi',
     image: '/images/KemejaForte.jpeg',
     client: 'iFORTE (PT Solusi Tunas Pratama)',
     qty: '250 Pcs',
     material: 'Nagata Drill Premium Navy & Sky Blue',
     print: 'Full Bordir Komputer Logo Dada & Lengan'
   },
   {
     id: 3,
     title: 'Kemeja PDL Komunitas - UNDERDOG',
     category: 'Kemeja & Rompi',
     image: '/images/KemejaKomunitas.jpeg',
     client: 'Underdog Community & Organisasi',
     qty: '85 Pcs',
     material: 'American Drill 1919 Solid Black',
     print: 'Bordir Komputer Presisi Punggung & Dada'
   },
   {
     id: 4,
     title: 'Polo Shirt Wangki - Urban Bay Parking',
     category: 'Polo & Jersey',
     image: '/images/PoloHijau.jpeg',
     client: 'Urban Bay Parking Management',
     qty: '160 Pcs',
     material: 'Lacoste Pique CVC Forest Green & Lime',
     print: 'Bordir Komputer Tajam Dada Kiri'
   },
   {
     id: 5,
     title: 'Polo Shirt Two-Tone Executive - White & Emerald',
     category: 'Polo & Jersey',
     image: '/images/PoloPutihIjo.jpeg',
     client: 'Corporate Gathering & Club Golf',
     qty: '100 Pcs',
     material: 'Lacoste Cotton CVC White w/ Emerald Collar',
     print: 'Kerah Rib Rajut Custom + Bordir'
   },
   {
     id: 6,
     title: 'Varsity Jacket Baseball - Wirahebat Batch 5',
     category: 'Jaket & Safety',
     image: '/images/Varsity.jpeg',
     client: 'Komunitas Wirahebat #Jayakayaraya',
     qty: '75 Pcs',
     material: 'Cotton Fleece Heavyweight 330 gsm + Furing Dacron',
     print: 'Bordir Chenille Timbul + Patch Bendera Merah Putih'
   },
   {
     id: 7,
     title: 'Rompi Lapangan - FTG Universitas Padjadjaran',
     category: 'Kemeja & Rompi',
     image: '/images/RompiFakultas.jpeg',
     client: 'Fakultas Teknik Geologi UNPAD',
     qty: '140 Pcs',
     material: 'Twill Drill Khaki + Multi-Pocket Fungsional',
     print: 'Bordir Logo Identitas Fakultas & Angkatan'
   },
   {
     id: 8,
     title: 'Wearpack & Jaket Safety Proyek K3 - Reflector 3M',
     category: 'Jaket & Safety',
     image: '/images/JaketSafety.jpeg',
     client: 'Kontraktor Migas & Pertambangan',
     qty: '120 Set',
     material: 'Ripstop Heavy-Duty + Scotlight 3M Reflektif',
     print: 'Bordir K3 Safety First + Pita Reflektor Hi-Vis'
   },
   {
     id: 9,
     title: 'Jersey Printing Motif Batik - Modern Sublimation',
     category: 'Polo & Jersey',
     image: '/images/Jersey.jpeg',
     client: 'Event Komunitas Budaya & Olahraga',
     qty: '50 Set',
     material: 'Dry-Fit Milano Anti-Bakteri & UV Guard',
     print: 'Full Sublimation High-Resolution Heat Transfer'
   }
 ];

export default function GaleriPage() {
  const [activeTab, setActiveTab] = useState('Semua');
  const [selectedIdx, setSelectedIdx] = useState(null);

  const filtered = activeTab === 'Semua'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeTab);

  const currentItem = selectedIdx !== null ? filtered[selectedIdx] : null;

  return (
    <div className="space-y-16 sm:space-y-20 py-12 sm:py-16">
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-14 text-white text-center shadow-xl border border-indigo-500/20 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase block mb-3">
              Portofolio Hasil Produksi
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
              Galeri Karya &amp; Proyek Selesai
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Bukti nyata dedikasi dan kualitas pengerjaan Konveksi April. Telah dipercaya oleh ratusan brand distro, institusi korporat, komunitas motor, hingga event akbar nasional. Klik pada gambar untuk melihat detail foto resolusi tinggi.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Gallery Filter & Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2 mb-10 no-scrollbar">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveTab(cat);
                setSelectedIdx(null);
              }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeTab === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 scale-105'
                  : 'bg-white text-slate-600 hover:text-indigo-600 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item, index) => {
            const waQuery = encodeURIComponent(
              `Halo Konveksi April, saya melihat portofolio "${item.title}". Apakah bisa dibuatkan model serupa untuk pesanan kami?`
            );

            return (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5"
              >
                {/* Photo container with Pop-up trigger */}
                <div
                  onClick={() => setSelectedIdx(index)}
                  className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden cursor-pointer group/photo"
                  title="Klik untuk melihat foto lebih besar"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover/photo:scale-108 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                  {/* Zoom Overlay on Hover */}
                  <div className="absolute inset-0 bg-indigo-950/40 opacity-0 group-hover/photo:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-white font-bold text-xs sm:text-sm backdrop-blur-[2px]">
                    <span className="p-2.5 rounded-full bg-white/20 backdrop-blur-md shadow-lg border border-white/30 flex items-center gap-1.5">
                      <FaSearchPlus className="text-base text-amber-300" />
                      <span>Lihat Foto Penuh</span>
                    </span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-indigo-600/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow pointer-events-none">
                    {item.category}
                  </div>

                  {/* Qty Pill */}
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-slate-800 text-xs font-extrabold px-3 py-1 rounded-lg shadow pointer-events-none">
                    Total: {item.qty}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wide block mb-1">
                      Klien: {item.client}
                    </span>
                    <h3
                      onClick={() => setSelectedIdx(index)}
                      className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-3 cursor-pointer"
                    >
                      {item.title}
                    </h3>

                    {/* Specs info */}
                    <div className="space-y-1.5 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100 mb-4">
                      <div>
                        <strong className="text-slate-800">Bahan:</strong> {item.material}
                      </div>
                      <div>
                        <strong className="text-slate-800">Aplikasi:</strong> {item.print}
                      </div>
                    </div>
                  </div>

                  {/* Button */}
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-emerald-600 text-slate-700 hover:text-white text-xs sm:text-sm font-bold rounded-xl transition-all duration-200"
                  >
                    <FaWhatsapp className="text-emerald-500 group-hover:text-white" />
                    <span>Pesan Model Seperti Ini</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Image Pop-up Lightbox */}
      <ImageLightbox
        isOpen={selectedIdx !== null}
        onClose={() => setSelectedIdx(null)}
        item={currentItem}
        onPrev={() => setSelectedIdx((prev) => (prev > 0 ? prev - 1 : filtered.length - 1))}
        onNext={() => setSelectedIdx((prev) => (prev < filtered.length - 1 ? prev + 1 : 0))}
        hasPrev={filtered.length > 1}
        hasNext={filtered.length > 1}
      />

      {/* 3. Bottom Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-50 border border-indigo-100 rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
            Ingin Melihat Sampel Fisik Kain Langsung?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-6">
            Kunjungi workshop kami di Bandung atau mintalah pengiriman swatch book (katalog sampel kain dan warna) ke alamat Anda.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20Konveksi%20April%2C%20saya%20ingin%20request%20sampel%20fisik%20kain%20dan%20katalog%20warna.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md transition-all"
          >
            <FaWhatsapp className="text-xl" />
            <span>Minta Sampel Kain / Kunjungi Workshop</span>
          </a>
        </div>
      </section>
    </div>
  );
}