import { Sparkles, ArrowRight } from 'lucide-react';
import './TensileHero.css';

const TensileHero = () => {
  return (
    <section className="tensile-hero-section">
      {/* Background layer */}
      <div className="tensile-hero-bg"></div>
      
      <div className="tensile-hero-container">
        <div className="tensile-hero-content">
          <div className="tensile-hero-badge">
            <Sparkles size={14} className="tensile-badge-icon" />
            Tensile roofing contractors in Chennai · Built tough.
          </div>
          
          <h1 className="tensile-hero-title">
            <span className="text-green block">Lasts decades.</span>
            <span className="text-white block">Tensile Roofing</span>
          </h1>
          
          <p className="tensile-hero-desc">
            Fifteen years delivering tensile roofing services in Chennai. 350 tensile structures across South India — car parking tensile canopies on the OMR, stadium covers in Coimbatore, resort entrances along ECR. We're the tensile structure company in Chennai that's built in every condition this climate produces. Bring us your site. We'll tell you exactly what it needs and what it'll cost.
          </p>
          
          <div className="tensile-hero-actions">
            <a href="#contact" className="btn-solid-green" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
              Contact
            </a>
            <a href="#sectors" className="link-view-projects">
              Explore Sectors <ArrowRight size={16} />
            </a>
          </div>
          
          <div className="tensile-hero-stats">
            <div className="tensile-stat">
              <h4>350+</h4>
              <p>Spans Installed</p>
            </div>
            <div className="tensile-stat">
              <h4>15+</h4>
              <p>Years Experience</p>
            </div>
            <div className="tensile-stat">
              <h4>100%</h4>
              <p>UV & Water Protection</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TensileHero;
