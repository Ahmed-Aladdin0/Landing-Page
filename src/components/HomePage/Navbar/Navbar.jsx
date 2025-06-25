import React from 'react';

export default function Navbar() {
  return (
    <nav 
      className={`navbar navbar-expand-lg fixed-top bg-white shadow-sm`}
      style={{
        transition: 'all 0.3s ease',
        backgroundColor: 'white',
      }}
    >
      <div className="container">
        <a 
          className="navbar-brand fw-bold" 
          href="/" 
          style={{ 
            fontSize: '1.8rem',
            color: '#0d6efd',
            letterSpacing: '-0.5px'
          }}
        >
          Citio
        </a>

        <button 
          className="navbar-toggler border-0 shadow-none" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a 
                className="nav-link px-3 fw-medium" 
                href="/"
                style={{ color: '#333', fontSize: '0.95rem' }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link px-3 fw-medium" 
                href="/features"
                style={{ color: '#333', fontSize: '0.95rem' }}
              >
                Features
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link px-3 fw-medium" 
                href="/how-it-works"
                style={{ color: '#333', fontSize: '0.95rem' }}
              >
                How It Works
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link px-3 fw-medium" 
                href="/about"
                style={{ color: '#333', fontSize: '0.95rem' }}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link px-3 fw-medium" 
                href="/contact"
                style={{ color: '#333', fontSize: '0.95rem' }}
              >
                Contact
              </a>
            </li>
            <li className="nav-item ms-3">
              <button 
                className="btn btn-primary rounded-pill px-4 py-2 fw-medium"
                style={{ fontSize: '0.95rem' }}
              >
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}