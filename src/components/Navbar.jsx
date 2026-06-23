import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Download } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [brochureOpen, setBrochureOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/ts-logo.png" alt="Tesco Structures Logo" style={{ height: '40px', width: 'auto' }} />
          </Link>
        </div>
        
        <button 
          className="mobile-menu-btn" 
          onClick={() => setMenuOpen(!menuOpen)} 
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about-us" className={location.pathname === '/about-us' ? 'active' : ''} onClick={() => setMenuOpen(false)}>About Us</Link>
          <div className="nav-item-dropdown">
            <span className="dropdown-trigger">
              Services <ChevronDown size={16} />
            </span>
            <div className="dropdown-menu">
              <Link to="/peb" onClick={() => setMenuOpen(false)}>Pre-Engineered Building (PEB)</Link>
              <Link to="/tensile" onClick={() => setMenuOpen(false)}>Tensile Roofing</Link>
              <Link to="/civil" onClick={() => setMenuOpen(false)}>Civil Construction</Link>
              <Link to="/design-consultancy" onClick={() => setMenuOpen(false)}>Architectural Design & Structural Consultancy</Link>
              <Link to="/roofing" onClick={() => setMenuOpen(false)}>All Type of Roofing</Link>
            </div>
          </div>
          <div className={`nav-item-dropdown brochure-dropdown ${brochureOpen ? 'open' : ''}`}>
            <span
              className="dropdown-trigger"
              onClick={() => setBrochureOpen(!brochureOpen)}
            >
              Brochure <ChevronDown size={16} />
            </span>
            <div className="dropdown-menu brochure-menu">
              <a
                href="/tesco-structures-brochure.pdf"
                download
                target="_blank"
                rel="noreferrer"
                className="brochure-download-btn"
                onClick={() => { setBrochureOpen(false); setMenuOpen(false); }}
              >
                <Download size={16} /> Download Brochure
              </a>
            </div>
          </div>
          <Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link to="/careers" className={location.pathname === '/careers' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Careers</Link>
          <div className="mobile-only-contact-item">
            <Link to="/contact" className="contact-btn" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        </nav>
        
        <div className="nav-action">
          <Link to="/contact" className="contact-btn">Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
