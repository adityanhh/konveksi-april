import ServiceGrid from '@/components/ServiceGrid';
import LocationMap from '@/components/LocationMap';
import Image from 'next/image';
// import Link from 'next/link'; // ga kepake di snippet ini

const HERO_IMAGE_PATH = '/images/mesin jahit.jpg'; // kalau bisa, rename tanpa spasi: /images/mesin-jahit.jpg
const WHATSAPP_NUMBER = '6285122909300';

function HeroSection() {
  return (
    <section className="relative h-[56vh] sm:h-[62vh] md:h-[72vh] lg:h-[80vh] flex items-center justify-center text-white text-center overflow-hidden">
      {/* BG image full-bleed */}
      <Image
        src={HERO_IMAGE_PATH}
        alt="Background Konveksi: Mesin jahit / produk"
        fill
        priority
        quality={65}
        sizes="100vw"
        className="z-0 object-cover object-center"
      />

      {/* Overlay untuk kontras */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Copy */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-20 pt-safe pb-safe">
        <p className="text-xs sm:text-sm md:text-base font-semibold mb-3 tracking-wide text-red-300">
          KONVEKSI APRIL BANDUNG
        </p>

        <h1 className="font-black mb-4 sm:mb-5 leading-tight text-[28px] sm:text-4xl md:text-6xl lg:text-7xl">
          Bikin kaos, hoodie & seragam custom
          <br className="hidden sm:inline" /> langsung dari Bandung
        </h1>

        <p className="mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-gray-200/95 max-w-[52ch] mb-6 sm:mb-8">
          Produksi cepat • Harga pabrik • Cocok untuk reseller & toko online
          <br className="hidden md:block" />
          Kualitas Premium, Harga Bersahabat.
        </p>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full sm:w-auto px-5 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4
                     bg-red-600 hover:bg-red-700 text-white font-extrabold rounded-xl sm:rounded-full
                     shadow-2xl hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition
                     duration-300 transform hover:-translate-y-[2px] active:translate-y-0"
        >
          Hubungi Kami
        </a>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Layanan: padding adaptif + max width biar rapi di desktop */}
      <section className="px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <ServiceGrid />
        </div>
      </section>

      {/* Lokasi/Maps: bungkus dengan container & aspek rasio aman untuk HP */}
      <section className="px-4 sm:px-6 md:px-8 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto">
          <LocationMap />
        </div>
      </section>
    </>
  );
}

/* Tambahkan di globals.css kalau belum ada (buat aman notch iOS):
.pt-safe { padding-top: env(safe-area-inset-top); }
.pb-safe { padding-bottom: env(safe-area-inset-bottom); }
*/
