import { FloatingActions, Navbar, Preloader } from "@/components/Chrome";
import Hero from "@/components/Hero";
import { About, Achievements, Approach, Contribution, Experience, Services, Skills } from "@/components/Sections";
import { Contact, Education, Footer, Referees } from "@/components/Closing";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main className="mx-auto max-w-6xl space-y-4 px-3 py-4 sm:space-y-6 sm:px-6 sm:py-6">
        <Hero />
        <About />
        <Experience />
        <Services />
        <Skills />
        <Achievements />
        <Contribution />
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
