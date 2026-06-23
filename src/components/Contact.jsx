import './Contact.css';
import { Phone, MessageCircle, MapPin, ArrowUpRight, ArrowRight } from 'lucide-react';
import EstimateForm from './EstimateForm';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-container">
        
        {/* Left Column */}
        <div className="contact-left">
          <div className="contact-badge gradient-badge">#1 CONSTRUCTION COMPANY IN CHENNAI</div>
          <h2 className="contact-title">
            Expert<br/>
            Construction,<br/>
            Engineering &<br/>
            Projects.
          </h2>
          <p className="contact-desc">
            Trusted by 500+ clients across Chennai, Coimbatore & Bengaluru — get a detailed layout, BOQ & 120-day execution plan within 24 hours.
          </p>

          <div className="contact-action-cards">
            <a href="tel:+919003328229" className="action-card">
              <div className="action-icon phone-icon">
                <Phone size={24} color="#111" />
              </div>
              <div className="action-text">
                <span className="action-label">CALL NOW</span>
                <span className="action-value">+91 90033 28229</span>
              </div>
              <ArrowUpRight size={20} className="action-arrow" />
            </a>

            <a href="https://wa.me/919003328229" className="action-card">
              <div className="action-icon whatsapp-icon">
                <MessageCircle size={24} color="#fff" />
              </div>
              <div className="action-text">
                <span className="action-label">WHATSAPP US NOW</span>
                <span className="action-value">Connect with Engineering</span>
              </div>
              <ArrowUpRight size={20} className="action-arrow" />
            </a>
          </div>

          <div className="contact-location">
            <MapPin size={24} className="location-icon" />
            <p>37, 15th St, Gandhi Nagar, Ashok Nagar, Chennai, Tamil Nadu 600083</p>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="contact-right">
          <EstimateForm />
        </div>

      </div>
    </section>
  );
};

export default Contact;
