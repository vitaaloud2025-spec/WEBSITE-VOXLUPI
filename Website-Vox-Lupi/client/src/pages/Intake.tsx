import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ArrowLeft, Send } from 'lucide-react';
import { Link } from 'wouter';
import logo from '@assets/ChatGPT_Image_3_dec_2025,_09_49_14_1764751763688.png';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, "Naam is verplicht"),
  age: z.string().min(1, "Leeftijd is verplicht"),
  date: z.string().min(1, "Datum is verplicht"),
  email: z.string().email("Ongeldig email adres"),
  phone: z.string().min(10, "Geldig telefoonnummer is verplicht"),
  address: z.string().min(5, "Adres is verplicht"),
  
  // Hulpvraag en intentie
  reason: z.string().min(10, "Vul alsjeblieft een reden in"),
  success_definition: z.string().min(10, "Vul alsjeblieft in wat succes voor jou betekent"),
  motivation: z.string().min(10, "Vul alsjeblieft je motivatie in"),
  
  // Lichaam en klachten
  pain_areas: z.string().min(2, "Vul in waar je pijn/ongemak ervaart of 'geen'"),
  complaints_duration: z.string().min(2, "Vul in hoe lang dit speelt"),
  history: z.string().min(2, "Vul je medische geschiedenis in of 'geen'"),
  
  // Energie, slaap en herstel
  energy_level: z.string().min(2, "Beschrijf je energieniveau"),
  sleep_hours: z.string().min(1, "Vul je gemiddelde slaapuren in"),
  rested_wakeup: z.string().min(2, "Word je uitgerust wakker?"),
  sleep_issues: z.string().min(2, "Ervaar je slaapproblemen?"),
  
  // Stress en mentale belasting
  stress_level: z.string().min(2, "Ervaar je stress?"),
  stress_source: z.string().min(2, "Waar komt de spanning vandaan?"),
  stress_coping: z.string().min(2, "Hoe ga je om met stress?"),
  
  // Voeding en spijsvertering
  diet_description: z.string().min(10, "Beschrijf globaal je voeding"),
  digestive_issues: z.string().min(2, "Ervaar je klachten na het eten?"),
  
  // Beweging en leefstijl
  activity_level: z.string().min(2, "Hoeveel beweeg je?"),
  sitting_hours: z.string().min(1, "Hoeveel uur zit je?"),
  outdoors: z.string().min(2, "Kom je buiten?"),
  
  // Levensbalans
  vitality_score: z.string().min(1, "Geef een cijfer 0-10"),
  imbalance_areas: z.string().min(2, "Waar voel je disbalans?"),
  
  // Afronding
  important_to_know: z.string().optional(),
  unspoken: z.string().optional(),
});

