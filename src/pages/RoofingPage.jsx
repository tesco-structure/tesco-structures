import RoofingHero from '../components/RoofingHero';
import RoofingAbout from '../components/RoofingAbout';
import RoofingWhyChoose from '../components/RoofingWhyChoose';
import RoofingBenefits from '../components/RoofingBenefits';
import RoofingApplications from '../components/RoofingApplications';
import RoofingTestimonials from '../components/RoofingTestimonials';
import RoofingFaq from '../components/RoofingFaq';
import RoofingContact from '../components/RoofingContact';

const RoofingPage = () => {
  return (
    <div className="roofing-page">
      <RoofingHero />
      <RoofingAbout />
      <RoofingWhyChoose />
      <RoofingBenefits />
      <RoofingApplications />
      <RoofingTestimonials />
      <RoofingFaq />
      <RoofingContact />
    </div>
  );
};

export default RoofingPage;
