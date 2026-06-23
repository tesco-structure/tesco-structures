import { useState } from 'react';
import './Process.css';
import { 
  ClipboardCheck, 
  PenTool, 
  Factory, 
  Wrench, 
  ShieldCheck, 
  BadgeCheck 
} from 'lucide-react';

const processSteps = [
  {
    id: '01',
    title: 'Requirement Discussion',
    desc: 'We start with a proper Requirement Discussion - your site, your budget, and what the building actually has to do.',
    icon: <ClipboardCheck size={24} />
  },
  {
    id: '02',
    title: 'Structural Design',
    desc: 'Our engineers turn that into the Structural Design - drawings and a layout you sign off before anything gets cut.',
    icon: <PenTool size={24} />
  },
  {
    id: '03',
    title: 'PEB Manufacturing',
    desc: 'The steel is fabricated in our own Chennai workshop, on automated lines, to the exact spec on the approved drawings.',
    icon: <Factory size={24} />
  },
  {
    id: '04',
    title: 'On-Site Installation',
    desc: 'Our own crew erects it on site - safely, on schedule, and without the coordination gaps you get with multiple vendors.',
    icon: <Wrench size={24} />
  },
  {
    id: '05',
    title: 'Quality Check',
    desc: 'Every joint, bolt and panel is checked back against the drawings before we\'re willing to call it done.',
    icon: <ShieldCheck size={24} />
  },
  {
    id: '06',
    title: 'Final Handover',
    desc: 'You get a finished, ready-to-use building, handed over with the documentation to match.',
    icon: <BadgeCheck size={24} />
  }
];

const Process = () => {
  const [hoveredStep, setHoveredStep] = useState(2); // Default to 3rd step (index 2) like the mockup

  return (
    <section className="process-section">
      <div className="container">
        
        <div className="process-header">
          <h4 className="green-subtitle gradient-badge">STEP BY STEP</h4>
          <h2 className="process-title">
            Our PEB <span className="highlight-green">Manufacturing Process</span>
          </h2>
          <p className="process-desc">
            From the first consultation to final handover, our PEB manufacturing process runs in six clear steps - built over 15 years to keep projects on time and the steelwork honest.
          </p>
        </div>

        <div className="process-cards-grid">
          {processSteps.map((step, index) => {
            const isActive = hoveredStep === index;
            return (
              <div 
                key={step.id} 
                className={`process-card ${isActive ? 'active' : ''}`}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(2)} // Optionally reset to default or leave as last hovered
              >
                <div className="process-icon-wrapper">
                  {step.icon}
                </div>
                
                <div className="process-number">{step.id}</div>
                
                <h3 className="process-card-title">{step.title}</h3>
                
                <p className="process-card-desc">{step.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Process;
