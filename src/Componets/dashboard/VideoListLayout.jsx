import React,{useState} from 'react';
function VideoListLayout() {
  
  const [tileData, setTileData] = useState([
    {
      thumb:'https://desklog.io/wp-content/themes/desklog/assets/images/image-not-found.png',
      duration:'10:03',
      logoDp:'/images/Desklog-logo.png'
    },
    {
      thumb:'https://desklog.io/wp-content/themes/desklog/assets/images/image-not-found.png',
      duration:'23:45',
      logoDp:'/images/Desklog-logo.png'
    },
    {
      thumb:'https://desklog.io/wp-content/themes/desklog/assets/images/image-not-found.png',
      duration:'23:45',
      logoDp:'/images/Desklog-logo.png'
    },
    {
      thumb:'https://desklog.io/wp-content/themes/desklog/assets/images/image-not-found.png',
      duration:'23:45',
      logoDp:'/images/Desklog-logo.png'
    },
    {
      thumb:'https://desklog.io/wp-content/themes/desklog/assets/images/image-not-found.png',
      duration:'23:45',
      logoDp:'/images/Desklog-logo.png'
    },
    {
      thumb:'https://desklog.io/wp-content/themes/desklog/assets/images/image-not-found.png',
      duration:'23:45',
      logoDp:'/images/Desklog-logo.png'
    },
    {
      thumb:'https://desklog.io/wp-content/themes/desklog/assets/images/image-not-found.png',
      duration:'23:45',
      logoDp:'/images/Desklog-logo.png'
    },
    {
      thumb:'https://desklog.io/wp-content/themes/desklog/assets/images/image-not-found.png',
      duration:'23:45',
      logoDp:'/images/Desklog-logo.png'
    },
    {
      thumb:'https://desklog.io/wp-content/themes/desklog/assets/images/image-not-found.png',
      duration:'23:45',
      logoDp:'/images/Desklog-logo.png'
    },
    {
      thumb:'https://desklog.io/wp-content/themes/desklog/assets/images/image-not-found.png',
      duration:'23:45',
      logoDp:'/images/Desklog-logo.png'
    },
    {
      thumb:'https://desklog.io/wp-content/themes/desklog/assets/images/image-not-found.png',
      duration:'23:45',
      logoDp:'/images/Desklog-logo.png'
    },
    {
      thumb:'https://desklog.io/wp-content/themes/desklog/assets/images/image-not-found.png',
      duration:'23:45',
      logoDp:'/images/Desklog-logo.png'
    },
    {
      thumb:'https://desklog.io/wp-content/themes/desklog/assets/images/image-not-found.png',
      duration:'23:45',
      logoDp:'/images/Desklog-logo.png'
    },
    {
      thumb:'https://desklog.io/wp-content/themes/desklog/assets/images/image-not-found.png',
      duration:'23:45',
      logoDp:'/images/Desklog-logo.png'
    },
    {
      thumb:'https://desklog.io/wp-content/themes/desklog/assets/images/image-not-found.png',
      duration:'23:45',
      logoDp:'/images/Desklog-logo.png'
    },
    {
      thumb:'https://desklog.io/wp-content/themes/desklog/assets/images/image-not-found.png',
      duration:'23:45',
      logoDp:'/images/Desklog-logo.png'
    },
    {
      thumb:'https://desklog.io/wp-content/themes/desklog/assets/images/image-not-found.png',
      duration:'23:45',
      logoDp:'/images/Desklog-logo.png'
    },
    {
      thumb:'https://desklog.io/wp-content/themes/desklog/assets/images/image-not-found.png',
      duration:'23:45',
      logoDp:'/images/Desklog-logo.png'
    },
  ]);
  return (
   <>
    <div className="video-list">
      {tileData.map((val,ind)=>(
          <a href="#" key={ind} className="video-card">
            <div className="thumbnail-container">
              <img
                src={val.thumb}
                alt="Video Thumbnail"
                className="thumbnail"
              />
              <p className="duration">{val.duration}</p>
            </div>
            <div className="video-info">
              <img
                src={val.logoDp}
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
      ))}
        </div>
   </>
  );
}

export default VideoListLayout;
