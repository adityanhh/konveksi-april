'use client';

import { useState, useMemo } from 'react';
import { FaCalculator, FaWhatsapp, FaCheck, FaInfoCircle, FaShieldAlt } from 'react-icons/fa';

const WHATSAPP_NUMBER = '6285122909300';

const PRODUCT_TYPES = [
  {
    id: 'kaos',
    name: 'Kaos / T-Shirt',
    basePrice: 55000,
    materials: [
      { name: 'Cotton Combed 30s (Standar Distro Lembut)', modifier: 0 },
      { name: 'Cotton Combed 24s (Tebal Sedang, Favorit)', modifier: 3000 },
      { name: 'Cotton Combed 20s / Heavyweight (Sangat Tebal)', modifier: 8000 },
      { name: 'Cotton Bamboo (Anti Bakteri & Dingin)', modifier: 12000 }
    ],
    customizations: [
      { id: 'dtf_1', name: 'Sablon DTF / Plastisol 1 Titik (Dada/Punggung)', price: 0 },
      { id: 'dtf_2', name: 'Sablon DTF / Plastisol 2 Titik (Depan & Belakang)', price: 7000 },
      { id: 'dtf_full', name: 'Sablon DTF / Plastisol Full A3 Multi-Warna', price: 14000 }
    ]
  },
  {
    id: 'polo',
    name: 'Polo Shirt Wangki',
    basePrice: 75000,
    materials: [
      { name: 'Lacoste CVC (Adem & Lembut, Best Seller)', modifier: 0 },
      { name: 'Lacoste Pique Cotton 100% (Premium Tebal)', modifier: 10000 },
      { name: 'Dry-Fit Milano / Pique Olahraga', modifier: -5000 }
    ],
    customizations: [
      { id: 'emb_1', name: 'Bordir Komputer Dada Kiri', price: 0 },
      { id: 'emb_2', name: 'Bordir Komputer 2 Titik (Dada & Punggung)', price: 8000 },
      { id: 'emb_3', name: 'Bordir Komputer 3 Titik (Dada, Lengan, Punggung)', price: 15000 }
    ]
  },
  {
    id: 'kemeja',
    name: 'Kemeja PDL / PDH',
    basePrice: 105000,
    materials: [
      { name: 'American Drill 1919 (Kuat & Standar Kerja)', modifier: 0 },
      { name: 'Nagata Drill (Halus, Dingin & Warna Awet)', modifier: 15000 },
      { name: 'Tropical Drill (Ringan & Dingin untuk Kantor)', modifier: 12000 },
      { name: 'Ripstop Kotak-Kotak (Tahan Sobek Outdoor)', modifier: 8000 }
    ],
    customizations: [
      { id: 'k_emb_std', name: 'Bordir Komputer Standar (Dada & Punggung)', price: 0 },
      { id: 'k_emb_full', name: 'Bordir Komputer Komplit (Dada, 2 Lengan, Punggung)', price: 12000 },
      { id: 'k_reflector', name: 'Tambah Pita Reflektor Scotlight K3', price: 10000 }
    ]
  },
  {
    id: 'hoodie',
    name: 'Hoodie / Crewneck',
    basePrice: 125000,
    materials: [
      { name: 'Cotton Fleece 280 gsm (Hangat, Lembut, Nyaman)', modifier: 0 },
      { name: 'Heavyweight Cotton Fleece 330 gsm (Tebal Streetwear)', modifier: 18000 },
      { name: 'Baby Terry Cotton (Ringan, Tidak Gerah)', modifier: -5000 }
    ],
    customizations: [
      { id: 'h_print_std', name: 'Sablon / Bordir Dada Depan', price: 0 },
      { id: 'h_print_back', name: 'Sablon / Bordir Dada & Punggung Besar', price: 12000 },
      { id: 'h_emb_3d', name: 'Bordir Timbul (3D Embroidery)', price: 15000 }
    ]
  }
];

