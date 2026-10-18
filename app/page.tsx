import { About } from "@/components/about";
import { CallToAction } from "@/components/call-to-action";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { MobileBar } from "@/components/mobile-bar";
import { Reviews } from "@/components/reviews";
import { Services } from "@/components/services";
import { Trust } from "@/components/trust";
import { WorkGallery } from "@/components/work-gallery";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Trust />
        <Services />
        <About />
        <WorkGallery />
        <Reviews />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
