import { LayoutGrid, Landmark, FileSpreadsheet } from 'lucide-react';
import './ArchAbout.css';

const ArchAbout = () => {
  return (
    <section className="arch-about-section">
      <div className="arch-about-container">
        
        {/* Top Split Layout */}
        <div className="arch-about-split">
          
          {/* Left Content */}
          <div className="arch-about-text">
            <div className="arch-section-badge">
              <span className="badge-dot"></span> ABOUT DESIGN & CONSULTANCY
            </div>
            
            <h2 className="arch-about-title">What is <span className="text-highlight">Structural Consultancy?</span></h2>
            
            <div className="arch-about-paragraphs">
              <p>
                Structural consultancy and architectural design work better when they're coordinated from the start rather than reviewed at the end. Tesco Structures is built around that idea — both disciplines sharing the same BIM model and working from the same project brief.
              </p>
              <p>
                The team covers architectural design and structural engineering from first sketch through to GFC drawing sets. STAAD Pro and ETABS analysis, BIM coordination, CMDA documentation, and stability certification are handled internally. When something changes on the architectural side, the structural team picks it up the same week.
              </p>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="arch-about-visual">
            <div className="arch-visual-wrapper">
              <img src="/images/about_structural_consultancy.png" alt="Structural Consultancy Drawings" className="arch-about-img" />
              <div className="visual-overlay-gradient"></div>
            </div>
          </div>
 
        </div>

        {/* Floating Overlapping Cards Layout */}
        <div className="arch-features-overlap">
          <div className="arch-feature-card">
            <div className="feature-icon-wrapper">
              <LayoutGrid size={26} color="#ffffff" strokeWidth={2.5} />
            </div>
            <div className="feature-content">
              <h3>BIM & 3D Modeling</h3>
              <p>Architecture, structure, and MEP built in one Revit model. We run clash detection before anything gets released, so contractors aren't discovering conflicts after they've already poured.</p>
            </div>
          </div>

          <div className="arch-feature-card">
            <div className="feature-icon-wrapper">
              <Landmark size={26} color="#ffffff" strokeWidth={2.5} />
            </div>
            <div className="feature-content">
              <h3>Load Analysis</h3>
              <p>IS 1893 seismic, IS 875 wind, live and dead loads calculated in STAAD Pro and ETABS for the actual site location and building type. Every load combination is specific to the project.</p>
            </div>
          </div>

          <div className="arch-feature-card">
            <div className="feature-icon-wrapper">
              <FileSpreadsheet size={26} color="#ffffff" strokeWidth={2.5} />
            </div>
            <div className="feature-content">
              <h3>Turnkey Approvals</h3>
              <p>CMDA, DTCP, stability certs, structural drawing releases. We handle the documentation side, so your project doesn't stall waiting on a separate consultant to respond.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ArchAbout;
