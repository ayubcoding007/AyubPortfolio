import { useState, useEffect } from 'react';
import { Mail, Phone, Briefcase, MapPin, Server } from 'lucide-react';

const Contact = () => {
  const BACKEND_URL = 'https://submit-form-api.vercel.app';
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contact: '',
    description: ''
  });
  const [message, setMessage] = useState({ text: '', type: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [backendStatus, setBackendStatus] = useState('Checking connection...');

  useEffect(() => {
    checkBackendConnection();
  }, []);

  const checkBackendConnection = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/contact`, { method: 'GET' });
      setBackendStatus('✓ Backend Connected');
    } catch (error) {
      setBackendStatus('⚠ Backend Connection Failed');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.fullName || !formData.email || !formData.description) {
      showMessage('Please fill in all required fields (marked with *).', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showMessage('Please enter a valid email address.', 'error');
      return;
    }

    setIsLoading(true);
    showMessage('Sending your message...', 'loading');

    try {
      const response = await fetch(`${BACKEND_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          contact: formData.contact || 'Not provided',
          description: formData.description
        })
      });

      const result = await response.json();

      if (response.ok) {
        showMessage('✅ Message sent successfully! I\'ll get back to you soon.', 'success');
        setFormData({ fullName: '', email: '', contact: '', description: '' });
        setBackendStatus('✓ Backend Active (Message Sent)');
      } else {
        const errorMsg = result.message || result.error || 'Failed to send message. Please try again.';
        showMessage(`Error: ${errorMsg}`, 'error');
      }
    } catch (error) {
      showMessage('⚠ Network error. The backend might be sleeping (Vercel free tier). Please try again in a moment.', 'error');
      setBackendStatus('⚠ Backend Connection Issue');
    } finally {
      setIsLoading(false);
    }
  };

  const showMessage = (text, type) => {
    setMessage({ text, type });
    
    if (type === 'success') {
      setTimeout(() => setMessage({ text: '', type: '' }), 8000);
    }
    if (type === 'error') {
      setTimeout(() => setMessage({ text: '', type: '' }), 5000);
    }
  };

  const contactInfo = [
    { icon: <Mail size={24} />, title: 'Email', text: 'ayubpop007@gmail.com' },
    { icon: <Phone size={24} />, title: 'Phone', text: '+91 9506279147' },
    { icon: <Briefcase size={24} />, title: 'Availability', text: 'Open to full-time opportunities' },
    { icon: <MapPin size={24} />, title: 'Location', text: 'Lucknow, Uttar Pradesh, India' },
    { icon: <Server size={24} />, title: 'Backend Status', text: backendStatus }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-container">
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-item">
                <div className="contact-icon">{info.icon}</div>
                <div>
                  <h3>{info.title}</h3>
                  <p className={info.title === 'Backend Status' ? 
                    (backendStatus.includes('✓') ? 'status-connected' : 'status-disconnected') : ''}>
                    {info.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  className="form-control"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact">Phone Number (Optional)</label>
                <input
                  type="tel"
                  id="contact"
                  className="form-control"
                  placeholder="Enter your phone number"
                  value={formData.contact}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Message *</label>
                <textarea
                  id="description"
                  className="form-control"
                  placeholder="Your message here..."
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="5"
                />
              </div>
              <button 
                type="submit" 
                className="btn" 
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
              
              {message.text && (
                <div className={`form-message ${message.type}`}>
                  {message.text}
                </div>
              )}
              
              <p className="form-note">
                <small>Form data is sent to my backend API at <code>https://api-ayubtechit.vercel.app</code> and I'll receive an email notification immediately.</small>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;