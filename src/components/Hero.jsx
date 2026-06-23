
import './Hero.css';
import EstimateForm from './EstimateForm';
import { CheckCircle2, Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-container container">
        
        <ScrollReveal className="hero-content" delay={0.1}>
          <div className="badge gradient-badge">
            <span className="badge-dot"></span>
            South India's Trusted PEB & Tensile Roofing Construction Company
          </div>
          
          <h1 className="hero-title">
            Strong Steel Buildings.<br/>
            <span className="highlight">Tensile Roofs</span> Worth a Look.
          </h1>

          <p className="hero-desc" style={{ color: '#aaa', fontSize: '1.1rem', margin: '20px 0', lineHeight: '1.6' }}>
            We build pre-engineered buildings and tensile structures, and we're right here in Chennai. A warehouse? A factory shed? A tensile canopy to shade the car park? Tell us what you need. Our own crew draws it up, cuts and welds the steel in our workshop, and puts it up on site. No middlemen, and no handing your project off to three different contractors.
          </p>
          
          <ul className="hero-features">
            <li><CheckCircle2 size={16} className="feature-icon" /> PEB warehouses and factory sheds that we design, build, and erect ourselves</li>
            <li><CheckCircle2 size={16} className="feature-icon" /> Tensile membrane structures—car park shades, walkways, entrance canopies</li>
            <li><CheckCircle2 size={16} className="feature-icon" /> Steel cut and welded in our own workshop, so the quality sits with us.</li>
            <li><CheckCircle2 size={16} className="feature-icon" /> Built for local wind and load conditions, not copy-paste specs</li>
            <li><CheckCircle2 size={16} className="feature-icon" /> You get one person to call right through to handover.</li>
          </ul>
          
          <div className="hero-trust">
            <div className="avatars">
              {/* Using actual brand logos */}
              <img src="/images/logos/Frame 1000001542.png" alt="Client Logo 1" />
              <img src="/images/logos/Frame 1000001543.png" alt="Client Logo 2" />
              <img src="/images/logos/Frame 1000001544.png" alt="Client Logo 3" />
              <img src="/images/logos/Frame 1000001545.png" alt="Client Logo 4" />
              <div className="avatar-count">4.1K</div>
            </div>
            <div className="rating-info">
              <div className="rating">
                <span>Rating</span>
                <Star size={16} fill="#FFD700" color="#FFD700" className="star-icon" />
                <span className="rating-score">4.5</span>
              </div>
              <p className="trust-text">Trusted Clients in South India</p>
            </div>
          </div>
          
          <div className="hero-actions">
            <button className="btn btn-primary">WhatsApp Us</button>
            <Link to="/contact" className="btn btn-secondary">Contact</Link>
          </div>
        </ScrollReveal>

        <ScrollReveal className="hero-form-wrapper" delay={0.3} y={50}>
          <EstimateForm />
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Hero;