export default function PriceEstimator() {
  const [selectedProductId, setSelectedProductId] = useState('kaos');
  const [selectedMaterialIdx, setSelectedMaterialIdx] = useState(0);
  const [selectedCustomId, setSelectedCustomId] = useState('');
  const [quantity, setQuantity] = useState(36);

  const currentProduct = useMemo(
    () => PRODUCT_TYPES.find((p) => p.id === selectedProductId) || PRODUCT_TYPES[0],
    [selectedProductId]
  );

  const selectedMaterial = currentProduct.materials[selectedMaterialIdx] || currentProduct.materials[0];

  const selectedCustom = useMemo(() => {
    return (
      currentProduct.customizations.find((c) => c.id === selectedCustomId) ||
      currentProduct.customizations[0]
    );
  }, [currentProduct, selectedCustomId]);

  // Volume discount calculation
  const discountMultiplier = useMemo(() => {
    if (quantity >= 200) return 0.85; // Diskon 15%
    if (quantity >= 100) return 0.90; // Diskon 10%
    if (quantity >= 50) return 0.95;  // Diskon 5%
    return 1.0;
  }, [quantity]);

  const pricePerPiece = useMemo(() => {
    const rawPrice =
      (currentProduct.basePrice + selectedMaterial.modifier + selectedCustom.price) *
      discountMultiplier;
    return Math.round(rawPrice / 500) * 500; // Round to nearest 500
  }, [currentProduct, selectedMaterial, selectedCustom, discountMultiplier]);

  const totalEstimate = pricePerPiece * quantity;

  // Format IDR
  const formatIDR = (val) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);

  const generateWaLink = () => {
    const text = `Halo Konveksi April, saya ingin memesan melalui estimasi web:%0A` +
      `• Produk: ${currentProduct.name}%0A` +
      `• Bahan: ${selectedMaterial.name}%0A` +
      `• Sablon/Bordir: ${selectedCustom.name}%0A` +
      `• Jumlah: ${quantity} pcs%0A` +
      `• Estimasi Biaya: ${formatIDR(pricePerPiece)} / pcs (Total: ${formatIDR(totalEstimate)})%0A%0A` +
      `Mohon dibantu verifikasi desain dan pembuatan mock-up gratisnya. Terima kasih!`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden border border-indigo-500/20">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="max-w-3xl mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold tracking-wide uppercase mb-3 border border-indigo-500/30">
          <FaCalculator className="text-sm" />
          <span>Simulasi Biaya Transparan</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
          Hitung Estimasi Biaya Pembuatan Baju Anda
        </h2>
        <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
          Pilih jenis produk, bahan kain, dan jumlah pesanan Anda. Semakin banyak jumlah pesanan, semakin hemat harga per satuan!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 relative z-10">
        {/* Form Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* 1. Pilih Kategori Produk */}
          <div>
            <label className="block text-xs font-bold tracking-wider text-slate-300 uppercase mb-2.5">
              1. Pilih Jenis Pakaian
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {PRODUCT_TYPES.map((prod) => (
                <button
                  key={prod.id}
                  type="button"
                  onClick={() => {
                    setSelectedProductId(prod.id);
                    setSelectedMaterialIdx(0);
                    setSelectedCustomId(prod.customizations[0].id);
                  }}
                  className={`p-3 rounded-xl text-xs sm:text-sm font-bold text-center transition-all cursor-pointer ${
                    selectedProductId === prod.id
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/40 border border-indigo-400'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/60'
                  }`}
                >
                  {prod.name}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Pilih Pilihan Bahan Kain */}
          <div>
            <label className="block text-xs font-bold tracking-wider text-slate-300 uppercase mb-2.5">
              2. Kualitas Bahan Kain
            </label>
            <div className="space-y-2">
              {currentProduct.materials.map((mat, idx) => (
                <label
                  key={mat.name}
                  className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                    selectedMaterialIdx === idx
                      ? 'bg-indigo-950/60 border-indigo-500 text-white shadow-inner'
                      : 'bg-slate-800/40 border-slate-700/60 text-slate-300 hover:bg-slate-800/80'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="material"
                      checked={selectedMaterialIdx === idx}
                      onChange={() => setSelectedMaterialIdx(idx)}
                      className="accent-indigo-500 w-4 h-4"
                    />
                    <span className="text-xs sm:text-sm font-medium">{mat.name}</span>
                  </div>
                  {mat.modifier > 0 && (
                    <span className="text-[11px] font-bold text-indigo-300">
                      +{formatIDR(mat.modifier)}
                    </span>
                  )}
                </label>
              ))}
            </div>
          </div>

          {/* 3. Sablon & Bordir */}
          <div>
            <label className="block text-xs font-bold tracking-wider text-slate-300 uppercase mb-2.5">
              3. Opsi Sablon / Bordir Komputer
            </label>
            <div className="space-y-2">
              {currentProduct.customizations.map((cust) => (
                <label
                  key={cust.id}
                  className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                    selectedCustom.id === cust.id
                      ? 'bg-indigo-950/60 border-indigo-500 text-white shadow-inner'
                      : 'bg-slate-800/40 border-slate-700/60 text-slate-300 hover:bg-slate-800/80'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="customization"
                      checked={selectedCustom.id === cust.id}
                      onChange={() => setSelectedCustomId(cust.id)}
                      className="accent-indigo-500 w-4 h-4"
                    />
                    <span className="text-xs sm:text-sm font-medium">{cust.name}</span>
                  </div>
                  {cust.price > 0 && (
                    <span className="text-[11px] font-bold text-indigo-300">
                      +{formatIDR(cust.price)}
                    </span>
                  )}
                </label>
              ))}
            </div>
          </div>

          {/* 4. Jumlah Pesanan (Slider & Input) */}
          <div>
            <div className="flex justify-between items-center mb-2.5">
              <label className="text-xs font-bold tracking-wider text-slate-300 uppercase">
                4. Jumlah Pesanan (Min. 24 Pcs)
              </label>
              <span className="text-base font-extrabold text-amber-400 bg-amber-400/10 px-3 py-0.5 rounded-lg border border-amber-400/20">
                {quantity} Pcs
              </span>
            </div>
            <input
              type="range"
              min="24"
              max="500"
              step="6"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-2">
              <span>24 Pcs</span>
              <span>50 Pcs (Hemat 5%)</span>
              <span>100 Pcs (Hemat 10%)</span>
              <span>200+ Pcs (Hemat 15%)</span>
            </div>
          </div>
        </div>

        {/* Calculation Result Summary Column */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="bg-slate-800/90 rounded-2xl p-6 sm:p-7 border border-slate-700/80 shadow-xl space-y-6">
            <h3 className="text-lg font-bold text-white border-b border-slate-700 pb-3 flex items-center justify-between">
              <span>Ringkasan Estimasi</span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Free Mockup Desain
              </span>
            </h3>

            {/* Price Details */}
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex justify-between">
                <span>Model:</span>
                <span className="font-semibold text-white">{currentProduct.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Bahan:</span>
                <span className="font-semibold text-white text-right max-w-[200px] truncate">{selectedMaterial.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Kustomisasi:</span>
                <span className="font-semibold text-white text-right max-w-[200px] truncate">{selectedCustom.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Kuantitas:</span>
                <span className="font-semibold text-amber-400">{quantity} Pcs</span>
              </div>
              {discountMultiplier < 1 && (
                <div className="flex justify-between text-emerald-400 font-semibold text-xs">
                  <span>Diskon Volume Order:</span>
                  <span>{Math.round((1 - discountMultiplier) * 100)}% OFF</span>
                </div>
              )}
            </div>

            {/* Total Highlight */}
            <div className="bg-indigo-950/70 rounded-xl p-5 border border-indigo-500/30 text-center">
              <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wider block mb-1">
                Estimasi Harga Satuan
              </span>
              <div className="text-3xl sm:text-4xl font-black text-white">
                {formatIDR(pricePerPiece)}
                <span className="text-xs font-normal text-slate-400"> / pcs</span>
              </div>
              <div className="mt-2 pt-2 border-t border-indigo-900/60 text-xs text-slate-300 flex justify-between">
                <span>Total Estimasi ({quantity} pcs):</span>
                <strong className="text-amber-400 font-extrabold text-sm">{formatIDR(totalEstimate)}</strong>
              </div>
            </div>

            {/* Guarantees */}
            <div className="space-y-2 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <FaCheck className="text-emerald-400 flex-shrink-0" />
                <span>Gratis konsultasi & pembuatan mockup digital</span>
              </div>
              <div className="flex items-center gap-2">
                <FaShieldAlt className="text-indigo-400 flex-shrink-0" />
                <span>Garansi jika ada cacat produksi / jahitan lepas</span>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={generateWaLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm sm:text-base font-extrabold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-lg shadow-emerald-600/30 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <FaWhatsapp className="text-xl" />
              <span>Kirim Spek Ini ke WhatsApp</span>
            </a>

            <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1">
              <FaInfoCircle className="text-slate-500" />
              <span>Harga final dapat disesuaikan dengan kerumitan desain Anda.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
