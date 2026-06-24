import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Awards from "../components/Awards";
import Certifications from "../components/Certifications";
import GlobalNetwork from "../components/GlobalNetwork";
import CTA from "../components/CTA";

function Home() {

  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <Awards />
      <Certifications />
      <GlobalNetwork />
      <CTA />
    </>
  );

}

export default Home;