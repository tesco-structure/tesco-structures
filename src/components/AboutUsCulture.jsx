import { CheckCircle2 } from 'lucide-react';
import './AboutUsCulture.css';

const values = [
  {
    id: 'commitment',
    title: 'Commitment',
    desc: 'We follow through on every promise, every time.'
  },
  {
    id: 'quality',
    title: 'Quality',
    desc: 'No shortcuts — ever. Excellence is the only standard.'
  },
  {
    id: 'trust',
    title: 'Trust',
    desc: 'Built through transparency, reliability, and honest communication.'
  },
  {
    id: 'precision',
    title: 'Precision',
    desc: 'Engineering accuracy at every bolt, beam, and boundary.'
  }
];

const AboutUsCulture = () => {
  return (
    <section className="culture-section">
      <div className="culture-container">
        
        <div className="culture-header">
          <span className="culture-badge">WORKING FOR US</span>
          <h2 className="culture-title">Values That Define Our Culture</h2>
        </div>

        {/* Central Pillar Layout */}
        <div className="culture-layout-pillar">
          
          {/* Left Values */}
          <div className="culture-column culture-column-left">
            {values.slice(0, 2).map(val => (
              <div key={val.id} className="culture-value-card card-left">
                <div className="value-icon">
                  <CheckCircle2 size={24} />
                </div>
                <div className="value-text">
                  <h3>{val.title}</h3>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Central Image Pillar */}
          <div className="culture-pillar-center">
            <div className="pillar-image-wrapper">
              <img src="/about_culture.png" alt="Construction team working" className="pillar-image" />
              
              {/* Overlapping Stats on the Image */}
              <div className="pillar-stats-overlay">
                <div className="pillar-stat">
                  <h4>500+</h4>
                  <p>Structures Built</p>
                </div>
                <div className="pillar-stat">
                  <h4>15+</h4>
                  <p>Years</p>
                </div>
                <div className="pillar-stat">
                  <h4>200+</h4>
                  <p>Team Members</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Values */}
          <div className="culture-column culture-column-right">
            {values.slice(2, 4).map(val => (
              <div key={val.id} className="culture-value-card card-right">
                <div className="value-icon">
                  <CheckCircle2 size={24} />
                </div>
                <div className="value-text">
                  <h3>{val.title}</h3>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUsCulture;
