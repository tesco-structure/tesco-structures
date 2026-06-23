import { useState } from 'react';
import './Services.css';
import { 
  Package, 
  GraduationCap, 
  Mic, 
  Factory, 
  Settings, 
  Building2, 
  Snowflake, 
  Store, 
  Landmark,
  ArrowUpRight,
  Box,
  Truck,
  ScanBarcode,
  BookOpen,
  Users,
  MonitorPlay,
  Lightbulb,
  ShieldCheck,
  Clock
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const sectorsData = [
  {
    id: 0,
    category: 'LOGISTICS',
    title: 'Warehousing & Logistics',
    icon: <Package size={20} />,
    image: '/images/logistics_peb_1781084666051.png',
    cardTitle: 'Smart Warehousing Infrastructure',
    summary: 'Honest PEB warehouse construction in Chennai - industrial warehouse sheds handed over ready to load.',
    features: [
      {
        icon: <Box size={20} className="feature-green-icon" />,
        title: 'High-Bay Storage',
        desc: 'Tall, column-free PEB bays with clear spans up to 100m, so you stack high and waste no floor.'
      },
      {
        icon: <Settings size={20} className="feature-green-icon" />,
        title: 'Automated Distribution',
        desc: 'Framing sized for conveyors, sorters and the heavy kit a modern distribution centre runs on.'
      },
      {
        icon: <Truck size={20} className="feature-green-icon" />,
        title: 'E-commerce Fulfilment',
        desc: 'Multi-tier mezzanines and wide loading bays for sites that ship all day.'
      },
      {
        icon: <ScanBarcode size={20} className="feature-green-icon" />,
        title: 'Smart Inventory',
        desc: 'Flat, durable floors that AGVs and forklifts can move across without trouble.'
      }
    ]
  },
  {
    id: 1,
    category: 'EDUCATIONAL INSTITUTIONS',
    title: 'Educational Campus Structures',
    icon: <GraduationCap size={20} />,
    image: '/images/education_peb_1781084677246.png',
    cardTitle: 'Campus & Classroom Buildings',
    summary: 'School and college building construction in steel, so the academic calendar never waits on the contractor.',
    features: [
      {
        icon: <BookOpen size={20} className="feature-green-icon" />,
        title: 'Classroom Blocks',
        desc: 'Bright, naturally lit teaching blocks that go up between terms, not over years.'
      },
      {
        icon: <Users size={20} className="feature-green-icon" />,
        title: 'Indoor Sports Halls',
        desc: 'Wide-span halls that double for assemblies, sport and exams.'
      },
      {
        icon: <Lightbulb size={20} className="feature-green-icon" />,
        title: 'Labs & Workshops',
        desc: 'Flexible interiors that adapt as the syllabus and equipment change.'
      },
      {
        icon: <Building2 size={20} className="feature-green-icon" />,
        title: 'Hostels & Mess',
        desc: 'Multi-storey steel framing for residential blocks on tight campus land.'
      }
    ]
  },
  {
    id: 2,
    category: 'AUDITORIUM',
    title: 'Premium Auditorium Structures',
    icon: <Mic size={20} />,
    image: '/images/auditorium_peb_1781084687912.png',
    cardTitle: 'Auditoriums & Event Halls',
    summary: 'Auditorium and convention-centre construction with clean lines and big, clear-span rooms.',
    features: [
      {
        icon: <MonitorPlay size={20} className="feature-green-icon" />,
        title: 'Clear-Span Seating',
        desc: 'Pillar-free halls, so every seat in the house actually sees the stage.'
      },
      {
        icon: <Mic size={20} className="feature-green-icon" />,
        title: 'Acoustic-Ready Shell',
        desc: 'Roof and wall build-ups planned with sound treatment in mind.'
      },
      {
        icon: <Building2 size={20} className="feature-green-icon" />,
        title: 'Grand Entrances',
        desc: 'Tall facades and canopies that give the building a real sense of arrival.'
      },
      {
        icon: <Settings size={20} className="feature-green-icon" />,
        title: 'Fast Fit-Out',
        desc: 'A weather-tight shell early, so interiors and AV work can start sooner.'
      }
    ]
  },
  {
    id: 3,
    category: 'MANUFACTURING',
    title: 'Industrial Manufacturing',
    icon: <Factory size={20} />,
    image: '/images/manufacturing_peb_1781084702068.png',
    cardTitle: 'Manufacturing Facilities',
    summary: "Industrial manufacturing sheds and factory buildings that are up and producing weeks ahead of conventional RCC.",
    features: [
      {
        icon: <Factory size={20} className="feature-green-icon" />,
        title: 'Process-Led Layout',
        desc: 'Buildings shaped around your line, not the other way round.'
      },
      {
        icon: <Settings size={20} className="feature-green-icon" />,
        title: 'Crane-Ready Frames',
        desc: 'Columns and rafters sized for EOT cranes and material handling.'
      },
      {
        icon: <Lightbulb size={20} className="feature-green-icon" />,
        title: 'Ventilation & Light',
        desc: 'Ridge vents and skylights for a cooler, brighter shop floor.'
      },
      {
        icon: <Box size={20} className="feature-green-icon" />,
        title: 'Easy Expansion',
        desc: "Bays you can extend later without pulling down what's already there."
      }
    ]
  },
  {
    id: 4,
    category: 'PRODUCTION',
    title: 'Factories & Production Plants',
    icon: <Settings size={20} />,
    image: '/images/production_peb_1781084714838.png',
    cardTitle: 'Heavy Production Plants',
    summary: 'Factory and production plant construction - the heavy work that keeps us among the PEB companies in Chennai people trust.',
    features: [
      {
        icon: <Box size={20} className="feature-green-icon" />,
        title: 'Heavy-Load Framing',
        desc: 'Built for the weight of plant, hoppers and continuous machinery.'
      },
      {
        icon: <Settings size={20} className="feature-green-icon" />,
        title: 'Utility Integration',
        desc: 'Routes for ducting, piping and power planned into the structure.'
      },
      {
        icon: <Building2 size={20} className="feature-green-icon" />,
        title: 'Multi-Bay Spans',
        desc: 'Wide, repeating bays that cover a large production footprint.'
      },
      {
        icon: <ShieldCheck size={20} className="feature-green-icon" />,
        title: 'Tough Finishes',
        desc: 'Cladding and floors that take the daily punishment of a plant.'
      }
    ]
  },
  {
    id: 5,
    category: 'ARCHITECTURE',
    title: 'Multi Storey Buildings',
    icon: <Building2 size={20} />,
    image: '/images/multistorey_peb_1781084746624.png',
    cardTitle: 'Multi-Storey Steel Buildings',
    summary: 'Multi-storey steel building construction for when land in the city is tight and dear.',
    features: [
      {
        icon: <Building2 size={20} className="feature-green-icon" />,
        title: 'Steel-Framed Floors',
        desc: 'Composite floors that go up faster and lighter than concrete.'
      },
      {
        icon: <Users size={20} className="feature-green-icon" />,
        title: 'More Usable Area',
        desc: 'Slimmer columns free up rentable, workable floor space.'
      },
      {
        icon: <Store size={20} className="feature-green-icon" />,
        title: 'Mixed Use',
        desc: 'Office-over-plant, showroom-over-store, parking decks - all in steel.'
      },
      {
        icon: <Clock size={20} className="feature-green-icon" />,
        title: 'Quick Top-Out',
        desc: 'Reach full height in a fraction of conventional build time.'
      }
    ]
  },
  {
    id: 6,
    category: 'PRESERVATION',
    title: 'Cold Storage Facilities',
    icon: <Snowflake size={20} />,
    image: '/images/coldstorage_peb_1781084758868.png',
    cardTitle: 'Cold Storage & Controlled Rooms',
    summary: 'Cold storage construction where the inside stays exactly as cold as it should.',
    features: [
      {
        icon: <Snowflake size={20} className="feature-green-icon" />,
        title: 'Sealed Envelopes',
        desc: 'Tight PEB shells and insulated panels that actually hold temperature.'
      },
      {
        icon: <Box size={20} className="feature-green-icon" />,
        title: 'Zoned Chambers',
        desc: 'Separate rooms for chill, freeze and ripening under one roof.'
      },
      {
        icon: <ShieldCheck size={20} className="feature-green-icon" />,
        title: 'Food & Pharma Grade',
        desc: 'Hygienic finishes built for inspection-ready facilities.'
      },
      {
        icon: <Lightbulb size={20} className="feature-green-icon" />,
        title: 'Energy Sense',
        desc: "Insulation done right, so your compressors aren't fighting the building."
      }
    ]
  },
  {
    id: 7,
    category: 'RETAIL',
    title: 'Commercial Spaces',
    icon: <Store size={20} />,
    image: '/images/retail_peb_1781084774704.png',
    cardTitle: 'Retail & Showroom Buildings',
    summary: 'Commercial and showroom building construction that sells as hard as the brand inside it.',
    features: [
      {
        icon: <Store size={20} className="feature-green-icon" />,
        title: 'Showroom Spans',
        desc: "Wide, open floors with nothing blocking the customer's line of sight."
      },
      {
        icon: <Building2 size={20} className="feature-green-icon" />,
        title: 'Statement Facades',
        desc: 'Glass-and-steel fronts that pull people in off the road.'
      },
      {
        icon: <Clock size={20} className="feature-green-icon" />,
        title: 'Quick Turnaround',
        desc: 'Open the doors sooner with a faster shell and fit-out.'
      },
      {
        icon: <Settings size={20} className="feature-green-icon" />,
        title: 'Flexible Interiors',
        desc: 'Spaces that re-merchandise as easily as your stock changes.'
      }
    ]
  },
  {
    id: 8,
    category: 'CIVIC',
    title: 'Infrastructure Projects',
    icon: <Landmark size={20} />,
    image: '/images/civic_peb_1781084788786.png',
    cardTitle: 'Public & Civic Infrastructure',
    summary: 'Large-span infrastructure construction, where a serious PEB manufacturer in Tamil Nadu earns its name.',
    features: [
      {
        icon: <Truck size={20} className="feature-green-icon" />,
        title: 'Transit & Depots',
        desc: 'Bus depots, terminals and maintenance sheds at civic scale.'
      },
      {
        icon: <Store size={20} className="feature-green-icon" />,
        title: 'Markets & Halls',
        desc: 'Covered public markets and community halls with big clear spans.'
      },
      {
        icon: <Settings size={20} className="feature-green-icon" />,
        title: 'Utility Buildings',
        desc: 'Pump houses, substations and service buildings built to last.'
      },
      {
        icon: <ShieldCheck size={20} className="feature-green-icon" />,
        title: 'Durable & Low-Care',
        desc: 'Structures public bodies can run with minimal upkeep.'
      }
    ]
  }
];

const Services = () => {
  const [activeSector, setActiveSector] = useState(0);

  const activeData = sectorsData[activeSector];

  return (
    <section className="services-section">
      <div className="container services-container">
        
        <ScrollReveal className="services-header" delay={0.1} y={30}>
          <h4 className="green-subtitle gradient-badge">Specialized Solutions</h4>
          <h2 className="services-title">
            Specialized <span className="highlight-green">PEB Solutions</span><br />
            Across 9 Sectors
          </h2>
        </ScrollReveal>

        <ScrollReveal className="services-content" delay={0.3} y={40}>
          
          {/* Left Column: Sector List */}
          <div className="sectors-list">
            {sectorsData.map((sector, index) => {
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

          {/* Right Column: Dynamic Card */}
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

        </ScrollReveal>

      </div>
    </section>
  );
};

export default Services;
