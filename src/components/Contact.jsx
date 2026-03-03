import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiLock } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import API from '../utils/api';

const Contact = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
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
    if (!isAuthenticated) {
      toast.error('Please login to send a message');
      navigate('/login');
      return;
    }
    if (!validate()) return;
    setLoading(true);
    try {
      await API.post('/contact/send', form);
      toast.success('Message sent! I\'ll get back to you soon. 📧');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section" id="contact" style={{ background: 'rgba(212,175,55,0.01)' }}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="gold-line" />

        <div className="contact-grid">
          {/* Info Side */}
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '8px' }}>Let's Connect</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '28px', lineHeight: '1.8', fontSize: '14px' }}>
              Open to freelance projects, collaborations, and full-time opportunities. Drop me a message!
            </p>

            {[
              { icon: <FiMail />, label: 'Email', value: 'sivaharish638349@gmail.com', href: 'mailto:sivaharish638349@gmail.com' },
              { icon: <FiGithub />, label: 'GitHub', value: 'github.com/Siva6383', href: 'https://github.com/Siva6383' },
              { icon: <FiLinkedin />, label: 'LinkedIn', value: 'linkedin.com/in/kishore-s', href: 'https://linkedin.com/in/kishore-s' },
            ].map((item, i) => (
              <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="contact-info-item">
                <div className="contact-icon">{item.icon}</div>
                <div>
                  <div style={{ fontWeight: '600', fontSize: '14px', marginBottom: '3px' }}>{item.label}</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{item.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Form Side */}
          <div className="contact-form-card">
            {!isAuthenticated && (
              <div style={{
                padding: '16px 20px',
                background: 'rgba(212,175,55,0.07)',
                border: '1px solid rgba(212,175,55,0.25)',
                borderRadius: '12px',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}>
                <FiLock color="var(--gold)" size={18} />
                <div>
                  <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--gold)', marginBottom: '2px' }}>
                    Login Required
                  </p>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                    You need to{' '}
                    <span
                      onClick={() => navigate('/login')}
                      style={{ color: 'var(--gold)', cursor: 'pointer', fontWeight: '700', textDecoration: 'underline' }}
                    >
                      sign in
                    </span>{' '}
                    to send a message.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div>
                  <input className="form-input" placeholder="Your Name" value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  {errors.name && <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '-10px', marginBottom: '12px' }}>{errors.name}</p>}
                </div>
                <div>
                  <input className="form-input" placeholder="Your Email" value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  {errors.email && <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '-10px', marginBottom: '12px' }}>{errors.email}</p>}
                </div>
              </div>

              <input className="form-input" placeholder="Subject" value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })} />

              <textarea className="form-input" placeholder="Your Message..."
                value={form.message} style={{ resize: 'vertical', minHeight: '120px' }}
                onChange={(e) => setForm({ ...form, message: e.target.value })} />
              {errors.message && <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '-10px', marginBottom: '12px' }}>{errors.message}</p>}

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center', padding: '14px' }}
                disabled={loading}
              >
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