import Link from 'next/link';
import ServiceGrid from '@/components/ServiceGrid';
import PriceEstimator from '@/components/PriceEstimator';
import FabricGuide from '@/components/FabricGuide';
import ProcessSteps from '@/components/ProcessSteps';
import Testimonials from '@/components/Testimonials';
import LocationMap from '@/components/LocationMap';
import HeroBackgroundSlider from '@/components/HeroBackgroundSlider';
import TrustBadge from '@/components/TrustBadge';
import {
  FaWhatsapp,
  FaCheckCircle,
  FaShieldAlt,
  FaClock,
  FaTshirt,
  FaUsers,
  FaAward,
  FaArrowRight,
  FaTruck,
} from 'react-icons/fa';

const WHATSAPP_NUMBER = '6285122909300';

function HeroSection() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center bg-slate-950 text-white overflow-hidden">
      {/* Background Image Crossfade Slider with Opacity & Gradient Overlays */}
      <HeroBackgroundSlider />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 w-full">
        <div className="max-w-3xl">
          {/* Location & Trust Badge with rotating word */}
          <TrustBadge />

          {/* Punchy Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15] mb-6">
            Bikin Kaos, Kemeja &amp; Jaket Custom{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
              Standar Distro Bandung
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal mb-8 max-w-2xl">
            Solusi vendor garmen terpercaya untuk brand clothing, seragam kantor, instansi, event kampus, dan komunitas. Berbagai Varian Pakaian, Jahitan rapi, dan garansi tepat waktu.
          </p>

          {/* Value Props Pills */}
          <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-300 mb-10">
            {/* <div className="flex items-center gap-2">
              <FaCheckCircle className="text-emerald-400" />
              <span>Min. Order 24 Pcs</span>
            </div> */}
            {/* <div className="flex items-center gap-2">
              <FaCheckCircle className="text-emerald-400" />
              <span>Free Desain Mockup 2D</span>
            </div> */}
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-emerald-400" />
              <span>Kapasitas 10.000+ Pcs/Bulan</span>
            </div>
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-indigo-400" />
              <span>Garansi Kualitas 100%</span>
            </div>
            <div className="flex items-center gap-2">
              <FaTruck className="text-orange-400" />
              <span>Siap Kirim Seluruh Indonesia</span>
            </div>
          </div>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20Konveksi%20April%2C%20saya%20tertarik%20konsultasi%20pembuatan%20pakaian%20custom.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-extrabold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-xl shadow-emerald-600/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              <FaWhatsapp className="text-2xl" />
              <span>Dapatkan Penawaran Harga</span>
            </a>

            <a
              href="#katalog"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all text-center"
            >
              <span>Lihat Katalog Produk</span>
              <FaArrowRight className="text-sm" />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Bottom Stats Strip */}
      <div className="absolute bottom-0 inset-x-0 bg-slate-900/90 backdrop-blur-md border-t border-slate-800 hidden md:block py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 gap-6 text-center">
            <div>
              <span className="block text-2xl font-black text-indigo-400">100.000+</span>
              <span className="text-xs text-slate-400 font-medium">Pcs Pakaian Diproduksi</span>
            </div>
            <div>
              <span className="block text-2xl font-black text-emerald-400">250+</span>
              <span className="text-xs text-slate-400 font-medium">Brand &amp; Instansi Puas</span>
            </div>
            <div>
              <span className="block text-2xl font-black text-amber-400">7 - 14 Hari</span>
              <span className="text-xs text-slate-400 font-medium">Waktu Pengerjaan Cepat</span>
            </div>
            <div>
              <span className="block text-2xl font-black text-sky-400">100%</span>
              <span className="text-xs text-slate-400 font-medium">Garansi Ganti Jika Cacat</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Interactive Product Catalog */}
      <section id="katalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase block mb-2">
            Pilihan Produk Terbaik
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Produk Yang Telah Kami Selesaikan
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Semua produk dijahit dengan pola proporsional, benang kuat, serta material kain pilihan terbaik yang nyaman dipakai beraktivitas sehari-hari.
          </p>
        </div>

        <ServiceGrid />
      </section>

      {/* 3. Interactive Price Estimator Simulator */}
      {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PriceEstimator />
      </section> */}

      {/* 4. Fabric & Material Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase block mb-2">
            Edukasi Kualitas Bahan
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Panduan Bahan Kain Berkualitas
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Kami hanya menggunakan kain berstandar Grade A dari pabrik terkemuka agar pakaian tidak mudah melar, adem, dan awet dicuci bertahun-tahun.
          </p>
        </div>

        <FabricGuide />
      </section>

      {/* 5. Production Steps Flow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase block mb-2">
            Alur Pemesanan Transparan
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            4 Langkah Mudah Memesan
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Tanpa ribet! Dari ide konsep hingga seragam sampai di alamat Anda, tim Konveksi April mendampingi proses produksi secara profesional.
          </p>
        </div>

        <ProcessSteps />
      </section>

      {/* 6. Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase block mb-2">
            Kepuasan Klien Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Apa Kata Mereka Tentang Kami?
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Kepercayaan Anda adalah komitmen utama kami. Ratusan brand distro, komunitas motor, universitas, dan korporasi telah mempercayakan produksinya pada Konveksi April.
          </p>
        </div>

        <Testimonials />
      </section>

      {/* 7. Workshop Location & Google Maps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LocationMap />
      </section>

      {/* 8. Call To Action Pre-Footer Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-800 rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 tracking-tight">
              Siap Memulai Produksi Pakaian Anda?
            </h2>
            <p className="text-indigo-100 text-sm sm:text-base mb-8 leading-relaxed">
              Konsultasikan ide desain, jenis bahan, dan perkiraan budget Anda langsung bersama tim kami. Dapatkan penawaran harga terbaik sekarang juga!
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20Konveksi%20April%2C%20saya%20ingin%20konsultasi%20pemesanan%20pakaian%20custom.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-indigo-700 hover:bg-slate-100 font-black rounded-full shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              <FaWhatsapp className="text-2xl text-emerald-600" />
              <span>Hubungi Kami via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
