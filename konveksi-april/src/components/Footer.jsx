import Link from 'next/link';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        
        {/* Bagian Utama Footer: 3 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
          
          {/* Kolom 1: Informasi Kontak */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-indigo-400">Hubungi Kami</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0 text-indigo-400" />
                <p>Jl. Kencana Arum II No. 2, Cijawura, Buahbatu, Bandung, 40287</p>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 flex-shrink-0 text-indigo-400" />
                <p>+62 851-2290-9300</p>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 flex-shrink-0 text-indigo-400" />
                <p>aprilsmoon04@gmail.com</p>
              </li>
            </ul>
          </div>
          
          {/* Kolom 2: Navigasi Cepat */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-indigo-400">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition duration-200">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/portofolio" className="text-gray-400 hover:text-white transition duration-200">
                  Portofolio
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="text-gray-400 hover:text-white transition duration-200">
                  Layanan & Proses Order
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-gray-400 hover:text-white transition duration-200">
                  Kontak Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Jenis Produk */}
          <div className="col-span-1 md:col-span-1">
             <h4 className="text-xl font-bold mb-4 text-indigo-400">Produk</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Kaos & T-Shirt Custom</li>
              <li>Kemeja PDL & Seragam Kantor</li>
              <li>Jaket & Hoodie</li>
              <li>Topi & Merchandise</li>
            </ul>
          </div>
          
          {/* Kolom 4: Sosial Media & Legal */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-xl font-bold mb-4 text-indigo-400">Ikuti Kami</h4>
            <div className="flex space-x-4 mb-6">
                <a href="https://instagram.com/_aprilmoons" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-pink-500 transition duration-200">
                    <FaInstagram className="w-6 h-6" />
                </a>
                <a href="https://facebook.com/aprilmoons" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-blue-600 transition duration-200">
                    <FaFacebook className="w-6 h-6" />
                </a>
                {/* Tambahkan ikon lain jika perlu */}
            </div>
            <p className="text-sm text-gray-500">
                <Link href="/syarat-ketentuan" className="hover:text-white">Syarat & Ketentuan</Link>
            </p>
            <p className="text-sm text-gray-500">
                <Link href="/kebijakan-privasi" className="hover:text-white">Kebijakan Privasi</Link>
            </p>
          </div>
        </div>

        {/* Baris Hak Cipta */}
        <div className="pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Konveksi April All Right Reserved.</p>
          <p className="mt-1">Made with ❤️ by Digital Did Production</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;