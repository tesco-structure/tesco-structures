import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import './TensileApplications.css';

const applications = [
  { id: 't-app-1', title: 'Entrance Canopy', desc: 'We\'ve handled tensile fabric roof installation for entrance canopies at hospitals on Anna Salai, resorts along ECR, and corporate gates on the OMR. They mount without touching the existing structure, shed monsoon rain cleanly, and look right 15 years later — not like an afterthought added at the end of the budget.', image: '/images/tensile_hospitality_1781085995192.png' },
  { id: 't-app-2', title: 'Swimming Pool', desc: 'Covering a Chennai pool needs 95%-plus UV block, airflow, and decent light — all three at once. Our PVDF and PTFE tensile pool structures handle all three. The membrane blocks UV, the sides stay open to keep air moving, and diffused light keeps the deck usable and the water colour clean.', image: '/images/swimming_pool_tensile.png' },
  { id: 't-app-3', title: 'Shopping Mall', desc: 'Commercial tensile roofing over a food court or outdoor plaza gives full weather cover without columns cutting through the floor plan. We\'ve done mall entrances, food court plazas, and retail zones across Chennai and Tamil Nadu. Footfall numbers after a well-designed canopy goes in are consistently better.', image: '/images/tensile_commercial_1781085980818.png' },
  { id: 't-app-4', title: 'Indoor Sports', desc: 'Tensile dome and saddle roofs for badminton halls and multipurpose arenas span full court widths without columns, stay dry inside through Tamil Nadu humidity, and bring in enough filtered daylight that floodlights aren\'t needed through the morning. We\'ve installed these across South India.', image: '/images/tensile_sports_1781086007895.png' },
  { id: 't-app-5', title: 'Cafes', desc: 'A tensile canopy over a courtyard cafe or rooftop terrace in Chennai extends usable seating through the heat and monsoon months. PVDF membrane in the right colour, clean powder-coated steel — it becomes a design feature, not an apology for the weather. Done for restaurants and hotel terraces across Tamil Nadu.', image: '/images/cafe_tensile.png' },
  { id: 't-app-6', title: 'Convention Centres', desc: 'Columns in a convention hall fix the floor plan. Large-span membrane tensile structures load to the perimeter, keeping the event floor completely clear for flexible seating, staging, and exhibition layouts. We\'ve built wide-span tensile roofing for event venues and multipurpose halls across South India.', image: '/images/exhibition_pavilion_tensile.png' },
  { id: 't-app-7', title: 'Walkway', desc: 'Tensile walkway canopies in barrel vault form give full rain and UV cover while staying open on both sides — cooler than a closed roof and better for airflow. They mount on existing structures without major civils work. Hospital campuses, IT parks, transit platforms — same result across all of them.', image: '/images/tensile_public_1781085913058.png' },
  { id: 't-app-8', title: 'Gazebo', desc: 'A conical or multi-point tensile gazebo in a hotel garden or corporate courtyard in Chennai becomes the thing visitors photograph. We\'ve built these for five-star properties in Tamil Nadu and OMR campus courtyards. Scale, shape, and membrane colour matched to the landscape — not a generic product off a catalogue.', image: '/images/gazebo_tensile.png' },
  { id: 't-app-9', title: 'Balconies', desc: 'South-facing balconies in Chennai are genuinely unusable from April through September without cover. A properly tensioned residential tensile awning is lighter than a pergola, stays taut in the sea breeze, holds its colour 15-plus years, and can be matched to the building façade. For apartments, villas, and penthouse terraces across Tamil Nadu.', image: '/images/balcony_tensile_clean.png' },
  { id: 't-app-10', title: 'Car Parking', desc: 'Park a car under June sun in Tamil Nadu. Come back two hours later. A car parking tensile structure cuts surface temperature by 15–20°C and blocks the UV that damages paint and interiors. We\'ve built these for IT campuses on the OMR, hospitals in Nungambakkam and Tambaram, commercial sites in Guindy, and hotel properties along ECR.', image: '/images/tensile_parking_1781085927100.png' },
];

const TensileApplications = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Default to first item

  return (
    <section className="tensile-apps-section">
      <div className="tensile-apps-container">
        <div className="tensile-apps-header">
          <div className="tensile-apps-badge">Tensile Application</div>
          <p className="tensile-apps-subtitle">
            Ten project types we handle in Chennai and Tamil Nadu — from commercial tensile roofing for malls and plazas to residential awnings. Click through each one to see what the site problem is and why tensile works better.
          </p>
        </div>

        <div className="tensile-apps-interactive-layout">
          
          {/* Left Side: Interactive List */}
          <div className="tensile-apps-list">
            {applications.map((app, index) => (
              <div 
                key={app.id} 
                className={`tensile-app-list-item ${activeIndex === index ? 'active' : ''}`}
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
          <div className="tensile-apps-visual">
            {applications.map((app, index) => (
              <div 
                key={`visual-${app.id}`}
                className={`tensile-app-visual-panel ${activeIndex === index ? 'active' : ''}`}
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

export default TensileApplications;
