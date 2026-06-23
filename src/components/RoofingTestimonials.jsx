import { Quote } from 'lucide-react';
import './RoofingTestimonials.css';

const testimonials = [
  {
    id: 1,
    name: "Vimal Kumar",
    role: "Managing Director",
    initials: "VK",
    color: "#68D61B", // Brand green
    quote: "Tesco Structures exceeded our expectations with their professionalism and engineering expertise. From planning to project completion, every stage was handled with precision, delivering a high-quality PEB solution on time and within budget."
  },
  {
    id: 2,
    name: "Saleem Khan",
    role: "Sales Head | Sales Team",
    initials: "SK",
    color: "#ff7e00", // Orange accent
    quote: "Working with Tesco Structures was a seamless experience. Their team understood our requirements, provided practical solutions, and maintained clear communication throughout the project. We truly value their commitment to quality and customer satisfaction."
  },
  {
    id: 3,
    name: "Karthick",
    role: "Structural Engineer | Design Team",
    initials: "K",
    color: "#2575fc", // Blue accent
    quote: "The structural design delivered by Tesco Structures was accurate, efficient, and optimized for our project needs. Their engineering knowledge and attention to detail ensured a smooth execution with outstanding results."
  },
  {
    id: 4,
    name: "Sathish Kumar",
    role: "Project Manager | Project Team",
    initials: "SK",
    color: "#e81cff", // Purple accent
    quote: "Tesco Structures managed our project with excellent coordination and timely execution. Their dedicated project team ensured every milestone was completed efficiently while maintaining the highest standards of safety and quality."
  }
];

const RoofingTestimonials = () => {
  return (
    <section className="roof-test-section">
      <div className="roof-test-container">
        
        <div className="roof-test-header">
          <span className="test-badge">CLIENT SUCCESS</span>
          <h2 className="test-title">South India's Choice for Advanced Roofing</h2>
          <p className="test-subtitle">
            Leading industrial plants, commercial parks, and warehouses trust our engineered profiles for leak-proof structural roofs.
          </p>
        </div>

        <div className="roof-test-grid">
          {testimonials.map((test, index) => (
            <div 
              key={test.id} 
              className={`test-card stagger-${index + 1}`}
            >
              <Quote className="quote-icon" size={40} color="rgba(132, 239, 70, 0.2)" />
              
              <div className="test-content">
                <p className="test-quote">"{test.quote}"</p>
              </div>

              <div className="test-author">
                <div className="test-avatar" style={{ backgroundColor: test.color }}>
                  {test.initials}
                </div>
                <div className="test-author-info">
                  <h4>{test.name}</h4>
                  <span>{test.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RoofingTestimonials;
