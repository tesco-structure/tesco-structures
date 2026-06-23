import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import './PebApplications.css';

const applications = [
  { id: 'app-1', title: 'Cold Storage & Cold Chain', desc: 'Insulated PEB panels, precise temp zones — pharma and foodgrade cold chain specialists.', image: '/peb_app_cold_storage.png' },
  { id: 'app-2', title: 'Educational Institutions', desc: 'Pre-engineered school and college buildings in Tamil Nadu — fast, safe, IS-code compliant.', image: '/peb_app_education.png' },
  { id: 'app-3', title: 'University Turnkey Construction', desc: 'Large-campus PEB construction in Chennai — auditoriums, labs, hostels, admin blocks.', image: '/peb_app_university.png' },
  { id: 'app-4', title: 'Auditorium & Event Spaces', desc: 'Column-free clear spans up to 60m — ideal for multi-purpose halls and event centres.', image: '/peb_app_auditorium.png' },
  { id: 'app-5', title: 'Warehouse & Logistics', desc: 'Warehouse construction in Chennai — high-bay, 3PL, e-commerce and cold-chain ready.', image: '/app_warehouse_1781254969601.png' },
  { id: 'app-6', title: 'Marriage Halls', desc: 'Steel structure marriage halls in Tamil Nadu — wide spans, fast delivery, low maintenance.', image: '/app_marriage_hall_1781254983025.png' },
  { id: 'app-7', title: 'Hospitals & Healthcare', desc: 'Industrial-grade PEB frames designed per IS:1893 — wind and seismic load compliant.', image: '/app_hospitals_1781254995147.png' },
  { id: 'app-8', title: 'Multi-storey Steel Buildings', desc: 'Pre-engineered steel buildings in Chennai — 2 to 6 floors with RCC composite decks.', image: '/app_multi_story_1781255008922.png' },
  { id: 'app-9', title: 'Commercial & Retail Spaces', desc: 'Metal building contractors for showrooms, hypermarkets and mixed-use retail centres.', image: '/peb_about_img.png' },
];

const PebApplications = () => {
  const [activeIndex, setActiveIndex] = useState(4); // Default to Warehouse which has an image

  return (
    <section className="peb-apps-section">
      <div className="peb-apps-container">
        <div className="peb-apps-header">
          <div className="peb-apps-badge">PEB Application</div>
          <p className="peb-apps-subtitle">
            From cold storage in Coimbatore to 2-lakh sq.ft. logistics warehouses on the Chennai-Bangalore corridor — we've built them all.
          </p>
        </div>

        <div className="peb-apps-interactive-layout">
          
          {/* Left Side: Interactive List */}
          <div className="peb-apps-list">
            {applications.map((app, index) => (
              <div 
                key={app.id} 
                className={`peb-app-list-item ${activeIndex === index ? 'active' : ''}`}
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
          <div className="peb-apps-visual">
            {applications.map((app, index) => (
              <div 
                key={`visual-${app.id}`}
                className={`peb-app-visual-panel ${activeIndex === index ? 'active' : ''}`}
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

export default PebApplications;
