import { motion } from 'framer-motion';
import beforeAfter1 from '@assets/image1_(18)_1764773702427.jpeg';
import beforeAfter2 from '@assets/image4_(2)_1764773641288.jpeg';
import beforeAfter3 from '@assets/image5_(2)_1764774119213.jpeg';
import beforeAfter4 from '@assets/image3_(4)_1764774163905.jpeg';
import trans1 from '@assets/image0_(36)_1764869469396.jpeg';
import trans2 from '@assets/image10_1764785447590.jpeg';
import trans3 from '@assets/image9_1764785455209.jpeg';
import trans4 from '@assets/image8_1764785473587.jpeg';
import trans5 from '@assets/image7_1764785493726.jpeg';
import trans6 from '@assets/image6_(2)_1764785504167.jpeg';
import trans7 from '@assets/image5_(3)_1764785511119.jpeg';
import trans8 from '@assets/image4_(3)_1764785533248.jpeg';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default function Transformations() {
  const transformations = [
    {
      image: trans1,
      title: "Persoonlijke Kracht",
      description: "Discipline en doorzettingsvermogen."
    },
    {
      image: trans2,
      title: "Kracht & Definitie",
      description: "Fysieke en mentale scherpte."
    },
    {
      image: trans3,
      title: "Houding & Focus",
      description: "Sterker staan in de gym en in het leven."
    },
    {
      image: trans4,
      title: "Gezondheid van Binnenuit",
      description: "Herstel en balans zichtbaar aan de buitenkant."
    },
    {
      image: trans5,
      title: "Nieuwe Energie",
      description: "Van vermoeidheid naar vitaliteit."
    },
    {
      image: trans6,
      title: "Sterke Basis",
      description: "Gewichtsverlies en toegenomen kracht."
    },
    {
      image: trans7,
      title: "Leefstijl Transformatie",
      description: "Een nieuw zelfbeeld en herwonnen zelfvertrouwen."
    },
    {
      image: trans8,
      title: "Vitale Uitstraling",
      description: "Gezondheid straalt van je gezicht."
    },
    {
      image: beforeAfter1,
      title: "Fysieke Transformatie",
      description: "Resultaat door toewijding en discipline."
    },
    {
      image: beforeAfter2,
      title: "Leefstijl Verandering",
      description: "Van binnen en van buiten in je kracht."
    },
    {
      image: beforeAfter3,
      title: "Totale Metamorfose",
      description: "Een nieuw leven begint bij een sterke basis."
    },
    {
      image: beforeAfter4,
      title: "Kracht & Definitie",
      description: "Consistentie is de sleutel tot succes."
    }
  ];

  return (
    <section className="py-24 bg-white border-y border-[#283618]/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[hsl(var(--terracotta))] font-bold tracking-widest uppercase mb-2">Resultaten</h2>
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-[#283618]">
            Fysieke Transformaties
          </h3>
        </div>

        <div className="max-w-5xl mx-auto px-4 md:px-12">
          <Carousel 
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {transformations.map((item, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                  <div className="p-1 md:p-2">
                    <Card className="bg-transparent border-none shadow-none">
                      <CardContent className="p-0">
                        <motion.div 
                          className="rounded-xl overflow-hidden border-2 border-[#F8F4ED] shadow-lg relative group aspect-[4/5]"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                        >
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#301905]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <h4 className="text-[#F8F4ED] font-heading font-bold text-xl">{item.title}</h4>
                            <p className="text-[#F8F4ED]/80 text-sm">{item.description}</p>
                          </div>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="flex -left-4 lg:-left-12 bg-[#283618] hover:bg-[hsl(var(--terracotta))] border-none text-white h-12 w-12" />
            <CarouselNext className="flex -right-4 lg:-right-12 bg-[#283618] hover:bg-[hsl(var(--terracotta))] border-none text-white h-12 w-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}