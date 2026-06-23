import { Award, Users, TrendingUp } from 'lucide-react';
import './AboutUsWhoWeAre.css';

const AboutUsWhoWeAre = () => {
  return (
    <section className="about-who-we-are">
      <div className="who-we-are-container">
        
        {/* Left Content Column */}
        <div className="who-content">
          <div className="who-badge">
            WHO WE ARE
          </div>
          
          <h2 className="who-title">
            We create <span className="text-green">buildings</span><br />
            that meet your needs
          </h2>
          
          <p className="who-description">
            We're Tesco Structures Pvt Ltd, and for 15+ years we have been putting up steel buildings that do not let people down. Pre-Engineered Buildings (PEB), prefabricated structures, tensile roofing, multi-storey steel buildings — if it is made of steel and it has to last, we build it. And we stick with you the whole way, from that first rough sketch to the last bolt going in.
          </p>
          
          <p className="who-description">
            A lot of our jobs are turnkey, which simply means you deal with one team instead of five. The warehouse, the factory, the showroom, the wide clear-span shed — our own people sort out the architectural design, structural consultancy, civil construction and MEP work. Nothing gets dropped between contractors, and the build wraps up when we said it would.
          </p>

          <p className="who-description">
            Two things never slip on our sites: the budget holds, and it stays safe — safe to build, and safe to use once you move in. Clients here in India, and a fair few overseas, keep calling us back. It is no real secret why. Good steel, plain talk, and we do not cut corners when nobody is watching.
          </p>

          <div className="who-stats">
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <Award size={24} className="stat-icon" />
              </div>
              <div className="stat-text">
                <h3>500+</h3>
                <p>Projects Delivered</p>
              </div>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <Users size={24} className="stat-icon" />
              </div>
              <div className="stat-text">
                <h3>200+</h3>
                <p>Expert Team</p>
              </div>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <TrendingUp size={24} className="stat-icon" />
              </div>
              <div className="stat-text">
                <h3>8</h3>
                <p>States Covered</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="who-image-wrapper">
          <div className="who-image-container">
            <img src="/about_us_who_we_are.png" alt="Tesco Structures Engineering Team" className="who-image" />
            

            {/* Text Overlay on image */}
            <div className="image-overlay-text">
              <span className="overlay-year">SINCE 2009</span>
              <h4 className="overlay-title">Engineering Excellence, Built In</h4>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUsWhoWeAre;
