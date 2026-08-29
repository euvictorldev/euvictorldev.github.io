import MeshBackground from "@/components/MeshBackground";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Exploits from "@/components/sections/Exploits";
import Work from "@/components/sections/Work";
import Stack from "@/components/sections/Stack";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Index() {
  return (
    <div className="relative min-h-screen">
      <MeshBackground />

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Exploits />
          <Work />
          <Stack />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
