import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import '../components/FAQ.css';
import './ArchFaq.css';

const faqData = [
  {
    id: 1,
    question: "What is Architectural Design & Structural Consultancy?",
    answer: "Architectural Design & Structural Consultancy is building design and structural engineering handled together under one engagement. The architect covers layouts, elevations, and approval drawings; the structural engineer makes sure the building carries its loads safely. When both work off the same BIM model, coordination happens during design and not as a problem on site."
  },
  {
    id: 2,
    question: "Why hire a Structural Consultancy Company?",
    answer: "Because structural decisions made early — column positions, slab thicknesses, foundation type — affect cost and site progress for the whole build. A structural consultancy company checks the design works under all IS-code load combinations before concrete gets poured. Fixing things on paper is a lot cheaper than fixing things on site."
  },
  {
    id: 3,
    question: "What does an Architectural & Structural Consultant do?",
    answer: "An architectural & structural consultant handles the full design scope: site analysis, floor plans, elevations, structural modelling, STAAD Pro or ETABS analysis, GFC drawings, and approval documentation for CMDA or DTCP. On larger projects, MEP coordination and 3D visualization often get added. The idea is one team handles what three or four separate consultants would otherwise cover."
  },
  {
    id: 4,
    question: "Why are Structural Engineering Consultancy services important?",
    answer: "Buildings in seismic zones, on soft soil, or with irregular geometry need careful analysis. Structural engineering consultancy services make sure loads are carried safely, IS codes are followed, and the structure behaves predictably under wind and seismic forces. Skipping this — or doing it carelessly — is how structural failures happen."
  },
  {
    id: 5,
    question: "What is included in Structural Consultancy Services?",
    answer: "Structural analysis in STAAD Pro or ETABS, member sizing, GFC drawing sets with bar bending schedules, foundation design, steel connection details in Tekla, and a signed calculation report. Structural consultancy services can also cover stability certificates for existing buildings and peer review of third-party designs where something seems off."
  },
  {
    id: 6,
    question: "How do Architectural Design Consultancy Services benefit a project?",
    answer: "They keep design and approvals moving together. Architectural design consultancy services bring layout design, regulatory submissions, and client sign-off into one coordinated process. When the architect works alongside the structural and MEP teams in the same firm, the drawings that reach the contractor have fewer gaps and fewer conflicts."
  },
  {
    id: 7,
    question: "What is Structural Design and Engineering?",
    answer: "Structural design and engineering is the process of sizing and detailing a building's load-bearing elements — columns, beams, slabs, shear walls, connections, and foundations — so it performs safely under all expected loads. Dead loads, live loads, wind per IS 875, and seismic per IS 1893. The output is a GFC drawing set the contractor builds from directly."
  },
  {
    id: 8,
    question: "Why choose Architectural & Engineering Consultants?",
    answer: "Single point of accountability for both disciplines. Architectural & engineering consultants who handle design and structure in one team cut out the coordination gaps that come up when separate firms are involved. Drawing revisions, load changes, and site queries get resolved internally instead of waiting on another party to respond."
  },
  {
    id: 9,
    question: "What services does a Structural Architectural Consultancy provide?",
    answer: "Structural analysis and design, architectural drawings for CMDA and DTCP approvals, BIM coordination, GFC drawing sets, stability certificates, MEP integration, 3D visualization, and construction-phase support. A full-service structural architectural consultancy covers what multiple separate consultants would typically handle across different contracts."
  },
  {
    id: 10,
    question: "When do I need Building Structural Consultants?",
    answer: "For any new construction — residential, commercial, or industrial. Also when modifying an existing building, adding floors, or applying for a stability certificate. Building structural consultants are required for CMDA and DTCP submissions in Tamil Nadu, and for projects where a bank or municipality needs a signed engineer's report before releasing funds or permits."
  },
  {
    id: 11,
    question: "Why choose Architectural Design Services in South India?",
    answer: "South India's building regulations have specific requirements — Seismic Zone III detailing in Tamil Nadu, CMDA and DTCP formats, local soil conditions in Chennai, and state-specific approval processes. Architectural design services in South India from a team that already knows these norms means fewer revision cycles, fewer submission rejections, and less time spent explaining local requirements to a consultant based elsewhere."
  },
  {
    id: 12,
    question: "How can Structural Consultancy Services in Chennai help my project?",
    answer: "Chennai's soil varies across zones — from rock and hard laterite in some parts of the city to loose alluvial deposits near the coast and river belts. Structural consultancy services in Chennai from a team that's worked across the city means foundation recommendations and structural details suited to what's actually in the ground, not generic solutions copied from another project."
  },
  {
    id: 13,
    question: "Why hire Architectural & Structural Consultants in Chennai?",
    answer: "Local knowledge matters on structural and approval work. Architectural & structural consultants in Chennai understand CMDA and DTCP documentation, Zone III seismic detailing, soil behaviour in specific parts of the city, and how local contractors work. A consultant applying generic standards to a Chennai project creates problems during approval and sometimes on site."
  },
  {
    id: 14,
    question: "What are the benefits of Residential and Commercial Architectural Design across South India?",
    answer: "Residential architectural design in Chennai covers CMDA approval requirements, ECR and OMR site constraints, and local building norms for villas, apartments, and layouts. Commercial architectural design across South India covers offices, retail, mixed-use, and institutional projects where coordination with structural, MEP, and approval teams matters more. Having one firm handle both means continuity across the full design scope and fewer handoff problems between disciplines."
  }
];

const ArchFaq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const leftColumn = faqData.slice(0, 7);
  const rightColumn = faqData.slice(7, 14);

  const renderColumn = (columnData, startIndex) => (
    <div className="arch-faq-col">
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
    <section className="arch-faq-section">
      <div className="arch-faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        
        <div className="arch-faq-grid">
          {renderColumn(leftColumn, 0)}
          {renderColumn(rightColumn, 7)}
        </div>
      </div>
    </section>
  );
};

export default ArchFaq;
