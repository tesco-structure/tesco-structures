import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './CivilProjectsGallery.css';

const projects = [
  {
    id: 1,
    title: 'Chennai Factory Foundations',
    desc: 'Ambattur industrial estate, high water table site. 18 bored pile caps, raft slab over 40,000 sq.ft. Every pile integrity-tested. Not one pour rejected on cube test results.',
    image: '/images/civil_proj_chennai.png'
  },
  {
    id: 2,
    title: 'Bengaluru Tech Park Slabs',
    desc: 'Post-tensioned RCC slabs across 4 floors of a modern office campus. Seven pour sequences managed without a single remedial patch on a slab soffit. Handed over 11 days ahead of the tenant\'s fitout start date.',
    image: '/images/civil_proj_bengaluru.png'
  },
  {
    id: 3,
    title: 'Hyderabad Logistics Center',
    desc: '2-lakh sq.ft warehouse slab designed for 8T racking loads. Joint layout agreed with the warehouse operator before a single peg was put in the ground — because retrofitting joint positions after the pour is nobody\'s definition of a good time.',
    image: '/images/civil_proj_hyderabad.png'
  },
  {
    id: 4,
    title: 'Kochi Metro Foundations',
    desc: 'RCC substructure works within an active metro corridor. Night-shift pours only, vibration monitoring throughout, zero safety incidents across a 14-week programme. The metro authority\'s site inspector commented on it unprompted.',
    image: '/images/civil_proj_kochi.png'
  },
  {
    id: 5,
    title: 'Madurai Residential Tower',
    desc: '10-storey RCC frame on black cotton soil — a ground condition that demands a proper raft foundation and careful curing in Madurai\'s heat. Slab levels held to within 5mm across every floor. Structural sign-off before partition work started, no exceptions.',
    image: '/images/civil_proj_mumbai.png'
  },
  {
    id: 6,
    title: 'Coimbatore Institutional Block',
    desc: '3-storey school building, full civil scope, Coimbatore. Completed 3 weeks ahead of the academic year deadline. Structural drawings passed DTCP scrutiny on the first submission — we\'d got the IS code documentation right from the start.',
    image: '/images/civil_proj_coimbatore.png'
  },
  {
    id: 7,
    title: 'Trichy Commercial Basement',
    desc: '6-metre deep basement excavation for a commercial complex near the Cauvery belt — sheet pile retention, continuous dewatering, crystalline waterproofing on all below-grade walls. Zero water ingress reported 18 months after handover. The civil engineering and construction detailing held exactly as designed.',
    image: '/images/civil_proj_ahmedabad.png'
  }
];

const CivilProjectsGallery = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Start at Logistics Warehouses

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
    <section className="civil-projects-gallery-section" id="projects">
      <div className="gallery-header">
        <h2 className="gallery-title">Civil Portfolio</h2>
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

export default CivilProjectsGallery;
