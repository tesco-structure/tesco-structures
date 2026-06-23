import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import './CivilApplications.css';

const applications = [
  { id: 'c-app-1', title: 'Apartments', desc: 'Multi-storey residential civil construction — RCC frames from basement to roof, pile or raft foundations based on the soil report, waterproofed basements, and full structural handover with drawings. We\'ve built across Chennai\'s Tambaram belt, Coimbatore\'s Peelamedu corridor, and Madurai suburbs.', image: '/images/apartments_civil.png' },
  { id: 'c-app-2', title: 'Industrial Buildings', desc: 'Factory and manufacturing plant civil construction designed for real industrial loads. Machine foundations calculated for dynamic forces, equipment pads with correct anchor bolt templates, crane beam supports with the deflection limits the OEM actually specifies. Heavy civil construction done to the weight it carries.', image: '/images/industrial_civil.png' },
  { id: 'c-app-3', title: 'Hospitals', desc: 'Hospital civil works can\'t cut corners — the structure needs to carry MRI machines, overhead patient lift rails, and mechanical plant loads that ordinary office buildings never see. Raft foundations, waterproofed basements with sump sizing based on actual site water table, and IS code seismic detailing throughout.', image: '/images/hospitals_civil.png' },
  { id: 'c-app-4', title: 'Office Buildings', desc: 'Corporate office civil construction where column grid layout, slab span, and service shaft openings need to be coordinated from the structural stage — not hacked in after the frame is done. Post-tensioned or conventionally reinforced slabs, full structural documentation for statutory approvals.', image: '/images/office_civil.png' },
  { id: 'c-app-5', title: 'Malls', desc: 'Large-span retail structural frames where column-free floor areas are worth real money to the tenant. High-capacity slabs, atrium openings, escalator pit construction, and service shaft coordination built into the structural design before anything is poured.', image: '/images/malls_civil.png' },
  { id: 'c-app-6', title: 'Restaurants', desc: 'Commercial civil works for restaurants, resorts, and hotels where the handover date is fixed by an operating season or lease commitment. We\'ve learned to work backwards from those dates and build a programme that actually meets them — not one that looks good on paper in week one.', image: '/images/restaurants_civil.png' },
  { id: 'c-app-7', title: 'Warehouses', desc: 'Warehouse floor slabs are not just thick concrete — they need joint-free or properly controlled-joint design, flatness specifications matched to the racking system, and load capacity that accounts for the actual forklift axle weights. We\'ve built across Chennai\'s logistics corridor and Tamil Nadu SIPCOT zones.', image: '/images/warehouse_civil.png' },
  { id: 'c-app-8', title: 'Villas', desc: 'Premium residential civil works where the client is living in the building they\'re paying for. Custom foundation design, structural framing that gives the architect the spans they need, and a finish quality that doesn\'t look like it needs touching up six months after handover.', image: '/images/villas_civil.png' },
  { id: 'c-app-10', title: 'Institutions', desc: 'Schools, colleges, and public assembly halls built under IS seismic code — because the people using these buildings deserve structural safety, not just a completion certificate. We\'ve handled institutional civil construction projects from Trichy to Madurai to Salem, mostly through repeat referrals from structural consultants who saw the work.', image: '/images/institutions_civil.png' },
];

const CivilApplications = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="civil-apps-section">
      <div className="civil-apps-container">
        <div className="civil-apps-header">
          <div className="civil-apps-badge">Civil Application</div>
          <p className="civil-apps-subtitle">
            Nine types of civil construction projects we handle regularly — from factory sheds in Ambattur to institutional blocks in Madurai. Different structures, same standard of engineering.
          </p>
        </div>

        <div className="civil-apps-interactive-layout">
          
          {/* Left Side: Interactive List */}
          <div className="civil-apps-list">
            {applications.map((app, index) => (
              <div 
                key={app.id} 
                className={`civil-app-list-item ${activeIndex === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className="app-item-content">
                  <span className="app-item-number">{(index + 1).toString().padStart(2, '0')}</span>
                  <h3 className="app-item-title">{app.title}</h3>
                </div>
                <ArrowRight className="app-item-arrow" size={20} />
              </div>
            ))}
          </div>

          {/* Right Side: Dynamic Image/Gradient Reveal */}
          <div className="civil-apps-visual">
            {applications.map((app, index) => (
              <div 
                key={`visual-${app.id}`}
                className={`civil-app-visual-panel ${activeIndex === index ? 'active' : ''}`}
                style={
                  app.image 
                    ? { backgroundImage: `url(${app.image})` } 
                    : { background: app.color }
                }
              >
                <div className="visual-panel-overlay">
                  <div className="visual-panel-content">
                    <h2>{app.title}</h2>
                    <p>{app.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CivilApplications;
