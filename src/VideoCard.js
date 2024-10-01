import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
 // Destructure snippet and statistics safely
 const { snippet = {}, statistics = {} } = info;
 const { channelTitle = '', title = '', thumbnails = {} } = snippet;
 const { medium = {} } = thumbnails;
 const { viewCount = 'No views available' } = statistics;  // Fallback for undefined viewCount


  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" alt="thumbnail" 
       src={medium.url || 'https://via.placeholder.com/150'} 
       />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-900 ">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
