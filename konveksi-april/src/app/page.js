import ServiceGrid from '@/components/ServiceGrid';
import LocationMap from '@/components/LocationMap';
import Image from 'next/image';
import Link from 'next/link';

const HERO_IMAGE_PATH = '/images/mesin jahit.jpg'; // Ganti dengan path gambar hero yang sesuai
const WHATSAPP_NUMBER = "6285122909300"; 
// Pastikan Anda mengimpor Image dari 'next/image' di bagian atas file
// import Image from 'next/image';

const HeroSection = () => (
    // Menggunakan relative dan tinggi tetap
    <section className="relative h-[65vh] flex items-center justify-center text-white text-center overflow-hidden">
        
        {/* 1. GAMBAR BACKGROUND */}
        <Image
            src={HERO_IMAGE_PATH}
            alt="Background Konveksi: Tampilan Mesin Jahit atau Produk"
            layout="fill"
            objectFit="cover"
            quality={65} // Optimasi loading
            priority={true}
            className="z-0"
        />

        {/* 2. OVERLAY GELAP (Opacity 60%) */}
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        
        {/* 3. KONTEN UTAMA (Teks) */}
        {/* WAJIB: relative z-20 agar teks muncul di atas overlay */}
        <div className="container mx-auto px-4 relative z-20"> 
            <p className="text-xl font-bold mb-3 uppercase text-red-400">KONVEKSI APRIL BANDUNG</p>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                Bikin kaos, hoodie & seragam custom <br className="hidden md:inline"/> langsung dari Bandung
            </h1>
            <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-3xl mx-auto">
                Produksi cepat • Harga pabrik • Cocok untuk reseller & toko online
                <br />
                Kualitas Premium, Harga Bersahabat.
            </p>
            
            <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-red-600 text-white text-lg font-extrabold rounded-full shadow-2xl hover:bg-red-700 transition duration-300 transform hover:scale-105"
            >
                Hubungi Kami
            </a>
        </div>
    </section>
);


export default function HomePage() {
  return (
    <>
      <HeroSection />
      
      {/* 1. Layanan */}
      <ServiceGrid /> 
      
      {/* 2. Lokasi dan Maps */}
      <LocationMap /> {/* <-- Lokasi baru */}
      
      {/* TODO: Tambahkan Portofolio Preview Section di sini */}
    </>
  );
}