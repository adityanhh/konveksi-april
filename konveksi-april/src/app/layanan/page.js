import { services } from '../components/services'; // Ambil data services lagi

const LayananPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Proses Pemesanan & Layanan Kami</h1>
      
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Detil Layanan */}
        <section>
            <h2 className="text-3xl font-bold text-indigo-700 mb-6">Jenis Produk yang Kami Kerjakan</h2>
            <ul className="list-disc pl-5 text-lg space-y-2">
                {services.map(s => (
                    <li key={s.id} className="font-semibold">{s.title}: <span className="font-normal text-gray-600">{s.description}</span></li>
                ))}
            </ul>
        </section>

        {/* Proses Order */}
        <section>
            <h2 className="text-3xl font-bold text-indigo-700 mb-6">Tahapan Order Mudah</h2>
            <ol className="space-y-4">
                <li className="p-4 bg-gray-50 border-l-4 border-yellow-500 rounded-lg">
                    <span className="font-bold text-xl">1. Konsultasi & Desain:</span> Kirimkan desain Anda atau konsultasikan ide Anda via WhatsApp.
                </li>
                <li className="p-4 bg-gray-50 border-l-4 border-yellow-500 rounded-lg">
                    <span className="font-bold text-xl">2. Penawaran Harga:</span> Kami berikan *quote* harga dan estimasi waktu pengerjaan.
                </li>
                <li className="p-4 bg-gray-50 border-l-4 border-yellow-500 rounded-lg">
                    <span className="font-bold text-xl">3. Produksi & Kirim:</span> Proses produksi dimulai setelah DP. Barang siap, pelunasan, lalu kirim!
                </li>
            </ol>
        </section>
      </div>
    </div>
  );
};

export default LayananPage;