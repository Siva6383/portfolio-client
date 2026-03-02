import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Invalid email';
    if (!form.message.trim()) errs.message = 'Message is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Simulate API call
    await new Promise(r => setTimeout(r, 1500));
    toast.success('Message sent! I\'ll get back to you soon. 📧');
    setForm({ name: '', email: '', subject: '', message: '' });
    setLoading(false);
  };

  return (
    <section className="section" id="contact" style={{ background:'rgba(99,102,241,0.02)' }}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Have a project in mind? Let's build something amazing together!</p>

        <div className="contact-grid">
          <div>
            <h3 style={{ fontSize:'20px', fontWeight:'700', marginBottom:'8px' }}>Let's Connect</h3>
            <p style={{ color:'var(--text-muted)', marginBottom:'32px', lineHeight:'1.7' }}>
              I'm open to freelance projects, collaborations, and full-time opportunities. Feel free to reach out!
            </p>

            <a href="mailto:kishore@example.com" className="contact-info-item">
              <div className="contact-icon"><FiMail color="white" /></div>
              <div>
                <div style={{ fontWeight:'600', marginBottom:'4px' }}>Email</div>
                <div style={{ fontSize:'14px', color:'var(--text-muted)' }}>kishore@example.com</div>
              </div>
            </a>
            <a href="https://github.com/kishoreshub" target="_blank" rel="noopener noreferrer" className="contact-info-item">
              <div className="contact-icon"><FiGithub color="white" /></div>
              <div>
                <div style={{ fontWeight:'600', marginBottom:'4px' }}>GitHub</div>
                <div style={{ fontSize:'14px', color:'var(--text-muted)' }}>github.com/kishoreshub</div>
              </div>
            </a>
            <a href="https://linkedin.com/in/kishore-s" target="_blank" rel="noopener noreferrer" className="contact-info-item">
              <div className="contact-icon"><FiLinkedin color="white" /></div>
              <div>
                <div style={{ fontWeight:'600', marginBottom:'4px' }}>LinkedIn</div>
                <div style={{ fontSize:'14px', color:'var(--text-muted)' }}>linkedin.com/in/kishore-s</div>
              </div>
            </a>
          </div>

          <div className="contact-form-card">
            <h3 style={{ fontSize:'18px', fontWeight:'700', marginBottom:'24px' }}>Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div>
                  <input className="form-input" placeholder="Your Name" value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})} />
                  {errors.name && <p style={{ color:'#ef4444', fontSize:'12px', marginTop:'-12px', marginBottom:'12px' }}>{errors.name}</p>}
                </div>
                <div>
                  <input className="form-input" placeholder="Your Email" value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})} />
                  {errors.email && <p style={{ color:'#ef4444', fontSize:'12px', marginTop:'-12px', marginBottom:'12px' }}>{errors.email}</p>}
                </div>
              </div>
              <input className="form-input" placeholder="Subject" value={form.subject}
                onChange={e => setForm({...form, subject: e.target.value})} />
              <textarea className="form-input" style={{ resize:'vertical', minHeight:'120px', fontFamily:'Inter, sans-serif' }}
                placeholder="Your Message" value={form.message}
                onChange={e => setForm({...form, message: e.target.value})} />
              {errors.message && <p style={{ color:'#ef4444', fontSize:'12px', marginTop:'-12px', marginBottom:'12px' }}>{errors.message}</p>}
              <button type="submit" className="btn btn-primary" style={{ width:'100%', justifyContent:'center' }} disabled={loading}>
                {loading ? <><span className="spinner" /> Sending...</> : <><FiSend /> Send Message</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;