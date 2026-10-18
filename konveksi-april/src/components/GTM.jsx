// src/components/GTM.jsx
import Script from 'next/script';
import { Fragment } from 'react';

// GANTI PLACHOLDER INI DENGAN ID GTM ASLI KLIEN ANDA (Contoh: 'GTM-ABCDEF1')
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

const GTM = () => {
  // Hanya tampilkan GTM di mode produksi untuk menghindari script error saat development
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <Fragment>
      {/* 1. Script GTM Utama (Diletakkan di dalam <head>) */}
      {/* strategy="afterInteractive" memastikan konten utama dimuat duluan */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />

      {/* 2. NoScript GTM (Diletakkan segera setelah tag <body> dibuka) */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
    </Fragment>
  );
};

export default GTM;