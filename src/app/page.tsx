import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Philosophy from "@/components/Philosophy";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Products />
        <Philosophy />
        <TechStack />
      </main>
      <Footer />
    </>
  );
}
