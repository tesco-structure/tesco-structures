import { ArrowRight, Star } from 'lucide-react';
import './AboutUsHero.css';

const AboutUsHero = () => {
  return (
    <section className="about-us-hero">
      {/* Background elements removed as requested */}

      <div className="about-hero-container">
        
        <div className="about-hero-badge">
          <Star size={14} className="badge-icon" />
          <span>Pre-Engineered Buildings & Construction Engineering</span>
        </div>

        <h1 className="about-hero-title">
          <span className="title-dark">We Build Spaces</span>
          <br />
          <span className="title-green">That Last</span>
        </h1>

        <p className="about-hero-subtitle">
          Tesco Structures designs and delivers world-class Pre-Engineered Buildings (PEB), tensile roofing and steel structures across India — built with precision, engineered for permanence.
        </p>

        <div className="about-hero-actions">
          <button className="btn-explore">
            Explore Our Work <ArrowRight size={18} />
          </button>
          <button className="btn-talk">
            Talk to Us
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutUsHero;
