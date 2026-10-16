import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const REVIEWS = [
  {
    name: 'Rian Pratama',
    role: 'Founder Brand Distro Bandung',
    product: 'Kaos Heavyweight Combed 24s',
    content: 'Udah 3 tahun langganan sama Konveksi April buat brand clothing saya. Jahitan rantainya presisi, sablon plastisol tebal dan awet gak gampang retak. Kapasitas produksi on-time terus!',
    rating: 5
  },
  {
    name: 'Siti Sarah, S.E.',
    role: 'HRGA PT Samudera Logistik',
    product: 'Kemeja PDL Nagata Drill',
    content: 'Pesan 120 pcs seragam kerja kantor lapangan. Bahannya beneran dingin, bordir logo perusahaan rapi banget sampe detail kecil keliatan jelas. Respon admin WhatsApp-nya sangat informatif.',
    rating: 5
  },
  {
    name: 'Dimas Aditya',
    role: 'Ketua Panitia Event Musik Kampus',
    product: 'Hoodie Fleece & Kaos Panitia',
    content: 'Deadline mepet cuma 10 hari buat acara 250 panitia. Sempet khawatir gak keburu, tapi ternyata Konveksi April beres H-2! Teman-teman puas sama kualitas bahan fleece-nya yang lembut.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
      {REVIEWS.map((rev, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            {/* Stars & Quote Icon */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(rev.rating)].map((_, i) => (
                  <FaStar key={i} className="text-sm" />
                ))}
              </div>
              <FaQuoteLeft className="text-indigo-200 text-xl" />
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
              &ldquo;{rev.content}&rdquo;
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">
              {rev.name}
            </h4>
            <p className="text-xs text-indigo-600 font-semibold mb-1">
              {rev.role}
            </p>
            <span className="inline-block text-[11px] font-medium text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
              Order: {rev.product}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
