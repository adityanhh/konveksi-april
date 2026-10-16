import Link from 'next/link';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaTshirt
} from 'react-icons/fa';

const WHATSAPP_NUMBER = '6285122909300';
const EMAIL = 'aprilsmoon04@gmail.com';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 border-b border-slate-800/80 pb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/30">
                <FaTshirt className="text-lg" />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                KONVEKSI<span className="text-indigo-400">APRIL</span>
              </span>
            </Link>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Pusat vendor produksi konveksi dan sablon terpercaya di Bandung. Melayani pembuatan kaos distro, kemeja PDL, polo shirt, dan hoodie dengan standar kualitas terbaik.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/_aprilmoons"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Konveksi April"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-pink-400 hover:border-pink-500/50 flex items-center justify-center transition-all"
              >
                <FaInstagram className="text-base" />
              </a>
              <a
                href="https://facebook.com/aprilmoons"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Konveksi April"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 flex items-center justify-center transition-all"
              >
                <FaFacebook className="text-base" />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Konveksi April"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 flex items-center justify-center transition-all"
              >
                <FaWhatsapp className="text-base" />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-indigo-400 mb-4">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="hover:text-white transition-colors">
                  Produk &amp; Spesifikasi
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="hover:text-white transition-colors">
                  Galeri Portofolio
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-white transition-colors">
                  Kontak &amp; Lokasi Workshop
                </Link>
              </li>
            </ul>
          </div>

          {/* Layanan Produk */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-indigo-400 mb-4">
              Produk Utama
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>Kaos Combed 24s &amp; 30s Distro</li>
              <li>Polo Shirt Lacoste Pique &amp; CVC</li>
              <li>Kemeja PDL &amp; PDH Nagata Drill</li>
              <li>Jaket Hoodie &amp; Crewneck Fleece</li>
              <li>Jaket Bomber &amp; Varsity Custom</li>
              <li>Topi Snapback &amp; Canvas Totebag</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-indigo-400 mb-4">
              Workshop Bandung
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <FaMapMarkerAlt className="text-indigo-400 mt-1 flex-shrink-0" />
                <span className="leading-relaxed">
                  Jl. Kencana Arum II No. 2, Cijawura, Buahbatu, Bandung, Jawa Barat 40287
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <FaPhoneAlt className="text-indigo-400 flex-shrink-0" />
                <a href="tel:+6285122909300" className="hover:text-white transition-colors">
                  +62 851-2290-9300
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <FaEnvelope className="text-indigo-400 flex-shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Konveksi April Bandung. Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-5">
            <Link href="/syarat-ketentuan" className="hover:text-slate-300 transition-colors">
              Syarat &amp; Ketentuan
            </Link>
            <span>•</span>
            <Link href="/kebijakan-privasi" className="hover:text-slate-300 transition-colors">
              Kebijakan Privasi
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
