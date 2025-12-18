import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Transformations from '@/components/Transformations';
import Atmosphere from '@/components/Atmosphere';
import Services from '@/components/Services';
import Reviews from '@/components/Reviews';
import Community from '@/components/Community';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Transformations />
        <Atmosphere />
        <Services />
        <Reviews />
        <Community />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}