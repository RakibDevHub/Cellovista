import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Team from "@/components/Team";
import Certificates from "@/components/Certificates";
import Gallery from "@/components/Gallery";
import DownloadProfile from "@/components/DownloadProfile";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <Process />
      <WhyUs />
      <Team />
      <Certificates />
      <Gallery />
      <DownloadProfile />
      <CTA />
      <Footer />
      <FloatingSocial />
    </main>
  );
}