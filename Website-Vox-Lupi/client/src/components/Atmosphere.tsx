import { motion } from 'framer-motion';
import drumCouple from '@assets/image0_(31)_1764785126905.jpeg';
import duoPose from '@assets/image2_(8)_1764773681597.jpeg';
import retreatGroup from '@assets/image3_(6)_1764774195113.jpeg';
import coachingAction from '@assets/image1_(16)_1764774136808.jpeg';
import groupTraining from '@assets/image12_1764785416818.jpeg';
import dinnerGroup from '@assets/image10_(1)_1764790599603.jpeg';
import brotherhood from '@assets/image9_(1)_1764790605127.jpeg';
import yurtMeditation from '@assets/image8_(1)_1764790619851.jpeg';
import groupCircle from '@assets/image7_(1)_1764790635854.jpeg';
import hikingDuo from '@assets/image5_(5)_1764790643006.jpeg';
import largeGroupIndoor from '@assets/image6_(3)_1764790651231.jpeg';
import hikingGroup from '@assets/image0_(32)_1764790671218.jpeg';
import boxingOutdoor from '@assets/image4_(4)_1764790686191.jpeg';
import boxingGroup from '@assets/image1_(20)_1764790709064.jpeg';
import campfire from '@assets/image3_(7)_1764790717844.jpeg';
import forestHike from '@assets/image2_(10)_1764790728465.jpeg';

import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default function Atmosphere() {
  const moments = [
    {
      image: campfire,
      title: "Kampvuur Gesprekken",
      description: "Diepgang en verbinding bij het vuur."
    },
    {
      image: boxingGroup,
      title: "Fysieke Uitdaging",
      description: "Grenzen verleggen in de buitenlucht."
    },
    {
      image: yurtMeditation,
      title: "Rust & Bezinning",
      description: "Even stil staan om weer vooruit te kunnen."
    },
    {
      image: groupCircle,
      title: "Cirkel van Vertrouwen",
      description: "Delen en helen in een veilige groep."
    },
    {
      image: hikingGroup,
      title: "Samen op Pad",
      description: "De natuur in voor nieuwe inzichten."
    },
    {
      image: dinnerGroup,
      title: "Samen Eten",
      description: "Verbinding aan tafel na een dag samenkomen."
    },
    {
      image: brotherhood,
      title: "Broederschap",
      description: "Echte connectie tussen mannen."
    },
    {
      image: drumCouple,
      title: "Verbinding & Ritme",
      description: "Samenkomen in energie en klank."
    },
    {
      image: groupTraining,
      title: "Kracht van de Groep",
      description: "Samen trainen, samen groeien in de buitenlucht."
    },
    {
      image: retreatGroup,
      title: "Community Retreats",
      description: "Verbroedering en groei in de natuur."
    },
    {
      image: forestHike,
      title: "Natuurbeleving",
      description: "Wandelen door de bossen voor rust in je hoofd."
    },
    {
      image: boxingOutdoor,
      title: "Focus & Kracht",
      description: "Trainen met focus en discipline."
    },
    {
      image: largeGroupIndoor,
      title: "Vox Lupi Familie",
      description: "Een hechte groep die voor elkaar klaarstaat."
    },
    {
      image: hikingDuo,
      title: "Persoonlijke Connectie",
      description: "Samen kilometers maken en gesprekken voeren."
    },
    {
      image: duoPose,
      title: "Samen Sterk",
      description: "Support en uitdaging in elke training."
    },
    {
      image: coachingAction,
      title: "Persoonlijke Aandacht",
      description: "Coaching die verder gaat dan de oppervlakte."
    }
  ];

  return (
    <section id="atmosphere" className="py-24 bg-[#F8F4ED]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[#606B37] font-bold tracking-widest uppercase mb-2">Beleving</h2>
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-[#283618]">
            Sfeer Impressie
          </h3>
          <p className="mt-4 text-lg text-[#283618]/70 max-w-2xl mx-auto">
            Een kijkje in de wereld van Vox Lupi. Waar gezondheid, rust en verbinding samenkomen.
          </p>
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
              {moments.map((item, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                  <div className="p-1 md:p-2">
                    <Card className="bg-transparent border-none shadow-none">
                      <CardContent className="p-0">
                        <motion.div 
                          className="aspect-[4/3] rounded-2xl overflow-hidden relative group"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <h4 className="text-white font-heading font-bold text-xl mb-1">{item.title}</h4>
                            <p className="text-white/90 text-sm">{item.description}</p>
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