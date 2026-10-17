'use client';

import { useState, useEffect } from 'react';

const ROTATING_WORDS = ['Berkualitas', 'Terpercaya'];

export default function TrustBadge() {
  const [index, setIndex] = useState(0);
  const [fadeState, setFadeState] = useState('visible'); // 'visible' | 'fading-out' | 'fading-in'

  useEffect(() => {
    const interval = setInterval(() => {
      // 1. Fade out ke atas
      setFadeState('fading-out');

      // 2. Ganti kata saat transparan
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setFadeState('fading-in');

        // 3. Fade in masuk dari bawah ke posisi normal
        setTimeout(() => {
          setFadeState('visible');
        }, 40);
      }, 350);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 backdrop-blur-md border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-bold tracking-wide uppercase mb-6 shadow-sm">
      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
      <span>Konveksi Pakaian</span>
      <span className="inline-block min-w-[105px] text-left">
        <span
          className={`inline-block text-emerald-300 font-extrabold transition-all duration-350 ease-out transform ${
            fadeState === 'fading-out'
              ? 'opacity-0 -translate-y-2'
              : fadeState === 'fading-in'
              ? 'opacity-0 translate-y-2'
              : 'opacity-100 translate-y-0'
          }`}
        >
          {ROTATING_WORDS[index]}
        </span>
      </span>
    </div>
  );
}
