import { CheckCircle2 } from 'lucide-react';
import './TensileWhyChoose.css';

const TensileWhyChoose = () => {
  const points = [
    "15 years as tensile roofing contractors in Chennai — sea air, 180mm/hr monsoon drainage, 44°C ambient steel specs. Those numbers come from real projects, not standard tables.",
    "Our own crews — not subcontractors — have put up 350+ spans as tensile roofing fabricators in Chennai and across Tamil Nadu, AP, Karnataka, Kerala, and Telangana. We know what failing tensile work looks like at year three.",
    "PVC, PVDF, or PTFE — specified to your site, exposure, and service life before any tensile fabric structure installation begins. Data sheet on the table first. No upselling, no margin games.",
    "Every tensile roof structure installation we do is wind-load calculated to IS:875 for your site, not a regional average. Seismic compliance to your actual zone. Monsoon drainage sized for real Tamil Nadu rainfall.",
    "Hypar, conical, barrel vault, dome, custom free-form — every form of architectural tensile structure fabricated and field-tensioned across South India. We'll tell you which fits your anchor conditions and budget.",
    "As your tensile structure contractor from site visit to handover — one team, no handoffs. When something comes up mid-installation, there's no debate about who owns it. We do."
  ];

  return (
    <section className="tensile-why-section">
      <div className="tensile-why-bg"></div>
      <div className="tensile-why-overlay"></div>
      
      <div className="tensile-why-container">
        <div className="tensile-why-content">
          <div className="tensile-section-badge">
            <span className="badge-dot"></span> THE TESCO DIFFERENCE
          </div>
          <h2 className="tensile-why-title">What separates <span className="text-highlight">Tesco Structures</span> from the rest</h2>
          
          <div className="tensile-why-list">
            {points.map((point, idx) => (
              <div className="tensile-why-item" key={idx}>
                <div className="tensile-why-icon-wrapper">
                  <CheckCircle2 size={18} className="tensile-why-icon" />
                </div>
                <p className="tensile-why-text">{point}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Empty space allows the massive tensile background image to shine through on the right */}
        <div className="tensile-why-visual-space"></div>
      </div>
    </section>
  );
};

export default TensileWhyChoose;
