import { Phone, MessageCircle, MapPin, ArrowRight, ArrowUpRight } from 'lucide-react';
import './ArchContact.css';
import EstimateForm from './EstimateForm';

const ArchContact = () => {
  return (
    <section className="arch-contact-section" id="contact">
      <div className="arch-contact-container">
        
        {/* Left Side: Information & Actions */}
        <div className="arch-contact-info">
          <div className="contact-badge-wrapper">
            <span className="contact-badge">GET IN TOUCH</span>
            <div className="badge-glow"></div>
          </div>
          
          <h2 className="contact-headline">
            Ready to start your next project?
          </h2>
          
          <p className="contact-subheadline">
            Tell us what you're building and where. We'll put together a design proposal with a structural analysis outline and a realistic cost framework. No commitment needed to start the conversation.
          </p>

          <div className="contact-action-cards">
            {/* Call Now Card */}
            <a href="tel:+919003328229" className="action-card">
              <div className="action-icon-wrapper call-icon">
                <Phone size={24} color="#111" fill="#111" />
              </div>
              <div className="action-details">
                <span className="action-label">CALL NOW</span>
                <span className="action-value">+91 90033 28229</span>
              </div>
              <ArrowUpRight className="action-arrow" size={20} color="#666" />
            </a>

            {/* WhatsApp Card */}
            <a href="https://wa.me/919003328229" className="action-card" target="_blank" rel="noreferrer">
              <div className="action-icon-wrapper wa-icon">
                <MessageCircle size={24} color="#fff" fill="#fff" />
              </div>
              <div className="action-details">
                <span className="action-label">WHATSAPP US NOW</span>
                <span className="action-value">Connect with Engineering</span>
              </div>
              <ArrowUpRight className="action-arrow" size={20} color="#666" />
            </a>
          </div>

          <div className="contact-address">
            <MapPin size={24} color="#84ef46" className="address-icon" />
            <p>
              37, 15th St, Gandhi Nagar,<br />
              Ashok Nagar, Chennai, Tamil Nadu 600083
            </p>
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div className="arch-contact-form-wrapper">
          <EstimateForm />
        </div>

      </div>
    </section>
  );
};

export default ArchContact;
