import { FaWhatsapp } from 'react-icons/fa'; 

// GANTI DENGAN NOMOR WHATSAPP ASLI KLIEN ANDA
const WHATSAPP_NUMBER = "6285122909300"; 

const FloatingWhatsApp = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20konveksi%20Anda.`; 

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 
                 bg-green-500 hover:bg-green-600 
                 text-white p-4 rounded-full 
                 shadow-2xl transition duration-300 transform hover:scale-110"
      aria-label="Hubungi kami via WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8 md:w-10 md:h-10" /> 
    </a>
  );
};

export default FloatingWhatsApp;