import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Footer from '@/components/Footer';
import GTM from '@/components/GTM';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata = {
  title: 'Konveksi April Bandung - Vendor Konveksi & Sablon Custom Berkualitas',
  description:
    'Vendor konveksi terpercaya di Bandung spesialis produksi Kaos Distro, Kemeja PDL, Jaket Hoodie, dan Polo Shirt custom. Bahan premium grade A, jahitan rapi, garansi tepat waktu.',
  keywords: [
    'konveksi bandung',
    'konveksi kaos bandung',
    'vendor sablon kaos',
    'bikin kemeja pdl',
    'konveksi jaket hoodie',
    'konveksi seragam kerja'
  ],
  authors: [{ name: 'Konveksi April Bandung' }],
  openGraph: {
    title: 'Konveksi April Bandung - Vendor Konveksi & Sablon Custom Berkualitas',
    description:
      'Solusi produksi garmen custom terbaik di Bandung untuk brand distro, seragam kantor, event kampus, dan komunitas.',
    siteName: 'Konveksi April Bandung',
    locale: 'id_ID',
    type: 'website',
  },
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${jakarta.className} bg-slate-50 text-slate-900 selection:bg-indigo-600 selection:text-white antialiased`}>
        <GTM />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
