import { Timer, IndianRupee, ShieldCheck } from 'lucide-react';
import './RoofingAbout.css';

const RoofingAbout = () => {
  return (
    <section className="roof-about-section">
      <div className="roof-about-container">
        
        {/* Top Split Layout */}
        <div className="roof-about-split">
          
          {/* Left Content */}
          <div className="roof-about-text">
            <div className="roof-section-badge">
              <span className="badge-dot"></span> SERVICES DETAILS
            </div>
            
            <h2 className="roof-about-title">What Makes a <span className="text-highlight">Roof Last in South India</span></h2>
            
            <div className="roof-about-paragraphs">
              <p>
                Most people looking for roofing contractors in Chennai eventually discover that the cheapest quote and the best job are rarely the same thing. We've gone into buildings after other contractors — Thiruvottiyur warehouse with four-year-old sheets already rusting through, a Perambur factory where the ridge cap lifted in Cyclone Michaung (December 2023) because fasteners weren't torqued to spec. That's not bad luck, that's wrong materials for the location and nobody checking the installation work.
              </p>
              <p>
                We're structured as a single point of contact from site survey to final handover. The same engineering desk that calculates your purlin spacing is the one signing off on the material procurement. When something needs sorting on site, there's one phone number. That's deliberate — split contracts between design and installation is where quality gaps live.
              </p>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="roof-about-visual">
            <div className="roof-visual-wrapper">
              <img src="/peb_roofing_bg.png" alt="Metal Roofing Systems Fabrication" className="roof-about-img" />
              <div className="visual-overlay-gradient"></div>
            </div>
          </div>

        </div>

        {/* Floating Overlapping Cards Layout */}
        <div className="roof-features-overlap">
          <div className="roof-feature-card">
            <div className="feature-icon-wrapper">
              <Timer size={26} color="#ffffff" strokeWidth={2.5} />
            </div>
            <div className="feature-content">
              <h3>Precision Engineering</h3>
              <p>Pitch, purlin spacing, drainage slopes — calculated for your actual span and wind zone, not borrowed from the last project we did nearby.</p>
            </div>
          </div>

          <div className="roof-feature-card">
            <div className="feature-icon-wrapper">
              <IndianRupee size={26} color="#ffffff" strokeWidth={2.5} />
            </div>
            <div className="feature-content">
              <h3>Maintenance Free</h3>
              <p>The profiles and coatings we specify are chosen so facility managers stop thinking about the roof after handover. That's the actual measure of a good job.</p>
            </div>
          </div>

          <div className="roof-feature-card">
            <div className="feature-icon-wrapper">
              <ShieldCheck size={26} color="#ffffff" strokeWidth={2.5} />
            </div>
            <div className="feature-content">
              <h3>Certified Alloys</h3>
              <p>Mill certificates travel with every material delivery. If we quoted Galvalume 0.50mm, that's what goes up — not a substitution made quietly on installation day.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RoofingAbout;
