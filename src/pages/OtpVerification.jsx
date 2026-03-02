import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FiArrowLeft, FiRefreshCw } from 'react-icons/fi';
import { authAPI } from '../utils/api';

const OtpVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(300); // 5 min
  const inputs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  useEffect(() => {
    if (!email) { navigate('/forgot-password'); return; }
    const timer = setInterval(() => {
      setCountdown(prev => { if (prev <= 1) { clearInterval(timer); return 0; } return prev - 1; });
    }, 1000);
    return () => clearInterval(timer);
  }, [email, navigate]);

  const formatTime = (s) => `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;

  const handleChange = (val, idx) => {
    if (!/^\d*$/.test(val)) return;
    const newOtp = [...otp];
    newOtp[idx] = val.slice(-1);
    setOtp(newOtp);
    if (val && idx < 5) inputs.current[idx+1]?.focus();
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === 'Backspace' && !otp[idx] && idx > 0) inputs.current[idx-1]?.focus();
  };

  const handlePaste = (e) => {
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0,6);
    if (pasted.length === 6) {
      setOtp(pasted.split(''));
      inputs.current[5]?.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpString = otp.join('');
    if (otpString.length !== 6) { toast.error('Please enter all 6 digits'); return; }
    if (countdown === 0) { toast.error('OTP expired. Please request a new one.'); return; }
    setLoading(true);
    try {
      const res = await authAPI.verifyOtp({ email, otp: otpString });
      toast.success(res.data.message);
      navigate('/reset-password', { state: { resetToken: res.data.resetToken } });
    } catch (err) {
      toast.error(err.response?.data?.message || 'Invalid OTP');
      setOtp(['','','','','','']);
      inputs.current[0]?.focus();
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    try {
      await authAPI.forgotPassword(email);
      toast.success('New OTP sent!');
      setCountdown(300);
      setOtp(['','','','','','']);
      inputs.current[0]?.focus();
    } catch (err) {
      toast.error('Failed to resend OTP');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          <div className="logo-icon">📱</div>
          <h1>Verify OTP</h1>
          <p>Sent to <strong style={{ color:'var(--primary)' }}>{email}</strong></p>
        </div>

        <div style={{ textAlign:'center', marginBottom:'28px' }}>
          <div style={{ fontSize:'28px', fontWeight:'800', fontFamily:'monospace', color: countdown < 60 ? '#ef4444' : 'var(--primary)' }}>
            {formatTime(countdown)}
          </div>
          <p style={{ fontSize:'13px', color:'var(--text-muted)', marginTop:'4px' }}>
            {countdown === 0 ? '⚠️ OTP Expired' : '⏰ Time remaining'}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ display:'flex', gap:'10px', justifyContent:'center', marginBottom:'28px' }}>
            {otp.map((digit, i) => (
              <input
                key={i}
                ref={el => inputs.current[i] = el}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={e => handleChange(e.target.value, i)}
                onKeyDown={e => handleKeyDown(e, i)}
                onPaste={handlePaste}
                style={{
                  width:'52px', height:'58px', textAlign:'center', fontSize:'22px', fontWeight:'800',
                  fontFamily:'monospace', background:'var(--glass)', border:`2px solid ${digit ? 'var(--primary)' : 'var(--border)'}`,
                  borderRadius:'12px', color:'var(--text)', outline:'none', transition:'all 0.2s'
                }}
              />
            ))}
          </div>

          <button type="submit" className="btn btn-primary" style={{ width:'100%', justifyContent:'center', padding:'14px' }} disabled={loading || countdown === 0}>
            {loading ? <><span className="spinner" /> Verifying...</> : '✅ Verify OTP'}
          </button>
        </form>

        <div style={{ textAlign:'center', marginTop:'20px' }}>
          <button onClick={handleResend} style={{ background:'none', border:'none', color:'var(--primary)', cursor:'pointer', fontSize:'14px', fontWeight:'600', display:'inline-flex', alignItems:'center', gap:'6px' }}>
            <FiRefreshCw size={14} /> Resend OTP
          </button>
        </div>

        <div className="auth-footer">
          <Link to="/login" style={{ display:'inline-flex', alignItems:'center', gap:'6px', color:'var(--primary)', textDecoration:'none', fontWeight:'600' }}>
            <FiArrowLeft /> Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;