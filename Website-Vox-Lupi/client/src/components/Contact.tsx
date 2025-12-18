import { MapPin, Mail, Phone, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#283618] relative text-[#F8F4ED]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[hsl(var(--terracotta))] font-bold tracking-widest uppercase mb-2">Contact</h2>
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-[#F8F4ED] mb-6">
              Klaar voor de verandering?
            </h3>
            <p className="text-[#F8F4ED]/80 mb-8 text-lg font-medium">
              Dit is geen standaard coaching bedrijf. Dit is een plek voor echte transformatie.
              Neem contact op voor een kennismaking als je voelt dat het tijd is.
            </p>

            <div className="space-y-6 mb-8">
              {[
                { icon: MapPin, title: "Locatie", content: "Vondellaan 2, 4624HM Bergen op Zoom" },
                { icon: Mail, title: "Email", content: "info@voxlupi.nl", link: "mailto:info@voxlupi.nl" },
                { icon: Phone, title: "Telefoon", content: "06 - 39840165", link: "tel:0639840165" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                >
                  <Card className="bg-[#F8F4ED]/5 border-[#F8F4ED]/10 hover:bg-[#F8F4ED]/10 transition-all hover:border-[#606B37]/50 group cursor-default">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-[#606B37] flex items-center justify-center text-[#F8F4ED] shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <item.icon size={24} />
                      </div>
                      <div>
                        <h4 className="text-[#F8F4ED] font-bold mb-1">{item.title}</h4>
                        {item.link ? (
                          <a href={item.link} className="text-[#F8F4ED]/70 hover:text-[#606B37] transition-colors">{item.content}</a>
                        ) : (
                          <p className="text-[#F8F4ED]/70">{item.content}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Button 
                asChild
                className="w-full md:w-auto bg-[hsl(var(--terracotta))] hover:bg-[hsl(var(--terracotta))]/90 text-white font-bold py-6 px-8 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a 
                  href="https://calendly.com/info-sdgcoaching/30min?month=2026-01&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRzdgOeEhVleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAad_5JJfL4FLqIeh4V4tCURtxtcrbKhEgUNr33A4RJMP6rGPu5349jALNdrBHA_aem_YsA93fSA5hf8f58ExDAMog" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <Calendar className="w-5 h-5" />
                  Plan direct een kennismaking
                </a>
              </Button>
              
              <div className="w-full text-center py-4">
                <span className="text-[#F8F4ED]/60 text-sm">- OF -</span>
              </div>

              <Button 
                asChild
                variant="outline"
                className="w-full md:w-auto border-[#F8F4ED]/50 text-[#F8F4ED] hover:bg-[#F8F4ED] hover:text-[#283618] font-bold py-6 px-8 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link to="/intake" className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  Vul het Intake Formulier in
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Map Column */}
          <motion.div 
            className="h-[400px] lg:h-auto rounded-2xl overflow-hidden border-4 border-[#606B37]/30 shadow-2xl relative group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             <iframe 
               src="https://maps.google.com/maps?q=Vondellaan+2,+4624+HM+Bergen+op+Zoom&t=&z=15&ie=UTF8&iwloc=&output=embed" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="grayscale hover:grayscale-0 transition-all duration-700 filter opacity-80 hover:opacity-100"
             ></iframe>
             
             {/* Overlay hint to interact */}
             <div className="absolute inset-0 bg-[#283618]/20 pointer-events-none group-hover:bg-transparent transition-colors" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}