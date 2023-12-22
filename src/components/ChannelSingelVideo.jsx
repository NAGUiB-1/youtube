import { useNavigate } from "react-router-dom";
export default function ChannelSingelVideo({ data }) {
  const navigate = useNavigate();
  return (
    <div
      className=" w-full flex gap-2 cursor-pointer xl:h-[280px] hover:scale-90 transition-all"
      onClick={() => navigate(`/video/${data?.videoId}`)}
    >
      <div className=" overflow-hidden rounded-2xl w-[50%]  xl:w-auto">
        <img
          className="object-cover w-full h-full "
          src={data?.thumbnails[data?.thumbnails?.length - 1].url}
          alt=" "
          load="lazy"
        />
      </div>
      <div className=" w-[50%] sm:text-2xl lg:text-3xl xl:text-4xl ">
        <p> {data?.title}</p>
        <p className="text-sm sm:text-lg lg:text-xl xl:text-2xl opacity-50">
          {" "}
          {data?.stats.views} views • {data?.publishedTimeText}
        </p>
      </div>
    </div>
  );
}
