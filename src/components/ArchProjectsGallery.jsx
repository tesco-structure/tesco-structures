import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './ArchProjectsGallery.css';

const projects = [
  {
    id: 1,
    title: '3D Office Elevations',
    desc: 'Commercial office elevation renders prepared for CMDA submission in Chennai. Client approved facade spec from the renders before drawings went to tender.',
    image: '/images/arch_portfolio_1.jpg'
  },
  {
    id: 2,
    title: 'Factory Layout Plans',
    desc: 'Industrial structural engineering drawings for a Tamil Nadu manufacturing facility. Column grid and floor plans developed directly from the structural analysis outputs.',
    image: '/images/arch_portfolio_2.jpg'
  },
  {
    id: 3,
    title: 'Stadium Calculations',
    desc: 'STAAD Pro structural analysis covering IS 1893 and IS 875 load combinations for a South India stadium canopy. Signed calculation report and GFC drawings issued to the contractor.',
    image: '/images/arch_portfolio_3.png'
  },
  {
    id: 4,
    title: 'Tensile Canopy Designs',
    desc: 'Tensile canopy work by our building structural consultants in Chennai. Anchor loads and foundation reactions checked against IS codes before drawings went to the fabricator.',
    image: '/images/arch_portfolio_4.png'
  },
  {
    id: 5,
    title: 'BIM Renderings',
    desc: 'Revit BIM coordination for a mixed-use project in Chennai. Clash detection between MEP and structural ran before any drawings went to the contractor.',
    image: '/images/arch_portfolio_5.png'
  }
];

const ArchProjectsGallery = () => {
  const [activeIndex, setActiveIndex] = useState(3); // Start at Tensile Canopy Designs

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
    }, 4000); // Auto-move every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="arch-projects-gallery-section" id="projects">
      <div className="gallery-header">
        <h2 className="gallery-title">Design Portfolio</h2>
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

export default ArchProjectsGallery;
