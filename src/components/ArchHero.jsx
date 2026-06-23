import { PenTool, ArrowRight } from 'lucide-react';
import './ArchHero.css';

const ArchHero = () => {
  return (
    <section className="arch-hero-section">
      {/* Background layer */}
      <div className="arch-hero-bg"></div>
      
      <div className="arch-hero-container">
        <div className="arch-hero-content">
          <div className="arch-hero-badge">
            <PenTool size={14} className="arch-badge-icon" />
            Architectural & Structural Consultants · Chennai, Tamil Nadu
          </div>
          
          <h1 className="arch-hero-title">
            <span className="text-green block">Architectural Design</span>
            <span className="text-white block">& Structural Consultancy</span>
          </h1>
          
          <p className="arch-hero-desc">
            We're a Chennai-based architectural and structural engineering firm. In 15 years we've handled 150-plus projects across Tamil Nadu and South India, from residential designs and industrial sheds to commercial buildings, all done by the same in-house team from first brief to final drawings.
          </p>
          
          <div className="arch-hero-actions">
            <a href="#contact" className="btn-solid-green" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
              Contact
            </a>
            <a href="#projects" className="link-view-projects">
              View Our Portfolio <ArrowRight size={16} />
            </a>
          </div>
          
          <div className="arch-hero-stats">
            <div className="arch-stat">
              <h4>150+</h4>
              <p>Designs Approved</p>
            </div>
            <div className="arch-stat">
              <h4>15+</h4>
              <p>Years Excellence</p>
            </div>
            <div className="arch-stat">
              <h4>ISO</h4>
              <p>9001:2015 Certified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchHero;
