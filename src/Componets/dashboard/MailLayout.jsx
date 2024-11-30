import React,{useState,useEffect} from 'react';
import SideBar from './SideBar';
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
     <SideBar toggleMenu={toggleMenu} setToggle={setToggle} />
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
