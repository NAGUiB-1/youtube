import { useState, useEffect } from "react";
import ChannelSingelVideo from "./ChannelSingelVideo";

import { fetchData } from "../fetchData";
export default function ChannelVideos({ id, channelVideos }) {
  return (
    <div className="flex flex-col gap-3 pt-4 ">
      {channelVideos?.map((video, id) => (
        <ChannelSingelVideo key={id} data={video.video} />
      ))}
    </div>
  );
}
