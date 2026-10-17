import { FaDraftingCompass, FaFileInvoiceDollar, FaIndustry, FaShippingFast } from 'react-icons/fa';

const STEPS = [
  {
    num: '01',
    icon: FaDraftingCompass,
    title: 'Konsultasi Produk',
    desc: 'Kirimkan ide, sketsa, atau file produk Anda. Tim kami buatkan simulasi mockup digital tampak depan & belakang secara gratis.'
  },
  {
    num: '02',
    icon: FaFileInvoiceDollar,
    title: 'Penawaran & Sample Kain',
    desc: 'Kami hitungkan estimasi harga terbaik sesuai budget. Anda bisa request sampel bahan fisik atau proofing cetak sebelum produksi massal.'
  },
  {
    num: '03',
    icon: FaIndustry,
    title: 'Produksi & Quality Control',
    desc: 'Proses jahit, sablon, dan bordir dikerjakan oleh penjahit berpengalaman. Setiap pakaian melewati tahap inspeksi benang dan QC ketat.'
  },
  {
    num: '04',
    icon: FaShippingFast,
    title: 'Packing & Kirim Nusantara',
    desc: 'Setiap baju di-steam rapi, dilipat, dan di-plastik satuan. Siap dikirim via kargo udara/darat ke seluruh kota di Indonesia dengan aman.'
  }
];

export default function ProcessSteps() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      {STEPS.map((step) => {
        const Icon = step.icon;
        return (
          <div
            key={step.num}
            className="relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
          >
            {/* Step Number Watermark */}
            <div className="text-4xl sm:text-5xl font-black text-slate-100 group-hover:text-indigo-100 transition-colors absolute top-4 right-5 select-none">
              {step.num}
            </div>

            <div>
              {/* Icon Box */}
              <div className="w-13 h-13 rounded-2xl bg-indigo-50 group-hover:bg-indigo-600 text-indigo-600 group-hover:text-white flex items-center justify-center text-2xl transition-all duration-300 shadow-sm mb-5">
                <Icon />
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-indigo-600">
              <span>Langkah {step.num}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