export default function Intake() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      age: "",
      date: new Date().toISOString().split('T')[0],
      email: "",
      phone: "",
      address: "",
      reason: "",
      success_definition: "",
      motivation: "",
      pain_areas: "",
      complaints_duration: "",
      history: "",
      energy_level: "",
      sleep_hours: "",
      rested_wakeup: "",
      sleep_issues: "",
      stress_level: "",
      stress_source: "",
      stress_coping: "",
      diet_description: "",
      digestive_issues: "",
      activity_level: "",
      sitting_hours: "",
      outdoors: "",
      vitality_score: "",
      imbalance_areas: "",
      important_to_know: "",
      unspoken: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    
    // Construct mailto link
    const subject = `Nieuw Intake Formulier: ${values.name}`;
    const body = `
PERSOONLIJKE GEGEVENS
Naam: ${values.name}
Leeftijd: ${values.age}
Datum: ${values.date}
Email: ${values.email}
Telefoon: ${values.phone}
Adres: ${values.address}

HULPVRAAG EN INTENTIE
Reden: ${values.reason}
Succes definitie: ${values.success_definition}
Motivatie: ${values.motivation}

LICHAAM EN KLACHTEN
Pijn/Spanning: ${values.pain_areas}
Duur: ${values.complaints_duration}
Geschiedenis: ${values.history}

ENERGIE, SLAAP EN HERSTEL
Energie: ${values.energy_level}
Slaapuren: ${values.sleep_hours}
Uitgerust wakker: ${values.rested_wakeup}
Slaapproblemen: ${values.sleep_issues}

STRESS EN MENTALE BELASTING
Stress niveau: ${values.stress_level}
Oorzaak: ${values.stress_source}
Coping: ${values.stress_coping}

VOEDING EN SPIJSVERTERING
Dieet: ${values.diet_description}
Klachten: ${values.digestive_issues}

BEWEGING EN LEEFSTIJL
Beweging: ${values.activity_level}
Zituren: ${values.sitting_hours}
Buiten: ${values.outdoors}

LEVENSBALANS
Vitaliteitscijfer: ${values.vitality_score}
Disbalans: ${values.imbalance_areas}

AFRONDING
Belangrijk om te weten: ${values.important_to_know || '-'}
Niet uitgesproken: ${values.unspoken || '-'}
    `;

    // Open mail client
    window.location.href = `mailto:info@voxlupi.nl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#F8F4ED] flex items-center justify-center p-4">
        <Card className="max-w-md w-full bg-white border-[#283618]/10 shadow-xl">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 bg-[#283618] rounded-full p-4 w-20 h-20 flex items-center justify-center">
              <Send className="text-[#F8F4ED] w-10 h-10" />
            </div>
            <CardTitle className="text-[#283618] font-heading text-2xl">Bedankt!</CardTitle>
            <CardDescription className="text-lg">
              Je intakeformulier is geopend in je mailprogramma. Controleer of de email succesvol is verstuurd naar info@voxlupi.nl.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
             <Link href="/">
              <Button className="bg-[#283618] hover:bg-[#606B37] text-[#F8F4ED]">
                Terug naar Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F4ED]">
      <div className="bg-[#283618] py-8 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" className="text-[#F8F4ED] hover:text-[#F8F4ED]/80 hover:bg-transparent gap-2 p-0">
              <ArrowLeft size={20} />
              Terug
            </Button>
          </Link>
          <div className="flex items-center gap-3">
             <img src={logo} alt="Vox Lupi" className="h-12 w-12 object-contain invert brightness-0 invert-100" />
             <span className="font-heading font-bold text-xl text-[#F8F4ED] tracking-wider hidden sm:block">VOX LUPI</span>
          </div>
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8 text-center">
            <h1 className="font-heading text-4xl font-bold text-[#283618] mb-4">Intake Formulier</h1>
            <p className="text-[#283618]/70">Vul dit formulier zo eerlijk en compleet mogelijk in. Dit helpt ons om jou de beste begeleiding te bieden.</p>
          </div>

          <Card className="border-none shadow-xl bg-white">
            <CardContent className="p-6 md:p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  
                  {/* Persoonlijke Gegevens */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[hsl(var(--terracotta))] border-b border-[hsl(var(--terracotta))]/20 pb-2">Persoonlijke Gegevens</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Naam</FormLabel>
                            <FormControl>
                              <Input placeholder="Volledige naam" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="age"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Leeftijd</FormLabel>
                            <FormControl>
                              <Input placeholder="Je leeftijd" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Datum van invullen</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefoonnummer</FormLabel>
                            <FormControl>
                              <Input placeholder="06 12345678" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                       <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email adres</FormLabel>
                            <FormControl>
                              <Input placeholder="jouw@email.nl" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Adres</FormLabel>
                          <FormControl>
                            <Input placeholder="Straat, Huisnummer, Postcode, Plaats" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Hulpvraag en intentie */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[hsl(var(--terracotta))] border-b border-[hsl(var(--terracotta))]/20 pb-2">Hulpvraag en Intentie</h3>
                    <FormField
                      control={form.control}
                      name="reason"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Wat is de belangrijkste reden dat je nu begeleiding zoekt?</FormLabel>
                          <FormControl>
                            <Textarea className="min-h-[100px]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="success_definition"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Wat moet er veranderen zodat dit traject voor jou geslaagd is?</FormLabel>
                          <FormControl>
                            <Textarea className="min-h-[100px]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="motivation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Wat is je motivatie om hier echt mee aan de slag te gaan?</FormLabel>
                          <FormControl>
                            <Textarea className="min-h-[100px]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Lichaam en klachten */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[hsl(var(--terracotta))] border-b border-[hsl(var(--terracotta))]/20 pb-2">Lichaam en Klachten</h3>
                    <FormField
                      control={form.control}
                      name="pain_areas"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Waar ervaar je momenteel pijn, spanning of ongemak in je lichaam?</FormLabel>
                          <FormControl>
                            <Textarea className="min-h-[80px]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="complaints_duration"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Sinds wanneer zijn deze klachten aanwezig?</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="history"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Heb je in het verleden blessures, operaties of ingrijpende gebeurtenissen gehad die mogelijk nog meespelen?</FormLabel>
                          <FormControl>
                            <Textarea className="min-h-[80px]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Energie, slaap en herstel */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[hsl(var(--terracotta))] border-b border-[hsl(var(--terracotta))]/20 pb-2">Energie, Slaap en Herstel</h3>
                    <FormField
                      control={form.control}
                      name="energy_level"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Hoe ervaar je je energieniveau over de dag?</FormLabel>
                          <FormControl>
                            <Textarea className="min-h-[80px]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="sleep_hours"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Hoeveel uur slaap je gemiddeld per nacht?</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="rested_wakeup"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Word je uitgerust wakker?</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="sleep_issues"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Word je ’s nachts wakker of heb je moeite met inslapen?</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Stress en mentale belasting */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[hsl(var(--terracotta))] border-b border-[hsl(var(--terracotta))]/20 pb-2">Stress en Mentale Belasting</h3>
                    <FormField
                      control={form.control}
                      name="stress_level"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ervaar je momenteel veel stress?</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="stress_source"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Waar komt de meeste spanning in je leven vandaan?</FormLabel>
                          <FormControl>
                            <Textarea className="min-h-[80px]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="stress_coping"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Hoe ga je meestal om met stress?</FormLabel>
                          <FormControl>
                            <Textarea className="min-h-[80px]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Voeding en spijsvertering */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[hsl(var(--terracotta))] border-b border-[hsl(var(--terracotta))]/20 pb-2">Voeding en Spijsvertering</h3>
                    <FormField
                      control={form.control}
                      name="diet_description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Beschrijf globaal hoe 3 dagen gemiddeld aan voeding er voor jou momenteel uit zien.</FormLabel>
                          <FormControl>
                            <Textarea className="min-h-[100px]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="digestive_issues"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Heb je regelmatig klachten zoals een opgeblazen gevoel, buikpijn, obstipatie, diarree of een energiedip na het eten?</FormLabel>
                          <FormControl>
                            <Textarea className="min-h-[80px]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Beweging en leefstijl */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[hsl(var(--terracotta))] border-b border-[hsl(var(--terracotta))]/20 pb-2">Beweging en Leefstijl</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="activity_level"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Hoeveel beweeg of sport je per week?</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="sitting_hours"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Hoeveel uur per dag zit je gemiddeld?</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="outdoors"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Breng je dagelijks tijd buiten door?</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Levensbalans */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[hsl(var(--terracotta))] border-b border-[hsl(var(--terracotta))]/20 pb-2">Levensbalans</h3>
                    <FormField
                      control={form.control}
                      name="vitality_score"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Geef jezelf een cijfer van 0 tot 10 voor je huidige vitaliteit.</FormLabel>
                          <FormControl>
                            <Input type="number" min="0" max="10" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="imbalance_areas"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Op welke gebieden in je leven voel je de meeste disbalans?</FormLabel>
                          <FormControl>
                            <Textarea className="min-h-[80px]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Afronding */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[hsl(var(--terracotta))] border-b border-[hsl(var(--terracotta))]/20 pb-2">Afronding</h3>
                    <FormField
                      control={form.control}
                      name="important_to_know"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Wat is belangrijk dat ik als begeleider over jou weet?</FormLabel>
                          <FormControl>
                            <Textarea className="min-h-[100px]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="unspoken"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Is er iets wat je voelt maar moeilijk onder woorden kunt brengen, en toch wilt benoemen?</FormLabel>
                          <FormControl>
                            <Textarea className="min-h-[100px]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-[#283618] hover:bg-[#606B37] text-white font-bold py-6 text-lg rounded-xl shadow-lg">
                    Verzenden naar Vox Lupi
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
