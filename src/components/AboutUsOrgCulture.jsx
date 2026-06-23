import { useState, useEffect } from 'react';
import './AboutUsOrgCulture.css';

const cultureItems = [
  {
    id: 1,
    number: '01',
    title: 'We Grow Together',
    desc: 'At Tesco Structures nobody is just turning up for a paycheck. Everyone here has a stake in how the job lands. We put real money into training, we back the people who want to pick up new skills, and we trust them to run their own patch. Grow the crew, and the crew grows the buildings — Pre-Engineered Buildings we are happy to put our name on.',
    image: '/org_culture_1.png'
  },
  {
    id: 2,
    number: '02',
    title: 'Safety is Non-Negotiable',
    desc: 'Everyone who walks onto our site walks off it in one piece — that is the whole point. Helmets on, harnesses clipped, the method talked through before anyone goes up. We do not trade safety for an hour saved, and that line holds no matter how tight the deadline on a steel structure gets.',
    image: '/org_culture_2.png'
  },
  {
    id: 3,
    number: '03',
    title: 'Innovation Over Convention',
    desc: '“That is how it has always been done” does not carry much weight with us. On any project, an engineer can speak up with a better way — a smarter steel design, a faster way to erect the frame, a cleaner finish on site. One idea at a time, the next building beats the last.',
    image: '/org_culture_3.png'
  }
];

const AboutUsOrgCulture = () => {
  const [activeId, setActiveId] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setActiveId((prevId) => {
          const nextId = (prevId % cultureItems.length) + 1;
          return nextId;
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="org-culture-section">
      <div className="org-culture-container">
        
        <div className="org-culture-header">
          <span className="org-culture-badge">ORGANIZATION CULTURE</span>
          <h2 className="org-culture-title">Culture Built on Strength & Integrity</h2>
          <p className="org-culture-desc-sub">
            Strong buildings start with a strong team. The people who design and raise our Pre-Engineered Buildings work to one simple code — show up, look out for each other, and do it right the first time. We back that with training, clear communication and the room to take real ownership.
          </p>
        </div>

        <div 
          className="accordion-slider"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {cultureItems.map((item) => (
            <div
              key={item.id}
              className={`accordion-panel ${activeId === item.id ? 'active' : ''}`}
              onMouseEnter={() => setActiveId(item.id)}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="accordion-overlay"></div>
              
              <div className="accordion-content">
                <div className="accordion-number">{item.number}</div>
                <div className="accordion-text-container">
                  <h3 className="accordion-title">{item.title}</h3>
                  <div className="accordion-desc-wrapper">
                    <p className="accordion-desc">{item.desc}</p>
                    <div className="accordion-divider"></div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutUsOrgCulture;
