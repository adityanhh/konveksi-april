import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';

// Data konveksi
const ADDRESS = "Jl. Kencana Arum II No. 2, Bandung";
const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.312984950069!2d107.64448537500589!3d-6.973493793026852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9903a48e895%3A0x6e26715b7410006!2sJl.%20Kencana%20Arum%20II%20No.2%2C%20Cijawura%2C%20Kec.%20Buahbatu%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040287!5e0!3m2!1sid!2sid!4v1699700000000!5m2!1sid!2sid";
const OPERATIONAL_HOURS = "Senin - Sabtu: 09:00 - 19:30 WIB";

const LocationMap = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-8 sm:mb-10">
          Kunjungi Konveksi Kami di Bandung
        </h2>

        {/* Grid responsif: 1 kolom (HP) → 1/3 + 2/3 di lg */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Kolom kiri: detail */}
          <div className="lg:col-span-1">
            <div className="p-5 sm:p-6 bg-white rounded-xl shadow-2xl h-full">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-indigo-700">
                Kantor Pemasaran & Produksi
              </h3>

              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="mt-0.5 mr-3 flex-shrink-0 text-red-500" aria-hidden="true" />
                  <p className="text-base sm:text-lg font-medium leading-relaxed">
                    {ADDRESS}
                  </p>
                </div>

                <div className="flex items-center">
                  <FaClock className="mr-3 flex-shrink-0 text-indigo-500" aria-hidden="true" />
                  <p className="text-base sm:text-lg font-medium">{OPERATIONAL_HOURS}</p>
                </div>
              </div>

              <p className="mt-5 sm:mt-6 text-xs sm:text-sm text-gray-500 italic">
                Mohon hubungi kami terlebih dahulu via WhatsApp sebelum berkunjung.
              </p>

              {/* Satu tombol saja: full width di HP, auto di ≥sm */}
              <div className="mt-5 sm:mt-6">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-5 sm:px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition"
                >
                  Buka di Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Kolom kanan: embed peta */}
          <div className="lg:col-span-2">
            {/* aspect-video biar aman di HP/Tablet; fixed height di desktop */}
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl lg:aspect-auto lg:h-[420px]">
              <iframe
                src={MAPS_EMBED_URL}
                title="Lokasi Konveksi April"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
