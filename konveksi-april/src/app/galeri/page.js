const GaleriPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Galeri Hasil Produksi</h1>
      <p className="text-center text-gray-600 mb-12">
        Lihatlah hasil proyek-proyek terbaru kami untuk Kaos, Kemeja, dan Jaket. 
      </p>

      {/* TODO: Tambahkan Grid Portofolio dengan data dari file JSON/CMS di sini */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">Foto Proyek 1</div>
        <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">Foto Proyek 2</div>
        <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">Foto Proyek 3</div>
        {/* Dst. */}
      </div>
    </div>
  );
};

export default GaleriPage;