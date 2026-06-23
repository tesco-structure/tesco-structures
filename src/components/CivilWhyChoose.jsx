import { CheckCircle2 } from 'lucide-react';
import './CivilWhyChoose.css';

const CivilWhyChoose = () => {
  const points = [
    "Chennai coastal soil, Coimbatore laterite, Trichy delta zones, Madurai black cotton — 15 years of civil construction means we've worked every soil type in Tamil Nadu. No ground surprises us anymore.",
    "Every civil construction design drawing is signed by a licensed structural engineer. IS 456, IS 1893, IS 13920 — on every project, not just the ones where the client asks.",
    "Soil investigation before every civil construction project. We've seen what happens near Chennai's coast when that step is skipped. We don't skip it.",
    "RMC plants, rebar yards, waterproofing suppliers — our Tamil Nadu supply network keeps civil works construction moving. Your pour schedule doesn't wait for a delayed truck.",
    "One engineer, one number, one weekly update. On our civil construction sites, problems get reported to you — not buried in the final bill.",
    "Day-one BOQ with real market rates. Variation on any civil construction project only happens with a signed scope change. Nothing gets added quietly."
  ];

  return (
    <section className="civil-why-section">
      <div className="civil-why-bg"></div>
      <div className="civil-why-overlay"></div>
      
      <div className="civil-why-container">
        <div className="civil-why-content">
          <div className="civil-section-badge">
            <span className="badge-dot"></span> THE TESCO DIFFERENCE
          </div>
          <h2 className="civil-why-title">Why Project Owners Keep Coming Back to <span className="text-highlight">Tesco Structure</span></h2>
          <p className="civil-why-desc-intro" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', marginBottom: '30px', lineHeight: '1.6' }}>
            We've seen what cuts corners look like in civil construction — and we've spent 15 years building the opposite of that across Tamil Nadu and South India.
          </p>
          
          <div className="civil-why-list">
            {points.map((point, idx) => (
              <div className="civil-why-item" key={idx}>
                <div className="civil-why-icon-wrapper">
                  <CheckCircle2 size={18} className="civil-why-icon" />
                </div>
                <p className="civil-why-text">{point}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Empty space allows the visual to shine through on the right */}
        <div className="civil-why-visual-space"></div>
      </div>
    </section>
  );
};

export default CivilWhyChoose;
