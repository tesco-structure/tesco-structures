import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import '../components/FAQ.css';
import './CivilFaq.css';

const faqData = [
  { id: 1, question: "What does a civil construction company do?", answer: "A civil construction company handles soil investigation, foundation design, RCC framing, structural slabs, masonry, waterproofing, and drainage — everything structural before finishes begin. It's the work that decides whether your building is safe for the next 50 years." },
  { id: 2, question: "What are civil construction services?", answer: "Civil construction services cover foundation engineering, pile work, RCC framing, slab construction, load-bearing masonry, basement waterproofing, storm drainage, and BOQ preparation. Basically, all structural scope from soil investigation to completed frame handover." },
  { id: 3, question: "What is construction and civil engineering?", answer: "Construction and civil engineering together cover design and physical building — engineering handles soil analysis, structural calculations, and IS code drawings; construction handles materials, labour, and site execution. When both sides work closely, structures perform exactly as designed." },
  { id: 4, question: "What is heavy civil construction?", answer: "Heavy civil construction covers large-scale projects — industrial plant foundations, multi-storey RCC frames, deep basement excavations, retaining walls, and high-capacity warehouse slabs. In Tamil Nadu, heavy civil construction also demands specific knowledge of coastal Chennai soil and Cauvery delta ground conditions." },
  { id: 5, question: "Why is civil construction design important?", answer: "Civil construction design determines structural safety, load capacity, and long-term durability. Poor design — wrong foundation depth, incorrect rebar detailing, wrong concrete grade — shows up as cracks and settlement years after handover. Getting civil construction design right from day one costs less than fixing it later." },
  { id: 6, question: "Which is the best civil construction company in Chennai?", answer: "Tesco Structure is one of the most trusted civil construction companies in Chennai, with 15 years of projects across Ambattur, OMR, Tambaram, and Guindy. We handle Chennai's coastal soil challenges — high water tables, soft alluvial layers — with proper soil investigation and pile foundation engineering every time." },
  { id: 7, question: "What services does a civil construction company in Madurai offer?", answer: "A civil construction company in Madurai offers foundation engineering for black cotton soil, RCC frame work, slab construction, masonry, waterproofing, and DTCP approval support. Madurai's expansive soil needs careful foundation design — seasonal moisture variation can cause heave if the depth and type are wrong." },
  { id: 8, question: "Why hire civil construction contractors?", answer: "Civil construction contractors bring licensed structural engineers, IS code compliance, and proper material testing to your project. A general builder cutting corners on foundations costs far more to fix later than hiring the right civil construction contractors from the start." },
  { id: 9, question: "What is civil works construction?", answer: "Civil works construction is the on-site execution of structural elements — laying foundations, pouring RCC columns and slabs, building drainage systems, and completing waterproofing. It's the physical fieldwork that follows engineering design, and it requires qualified site engineers to do it properly." },
  { id: 10, question: "How does civil engineering and construction work together?", answer: "Civil engineering and construction work together when site engineers read and follow structural drawings precisely — correct rebar cover, proper lap zones, specified concrete grades. When there's a disconnect between design and execution, structural problems follow. That's why our site engineers are trained to work directly from licensed engineer drawings, every pour." },
  { id: 11, question: "What types of civil construction projects are common?", answer: "Common civil construction projects include apartments, villas, factories, warehouses, hospitals, offices, schools, and retail complexes. Each has different structural demands — a warehouse needs a high-capacity flat slab, a hospital needs precise load paths for heavy equipment, and an industrial building needs machine foundations for dynamic loads." },
  { id: 12, question: "What is construction civil engineering building work?", answer: "Construction civil engineering building work covers the full structural scope — geotechnical investigation, foundation construction, RCC frame, masonry, waterproofing, and drainage — all completed before architectural finishes begin. In Tamil Nadu, it must account for seismic Zone III detailing and variable local soil conditions." },
  { id: 13, question: "How do I choose a civil construction company in Coimbatore?", answer: "Check for licensed structural engineers, DTCP drawing experience, and completed projects in Coimbatore's laterite soil conditions. Ask to see cube test records from past projects. A credible civil construction company in Coimbatore will answer those questions immediately — if they hesitate, look elsewhere." },
  { id: 14, question: "Why hire a civil construction company in South India?", answer: "South India's soil conditions, seismic zone rules, and CMDA/DTCP approval processes require local experience. Tesco Structure operates as a civil construction company across South India — Chennai, Coimbatore, Madurai, Trichy, Bengaluru, Hyderabad, and Kochi — with the same engineering standards and site presence on every project." }
];

const CivilFaq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const leftColumn = faqData.slice(0, 7);
  const rightColumn = faqData.slice(7, 14);

  const renderColumn = (columnData, startIndex) => (
    <div className="civil-faq-col">
      {columnData.map((item, localIndex) => {
        const globalIndex = startIndex + localIndex;
        const isOpen = openIndex === globalIndex;
        
        return (
          <div key={item.id} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
            
            {/* Question Row */}
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
    <section className="civil-faq-section">
      <div className="civil-faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        
        <div className="civil-faq-grid">
          {renderColumn(leftColumn, 0)}
          {renderColumn(rightColumn, 7)}
        </div>
      </div>
    </section>
  );
};

export default CivilFaq;
