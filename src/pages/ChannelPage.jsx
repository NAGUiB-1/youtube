import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { MdVerifiedUser } from "react-icons/md";

import ChannelHeader from "../components/ChannelHeader";
import Loader from "../components/Loader";
import ChannelVideos from "../components/ChannelVideos";
import ChannelNavigation from "../components/ChannelNavigation";
import ChannelPlaylists from "../components/ChannelPlaylists";
import ChannelAbout from "../components/ChannelAbout";
import { fetchData } from "../fetchData";
import { ProjectState } from "../projectContext";
export default function ChannelPage() {
  let { active, setActive } = ProjectState();
  const liStyle = "text-center w-full mt-2 py-4 ";
  const param = useParams();
  const id = param.channelId;

  const [channelDetails, setChannelDetails] = useState([]);
  const [channelVideos, setChannelVideos] = useState([]);
  const [channelPlaylists, setChannelPlaylists] = useState([]);

  useEffect(() => {
    fetchData(`channel/details/?id=${id}`).then((data) => {
      setChannelDetails(data);
    });
    fetchData(`channel/videos/?id=${id}`).then((data) => {
      setChannelVideos(data.contents);
    });
    fetchData(
      `channel/playlists/?id=${id}&filter=created_playlists_newest`
    ).then((data) => {
      setChannelPlaylists(data.contents);
    });
  }, [id]);
  if (channelDetails.title) {
    return (
      <div className=" text-white">
        <ChannelHeader channelDetails={channelDetails} />
        <ChannelNavigation
          liStyle={liStyle}
          active={active}
          setActive={setActive}
        />
        {active == "videos" && (
          <ChannelVideos id={id} channelVideos={channelVideos} />
        )}
        {active == "playlists" && (
          <ChannelPlaylists
            channelPlaylists={channelPlaylists}
            author={channelDetails?.title}
          />
        )}
        {active == "about" && <ChannelAbout data={channelDetails} />}
      </div>
    );
  } else {
    return <Loader />;
  }
}
