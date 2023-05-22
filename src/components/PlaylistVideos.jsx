import { useNavigate } from "react-router-dom";

export default function PlaylistVideos({ data }) {
  console.log(data);
  const navigate = useNavigate();
  return (
    <div
      className=" flex gap-2 cursor-pointer text-white mt-5"
      onClick={() => navigate(`/video/${data.videoId}`)}
    >
      <div className=" w-[50%]  rounded-2xl  overflow-hidden">
        <img
          className="h-full w-full object-cover rounded-2xl"
          src={data?.thumbnails[0].url}
          alt=" "
        />
      </div>
      <div className=" w-[50%] mt-2">
        <p>{data.title}</p>
        <p className="opacity-50"> {data?.author?.title}</p>
      </div>
    </div>
  );
}
