import Benifit, { Plans, SelectPlan } from "@/sections/Benifit";
import Features from "@/sections/Features";
import Footer, { Copyright } from "@/sections/Footer";
import Hero from "@/sections/Hero";
import SupportPgae from "@/sections/SupportPgae";



export default function Home() {
  return (
    <>
      <main>
        {/* Hero section */}
        <Hero />
        <SupportPgae />
        <Features />
        <Benifit />
        <SelectPlan />
        <Plans />
        <Footer />
        <Copyright />
      </main>
    </>
  );
}
