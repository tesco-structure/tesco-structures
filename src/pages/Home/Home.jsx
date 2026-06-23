
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Clients from '../../components/Clients';
import About from '../../components/About';
import Services from '../../components/Services';
import TensileServices from '../../components/TensileServices';
import WhyChooseUs from '../../components/WhyChooseUs';
import ManufacturingHub from '../../components/ManufacturingHub';
import Process from '../../components/Process';
import Partner from '../../components/Partner';
import GlobalStandards from '../../components/GlobalStandards';
import ProjectsGallery from '../../components/ProjectsGallery';
import Testimonials from '../../components/Testimonials';
import FAQ from '../../components/FAQ';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import '../../App.css';

function Home() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Clients />
      <About />
      <Services />
      <TensileServices />
      <WhyChooseUs />
      <ManufacturingHub />
      <Process />
      <Partner />
      <GlobalStandards />
      <ProjectsGallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
