import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMail, FiArrowLeft, FiSend } from 'react-icons/fi';
import toast from 'react-hot-toast';
import { authAPI } from '../utils/api';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    setLoading(true);
    try {
      const res = await authAPI.forgotPassword(email);
      toast.success(res.data.message);
      navigate('/verify-otp', { state: { email } });
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          <div className="logo-icon">🔑</div>
          <h1>Forgot Password?</h1>
          <p>No worries — we'll send you an OTP</p>
        </div>

        <div style={{ background:'rgba(102,126,234,0.08)', border:'1px solid rgba(102,126,234,0.2)', borderRadius:'12px', padding:'16px', marginBottom:'24px', display:'flex', gap:'12px', alignItems:'flex-start' }}>
          <FiMail color="var(--primary)" size={18} style={{ marginTop:'2px', flexShrink:0 }} />
          <p style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:'1.6' }}>
            Enter your registered email. We'll send a 6-digit OTP valid for <strong style={{ color:'var(--text)' }}>5 minutes</strong>.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="you@example.com" value={email}
              onChange={e => setEmail(e.target.value)} />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width:'100%', justifyContent:'center', padding:'14px' }} disabled={loading}>
            {loading ? <><span className="spinner" /> Sending OTP...</> : <><FiSend /> Send OTP</>}
          </button>
        </form>

        <div className="auth-footer">
          <Link to="/login" style={{ display:'inline-flex', alignItems:'center', gap:'6px', color:'var(--primary)', textDecoration:'none', fontWeight:'600' }}>
            <FiArrowLeft /> Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;