import { useNavigate } from "react-router-dom";
export default function PlaylistHeader({ data }) {
  const navigate = useNavigate();

  if (data.thumbnails) {
    return (
      <div className="  relative mb-16">
        <div
          className=" h-[60vh] max-h-[350px] bg-gray-900 blur-xl bg-contain "
          style={{
            backgroundImage: `url(${
              data?.thumbnails[data?.thumbnails?.length - 1]?.url
            })`,
          }}
        ></div>
        <div className="absolute top-0 text-white p-4 flex justify-center flex-col items-center w-full  gap-1">
          <div className="drop-shadow-lg w-full">
            <img
              src={data?.thumbnails[data?.thumbnails?.length - 1]?.url}
              alt=" "
              className="rounded-2xl w-full"
            />
          </div>
          <p className="selft-start text-2xl font-bold">{data?.title} </p>
          <p
            className="self-start"
            onClick={() => navigate(`/channel/${data?.author?.channelId}`)}
          >
            {data?.author?.title}{" "}
          </p>
          <p className="self-start opacity-50">
            {data?.stats?.videos} videos • {data?.updatedTimeText}
          </p>
        </div>
      </div>
    );
  }
}
