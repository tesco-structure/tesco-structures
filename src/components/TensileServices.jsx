import { useState } from 'react';
import './TensileServices.css';
import { 
  Store, 
  Hotel, 
  Dumbbell, 
  TreePine, 
  Car, 
  GraduationCap, 
  Train, 
  Ticket,
  Factory,
  ArrowUpRight,
  Sun,
  Shield,
  Droplets,
  Wind
} from 'lucide-react';

const tensileSectorsData = [
  {
    id: 0,
    category: 'COMMERCIAL',
    title: 'Commercial Plazas',
    icon: <Store size={20} />,
    image: '/images/tensile_commercial_1781085980818.png',
    cardTitle: 'Commercial Plaza Canopies',
    summary: 'Shopping plazas live or die on footfall. Our Tensile Fabric Structures turn open courtyards into shaded, comfortable gathering spots without blocking the light that keeps a plaza feeling alive — a roof that doubles as a landmark.',
    features: [
      {
        icon: <Sun size={20} className="feature-green-icon" />,
        title: 'Shaded Walkways',
        desc: 'Cool, comfortable routes that keep shoppers browsing for longer.'
      },
      {
        icon: <Wind size={20} className="feature-green-icon" />,
        title: 'Signature Look',
        desc: 'Clean curves that give the plaza a premium, modern identity.'
      },
      {
        icon: <Shield size={20} className="feature-green-icon" />,
        title: 'Natural Light',
        desc: 'Translucent fabric keeps courtyards bright through the day.'
      },
      {
        icon: <Store size={20} className="feature-green-icon" />,
        title: 'Built To Last',
        desc: 'From trusted tensile structure companies with proven field experience.'
      }
    ]
  },
  {
    id: 1,
    category: 'HOSPITALITY',
    title: 'Resort & Hotel Entrances',
    icon: <Hotel size={20} />,
    image: '/images/tensile_hospitality_1781085995192.png',
    cardTitle: 'Resort & Hotel Entrances',
    summary: 'First impressions start at the porch. A sweeping tensile structure roof over a resort entrance gives guests a sheltered welcome and the property a signature silhouette — the detail that ends up in every guest photo.',
    features: [
      {
        icon: <Hotel size={20} className="feature-green-icon" />,
        title: 'Grand Welcome',
        desc: 'A covered, weather-proof arrival that feels premium.'
      },
      {
        icon: <Droplets size={20} className="feature-green-icon" />,
        title: 'Photo-Worthy',
        desc: 'A flowing roofline that becomes the property\'s signature.'
      },
      {
        icon: <Sun size={20} className="feature-green-icon" />,
        title: 'All-Weather Cover',
        desc: 'Guests stay dry from car door to lobby.'
      },
      {
        icon: <Shield size={20} className="feature-green-icon" />,
        title: 'Architect-Matched',
        desc: 'Designed to flow with the building, not fight it.'
      }
    ]
  },
  {
    id: 2,
    category: 'SPORTS',
    title: 'Stadium Grandstands',
    icon: <Dumbbell size={20} />,
    image: '/images/tensile_sports_1781086007895.png',
    cardTitle: 'Stadium Grandstands',
    summary: 'Grandstands are where engineering gets tested — wide spans, full crowds, real weather. This is the work that separates serious tensile structure companies from the rest, with load-tested design that keeps every seat covered and every sightline clear.',
    features: [
      {
        icon: <Dumbbell size={20} className="feature-green-icon" />,
        title: 'Wide Spans',
        desc: 'Column-free cover across full grandstand seating.'
      },
      {
        icon: <Sun size={20} className="feature-green-icon" />,
        title: 'Wind-Rated',
        desc: 'Engineered to stay steady through gusts and storms.'
      },
      {
        icon: <Wind size={20} className="feature-green-icon" />,
        title: 'Clear Sightlines',
        desc: 'Shade without ever blocking the view of play.'
      },
      {
        icon: <Shield size={20} className="feature-green-icon" />,
        title: 'Crowd-Proof',
        desc: 'Durable under packed, high-energy match days.'
      }
    ]
  },
  {
    id: 3,
    category: 'PUBLIC SPACES',
    title: 'Parks & Recreation',
    icon: <TreePine size={20} />,
    image: '/images/tensile_public_1781085913058.png',
    cardTitle: 'Parks & Recreation Shade',
    summary: 'Parks should be usable in every season. Our shade canopies let families enjoy open spaces without ducking for cover when the sun turns harsh. As a tensile structure manufacturer, we build these for daily public use, year after year.',
    features: [
      {
        icon: <TreePine size={20} className="feature-green-icon" />,
        title: 'Sun Protection',
        desc: 'Cool play and seating zones through the hottest hours.'
      },
      {
        icon: <Sun size={20} className="feature-green-icon" />,
        title: 'Tough Build',
        desc: 'Made to take daily public use and rough weather.'
      },
      {
        icon: <Droplets size={20} className="feature-green-icon" />,
        title: 'Open & Airy',
        desc: 'Light, modern cover that lifts any public space.'
      },
      {
        icon: <Shield size={20} className="feature-green-icon" />,
        title: 'Low Maintenance',
        desc: 'Easy-clean fabric that keeps looking good for years.'
      }
    ]
  },
  {
    id: 4,
    category: 'PARKING',
    title: 'Car Park Canopies',
    icon: <Car size={20} />,
    image: '/images/tensile_parking_1781085927100.png',
    cardTitle: 'Car Park Canopies',
    summary: 'A car parking tensile structure does two jobs at once: it shields vehicles from heat and hail, and makes a plain lot look intentional and premium. Cooler cabins, protected paintwork, and a tidy, organised look.',
    features: [
      {
        icon: <Car size={20} className="feature-green-icon" />,
        title: 'Heat Shield',
        desc: 'Cuts cabin temperatures and protects paintwork.'
      },
      {
        icon: <Sun size={20} className="feature-green-icon" />,
        title: 'Hail & Rain Cover',
        desc: 'Keeps vehicles safe through harsh weather.'
      },
      {
        icon: <Wind size={20} className="feature-green-icon" />,
        title: 'Premium Lot Look',
        desc: 'Turns a plain car park into a tidy, organised space.'
      },
      {
        icon: <Shield size={20} className="feature-green-icon" />,
        title: 'Quick Install',
        desc: 'Fast to raise over malls, offices and open lots.'
      }
    ]
  },
  {
    id: 5,
    category: 'EDUCATION',
    title: 'Campus Assembly Areas',
    icon: <GraduationCap size={20} />,
    image: '/about_tensile_roof.png',
    cardTitle: 'Campus Assembly Areas',
    summary: 'Schools and colleges need large covered spaces for assemblies, sport and breaks. Our fabric roofs span wide courtyards in any weather. Among tensile fabric structure companies, we\'re a campus favourite for low-maintenance, safe, high-traffic builds.',
    features: [
      {
        icon: <GraduationCap size={20} className="feature-green-icon" />,
        title: 'Big Spans',
        desc: 'Cover full courtyards for assemblies and sport.'
      },
      {
        icon: <Sun size={20} className="feature-green-icon" />,
        title: 'All-Season Use',
        desc: 'Comfortable spaces rain or shine, all year.'
      },
      {
        icon: <Wind size={20} className="feature-green-icon" />,
        title: 'Safe & Sturdy',
        desc: 'Designed for busy, high-traffic student zones.'
      },
      {
        icon: <Shield size={20} className="feature-green-icon" />,
        title: 'Bright Feel',
        desc: 'Airy daylight beats a dark concrete shed.'
      }
    ]
  },
  {
    id: 6,
    category: 'TRANSPORT',
    title: 'Transit Hub Roofing',
    icon: <Train size={20} />,
    image: '/images/transit_hub_tensile.png',
    cardTitle: 'Transit Hub Roofing',
    summary: 'Bus bays, metro entrances and pickup zones need reliable cover for crowds and weather, day after day. A tensile structure roof here must be tough, easy to clean and quick to install — planned around live transit schedules.',
    features: [
      {
        icon: <Train size={20} className="feature-green-icon" />,
        title: 'High Traffic',
        desc: 'Built for constant commuter flow and crowds.'
      },
      {
        icon: <Sun size={20} className="feature-green-icon" />,
        title: 'Easy Clean',
        desc: 'Low-upkeep fabric that handles the elements.'
      },
      {
        icon: <Droplets size={20} className="feature-green-icon" />,
        title: 'Fast Install',
        desc: 'Minimal disruption to running transit schedules.'
      },
      {
        icon: <Shield size={20} className="feature-green-icon" />,
        title: 'Weather-Tough',
        desc: 'Reliable cover through rain, sun and wind.'
      }
    ]
  },
  {
    id: 7,
    category: 'EVENTS',
    title: 'Exhibition Pavilions',
    icon: <Ticket size={20} />,
    image: '/images/events_tensile_clean.png',
    cardTitle: 'Exhibition Pavilions',
    summary: 'Exhibitions demand drama and speed. Our Tensile Fabric Structures give events a bold, modern profile that photographs beautifully — many relocatable, so the same pavilion travels show to show. Fast to raise, fast to strike.',
    features: [
      {
        icon: <Ticket size={20} className="feature-green-icon" />,
        title: 'Bold Profile',
        desc: 'Striking, modern forms that photograph beautifully.'
      },
      {
        icon: <Wind size={20} className="feature-green-icon" />,
        title: 'Relocatable',
        desc: 'Move the same pavilion from one show to the next.'
      },
      {
        icon: <Sun size={20} className="feature-green-icon" />,
        title: 'Rapid Setup',
        desc: 'Fast to raise and fast to strike between events.'
      },
      {
        icon: <Shield size={20} className="feature-green-icon" />,
        title: 'Brand Stage',
        desc: 'A standout backdrop that draws the crowd in.'
      }
    ]
  },
  {
    id: 8,
    category: 'INDUSTRIAL',
    title: 'Storage & Logistics Canopies',
    icon: <Factory size={20} />,
    image: '/images/industrial_tensile_clean.png',
    cardTitle: 'Industrial Tensile Solutions',
    summary: 'Industrial sites care about cost, durability and uptime. Economical roofing for raw materials and logistics staging, with fabrics that resist rust and chemical wear. Everyday proof of why we\'re trusted as a long-term tensile structure manufacturer partner.',
    features: [
      {
        icon: <Factory size={20} className="feature-green-icon" />,
        title: 'Bulk Storage Coverage',
        desc: 'Economical roofing for raw materials, aggregates and logistics staging.'
      },
      {
        icon: <Wind size={20} className="feature-green-icon" />,
        title: 'Corrosive Environment',
        desc: 'Fabrics that don\'t rust or degrade in harsh chemical or coastal zones.'
      },
      {
        icon: <Sun size={20} className="feature-green-icon" />,
        title: 'Daylight Harvesting',
        desc: 'Reducing industrial power costs by relying on natural light transmission.'
      },
      {
        icon: <Shield size={20} className="feature-green-icon" />,
        title: 'Relocatable',
        desc: 'Canopies that can be dismantled and moved as facility needs change.'
      }
    ]
  }
];

