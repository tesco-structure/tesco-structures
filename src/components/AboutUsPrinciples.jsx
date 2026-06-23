import { Eye, Target, ShieldCheck } from 'lucide-react';
import './AboutUsPrinciples.css';

const principles = [
  {
    id: 'vision',
    title: 'Our Vision',
    desc: "Honestly, we want Tesco Structures to be the first name people think of when they need a steel building in India and they want it done properly. Something that goes up quick, stands for years and still looks good long after we have packed up and left. Each Pre-Engineered Building and prefabricated structure we put up is one more chance to show what a turnkey project should really look like.",
    icon: Eye,
    bgColor: '#1b4d3e', // Dark green
    accentColor: '#a2d246' // Lime green
  },
  {
    id: 'mission',
    title: 'Our Mission',
    desc: "Easy to say, tough to pull off: we design, fabricate and put up Pre-Engineered Buildings (PEB), tensile roofing and steel structures that go up fast and last for years. Fair prices. Delivery on time. Cleaner methods where we can manage it. And one team that sticks with the job from the first sketch right up to the day we hand you the keys.",
    icon: Target,
    bgColor: '#2b3a7a', // Dark blue
    accentColor: '#b3a4e3' // Light purple
  },
  {
    id: 'quality',
    title: 'Our Quality',
    desc: "We have never been the type to settle for “good enough.” Right from the steel we buy to the very last weld on site, we keep checking the work and looking for ways to do it better. That is usually why the finished building turns out stronger than people expected, and why it keeps doing its job years down the line.",
    icon: ShieldCheck,
    bgColor: '#5d2d5d', // Dark purple
    accentColor: '#f28a5c' // Orange
  }
];

const PosterCard = ({ item, index }) => {
  const Icon = item.icon;
  return (
    <div className={`poster-wrapper float-card-${index + 1}`}>
      <div className="poster-frame">
        <div className="poster-matboard">
          <div className="poster-canvas" style={{ backgroundColor: item.bgColor }}>
            <p className="poster-eyebrow" style={{ color: item.accentColor }}>OUR GUIDING PRINCIPLE:</p>
            <h3 className="poster-title">{item.title}</h3>
            <p className="poster-desc">{item.desc}</p>
            
            <div className="poster-art-section">
              {/* Continuous squiggly line simulation */}
              <svg className="poster-wire" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,10 Q25,20 50,10 T100,10" fill="none" stroke={item.accentColor} strokeWidth="2" />
              </svg>
              <div className="poster-icon-wrapper" style={{ color: item.accentColor, backgroundColor: item.bgColor }}>
                <Icon size={40} strokeWidth={1.5} />
              </div>
            </div>
            
            <div className="poster-logo">
              <img src="/ts-logo.png" alt="Tesco Structures" className="poster-logo-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutUsPrinciples = () => {
  return (
    <section className="principles-section-poster">
      <div className="principles-container">
        <div className="principles-header-poster">
          <div className="principles-badge">Our guiding principles</div>
          <h2>What Drives Everything We Do</h2>
          <p className="principles-desc-sub">A few plain rules we live by — from the first drawing right through to handover.</p>
        </div>

        <div className="poster-grid">
          {principles.map((item, index) => (
            <PosterCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsPrinciples;
