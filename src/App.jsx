import { Header } from "./components/layout/Header";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { Problems } from "./components/sections/Problems";
import { Locations } from "./components/sections/Locations";
import { Gallery } from "./components/sections/Gallery";
import { FAQ } from "./components/sections/FAQ";
import { FinalCTA } from "./components/sections/FinalCTA";
import { WhyChooseUs } from "./components/sections/WhyChooseUs";
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen font-sans mesh-bg">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Services />
        <Locations />
        <Gallery />
        <WhyChooseUs />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
