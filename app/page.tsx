import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Timeline } from "@/components/timeline";
import { Activities } from "@/components/activities";
import { Neighborhoods } from "@/components/neighborhoods";
import { Transparency } from "@/components/transparency";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <section id="historia" className="pt-4">
        <Timeline />
      </section>
      <section id="atividades">
        <Activities />
      </section>
      <Neighborhoods />
      <section id="transparencia">
        <Transparency />
      </section>
      <section id="contato">
        <Footer />
      </section>
    </main>
  );
}
