import { useState, useRef } from 'react';
import {
  Building,
  Briefcase,
  MapPin,
  Clock,
  Building2,
  CheckCircle2,
  UserCheck
} from 'lucide-react';
import { WEB3FORMS_KEY_CAREERS, WEB3FORMS_ENDPOINT } from '../web3FormsConfig';
import './Careers.css';

const jobOpenings = [
  {
    id: 'job-1',
    title: 'Business Development Manager',
    category: 'Executive',
    location: 'Chennai',
    type: 'Full-time',
    desc: 'Lead the vision and strategic direction of Tesco Structure as we expand our footprint into global markets.',
    icon: <Building size={20} color="#ff7e00" />
  },
  {
    id: 'job-2',
    title: 'Sales Coordinator',
    category: 'Engineering',
    location: 'Hybrid',
    type: 'Full-time',
    desc: 'Spearhead structural designs for complex steel and concrete projects using cutting-edge BIM technologies.',
    icon: <Briefcase size={20} color="var(--primary-green)" />
  },
  {
    id: 'job-3',
    title: 'Design Engineering',
    category: 'Management',
    location: 'Site-Based',
    type: 'Full-time',
    desc: 'Oversee high-budget construction projects from inception to completion, ensuring excellence and safety.',
    icon: <CheckCircle2 size={20} color="#2575fc" />
  },
  {
    id: 'job-4',
    title: 'Project Engineering',
    category: 'Executive',
    location: 'Chennai',
    type: 'Full-time',
    desc: 'Lead the vision and strategic direction of Tesco Structure as we expand our footprint into global markets.',
    icon: <Building size={20} color="#ff7e00" />
  },
  {
    id: 'job-5',
    title: 'Project Coordinator',
    category: 'Engineering',
    location: 'Hybrid',
    type: 'Full-time',
    desc: 'Spearhead structural designs for complex steel and concrete projects using cutting-edge BIM technologies.',
    icon: <Briefcase size={20} color="var(--primary-green)" />
  },
  {
    id: 'job-6',
    title: 'Site Engineering',
    category: 'Management',
    location: 'Site-Based',
    type: 'Full-time',
    desc: 'Oversee high-budget construction projects from inception to completion, ensuring excellence and safety.',
    icon: <CheckCircle2 size={20} color="#2575fc" />
  },
  {
    id: 'job-7',
    title: 'Structural Engineering',
    category: 'Executive',
    location: 'Chennai',
    type: 'Full-time',
    desc: 'Lead the vision and strategic direction of Tesco Structure as we expand our footprint into global markets.',
    icon: <Building size={20} color="#ff7e00" />
  },
  {
    id: 'job-8',
    title: 'Techno Commercial Manager',
    category: 'Engineering',
    location: 'Hybrid',
    type: 'Full-time',
    desc: 'Spearhead structural designs for complex steel and concrete projects using cutting-edge BIM technologies.',
    icon: <Briefcase size={20} color="var(--primary-green)" />
  },
  {
    id: 'job-9',
    title: 'Business Development Associate',
    category: 'Management',
    location: 'Site-Based',
    type: 'Full-time',
    desc: 'Oversee high-budget construction projects from inception to completion, ensuring excellence and safety.',
    icon: <CheckCircle2 size={20} color="#2575fc" />
  },
  {
    id: 'job-10',
    title: 'Sales Manager',
    category: 'Executive',
    location: 'Chennai',
    type: 'Full-time',
    desc: 'Lead the vision and strategic direction of Tesco Structure as we expand our footprint into global markets.',
    icon: <Building size={20} color="#ff7e00" />
  },
  {
    id: 'job-11',
    title: 'Project Manager',
    category: 'Engineering',
    location: 'Hybrid',
    type: 'Full-time',
    desc: 'Spearhead structural designs for complex steel and concrete projects using cutting-edge BIM technologies.',
    icon: <Briefcase size={20} color="var(--primary-green)" />
  }
];

