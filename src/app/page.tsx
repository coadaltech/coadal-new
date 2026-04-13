import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Services from "@/components/Services";

// Lazy-load below-fold sections for faster initial paint
const WhyUs       = dynamic(() => import("@/components/WhyUs"));
const AISection   = dynamic(() => import("@/components/AISection"));
const Partners    = dynamic(() => import("@/components/Partners"));
const Work        = dynamic(() => import("@/components/Work"));
const Portfolio   = dynamic(() => import("@/components/Portfolio"));
const ActivityFeed= dynamic(() => import("@/components/ActivityFeed"));
const WhyNow      = dynamic(() => import("@/components/WhyNow"));
const TechStack   = dynamic(() => import("@/components/TechStack"));
const About       = dynamic(() => import("@/components/About"));
const Process     = dynamic(() => import("@/components/Process"));
const Testimonials= dynamic(() => import("@/components/Testimonials"));
const Pricing     = dynamic(() => import("@/components/Pricing"));
const CTA         = dynamic(() => import("@/components/CTA"));
const Contact     = dynamic(() => import("@/components/Contact"));
const Footer      = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <Services />
      <WhyUs />
      <AISection />
      <Partners />
      <Work />
      <Portfolio />
      <ActivityFeed />
      <WhyNow />
      <TechStack />
      <About />
      <Process />
      <Testimonials />
      <Pricing />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}
