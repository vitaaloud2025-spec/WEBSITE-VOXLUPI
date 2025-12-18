import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import { Button } from '@/components/ui/button';
import heroBg from '@assets/image2_(9)_1764785099407.jpeg';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-[hsl(var(--terracotta))]">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src={heroBg}
          alt="Vox Lupi Vision"
          className="w-full h-full object-cover opacity-90"
          fetchPriority="high"
        />
        {/* Overlay: Warm Orange/Terracotta Gradient for "Warmte" and "Leiderschap" */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--terracotta))]/30 via-[hsl(var(--terracotta))]/10 to-[hsl(var(--terracotta))]/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/10" />
      </motion.div>

      <div className="container relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[#F8F4ED] font-bold tracking-[0.2em] uppercase mb-4 text-sm md:text-base drop-shadow-md"
          >
            Leiderschap • Veiligheid • Verbinding
          </motion.h2>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-black text-[#F8F4ED] mb-6 leading-tight drop-shadow-lg"
          >
            VOX <span className="text-[#F8F4ED] inline-block">LUPI</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-[#F8F4ED] max-w-2xl mx-auto mb-10 font-medium leading-relaxed drop-shadow-md"
          >
            Ontketen je innerlijke kracht. Word de leider van je eigen leven.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="services" smooth={true} offset={-80}>
              <Button size="lg" className="w-full sm:w-auto bg-[#F8F4ED] hover:bg-[#F8F4ED]/90 text-[hsl(var(--terracotta))] font-bold px-8 py-6 text-lg rounded-full transition-all hover:scale-105 shadow-lg border-none">
                Ontdek het Traject
              </Button>
            </Link>
            <Link to="about" smooth={true} offset={-80}>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-[#F8F4ED] text-[#F8F4ED] hover:bg-[#F8F4ED]/10 hover:text-[#F8F4ED] px-8 py-6 text-lg rounded-full transition-all hover:scale-105 bg-transparent">
                Onze Visie
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}