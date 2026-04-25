import StarBackground from './components/StarBackground';
import Header from './components/Header';
import OrderForm from './components/OrderForm';
import PricingSection from './components/PricingSection';
import FAQAccordion from './components/FAQAccordion';
import { Hero, ImagePreview, HowItWorks, Reviews, Footer } from './components/Sections';

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-primary/30 selection:text-primary">
      {/* Visual background layers */}
      <StarBackground />
      <div className="fixed inset-0 bg-gradient-to-b from-background via-transparent to-background/50 pointer-events-none z-[-5]" />

      {/* Main Content */}
      <Header />
      
      <main>
        <Hero />
        <ImagePreview />
        <HowItWorks />
        <PricingSection />
        <OrderForm />
        <Reviews />
        <FAQAccordion />
      </main>

      <Footer />

      {/* Glow effects fixed in corners */}
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] -z-10 rounded-full pointer-events-none" />
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] -z-10 rounded-full pointer-events-none" />
    </div>
  );
}

