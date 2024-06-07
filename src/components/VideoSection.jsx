import React, { useState } from 'react';
import { FaPlayCircle , FaPauseCircle  } from "react-icons/fa";

const VideoSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <div className='container' style={{ position: 'relative', overflow: 'hidden', height: '690px',  }}>
      {isVideoPlaying ? (
        <iframe
          src="https://www.youtube.com/embed/rPu5Lti3Zj4?autoplay=1&loop=1&controls=0&mute=1"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ position: 'absolute', zIndex: -1, top: 0, left: 0, width: '100%', height: '100%' }}
        ></iframe>
      ) : (
        <img
          src="https://img.youtube.com/vi/rPu5Lti3Zj4/maxresdefault.jpg"
          alt="Video Thumbnail"
          style={{ position: 'absolute', zIndex: -1, top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
      )}

      <div
        className="content"
        style={{
          position: 'absolute',
          zIndex: 1,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: '#fff',
          padding: '0 20px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          width:"100%",
          height:"100%"
        }}
      >
        <button
          onClick={toggleVideo}
          style={{
            cursor: 'pointer',
            backgroundColor: 'transparent',
            border: 'none',
            padding: '0',
            marginBottom: '20px',
            transition: 'background-color 0.3s',
          }}
        >
          {isVideoPlaying ? 
            <FaPauseCircle style={{ fontSize: '4rem', color: '#fff' }} /> : 
            <FaPlayCircle style={{ fontSize: '4rem', color: '#fff' }} />} 
        </button>
        <h1 className='title-h2' style={{ width:"550px",fontSize:"55px"}}>Feel the authentic & original taste from us</h1>
      </div>
    </div>
  );
};

export default VideoSection;
