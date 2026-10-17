import { FaStar, FaQuoteLeft, FaGoogle, FaCheckCircle } from 'react-icons/fa';

const REVIEWS = [
  {
    initial: 'R',
    avatarBg: 'bg-purple-600 text-white',
    name: 'renjanavintage storebackup',
    subtitle: '1 ulasan • setahun lalu',
    content: 'tempat produksi pakaian terbaik di bandung',
    rating: 5
  },
  {
    initial: 'A',
    avatarBg: 'bg-indigo-600 text-white',
    name: 'achmad santoso',
    subtitle: '3 ulasan • setahun lalu',
    content: 'Rekomendasi buat pakaian Gathering & Jersey',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {REVIEWS.map((rev, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top Row: User Avatar & Google Badge */}
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3.5">
                  {/* Masked Initial Avatar */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-md ${rev.avatarBg}`}
                  >
                    {rev.initial}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight">
                      {rev.name}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      {rev.subtitle}
                    </p>
                  </div>
                </div>

                {/* Google Icon Badge */}
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/70 text-slate-600 flex items-center gap-1.5" title="Ulasan Google Terverifikasi">
                  <FaGoogle className="text-xs text-red-500" />
                  <span className="text-[10px] font-bold text-slate-700 hidden sm:inline">Google</span>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(rev.rating)].map((_, i) => (
                  <FaStar key={i} className="text-sm fill-current" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-slate-800 text-base sm:text-lg font-medium leading-relaxed italic mb-6">
                &ldquo;{rev.content}&rdquo;
              </p>
            </div>

            {/* Verified Footer */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="inline-flex items-center gap-1.5 text-emerald-600 font-semibold">
                <FaCheckCircle className="text-xs" />
                <span>Pelanggan Terverifikasi</span>
              </span>
              <FaQuoteLeft className="text-slate-200 text-base" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
