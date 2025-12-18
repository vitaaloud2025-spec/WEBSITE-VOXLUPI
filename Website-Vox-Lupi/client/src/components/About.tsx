import { motion } from 'framer-motion';
import portrait from '@assets/PHOTO-2025-12-03-20-06-18_1764789768519.jpg';
import coachingAction from '@assets/image1_(16)_1764774136808.jpeg';
import { Heart, Shield, Leaf, Crown, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function About() {
  const values = [
    { icon: Crown, text: "Leiderschap" },
    { icon: Shield, text: "Veiligheid" },
    { icon: Heart, text: "Verbinding" },
    { icon: Leaf, text: "Rust" },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column - Now a composition */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="relative order-2 md:order-1 h-full min-h-[500px]"
          >
             {/* Main Portrait */}
            <motion.div 
              className="absolute top-0 left-0 w-3/4 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl z-10 border-4 border-[#F8F4ED]"
              whileHover={{ scale: 1.02, zIndex: 20 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={portrait}
                alt="Vox Lupi Trainer"
                className="w-full h-full object-cover sepia-[.1]"
                loading="lazy"
              />
            </motion.div>

            {/* Action Shot (Coaching) */}
            <motion.div 
              className="absolute bottom-0 right-0 w-3/4 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl z-15 border-4 border-[#F8F4ED]"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ scale: 1.02, zIndex: 20 }}
            >
              <img
                src={coachingAction}
                alt="Personal Training Coaching"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[hsl(var(--terracotta))]/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
            className="order-1 md:order-2"
          >
            {/* OVER MIJ SECTION */}
            <div className="mb-12">
              <motion.h2 
                className="text-[hsl(var(--terracotta))] font-bold tracking-widest uppercase mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Over Mij
              </motion.h2>
              
              <div className="space-y-4 text-[#283618]/80 leading-relaxed">
                <p className="font-medium text-lg text-[#283618]">
                  Ik ben Stephan. Man, vader en coach.
                </p>
                <p>
                  Jarenlang zocht ik naar rust, richting en antwoorden op vragen die dieper lagen dan werk, doelen of prestaties. Wie ben ik werkelijk? Wat wil ik doorgeven aan mijn kinderen? Wat laat ik achter?
                </p>
                <p>
                  Die zoektocht bracht me door mijn eigen schaduwwerk, oude patronen en fysieke en mentale uitdagingen heen. Het leerde me wat het betekent om verantwoordelijkheid te nemen voor je leven, je lichaam en je energie.
                </p>
                <p>
                  Vandaag begeleid ik anderen in datzelfde proces. Niet vanuit perfectie, maar vanuit ervaring, helderheid en betrokkenheid. Mijn werk gaat over bewustwording, discipline, embodiment en zelfleiderschap. Over terugkeren naar wie je in de kern bent, zodat je van daaruit kunt bouwen.
                </p>
              </div>
            </div>

            {/* Podcast Mention - Fits well after personal intro */}
            <div className="mb-12 p-6 bg-[#F8F4ED] rounded-xl border border-[#606B37]/10 flex items-start gap-4">
              <div className="bg-[#606B37] text-white p-3 rounded-full shrink-0">
                <Mic size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[#283618] text-lg mb-1">Bekijk de Podcast</h4>
                <p className="text-[#283618]/80 mb-3 text-sm">
                  In gesprek met Matthijs van Doesburg over persoonlijk leiderschap, transformatie en het vinden van je eigen kracht.
                </p>
                <Button variant="link" className="p-0 h-auto text-[hsl(var(--terracotta))] font-bold hover:text-[#283618]" asChild>
                  <a href="https://www.youtube.com/watch?v=bAp1BQMw5qA" target="_blank" rel="noopener noreferrer">
                    Bekijk nu →
                  </a>
                </Button>
              </div>
            </div>

            {/* VISIE & MISSIE SECTION */}
            <div>
              <motion.h2 
                className="text-[hsl(var(--terracotta))] font-bold tracking-widest uppercase mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Visie & Missie
              </motion.h2>

              <div className="space-y-6 text-[#283618]/80 leading-relaxed mb-8">
                <div>
                  <h4 className="font-heading font-bold text-[#283618] text-xl mb-2">Mijn Visie</h4>
                  <p>
                    Ik begeleid je terug naar je kern, zodat je weer krachtig in je schoenen staat en keuzes maakt die kloppen. Niet vanuit ruis, maar vanuit je authentieke zelf.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-heading font-bold text-[#283618] text-xl mb-2">Mijn Missie</h4>
                  <p>
                    Mijn missie is om mensen te helpen thuiskomen in zichzelf. Eerlijkheid, veiligheid en verbinding vormen daarbij de basis. Ik werk vanuit de natuur, omdat het de plek is waar je kunt landen, waar spanning wegvalt en waar leiderschap opnieuw kan ontstaan.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {values.map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-center gap-3 bg-[#F8F4ED] p-3 rounded-lg"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                  >
                    <item.icon className="text-[#606B37] h-5 w-5 shrink-0" />
                    <span className="text-[#283618] font-bold text-sm uppercase tracking-wide">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}