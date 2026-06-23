import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './PebProjectsGallery.css';

const projects = [
  {
    id: 1,
    title: 'Warehousing',
    desc: 'PEB warehouse contractors — highbay, 3PL & ecommerce fulfilment hubs.',
    image: '/peb_warehouse_blue.png'
  },
  {
    id: 2,
    title: 'Manufacturing',
    desc: 'Factory building contractors Tamil Nadu— pharma, FMCG & textile plants.',
    image: '/peb_indian_project.png'
  },
  {
    id: 3,
    title: 'Commercial',
    desc: 'Steel structure contractors — retail showrooms & mixeduse buildings.',
    image: '/peb_about_img.png'
  },
  {
    id: 4,
    title: 'Infrastructure',
    desc: 'Pre-engineered steel buildings —cargo terminals & public spaces.',
    image: '/peb_app_university.png'
  },
  {
    id: 5,
    title: 'Auditoriums',
    desc: 'Industrial shed contractors — columnfree halls & college centres.',
    image: '/peb_app_auditorium.png'
  },
  {
    id: 6,
    title: 'Sports Facilities',
    desc: 'PEB shed contractors— stadiums, sports complexes & training centres.',
    image: '/peb_project_india.png'
  },
  {
    id: 7,
    title: 'Cold Storage',
    desc: 'PEB fabricators Chennai — cold rooms, blast-freeze & pharma storage.',
    image: '/peb_app_cold_storage.png'
  }
];

const PebProjectsGallery = () => {
  const [activeIndex, setActiveIndex] = useState(3); // Start at index 3

  // Optional auto-scrolling for PEB gallery
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="peb-projects-gallery-section">
      <div className="peb-gallery-header">
        <h2 className="peb-gallery-title">Projects Gallery</h2>
        <p className="peb-gallery-subtitle">500+ PEB structures delivered across Tamil Nadu, Karnataka, AP, Telangana & Kerala</p>
      </div>

      <div className="peb-gallery-slider-container">
        <button className="peb-gallery-nav-btn peb-prev-btn" onClick={handlePrev} aria-label="Previous Project">
          <ChevronLeft size={24} />
        </button>

        <div className="peb-gallery-track">
          {projects.map((project, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={project.id}
                className={`peb-gallery-panel ${isActive ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="peb-gallery-panel-overlay"></div>
                
                {isActive ? (
                  <div className="peb-gallery-panel-content">
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>
                  </div>
                ) : (
                  <div className="peb-gallery-panel-title-vertical">
                    {project.title}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <button className="peb-gallery-nav-btn peb-next-btn" onClick={handleNext} aria-label="Next Project">
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Pagination Dots for PEB projects */}
      <div className="peb-gallery-dots">
        {projects.map((_, idx) => (
          <span
            key={idx}
            className={`peb-gallery-dot ${idx === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(idx)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default PebProjectsGallery;
