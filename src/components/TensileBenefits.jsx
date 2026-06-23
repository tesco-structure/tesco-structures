import { ShieldCheck, Sun, Wind, Leaf, HardHat, Wrench } from 'lucide-react';
import './TensileBenefits.css';

const TensileBenefits = () => {
  const benefits = [
    {
      id: '01',
      title: '95–99% UV block, not just reduction',
      icon: <ShieldCheck size={40} className="benefit-icon" />,
      colorClass: 'bg-tensile-1'
    },
    {
      id: '02',
      title: 'Daylight in, direct sun out',
      icon: <Sun size={40} className="benefit-icon" />,
      colorClass: 'bg-tensile-2'
    },
    {
      id: '03',
      title: 'Wind moves around it, not into it',
      icon: <Wind size={40} className="benefit-icon" />,
      colorClass: 'bg-tensile-3'
    },
    {
      id: '04',
      title: 'Less steel, far less foundation work',
      icon: <Leaf size={40} className="benefit-icon" />,
      colorClass: 'bg-tensile-4'
    },
    {
      id: '05',
      title: 'Hypar, conical, dome, free-form',
      icon: <HardHat size={40} className="benefit-icon" />,
      colorClass: 'bg-tensile-5'
    },
    {
      id: '06',
      title: 'PVC 15 yrs · PVDF 20+ · PTFE 30+',
      icon: <Wrench size={40} className="benefit-icon" />,
      colorClass: 'bg-tensile-6'
    }
  ];

  return (
    <section className="tensile-benefits-section">
      <div className="tensile-benefits-container">
        
        <div className="benefits-header">
          <div className="tensile-section-badge">
            <span className="badge-dot"></span> KEY BENEFITS
          </div>
          <h2 className="benefits-title">What tensile does that conventional roofing can't</h2>
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
              </div>
              <div className="accordion-overlay"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TensileBenefits;
