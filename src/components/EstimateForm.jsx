import { useState, useRef } from 'react';
import { WEB3FORMS_KEY_SALES, WEB3FORMS_ENDPOINT } from '../web3FormsConfig';
import './EstimateForm.css';

const EstimateForm = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'sending', message: 'Sending your request...' });

    try {
      const payload = new FormData(formRef.current);
      payload.append('access_key', WEB3FORMS_KEY_SALES);

      const res = await fetch(WEB3FORMS_ENDPOINT, { method: 'POST', body: payload });
      const data = await res.json();

      if (data.success) {
        setStatus({ state: 'success', message: 'Thank you! Your estimate request has been sent.' });
        formRef.current.reset();
      } else {
        setStatus({ state: 'error', message: 'Sorry, something went wrong. Please try again or email us directly.' });
      }
    } catch {
      setStatus({ state: 'error', message: 'Sorry, something went wrong. Please try again or email us directly.' });
    }
  };

  return (
    <div className="estimate-card">
      <div className="estimate-header">
        <h2>Request Your Site Estimate</h2>
        <p>Get a custom design, cost range & project timeline</p>
      </div>

      <form className="estimate-form" ref={formRef} onSubmit={handleSubmit}>
        <input type="hidden" name="subject" value="Site Estimate Request - Tesco Structures" />
        <input type="hidden" name="from_name" value="Tesco Structures Website" />
        <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

        <div className="form-row">
          <input type="text" name="name" placeholder="Your Name" className="form-input half" required />
          <input type="tel" name="phone" placeholder="Phone Number" className="form-input half" required />
        </div>

        <input type="email" name="email" placeholder="Email Address" className="form-input" required />

        <select name="service" className="form-input form-select" defaultValue="" required>
          <option value="" disabled>Service</option>
          <option value="peb">Pre-Engineered Building (PEB)</option>
          <option value="tensile">Tensile Roofing</option>
          <option value="civil">Civil Construction</option>
          <option value="architectural">Architectural Design & Structural Consultancy</option>
          <option value="roofing">All Type of Roofing</option>
        </select>

        <input type="text" name="location" placeholder="Project Location" className="form-input" />

        <textarea
          name="message"
          placeholder="Project Requirements (size, budget, timeline...)"
          className="form-input form-textarea"
          rows="4"
        ></textarea>

        <button type="submit" className="submit-btn" disabled={status.state === 'sending'}>
          {status.state === 'sending' ? 'Sending...' : 'Get a Free Quote'}
        </button>

        {status.message && (
          <p className={`form-status form-status--${status.state}`}>{status.message}</p>
        )}
      </form>
    </div>
  );
};

export default EstimateForm;
