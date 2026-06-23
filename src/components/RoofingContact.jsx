import { Phone, MessageCircle, MapPin, ArrowRight, ArrowUpRight } from 'lucide-react';
import './RoofingContact.css';
import EstimateForm from './EstimateForm';

const RoofingContact = () => {
  return (
    <section className="roof-contact-section" id="contact">
      <div className="roof-contact-container">
        
        {/* Left Side: Information & Actions */}
        <div className="roof-contact-info">
          <div className="contact-badge-wrapper">
            <span className="contact-badge">GET A ROOF QUOTE</span>
            <div className="badge-glow"></div>
          </div>
          
          <h2 className="contact-headline">
            Cover your space <span className="text-green block">safely, durably, perfectly.</span>
          </h2>
          
          <p className="contact-subheadline">
            Tell us the span, the building type, and where it is. Our engineers look at it and come back with a material spec and an actual price — not a range wide enough to drive a truck through. Most quotes go out the same day.
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
            <MapPin size={24} color="#68D61B" className="address-icon" />
            <p>
              37, 15th St, Gandhi Nagar,<br />
              Ashok Nagar, Chennai, Tamil Nadu 600083
            </p>
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div className="roof-contact-form-wrapper">
          <EstimateForm />
        </div>

      </div>
    </section>
  );
};

export default RoofingContact;
