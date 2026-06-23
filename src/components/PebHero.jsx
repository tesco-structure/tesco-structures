import { Zap, ArrowRight } from 'lucide-react';
import './PebHero.css';

const PebHero = () => {
  return (
    <section className="peb-hero-section">
      {/* Background layer */}
      <div className="peb-hero-bg"></div>
      
      <div className="peb-hero-container">
        <div className="peb-hero-content">
          <div className="peb-hero-badge">
            <Zap size={14} className="peb-badge-icon" />
            SOUTH INDIA'S TRUSTED PEB BUILDER
          </div>
          
          <h1 className="peb-hero-title">
            <span className="text-green block">PRE-ENGINEERED</span>
            <span className="text-white block">BUILDING</span>
            <span className="text-white block">SOLUTIONS</span>
          </h1>
          
          <p className="peb-hero-desc">
            Turnkey PEB contractors in Chennai with 500+ completed projects across Tamil Nadu & South India. Faster delivery, lower cost, IS-code engineering —all under one contract.
          </p>
          
          <div className="peb-hero-actions">
            <a href="#contact" className="btn-solid-green" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
              Contact
            </a>
            <a href="#projects" className="link-view-projects">
              VIEW OUR PROJECTS <ArrowRight size={16} />
            </a>
          </div>
          
          <div className="peb-hero-stats">
            <div className="peb-stat">
              <h4>500+</h4>
              <p>PROJECTS COMPLETED</p>
            </div>
            <div className="peb-stat">
              <h4>15+</h4>
              <p>YEARS EXCELLENCE</p>
            </div>
            <div className="peb-stat">
              <h4>ISO</h4>
              <p>9001:2015 CERTIFIED</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PebHero;
