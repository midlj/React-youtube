import React,{useState} from 'react';
function VideoListLayout() {
  
  const [tileData, setTileData] = useState([
    {
      thumb:'https://i.ytimg.com/vi/OORUHkgg4IM/maxresdefault.jpg',
      duration:'10:03',
      logoDp:'https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj'
    },
    {
      thumb:'https://i.ytimg.com/vi/qOO6lVMhmGc/maxresdefault.jpg',
      duration:'23:45',
      logoDp:'https://yt3.googleusercontent.com/LrCNrwOMkNOpLKnRl0GgvIQOgo1mR90oXa1pjbuSRIRBT3_FMTYUbdEllsUTxt7Wq8-qPOdd=s160-c-k-c0x00ffffff-no-rj'
    },
    {
      thumb:'https://i.ytimg.com/vi/qOO6lVMhmGc/maxresdefault.jpg',
      duration:'23:45',
      logoDp:'https://yt3.googleusercontent.com/LrCNrwOMkNOpLKnRl0GgvIQOgo1mR90oXa1pjbuSRIRBT3_FMTYUbdEllsUTxt7Wq8-qPOdd=s160-c-k-c0x00ffffff-no-rj'
    },
    {
      thumb:'https://i.ytimg.com/vi/qOO6lVMhmGc/maxresdefault.jpg',
      duration:'23:45',
      logoDp:'https://yt3.googleusercontent.com/LrCNrwOMkNOpLKnRl0GgvIQOgo1mR90oXa1pjbuSRIRBT3_FMTYUbdEllsUTxt7Wq8-qPOdd=s160-c-k-c0x00ffffff-no-rj'
    },
    {
      thumb:'https://i.ytimg.com/vi/qOO6lVMhmGc/maxresdefault.jpg',
      duration:'23:45',
      logoDp:'https://yt3.googleusercontent.com/LrCNrwOMkNOpLKnRl0GgvIQOgo1mR90oXa1pjbuSRIRBT3_FMTYUbdEllsUTxt7Wq8-qPOdd=s160-c-k-c0x00ffffff-no-rj'
    },
    {
      thumb:'https://i.ytimg.com/vi/qOO6lVMhmGc/maxresdefault.jpg',
      duration:'23:45',
      logoDp:'https://yt3.googleusercontent.com/LrCNrwOMkNOpLKnRl0GgvIQOgo1mR90oXa1pjbuSRIRBT3_FMTYUbdEllsUTxt7Wq8-qPOdd=s160-c-k-c0x00ffffff-no-rj'
    },
    {
      thumb:'https://i.ytimg.com/vi/qOO6lVMhmGc/maxresdefault.jpg',
      duration:'23:45',
      logoDp:'https://yt3.googleusercontent.com/LrCNrwOMkNOpLKnRl0GgvIQOgo1mR90oXa1pjbuSRIRBT3_FMTYUbdEllsUTxt7Wq8-qPOdd=s160-c-k-c0x00ffffff-no-rj'
    },
    {
      thumb:'https://i.ytimg.com/vi/qOO6lVMhmGc/maxresdefault.jpg',
      duration:'23:45',
      logoDp:'https://yt3.googleusercontent.com/LrCNrwOMkNOpLKnRl0GgvIQOgo1mR90oXa1pjbuSRIRBT3_FMTYUbdEllsUTxt7Wq8-qPOdd=s160-c-k-c0x00ffffff-no-rj'
    },
    {
      thumb:'https://i.ytimg.com/vi/qOO6lVMhmGc/maxresdefault.jpg',
      duration:'23:45',
      logoDp:'https://yt3.googleusercontent.com/LrCNrwOMkNOpLKnRl0GgvIQOgo1mR90oXa1pjbuSRIRBT3_FMTYUbdEllsUTxt7Wq8-qPOdd=s160-c-k-c0x00ffffff-no-rj'
    },
    {
      thumb:'https://i.ytimg.com/vi/qOO6lVMhmGc/maxresdefault.jpg',
      duration:'23:45',
      logoDp:'https://yt3.googleusercontent.com/LrCNrwOMkNOpLKnRl0GgvIQOgo1mR90oXa1pjbuSRIRBT3_FMTYUbdEllsUTxt7Wq8-qPOdd=s160-c-k-c0x00ffffff-no-rj'
    },
    {
      thumb:'https://i.ytimg.com/vi/qOO6lVMhmGc/maxresdefault.jpg',
      duration:'23:45',
      logoDp:'https://yt3.googleusercontent.com/LrCNrwOMkNOpLKnRl0GgvIQOgo1mR90oXa1pjbuSRIRBT3_FMTYUbdEllsUTxt7Wq8-qPOdd=s160-c-k-c0x00ffffff-no-rj'
    },
    {
      thumb:'https://i.ytimg.com/vi/qOO6lVMhmGc/maxresdefault.jpg',
      duration:'23:45',
      logoDp:'https://yt3.googleusercontent.com/LrCNrwOMkNOpLKnRl0GgvIQOgo1mR90oXa1pjbuSRIRBT3_FMTYUbdEllsUTxt7Wq8-qPOdd=s160-c-k-c0x00ffffff-no-rj'
    },
    {
      thumb:'https://i.ytimg.com/vi/qOO6lVMhmGc/maxresdefault.jpg',
      duration:'23:45',
      logoDp:'https://yt3.googleusercontent.com/LrCNrwOMkNOpLKnRl0GgvIQOgo1mR90oXa1pjbuSRIRBT3_FMTYUbdEllsUTxt7Wq8-qPOdd=s160-c-k-c0x00ffffff-no-rj'
    },
    {
      thumb:'https://i.ytimg.com/vi/qOO6lVMhmGc/maxresdefault.jpg',
      duration:'23:45',
      logoDp:'https://yt3.googleusercontent.com/LrCNrwOMkNOpLKnRl0GgvIQOgo1mR90oXa1pjbuSRIRBT3_FMTYUbdEllsUTxt7Wq8-qPOdd=s160-c-k-c0x00ffffff-no-rj'
    },
    {
      thumb:'https://i.ytimg.com/vi/qOO6lVMhmGc/maxresdefault.jpg',
      duration:'23:45',
      logoDp:'https://yt3.googleusercontent.com/LrCNrwOMkNOpLKnRl0GgvIQOgo1mR90oXa1pjbuSRIRBT3_FMTYUbdEllsUTxt7Wq8-qPOdd=s160-c-k-c0x00ffffff-no-rj'
    },
    {
      thumb:'https://i.ytimg.com/vi/qOO6lVMhmGc/maxresdefault.jpg',
      duration:'23:45',
      logoDp:'https://yt3.googleusercontent.com/LrCNrwOMkNOpLKnRl0GgvIQOgo1mR90oXa1pjbuSRIRBT3_FMTYUbdEllsUTxt7Wq8-qPOdd=s160-c-k-c0x00ffffff-no-rj'
    },
    {
      thumb:'https://i.ytimg.com/vi/qOO6lVMhmGc/maxresdefault.jpg',
      duration:'23:45',
      logoDp:'https://yt3.googleusercontent.com/LrCNrwOMkNOpLKnRl0GgvIQOgo1mR90oXa1pjbuSRIRBT3_FMTYUbdEllsUTxt7Wq8-qPOdd=s160-c-k-c0x00ffffff-no-rj'
    },
    {
      thumb:'https://i.ytimg.com/vi/qOO6lVMhmGc/maxresdefault.jpg',
      duration:'23:45',
      logoDp:'https://yt3.googleusercontent.com/LrCNrwOMkNOpLKnRl0GgvIQOgo1mR90oXa1pjbuSRIRBT3_FMTYUbdEllsUTxt7Wq8-qPOdd=s160-c-k-c0x00ffffff-no-rj'
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
