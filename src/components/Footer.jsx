import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-social">
          {[
            { icon: <FiGithub />, href: 'https://github.com/kishoreshub', label: 'GitHub' },
            { icon: <FiLinkedin />, href: 'https://linkedin.com/in/kishore-s', label: 'LinkedIn' },
            { icon: <FiMail />, href: 'mailto:kishore@example.com', label: 'Email' }
          ].map((social, i) => (
            <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="social-icon" title={social.label}>
              {social.icon}
            </a>
          ))}
        </div>
        <p style={{ color:'var(--text-muted)', fontSize:'14px' }}>
          Made with <FiHeart style={{ color:'#ef4444', display:'inline' }} /> by <strong style={{ color:'var(--primary)' }}>Kishore S</strong> — Full Stack Developer
        </p>
        <p style={{ color:'var(--text-muted)', fontSize:'12px', marginTop:'8px' }}>
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;