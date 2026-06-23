import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollReveal from './components/ScrollReveal';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import PebPage from './pages/PebPage';
import TensilePage from './pages/TensilePage';
import CivilPage from './pages/CivilPage';
import ArchPage from './pages/ArchPage';
import RoofingPage from './pages/RoofingPage';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollReveal />
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/peb" element={<PebPage />} />
          <Route path="/tensile" element={<TensilePage />} />
          <Route path="/civil" element={<CivilPage />} />
          <Route path="/design-consultancy" element={<ArchPage />} />
          <Route path="/roofing" element={<RoofingPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Catch-all: any unknown URL routes back to the home page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
