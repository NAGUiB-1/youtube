import { useNavigate } from "react-router-dom";
export default function Video({
  videoTitle,
  videoThumb,
  channelThumb,
  channelId,
  channelTitle,
  videoViews,
  videoLong,
  videoDate,
  videoId,
}) {
  let navigate = useNavigate();

  const time = new Date(videoLong * 1000).toISOString().slice(11, 19);

  return (
    <div className="w-full sm:w-[49%] xl:w-[32%] rounded-lg overflow-hidden ">
      <div
        className="w-full relative"
        onClick={() => navigate(`/video/${videoId}`)}
      >
        <img
          className="w-full h-auto"
          loading="lazy"
          src={videoThumb}
          alt="videoTitle"
        />
        <div className="absolute bottom-2 right-2 py-[.2rem] px-3 rounded text-white bg-gray-900">
          {" "}
          {time}{" "}
        </div>
      </div>
      <div className="flex p-2 gap-2">
        <div
          className="rounded-[50%] min-w-[50px] max-w-[50px] overflow-hidden h-[50px]"
          onClick={() => navigate(`/channel/${channelId}`)}
        >
          <img
            className="min-w-[50px] min-h-[50px]"
            src={channelThumb}
            alt={channelTitle}
          />
        </div>
        <div className="w-full mb-1">
          <p onClick={() => navigate(`/video/${videoId}`)}>{videoTitle}</p>
          <p className="opacity-50">
            <span onClick={() => navigate(`channel/${channelId}`)}>
              {channelTitle}
            </span>
            • {videoViews} views • {videoDate}
          </p>
        </div>
      </div>
    </div>
  );
}

/*
videoTitle,
                videoThumb,
                channelThumb,
                channelId,
                channelTitle,
                videoViews ,
                videoLong ,
                videoDate ,
                */
