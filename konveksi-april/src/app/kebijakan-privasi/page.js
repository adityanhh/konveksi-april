import Link from 'next/link';
import { FaArrowLeft, FaUserShield } from 'react-icons/fa';

export const metadata = {
  title: 'Kebijakan Privasi - Konveksi April Bandung',
  description: 'Komitmen perlindungan data dan privasi pelanggan Konveksi April Bandung.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-slate-800">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-800 mb-8 transition-colors"
      >
        <FaArrowLeft />
        <span>Kembali ke Beranda</span>
      </Link>

      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xl space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase mb-3">
            <FaUserShield />
            <span>Perlindungan Data</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Kebijakan Privasi
          </h1>
          <p className="text-sm text-slate-500 mt-2">
            Terakhir diperbarui: 16 Oktober 2025
          </p>
        </div>

        <div className="space-y-6 text-sm sm:text-base leading-relaxed text-slate-700">
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">1. Data yang Kami Kumpulkan</h2>
            <p>
              Kami hanya mengumpulkan data yang diperlukan untuk memproses pesanan dan pengiriman barang Anda, seperti nama, nomor WhatsApp/telepon, alamat email, dan alamat tujuan ekspedisi.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">2. Kerahasiaan Desain Klien</h2>
            <p>
              Kami sangat menghargai hak kekayaan intelektual (HAKI) dari brand clothing dan instansi Anda. File karya grafis, logo eksklusif, dan konsep pakaian yang Anda serahkan tidak akan pernah dijual, dibagikan, atau diproduksi ulang untuk pihak ketiga tanpa izin tertulis dari Anda.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">3. Penggunaan Cookie &amp; Analitik</h2>
            <p>
              Website kami menggunakan Google Tag Manager / Google Analytics secara anonim semata-mata untuk memantau performa kecepatan situs dan kenyamanan pengalaman navigasi pengunjung.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
