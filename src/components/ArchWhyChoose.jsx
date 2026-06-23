import { CheckCircle2 } from 'lucide-react';
import './ArchWhyChoose.css';

const ArchWhyChoose = () => {
  const points = [
    "15+ years as architectural & structural consultants in Chennai. We know CMDA and DTCP submission formats, Zone III seismic detailing, and soil conditions across the city well enough that we're rarely caught off guard.",
    "STAAD Pro, ETABS, AutoCAD, Tekla, Revit all run by our own engineers in-house. The structural engineer who modeled your building is the same one who puts their name on the calculation report.",
    "Our structural engineering consultancy has re-analysed third-party designs and found steel quantities running 10 to 15% over what the calculations actually needed. On a mid-size building, that's a saving worth looking at before you go to tender.",
    "Architectural design and structural design and engineering run on the same BIM model here. When the architect revises a plan, structural picks it up the same week. That's stopped a lot of the last-minute conflicts we used to spend time sorting out on site.",
    "IS 456, IS 800, IS 1893, IS 875 — our building structural consultants go through the applicable codes on every drawing before anything goes out. We've picked up projects where this wasn't done properly the first time around. It's not a step we cut short.",
    "After handover we're still reachable. RFIs get answered, drawings get revised when site conditions don't match what was assumed, and we visit when something needs eyes on it. Quite a few clients found us after their previous consultant stopped responding once the drawings were delivered."
  ];

  return (
    <section className="arch-why-section">
      <div className="arch-why-bg"></div>
      <div className="arch-why-overlay"></div>
      
      <div className="arch-why-container">
        <div className="arch-why-content">
          <div className="arch-section-badge">
            <span className="badge-dot"></span> THE TESCO DIFFERENCE
          </div>
          <h2 className="arch-why-title">Why Choose <span className="text-highlight">Tesco Structure</span> for Consultancy?</h2>
          
          <div className="arch-why-list">
            {points.map((point, idx) => (
              <div className="arch-why-item" key={idx}>
                <div className="arch-why-icon-wrapper">
                  <CheckCircle2 size={18} className="arch-why-icon" />
                </div>
                <p className="arch-why-text">{point}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Empty space allows the visual to shine through on the right */}
        <div className="arch-why-visual-space"></div>
      </div>
    </section>
  );
};

export default ArchWhyChoose;
