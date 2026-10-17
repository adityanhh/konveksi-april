'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const HERO_IMAGES = [
  {
    src: '/images/hero-garment.jpg',
    alt: 'Workshop Konveksi April Bandung - Produksi Garmen Standar Distro',
  },
  {
    src: '/images/hero-garment2.jpeg',
    alt: 'Workshop Konveksi April Bandung - Mesin Jahit dan Sablon Modern',
  },
  {
    src: '/images/hero-garment3.jpeg',
    alt: 'Workshop Konveksi April Bandung - Detail Pengerjaan Jahitan Rapi',
    mirror: true,
  },
];

export default function HeroBackgroundSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // Berganti setiap 5 detik dengan efek crossfade halus

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {HERO_IMAGES.map((img, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={img.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-35' : 'opacity-0'
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority={index === 0}
              quality={85}
              sizes="100vw"
              className={`object-cover object-center transform transition-transform ${
                img.mirror ? '-scale-x-105 scale-y-105' : 'scale-105'
              }`}
            />
          </div>
        );
      })}

      {/* Dark & Gradient Depth Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
    </div>
  );
}
