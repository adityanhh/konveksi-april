import { FaMapMarkerAlt, FaClock, FaDirections, FaWhatsapp } from 'react-icons/fa';

const ADDRESS = "Jl. Kencana Arum II No. 2, Cijawura, Kec. Buahbatu, Kota Bandung, Jawa Barat 40287";
const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.312984950069!2d107.64448537500589!3d-6.973493793026852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9903a48e895%3A0x6e26715b7410006!2sJl.%20Kencana%20Arum%20II%20No.2%2C%20Cijawura%2C%20Kec.%20Buahbatu%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040287!5e0!3m2!1sid!2sid!4v1699700000000!5m2!1sid!2sid";
const OPERATIONAL_HOURS = "Senin - Sabtu: 09:00 - 19:30 WIB";
const WHATSAPP_NUMBER = "6285122909300";

export default function LocationMap() {
  return (
    <div className="w-full">
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase block mb-2">
          Kunjungan Workshop Langsung
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
          Kunjungi Workshop Kami di Bandung
        </h2>
        <p className="mt-2 text-slate-600 text-xs sm:text-sm">
          Ingin melihat langsung proses penjahitan, mengecek sampel kain, atau mengukur pola? Silakan mampir ke workshop kami.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Info Card */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-xl flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wide mb-4">
              <FaMapMarkerAlt className="text-indigo-600" />
              <span>Pusat Produksi &amp; Kantor</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
              Konveksi April Bandung
            </h3>

            <div className="space-y-4 text-slate-700 text-sm mb-6">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-red-500 flex-shrink-0 text-base" />
                <p className="leading-relaxed">
                  {ADDRESS}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FaClock className="text-indigo-600 flex-shrink-0 text-base" />
                <p className="font-semibold text-slate-800">{OPERATIONAL_HOURS}</p>
              </div>
            </div>

            <p className="text-xs text-slate-500 italic bg-slate-50 p-3.5 rounded-xl border border-slate-100">
              💡 <strong>Tips:</strong> Disarankan membuat janji temu via WhatsApp sebelum berkunjung agar sampel bahan yang Anda inginkan telah disiapkan oleh tim kami.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-indigo-600/20"
            >
              <FaDirections className="text-base" />
              <span>Petunjuk Google Maps</span>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20Konveksi%20April%2C%20saya%20berencana%20berkunjung%20ke%20workshop.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-emerald-600/20"
            >
              <FaWhatsapp className="text-base" />
              <span>Janji Temu</span>
            </a>
          </div>
        </div>

        {/* Google Maps Embed Frame */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-3 border border-slate-200/80 shadow-xl overflow-hidden min-h-[340px] sm:min-h-[400px]">
          <iframe
            src={MAPS_EMBED_URL}
            title="Lokasi Konveksi April Bandung di Google Maps"
            className="w-full h-full min-h-[340px] sm:min-h-[400px] rounded-2xl border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
