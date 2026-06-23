import TensileHero from '../components/TensileHero';
import TensileAbout from '../components/TensileAbout';
import TensileWhyChoose from '../components/TensileWhyChoose';
import TensileBenefits from '../components/TensileBenefits';
import TensileApplications from '../components/TensileApplications';
import TensileProjectsGallery from '../components/TensileProjectsGallery';
import TensileTestimonials from '../components/TensileTestimonials';
import TensileFaq from '../components/TensileFaq';
import TensileContact from '../components/TensileContact';

const TensilePage = () => {
  return (
    <div className="tensile-page">
      <TensileHero />
      <TensileAbout />
      <TensileWhyChoose />
      <TensileBenefits />
      <TensileApplications />
      <TensileProjectsGallery />
      <TensileTestimonials />
      <TensileFaq />
      <TensileContact />
    </div>
  );
};

export default TensilePage;
