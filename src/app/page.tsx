import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Cases } from "@/components/Cases";
import { Team } from "@/components/Team";
import { CTA } from "@/components/CTA";
import { LogosMarquee } from "@/components/LogosMarquee";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <LogosMarquee />
      <Services />
      <Cases />
      <Team />
      <CTA />
    </main>
  );
}
