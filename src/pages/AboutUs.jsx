import AboutUsHero from '../components/AboutUsHero';
import AboutUsWhoWeAre from '../components/AboutUsWhoWeAre';
import AboutUsWhatWeDo from '../components/AboutUsWhatWeDo';
import AboutUsPrinciples from '../components/AboutUsPrinciples';
import AboutUsOrgCulture from '../components/AboutUsOrgCulture';
import AboutUsSafety from '../components/AboutUsSafety';
import AboutUsAdvantage from '../components/AboutUsAdvantage';
import AboutUsFootprints from '../components/AboutUsFootprints';
import AboutUsCTA from '../components/AboutUsCTA';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <AboutUsHero />
      <AboutUsWhoWeAre />
      <AboutUsWhatWeDo />
      <AboutUsPrinciples />
      <AboutUsOrgCulture />
      <AboutUsSafety />
      <AboutUsAdvantage />
      <AboutUsFootprints />
      <AboutUsCTA />
    </div>
  );
};

export default AboutUs;
