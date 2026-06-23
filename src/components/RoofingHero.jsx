import { Zap, ArrowRight } from 'lucide-react';
import './RoofingHero.css';

const RoofingHero = () => {
  return (
    <section className="roof-hero-section">
      <div className="roof-hero-bg"></div>
      
      <div className="roof-hero-container">
        <div className="roof-hero-content">
          <div className="roof-hero-badge">
            <Zap size={14} className="roof-badge-icon" />
            High-Performance Roofing Systems
          </div>
          
          <h1 className="roof-hero-title">
            <span className="text-green block">All Types Of</span>
            <span className="text-white block">Roofing</span>
            <span className="text-white block">Solutions</span>
          </h1>
          
          <p className="roof-hero-desc">
            Spent years putting up roofs across Tamil Nadu — GI sheds in Ambattur, glass atriums on OMR, polycarbonate car parks in the city, Mangalore tile bungalows in ECR. We know which materials actually last here and which ones look fine until the first monsoon.
          </p>
          
          <div className="roof-hero-actions">
            <a href="#contact" className="btn-solid-green" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
              Request a Roof Estimate
            </a>
            <a href="#projects" className="link-view-projects">
              View Technical Data <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoofingHero;
