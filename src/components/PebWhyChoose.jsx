import { CheckCircle2 } from 'lucide-react';
import './PebWhyChoose.css';

const PebWhyChoose = () => {
  const points = [
    "As PEB fabricators in Chennai, we keep design, fabrication and erection under one roof — no outsourcing, no vendor blame games.",
    "ISO 9001:2015 certified steel structure contractors — every weld and coat documented, traced and signed off before dispatch.",
    "One of Tamil Nadu's most active PEB construction companies for 15+ years — not a pitch, a track record you can verify client by client.",
    "Turnkey PEB contractors with pan-India reach — Karnataka, AP, Telangana, Kerala — with the accountability of a Chennai-rooted team.",
    "500+ industrial sheds, factory buildings and warehouse construction projects handed over across South India. On time. Every time.",
    "From structural drawing to PEB erection in Tamil Nadu — one contract, one contact, zero gaps. That's how we work."
  ];

  return (
    <section className="peb-why-section">
      <div className="peb-why-bg"></div>
      <div className="peb-why-overlay"></div>
      
      <div className="peb-why-container">
        <div className="peb-why-content">
          <div className="peb-section-badge">
            <span className="badge-dot"></span> THE TESCO DIFFERENCE
          </div>
          <h2 className="peb-why-title">Why Choose <span className="text-highlight">Tesco Structures</span> for PEB?</h2>
          
          <div className="peb-why-list">
            {points.map((point, idx) => (
              <div className="peb-why-item" key={idx}>
                <div className="peb-why-icon-wrapper">
                  <CheckCircle2 size={18} className="peb-why-icon" />
                </div>
                <p className="peb-why-text">{point}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Empty space allows the massive warehouse image to shine through on the right */}
        <div className="peb-why-visual-space"></div>
      </div>
    </section>
  );
};

export default PebWhyChoose;
