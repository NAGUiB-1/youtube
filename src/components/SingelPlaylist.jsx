import { useNavigate } from "react-router-dom";
import { CgPlayList } from "react-icons/cg";
export default function SingelPlaylist({ data, author }) {
  const navigate = useNavigate();
  return (
    <div
      className=" w-full flex gap-2 cursor-pointer mb-2 hover:scale-90 transition-all"
      onClick={() => navigate(`/playlist/${data.playlistId}`)}
    >
      <div className=" w-[35%] relative rounded-2xl bg-red-500 overflow-hidden">
        <img
          className="h-full w-full min-w-[100%] object-cover"
          src={data?.thumbnails[0].url}
          alt=" "
        />
        <div className=" absolute w-full h-7  bg-[rgba(100,0,0,.6)] bottom-0 flex justify-center items-center">
          <CgPlayList size={30} /> {data?.stats?.videos}
        </div>
      </div>
      <div className=" w-[65%] sm:text-2xl lg:text-3xl xl:text-4xl flex flex-col gap-2 ">
        <p>{data?.title}</p>
        <p className="opacity-50">{author} videos</p>
      </div>
    </div>
  );
}
