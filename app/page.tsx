import Navbar from "@/component/layout/Navbar";
import Hero from "@/component/section/Hero";
import Pricing from "@/component/section/Pricing";
import Comparison from "@/component/section/Comparison";
import Footer from "@/component/layout/Footer";

export default function Home() {
  return (
    <main className="text-white min-h-screen selection:bg-gold/30 selection:text-white">
      <Navbar />
      <Hero />
      <Pricing />
      <Comparison />
      <Footer />
    </main>
  );
}