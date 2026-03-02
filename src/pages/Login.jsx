import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff, FiLogIn } from 'react-icons/fi';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import { authAPI } from '../utils/api';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { login } = useAuth();
  const navigate = useNavigate();
  const GOOGLE_AUTH_URL = `${import.meta.env.VITE_API_URL}/auth/google`;

  const validate = () => {
    const errs = {};
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Invalid email';
    if (!form.password) errs.password = 'Password is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await authAPI.login(form);
      login(res.data.token, res.data.user);
      toast.success(res.data.message);
      navigate('/dashboard');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          <div className="logo-icon">🚀</div>
          <h1>Welcome Back</h1>
          <p>Sign in to your account</p>
        </div>

        <a href={GOOGLE_AUTH_URL} className="google-btn">
          <span className="google-icon" />
          Continue with Google
        </a>

        <div className="divider">or</div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="you@example.com" value={form.email}
              onChange={e => setForm({...form, email: e.target.value})} />
            {errors.email && <p style={{ color:'#ef4444', fontSize:'12px', marginTop:'4px' }}>{errors.email}</p>}
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type={showPass ? 'text' : 'password'} placeholder="Enter your password" value={form.password}
              onChange={e => setForm({...form, password: e.target.value})} />
            <button type="button" className="toggle-password" onClick={() => setShowPass(!showPass)}>
              {showPass ? <FiEyeOff /> : <FiEye />}
            </button>
            {errors.password && <p style={{ color:'#ef4444', fontSize:'12px', marginTop:'4px' }}>{errors.password}</p>}
          </div>

          <div style={{ display:'flex', justifyContent:'flex-end', marginBottom:'20px' }}>
            <Link to="/forgot-password" style={{ color:'var(--primary)', fontSize:'13px', textDecoration:'none', fontWeight:'600' }}>
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width:'100%', justifyContent:'center', padding:'14px' }} disabled={loading}>
            {loading ? <><span className="spinner" /> Signing in...</> : <><FiLogIn /> Sign In</>}
          </button>
        </form>

        <div className="auth-footer">
          Don't have an account? <Link to="/signup">Create one →</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;