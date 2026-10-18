import { FloatingActions, Preloader, Shapes, SideRail, TopBar } from "@/components/Chrome";
import Hero from "@/components/Hero";
import { About, Achievements, Approach, Contribution, Experience, Services, Tools } from "@/components/Sections";
import { Contact, Education, Footer, Referees } from "@/components/Closing";

export default function Home() {
  return (
    <>
      <Preloader />
      <Shapes />
      <TopBar />
      <SideRail />
      <div className="px-3 pb-6 sm:px-4 xl:pl-28 xl:pr-8">
        <div className="mx-auto max-w-[1120px]">
          <main className="space-y-5 sm:space-y-6">
            <Hero />
            <About />
            <Services />
            <Experience />
            <Achievements />
            <Contribution />
            <Tools />
            <Approach />
            <Education />
            <Referees />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
      <FloatingActions />
    </>
  );
}
