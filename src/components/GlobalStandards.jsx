import './GlobalStandards.css';
import { Globe, MapPin, Bot, PenTool, ShieldCheck, Leaf } from 'lucide-react';

const GlobalStandards = () => {
  return (
    <section className="global-standards-section">
      <div className="container">
        
        {/* Top Split Section */}
        <div className="global-top-split">
          
          {/* Left Content */}
          <div className="global-left-content">
            <div className="global-subtitle">
              <div className="green-line"></div>
              <span>DESIGN & ENGINEERING</span>
            </div>
            
            <h2 className="global-title">
              <span className="text-white">World Class</span><br/>
              <span className="text-grey">Engineering.</span>
            </h2>
            
            <p className="global-desc">
              There's a lot of detail in a steel building you never see. As a PEB manufacturer in Chennai, we put our engineering into pre-engineered buildings and tensile structures that are designed once, properly, so they go up clean and stand for decades.
            </p>
            
            <div className="global-reach">
              <Globe size={20} />
              <span>In-House Fabrication</span>
            </div>
          </div>

          {/* Right Grid Stats */}
          <div className="global-stats-grid">
            
            {/* Top Row */}
            <div className="stat-cell border-right border-bottom">
              <h3>15+</h3>
              <h4>YEARS</h4>
              <p>Experience</p>
            </div>
            <div className="stat-cell border-right border-bottom">
              <h3>500+</h3>
              <h4>PROJECTS</h4>
              <p>Delivered</p>
            </div>
            <div className="stat-cell border-bottom">
              <h3>100%</h3>
              <h4>ON-TIME</h4>
              <p>Handover focus</p>
            </div>

            {/* Bottom Row */}
            <div className="stat-cell border-right">
              <div className="placeholder-logo"></div>
              <h4 className="mt-3">ISO 9001:2015</h4>
              <p>Certified<br/>Quality</p>
            </div>
            <div className="stat-cell border-right">
              <div className="placeholder-logo"></div>
              <h4 className="mt-3">MBMA MEMBER</h4>
              <p>Global<br/>Standards</p>
            </div>
            <div className="stat-cell">
              <div className="map-icon-wrapper">
                <MapPin size={20} />
              </div>
              <h4 className="mt-3 text-white text-xl">Chennai</h4>
              <p className="text-xs uppercase tracking-wider">Tamil Nadu</p>
            </div>

          </div>
        </div>

        {/* Bottom Features Cards */}
        <div className="global-features-grid">
          
          <div className="feature-dark-card">
            <Bot size={24} className="feature-icon" />
            <h4>ROBOTIC WELDING</h4>
            <p>Automated, robotic welding for joints that come out consistent every single time.</p>
          </div>
          
          <div className="feature-dark-card">
            <PenTool size={24} className="feature-icon" />
            <h4>BIM MODELING</h4>
            <p>Full BIM modelling, so the whole building is resolved on screen before we cut steel.</p>
          </div>
          
          <div className="feature-dark-card">
            <Leaf size={24} className="feature-icon" />
            <h4>ECO-EFFICIENT</h4>
            <p>Recyclable steel and lean designs that cut material waste - easier on cost and the planet.</p>
          </div>
          
          <div className="feature-dark-card">
            <ShieldCheck size={24} className="feature-icon" />
            <h4>CRANE-READY DESIGN</h4>
            <p>Framing sized for EOT cranes and the heavy kit a plant runs.</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GlobalStandards;
