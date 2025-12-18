import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import logo from '@assets/ChatGPT_Image_3_dec_2025,_09_49_14_1764751763688.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Visie', to: 'about' },
    { name: 'Sfeer', to: 'atmosphere' },
    { name: 'Aanbod', to: 'services' },
    { name: 'Reviews', to: 'reviews' },
    { name: 'Community', to: 'community' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-[#F8F4ED]/95 backdrop-blur-md border-b border-[#283618]/10 py-2 shadow-sm' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="home" smooth={true} className="cursor-pointer flex items-center gap-2">
          {/* Invert logo color when scrolled to match dark text, or keep white on transparent bg */}
          <img 
            src={logo} 
            alt="Vox Lupi Logo" 
            className={cn(
              "h-28 w-28 object-contain transition-all",
              scrolled ? "invert-0 brightness-0 opacity-80" : "invert brightness-0 invert-100" 
            )} 
            // Note: Adjusting filter based on actual logo image colors. Assuming logo is dark by default.
            // If logo is white, remove invert on transparent.
            // Based on user request, logo is Photo 1. Assuming it needs inversion on dark overlays.
          />
          <span className={cn(
            "font-heading font-bold text-xl tracking-wider hidden sm:block transition-colors",
            scrolled ? "text-[#283618]" : "text-[#F8F4ED]"
          )}>
            VOX LUPI
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              offset={-80}
              duration={500}
              className={cn(
                "text-sm font-medium transition-colors cursor-pointer uppercase tracking-wide hover:text-[#606B37]",
                scrolled ? "text-[#283618]" : "text-[#F8F4ED]"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            variant="default" 
            size="sm"
            className={cn(
              "font-bold transition-colors",
              scrolled 
                ? "bg-[#283618] hover:bg-[#606B37] text-[#F8F4ED]" 
                : "bg-[#F8F4ED] hover:bg-[#F8F4ED]/90 text-[#283618]"
            )}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Nu
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "md:hidden transition-colors",
            scrolled ? "text-[#283618]" : "text-[#F8F4ED]"
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#F8F4ED] border-b border-[#283618]/10 p-4 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-[#283618] hover:text-[#606B37] transition-colors cursor-pointer py-2 border-b border-[#283618]/10 last:border-0"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}