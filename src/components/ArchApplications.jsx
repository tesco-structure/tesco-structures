import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import './ArchApplications.css';

const applications = [
  { 
    id: 'a-app-1', 
    title: 'Architecture Design', 
    desc: 'Floor plans, elevations, and site layouts prepared for CMDA and DTCP submissions. Residential projects across Chennai, commercial buildings throughout South India. Our architectural design process has the structural team involved from the first plan, not brought in at the review stage.', 
    image: '/images/arch_app_1.png' 
  },
  { 
    id: 'a-app-2', 
    title: 'Structural Engineering', 
    desc: 'STAAD Pro and ETABS analysis run against IS-code load combinations for the site and building type. Our structural analysis services produce member sizes from actual calculated outputs, not rule-of-thumb estimates. GFC drawing sets go out with bar bending schedules and a signed engineer\'s calculation report.', 
    image: '/images/arch_app_2.png' 
  },
  { 
    id: 'a-app-3', 
    title: 'PEB Services', 
    desc: 'Pre-engineered buildings for warehouses, factory sheds, and cold storage. We take the full structural design and engineering scope — primary frame design, connection detailing, anchor bolt layout, and foundation sizing based on actual soil data from the site. Clients don\'t need a separate structural consultant.', 
    image: '/images/arch_app_3.png' 
  },
  { 
    id: 'a-app-4', 
    title: '3D Exterior Views', 
    desc: 'Photo-real exterior renders used for client approvals, marketing, and planning submissions. We produce day, dusk, and night scenarios with materials matched to what\'s actually specified for the project.', 
    image: '/images/arch_app_4.png' 
  },
  { 
    id: 'a-app-5', 
    title: '3D Interior Views', 
    desc: 'Interior visuals for residential, commercial, and hospitality projects. Clients go through finishes, joinery, and spatial layout in the renders before construction starts. It\'s saved a fair number of costly changes that would otherwise have come up mid-build.', 
    image: '/images/arch_app_5.png' 
  },
  { 
    id: 'a-app-6', 
    title: 'Walk-through & Animation', 
    desc: 'HD animated walkthroughs for investor presentations, sales launches, and authority submissions. We\'ve produced these across Tamil Nadu and South India — quite a few clients have found they move the approvals process along faster than static renders.', 
    image: '/images/arch_app_6.png',
    video: '/images/arch_app_6_video.mp4'
  },
  { 
    id: 'a-app-7', 
    title: '2D Detailing', 
    desc: 'AutoCAD GFC drawing sets covering floor plans, reinforcement drawings, bar bending schedules, steel connection details, and finish schedules. Part of our civil and structural engineering services — a senior engineer checks everything before it goes out.', 
    image: '/images/arch_app_7.png' 
  },
  { 
    id: 'a-app-8', 
    title: 'Interior Design', 
    desc: 'Space planning, ceiling layouts, material and finish selections, lighting positions, and joinery specs. Designed alongside the architectural shell and structural model so what gets drawn actually fits on site.', 
    image: '/images/arch_app_8.png' 
  },
  { 
    id: 'a-app-9', 
    title: 'MEP Services', 
    desc: 'HVAC, electrical, plumbing, drainage, firefighting, and solar PV designed within the same BIM model. Clash detection runs before drawings go out, so the contractor gets documentation they can work from directly without spending time resolving conflicts on site.', 
    image: '/images/arch_app_9.png' 
  }
];

const ArchApplications = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="arch-apps-section">
      <div className="arch-apps-container">
        <div className="arch-apps-header">
          <div className="arch-apps-badge">Consultancy Focus</div>
          <p className="arch-apps-subtitle">
            Nine service lines, all handled by the same in-house team in Chennai. Our architects and structural engineers work off a shared BIM model, so a change on the architectural side gets picked up the same week instead of surfacing later as a site problem.
          </p>
        </div>

        <div className="arch-apps-interactive-layout">
          
          {/* Left Side: Interactive List */}
          <div className="arch-apps-list">
            {applications.map((app, index) => (
              <div 
                key={app.id} 
                className={`arch-app-list-item ${activeIndex === index ? 'active' : ''}`}
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

          {/* Right Side: Dynamic Image/Gradient Reveal or Video */}
          <div className="arch-apps-visual">
            {applications.map((app, index) => (
              <div 
                key={`visual-${app.id}`}
                className={`arch-app-visual-panel ${activeIndex === index ? 'active' : ''}`}
                style={
                  !app.video && app.image 
                    ? { backgroundImage: `url(${app.image})` } 
                    : { background: app.color }
                }
              >
                {app.video && activeIndex === index && (
                  <video 
                    src={app.video} 
                    className="visual-panel-video" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                  />
                )}
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

export default ArchApplications;
