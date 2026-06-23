import { ShieldCheck, CloudLightning, HardHat, Wrench, CheckSquare, Users } from 'lucide-react';
import './CivilBenefits.css';

const CivilBenefits = () => {
  const benefits = [
    {
      id: '01',
      title: 'Concrete You Can Actually Trust',
      desc: 'Every civil construction pour uses BIS-licensed RMC with third-party cube testing. Results go directly to you — unfiltered.',
      icon: <ShieldCheck size={40} className="benefit-icon" />,
      colorClass: 'bg-civil-1'
    },
    {
      id: '02',
      title: 'Seismic-Safe Civil Engineering',
      desc: 'Tamil Nadu is Zone III. Our civil construction design follows IS 13920 ductile detailing — not just on paper, but on every column and beam joint on site.',
      icon: <CloudLightning size={40} className="benefit-icon" />,
      colorClass: 'bg-civil-2'
    },
    {
      id: '03',
      title: 'Deep Foundation Engineering',
      desc: 'Chennai\'s coastal belt needs pile foundations, not assumptions. Our heavy civil construction teams design from actual bore log data — bored or driven piles, integrity-tested.',
      icon: <HardHat size={40} className="benefit-icon" />,
      colorClass: 'bg-civil-3'
    },
    {
      id: '04',
      title: 'Precision Masonry & Civil Works',
      desc: 'Plumb walls and true course heights reduce plastering waste significantly. Our civil works construction teams hold tighter tolerances than most Tamil Nadu sites.',
      icon: <Wrench size={40} className="benefit-icon" />,
      colorClass: 'bg-civil-4'
    },
    {
      id: '05',
      title: 'QA Before Every Pour',
      desc: 'Rebar cover, formwork, cube samples — all checked before concrete is ordered. Civil construction quality that stops problems before they happen, not after.',
      icon: <CheckSquare size={40} className="benefit-icon" />,
      colorClass: 'bg-civil-5'
    },
    {
      id: '06',
      title: 'Qualified Engineer On Site Daily',
      desc: 'A licensed civil engineer reads every structural drawing on site — not a foreman. That\'s the standard our civil construction projects run on, every day.',
      icon: <Users size={40} className="benefit-icon" />,
      colorClass: 'bg-civil-6'
    }
  ];

  return (
    <section className="civil-benefits-section">
      <div className="civil-benefits-container">
        
        <div className="benefits-header">
          <div className="civil-section-badge">
            <span className="badge-dot"></span> KEY BENEFITS
          </div>
          <h2 className="benefits-title">Why Getting Civil Work Right Matters</h2>
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

export default CivilBenefits;
