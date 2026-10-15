import Link from 'next/link';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 pt-12 pb-8">
        {/* 3 kolom (tanpa Produk) → auto “justify” di grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 border-b border-gray-800 pb-10">
          {/* Contact */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 text-indigo-400">Hubungi Kami</h4>
            <ul className="space-y-3 text-sm sm:text-base text-gray-300">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-0.5 mr-3 flex-shrink-0 text-indigo-400" aria-hidden="true" />
                <p className="leading-relaxed">
                  Jl. Kencana Arum II No. 2, Cijawura, Buahbatu, Bandung, 40287
                </p>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 flex-shrink-0 text-indigo-400" aria-hidden="true" />
                <a
                  href="tel:+6285122909300"
                  className="hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
                >
                  +62 851-2290-9300
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 flex-shrink-0 text-indigo-400" aria-hidden="true" />
                <a
                  href="mailto:aprilsmoon04@gmail.com"
                  className="hover:text-white break-all md:break-normal focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
                >
                  aprilsmoon04@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Nav */}
          <nav aria-label="Footer Navigasi" className="sm:justify-self-start lg:justify-self-center">
            <h4 className="text-lg sm:text-xl font-bold mb-4 text-indigo-400">Navigasi</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="text-gray-300 hover:text-white transition-colors">
                  Galeri Hasil Produksi
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="text-gray-300 hover:text-white transition-colors">
                  Layanan &amp; Proses Order
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-gray-300 hover:text-white transition-colors">
                  Kontak Kami
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social & Legal */}
          <div className="sm:justify-self-start lg:justify-self-end">
            <h4 className="text-lg sm:text-xl font-bold mb-4 text-indigo-400">Ikuti Kami</h4>
            <div className="flex flex-wrap gap-4 mb-6">
              <a
                href="https://instagram.com/_aprilmoons"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-300 hover:text-pink-500 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 rounded p-2 -m-2"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com/aprilmoons"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-300 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 rounded p-2 -m-2"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
            </div>
            <div className="space-y-2 text-sm sm:text-base text-gray-400">
              <Link href="/syarat-ketentuan" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded">
                Syarat &amp; Ketentuan
              </Link>
              <br />
              <Link href="/kebijakan-privasi" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded">
                Kebijakan Privasi
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 text-center text-xs sm:text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Konveksi April. All Rights Reserved.</p>
          <p className="mt-1">Made with ❤️ by Digital Did Production</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
