import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export default function HuddleRedirect() {
  return (
    <div className="min-h-screen bg-[#F8F4ED] text-[#283618] flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-4 py-32">
        <div className="text-center max-w-2xl">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-[#283618] mb-6">
            Welkom bij de Community
          </h1>
          <p className="text-xl text-[#283618]/80 mb-12 font-medium leading-relaxed">
            Word onderdeel van onze exclusieve community op The Huddle. 
            Hier verbinden we, groeien we samen en delen we onze reis.
          </p>
          <a 
            href="https://www.thehuddle.nl/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-[#606B37] hover:bg-[#283618] text-[#F8F4ED] font-bold px-10 py-8 text-xl rounded-full shadow-xl transition-all hover:scale-105 flex items-center gap-3 mx-auto">
              Ga naar The Huddle <ExternalLink size={24} />
            </Button>
          </a>
          <p className="mt-8 text-sm text-[#283618]/60">
            Je wordt doorgestuurd naar een externe omgeving.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}