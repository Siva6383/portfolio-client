import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { FiEye, FiEyeOff, FiLock, FiArrowLeft } from 'react-icons/fi';
import toast from 'react-hot-toast';
import { authAPI } from '../utils/api';

const ResetPassword = () => {
  const [form, setForm] = useState({ password: '', confirm: '' });
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const resetToken = location.state?.resetToken;

  if (!resetToken) {
    navigate('/forgot-password');
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password.length < 6) { toast.error('Password must be at least 6 characters'); return; }
    if (form.password !== form.confirm) { toast.error('Passwords do not match'); return; }
    setLoading(true);
    try {
      const res = await authAPI.resetPassword({ resetToken, newPassword: form.password });
      toast.success(res.data.message);
      navigate('/login');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to reset password');
      navigate('/forgot-password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          <div className="logo-icon">🔒</div>
          <h1>Reset Password</h1>
          <p>Create your new secure password</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>New Password</label>
            <input type={showPass ? 'text' : 'password'} placeholder="Create a strong password" value={form.password}
              onChange={e => setForm({...form, password: e.target.value})} />
            <button type="button" className="toggle-password" onClick={() => setShowPass(!showPass)}>
              {showPass ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          <div className="input-group">
            <label>Confirm New Password</label>
            <input type={showConfirm ? 'text' : 'password'} placeholder="Confirm your password" value={form.confirm}
              onChange={e => setForm({...form, confirm: e.target.value})} />
            <button type="button" className="toggle-password" onClick={() => setShowConfirm(!showConfirm)}>
              {showConfirm ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          {form.confirm && form.password !== form.confirm && (
            <p style={{ color:'#ef4444', fontSize:'12px', marginTop:'-12px', marginBottom:'16px' }}>Passwords do not match</p>
          )}

          <button type="submit" className="btn btn-primary" style={{ width:'100%', justifyContent:'center', padding:'14px', marginTop:'8px' }} disabled={loading}>
            {loading ? <><span className="spinner" /> Updating...</> : <><FiLock /> Reset Password</>}
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

export default ResetPassword;