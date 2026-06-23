import { CheckCircle2 } from 'lucide-react';
import './RoofingWhyChoose.css';

const RoofingWhyChoose = () => {
  const points = [
    "For industrial GI roofing in Chennai and coastal South India, we use Galvalume AZ-150 alloy — standard zinc GI this close to the Bay of Bengal is a decision clients regret by year five",
    "Standing seam with double-lock joints expands and contracts with summer heat without opening up gaps — which is where every so-called leak-proof roof eventually fails",
    "Acoustic insulation isn't optional for occupied buildings under a metal roof — Tamil Nadu monsoon rain on bare sheet hits around 70 dB; we spec the barrier before it becomes a noise complaint",
    "Every project gets a structural calculation with real wind load numbers for your zone — not a copy of a previous report with the address edited out",
    "Design, supply, fabrication, installation — all handled in-house; when something needs adjusting on site, no one's waiting on a third-party subcontractor to respond",
    "Water-spray test before handover, leak warranty in writing — an actual signed document, not a line in a brochure"
  ];

  return (
    <section className="roof-why-section">
      <div className="roof-why-bg"></div>
      <div className="roof-why-overlay"></div>
      
      <div className="roof-why-container">
        <div className="roof-why-content">
          <div className="roof-section-badge">
            <span className="badge-dot"></span> TRUSTED QUALITY
          </div>
          <h2 className="roof-why-title">Why Choose <span className="text-highlight">Tesco Structures</span> for Roofing?</h2>
          
          <div className="roof-why-list">
            {points.map((point, idx) => (
              <div className="roof-why-item" key={idx}>
                <div className="roof-why-icon-wrapper">
                  <CheckCircle2 size={18} className="roof-why-icon" />
                </div>
                <p className="roof-why-text">{point}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="roof-why-visual-space"></div>
      </div>
    </section>
  );
};

export default RoofingWhyChoose;
