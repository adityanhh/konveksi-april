'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_NUMBER = '6285122909300';

const NAV_LINKS = [
  { name: 'Beranda', href: '/' },
  { name: 'Produk & Layanan', href: '/layanan' },
  { name: 'Galeri Produksi', href: '/galeri' },
  { name: 'Kontak & Lokasi', href: '/kontak' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Wadah logo tanpa background/outline/shadow */}
            <div className="relative h-11 w-11 flex-shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Image
                src="/images/LogoApril.png"
                alt="Logo Konveksi April"
                width={44}
                height={44}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 block leading-none">
                KONVEKSI<span className="text-indigo-600">APRIL</span>
              </span>
              <span className="text-[11px] font-semibold text-slate-500 tracking-wider uppercase">
                Bandung Garment Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-indigo-600 bg-indigo-50'
                      : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20Konveksi%20April%2C%20saya%20ingin%20konsultasi%20pembuatan%20pakaian%20custom.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <FaWhatsapp className="text-lg" />
              <span>Konsultasi Gratis</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="p-2.5 rounded-xl text-slate-700 hover:text-indigo-600 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                  isActive
                    ? 'text-indigo-600 bg-indigo-50/80 font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20Konveksi%20April%2C%20saya%20ingin%20konsultasi%20pembuatan%20pakaian%20custom.`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl text-base font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 shadow-md"
            >
              <FaWhatsapp className="text-xl" />
              <span>Chat WhatsApp Sekarang</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}