import './About.css';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About = () => {
  return (
    <section className="about-section">
      <div className="container about-container-collage">
        
        {/* Left Column - Content */}
        <ScrollReveal className="about-content-left" delay={0.2} y={50}>
          <div className="section-badge gradient-badge">ABOUT TESCO STRUCTURES</div>
          <h2 className="section-title">Chennai's Go-To Team for <br/><span style={{ color: 'var(--primary-green)' }}>PEB & Tensile Structures</span></h2>
          <div className="section-description">
            <p>Tesco Structures has been working in steel for 15 years now. PEBs, tensile structures, that sort of thing. We're a Chennai outfit, but a good job will get us on the road to most parts of South India.</p>
            <p style={{ marginTop: '15px' }}>We like to keep the work close. The design is ours. The steel gets fabricated by our own people, not farmed out to a third party. And when it's time to build, it's our crew up on the site. Could be a warehouse. Could be a factory shed. Could be a tensile canopy stretched over a car park. Same hands either way.</p>
            <p style={{ marginTop: '15px' }}>Fifteen years in, a few hundred projects done, and an ISO certificate on the wall. We'd rather show you the work than talk about it.</p>
          </div>
          
          <div className="about-actions">
            <a href="#contact" className="btn-learn-more" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
              Learn More About Us <ArrowRight size={18} />
            </a>
          </div>
        </ScrollReveal>

        {/* Right Column - Collage */}
        <ScrollReveal className="about-collage-right" delay={0.4} y={50}>
          
          <div className="collage-wrapper">
            {/* Background shapes */}
            <div className="shape-green"></div>
            <div className="shape-purple"></div>

            {/* Top Left Image */}
            <div className="collage-img-1">
               <img src="/images/about_peb_engineer.png" alt="Construction worker" />
            </div>

            {/* Bottom Right Image */}
            <div className="collage-img-2">
               <img src="/images/about_construction_site.png" alt="PEB Engineer" />
            </div>

            {/* Floating Cards */}
            <div className="floating-card-dark">
              <p className="card-subtitle">Total Projects</p>
              <h3 className="card-number">500<span className="plus" style={{color: '#888', fontSize: '1.5rem'}}>+</span></h3>
              <p className="card-source">Source <span style={{color: '#fff', fontWeight: 'bold'}}>Tesco</span></p>
            </div>

            <div className="floating-card-light">
              <div className="card-icon-wrap">
                <ShieldCheck size={20} className="card-icon-inner" color="#fff" />
              </div>
              <div className="waveform-mock">
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
              </div>
            </div>

            <div className="floating-badge-blue">
              <div className="badge-content">
                <span className="badge-num">15+</span>
                <span className="badge-txt">Years</span>
              </div>
            </div>

            {/* Orange Graphic */}
            <div className="orange-graphic">
               <svg viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
                 <path d="M0,10 L80,10 M20,30 L100,30 M30,50 L90,50" stroke="#FF6B00" strokeWidth="8" fill="none" strokeLinecap="square" strokeLinejoin="miter"/>
               </svg>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default About;
