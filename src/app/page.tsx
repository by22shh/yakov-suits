import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Approach } from "@/components/Approach";
import { Services } from "@/components/Services";
import { Cases } from "@/components/Cases";
import { Team } from "@/components/Team";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Approach />
      <Services />
      <Cases />
      <Team />
      <CTA />
    </main>
  );
}
