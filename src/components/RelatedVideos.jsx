import { useState } from "react";
import Video from "./Video";
import ChannelComponent from "./ChannelComponent";
import SingelPlaylist from "./SingelPlaylist";
function RelatedVideos({ videos, title }) {
  return (
    <div className="w-full">
      <p className="text-red-500 text-xl font-medium pl-4">
        {title} <span className="text-white"> Videos </span>{" "}
      </p>

      <div className="flex flex-col items-start justify-start text-white w-full  sm:gap-2 lg:gap-3 ">
        {videos?.map((el, id) => {
          if (el.type == "video") {
            return (
              <Video
                videoTitle={el.video.title}
                videoThumb={
                  el?.video?.thumbnails[el.video.thumbnails.length - 1]?.url
                }
                channelThumb={el.video.author.avatar[0].url}
                channelId={el.video.author.channelId}
                channelTitle={el.video.author.title}
                videoViews={el.video.stats.views}
                videoLong={el.video.lengthSeconds}
                videoDate={el.video.publishedTimeText}
                videoId={el.video.videoId}
                key={id}
              />
            );
          } else if (el.type == "channel") {
            return null;
          } else if (el.type == "playlist") {
            return null;
          }
        })}
      </div>
    </div>
  );
}
/*
title
username
subscribers
subscrip button
avatar
*/
export default RelatedVideos;
