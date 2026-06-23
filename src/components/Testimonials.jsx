import './Testimonials.css';
import { Quote } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    text: "Tesco Structures delivered a high-quality polycarbonate roofing solution that perfectly matched our project requirements. Their team maintained excellent workmanship, completed the installation on schedule, and ensured a smooth execution from start to finish.",
    name: "Project Management Team",
    role: "KG Foundation",
    avatar: "/images/logos/Frame 1000001542.png",
    bgColor: "#E0DBFF", // Light purple
    customClass: "testi-card-1"
  },
  {
    id: 2,
    text: "The tensile structure designed and installed by Tesco Structures enhanced both the functionality and aesthetics of our space. Their technical expertise, quality materials, and timely delivery exceeded our expectations.",
    name: "Engineering Department",
    role: "India Builders",
    avatar: "/images/logos/Frame 1000001543.png",
    bgColor: "#DCE8FF", // Light blue
    customClass: "testi-card-2"
  },
  {
    id: 3,
    text: "Tesco Structures successfully executed our PEB building project with precision and professionalism. Their commitment to quality, structural safety, and on-time completion made them a trusted project partner.",
    name: "Infrastructure Development Team",
    role: "Madras Engineering College",
    avatar: "/images/logos/Frame 1000001544.png",
    bgColor: "#CED6F9", // Darker light blue
    customClass: "testi-card-3"
  },
  {
    id: 4,
    text: "We are extremely satisfied with the tensile structure provided by Tesco Structures. The project was completed efficiently with exceptional attention to detail, resulting in a durable and visually appealing installation.",
    name: "Campus Development Team",
    role: "Velammal Educational Institution",
    avatar: "/images/logos/Frame 1000001545.png",
    bgColor: "#FFFFFF", // White
    customClass: "testi-card-4"
  },
  {
    id: 5,
    text: "Tesco Structures delivered an innovative tensile roofing solution that perfectly complemented our campus infrastructure. Their professional approach, quality workmanship, and timely execution ensured a successful project delivery.",
    name: "Facilities & Infrastructure",
    role: "Vel Tech University",
    avatar: "/images/logos/Frame 1000001546.png",
    bgColor: "#FCE5CD", // Peach/Orange
    customClass: "testi-card-5"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="testimonials-title">What they say about us</h2>
        
        <p className="testimonials-instruction">Hover over the cards to align them!</p>

        <div className="testimonials-pile-container">
          {testimonialsData.map((testi) => (
            <div 
              key={testi.id} 
              className={`testi-card ${testi.customClass}`}
              style={{ backgroundColor: testi.bgColor }}
            >
              <Quote size={30} fill="#111" stroke="none" className="quote-icon" />
              <p className="testi-text">{testi.text}</p>
              
              <div className="testi-author">
                <div className="testi-author-info">
                  <h4 className="testi-name">{testi.name}</h4>
                  <p className="testi-role">{testi.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
