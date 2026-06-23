import { Timer, IndianRupee, ShieldCheck } from 'lucide-react';
import './PebAbout.css';

const PebAbout = () => {
  return (
    <section className="peb-about-section">
      <div className="peb-about-container">
        
        {/* Top Split Layout */}
        <div className="peb-about-split">
          
          {/* Left Content */}
          <div className="peb-about-text">
            <div className="peb-section-badge">
              <span className="badge-dot"></span> ABOUT PEB
            </div>
            
            <h2 className="peb-about-title">What is a <span className="text-highlight">Pre-Engineered Building?</span></h2>
            
            <div className="peb-about-paragraphs">
              <p>
                A PEB is a steel structure designed by software, fabricated off-site at an ISO-certified factory, and assembled on your plot using a precision bolted connection system. Every beam, column, and panel is made to exact size before any crew touches your site.
              </p>
              <p>
                Conventional RCC takes 12-18 months. A well-managed PEB project in Chennai reaches structural handover in 8-14 weeks — same strength, 20-30% lower cost, and almost zero maintenance for 15-25 years.
              </p>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="peb-about-visual">
            <div className="peb-visual-wrapper">
              <img src="/peb_about_img.png" alt="Pre-Engineered Building Structure" className="peb-about-img" />
              <div className="visual-overlay-gradient"></div>
            </div>
          </div>

        </div>

        {/* Floating Overlapping Cards Layout */}
        <div className="peb-features-overlap">
          <div className="peb-feature-card">
            <div className="feature-icon-wrapper">
              <Timer size={26} color="#ffffff" strokeWidth={2.5} />
            </div>
            <div className="feature-content">
              <h3>Fast Delivery</h3>
              <p>8-14 weeks to structural handover — 40-60% faster than RCC construction.</p>
            </div>
          </div>

          <div className="peb-feature-card">
            <div className="feature-icon-wrapper">
              <IndianRupee size={26} color="#ffffff" strokeWidth={2.5} />
            </div>
            <div className="feature-content">
              <h3>Cost Savings</h3>
              <p>20-30% lower total project cost through precision factory fabrication and less waste.</p>
            </div>
          </div>

          <div className="peb-feature-card">
            <div className="feature-icon-wrapper">
              <ShieldCheck size={26} color="#ffffff" strokeWidth={2.5} />
            </div>
            <div className="feature-content">
              <h3>Built to Last</h3>
              <p>IS:800, IS:875 & IS:1893 compliant. Designed for Tamil Nadu wind zones and seismic loads.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PebAbout;
