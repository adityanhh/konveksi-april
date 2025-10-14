import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Footer from '@/components/Footer';
import GTM from '@/components/GTM';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Konveksi Custom Tercepat & Termurah - Konveksi April',
  description:
    'Jasa konveksi terpercaya untuk Kaos, Kemeja, dan Jaket custom di Bandung. Kualitas premium, harga bersahabat.',
  icons: {
    icon: '/icon.svg'
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      {/* GTM jangan di luar <body>. Taruh di dalam body */}
      <body className={inter.className}>
        <GTM />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
