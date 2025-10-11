import Link from 'next/link';
import { services } from './services';

const ServiceCard = ({ title, description, icon, link }) => (
  <Link href={link} className="block p-6 border-t-4 border-indigo-500 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 text-center bg-white transform hover:-translate-y-1">
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </Link>
);

const ServiceGrid = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-16">Jenis Produk Konveksi Kami</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Array.isArray(services) && services.map(s => <ServiceCard key={s.id} {...s} />)}
      </div>
    </div>
  </section>
);

export default ServiceGrid;
