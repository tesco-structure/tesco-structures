import { ShieldCheck, Leaf, ThermometerSnowflake, CloudLightning, HardHat, Wrench } from 'lucide-react';
import './PebBenefits.css';

const PebBenefits = () => {
  const benefits = [
    {
      id: '01',
      title: 'Faster Project Delivery',
      icon: <HardHat size={40} className="benefit-icon" />,
      colorClass: 'bg-gradient-red'
    },
    {
      id: '02',
      title: '20-30% Cost Savings vs RCC',
      icon: <ShieldCheck size={40} className="benefit-icon" />,
      colorClass: 'bg-gradient-pink'
    },
    {
      id: '03',
      title: 'IS-Code Structural Safety',
      icon: <Wrench size={40} className="benefit-icon" />,
      colorClass: 'bg-gradient-purple'
    },
    {
      id: '04',
      title: 'Minimal 25-Year Maintenance',
      icon: <CloudLightning size={40} className="benefit-icon" />,
      colorClass: 'bg-gradient-blue'
    },
    {
      id: '05',
      title: 'Thermal & Energy Efficiency',
      icon: <ThermometerSnowflake size={40} className="benefit-icon" />,
      colorClass: 'bg-gradient-brown'
    },
    {
      id: '06',
      title: 'Expandable by Design',
      icon: <Leaf size={40} className="benefit-icon" />,
      colorClass: 'bg-gradient-magenta'
    }
  ];

  return (
    <section className="peb-benefits-section">
      <div className="peb-benefits-container">
        
        <div className="benefits-header">
          <div className="peb-section-badge">
            <span className="badge-dot"></span> KEY BENEFITS
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

export default PebBenefits;
