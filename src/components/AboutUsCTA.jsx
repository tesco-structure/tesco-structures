import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import './AboutUsCTA.css';

const AboutUsCTA = () => {
  return (
    <section className="cta-split-section">
      {/* Background with Dark Overlay */}
      <div className="cta-bg-layer" style={{ backgroundImage: "url('/cta_bg.png')" }}>
        <div className="cta-overlay"></div>
      </div>

      <div className="cta-container">
        
        {/* Left Side: Typography */}
        <div className="cta-text-content">
          <span className="cta-badge">Let's build together</span>
          <h2 className="cta-title">Get an Expert Now!</h2>
          <p className="cta-desc">
            Let's turn your plans into a building that lasts. Talk to the Tesco Structures team about your Pre-Engineered Building, steel structure or roofing project — one good conversation with us is usually all it takes to get the ball rolling.
          </p>
        </div>

        {/* Right Side: Interactive Buttons Grid */}
        <div className="cta-actions-content">
          
          <a href="tel:+919003328229" className="cta-action-card primary-action">
            <div className="action-icon-wrapper">
              <Phone size={28} />
            </div>
            <div className="action-text">
              <span className="action-label">Direct Call</span>
              <span className="action-title">Connect to an Expert</span>
            </div>
            <div className="action-arrow">
              <ArrowRight size={20} />
            </div>
          </a>

          <a href="https://wa.me/919003328229" target="_blank" rel="noopener noreferrer" className="cta-action-card secondary-action">
            <div className="action-icon-wrapper wa-icon">
              <MessageCircle size={28} />
            </div>
            <div className="action-text">
              <span className="action-label">Instant Chat</span>
              <span className="action-title">Reach us on WhatsApp</span>
            </div>
            <div className="action-arrow">
              <ArrowRight size={20} />
            </div>
          </a>

        </div>

      </div>
    </section>
  );
};

export default AboutUsCTA;
