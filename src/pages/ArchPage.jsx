import ArchHero from '../components/ArchHero';
import ArchAbout from '../components/ArchAbout';
import ArchWhyChoose from '../components/ArchWhyChoose';
import ArchBenefits from '../components/ArchBenefits';
import ArchApplications from '../components/ArchApplications';
import ArchProjectsGallery from '../components/ArchProjectsGallery';
import ArchTestimonials from '../components/ArchTestimonials';
import ArchFaq from '../components/ArchFaq';
import ArchContact from '../components/ArchContact';

const ArchPage = () => {
  return (
    <div className="arch-page">
      <ArchHero />
      <ArchAbout />
      <ArchWhyChoose />
      <ArchBenefits />
      <ArchApplications />
      <ArchProjectsGallery />
      <ArchTestimonials />
      <ArchFaq />
      <ArchContact />
    </div>
  );
};

export default ArchPage;
