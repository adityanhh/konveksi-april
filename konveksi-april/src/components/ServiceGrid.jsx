import Link from 'next/link';
import { services } from './services';

// Card: mobile-friendly + aksesibel
const cardBase =
  "block rounded-xl bg-white shadow-xl border-t-4 border-indigo-500 " +
  "transition duration-300 will-change-transform " +
  "hover:shadow-2xl hover:-translate-y-1 " +
  "focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300";

function isExternal(url = "") {
  return /^https?:\/\//i.test(url);
}

const ServiceCard = ({ title, description, icon, link }) => {
  const content = (
    <div className="p-5 sm:p-6 md:p-7 text-center">
      <div className="mb-3 sm:mb-4 text-4xl sm:text-5xl md:text-6xl leading-none">{icon}</div>
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-1.5 sm:mb-2">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600">
        {description}
      </p>
    </div>
  );

  // Pakai <a> untuk link eksternal (WA, dsb), <Link> untuk internal
  return isExternal(link) ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className={cardBase} aria-label={title}>
      {content}
    </a>
  ) : (
    <Link href={link || '/'} className={cardBase} aria-label={title}>
      {content}
    </Link>
  );
};

const ServiceGrid = () => (
  <section className="py-12 sm:py-16 md:py-20 bg-white">
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-8 sm:mb-12 md:mb-16">
        Jenis Produk Konveksi Kami
      </h2>

      {/* Grid responsif: 1 kolom (HP) → 2 (sm) → 3 (md) → 4 (lg) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
        {Array.isArray(services) &&
          services.map((s) => <ServiceCard key={s.id} {...s} />)}
      </div>
    </div>
  </section>
);

export default ServiceGrid;
