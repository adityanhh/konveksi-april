'use client';

import { useState } from 'react';
import LocationMap from '@/components/LocationMap';
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronDown,
  FaQuestionCircle
} from 'react-icons/fa';

const WHATSAPP_NUMBER = '6285122909300';
const EMAIL = 'aprilsmoon04@gmail.com';
const ADDRESS = 'Jl. Kencana Arum II No. 2, Cijawura, Kec. Buahbatu, Kota Bandung, Jawa Barat 40287';

const FAQS = [
  {
    q: 'Berapa minimal order (MOQ) di Konveksi April?',
    a: 'Minimal order kami sangat fleksibel: untuk Kaos, Polo, dan Kemeja adalah 24 pcs (2 lusin). Untuk Topi & Aksesoris adalah 36 pcs. Bisa campur ukuran (S, M, L, XL, XXL).'
  },
  {
    q: 'Berapa lama estimasi waktu produksi?',
    a: 'Rata-rata waktu produksi berkisar antara 7 hingga 12 hari kerja tergantung kuantitas dan kerumitan desain. Untuk pesanan mendesak (express deadline), silakan koordinasikan dengan admin kami via WhatsApp.'
  },
  {
    q: 'Apakah bisa dibuatkan mockup digital gratis?',
    a: 'Bisa banget! Cukup kirimkan logo atau konsep desain Anda dalam format PNG, PDF, atau vector CDR/AI. Tim desainer kami akan membuatkan visualisasi mockup 2D tampak depan dan belakang tanpa dipungut biaya.'
  },
  {
    q: 'Apakah melayani pengiriman ke luar kota / luar pulau?',
    a: 'Ya, kami melayani pengiriman ke seluruh Indonesia menggunakan kargo terpercaya (Indah Cargo, J&T Cargo, Baraka, Lion Parcel, Dakota, KALOG) dengan tarif hemat untuk partai besar.'
  },
  {
    q: 'Bagaimana sistem pembayaran di Konveksi April?',
    a: 'Sistem pembayaran menggunakan Down Payment (DP) sebesar 25% saat PO dan desain disetujui untuk memulai antrean produksi. Pelunasan 75% dilakukan saat pakaian selesai di-packing dan siap dikirim.'
  }
];

export default function KontakPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="space-y-16 sm:space-y-20 py-12 sm:py-16">
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-14 text-white text-center shadow-xl border border-indigo-500/20">
          <div className="max-w-2xl mx-auto">
            <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase block mb-3">
              Hubungi Tim Kami
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
              Konsultasi &amp; Kunjungi Workshop
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Ada pertanyaan seputar spesifikasi kain, harga, atau ingin membuat sample? Kami siap membantu mewujudkan seragam terbaik untuk Anda.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Contact Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card WhatsApp */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl mb-5">
                <FaWhatsapp />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">WhatsApp Resmi</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Layanan fast response untuk konsultasi bahan, negosiasi harga, dan pantauan progres order.
              </p>
              <p className="text-indigo-600 font-extrabold text-base mb-6">
                +62 851-2290-9300
              </p>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20Konveksi%20April%2C%20saya%20ingin%20konsultasi%20pemesanan%20konveksi.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-md"
            >
              <FaWhatsapp className="text-lg" />
              <span>Chat WhatsApp</span>
            </a>
          </div>

          {/* Card Email & Telepon */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl mb-5">
                <FaEnvelope />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Email Proposal</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Kirimkan berkas tender perusahaan, surat penawaran, atau file desain resolusi tinggi Anda.
              </p>
              <p className="text-indigo-600 font-semibold text-sm break-all mb-6">
                {EMAIL}
              </p>
            </div>
            <a
              href={`mailto:${EMAIL}?subject=Permintaan%20Penawaran%20Konveksi`}
              className="w-full inline-flex items-center justify-center gap-2 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-indigo-600 text-xs sm:text-sm font-bold rounded-xl transition-all"
            >
              <FaEnvelope className="text-sm" />
              <span>Kirim Email</span>
            </a>
          </div>

          {/* Card Jam Operasional */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center text-2xl mb-5">
                <FaClock />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Jam Operasional</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Workshop dan kantor pemasaran kami buka setiap hari kerja untuk kunjungan konsultasi langsung.
              </p>
              <div className="space-y-1 text-xs sm:text-sm text-slate-700 font-medium mb-6">
                <div><strong>Senin - Sabtu:</strong> 09.00 - 21.00 WIB</div>
                <div><strong>Minggu:</strong> Konfirmasi via WA</div>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Jl.+Kencana+Arum+II+No.+2%2C+Bandung"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-md"
            >
              <FaMapMarkerAlt className="text-sm" />
              <span>Buka Petunjuk Arah</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. Embedded Location Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LocationMap />
      </section>

      {/* 4. FAQ Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase block mb-2">
            Pertanyaan Umum
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions (FAQ)
          </h2>
          <p className="mt-2 text-slate-600 text-xs sm:text-sm">
            Jawaban cepat untuk hal-hal yang paling sering ditanyakan oleh klien kami.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-800 hover:text-indigo-600 transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <FaChevronDown
                    className={`text-slate-400 text-xs transition-transform duration-200 flex-shrink-0 ${isOpen ? 'transform rotate-180 text-indigo-600' : ''
                      }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
