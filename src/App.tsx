import { SpeedInsights } from "@vercel/speed-insights/next";
import { ReactLenis } from "lenis/react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skill from "@/components/Skill";
import Work from "@/components/Work";

const App = () => {
  return (
    <ReactLenis root>
      <SpeedInsights />
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
};

export default App;
