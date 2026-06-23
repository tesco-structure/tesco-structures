import { useState, useEffect } from 'react';
import './ProjectsGallery.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const projects = [
  {
    id: 1,
    title: 'PEB Warehouse',
    desc: 'Clear-span industrial warehouses constructed in Chennai, designed for optimized logistics.',
    img: '/gallery_peb_warehouse.png'
  },
  {
    id: 2,
    title: 'Tensile Car Park',
    desc: 'Modern cantilevered tensile fabric car park structures installed in Bangalore.',
    img: '/gallery_tensile_carpark.png'
  },
  {
    id: 3,
    title: 'PEB Factory Shed',
    desc: 'High-durability manufacturing plant steel structures built in Hyderabad.',
    img: '/gallery_peb_factory.png'
  },
  {
    id: 4,
    title: 'Tensile Canopy',
    desc: 'Sleek architectural membrane structure providing grand entry shelters in Mumbai.',
    img: '/gallery_tensile_canopy.png'
  },
  {
    id: 5,
    title: 'Trapezoidal Roofing',
    desc: 'Industrial-grade weather-resistant trapezoidal sheet roofing completed in Coimbatore.',
    img: '/gallery_trapezoidal_roof.png'
  },
  {
    id: 6,
    title: 'Standing Seam Roof',
    desc: 'Leak-proof, premium standing seam roofing systems installed on commercial complexes in Gurgaon.',
    img: '/gallery_standing_seam.png'
  },
  {
    id: 7,
    title: 'Tensile Stadium Roof',
    desc: 'Massive clear-span tensile membrane stadium roofing system engineered in Ahmedabad.',
    img: '/gallery_tensile_stadium.png'
  }
];

const ProjectsGallery = () => {
  const [activeIndex, setActiveIndex] = useState(3);

  // Auto-scrolling logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 3500); // Changed interval slightly for a cleaner viewing experience

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  return (
    <section className="home-projects-gallery-section">
      <div className="container">
        <ScrollReveal className="home-gallery-header-box" delay={0.1} y={30}>
          <div className="home-gallery-badge gradient-badge">OUR WORK</div>
          <h2 className="home-gallery-title">Projects Gallery</h2>
        </ScrollReveal>

        <ScrollReveal 
          className="home-gallery-slider-container"
          delay={0.3} y={40}
        >
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', position: 'relative' }}>
          
          <button className="home-gallery-nav-btn home-prev-btn" onClick={handlePrev} aria-label="Previous Project">
            <ChevronLeft size={24} />
          </button>

          <div className="home-gallery-slider-wrapper">
            {projects.map((proj, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div 
                  key={proj.id} 
                  className={`home-gallery-slide ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                >
                  <img src={proj.img} alt={proj.title} className="home-slide-bg-img" />
                  
                  {/* Overlay for inactive slides to darken them slightly */}
                  {!isActive && <div className="home-slide-overlay-dark"></div>}

                  {isActive ? (
                    <div className="home-slide-content-active">
                      <h3>{proj.title}</h3>
                      <p>{proj.desc}</p>
                    </div>
                  ) : (
                    <div className="home-slide-content-vertical">
                      {proj.title}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <button className="home-gallery-nav-btn home-next-btn" onClick={handleNext} aria-label="Next Project">
            <ChevronRight size={24} />
          </button>

          </div>

          {/* Premium Page Indicator Dots */}
          <div className="home-gallery-dots">
            {projects.map((_, idx) => (
              <span
                key={idx}
                className={`home-gallery-dot ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
              ></span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectsGallery;
