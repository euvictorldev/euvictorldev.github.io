import Hero from "@/components/sections/Hero";
import AIDifferential from "@/components/sections/AIDifferential";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import TechStack from "@/components/sections/TechStack";
import About from "@/components/sections/About";
import Knowledge from "@/components/sections/Knowledge";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import ShapeDivider from "@/components/ShapeDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary">
      <div className="noise" />
      {/* 1. Hero (Black) */}
      <div className="relative cv-auto">
        <Hero />
        <ShapeDivider 
          variant="clouds" 
          fillColor="hsl(var(--bg-emerald-deep))" 
        />
      </div>
      
      {/* 2. AIDifferential (Emerald Deep) */}
      <div className="relative cv-auto">
        <AIDifferential />
        <ShapeDivider 
          variant="tilt-simple" 
          fillColor="hsl(var(--background))" 
        />
      </div>

      {/* 3. Services (Black) */}
      <div className="relative cv-auto">
        <Services />
        <ShapeDivider 
          variant="triangle-point" 
          fillColor="hsl(var(--bg-charcoal-deep))" 
        />
      </div>

      {/* 4. Portfolio (Charcoal) */}
      <div className="relative">
        <Portfolio />
        <ShapeDivider 
          variant="zigzag-sharp" 
          fillColor="hsl(var(--background))" 
        />
      </div>

      {/* 5. TechStack (Black) */}
      <div className="relative cv-auto">
        <TechStack />
        <ShapeDivider 
          variant="curved-asymmetric" 
          fillColor="hsl(var(--bg-emerald-deep))" 
        />
      </div>

      {/* 6. About (Emerald Deep) */}
      <div className="relative cv-auto">
        <About />
        <ShapeDivider 
          variant="curved-asymmetric" 
          fillColor="hsl(var(--background))" 
        />
      </div>

      {/* 7. Knowledge (Black) */}
      <div className="relative cv-auto">
        <Knowledge />
      </div>

      {/* 8. FAQ (Black) */}
      <div className="relative cv-auto">
        <FAQ />
      </div>

      {/* 9. FinalCTA (Black) */}
      <div className="relative cv-auto">
        <FinalCTA />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
