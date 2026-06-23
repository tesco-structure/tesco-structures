import { HardHat, ShieldCheck, AlertTriangle, Anchor, Flame, HeartPulse, Megaphone, Package } from 'lucide-react';
import './AboutUsSafety.css';

const safetyProtocols = [
  {
    id: 1,
    title: 'Site Safety Training',
    desc: 'Before anyone lifts a finger, they get proper site-safety training — what can go wrong, and how to stop it happening in the first place.',
    icon: HardHat
  },
  {
    id: 2,
    title: 'PPE Compliance',
    desc: 'Helmet, gloves, eye protection, high-vis. On a Tesco site that gear is the price of entry — no kit, no going in.',
    icon: ShieldCheck
  },
  {
    id: 3,
    title: 'Safety Signage',
    desc: 'We mark every hazard clearly — overhead loads, wet patches, no-go zones — so nobody on site ever gets caught out.',
    icon: AlertTriangle
  },
  {
    id: 4,
    title: 'Fall Protection',
    desc: 'Working up high on a steel structure is where most of the risk sits, so ropes, nets and harnesses are always part of the setup.',
    icon: Anchor
  },
  {
    id: 5,
    title: 'Fire Safety Protocols',
    desc: 'Extinguishers in place, exits mapped, a plan everyone knows — so if a fire ever starts, nobody is left guessing.',
    icon: Flame
  },
  {
    id: 6,
    title: 'First Aid Readiness',
    desc: 'Fully stocked first-aid kits and trained hands on site mean small injuries get sorted then and there.',
    icon: HeartPulse
  },
  {
    id: 7,
    title: 'Emergency Response Plan',
    desc: 'A simple, clear drill for emergency calls, getting people out safely and counting heads — so nobody gets left behind.',
    icon: Megaphone
  },
  {
    id: 8,
    title: 'Material Handling',
    desc: 'We show every crew the right way to lift and shift heavy material, which saves a lot of strained backs and bad days.',
    icon: Package
  }
];

const AboutUsSafety = () => {
  return (
    <section className="safety-section">
      <div className="safety-container">
        
        {/* Left Side: Sticky Header */}
        <div className="safety-sticky-column">
          <div className="safety-header-content">
            <span className="safety-badge">WORK SAFETY</span>
            <h2 className="safety-title">Safety First.<br/>Always.</h2>
            <div className="safety-divider"></div>
            <p className="safety-desc">
              All those years on site have turned safety into a habit for us — careful, planned, sorted before the first beam goes up. Every steel structure job starts and ends the same way: with standards we never let slip.
            </p>
          </div>
        </div>

        {/* Right Side: Scrollable Grid */}
        <div className="safety-grid-column">
          <div className="safety-cards-grid">
            {safetyProtocols.map((protocol) => {
              const Icon = protocol.icon;
              return (
                <div key={protocol.id} className="safety-card">
                  <div className="safety-icon-wrapper">
                    <Icon size={24} />
                  </div>
                  <h3>{protocol.title}</h3>
                  <p>{protocol.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUsSafety;
