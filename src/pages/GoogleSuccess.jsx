import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const GoogleSuccess = () => {
  const [params] = useSearchParams();
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const token = params.get('token');
    const name = params.get('name');
    const email = params.get('email');
    const id = params.get('id');

    if (token && name && email) {
      login(token, { id, name, email });
      toast.success(`Welcome, ${name}! 👋`);
      navigate('/dashboard');
    } else {
      toast.error('Google login failed. Please try again.');
      navigate('/login');
    }
  }, []);

  return (
    <div style={{ display:'flex', alignItems:'center', justifyContent:'center', height:'100vh', flexDirection:'column', gap:'16px' }}>
      <div className="spinner" style={{ width:'48px', height:'48px' }} />
      <p style={{ color:'var(--text-muted)' }}>Completing Google Sign-In...</p>
    </div>
  );
};

export default GoogleSuccess;