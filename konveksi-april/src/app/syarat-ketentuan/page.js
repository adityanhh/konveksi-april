import Link from 'next/link';
import { FaArrowLeft, FaShieldAlt } from 'react-icons/fa';

export const metadata = {
  title: 'Syarat & Ketentuan Layanan - Konveksi April Bandung',
  description: 'Ketentuan pemesanan, produksi, toleransi ukuran, dan garansi di Konveksi April Bandung.',
};

export default function TermsPage() {
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase mb-3">
            <FaShieldAlt />
            <span>Ketentuan Kerjasama</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Syarat &amp; Ketentuan Pemesanan
          </h1>
          <p className="text-sm text-slate-500 mt-2">
            Terakhir diperbarui: 16 Oktober 2025
          </p>
        </div>

        <div className="space-y-6 text-sm sm:text-base leading-relaxed text-slate-700">
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">1. Alur Pemesanan &amp; Desain</h2>
            <p>
              Pemesanan dinyatakan valid setelah klien menyetujui Purchase Order (PO) atau rincian spesifikasi desain yang telah dikonfirmasi bersama tim Konveksi April melalui WhatsApp atau invoice resmi.
            </p>
            <p>
              Mockup 2D digital yang diberikan oleh Konveksi April adalah representasi visual desain. Toleransi pergeseran warna antara layar monitor (RGB) dan hasil cetak sablon (CMYK/Pantone) berkisar 5-10%.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">2. Sistem Pembayaran</h2>
            <p>
              - Pembayaran Down Payment (DP) minimal sebesar 50% dari total nilai transaksi wajib dilakukan sebelum proses pengadaan bahan dan antrean produksi dimulai.
            </p>
            <p>
              - Sisa pelunasan 50% wajib diselesaikan setelah seluruh pesanan selesai diproduksi dan diverifikasi melalui foto/video dokumentasi QC sebelum barang diserahkan ke pihak ekspedisi atau diambil di workshop.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">3. Toleransi Ukuran &amp; Jahit</h2>
            <p>
              Karena proses pemotongan dan penjahitan melibatkan pengerjaan manusia (handmade craftsmanship), terdapat toleransi selisih ukuran pola sekitar 1 - 2 cm dari Size Chart standar yang telah disepakati.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">4. Garansi Kualitas &amp; Retur</h2>
            <p>
              Konveksi April memberikan garansi purna jual berupa perbaikan atau penggantian barang jika ditemukan cacat produksi murni (seperti: jahitan bolong/lepas, sablon luntur pada pencucian pertama sesuai petunjuk, atau salah ukuran signifikan).
            </p>
            <p>
              Klaim garansi wajib diajukan maksimal 3 x 24 jam setelah barang diterima oleh klien dengan menyertakan bukti video unboxing tanpa jeda.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
