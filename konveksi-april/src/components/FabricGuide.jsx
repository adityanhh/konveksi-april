'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaCheckCircle, FaStar, FaFire, FaSearchPlus } from 'react-icons/fa';
import ImageLightbox from './ImageLightbox';

const FABRICS = [
  {
    id: 'combed',
    title: 'Cotton Combed (20s / 24s / 30s)',
    category: 'Kaos & T-Shirt',
    image: '/images/Kaos.jpeg',
    description: '100% serat kapas murni yang disisir halus tanpa bulu kasar. Sangat menyerap keringat, adem di kulit tropis, dan menjadi standar utama kaos distro ternama di Indonesia.',
    pros: [
      'Menyerap keringat dengan sangat cepat',
      'Permukaan rata dan halus untuk sablon tajam',
      'Tidak mudah melar dan warna tahan lama',
      'Tersedia pilihan 30s (ringan adem) dan 24s (tebal pas)'
    ],
    bestFor: 'Kaos Distro, Kaos Komunitas, Kaos Event & Seragam Panitia',
    badge: 'Paling Populer'
  },
  {
    id: 'lacoste',
    title: 'Lacoste CVC & Pique Cotton',
    category: 'Polo Shirt',
    image: '/images/PoloPutihIjo.jpeg',
    description: 'Kain rajut berpori honeycomb (sarang lebah) yang menyerap keringat dengan sirkulasi udara maksimal. Memberikan siluet rapi dan berbobot untuk seragam semi-formal.',
    pros: [
      'Pori-pori rajut aktif menjaga sirkulasi udara sejuk',
      'Kombinasi katun & polyester membuat bahan tidak mudah kusut',
      'Sangat cocok dipadukan dengan bordir komputer presisi',
      'Kerah rajut tebal tidak mudah melintir'
    ],
    bestFor: 'Polo Kantor, Seragam Lapangan Semi-Formal, Baju Golf & Olahraga',
    badge: 'Elegan & Rapi'
  },
  {
    id: 'drill',
    title: 'American & Nagata Drill',
    category: 'Kemeja PDL / PDH',
    image: '/images/KemejaKomunitas.jpeg',
    description: 'Kain tenun pintal miring berdensitas tinggi dengan ketahanan gesekan tinggi. Versi Nagata memiliki kandungan katun lebih dominan sehingga lebih lembut dan adem dipakai seharian.',
    pros: [
      'Serat sangat kuat, tahan sobek saat aktivitas outdoor',
      'Warna tidak cepat pudar meski dicuci berulang kali',
      'Tekstur tegas dan formal cocok untuk seragam kantor',
      'Mudah disetrika dan tidak mudah kusut'
    ],
    bestFor: 'Kemeja Kerja Kantor, Seragam Organisasi, Rompi Lapangan, Korsa Kampus',
    badge: 'Tangguh & Awet'
  },
  {
    id: 'fleece',
    title: 'Cotton Fleece 280-330 gsm',
    category: 'Jaket & Varsity',
    image: '/images/Varsity.jpeg',
    description: 'Bahan sweater & jaket varsity premium dengan bagian luar bertekstur halus dan bagian dalam memiliki bulu wol lembut menghangatkan tanpa membuat gerah.',
    pros: [
      'Sensasi hangat dan sangat nyaman menyentuh kulit',
      'Ketebalan ideal untuk jaket varsity dan outerwear',
      'Jahitan overdeck kuat di bagian saku dan sambungan lengan',
      'Sangat elegan dipadukan dengan bordir chenille 3D'
    ],
    bestFor: 'Jaket Varsity, Zipper Hoodie, Crewneck Streetwear, Jaket Angkatan',
    badge: 'Super Nyaman'
  }
];

export default function FabricGuide() {
  const [activeTab, setActiveTab] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const current = FABRICS[activeTab];

  return (
    <div className="w-full">
      {/* Tab Selectors */}
      <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2.5 sm:gap-3 no-scrollbar mb-8 sm:mb-10">
        {FABRICS.map((fabric, index) => (
          <button
            key={fabric.id}
            onClick={() => setActiveTab(index)}
            className={`px-4 sm:px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 ${
              activeTab === index
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-102'
                : 'bg-white text-slate-600 hover:text-indigo-600 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <span>{fabric.category}</span>
            {index === 0 && <FaFire className="text-amber-300 text-xs" />}
          </button>
        ))}
      </div>

      {/* Featured Card */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        {/* Left: Fabric Photo with Pop-up trigger */}
        <div
          onClick={() => setIsLightboxOpen(true)}
          className="lg:col-span-5 relative min-h-[280px] lg:min-h-full bg-slate-100 cursor-pointer group/photo overflow-hidden"
          title="Klik untuk memperbesar foto bahan"
        >
          <Image
            src={current.image}
            alt={current.title}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-center group-hover/photo:scale-108 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-indigo-950/40 opacity-0 group-hover/photo:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-white font-bold text-xs sm:text-sm backdrop-blur-[2px]">
            <span className="p-2.5 rounded-full bg-white/20 backdrop-blur-md shadow-lg border border-white/30 flex items-center gap-1.5">
              <FaSearchPlus className="text-base text-amber-300" />
              <span>Lihat Foto Penuh</span>
            </span>
          </div>

          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-indigo-700 shadow-md flex items-center gap-1.5 pointer-events-none">
            <FaStar className="text-amber-500 text-xs" />
            <span>{current.badge}</span>
          </div>
        </div>

        {/* Right: Fabric Details */}
        <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
          <div>
            <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase block mb-1">
              Karakteristik & Keunggulan Bahan
            </span>
            <h3
              onClick={() => setIsLightboxOpen(true)}
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 cursor-pointer hover:text-indigo-600 transition-colors"
            >
              {current.title}
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              {current.description}
            </p>

            {/* Pros List */}
            <div className="space-y-3 mb-6">
              {current.pros.map((pro, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <FaCheckCircle className="text-emerald-500 mt-1 flex-shrink-0 text-sm" />
                  <span className="text-slate-700 text-xs sm:text-sm font-medium">{pro}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendation Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/70 border border-indigo-100">
            <span className="text-xs font-bold text-indigo-900 block mb-1 uppercase tracking-wide">
              Rekomendasi Terbaik Untuk:
            </span>
            <p className="text-xs sm:text-sm font-semibold text-indigo-700">
              {current.bestFor}
            </p>
          </div>
        </div>
      </div>

      {/* Pop-up Image Lightbox */}
      <ImageLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        item={current}
        onPrev={() => setActiveTab((prev) => (prev > 0 ? prev - 1 : FABRICS.length - 1))}
        onNext={() => setActiveTab((prev) => (prev < FABRICS.length - 1 ? prev + 1 : 0))}
        hasPrev={FABRICS.length > 1}
        hasNext={FABRICS.length > 1}
      />
    </div>
  );
}
