import { useState } from 'react';
import './FAQ.css';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    id: 1,
    question: "What is a Pre-Engineered Building (PEB)?",
    answer: "A Pre-Engineered Building is a steel structure designed and fabricated in a factory, then bolted together on site. Every column, rafter and roof sheet is engineered to carry only the load it needs, so it uses less steel. That precise, ready-to-assemble approach is what makes PEB faster and lighter than building from scratch."
  },
  {
    id: 2,
    question: "What are the advantages of PEB structures?",
    answer: "PEB structures go up faster, cost less and weigh less than concrete, since the steel is fabricated while site work runs in parallel. They give wide column-free spans, easy future expansion and factory-grade quality control. In short, you get a stronger building, sooner, for less money."
  },
  {
    id: 3,
    question: "Where are PEB buildings commonly used?",
    answer: "PEB buildings are the go-to for warehouses, cold storage, factories, logistics hubs and aircraft hangars. They also suit showrooms, supermarkets, sports halls, poultry sheds, workshops and railway buildings. Anywhere that needs a large, quick, column-free single-storey space, PEB fits the brief."
  },
  {
    id: 4,
    question: "How long does it take to construct a PEB building?",
    answer: "A small-to-medium PEB building can be fabricated and erected in about 8–12 weeks, with foundation work running alongside. A 1,00,000 sq ft warehouse takes roughly 7–11 months in PEB versus 19–28 months in conventional RCC. The exact timeline depends on approvals, site conditions and weather, but PEB consistently saves months."
  },
  {
    id: 5,
    question: "Is a PEB building cost-effective compared to conventional construction?",
    answer: "For most warehouses and factories, yes a PEB structure beats conventional construction on total cost. Optimised design saves steel, the lighter frame needs a smaller foundation, and the faster build cuts labour and interest. Finishing months earlier also lets you use or rent the space sooner, so PEB usually wins both upfront and long term."
  },
  {
    id: 6,
    question: "PEB warehouse construction cost",
    answer: "In India, PEB warehouse construction cost runs about ₹300–₹450 per sq ft for the steel structure alone (frame and roofing). A full turnkey warehouse with foundation, flooring and cladding works out to roughly ₹1,400–₹2,600 per sq ft. Your final rate depends on span, height, steel grade, location and current steel prices."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section">
      <div className="container faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        
        <div className="faq-list">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div key={item.id} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                
                {/* Question Row */}
                <div className="faq-q-row">
                  <div className="faq-q-bubble" onClick={() => toggleFAQ(index)}>
                    {item.question}
                  </div>
                  <button 
                    className="faq-toggle-btn" 
                    onClick={() => toggleFAQ(index)}
                    aria-label="Toggle FAQ"
                  >
                    {isOpen ? <Minus size={18} color="#333" /> : <Plus size={18} color="#333" />}
                  </button>
                </div>

                {/* Answer Row */}
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
                    <div className="faq-a-bubble">
                      {item.answer}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
