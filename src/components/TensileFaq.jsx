import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import '../components/FAQ.css'; /* Re-using base bubble styles */
import './TensileFaq.css'; /* Tensile specific grid styles */

const faqData = [
  { id: 1, question: "What are tensile roofing services?", answer: "Tensile roofing services cover the full process of designing, fabricating, and installing fabric membrane structures — PVC, PVDF, or PTFE — stretched over steel frames and cables to create column-free covered spaces. Car parks, stadium grandstands, mall plazas, pool decks, walkways. The structure gets its strength from the tension in the fabric, not from a heavy frame underneath." },
  { id: 2, question: "Why choose professional tensile structure services?", answer: "A tensile structure that's incorrectly engineered either leaks in the first monsoon or fails structurally within a few years. Professional tensile structure services bring site-specific wind-load calculations, correctly sized drainage for local rainfall intensity, and membrane specifications that match actual exposure conditions — not generic defaults copied from a project somewhere else. The difference shows up at year two or three, not on handover day." },
  { id: 3, question: "Who are the best tensile roofing contractors in Chennai?", answer: "The best tensile roofing contractors in Chennai are the ones with a verifiable project history in the city — not just brochure photos. Ask for completed job addresses, check whether the crew is in-house or subcontracted, and ask how they calculate drainage for the Northeast Monsoon. Tesco Structures has 15 years of documented work across Chennai, with 350+ installations that clients can visit and inspect." },
  { id: 4, question: "How do I find a reliable tensile structure company in Chennai?", answer: "A reliable tensile structure company in Chennai will have in-house engineers, their own fabrication facility, and a crew that has handled projects in local climate conditions — sea air, monsoon rainfall, and 44°C summer heat. Ask for IS:875 wind-load calculations specific to your site. Ask whether installation is their own team or day labour. Those two questions usually tell you what you need to know." },
  { id: 5, question: "What are the benefits of a car parking tensile structure?", answer: "A car parking tensile structure cuts surface temperature by 15–20°C compared to exposed tarmac, blocks 95–99% of UV that degrades vehicle paint and interiors, and keeps the lot functional through heavy monsoon rain. It loads to the perimeter, so no columns eat into parking bays. In Chennai's climate — June heat and Northeast Monsoon both — the payback calculation is straightforward." },
  { id: 6, question: "How is tensile fabric structure installation done?", answer: "Tensile fabric structure installation follows a set sequence: site survey and structural assessment first, then steel frame fabrication and membrane cutting in the workshop, then steel erection on site, membrane attachment, and finally tensioning to the engineered pre-stress spec. The tensioning stage is what separates a properly installed structure from one that fails under wind or rain at year three." },
  { id: 7, question: "How long does tensile roof structure installation take?", answer: "Tensile roof structure installation timelines depend on size and complexity. A standard car park canopy for 50–100 vehicles typically takes 10–20 days on site once the steel is ready. A large-span stadium or mall structure may take 4–8 weeks. The fabrication lead time — 3 to 6 weeks before site work begins — is the part most clients underestimate when planning project schedules." },
  { id: 8, question: "What are architectural tensile structures?", answer: "Architectural tensile structures are fabric membrane roofing systems designed not just for function but as deliberate visual elements of a building or landscape. A conical tensile gazebo at a hotel entrance, a hypar canopy over a mall plaza, a free-form fabric canopy at a transit hub — these are architectural tensile structures. The geometry is engineered for structural performance and specified for form at the same time." },
  { id: 9, question: "Why hire tensile roofing fabricators in Chennai?", answer: "Tensile roofing fabricators in Chennai understand the conditions the structure needs to survive — coastal salt air, 44°C summer ambient, Northeast Monsoon rainfall that generic national specs don't account for. Local fabricators can visit your site quickly, manage installation directly, and respond without the lag of coordinating from another city. When a problem comes up mid-installation, proximity matters." },
  { id: 10, question: "What are the best tensile roofing solutions for commercial spaces?", answer: "The best tensile roofing solutions for commercial spaces balance span, aesthetics, and drainage for the specific application. Hypar forms work well over large plazas and car parks — structurally efficient and visually clean. Barrel vaults suit long retail corridors and walkways. Conical multi-point forms work for food court zones and outdoor seating. The right tensile roofing solution depends on your floor plan, available anchor points, and what the space needs to look like." },
  { id: 11, question: "Who are the leading tensile roofing manufacturers in Chennai?", answer: "Tesco Structures is one of Chennai's established tensile roofing manufacturers, with an in-house fabrication facility, 15 years of production experience, and 350+ spans across South India. We fabricate using high-frequency welding equipment that creates seams as strong as the base fabric, and source PVC, PVDF, and PTFE membranes from certified global suppliers — the same materials used in international landmark structures." },
  { id: 12, question: "What are the advantages of tensile fabric roof installation?", answer: "Tensile fabric roof installation delivers weather protection over large spans without intermediate columns, at lower total cost than RCC or heavy metal for areas above 15–20 metres. The membrane is lightweight, cutting foundation loads significantly. Installation is faster than conventional roofing. The finished structure diffuses natural light, blocks 95–99% UV, and needs minimal maintenance over a 15–30 year lifespan depending on membrane grade." },
  { id: 13, question: "How do I choose the right tensile structure contractor?", answer: "Check three things: project history in your specific application type — car park, pool, and stadium are different engineering briefs. Whether the tensile structure contractor has in-house structural engineers producing site-specific calculations. Whether the installation crew is their own or subcontracted. A contractor who subcontracts installation is also subcontracting quality control. Ask to visit a completed project in Chennai before signing anything." },
  { id: 14, question: "Why are membrane tensile structures widely used today?", answer: "Membrane tensile structures solve a problem no other roofing system handles as well: covering very large open areas without columns, at manageable cost, with a finished appearance that improves the space rather than just covering it. They're used in airports, stadiums, transit hubs, and commercial developments worldwide for the same reasons they work in Chennai — column-free span, low self-weight, and a structural form that manages wind loads better than flat rigid alternatives." }
];

const TensileFaq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const leftColumn = faqData.slice(0, 7);
  const rightColumn = faqData.slice(7, 14);

  const renderColumn = (columnData, startIndex) => (
    <div className="tensile-faq-col">
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
    <section className="tensile-faq-section">
      <div className="tensile-faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        
        <div className="tensile-faq-grid">
          {renderColumn(leftColumn, 0)}
          {renderColumn(rightColumn, 7)}
        </div>
      </div>
    </section>
  );
};

export default TensileFaq;
