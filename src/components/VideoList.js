import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const renderedList = videos.map(video => {
    return <VideoItem video={video} />;
  });
  //destructuring props to get the video prop
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
