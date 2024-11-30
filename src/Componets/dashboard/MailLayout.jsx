import React,{useState,useEffect} from 'react';
import VideoListLayout from './VideoListLayout';

function MailLayout() {
  const [toggleMenu,setToggle] = useState(false);
  useEffect(() => {
    console.log(toggleMenu);
    
  }, [toggleMenu]);
  return (
<>
<div className={!toggleMenu ? "sidebar-hidden" : ""}>
  <div className="container">
    {/* Header / Navbar */}
    <header>
      <nav className="navbar">
        <div className="nav-section nav-left">
          <button className="nav-button menu-button" onClick={()=>setToggle(!toggleMenu)}>
            <i className="uil uil-bars" />
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
        <div className="nav-section nav-center">
          <form action="#" className="search-form">
            <input
              type="search"
              placeholder="Search"
              className="search-input"
              required=""
            />
            <button className="nav-button search-button" >
              <i className="uil uil-search" />
            </button>
          </form>
          <button className="nav-button mic-button">
            <i className="uil uil-microphone" />
          </button>
        </div>
        <div className="nav-section nav-right">
          <button className="nav-button search-button">
            <i className="uil uil-search" />
          </button>
          <button className="nav-button theme-button">
            <i className="uil uil-moon" />
          </button>
          <img src="/images/user.jpg" alt="User Image" className="user-image" />
        </div>
      </nav>
    </header>
    {/* Main Layout */}
    <main className="main-layout">
      <div className="screen-overlay" />
      {/* Sidebar */}
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
      <div className="content-wrapper">
        {/* Category List */}
        <div className="category-list">
          <button className="category-button active">All</button>
          <button className="category-button">Website</button>
          <button className="category-button">Music</button>
          <button className="category-button">Gaming</button>
          <button className="category-button">Node.js</button>
          <button className="category-button">JavaScript</button>
          <button className="category-button">React.js</button>
          <button className="category-button">TypeScript</button>
          <button className="category-button">Coding</button>
          <button className="category-button">Next.js</button>
          <button className="category-button">Data analysis</button>
          <button className="category-button">Web design</button>
          <button className="category-button">HTML</button>
          <button className="category-button">Tailwind</button>
          <button className="category-button">CSS</button>
          <button className="category-button">Express.js</button>
        </div>
        {/* Video List */}
       <VideoListLayout/>
      </div>
    </main>
  </div>
</div>
</>
  );
}

export default MailLayout;
