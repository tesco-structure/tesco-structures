import { Grid, Sparkles, LineChart, Layers, FileCheck, Users } from 'lucide-react';
import './ArchBenefits.css';

const benefits = [
  {
    id: '01',
    title: '2D Layout Planning',
    desc: 'AutoCAD floor plans, site plans, and full GFC drawing sets. What goes to the contractor is buildable on day one.',
    icon: <Grid size={40} className="benefit-icon" />,
    colorClass: 'bg-arch-1'
  },
  {
    id: '02',
    title: '3D Elevations',
    desc: 'Photo-real exterior and interior renders that get stakeholder sign-off faster. Day and night lighting. Material-accurate finishes.',
    icon: <Sparkles size={40} className="benefit-icon" />,
    colorClass: 'bg-arch-2'
  },
  {
    id: '03',
    title: 'Advanced Structural Analysis',
    desc: 'STAAD Pro and ETABS. Full IS-code load combinations. Every analysis signed off by a licensed structural engineer before the drawings go out.',
    icon: <LineChart size={40} className="benefit-icon" />,
    colorClass: 'bg-arch-3'
  },
  {
    id: '04',
    title: 'Steel & PEB Design',
    desc: 'Pre-engineered buildings for warehouses, sheds, and factories. Detailed down to anchor bolts and connection plates.',
    icon: <Layers size={40} className="benefit-icon" />,
    colorClass: 'bg-arch-4'
  },
  {
    id: '05',
    title: 'Stability Reports',
    desc: 'Certified structural stability reports for property transactions, bank approvals, insurance renewals, and local authority requirements.',
    icon: <FileCheck size={40} className="benefit-icon" />,
    colorClass: 'bg-arch-5'
  },
  {
    id: '06',
    title: 'Expert Consultancy',
    desc: 'Full architectural and structural consultancy from first brief to final GFC drawings. One team, one point of contact throughout.',
    icon: <Users size={40} className="benefit-icon" />,
    colorClass: 'bg-arch-6'
  }
];

const ArchBenefits = () => {
  return (
    <section className="arch-benefits-section">
      <div className="arch-benefits-container">
        
        <div className="benefits-header">
          <div className="arch-section-badge">
            <span className="badge-dot"></span> KEY SERVICES
          </div>
          <h2 className="benefits-title">Our Specialized Focus</h2>
        </div>

        {/* Flex Accordion Layout */}
        <div className="benefits-accordion-container">
          {benefits.map((benefit, index) => (
            <div className={`accordion-card ${benefit.colorClass}`} key={index}>
              <div className="accordion-content">
                <span className="accordion-id">{benefit.id}</span>
                <div className="accordion-icon-wrapper">
                  {benefit.icon}
                </div>
                <h3 className="accordion-card-title">{benefit.title}</h3>
                <p className="accordion-card-desc">{benefit.desc}</p>
              </div>
              <div className="accordion-overlay"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ArchBenefits;
