import { motion } from 'framer-motion';
import { Dumbbell, Monitor, Tent, Check, Users, Mountain, Crown, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-scroll';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50 } }
};

export default function Services() {
  const services = [
    {
      icon: Crown,
      title: "Exclusief 1-op-1 Traject",
      description: "Een intensief coaching traject van 3 maanden (optie tot verlengen) voor leiders die willen transformeren.",
      features: [
        "Inclusief toegang tot het online platform & Community",
        "1 keer per 2 weken een intensieve coaching sessie",
        "1 keer per week Functioneel trainen op locatie in de natuur",
        "Online Check-in dagelijks",
        "Duurzaam resultaat",
        "Persoonlijke aandacht"
      ],
      popular: true,
      color: "bg-[#283618]" // Dark Green
    },
    {
      icon: Mountain,
      title: "Functioneel Trainen",
      description: "Fysiek sterk en weerbaar worden op een unieke locatie in de natuur.",
      features: [
        "Op een unieke locatie in de natuur",
        "Personal training & Small Group Training",
        "Functioneel en pijnvrij bewegen",
        "Weerbaarheid",
        "Mogelijk vanaf 10 lessen"
      ],
      popular: false,
      color: "bg-[#4A5D23]" // Medium Green (Distinct from others)
    },
    {
      icon: Monitor,
      title: "Online Coaching",
      description: "3 maanden online begeleiding via een professioneel platform voor flexibiliteit en consistentie.",
      features: ["Toegang tot online platform", "Persoonlijke schema's", "Dagelijkse check-ins", "Community support"],
      popular: false,
      color: "bg-[#606B37]" // Olive Green
    },
    {
      icon: Tent,
      title: "Retreats & Events",
      description: "Fysieke retreats van 1-3 dagen in de natuur, gericht op verbinding en innerlijke kracht.",
      features: ["1 tot 3 dagen", "In de natuur", "Samenwerking met experts", "Verbinding & Broederschap"],
      popular: false,
      color: "bg-[hsl(var(--terracotta))]" // New Warm Terracotta
    }
  ];

  const beforePoints = [
    "Onrust in lichaam en hoofd",
    "Terugvallen in oude patronen",
    "Lage energie, geen grenzen aangeven",
    "Ver weg van je kern"
  ];

  const afterPoints = [
    "Rust en kracht in je lichaam",
    "Patronen doorbroken",
    "Helderheid, focus en richting",
    "Leven vanuit leiderschap"
  ];

  return (
    <section id="services" className="py-24 bg-[#F8F4ED] relative">
      <div className="container mx-auto px-4">
        
        {/* Comparison Section - Before vs After */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <motion.div 
              className="bg-white p-8 rounded-2xl border-l-4 border-[hsl(var(--terracotta))] shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="font-heading font-bold text-[#283618] text-xl mb-6 flex items-center gap-3">
                <span className="bg-[hsl(var(--terracotta))]/10 p-2 rounded-lg text-[hsl(var(--terracotta))]">
                  <X size={20} />
                </span>
                Voor het traject
              </h4>
              <ul className="space-y-4">
                {beforePoints.map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#283618]/70">
                    <span className="h-2 w-2 rounded-full bg-[hsl(var(--terracotta))]/40 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* After */}
            <motion.div 
              className="bg-[#283618] p-8 rounded-2xl border-l-4 border-[#606B37] shadow-lg text-[#F8F4ED]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-heading font-bold text-white text-xl mb-6 flex items-center gap-3">
                <span className="bg-[#606B37]/20 p-2 rounded-lg text-[#606B37]">
                  <Check size={20} />
                </span>
                Na het traject
              </h4>
              <ul className="space-y-4">
                {afterPoints.map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#F8F4ED]/90 font-medium">
                    <span className="h-2 w-2 rounded-full bg-[#606B37] shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="text-center mb-16">
          <motion.h2 
            className="text-[#606B37] font-bold tracking-widest uppercase mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Aanbod
          </motion.h2>
          <motion.h3 
            className="font-heading text-3xl md:text-4xl font-bold text-[#283618]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Kies jouw pad naar transformatie
          </motion.h3>
          <motion.p
             className="text-[#283618]/80 mt-4 max-w-2xl mx-auto"
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
          >
            Of je nu kiest voor intensieve persoonlijke begeleiding, online vrijheid of de diepgang van een retreat.
          </motion.p>
        </div>

        <motion.div 
          className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item} className="h-full">
              <Card className={`relative h-full border-none shadow-xl transition-all duration-500 group hover:-translate-y-2 overflow-hidden flex flex-col ${service.popular ? 'ring-2 ring-[#606B37]' : ''}`}>
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-[#606B37] text-[#F8F4ED] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-20">
                    Meest Gekozen
                  </div>
                )}
                
                {/* Colored Header Background */}
                <div className={`h-24 ${service.color} relative flex items-center justify-center`}>
                  <div className="absolute -bottom-6 bg-[#F8F4ED] p-2 rounded-full">
                    <div className={`w-12 h-12 rounded-full ${service.color} flex items-center justify-center text-[#F8F4ED]`}>
                      <service.icon size={24} />
                    </div>
                  </div>
                </div>

                <CardHeader className="pt-10 text-center pb-2">
                  <CardTitle className="text-xl font-heading font-bold text-[#283618]">{service.title}</CardTitle>
                  <CardDescription className="text-[#283618]/70 mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow pt-4">
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-[#283618]/80">
                        <div className="h-6 w-6 rounded-full bg-[#F8F4ED] flex items-center justify-center shrink-0">
                          <Check className="h-4 w-4 text-[#606B37]" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="pb-6 pt-0">
                  <Link to="contact" smooth={true} offset={-80} className="w-full">
                    <Button className={`w-full ${service.color} hover:opacity-90 text-[#F8F4ED] font-bold border-none transition-all`}>
                      Meer Informatie
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}