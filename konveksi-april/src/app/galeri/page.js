'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaWhatsapp, FaSearchPlus, FaTag, FaTshirt } from 'react-icons/fa';

const WHATSAPP_NUMBER = '6285122909300';

const GALLERY_CATEGORIES = ['Semua', 'Kaos Distro', 'Kemeja & PDL', 'Jaket & Hoodie', 'Polo & Jersey', 'Aksesoris'];

const PROJECTS = [
  {
    id: 1,
    title: 'Kaos Heavyweight 20s - Nocturnal Club',
    category: 'Kaos Distro',
    image: '/images/product-kaos.jpg',
    client: 'Brand Clothing Lokal Bandung',
    qty: '150 Pcs',
    material: 'Cotton Combed 20s Solid Black',
    print: 'Sablon Plastisol Doff High Density'
  },
  {
    id: 2,
    title: 'Kemeja PDL Lapangan - Geologist Corp',
    category: 'Kemeja & PDL',
    image: '/images/product-kemeja.jpg',
    client: 'Divisi Eksplorasi Tambang',
    qty: '85 Pcs',
    material: 'Nagata Drill Khaki & Navy',
    print: 'Bordir Komputer 4 Titik + Scotlight'
  },
  {
    id: 3,
    title: 'Varsity Jacket & Bomber - Apex Speed',
    category: 'Jaket & Hoodie',
    image: '/images/product-bomber.jpg',
    client: 'Komunitas Otomotif Jawa Barat',
    qty: '60 Pcs',
    material: 'Taslan Milky Waterproof + Furing Quilting',
    print: 'Bordir Timbul Chenille Patch'
  },
  {
    id: 4,
    title: 'Hoodie Fleece Streetwear - Overcast',
    category: 'Jaket & Hoodie',
    image: '/images/product-hoodie.jpg',
    client: 'Distro Apparel Skateboard',
    qty: '120 Pcs',
    material: 'Cotton Fleece 330 gsm Heather Grey',
    print: 'Sablon DTF High-Definition Dada & Punggung'
  },
  {
    id: 5,
    title: 'Polo Shirt Executive - Bank Mandiri Regional',
    category: 'Polo & Jersey',
    image: '/images/product-polo.jpg',
    client: 'Corporate Gathering Mandiri',
    qty: '200 Pcs',
    material: 'Lacoste CVC Pique Navy Blue',
    print: 'Bordir Komputer Tajam Dada Kiri'
  },
  {
    id: 6,
    title: 'Jersey Printing Sublim - Garuda FC',
    category: 'Polo & Jersey',
    image: '/images/product-jersey.jpg',
    client: 'Klub Sepakbola Amatir Bandung',
    qty: '35 Set',
    material: 'Dryfit Milano Anti-UV',
    print: 'Full Print Sublimation Warna Tajam'
  },
  {
    id: 7,
    title: 'Snapback Cap & Canvas Tote - Artfest Bandung',
    category: 'Aksesoris',
    image: '/images/product-topi.jpg',
    client: 'Panitia Festival Seni & Budaya',
    qty: '300 Pcs',
    material: 'Rafael Daimaru & Canvas Marsoto',
    print: 'Bordir 3D & Sablon Rubber'
  },
  {
    id: 8,
    title: 'Totebag Eco Canvas - Kedai Kopi Sore',
    category: 'Aksesoris',
    image: '/images/product-totebag.jpg',
    client: 'Merchandise Coffee Shop',
    qty: '100 Pcs',
    material: 'Canvas Greige Tebal 14oz',
    print: 'Sablon Rubber Ramah Lingkungan'
  },
  {
    id: 9,
    title: 'Kaos Komunitas Motor - Ride & Roll',
    category: 'Kaos Distro',
    image: '/images/workshop-sablon.jpg',
    client: 'Komunitas Bikers Bandung',
    qty: '180 Pcs',
    material: 'Cotton Combed 24s Charcoal',
    print: 'Sablon Plastisol Multi-Warna'
  }
];

export default function GaleriPage() {
  const [activeTab, setActiveTab] = useState('Semua');

  const filtered = activeTab === 'Semua'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeTab);

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
              Bukti nyata dedikasi dan kualitas pengerjaan Konveksi April. Telah dipercaya oleh ratusan brand distro, institusi korporat, komunitas motor, hingga event akbar nasional.
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
              onClick={() => setActiveTab(cat)}
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
          {filtered.map((item) => {
            const waQuery = encodeURIComponent(
              `Halo Konveksi April, saya melihat portofolio "${item.title}". Apakah bisa dibuatkan model serupa untuk pesanan kami?`
            );

            return (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5"
              >
                {/* Photo container */}
                <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-indigo-600/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow">
                    {item.category}
                  </div>

                  {/* Qty Pill */}
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-slate-800 text-xs font-extrabold px-3 py-1 rounded-lg shadow">
                    Total: {item.qty}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wide block mb-1">
                      Klien: {item.client}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-3">
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