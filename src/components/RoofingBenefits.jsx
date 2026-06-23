import { ShieldCheck, Leaf, ThermometerSnowflake, CloudLightning, HardHat, Wrench } from 'lucide-react';
import './RoofingBenefits.css';

const RoofingBenefits = () => {
  const benefits = [
    {
      id: '01',
      title: 'Advanced Weatherproofing Profiles',
      icon: <ShieldCheck size={40} className="benefit-icon" />,
      colorClass: 'bg-gradient-red'
    },
    {
      id: '02',
      title: 'Structural Load Engineering',
      icon: <Leaf size={40} className="benefit-icon" />,
      colorClass: 'bg-gradient-pink'
    },
    {
      id: '03',
      title: 'Thermal Insulation Systems',
      icon: <ThermometerSnowflake size={40} className="benefit-icon" />,
      colorClass: 'bg-gradient-purple'
    },
    {
      id: '04',
      title: 'Wind & Rain Resistance',
      icon: <CloudLightning size={40} className="benefit-icon" />,
      colorClass: 'bg-gradient-blue'
    },
    {
      id: '05',
      title: 'Precision Installation Teams',
      icon: <HardHat size={40} className="benefit-icon" />,
      colorClass: 'bg-gradient-brown'
    },
    {
      id: '06',
      title: 'Lifecycle Warranty & Support',
      icon: <Wrench size={40} className="benefit-icon" />,
      colorClass: 'bg-gradient-magenta'
    }
  ];

  return (
    <section className="roof-benefits-section">
      <div className="roof-benefits-container">
        
        <div className="benefits-header">
          <div className="roof-section-badge">
            <span className="badge-dot"></span> CORE CAPABILITIES
          </div>
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

export default RoofingBenefits;
