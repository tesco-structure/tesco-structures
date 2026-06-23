import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import './RoofingApplications.css';

const applications = [
  { 
    id: 'roof-app-1', 
    title: 'Tensile Roofing', 
    desc: 'High-tension membrane over a welded steel frame — right for large column-free spans. Bus bays, petrol forecourts, entry plazas across Chennai. UV-stable, waterproof, and engineered to your site\'s specific wind load.', 
    image: '/images/transit_hub_tensile.png' 
  },
  { 
    id: 'roof-app-2', 
    title: 'uPVC Roofing in Chennai', 
    desc: 'A uPVC roofing sheet in Chennai doesn\'t rust, doesn\'t need repainting, and holds its profile through heat and monsoon alike. Factory sheds, warehouses, agri-storage — uPVC roofing contractors in Chennai recommend it wherever long-term, low-maintenance cover is the priority.', 
    image: '/images/upvc_roofing_app.png' 
  },
  { 
    id: 'roof-app-3', 
    title: 'Polycarbonate Roofing', 
    desc: 'Twin-wall or triple-wall polycarbonate roofing sheet in Chennai cuts heat transmission and lets in diffused natural light. Polycarbonate sheet roofing for car parking in Chennai is our most common use case — bronze or opal tints work better than clear for open-air parking areas.', 
    image: '/images/polycarbonate_roofing.png' 
  },
  { 
    id: 'roof-app-4', 
    title: 'Glass Roofing', 
    desc: 'Glass roofing services in Chennai for hotel lobbies, showrooms, corporate atriums, high-end residences. Toughened safety glass or laminated panels engineered for Chennai\'s wind loads and thermal movement. As glass roofing contractors in South India we handle design through installation under one contract.', 
    image: '/images/glass_roofing.png' 
  },
  { 
    id: 'roof-app-5', 
    title: 'Mangalore Tile Roofing', 
    desc: 'Mangalore tile roofing in Chennai stays cooler than metal in summer, sheds monsoon rain cleanly, and runs 40–50 years on a good structure. As Mangalore roof tiles contractors across South India, we do new installations and re-bedding on existing tile roofs where the tiles are still sound.', 
    image: '/images/mangalore_tile_roofing_app.png' 
  },
  { 
    id: 'roof-app-6', 
    title: 'Shingles Roofing', 
    desc: 'Shingles roofing in Chennai is taking hold in the premium residential and resort market. Architectural laminated shingles give the look of slate without the weight. Roofing shingles installation in South India done right — proper underlayment, ridge detail, starter strip — delivers 30–50 years on a good deck.', 
    image: '/images/shingles_roofing.png' 
  },
  { 
    id: 'roof-app-7', 
    title: 'GI Roofing in Chennai', 
    desc: 'GI roofing sheet in Chennai and the surrounding industrial corridors remains the dominant material for large factory sheds. Industrial GI roofing sheet in Chennai at Galvalume AZ-150 spec — not standard zinc — is what GI roofing contractors in South India should be offering near the coast.', 
    image: '/images/gi_roofing.png' 
  },
  { 
    id: 'roof-app-8', 
    title: 'Retractable Roofing', 
    desc: 'Motorised or manual systems that open and close on demand. Restaurant terraces, resort pools, event venues. Open when the weather is right, fully covered when it isn\'t — without a permanent structure blocking the space.', 
    image: '/images/retractable_roofing_app.png' 
  }
];

const RoofingApplications = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="roof-apps-section">
      <div className="roof-apps-container">
        <div className="roof-apps-header">
          <div className="roof-apps-badge">Roofing Applications</div>
          <p className="roof-apps-subtitle">
            A cold storage plant in Sriperumbudur needs something totally different from a resort pool deck on ECR. Here's what we actually do with each system and where it fits.
          </p>
        </div>

        <div className="roof-apps-interactive-layout">
          
          {/* Left Side: Interactive List */}
          <div className="roof-apps-list">
            {applications.map((app, index) => (
              <div 
                key={app.id} 
                className={`roof-app-list-item ${activeIndex === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
              >
                <div className="app-item-content">
                  <span className="app-item-number">{(index + 1).toString().padStart(2, '0')}</span>
                  <h3 className="app-item-title">{app.title}</h3>
                </div>
                <ArrowRight className="app-item-arrow" size={20} />
              </div>
            ))}
          </div>

          {/* Right Side: Dynamic Image Reveal */}
          <div className="roof-apps-visual">
            {applications.map((app, index) => (
              <div 
                key={`visual-${app.id}`}
                className={`roof-app-visual-panel ${activeIndex === index ? 'active' : ''}`}
                style={{ backgroundImage: `url(${app.image})` }}
              >
                <div className="visual-panel-overlay">
                  <div className="visual-panel-content">
                    <h2>{app.title}</h2>
                    <p>{app.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default RoofingApplications;
