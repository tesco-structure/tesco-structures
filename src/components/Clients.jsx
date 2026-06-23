import './Clients.css';

const Clients = () => {
  const allLogos = Array.from({ length: 28 }, (_, i) => `/images/logos/Frame 100000${1542 + i}.png`);
  
  // Split logos into two rows of 14 each
  const row1Logos = allLogos.slice(0, 14);
  const row2Logos = allLogos.slice(14, 28);

  return (
    <section className="clients-section">
      <div className="container">
        <div className="clients-header">
          <h2>Trusted By Industry Leaders</h2>
          <p>We are proud to work with trusted brands across industries. Our clients reflect the quality, reliability, and trust we deliver.</p>
        </div>
        
        {/* Row 1: Scrolling Left */}
        <div className="clients-marquee-container marquee-left">
          <div className="clients-marquee-track">
            {row1Logos.map((logo, index) => (
              <div className="client-logo-card" key={`row1-1-${index}`}>
                <img src={logo} alt={`Client ${index + 1}`} className="client-brand-logo" />
              </div>
            ))}
            {row1Logos.map((logo, index) => (
              <div className="client-logo-card" key={`row1-2-${index}`}>
                <img src={logo} alt={`Client ${index + 1} Duplicate`} className="client-brand-logo" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="clients-marquee-container marquee-right">
          <div className="clients-marquee-track">
            {row2Logos.map((logo, index) => (
              <div className="client-logo-card" key={`row2-1-${index}`}>
                <img src={logo} alt={`Client ${index + 15}`} className="client-brand-logo" />
              </div>
            ))}
            {row2Logos.map((logo, index) => (
              <div className="client-logo-card" key={`row2-2-${index}`}>
                <img src={logo} alt={`Client ${index + 15} Duplicate`} className="client-brand-logo" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Clients;
