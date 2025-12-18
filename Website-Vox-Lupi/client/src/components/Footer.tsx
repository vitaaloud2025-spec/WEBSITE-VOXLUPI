import logo from '@assets/ChatGPT_Image_3_dec_2025,_09_49_14_1764751763688.png';
import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#301905] py-12 border-t border-[#F8F4ED]/10 text-[#F8F4ED]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Vox Lupi" className="h-10 w-10 invert opacity-80" />
          <span className="text-[#F8F4ED] font-heading font-bold text-lg tracking-widest">VOX LUPI</span>
        </div>
        
        <div className="text-[#F8F4ED]/60 text-sm">
          © {new Date().getFullYear()} Vox Lupi. Leiderschap • Verbinding • Veiligheid
        </div>

        <div className="flex gap-4">
          <a href="https://www.instagram.com/stephandegraaff/" target="_blank" rel="noopener noreferrer" className="text-[#F8F4ED]/60 hover:text-[#606B37] transition-colors p-2 border border-[#F8F4ED]/10 rounded-full hover:border-[#606B37]">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}