import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiUser, FiLogOut, FiHome, FiMail, FiCalendar, FiShield } from 'react-icons/fi';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import { authAPI } from '../utils/api';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await authAPI.getProfile();
        setProfile(res.data.user);
      } catch {
        toast.error('Failed to load profile');
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/');
  };

  const displayUser = profile || user;

  return (
    <div style={{ minHeight:'100vh', background:'var(--bg)', padding:'0' }}>
      {/* Header */}
      <div style={{ background:'var(--glass)', backdropFilter:'blur(20px)', borderBottom:'1px solid var(--border)', padding:'16px 0', position:'sticky', top:0, zIndex:100 }}>
        <div className="container" style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <Link to="/" style={{ textDecoration:'none' }}>
            <span style={{ fontSize:'22px', fontWeight:'800', background:'var(--gradient)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>KS Portfolio</span>
          </Link>
          <div style={{ display:'flex', gap:'12px' }}>
            <Link to="/" className="btn btn-outline" style={{ padding:'8px 16px', fontSize:'13px' }}>
              <FiHome size={14} /> Home
            </Link>
            <button onClick={handleLogout} className="btn btn-primary" style={{ padding:'8px 16px', fontSize:'13px' }}>
              <FiLogOut size={14} /> Logout
            </button>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="container" style={{ paddingTop:'60px', paddingBottom:'60px' }}>
        {loading ? (
          <div style={{ display:'flex', justifyContent:'center', alignItems:'center', height:'300px' }}>
            <div className="spinner" style={{ width:'48px', height:'48px' }} />
          </div>
        ) : (
          <>
            {/* Welcome */}
            <div style={{ textAlign:'center', marginBottom:'48px' }}>
              <div style={{ width:'80px', height:'80px', background:'var(--gradient)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'32px', margin:'0 auto 16px', boxShadow:'0 10px 30px rgba(102,126,234,0.4)' }}>
                {displayUser?.name?.[0]?.toUpperCase()}
              </div>
              <h1 style={{ fontSize:'28px', fontWeight:'800', marginBottom:'8px' }}>
                Welcome back, <span style={{ background:'var(--gradient)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>{displayUser?.name}</span>! 👋
              </h1>
              <p style={{ color:'var(--text-muted)' }}>You're logged into your portfolio dashboard</p>
            </div>

            {/* Stats Cards */}
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))', gap:'20px', marginBottom:'40px' }}>
              {[
                { icon:<FiUser />, label:'Account Name', value: displayUser?.name || '—', color:'#667eea' },
                { icon:<FiMail />, label:'Email Address', value: displayUser?.email || '—', color:'#f093fb' },
                { icon:<FiShield />, label:'Auth Method', value: displayUser?.googleId ? 'Google OAuth' : 'Email/Password', color:'#43e97b' },
                { icon:<FiCalendar />, label:'Member Since', value: displayUser?.createdAt ? new Date(displayUser.createdAt).toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' }) : '—', color:'#f5576c' }
              ].map((stat, i) => (
                <div key={i} className="glass-card" style={{ padding:'28px' }}>
                  <div style={{ width:'44px', height:'44px', background:`${stat.color}20`, border:`1px solid ${stat.color}40`, borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', color:stat.color, fontSize:'18px', marginBottom:'16px' }}>
                    {stat.icon}
                  </div>
                  <p style={{ fontSize:'12px', fontWeight:'600', color:'var(--text-muted)', textTransform:'uppercase', letterSpacing:'0.5px', marginBottom:'6px' }}>{stat.label}</p>
                  <p style={{ fontSize:'15px', fontWeight:'700', wordBreak:'break-word' }}>{stat.value}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ textAlign:'center', padding:'40px', background:'var(--glass)', border:'1px solid var(--glass-border)', borderRadius:'20px', backdropFilter:'blur(12px)' }}>
              <h2 style={{ fontSize:'22px', fontWeight:'800', marginBottom:'12px' }}>🎉 Authentication System Working!</h2>
              <p style={{ color:'var(--text-muted)', marginBottom:'24px' }}>Your JWT + MongoDB auth is fully functional. Explore your portfolio!</p>
              <Link to="/" className="btn btn-primary">
                <FiHome /> View Portfolio
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;