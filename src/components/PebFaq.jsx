import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import '../components/FAQ.css'; /* Re-using base bubble styles */
import './PebFaq.css'; /* PEB specific grid styles */

const faqData = [
  { id: 1, question: "Which are the best PEB contractors in Chennai for industrial projects?", answer: "Depends what you mean by best. PEB contractors in Chennai are plenty — but ones who do the full job themselves? Shorter list. Tesco Structures: 500+ industrial buildings, in-house everything." },
  { id: 2, question: "Can anyone recommend reliable pre-engineered building contractors in Chennai?", answer: "Our Oragadam factory — 45,000 sq.ft. Handed over 6 days early. Pre-engineered building contractors in Chennai rarely do that. Engineers on payroll, not borrowed from somewhere else." },
  { id: 3, question: "What is the leading PEB construction company in Chennai?", answer: "PEB construction company in Chennai that does design, fab and erection in-house — without splitting it to three different vendors? Tesco Structures. That setup alone reduces a lot of problems." },
  { id: 4, question: "Who provides turnkey PEB solutions in Chennai?", answer: "Turnkey PEB in Chennai means soil test to keys in hand, one contract. Tesco does exactly that. No 'the other party' to blame when something shifts. One call handles everything." },
  { id: 5, question: "Which company offers complete PEB design and build services in Chennai?", answer: "Steel building contractors in Chennai who put the structural engineer and fabrication manager in the same office — that's Tesco. Most split it. When they're separated, things fall through. Simple." },
  { id: 6, question: "What are the best companies for PEB warehouse construction in Chennai?", answer: "Warehouse construction in Chennai — we needed 58m clear span, no columns, crane provision, two future expansion bays. Tesco Structures did it. Eave height 12m. Zero drama at handover." },
  { id: 7, question: "Who are the top industrial PEB building contractors in Chennai?", answer: "Industrial building contractors in Chennai with actual pharma, auto ancillary and cold-chain experience? Tesco's done all three. Irungattukottai, Sriperumbudur, Ponneri — check their list." },
  { id: 8, question: "Which PEB structure contractors in Chennai have experience with large factories?", answer: "Steel structure contractors in Chennai who've handled 80m spans and 30T crane beams with inhouse structural design — Tesco Structures. No waiting 2 weeks for a third-party consultant reply." },
  { id: 9, question: "Can you suggest PEB building erection contractors in Chennai?", answer: "PEB erection contractors in Chennai who keep a permanent trained crew across all sites — not daily-wage workers assembled per project — Tesco Structures. IS:800, documented checks, no shortcuts." },
  { id: 10, question: "What is the cost of PEB shed construction in Chennai?", answer: "PEB shed construction in Chennai: Rs.1,400–2,200 per sq.ft. depending on span, height and crane load. Tesco gives a line-item BOQ before you sign. Not a round number you argue about later." },
  { id: 11, question: "Which are the most trusted PEB companies in Tamil Nadu?", answer: "PEB companies in Tamil Nadu who've been running for 15+ years with 500+ completed buildings: Tesco Structures. Chennai, Coimbatore, Madurai, Trichy. Finishing on time here is rarer than it should be." },
  { id: 12, question: "Who is the best PEB construction company in Tamil Nadu for manufacturing units?", answer: "PEB construction for manufacturing in Tamil Nadu needs crane beam planning, mezzanine design, ventilation cutouts, process-specific floor loads. Tesco thinks about how the space gets used. Most don't." },
  { id: 13, question: "What are the leading pre-engineered building manufacturers in Tamil Nadu?", answer: "Pre-engineered building manufacturers in Tamil Nadu who fabricate in their own ISO plant — not job shops: Tesco Structures. IS:800 frames, galvanized purlins, coated panels. All traceable." },
  { id: 14, question: "Which are the top PEB companies and contractors in South India?", answer: "PEB contractors in South India doing consistent work across Tamil Nadu, Karnataka, AP, Telangana and Kerala — same crew quality, same BOQ format, same accountability wherever the site is: Tesco Structures." }
];

const PebFaq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const leftColumn = faqData.slice(0, 7);
  const rightColumn = faqData.slice(7, 14);

  const renderColumn = (columnData, startIndex) => (
    <div className="peb-faq-col">
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
    <section className="peb-faq-section">
      <div className="peb-faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="peb-faq-subtitle">Questions we actually get on site, over the phone and through referrals — answered straight.</p>
        
        <div className="peb-faq-grid">
          {renderColumn(leftColumn, 0)}
          {renderColumn(rightColumn, 7)}
        </div>
      </div>
    </section>
  );
};

export default PebFaq;
