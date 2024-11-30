import React,{useState,useEffect} from 'react';

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
            <button className="nav-button search-button">
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
          <button className="nav-button menu-button">
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
        <div className="video-list">
          <a href="#" className="video-card">
            <div className="thumbnail-container">
              <img
                src="https://i.ytimg.com/vi/OORUHkgg4IM/maxresdefault.jpg"
                alt="Video Thumbnail"
                className="thumbnail"
              />
              <p className="duration">10:03</p>
            </div>
            <div className="video-info">
              <img
                src="https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj"
                alt="Channel Logo"
                className="icon"
              />
              <div className="video-details">
                <h2 className="title">
                  Top 10 Easy To Create JavaScript Games For Beginners
                </h2>
                <p className="channel-name">CodingNepal</p>
                <p className="views">27K Views • 4 months ago</p>
              </div>
            </div>
          </a>
          <a href="#" className="video-card">
            <div className="thumbnail-container">
              <img
                src="https://i.ytimg.com/vi/qOO6lVMhmGc/maxresdefault.jpg"
                alt="Video Thumbnail"
                className="thumbnail"
              />
              <p className="duration">23:45</p>
            </div>
            <div className="video-info">
              <img
                src="https://yt3.googleusercontent.com/LrCNrwOMkNOpLKnRl0GgvIQOgo1mR90oXa1pjbuSRIRBT3_FMTYUbdEllsUTxt7Wq8-qPOdd=s160-c-k-c0x00ffffff-no-rj"
                alt="Channel Logo"
                className="icon"
              />
              <div className="video-details">
                <h2 className="title">
                  How to make Responsive Card Slider in HTML CSS &amp;
                  JavaScript
                </h2>
                <p className="channel-name">CodingLab</p>
                <p className="views">42K Views • 1 year ago</p>
              </div>
            </div>
          </a>
          <a href="#" className="video-card">
            <div className="thumbnail-container">
              <img
                src="https://i.ytimg.com/vi/YEloDYy3DTg/maxresdefault.jpg"
                alt="Video Thumbnail"
                className="thumbnail"
              />
              <p className="duration">29:43</p>
            </div>
            <div className="video-info">
              <img
                src="https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj"
                alt="Channel Logo"
                className="icon"
              />
              <div className="video-details">
                <h2 className="title">
                  Create A Responsive Website with Login &amp; Registration Form
                  in HTML CSS and JavaScript
                </h2>
                <p className="channel-name">CodingNepal</p>
                <p className="views">68K Views • 9 months ago</p>
              </div>
            </div>
          </a>
          <a href="#" className="video-card">
            <div className="thumbnail-container">
              <img
                src="https://i.ytimg.com/vi/hSSdc8vKP1I/maxresdefault.jpg"
                alt="Video Thumbnail"
                className="thumbnail"
              />
              <p className="duration">38:45</p>
            </div>
            <div className="video-info">
              <img
                src="https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj"
                alt="Channel Logo"
                className="icon"
              />
              <div className="video-details">
                <h2 className="title">
                  Build Hangman Game in HTML CSS and JavaScript
                </h2>
                <p className="channel-name">CodingNepal</p>
                <p className="views">57K Views • 11 months ago</p>
              </div>
            </div>
          </a>
          <a href="#" className="video-card">
            <div className="thumbnail-container">
              <img
                src="https://i.ytimg.com/vi/coj-l7IrwGU/maxresdefault.jpg"
                alt="Video Thumbnail"
                className="thumbnail"
              />
              <p className="duration">19:27</p>
            </div>
            <div className="video-info">
              <img
                src="https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj"
                alt="Channel Logo"
                className="icon"
              />
              <div className="video-details">
                <h2 className="title">
                  How to Make Chrome Extension in HTML CSS &amp; JavaScript
                </h2>
                <p className="channel-name">CodingNepal</p>
                <p className="views">24K Views • 1 year ago</p>
              </div>
            </div>
          </a>
          <a href="#" className="video-card">
            <div className="thumbnail-container">
              <img
                src="https://i.ytimg.com/vi/6QE8dXq9SOE/maxresdefault.jpg"
                alt="Video Thumbnail"
                className="thumbnail"
              />
              <p className="duration">16:24</p>
            </div>
            <div className="video-info">
              <img
                src="https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj"
                alt="Channel Logo"
                className="icon"
              />
              <div className="video-details">
                <h2 className="title">
                  Create A Draggable Card Slider in HTML CSS and Vanilla
                  JavaScript
                </h2>
                <p className="channel-name">CodingNepal</p>
                <p className="views">14.2K Views • 4 days ago</p>
              </div>
            </div>
          </a>
          <a href="#" className="video-card">
            <div className="thumbnail-container">
              <img
                src="https://i.ytimg.com/vi/q4RgxiDM6v0/maxresdefault.jpg"
                alt="Video Thumbnail"
                className="thumbnail"
              />
              <p className="duration">37:13</p>
            </div>
            <div className="video-info">
              <img
                src="https://yt3.googleusercontent.com/LrCNrwOMkNOpLKnRl0GgvIQOgo1mR90oXa1pjbuSRIRBT3_FMTYUbdEllsUTxt7Wq8-qPOdd=s160-c-k-c0x00ffffff-no-rj"
                alt="Channel Logo"
                className="icon"
              />
              <div className="video-details">
                <h2 className="title">
                  How to make Responsive Image Slider in HTML CSS and JavaScript
                </h2>
                <p className="channel-name">CodingLab</p>
                <p className="views">1M Views • 1 year ago</p>
              </div>
            </div>
          </a>
          <a href="#" className="video-card">
            <div className="thumbnail-container">
              <img
                src="https://i.ytimg.com/vi/DLs1X9T1GcY/maxresdefault.jpg"
                alt="Video Thumbnail"
                className="thumbnail"
              />
              <p className="duration">9:27</p>
            </div>
            <div className="video-info">
              <img
                src="https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj"
                alt="Channel Logo"
                className="icon"
              />
              <div className="video-details">
                <h2 className="title">
                  Create Text Typing Effect in HTML CSS &amp; Vanilla JavaScript
                </h2>
                <p className="channel-name">CodingNepal</p>
                <p className="views">17K Views • 10 months ago</p>
              </div>
            </div>
          </a>
          <a href="#" className="video-card">
            <div className="thumbnail-container">
              <img
                src="https://i.ytimg.com/vi/PsNaoDhzQm0/maxresdefault.jpg"
                alt="Video Thumbnail"
                className="thumbnail"
              />
              <p className="duration">25:27</p>
            </div>
            <div className="video-info">
              <img
                src="https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj"
                alt="Channel Logo"
                className="icon"
              />
              <div className="video-details">
                <h2 className="title">
                  Create Responsive Image Slider in HTML CSS and JavaScript
                </h2>
                <p className="channel-name">CodingNepal</p>
                <p className="views">157K Views • 9 months ago</p>
              </div>
            </div>
          </a>
          <a href="#" className="video-card">
            <div className="thumbnail-container">
              <img
                src="https://i.ytimg.com/vi/20Qb7pNMv-4/maxresdefault.jpg"
                alt="Video Thumbnail"
                className="thumbnail"
              />
              <p className="duration">12:24</p>
            </div>
            <div className="video-info">
              <img
                src="https://yt3.googleusercontent.com/LrCNrwOMkNOpLKnRl0GgvIQOgo1mR90oXa1pjbuSRIRBT3_FMTYUbdEllsUTxt7Wq8-qPOdd=s160-c-k-c0x00ffffff-no-rj"
                alt="Channel Logo"
                className="icon"
              />
              <div className="video-details">
                <h2 className="title">
                  Make A Flipping Card UI Design in HTML &amp; CSS
                </h2>
                <p className="channel-name">CodingLab</p>
                <p className="views">85K Views • 2 months ago</p>
              </div>
            </div>
          </a>
          <a href="#" className="video-card">
            <div className="thumbnail-container">
              <img
                src="https://i.ytimg.com/vi/_RSaI2CxlXU/maxresdefault.jpg"
                alt="Video Thumbnail"
                className="thumbnail"
              />
              <p className="duration">30:20</p>
            </div>
            <div className="video-info">
              <img
                src="https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj"
                alt="Channel Logo"
                className="icon"
              />
              <div className="video-details">
                <h2 className="title">
                  Easy way to do Multiple File Uploading using HTML CSS and
                  JavaScript
                </h2>
                <p className="channel-name">CodingNepal</p>
                <p className="views">7.4K Views • 3 weeks ago</p>
              </div>
            </div>
          </a>
          <a href="#" className="video-card">
            <div className="thumbnail-container">
              <img
                src="https://i.ytimg.com/vi/cHkN82X3KNU/maxresdefault.jpg"
                alt="Video Thumbnail"
                className="thumbnail"
              />
              <p className="duration">11:13</p>
            </div>
            <div className="video-info">
              <img
                src="https://yt3.googleusercontent.com/LrCNrwOMkNOpLKnRl0GgvIQOgo1mR90oXa1pjbuSRIRBT3_FMTYUbdEllsUTxt7Wq8-qPOdd=s160-c-k-c0x00ffffff-no-rj"
                alt="Channel Logo"
                className="icon"
              />
              <div className="video-details">
                <h2 className="title">
                  Build A Responsive Calculator in HTML CSS &amp; JavaScript
                </h2>
                <p className="channel-name">CodingLab</p>
                <p className="views">30K Views • 2 years ago</p>
              </div>
            </div>
          </a>
          <a href="#" className="video-card">
            <div className="thumbnail-container">
              <img
                src="https://i.ytimg.com/vi/0_Lwi5ucGwM/maxresdefault.jpg"
                alt="Video Thumbnail"
                className="thumbnail"
              />
              <p className="duration">39:43</p>
            </div>
            <div className="video-info">
              <img
                src="https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj"
                alt="Channel Logo"
                className="icon"
              />
              <div className="video-details">
                <h2 className="title">
                  Build A Currency Converter using ReactJS
                </h2>
                <p className="channel-name">CodingNepal</p>
                <p className="views">7.2K • 2 weeks ago</p>
              </div>
            </div>
          </a>
          <a href="#" className="video-card">
            <div className="thumbnail-container">
              <img
                src="https://i.ytimg.com/vi/AyV954yKRSw/maxresdefault.jpg"
                alt="Video Thumbnail"
                className="thumbnail"
              />
              <p className="duration">1:37:13</p>
            </div>
            <div className="video-info">
              <img
                src="https://yt3.googleusercontent.com/LrCNrwOMkNOpLKnRl0GgvIQOgo1mR90oXa1pjbuSRIRBT3_FMTYUbdEllsUTxt7Wq8-qPOdd=s160-c-k-c0x00ffffff-no-rj"
                alt="Channel Logo"
                className="icon"
              />
              <div className="video-details">
                <h2 className="title">
                  Responsive Admin Dashboard Panel in HTML CSS and JavaScript
                </h2>
                <p className="channel-name">CodingLab</p>
                <p className="views">161K Views • 1 year ago</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </main>
  </div>
</div>
</>
  );
}

export default MailLayout;
