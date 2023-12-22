import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ResultComponent from "../components/ResultComponent";
import Video from "../components/Video";
import ChannelComponent from "../components/ChannelComponent";
import SingelPlaylist from "../components/SingelPlaylist";
import ChannelSingelVideo from "../components/ChannelSingelVideo";
import Loader from "../components/Loader";
import { fetchData } from "../fetchData";
function Result() {
  let [videos, setVideos] = useState([]);
  let params = useParams();
  let keySearch = params.searchTag;

  useEffect(() => {
    setVideos([]);
    fetchData(`search/?q=${keySearch}`).then((data) =>
      setVideos(data.contents)
    );
  }, [keySearch]);

  return (
    <>
      {videos.length ? (
        <div>
          <p className="text-red-500 text-xl font-medium pl-4">
            {keySearch} <span className="text-white"> Videos </span>{" "}
          </p>

          <div className="flex flex-row items-start justify-start text-white w-full flex-wrap gap-2 sm:gap-4  ">
            {videos?.map((el, id) => {
              if (el.type == "video") {
                return <ChannelSingelVideo data={el?.video} />;
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
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Result;