const Careers = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Project Manager',
    location: 'Chennai',
    experience: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'sending', message: 'Submitting your application...' });

    try {
      const payload = new FormData(formRef.current);
      payload.append('access_key', WEB3FORMS_KEY_CAREERS);

      const res = await fetch(WEB3FORMS_ENDPOINT, { method: 'POST', body: payload });
      const data = await res.json();

      if (data.success) {
        setStatus({ state: 'success', message: 'Thank you! Your application has been submitted successfully.' });
        setFormData({ name: '', phone: '', email: '', service: 'Project Manager', location: 'Chennai', experience: '', message: '' });
        formRef.current.reset();
      } else {
        setStatus({ state: 'error', message: 'Sorry, something went wrong. Please try again or email your resume directly.' });
      }
    } catch {
      setStatus({ state: 'error', message: 'Sorry, something went wrong. Please try again or email your resume directly.' });
    }
  };

  const handleApplyClick = (jobTitle) => {
    setFormData(prev => ({ ...prev, service: jobTitle }));
    const formElement = document.getElementById('apply-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="careers-page-container">
      {/* 1. Careers Hero Section */}
      <section className="careers-hero-section">
        <div className="careers-hero-left">
          <h1 className="careers-hero-title">
            Build Your Career<br />With Tesco<br />Structure
          </h1>
          <p className="careers-hero-desc">
            Join a team of visionary engineers and project managers shaping the skylines of tomorrow with structural integrity and sustainable innovation.
          </p>
          <div className="careers-hero-actions">
            <a href="#hiring-section" className="btn-orange">Apply Now</a>
            <a href="#hiring-section" className="btn-outline-dark">Explore Jobs</a>
          </div>
        </div>

        <div className="careers-hero-right-grid">
          {/* Top Left Floating Stats Image */}
          <div className="hero-grid-item item-1">
            <img src="/images/careers_hero_engineer.png" alt="Civil Engineer on Site" />
            <div className="floating-badge badge-top">
              <h4>30+</h4>
              <p>Team Members</p>
            </div>
          </div>

          {/* Top Right Concrete Image */}
          <div className="hero-grid-item item-2">
            <img src="/images/careers_under_construction.png" alt="Building Construction Structure" />
            <div className="floating-badge badge-middle">
              <h4>10+</h4>
              <p>Expert Leads</p>
            </div>
          </div>

          {/* Bottom meeting image spanning */}
          <div className="hero-grid-item item-3">
            <img src="/images/careers_office_meeting.png" alt="Office Project Alignment Meeting" />
            <div className="floating-badge badge-bottom">
              <h4>50+</h4>
              <p>Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Now Hiring Section */}
      <section className="now-hiring-section" id="hiring-section">
        <h2 className="now-hiring-title">Now Hiring</h2>
        
        <div className="jobs-list-grid">
          {jobOpenings.map((job) => (
            <div className="job-card" key={job.id}>
              <div className="job-card-header">
                <div className="job-icon-box">{job.icon}</div>
                <span className={`job-badge-tag tag-${job.category.toLowerCase()}`}>
                  {job.category}
                </span>
              </div>
              <h3 className="job-card-title">{job.title}</h3>
              
              <div className="job-meta-row">
                <span className="meta-item"><MapPin size={14} /> {job.location}</span>
                <span className="meta-item"><Clock size={14} /> {job.type}</span>
              </div>

              <p className="job-card-desc">{job.desc}</p>
              
              <button className="job-apply-btn" onClick={() => handleApplyClick(job.title)}>
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Apply Form Section */}
      <section className="careers-form-section" id="apply-form-section">
        <div className="careers-form-container">
          
          {/* Form Left Info block */}
          <div className="form-info-block">
            <h2 className="form-info-title">Apply for Your Dream Role</h2>
            <p className="form-info-desc">
              Join Tesco Structures and build the future with us. We value precision, safety, and modern efficiency in every brick we lay.
            </p>
            <div className="form-info-img-wrapper">
              <img src="/images/careers_apply_bottom.png" alt="Team Construction Alignment Reviewing Blueprints" />
            </div>
          </div>

          {/* Form Right Application inputs card */}
          <div className="form-inputs-card">
            <form className="careers-blueprint-form" ref={formRef} onSubmit={handleSubmit}>
              <input type="hidden" name="subject" value="New Job Application - Tesco Structures" />
              <input type="hidden" name="from_name" value="Tesco Structures Careers" />
              <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

              <div className="form-row">
                <div className="form-group half">
                  <label>FULL NAME</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group half">
                  <label>MOBILE NUMBER</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>EMAIL ADDRESS</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group half select-wrapper">
                  <label>APPLYING ROLE</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                  >
                    {jobOpenings.map(job => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group half select-wrapper">
                  <label>PREFERRED LOCATION</label>
                  <select 
                    name="location" 
                    value={formData.location} 
                    onChange={handleInputChange}
                    required
                  >
                    <option value="Chennai">Chennai</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Mumbai">Mumbai</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>YEARS OF EXPERIENCE</label>
                <input 
                  type="text" 
                  name="experience"
                  placeholder="e.g. 5" 
                  value={formData.experience}
                  onChange={handleInputChange}
                  required 
                />
              </div>

<div className="form-group">
                <label>COVER MESSAGE / ABOUT YOURSELF</label>
                <textarea 
                  name="message"
                  placeholder="Tell us about your architectural vision..." 
                  rows="3"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <button type="submit" className="submit-application-btn" disabled={status.state === 'sending'}>
                {status.state === 'sending' ? 'Submitting...' : 'Submit Application'}
              </button>

              {status.message && (
                <p className={`form-status form-status--${status.state}`}>{status.message}</p>
              )}

            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Careers;
