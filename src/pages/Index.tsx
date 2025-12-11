import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import CaseStudy from "@/components/CaseStudy";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FrameLayout from "@/components/FrameLayout";

const Index = () => {
  return (
    <FrameLayout header={<Header />}>
      <main className="min-h-screen">
        <Hero />
        <Services />
        <Methodology />
        <CaseStudy />
        <About />
        <Contact />
        <Footer />
      </main>
    </FrameLayout>
  );
};

export default Index;
