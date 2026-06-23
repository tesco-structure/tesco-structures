import { Truck, BrainCircuit, Handshake } from 'lucide-react';
import './AboutUsAdvantage.css';

const AboutUsAdvantage = () => {
  return (
    <section className="advantage-section">
      <div className="advantage-container">
        <div className="advantage-header">
          <div className="advantage-badge gradient-badge">
            <span className="badge-dot"></span>
            Why work with us
          </div>
          <h2 className="advantage-section-title">The Tesco advantage</h2>
          <p className="advantage-section-desc">A few simple reasons clients pick us for their Pre-Engineered Buildings and steel structures.</p>
        </div>
        
        <div className="bento-grid">
          
          {/* Top Row */}
          <div className="bento-card card-advanced-strategy">
            <div className="card-bg-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                <line x1="4" y1="22" x2="4" y2="15" />
              </svg>
            </div>
            <div className="card-content-bottom">
              <span className="card-category">How we work</span>
              <h3 className="text-green">Advanced Strategy</h3>
              <p>We plan the whole build up front — from the first blueprint to the last bolt — so a Pre-Engineered Building goes up without nasty surprises along the way.</p>
            </div>
          </div>

          <div className="bento-card card-delivery bg-green text-dark">
            <div className="card-header-row">
              <span className="card-num-label">1.</span>
              <div className="icon-circle dark-icon">
                <Truck size={20} color="#68D61B" />
              </div>
            </div>
            <h3>On-Time<br/>Delivery</h3>
            <p>We hand over when we said we would. Tight scheduling and steady site tracking keep your project on the calendar.</p>
          </div>

          <div className="bento-card card-steps center-content">
            <div className="steps-text">
              <span className="step-number text-green">5-Step</span>
              <span className="step-subtext">PROCESS FLOW</span>
              <p className="step-desc">Design, fabricate, deliver, erect, hand over. A clear five-step path, so you always know exactly where your project stands.</p>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="bento-card card-expert">
            <div className="card-header-row">
              <span className="card-category">2. Our people</span>
              <div className="overlapping-circles">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </div>
            <div className="card-content-bottom">
              <h3>Expert Team</h3>
              <p className="subtext">Engineers, fabricators and site crews who have spent years raising steel structures across India.</p>
            </div>
          </div>

          <div className="bento-card card-problem-solving bg-light-dark">
            <div className="inline-header">
              <div>
                <span className="card-category block">3. Engineering</span>
                <h3>Problem Solving</h3>
              </div>
              <BrainCircuit size={24} className="text-green" />
            </div>
            <p className="problem-desc">
              Tricky span, tight site, awkward load? We work the structural design until it fits the job properly.
            </p>
          </div>

          <div className="bento-card card-loyalty center-content">
            <div className="icon-circle bg-green-dark">
              <Handshake size={24} color="#68D61B" />
            </div>
            <span className="card-num-label">4. Trust</span>
            <h3 className="mt-4">Customer Loyalty</h3>
            <p className="loyalty-desc">Most of our work comes from clients who came back — or who sent a friend our way.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUsAdvantage;
