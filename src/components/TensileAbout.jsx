import { Leaf, Sun, ShieldCheck } from 'lucide-react';
import './TensileAbout.css';

const TensileAbout = () => {
  return (
    <section className="tensile-about-section">
      <div className="tensile-about-container">
        
        {/* Top Split Layout */}
        <div className="tensile-about-split">
          
          {/* Left Content */}
          <div className="tensile-about-text">
            <div className="tensile-section-badge">
              <span className="badge-dot"></span> ABOUT TENSILE STRUCTURES
            </div>
            
            <h2 className="tensile-about-title">What is <span className="text-highlight">Tensile Roofing?</span></h2>
            
            <div className="tensile-about-paragraphs">
              <p>
                A tensile roof is fabric — PVC, PVDF, or PTFE — pulled tight between cables and steel anchors until it becomes structurally rigid. That's the basis of every membrane tensile structure we design and build. No thick frame underneath. The curve geometry carries the load. We've watched these hold through Tamil Nadu monsoons and coastal storms for 15 years.
              </p>
              <p>
                For any open span above 20 metres, tensile structure services usually win on total cost. No columns every 8–10 metres. No heavy pad foundations. Far less maintenance than RCC or metal sheet. Developers across Tamil Nadu and South India who've done that comparison know why they keep coming back to tensile roofing solutions.
              </p>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="tensile-about-visual">
            <div className="tensile-visual-wrapper">
              <img src="/about_tensile_roof.png" alt="Tensile Membrane Roof Structure" className="tensile-about-img" />
              <div className="visual-overlay-gradient"></div>
            </div>
          </div>
 
        </div>

        {/* Floating Overlapping Cards Layout */}
        <div className="tensile-features-overlap">
          <div className="tensile-feature-card">
            <div className="feature-icon-wrapper">
              <Leaf size={26} color="#ffffff" strokeWidth={2.5} />
            </div>
            <div className="feature-content">
              <h3>Less steel, fewer columns</h3>
              <p>No pad foundations every 8 metres. Far less material than RCC or sheet metal for the same covered area.</p>
            </div>
          </div>

          <div className="tensile-feature-card">
            <div className="feature-icon-wrapper">
              <Sun size={26} color="#ffffff" strokeWidth={2.5} />
            </div>
            <div className="feature-content">
              <h3>Light without the heat</h3>
              <p>Diffused daylight comes through. Direct UV doesn't. The difference is noticeable on a March afternoon in Chennai.</p>
            </div>
          </div>

          <div className="tensile-feature-card">
            <div className="feature-icon-wrapper">
              <ShieldCheck size={26} color="#ffffff" strokeWidth={2.5} />
            </div>
            <div className="feature-content">
              <h3>15 to 30 years</h3>
              <p>PVC goes 15–20, PVDF goes 20-plus, PTFE goes a generation. All three outlast what most clients expect.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TensileAbout;
