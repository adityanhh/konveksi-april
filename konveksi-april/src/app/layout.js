import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import FloatingWhatsApp from '@/components/FloatingWhatsApp'; // Penting!
import Footer from '@/components/Footer';
import GTM from '@/components/GTM'; // Penting!

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Konveksi Custom Tercepat & Termurah - Konveksi April',
  description: 'Jasa konveksi terpercaya untuk Kaos, Kemeja, dan Jaket custom di Bandung. Kualitas premium, harga bersahabat.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">

      <GTM />
      
      <body className={inter.className}>
        <Navbar /> 
        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
        <FloatingWhatsApp /> {/* Tombol WA muncul di semua halaman */}
        
        {/* TODO: Tambahkan Footer di sini! */}
      </body>
    </html>
  );
}