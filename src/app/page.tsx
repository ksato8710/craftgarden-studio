import BotanicalBackground from "@/components/BotanicalBackground";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import VineDivider from "@/components/VineDivider";
import Products from "@/components/Products";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <BotanicalBackground />
      <Navigation />
      <main>
        <Hero />
        <VineDivider />
        <Products />
        <VineDivider />
        <Philosophy />
      </main>
      <Footer />
    </>
  );
}
