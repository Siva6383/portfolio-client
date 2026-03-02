import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff, FiUserPlus } from 'react-icons/fi';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import { authAPI } from '../utils/api';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { login } = useAuth();
  const navigate = useNavigate();
  const GOOGLE_AUTH_URL = `${import.meta.env.VITE_API_URL}/auth/google`;

  const getPasswordStrength = (pass) => {
    if (!pass) return null;
    if (pass.length < 6) return { label: 'Too Short', color: '#ef4444', width: '25%' };
    if (pass.length < 8 || !/\d/.test(pass)) return { label: 'Weak', color: '#f97316', width: '50%' };
    if (!/[!@#$%^&*]/.test(pass)) return { label: 'Medium', color: '#eab308', width: '75%' };
    return { label: 'Strong 💪', color: '#22c55e', width: '100%' };
  };

  const strength = getPasswordStrength(form.password);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Invalid email';
    if (!form.password) errs.password = 'Password is required';
    else if (form.password.length < 6) errs.password = 'Min 6 characters';
    if (form.password !== form.confirm) errs.confirm = 'Passwords do not match';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await authAPI.signup({ name: form.name, email: form.email, password: form.password });
      login(res.data.token, res.data.user);
      toast.success(res.data.message);
      navigate('/dashboard');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          <div className="logo-icon">✨</div>
          <h1>Create Account</h1>
          <p>Join the portfolio community</p>
        </div>

        <a href={GOOGLE_AUTH_URL} className="google-btn">
          <span className="google-icon" />
          Continue with Google
        </a>

        <div className="divider">or</div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="Kishore S" value={form.name}
              onChange={e => setForm({...form, name: e.target.value})} />
            {errors.name && <p style={{ color:'#ef4444', fontSize:'12px', marginTop:'4px' }}>{errors.name}</p>}
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="you@example.com" value={form.email}
              onChange={e => setForm({...form, email: e.target.value})} />
            {errors.email && <p style={{ color:'#ef4444', fontSize:'12px', marginTop:'4px' }}>{errors.email}</p>}
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type={showPass ? 'text' : 'password'} placeholder="Create a strong password" value={form.password}
              onChange={e => setForm({...form, password: e.target.value})} />
            <button type="button" className="toggle-password" onClick={() => setShowPass(!showPass)}>
              {showPass ? <FiEyeOff /> : <FiEye />}
            </button>
            {strength && (
              <div style={{ marginTop:'8px' }}>
                <div style={{ height:'4px', background:'rgba(255,255,255,0.1)', borderRadius:'4px', overflow:'hidden' }}>
                  <div style={{ height:'100%', width:strength.width, background:strength.color, transition:'all 0.3s', borderRadius:'4px' }} />
                </div>
                <p style={{ fontSize:'12px', color:strength.color, marginTop:'4px' }}>{strength.label}</p>
              </div>
            )}
            {errors.password && <p style={{ color:'#ef4444', fontSize:'12px', marginTop:'4px' }}>{errors.password}</p>}
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input type={showConfirm ? 'text' : 'password'} placeholder="Confirm your password" value={form.confirm}
              onChange={e => setForm({...form, confirm: e.target.value})} />
            <button type="button" className="toggle-password" onClick={() => setShowConfirm(!showConfirm)}>
              {showConfirm ? <FiEyeOff /> : <FiEye />}
            </button>
            {errors.confirm && <p style={{ color:'#ef4444', fontSize:'12px', marginTop:'4px' }}>{errors.confirm}</p>}
          </div>

          <button type="submit" className="btn btn-primary" style={{ width:'100%', justifyContent:'center', padding:'14px', marginTop:'8px' }} disabled={loading}>
            {loading ? <><span className="spinner" /> Creating account...</> : <><FiUserPlus /> Create Account</>}
          </button>
        </form>

        <div className="auth-footer">
          Already have an account? <Link to="/login">Sign in →</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;