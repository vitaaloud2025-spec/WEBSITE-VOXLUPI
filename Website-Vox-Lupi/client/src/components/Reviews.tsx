import { Star, Quote, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default function Reviews() {
  // Extensive list of reviews from Google Maps
  const reviews = [
    {
      name: "Lorraine Avci-Been",
      rating: 5,
      text: "Een aantal maanden geleden hebben mijn man en ik Stephan benaderd met de vraag of hij ons wilde gaan coachen. Daarmee was de eerste stap gezet..."
    },
    {
      name: "Yasin",
      rating: 5,
      text: "Toen ik bij Stephan begon, wilde ik vooral afvallen en me weer sterker voelen – zowel fysiek als mentaal. Inmiddels ben ik goed op weg, en dat is echt dankzij zijn begeleiding!"
    },
    {
      name: "Lieselot van Gils",
      rating: 5,
      text: "Het was een geweldige ervaring om dit traject met Stephan te doorlopen! Zijn deskundige advies en praktische tips hebben me echt verder geholpen. Wat ik vooral waardeer, is hoe hij verder kijkt dan alleen voeding en training."
    },
    {
      name: "Rudy",
      rating: 5,
      text: "Ik ben samen met mijn vrouw een paar maanden geleden een trainingstraject begonnen bij Stephan. Na een fijn intakegesprek zijn we allebei aan de slag gegaan met onze doelen."
    },
    {
      name: "Jas",
      rating: 5,
      text: "Stephan is een vriendelijke en betrouwbare coach die je begeleidt bij het behalen van doelen die je samen met hem afstemt. Of het nu gaat over oefeningen, voeding, houding en stabiliteit of mindset: Stephan weet je te motiveren."
    },
    {
      name: "Dennis Hell",
      rating: 5,
      text: "Ik heb vorige week zaterdag bij Stephan een adem/ijsbad sessie gedaan en dat doet hij zeer goed. Stephan is erg betrokken in je proces en je voelt je gedragen door zijn manier van coaching en begeleiding."
    },
    {
      name: "Nouel Schreiber- Notmeijer",
      rating: 5,
      text: "Zeer tevreden! Bij Stephan terecht gekomen met aanhoudende rug/ bekken klachten. De combinatie spieren versterken, bepaalde spieren leren los te laten en te stretchen, maakt dat mijn rugklachten na 3 maanden zijn verminderd!"
    },
    {
      name: "Astrid Provoost",
      rating: 5,
      text: "Stephan heeft een enorm benaderbare energie en geeft je het gevoel dat jij en je trainingsdoelen ertoe doen, hoe groot of klein ze ook zijn."
    },
    {
      name: "Martine Niks",
      rating: 5,
      text: "Stephan is niet alleen een goede trainer, maar vooral een hele goeie vent. Hij is warm, betrokken, oprecht geïnteresseerd en hij heeft veel kennis."
    },
    {
      name: "Bart Vane",
      rating: 5,
      text: "Vanuit de loopanalyse bij stephan gestart met een half jaar traject! Door vele blessures en pijntjes laatste jaren wilde ik een andere aanpak proberen, om mijn lichaam weer optimaal te krijgen! Door het pijnvrij bewegen traject ben ik weer goed op weg."
    },
    {
      name: "Marco Hommel",
      rating: 5,
      text: "Stephan is niet alleen een goede personal trainer, maar ook een warme en betrokken persoon. Hij straalt rust, kracht en positiviteit uit."
    },
    {
      name: "Floris Hoyle",
      rating: 5,
      text: "Stephan is een fijne coach die doel gericht en met passie te werk gaat. Een energiek persoon en ook de rust en geduld heeft is wat hem voor mij uniek maakt."
    },
    {
      name: "Astrid van Laarhoven",
      rating: 5,
      text: "Ik heb bij Stephan een kort traject gevolgd om pijn vrij te sporten. De trainingen waren elke keer gevarieerd. Ook werd er goed aangesloten op mijn niveau."
    },
    {
      name: "Roy",
      rating: 5,
      text: "Ik heb echt enorm genoten van de energie die ik kreeg door samen de natuur in te gaan en het wederzijds vertrouwen wat is ontstaan om je kwetsbaar op te stellen in de gesprekken onderling maar ook in groepsverband."
    },
    {
      name: "Anouk van der Ent",
      rating: 5,
      text: "Ik ken Stephan via het helpen tijdens een aantal evenementen. Een heel prettig, open, sociaal persoon die graag voor anderen klaar staat. Een behulpzame man die precies weet wat hij doet en kan betekenen voor een ander."
    },
    {
      name: "sandy bowser",
      rating: 5,
      text: "Stephan is een aardig en goed luisterend persoon die tijdens onze intake precies wist waar mijn behoefte en doelen lagen. Dit kwam dan ook duidelijk terug in onze PT- lessen."
    },
    {
      name: "Jean-Paul van Tillo",
      rating: 5,
      text: "Ik ben het PT traject ingegaan met Stephan omdat ik mijn leven om wilde gooien en me weer goed wilde voelen, en omdat ik erg graag bij de politie wil. Met zijn hulp mijn sporttest ook in 1x gehaald!"
    },
    {
      name: "Leonie van Tilburg",
      rating: 5,
      text: "Samen zijn we al jaren bezig aan onszelf te werken dmv leefstijl, voeding, persoonlijke ontwikkeling, beweging. Ik ben zelf veel kilo's kwijt en heb een blijvende gezondere leefstijl aangeleerd."
    },
    {
      name: "heleen moelker",
      rating: 5,
      text: "Stephan brengt je stapje voor stapje verder bij het behalen van je persoonlijke doelen. Of het nu gaat om basis conditie of specifieke sportdoelen."
    },
    {
      name: "Brian Verbrugge",
      rating: 5,
      text: "Stephan is een goede trainer. Hij weet je uit te dagen wanneer het moet, maar kan ook zorgen voor ontspanning in de vorm van een praatje. Wij zouden Stephan zeker aanraden als coach of trainer!!"
    },
    {
      name: "kalinka verhoeven",
      rating: 5,
      text: "Stephan is een ontzettend kundige en bevlogen coach en trainer. Hij weet me altijd te motiveren en heeft veel kennis over zijn vak."
    },
    {
      name: "Lenny Keylard",
      rating: 5,
      text: "Afgelopen weekend een hele relaxte dag in de natuur ervaren waarbij Stephan een goed programma in elkaar heeft gezet waarbij je op diepere niveaus naar je eigen betekenis van het leven gaat kijken."
    },
    {
      name: "Bianca Mens",
      rating: 5,
      text: "Ik ken stephan via Home of Heroes waar hij met enige regelmaat een les geeft. Buiten dat stephan een hele leuke spontane vent is geeft hij ook fijn les."
    },
    {
      name: "Elsie Lovell",
      rating: 5,
      text: "Hele fijne Coach. Helpt je met elke vraag. Staat altijd voor je klaar."
    },
    {
      name: "marcus clarijs",
      rating: 5,
      text: "Stephan is een empathisch en gedreven personal trainer met een holistische visie. fixeert niet op snel resultaat. Maar het op een verantwoordelijke manier verbeteren van persoonlijke conditie."
    },
    {
      name: "Anne",
      rating: 5,
      text: "Bij Stephan en Leonie heb ik een mooie dag retreat mogen ervaren. Ik voelde me heel erg welkom en ik vond het fijn om te kunnen verbinden met de mensen die er waren en de natuur."
    },
    {
      name: "Sanne Ebbers",
      rating: 5,
      text: "Stephan is een fijn persoon en heeft een rustige persoonlijkheid. Hij kijkt mee, luistert goed en geeft de juiste begeleiding. Hij denkt met je mee en laat je in je waarde."
    },
    {
      name: "Niels Schrumpf",
      rating: 5,
      text: "Ik heb onlangs de online coaching gevolgd bij SDG Coaching! De trainer is een energiek persoon die echt naar je luistert en je doelen begrijpt."
    },
    {
      name: "Siem Marcin",
      rating: 5,
      text: "Een van mijn grootste obstakels is de kou. Dankzij SDG Coaching ben ik in staat geweest om deze kou te trotseren door in een ijsbad te gaan zitten. Door eerst een workout te doen, gevolgd door begeleidende ademhalingsoefeningen."
    },
    {
      name: "Erika Vlasman",
      rating: 5,
      text: "Met Stephan en Leonie een mooie gathering (samenzijn) gehad in de natuur. Gedachten delen, bewustwording, wandelen en in de natuur zijn met elkaar is helend 🙏🏼"
    },
    {
      name: "Indji van de Merbel",
      rating: 5,
      text: "Stephan is een hele fijne trainer. Tijdens de les is hij motiverend en geeft tips. Stephan is een heel fijn persoon waarbij je je snel op je gemak voelt."
    },
    {
      name: "dennis vos",
      rating: 5,
      text: "Het was erg fijn om door Stephan begeleid te worden. Hij gaat erg professioneel met je om en je ziet echt dat hij weet waar hij het over heeft. Stephan heeft me super goed op weg geholpen erg blij mee!"
    },
    {
      name: "Steffie Kant",
      rating: 5,
      text: "Ik heb een Gathering ervaren georganiseerd door Stephan en zijn vrouw Leonie. Het zijn beide enorm warme, lieve mensen, waardoor er gelijk, voor mij een ontspannen sfeer was waarin ik me super op mijn gemak voelde."
    },
    {
      name: "Ferry Meijer",
      rating: 5,
      text: "Ik heb echt een fijn gevoel overgehouden aan het mannenweekend. Nieuwe mensen leren kennen, uit mijn comfortzone stappen. Het gesprek aan gaan en onderwerpen delen in de groep."
    },
    {
      name: "Frank Van Geel",
      rating: 5,
      text: "Aanrader! Stephan is een eerlijke en open coach. Met veel kennis en passie voor hetgene wat hij doet."
    },
    {
      name: "Jordy Akkermans",
      rating: 5,
      text: "Een coach die op een motiverende wijze het beste uit je kan halen. Heeft overigens ook veel verstand van voeding. Altijd graag personal training sessie gevolgd bij Stephan."
    },
    {
      name: "Stephan bolier",
      rating: 5,
      text: "Ik ken Stephan de Graaff al langer en deze man is echt hiervoor gemaakt. Hele open en vriendelijke gast die met zijn passie voor sporten en gezondheid je zeker gaat kunnen helpen."
    },
    {
      name: "Roxanne Van Der Schelde",
      rating: 5,
      text: "Iemand die niet alleen naar cijfers kijkt maar ook naar de persoon erachter. Als coach neemt hij de tijd voor je en luistert naar wat je lastig vind en waar je tegen aan loopt."
    },
    {
      name: "Niek-Jan Vink",
      rating: 5,
      text: "Stefan is een ervaren jongen die zijn werk met passie en liefde doet. Veel geleerd van zijn coaching en mentaliteit. Dankjewel vriend!"
    },
    {
      name: "Kimberley Broeders",
      rating: 5,
      text: "Super goeie coach om te hebben!! Hij traint met je op je eigen niveau en helpt je met super veel enthousiasme. Als persoon is hij ook super fijn, heel rustig maar tegelijkertijd mega motiverend!"
    },
    {
      name: "Levi Van Der Schot",
      rating: 5,
      text: "Het was erg fijn samen werken gedurende mijn trainingen. Zo helpte hij me mijn eigen grenzen te verleggen en door hem kon ik telkens weer het uiterste uit mezelf halen."
    },
    {
      name: "Ramon Roks",
      rating: 5,
      text: "Hele gave ervaring bij SDG Coatching. In het ijsbad geweest 3 minuutjes en hele fijne ademhaling oefeningen gedaan."
    },
    {
      name: "Giovanni van der Schelde",
      rating: 5,
      text: "Door de loopanalyse veel inzicht gekregen in mijn loopvorm en houding, gevolgd door praktische tips om mij hier nog beter in te ontwikkelen en een fijn persoonlijk gesprek gehad"
    },
    {
      name: "Ricky",
      rating: 5,
      text: "Als je een eerlijke no nonsense coach met veel kennis zoekt die jou naar een next level brengt ben je hier op het juiste adres. Zowel als coach en mens uitmuntend"
    },
    {
      name: "Kurt Vanaert",
      rating: 5,
      text: "Echte aanrader. Stephan super goede trainer die je goed helpt werken naar je goals."
    },
    {
      name: "rocco samuels",
      rating: 5,
      text: "Aardige man die verstand heeft van wat hij doet. Hij kan je veel leren en verder helpen richting je persoonlijke doel."
    },
    {
      name: "Anna van Aalzum",
      rating: 5,
      text: "Afwisselende en uitdagende trainingen gericht op ieders persoonlijk doel. Vriendelijke professionele begeleiding!"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-[#606B37]/10 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[#606B37] font-bold tracking-widest uppercase mb-2">Reviews</h2>
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-[#283618]">
            Wat anderen zeggen
          </h3>
          <p className="mt-4 text-[#283618]/60">
            Gemiddelde score: 5.0 uit 60+ Google Reviews
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-12">
          <Carousel 
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4">
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-2 h-full">
                    <Card className="bg-white border-none shadow-md h-full relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-8 flex flex-col h-full">
                        <Quote className="absolute top-4 right-4 text-[#606B37]/10 h-16 w-16 -rotate-12" />
                        <div className="flex gap-1 mb-4">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-[#606B37] text-[#606B37]" />
                          ))}
                        </div>
                        <p className="text-[#283618]/80 mb-6 flex-grow italic font-medium line-clamp-5 text-sm md:text-base">"{review.text}"</p>
                        <div className="mt-auto pt-4 border-t border-[#283618]/5">
                          <p className="text-[#301905] font-bold font-heading">{review.name}</p>
                          <p className="text-xs text-[#283618]/50 flex items-center gap-1">
                            <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                            Google Review
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="flex -left-4 lg:-left-12 bg-[#283618] hover:bg-[hsl(var(--terracotta))] border-none text-white h-12 w-12" />
            <CarouselNext className="flex -right-4 lg:-right-12 bg-[#283618] hover:bg-[hsl(var(--terracotta))] border-none text-white h-12 w-12" />
          </Carousel>
          
          <div className="mt-12 text-center">
            <a 
              href="https://www.google.com/maps/place/Vox+Lupi/@51.4958243,4.295533,17z/data=!4m18!1m9!3m8!1s0x47c413601eca9501:0xa27c91a82a8b3cae!2sVox+Lupi!8m2!3d51.495785!4d4.2953541!9m1!1b1!16s%2Fg%2F11vzbl6dp6!3m7!1s0x47c413601eca9501:0xa27c91a82a8b3cae!8m2!3d51.495785!4d4.2953541!9m1!1b1!16s%2Fg%2F11vzbl6dp6?entry=ttu&g_ep=EgoyMDI1MTEzMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="border-[#283618] text-[#283618] hover:bg-[#283618] hover:text-white gap-2">
                Bekijk alle reviews op Google Maps <ArrowRight size={16} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}