import { useState } from "react";
import Video from "./Video";
import ChannelComponent from "./ChannelComponent";
import SingelPlaylist from "./SingelPlaylist";
function ResultComponent({ videos, title }) {
  return (
    <div className='w-full'>
      <p className="text-red-500 text-xl font-medium pl-4">
        {title} <span className="text-white"> Videos </span>{" "}
      </p>

      <div className="flex flex-row items-start justify-start text-white w-full flex-wrap  sm: sm:flex-row sm:gap-2 lg:gap-3 w-full">
        {videos?.map((el, id) => {
          if (el.type == "video") {
            //  console.log(el?.video?.thumbnails[-1]?.url)
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
            return (
              <ChannelComponent
                channelTitle={el.channel.title}
                channelUsername={el.channel.username}
                subscribers={el.channel.stats.subscribersText}
                channelThumb={el.channel.avatar[0].url}
                channelId={el.channel.channelId}
                key={id}
              />
            );
          } else if (el.type == "playlist") {
            return (
              <SingelPlaylist
                author={el?.playlist?.author?.title}
                data={el.playlist}
                key={id}
              />
            );
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
export default ResultComponent;
