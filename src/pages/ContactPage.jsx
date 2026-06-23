import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Building2, Send } from 'lucide-react';
import { WEB3FORMS_KEY_SALES, WEB3FORMS_ENDPOINT } from '../web3FormsConfig';
import './ContactPage.css';

const ContactPage = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'sending', message: 'Sending your inquiry...' });

    try {
      const payload = new FormData(formRef.current);
      payload.append('access_key', WEB3FORMS_KEY_SALES);

      const res = await fetch(WEB3FORMS_ENDPOINT, { method: 'POST', body: payload });
      const data = await res.json();

      if (data.success) {
        setStatus({ state: 'success', message: 'Thank you! Your inquiry has been sent successfully.' });
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setStatus({ state: 'error', message: 'Sorry, something went wrong. Please try again or email us directly.' });
      }
    } catch {
      setStatus({ state: 'error', message: 'Sorry, something went wrong. Please try again or email us directly.' });
    }
  };

  return (
    <div className="contact-page-wrapper">
      
      {/* Top Split Section: Let's Build Strong Together + Inquiry Form */}
      <section className="contact-split-hero">
        
        {/* Left Side: General Info Block */}
        <div className="contact-hero-left">
          <h1 className="contact-hero-title">
            Let’s Build Something<br />Strong Together
          </h1>
          <p className="contact-hero-desc">
            Partner with India’s leading steel fabrication experts. From Pre-Engineered Buildings to heavy industrial structures, we provide precision engineering and structural integrity for every project.
          </p>

          <div className="contact-info-list">
            
            {/* Email item */}
            <div className="info-list-item">
              <div className="info-icon-wrapper mail-wrapper">
                <Mail size={20} color="#ffffff" fill="#ffffff" />
              </div>
              <div className="info-details">
                <span className="info-label">EMAIL</span>
                <a href="mailto:tescostructures@gmail.com" className="info-val">tescostructures@gmail.com</a>
              </div>
            </div>

            {/* Phone item */}
            <div className="info-list-item">
              <div className="info-icon-wrapper phone-wrapper">
                <Phone size={20} color="#ffffff" fill="#ffffff" />
              </div>
              <div className="info-details">
                <span className="info-label">PHONE</span>
                <span className="info-val">+91 90033 28229</span>
              </div>
            </div>

            {/* Office item */}
            <div className="info-list-item">
              <div className="info-icon-wrapper office-wrapper">
                <MapPin size={20} color="#ffffff" />
              </div>
              <div className="info-details">
                <span className="info-label">OFFICE</span>
                <span className="info-val">
                  37, 15th St, Gandhi Nagar, Ashok<br />
                  Nagar, Chennai, Tamil Nadu 600083
                </span>
              </div>
            </div>

          </div>

          <div className="contact-divider"></div>

          {/* Core metrics counter row */}
          <div className="contact-metrics-row">
            <div className="metric-box">
              <h4>15+</h4>
              <p>YEARS EXPERIENCE</p>
            </div>
            <div className="metric-box">
              <h4>500+</h4>
              <p>PROJECTS DELIVERED</p>
            </div>
            <div className="metric-box">
              <h4>100%</h4>
              <p>ON-TIME EXECUTION</p>
            </div>
          </div>
        </div>

        {/* Right Side: Inquiry Form */}
        <div className="contact-hero-right">
          <div className="inquiry-form-card">
            <h3>Send Inquiry</h3>
            <form className="inquiry-form" ref={formRef} onSubmit={handleSubmit}>
              <input type="hidden" name="subject" value="New Contact Enquiry - Tesco Structures" />
              <input type="hidden" name="from_name" value="Tesco Structures Website" />
              <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

              <div className="form-group">
                <label>FIRST NAME</label>
                <input
                  type="text"
                  name="name"
                  placeholder="First name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>EMAIL ADDRESS</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>PHONE NUMBER</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 00000 00000"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group select-wrapper">
                <label>PROJECT TYPE</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled hidden>Select</option>
                  <option value="peb">Pre-Engineered Building (PEB)</option>
                  <option value="tensile">Tensile Roofing</option>
                  <option value="civil">Civil Construction</option>
                  <option value="architectural">Architectural Design & Structural Consultancy</option>
                  <option value="roofing">All Type of Roofing</option>
                </select>
              </div>

              <div className="form-group">
                <label>MESSAGE</label>
                <textarea 
                  name="message"
                  placeholder="Briefly describe your project requirements..." 
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="send-message-btn" disabled={status.state === 'sending'}>
                {status.state === 'sending' ? 'Sending...' : 'Send message'}
              </button>

              {status.message && (
                <p className={`form-status form-status--${status.state}`}>{status.message}</p>
              )}

              <p className="privacy-txt">
                By submitting this form, you agree to our <a href="#">privacy policy</a>.
              </p>

            </form>
          </div>
        </div>

      </section>

      {/* Bottom Section: Map Collage and Office Details Card */}
      <section className="office-location-section">
        <div className="location-container-box">
          
          {/* Map Image container */}
          <div className="location-map-wrapper">
            <iframe 
              title="Tesco Headquarters Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.996766432328!2d80.208638!3d13.0352729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52671dd3802e3b%3A0x868b44ffb3b8909e!2s37%2C%2015th%20St%2C%20Gandhi%20Nagar%2C%20Ashok%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu%20600083!5e0!3m2!1sen!2sin!4v1781599824000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="map-overlay-card">
              <div className="map-logo">
                <img src="/ts-logo.png" alt="Tesco Logo" />
              </div>
              <p className="map-address-text">
                37, 15th St, Gandhi Nagar, Ashok Nagar,<br />
                Chennai, Tamil Nadu 600083
              </p>
            </div>
          </div>

          {/* Details column block */}
          <div className="location-details-block">
            <span className="location-tag">OUR LOCATION</span>
            <h2>Visit Our Office</h2>
            <p className="location-desc">
              Our engineering center is located in Ashok Nagar, Chennai. We welcome clients for technical consultations and project reviews by appointment.
            </p>

            {/* Office headquarters card item */}
            <div className="hq-office-card">
              <div className="hq-icon-box">
                <Building2 size={22} color="var(--primary-green)" />
              </div>
              <div className="hq-details">
                <h4>Tesco Headquarters</h4>
                <p>37, 15th St, Gandhi Nagar,<br />Ashok Nagar, Chennai, Tamil Nadu 600083</p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default ContactPage;
