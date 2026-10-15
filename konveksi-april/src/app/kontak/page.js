import LocationMap from '@/components/LocationMap';
import { FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

const WHATSAPP_NUMBER = '6285122909300';

const KontakPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
          Hubungi Kami
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Punya pertanyaan seputar pemesanan seragam, kaos, kemeja, atau jaket?
          Silakan hubungi kami langsung melalui WhatsApp atau kunjungi lokasi workshop kami.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card WhatsApp */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col justify-between items-start">
            <div>
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-2xl mb-4">
                <FaWhatsapp />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Chat WhatsApp</h3>
              <p className="text-gray-600 mb-6">
                Respon cepat untuk konsultasi bahan, negosiasi harga, dan info progres order.
              </p>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo%2C%20saya%20ingin%20konsultasi%20pemesanan%20konveksi.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition duration-300 shadow-md"
            >
              <FaWhatsapp className="text-lg" />
              Hubungi via WhatsApp
            </a>
          </div>

          {/* Card Workshop */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col justify-between items-start">
            <div>
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center text-2xl mb-4">
                <FaMapMarkerAlt />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Workshop & Kantor</h3>
              <p className="text-gray-600 mb-2">
                Jl. Kencana Arum II No. 2, Cijawura, Buahbatu, Kota Bandung
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Jam Operasional: Senin - Sabtu (09.00 - 19.30 WIB)
              </p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Jl.+Kencana+Arum+II+No.+2%2C+Bandung"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition duration-300 shadow-md"
            >
              Lihat di Google Maps
            </a>
          </div>
        </div>

        <LocationMap />
      </div>
    </div>
  );
};

export default KontakPage;
