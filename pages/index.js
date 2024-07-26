import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";
import { Skills } from "@/components/Skill/Skills";
import { Experience } from "@/components/Experience/Experience";
import { Work } from "@/components/Work/Work";
import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";


export default function Home() {
  return (
  <main class="bg-slate-950 px-4 m-auto mobile:w-[375px]">
    <Header />
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Work />
    <Contact />
    <Footer />
  </main>
  
  );
}