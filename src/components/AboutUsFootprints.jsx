import { useState } from 'react';
import { MapPin } from 'lucide-react';
import './AboutUsFootprints.css';

const locations = [
  {
    id: 'tn',
    name: 'Tamil Nadu',
    image: '/state_tn.png',
    facilities: '3 Manufacturing Hubs'
  },
  {
    id: 'ap',
    name: 'Andhra Pradesh',
    image: '/state_ap.png',
    facilities: 'Active Projects'
  },
  {
    id: 'ka',
    name: 'Karnataka',
    image: '/state_ka.png',
    facilities: 'Active Projects'
  },
  {
    id: 'kl',
    name: 'Kerala',
    image: '/state_kl.png',
    facilities: 'Active Projects'
  },
  {
    id: 'tg',
    name: 'Telangana',
    image: '/state_tg.png',
    facilities: 'Active Projects'
  }
];

const AboutUsFootprints = () => {
  const [activeLocation, setActiveLocation] = useState(locations[0].id);

  return (
    <section className="footprints-section">
      {/* Background Images Layer */}
      <div className="footprints-bgs">
        {locations.map((loc) => (
          <div
            key={loc.id}
            className={`footprint-bg-layer ${activeLocation === loc.id ? 'active' : ''}`}
            style={{ backgroundImage: `url(${loc.image})` }}
          />
        ))}
        <div className="footprint-bg-overlay"></div>
      </div>

      <div className="footprints-container">
        
        {/* Left Side: Content */}
        <div className="footprints-content">
          <div className="footprint-badge">Our footprints</div>
          <h2 className="footprints-title">We Own And Operate</h2>
          <p className="footprints-desc">
            We have built a strong, growing presence right across South India, putting up Pre-Engineered Buildings and steel structures close to where our clients need them. Being on the ground in four states means quicker delivery, easier logistics and a local team that actually knows the area.
          </p>
          
          <div className="footprints-stats">
            <div className="f-stat">
              <span className="f-stat-num">4</span>
              <span className="f-stat-label">States Covered</span>
            </div>
            <div className="f-stat">
              <span className="f-stat-num">50+</span>
              <span className="f-stat-label">Active Project Sites</span>
            </div>
            <div className="f-stat">
              <span className="f-stat-num">3</span>
              <span className="f-stat-label">Manufacturing Hubs</span>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive List */}
        <div className="footprints-list-wrapper">
          <ul className="footprints-list">
            {locations.map((loc) => (
              <li 
                key={loc.id}
                className={`footprints-list-item ${activeLocation === loc.id ? 'active' : ''}`}
                onMouseEnter={() => setActiveLocation(loc.id)}
              >
                <div className="loc-name-wrapper">
                  <span className="loc-name">{loc.name}</span>
                </div>
                <div className="loc-details">
                  <MapPin size={16} className="loc-small-icon" />
                  {loc.facilities}
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default AboutUsFootprints;
