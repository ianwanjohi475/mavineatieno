import { FloatingActions, Navbar, Preloader, ScrollProgress } from "@/components/Chrome";
import Hero from "@/components/Hero";
import { About, Achievements, Approach, Experience, Services, Tools } from "@/components/Sections";
import { Contact, Education, Footer, Referees } from "@/components/Closing";

export default function Home() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Achievements />
        <Tools />
        <Approach />
        <Education />
        <Referees />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
