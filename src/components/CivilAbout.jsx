import { Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';
import './CivilAbout.css';

const CivilAbout = () => {
  return (
    <section className="civil-about-section">
      <div className="civil-about-container">
        
        {/* Top Split Layout */}
        <div className="civil-about-split">
          
          {/* Left Content */}
          <div className="civil-about-text">
            <div className="civil-section-badge">
              <span className="badge-dot"></span> ABOUT CIVIL CONSTRUCTION
            </div>
            
            <h2 className="civil-about-title">What <span className="text-highlight">Civil Construction</span> Actually Involves</h2>
            
            <div className="civil-about-paragraphs">
              <p>
                Most people think civil construction is about putting up walls. It's not. It's about what goes 3 metres underground before the first column is cast. Soil investigation, foundation design, RCC framing, structural slabs, masonry, waterproofing — that's the work that decides whether your building is standing in 40 years or cracking in four.
              </p>
              <p>
                We're a civil construction company in Chennai — 15 years in. The work ranges from heavy civil construction on industrial sites to residential towers, school buildings, commercial blocks across Tamil Nadu and South India. What doesn't change is the process: soil investigation first, IS code design, every pour cube-tested, QA checklist closed before we leave.
              </p>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="civil-about-visual">
            <div className="civil-visual-wrapper">
              <img src="/images/about_civil_construction.png" alt="Civil Construction Reinforced Concrete" className="civil-about-img" />
              <div className="visual-overlay-gradient"></div>
            </div>
          </div>
 
        </div>

        {/* Floating Overlapping Cards Layout */}
        <div className="civil-features-overlap">
          <div className="civil-feature-card">
            <div className="feature-icon-wrapper">
              <ShieldCheck size={26} color="#ffffff" strokeWidth={2.5} />
            </div>
            <div className="feature-content">
              <h3>Robust Foundations</h3>
              <p>Every foundation type — isolated, raft, pile — designed from actual soil investigation data, not assumed parameters.</p>
            </div>
          </div>

          <div className="civil-feature-card">
            <div className="feature-icon-wrapper">
              <Layers size={26} color="#ffffff" strokeWidth={2.5} />
            </div>
            <div className="feature-content">
              <h3>Premium RCC Slabs</h3>
              <p>Transit-mixed M25–M40, vibration-compacted, cube-tested at third-party labs. Records given to the client, always.</p>
            </div>
          </div>

          <div className="civil-feature-card">
            <div className="feature-icon-wrapper">
              <CheckCircle2 size={26} color="#ffffff" strokeWidth={2.5} />
            </div>
            <div className="feature-content">
              <h3>Verified Handover</h3>
              <p>We close every snag before handing over. Structural drawings, material certs, cube test records — all in the handover file.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CivilAbout;
