import './Footer.css';
import { MapPin, Phone, Mail } from 'lucide-react';
// We'll render custom SVGs for the social networks to ensure perfect compatibility and avoid version-specific Lucide export mismatch.

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-shade-container">
        <div className="footer-shade-text">TESCO STRUCTURES</div>
      </div>
      <div className="container">
        
        <div className="footer-grid">
          {/* Column 1: Brand */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <img src="/ts-logo.png" alt="Tesco Structures Logo" style={{ height: '40px', width: 'auto' }} />
            </div>
            <p className="footer-desc">
              Delivering world-class Pre-Engineered Buildings and tensile fabric structures with uncompromising quality, speed, and precision engineering.
            </p>
            <div className="social-links">
              <a href="https://www.linkedin.com/company/tesco-structures/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" aria-label="YouTube" target="_blank" rel="noreferrer">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.163gM19.81 5.5c-.811-.136-2.385-.21-3.81-.21-1.425 0-2.999.074-3.81.21-.921.156-1.642.877-1.798 1.798-.136.811-.21 2.385-.21 3.81 0 1.425.074 2.999.21 3.81.156.921.877 1.642 1.798 1.798.811.136 2.385.21 3.81.21 1.425 0 2.999-.074 3.81-.21.921-.156 1.642-.877 1.798-1.798.136-.811.21-2.385.21-3.81 0-1.425-.074-2.999-.21-3.81-.156-.921-.877-1.642-1.798-1.798zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" d="M23.498 6.163c-.272-1.022-1.074-1.824-2.096-2.096C19.558 3.5 12 3.5 12 3.5s-7.558 0-9.402.567c-1.022.272-1.824 1.074-2.096 2.096C0 8.01 0 12 0 12s0 3.99 2.598 5.837c.272 1.022 1.074 1.824 2.096 2.096C6.442 20.5 12 20.5 12 20.5s7.558 0 9.402-.567c1.022-.272 1.824-1.074 2.096-2.096C24 15.99 24 12 24 12s0-3.99-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://www.facebook.com/tescostructures/" aria-label="Facebook" target="_blank" rel="noreferrer">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </a>
              <a href="https://www.instagram.com/tesco_structures/" aria-label="Instagram" target="_blank" rel="noreferrer">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" aria-label="Pinterest" target="_blank" rel="noreferrer">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
              </a>
              <a href="#" aria-label="X" target="_blank" rel="noreferrer">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/tesco-structures-brochure.pdf" download target="_blank" rel="noreferrer">Brochure</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-col">
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links">
              <li><a href="/peb">Pre-Engineered Building (PEB)</a></li>
              <li><a href="/tensile">Tensile Roofing</a></li>
              <li><a href="/civil">Civil Construction</a></li>
              <li><a href="/design-consultancy">Architectural Design & Structural Consultancy</a></li>
              <li><a href="/roofing">All Type of Roofing</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">Get in Touch</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={18} className="footer-icon" />
                <span>37, 15th St, Gandhi Nagar, Ashok Nagar, Chennai, Tamil Nadu 600083</span>
              </li>
              <li>
                <Phone size={18} className="footer-icon" />
                <a href="tel:+919003328229">+91 90033 28229</a>
              </li>
              <li>
                <Mail size={18} className="footer-icon" />
                <a href="mailto:info@tescostructures.com">info@tescostructures.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Tesco Structures. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
