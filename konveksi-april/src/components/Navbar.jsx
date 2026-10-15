import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="p-4 bg-white shadow-lg sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Nama Konveksi */}
        <Link href="/" className="text-2xl font-black text-indigo-700">
          Konveksi April
        </Link>
        
        {/* Navigasi Utama (Hanya Tampil di Desktop) */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/galeri" className="text-gray-700 hover:text-indigo-600 font-medium transition duration-200">
            Galeri
          </Link>
          <Link href="/layanan" className="text-gray-700 hover:text-indigo-600 font-medium transition duration-200">
            Layanan
          </Link>
          <Link href="/kontak" className="text-gray-700 hover:text-indigo-600 font-medium transition duration-200">
            Kontak
          </Link>
          
          {/* CTA Utama */}
        </div>
        {/* Mobile Menu Icon (TODO: Implementasi hamburger menu) */}
        <div className="md:hidden">
            {/* Tambahkan ikon menu di sini, misal: <FaBars /> */}
            <p className="text-lg">MENU</p> 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;