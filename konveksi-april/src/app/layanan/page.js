import Image from 'next/image';
import ServiceGrid from '@/components/ServiceGrid';
import PriceEstimator from '@/components/PriceEstimator';
import {
  FaPaintBrush,
  FaCogs,
  FaCheckCircle,
  FaShieldAlt,
  FaWhatsapp,
  FaTshirt
} from 'react-icons/fa';

const WHATSAPP_NUMBER = '6285122909300';

const TECHNIQUES = [
  {
    title: 'Sablon Plastisol & DTF High-Density',
    desc: 'Standar emas clothing distro Bandung. Hasil cetak warna solid, tajam dengan presisi mikron, elastis, dan tahan puluhan kali siklus cuci.',
    durability: 'Maksimal (Standar Distro Original)',
    bestFor: 'Kaos distro, tipografi tebal, grafis streetwear',
    image: '/images/Kaos.jpeg'
  },
  {
    title: 'Bordir Komputer Presisi Tinggi',
    desc: 'Menggunakan mesin bordir multi-head komputer berteknologi modern dengan benang poliester mengkilap. Jahitan padat dan logo kecil terbaca tajam.',
    durability: 'Permanen (Seumur Hidup Pakaian)',
    bestFor: 'Logo kemeja PDL, seragam kantor, polo shirt',
    image: '/images/KemejaForte.jpeg'
  },
  {
    title: 'Bordir Chenille & Patch Varsity',
    desc: 'Aplikasi bordir handuk/timbul bertekstur empuk ala jaket varsity collegiate Amerika, dipadu bordir laken dan patch bendera/insignia.',
    durability: 'Sangat Tinggi & Mewah',
    bestFor: 'Jaket varsity, outerwear baseball, bomber',
    image: '/images/Varsity.jpeg'
  },
  {
    title: 'Full Print Sublimation Digital',
    desc: 'Teknologi transfer panas resolusi tinggi yang meresap ke dalam pori-pori kain dry-fit. Tidak menutup sirkulasi udara dan warna tidak luntur.',
    durability: 'Menyatu dengan Kain (Anti Pecah)',
    bestFor: 'Jersey olahraga, jersey batik, motif custom',
    image: '/images/Jersey.jpeg'
  }
];

export const metadata = {
  title: 'Layanan & Spesifikasi Produksi - Konveksi April Bandung',
  description:
    'Layanan produksi garmen lengkap di Bandung: Sablon DTF, Plastisol, Bordir Komputer, dan Jahit Rantai Standar Distro.',
};

export default function LayananPage() {
  return (
    <div className="space-y-16 sm:space-y-24 py-12 sm:py-16">
      {/* 1. Header Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl border border-indigo-500/20">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase block mb-3">
              Layanan Spesialisasi Garment
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6">
              Teknologi Produksi &amp; Kustomisasi Pakaian Tanpa Batas
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              Dari pemilihan gramasi kain, pembuatan pola custom, teknik sablon mutakhir, hingga finishing packing satuan. Kami memastikan pesanan Anda memenuhi standar clothing brand profesional.
            </p>
            <div className="flex flex-wrap gap-4 text-xs sm:text-sm font-semibold">
              <span className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-2">
                <FaCheckCircle className="text-emerald-400" /> Standar Jahit Rantai &amp; Overdeck
              </span>
              <span className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-2">
                <FaCheckCircle className="text-emerald-400" /> Tinta Sablon Ramah Lingkungan
              </span>
              <span className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-2">
                <FaCheckCircle className="text-emerald-400" /> Steam Uap &amp; Quality Control
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Teknik Sablon & Bordir */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase block mb-2">
            Pilihan Cetak Desain
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Teknik Sablon &amp; Bordir Komputer Kami
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Sesuaikan teknik sablon atau bordir dengan kebutuhan desain dan budget Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TECHNIQUES.map((tech, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-6 bg-slate-100">
                  <Image
                    src={tech.image}
                    alt={tech.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {tech.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {tech.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Ketahanan:</span>
                  <span className="font-bold text-indigo-700">{tech.durability}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Cocok Untuk:</span>
                  <span className="font-semibold text-slate-800 text-right">{tech.bestFor}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Katalog Produk Lengkap */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase block mb-2">
            Pilihan Produk
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Produk Pakaian yang Kami Kerjakan
          </h2>
        </div>

        <ServiceGrid />
      </section>

      {/* 4. Interactive Cost Simulation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PriceEstimator />
      </section>

      {/* 5. CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-black mb-3">
            Punya Permintaan Khusus atau Desain Sendiri?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Tim kami siap membantu merealisasikan pakaian impian Anda, mulai dari pemilihan bahan, pengukuran ukuran (size chart), hingga sampel fisik.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20Konveksi%20April%2C%20saya%20ingin%20konsultasi%20desain%20dan%20permintaan%20khusus.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            <FaWhatsapp className="text-2xl" />
            <span>Chat Langsung dengan Tim Produksi</span>
          </a>
        </div>
      </section>
    </div>
  );
}