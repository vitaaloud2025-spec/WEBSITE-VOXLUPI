import { Button } from '@/components/ui/button';
import { ExternalLink, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Community() {
  return (
    <section id="community" className="py-24 bg-[#F8F4ED] relative">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className="text-[hsl(var(--terracotta))] font-bold tracking-widest uppercase mb-2">Community</h2>
          <h3 className="font-heading text-3xl md:text-5xl font-bold text-[#283618] mb-6">
            Welkom bij de Community
          </h3>
          <p className="text-xl text-[#283618]/80 mb-10 font-medium leading-relaxed">
            Word binnenkort onderdeel van onze exclusieve community op The Huddle. 
            Hier verbinden we, groeien we samen en delen we onze reis.
          </p>
          
          <Button disabled size="lg" className="bg-[#606B37] opacity-80 text-[#F8F4ED] font-bold px-10 py-8 text-xl rounded-full shadow-xl flex items-center gap-3 mx-auto cursor-not-allowed">
            Coming Soon <Clock size={24} />
          </Button>
          
          <p className="mt-6 text-sm text-[#283618]/60">
            We zijn druk bezig met het bouwen van onze online omgeving.
          </p>
        </motion.div>
      </div>
    </section>
  );
}