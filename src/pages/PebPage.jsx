import PebHero from '../components/PebHero';
import PebAbout from '../components/PebAbout';
import PebBenefits from '../components/PebBenefits';
import PebWhyChoose from '../components/PebWhyChoose';
import PebApplications from '../components/PebApplications';
import PebProjectsGallery from '../components/PebProjectsGallery';
import PebTestimonials from '../components/PebTestimonials';
import PebFaq from '../components/PebFaq';
import PebContact from '../components/PebContact';

const PebPage = () => {
  return (
    <div className="peb-page">
      <PebHero />
      <PebAbout />
      <PebWhyChoose />
      <PebBenefits />
      <PebApplications />
      <PebProjectsGallery />
      <PebTestimonials />
      <PebFaq />
      <PebContact />
      {/* Additional PEB page sections will go here */}
    </div>
  );
};

export default PebPage;
