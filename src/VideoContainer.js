import React, { useState, useEffect } from "react";

import { YOUTUBE_API_KEY } from "./utils/constants";
import VideoCard,{ AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_KEY);
    const json = await data.json();
    console.log(json.items);
    setvideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {/* <VideoCard info={videos[0]} /> */}

      {videos[0] && <AdVideoCard info={videos[0]} />} 

      {videos.map((video) => (
        <Link key={video.id} to={`/watch?v=${video.id}`}>
          <VideoCard  info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
