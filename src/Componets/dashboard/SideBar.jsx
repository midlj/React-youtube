import React from 'react';

function SideBar({setToggle,toggleMenu}) {
  return (
   <>
    <aside className="sidebar">
        <div className="nav-section nav-left">
          <button className="nav-button menu-button" onClick={()=>setToggle(!toggleMenu)}>
            <i className="uil uil-times" />
          </button>
          <a href="#" className="nav-logo">
            <img
              src="/images/Desklog-logo.png"
              alt="Logo"
              className="logo-image"
            />
            <h2 className="logo-text">Desklog</h2>
          </a>
        </div>
        <div className="links-container">
          <div className="link-section">
            <a href="#" className="link-item">
              <i className="uil uil-estate" /> Home
            </a>
            <a href="#" className="link-item">
              <i className="uil uil-video" /> Shorts
            </a>
            <a href="#" className="link-item">
              <i className="uil uil-tv-retro" /> Subscriptions
            </a>
          </div>
          <div className="section-separator" />
          <div className="link-section">
            <h4 className="section-title">You</h4>
            <a href="#" className="link-item">
              <i className="uil uil-user-square" /> Your channel
            </a>
            <a href="#" className="link-item">
              <i className="uil uil-history" /> History
            </a>
            <a href="#" className="link-item">
              <i className="uil uil-clock" /> Watch later
            </a>
          </div>
          <div className="section-separator" />
          <div className="link-section">
            <h4 className="section-title">Explore</h4>
            <a href="#" className="link-item">
              <i className="uil uil-fire" /> Trending
            </a>
            <a href="#" className="link-item">
              <i className="uil uil-music" /> Music
            </a>
            <a href="#" className="link-item">
              <i className="uil uil-basketball" /> Gaming
            </a>
            <a href="#" className="link-item">
              <i className="uil uil-trophy" /> Sports
            </a>
          </div>
          <div className="section-separator" />
          <div className="link-section">
            <h4 className="section-title">More from YouTube</h4>
            <a href="#" className="link-item">
              <i className="uil uil-shield-plus" /> YouTube Plus
            </a>
            <a href="#" className="link-item">
              <i className="uil uil-headphones-alt" /> YouTube Music
            </a>
            <a href="#" className="link-item">
              <i className="uil uil-airplay" /> YouTube Kids
            </a>
          </div>
          <div className="section-separator" />
          <div className="link-section">
            <a href="#" className="link-item">
              <i className="uil uil-setting" /> Settings
            </a>
            <a href="#" className="link-item">
              <i className="uil uil-file-medical-alt" /> Report
            </a>
            <a href="#" className="link-item">
              <i className="uil uil-question-circle" /> Help
            </a>
            <a href="#" className="link-item">
              <i className="uil uil-exclamation-triangle" /> Feedback
            </a>
          </div>
        </div>
      </aside>
   </>
  );
}

export default SideBar;
