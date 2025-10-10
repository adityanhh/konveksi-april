import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import Link from 'next/link';

// Ganti nilai-nilai di bawah ini dengan data konveksi APRIL
const ADDRESS = "Jl. Kencana Arum II No. 2, Bandung";
// URL Maps ini adalah placeholder. Ganti dengan URL Embed (<iframe> src) dari Google Maps asli.
const MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.312984950069!2d107.64448537500589!3d-6.973493793026852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9903a48e895%3A0x6e26715b7410006!2sJl.%20Kencana%20Arum%20II%20No.2%2C%20Cijawura%2C%20Kec.%20Buahbatu%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040287!5e0!3m2!1sid!2sid!4v1699700000000!5m2!1sid!2sid"; // URL placeholder
const OPERATIONAL_HOURS = "Senin - Sabtu: 08:00 - 17:00 WIB";
const WAZE_MAPS_URL = "https://waze.com/ul?q=Jl.%20Kencana%20Arum%20II%20No.2%2C%20Bandung";

const LocationMap = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
          Kunjungi Konveksi Kami di Bandung
        </h2>

        {/* Layout Utama: 1/3 Deskripsi, 2/3 Maps */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Kolom Kiri: Detail Lokasi */}
          <div className="lg:w-1/3 p-6 bg-white rounded-xl shadow-2xl h-fit">
            <h3 className="text-2xl font-bold mb-4 text-indigo-700">Kantor Pemasaran & Produksi</h3>
            
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0 text-red-500" />
                <p className="text-lg font-medium">{ADDRESS}</p>
              </div>
              
              <div className="flex items-center">
                <FaClock className="mr-3 flex-shrink-0 text-indigo-500" />
                <p className="text-lg font-medium">{OPERATIONAL_HOURS}</p>
              </div>
            </div>

            <p className="mt-6 text-sm text-gray-500 italic">
              Mohon hubungi kami terlebih dahulu via WhatsApp sebelum berkunjung.
            </p>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block w-full text-center px-4 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md"
            >
              Buka di Google Maps
            </a>
          </div>

          {/* Kolom Kanan: Google Maps Embed */}
          <div className="lg:w-2/3 h-96">
            <iframe
              src={MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Konveksi April"
            ></iframe>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default LocationMap;