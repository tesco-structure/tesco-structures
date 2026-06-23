import CivilHero from '../components/CivilHero';
import CivilAbout from '../components/CivilAbout';
import CivilWhyChoose from '../components/CivilWhyChoose';
import CivilBenefits from '../components/CivilBenefits';
import CivilApplications from '../components/CivilApplications';
import CivilProjectsGallery from '../components/CivilProjectsGallery';
import CivilTestimonials from '../components/CivilTestimonials';
import CivilFaq from '../components/CivilFaq';
import CivilContact from '../components/CivilContact';

const CivilPage = () => {
  return (
    <div className="civil-page">
      <CivilHero />
      <CivilAbout />
      <CivilWhyChoose />
      <CivilBenefits />
      <CivilApplications />
      <CivilProjectsGallery />
      <CivilTestimonials />
      <CivilFaq />
      <CivilContact />
    </div>
  );
};

export default CivilPage;
