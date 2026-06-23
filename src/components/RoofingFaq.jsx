import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import '../components/FAQ.css';
import './RoofingFaq.css';

const faqData = [
  {
    id: 1,
    question: "What is uPVC roofing sheet in Chennai used for?",
    answer: "A uPVC roofing sheet in Chennai is mostly used for factory sheds, warehouses, poultry farms, and storage buildings. It doesn't rust, doesn't need painting, and holds up through monsoon and summer heat without maintenance."
  },
  {
    id: 2,
    question: "How do I choose uPVC roofing contractors in Chennai?",
    answer: "Look for uPVC roofing contractors in Chennai who give you an itemised quote — material grade, thickness, and erection cost listed separately. Ask them for a completed project reference nearby so you can see the quality of their ridge and eave finishing."
  },
  {
    id: 3,
    question: "What is the average uPVC roofing price in Chennai?",
    answer: "The uPVC roofing price in Chennai typically falls between ₹185 and ₹330 per sqft installed, depending on sheet thickness and whether purlin work is included. It's worth comparing this against colour-coated GI on a 10-year cost basis, not just the upfront figure."
  },
  {
    id: 4,
    question: "What are the benefits of uPVC roofing services in South India?",
    answer: "uPVC roofing services in South India offer rust-free, lightweight cover that works well in coastal and high-humidity zones. No repainting cycle, no fastener corrosion, and a 20-plus year lifespan makes it one of the lowest-maintenance options available."
  },
  {
    id: 5,
    question: "Where can I find polycarbonate roofing sheet in Chennai?",
    answer: "Polycarbonate roofing sheet in Chennai is supplied through roofing contractors who stock twin-wall and triple-wall multi-cell panels. Go through a contractor rather than a hardware shop — the product grade and UV coating warranty matter more than the price per sheet."
  },
  {
    id: 6,
    question: "Is polycarbonate sheet roofing good for car parking in Chennai?",
    answer: "Yes — polycarbonate sheet roofing for car parking in Chennai works well when you use twin-wall panels in bronze or opal tint, not clear single-layer sheets. It lets in diffused light, cuts heat build-up inside the cars, and holds up against hail and monsoon impact."
  },
  {
    id: 7,
    question: "How to select polycarbonate roofing contractors in South India?",
    answer: "Choose polycarbonate roofing contractors in South India who specify UV-certified panels and give you the manufacturer's warranty document in writing. A good contractor will also calculate the purlin spacing and frame load before recommending a panel thickness."
  },
  {
    id: 8,
    question: "What are glass roofing services in Chennai used for?",
    answer: "Glass roofing services in Chennai are used for hotel lobbies, showroom atriums, corporate reception areas, and premium residential builds where light and aesthetics matter. Every installation needs proper structural engineering for wind uplift, thermal expansion, and overhead safety."
  },
  {
    id: 9,
    question: "Who provides glass roofing contractors in South India?",
    answer: "Glass roofing contractors in South India who handle design, glass procurement, steel or aluminium frame fabrication, and installation under one contract are the right choice. Avoid splitting the structural and installation scope between two vendors — that's where gaps appear."
  },
  {
    id: 10,
    question: "What is GI roofing sheet in Chennai used for?",
    answer: "GI roofing sheet in Chennai is the standard cover for factories, warehouses, and industrial sheds across the city's manufacturing corridors. It installs fast over large spans and holds structural strength even in heavy monsoon conditions."
  },
  {
    id: 11,
    question: "How do GI roofing contractors in South India work?",
    answer: "GI roofing contractors in South India survey the site, calculate purlin spacing and wind load, then supply and erect colour-coated or Galvalume sheets with proper ridge and eave finishing. The better ones provide mill certificates with every material delivery and do a water-spray test before handover."
  },
  {
    id: 12,
    question: "What is industrial GI roofing sheet in Chennai?",
    answer: "Industrial GI roofing sheet in Chennai refers to heavier-gauge colour-coated or Galvalume profiles — typically 0.47mm to 0.60mm base metal — used for factory and warehouse applications. For coastal Chennai locations, Galvalume AZ-150 alloy coating is specified over standard zinc GI to resist salt-air corrosion."
  },
  {
    id: 13,
    question: "Are Mangalore tile roofing services available in Chennai?",
    answer: "Yes — Mangalore tile roofing in Chennai is available for residential, institutional, and heritage buildings. As Mangalore roof tiles contractors across South India, we handle new installations and re-bedding of existing tile roofs where the structure beneath needs attention."
  },
  {
    id: 14,
    question: "What are roofing shingles installation services in South India?",
    answer: "Shingles roofing in Chennai and across South India covers architectural laminated shingles for luxury villas, resorts, and boutique hotels. Roofing shingles installation in South India done properly — with the right underlayment, starter strip, and ridge cap — gives you 30 to 50 years on a good deck."
  }
];

const RoofingFaq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const leftColumn = faqData.slice(0, 7);
  const rightColumn = faqData.slice(7, 14);

  const renderColumn = (columnData, startIndex) => (
    <div className="roof-faq-col">
      {columnData.map((item, localIndex) => {
        const globalIndex = startIndex + localIndex;
        const isOpen = openIndex === globalIndex;
        
        return (
          <div key={item.id} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
            <div className="faq-q-row">
              <div className="faq-q-bubble" onClick={() => toggleFAQ(globalIndex)}>
                {item.question}
              </div>
              <button 
                className="faq-toggle-btn" 
                onClick={() => toggleFAQ(globalIndex)}
                aria-label="Toggle FAQ"
              >
                {isOpen ? <Minus size={18} color="#333" /> : <Plus size={18} color="#333" />}
              </button>
            </div>

            <div 
              className="faq-a-wrapper" 
              style={{ 
                maxHeight: isOpen ? '500px' : '0',
                opacity: isOpen ? 1 : 0,
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div className="faq-a-content">
                <div className="faq-a-bubble" style={{ backgroundColor: '#ffffff' }}>
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <section className="roof-faq-section">
      <div className="roof-faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        
        <div className="roof-faq-grid">
          {renderColumn(leftColumn, 0)}
          {renderColumn(rightColumn, 7)}
        </div>
      </div>
    </section>
  );
};

export default RoofingFaq;
