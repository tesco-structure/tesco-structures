import './ManufacturingHub.css';
import { CheckCircle2 } from 'lucide-react';

const ManufacturingHub = () => {
  return (
    <section className="manufacturing-hub-section">
      <div className="container hub-container">
        
        {/* Left Column - Content */}
        <div className="hub-content">
          <div className="hub-badge gradient-badge">MANUFACTURING EXCELLENCE</div>
          
          <h2 className="hub-title">
            Chennai's Own <span className="highlight-green">PEB</span><br/>
            Manufacturing Hub
          </h2>
          
          <p className="hub-desc">
            We run our own PEB manufacturing hub here in Chennai - a 1,50,000 sq.ft facility that turns out up to 20,000 tons of fabricated steel a year. We're a hands-on PEB building manufacturer, not a middleman who farms the work out. Design, steel, and the crew that erects it all sit under one roof, which is how we deliver proper design & build turnkey EPC solutions. It's also why, after 15 years, we're on the short list of pre-engineered building manufacturers - and the PEB manufacturers in Chennai - that clients actually call back.
          </p>

          <div className="hub-stats-grid">
            <div className="stat-box">
              <h3>20,000 T</h3>
              <p>Annual fabrication capacity</p>
            </div>
            <div className="stat-box">
              <h3>1,50,000 ft²</h3>
              <p>Manufacturing facility</p>
            </div>
            <div className="stat-box">
              <h3>15+</h3>
              <p>Years in PEB & tensile</p>
            </div>
            <div className="stat-box">
              <h3>ISO</h3>
              <p>Certified process</p>
            </div>
          </div>

          <ul className="hub-features-list">
            <li>
              <CheckCircle2 size={18} className="hub-check-icon" />
              <span>Customized steel fabrication, cut and welded in our own workshop</span>
            </li>
            <li>
              <CheckCircle2 size={18} className="hub-check-icon" />
              <span>PEB warehouse construction handled from drawing to handover</span>
            </li>
            <li>
              <CheckCircle2 size={18} className="hub-check-icon" />
              <span>Industrial warehouse construction for large, clear-span sites</span>
            </li>
            <li>
              <CheckCircle2 size={18} className="hub-check-icon" />
              <span>Experienced industrial building contractors you can actually reach</span>
            </li>
            <li>
              <CheckCircle2 size={18} className="hub-check-icon" />
              <span>Factory construction company work, from foundation bolts to roof sheets</span>
            </li>
            <li>
              <CheckCircle2 size={18} className="hub-check-icon" />
              <span>Tensile structures and canopies built alongside the steel</span>
            </li>
          </ul>
        </div>

        {/* Right Column - Image */}
        <div className="hub-image-wrapper">
          <img 
            src="/manufacturing_hub.png" 
            alt="Manufacturing Facility" 
            className="hub-main-image"
          />
          
          <div className="hub-image-overlay">
            <div className="iso-badge-icon">ISO</div>
            <div className="iso-badge-text">
              <h4>ISO 9001:2015 Certified</h4>
              <p>Chennai, Tamil Nadu</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ManufacturingHub;
