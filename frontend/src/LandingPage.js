// Landing page component with navigation and search functionality
import React from 'react';
import logo from './assets/logo.png';
import './styles/LandingPage.styles.css';

const LandingPage = () => {
  return (
    <div className="container-fluid main-container">
      <nav className="nav-bar">
        <span className="nav-item">About us</span>
        <span className="nav-item">Our Vision</span>
        <img src={logo} alt="kindcart logo" className="logo" />
        <span className="nav-item">THE KIND CREW</span>
      </nav>

      <div className="content-center">
        <h1 className="main-title">
          Find your local food<br />
          pantry with your<br />
          zipcode.
        </h1>
        <div className="search-bar">
          <input type="text" placeholder="type your zipcode" />
          <span className="search-icon">🔍</span>
        </div>
        <div className="bottom-text">
          <p className="journey-text">Be part of our journey</p>
          <h2 className="crew-text">THE KIND CREW</h2>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;