const TensileServices = () => {
  const [activeSector, setActiveSector] = useState(0);

  const activeData = tensileSectorsData[activeSector];

  return (
    <section className="tensile-services-section">
      <div className="container services-container">
        
        <div className="services-header" style={{ marginBottom: '20px' }}>
          <h2 className="services-title" style={{ color: 'white' }}>
            Specialized <span className="highlight-green">Tensile Solutions</span><br />
            Across 9 Sectors
          </h2>
        </div>

        {/* SWAPPED LAYOUT: Card on Left, List on Right */}
        <div className="services-content swapped-content">
          
          {/* Left Column: Dynamic Card */}
          <div className="sector-card-wrapper">
            <div className="sector-dynamic-card">
              
              <div className="card-image-section">
                <img src={activeData.image} alt={activeData.title} className="card-image" />
                <div className="card-image-overlay">
                  <h3 className="card-overlay-title">{activeData.cardTitle}</h3>
                </div>
              </div>

              <div className="card-features-section">
                <div className="features-grid-dark">
                  {activeData.features.map((feature, idx) => (
                    <div className="dark-feature-item" key={idx}>
                      <div className="dark-feature-header">
                        {feature.icon}
                        <h4>{feature.title}</h4>
                      </div>
                      <p>{feature.desc}</p>
                    </div>
                  ))}
                </div>
                {activeData.summary && (
                  <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(57, 255, 20, 0.05)', borderLeft: '3px solid var(--primary-green)', borderRadius: '0 8px 8px 0' }}>
                    <p style={{ margin: 0, fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.9)', fontStyle: 'italic' }}>
                      {activeData.summary}
                    </p>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Right Column: Sector List */}
          <div className="sectors-list">
            {tensileSectorsData.map((sector, index) => {
              const isActive = activeSector === index;
              return (
                <div 
                  key={sector.id} 
                  className={`sector-item ${isActive ? 'active' : ''}`}
                  onMouseEnter={() => setActiveSector(index)}
                  onClick={() => setActiveSector(index)}
                >
                  <div className="sector-item-left">
                    <div className="sector-icon">
                      {sector.icon}
                    </div>
                    <div className="sector-text">
                      <span className="sector-category">{sector.category}</span>
                      <span className="sector-name">{sector.title}</span>
                    </div>
                  </div>
                  <div className="sector-arrow">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default TensileServices;
