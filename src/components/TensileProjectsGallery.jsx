import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './TensileProjectsGallery.css';

const projects = [
  {
    id: 1,
    title: 'Stadium Grandstands',
    desc: 'Clear span across full seating width, wind loads for coastal exposure, drainage sized for Tamil Nadu monsoon intensity. All stadium tensile installations are engineer-certified and permit-ready. Still up and performing.',
    image: '/images/tensile_sports_1781086007895.png'
  },
  {
    id: 2,
    title: 'Commercial Plazas',
    desc: 'Hypar and barrel vault tensile canopies over retail plazas and mall forecourts in Chennai and Tamil Nadu — full weather cover, no columns through the floor plan. Footfall numbers consistently improve after installation.',
    image: '/images/tensile_commercial_1781085980818.png'
  },
  {
    id: 3,
    title: 'Resort Entrances',
    desc: 'Conical and free-form tensile entrance structures for resort and hotel properties along the ECR and across Tamil Nadu. Built to look like they were always supposed to be there and to handle monsoon rain cleanly.',
    image: '/images/tensile_hospitality_1781085995192.png'
  },
  {
    id: 4,
    title: 'Car Park Canopies',
    desc: 'Car parking tensile structures that cut surface temperatures by 15–20°C and block UV. Powder-coated steel for coastal conditions. Membrane grade specified to site exposure. Built for 15–20 years on a working site.',
    image: '/images/tensile_parking_1781085927100.png'
  },
  {
    id: 5,
    title: 'Transit Hub Roofing',
    desc: 'Wide-span membrane tensile roofing for bus terminals and metro connector walkways across South India. High footfall, heavy rain, coastal wind — in service for years with no significant maintenance interventions.',
    image: '/images/transit_hub_tensile.png'
  },
  {
    id: 6,
    title: 'Exhibition Pavilions',
    desc: 'Clear-span tensile pavilions for trade shows and public events — no columns, fast to erect, and structured enough to be a venue feature rather than a hired marquee. Available temporary or semi-permanent.',
    image: '/images/exhibition_pavilion_tensile.png'
  }
];

const TensileProjectsGallery = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Start at Resort Entrances

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
    }, 4000); // Auto move every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="tensile-projects-gallery-section">
      <div className="gallery-header">
        <h2 className="gallery-title">Tensile Portfolio</h2>
      </div>

      <div className="gallery-slider-container">
        <button className="gallery-nav-btn prev-btn" onClick={handlePrev}>
          <ChevronLeft size={24} />
        </button>

        <div className="gallery-track">
          {projects.map((project, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={project.id}
                className={`gallery-panel ${isActive ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="gallery-panel-overlay"></div>
                
                {isActive ? (
                  <div className="gallery-panel-content">
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>
                  </div>
                ) : (
                  <div className="gallery-panel-title-vertical">
                    {project.title}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <button className="gallery-nav-btn next-btn" onClick={handleNext}>
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default TensileProjectsGallery;
