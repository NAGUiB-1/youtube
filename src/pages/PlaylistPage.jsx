import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PlaylistVideos from "../components/PlaylistVideos";
import Loader from "../components/Loader";
import PlaylistHeader from "../components/PlaylistHeader";
import { fetchData } from "../fetchData";
export default function PlaylistPage() {
  const param = useParams();
  let id = param.playlistId;
  let [videos, setVideos] = useState([]);
  let [details, setDetails] = useState([]);
  useEffect(() => {
    window. scrollTo(0, 0)
    fetchData(`playlist/videos/?id=${id}`).then((data) => {
      setVideos(data.contents);
    });
    fetchData(`playlist/details/?id=${id}`).then((data) => {
      setDetails(data);
    });
  }, [id]);
  console.log(videos);
  if(videos.length){
    return (
    <div className=" ">
      <PlaylistHeader data={details} />
      {videos?.map((video, id) => (
        <PlaylistVideos data={video.video} key={id} />
      ))}
    </div>
  )} else {
    return <Loader />
  }
}
