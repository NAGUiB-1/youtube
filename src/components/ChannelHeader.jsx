import { MdVerifiedUser } from "react-icons/md";
export default function ChannelHeader({ channelDetails }) {
  return (
    channelDetails?.banner?.desktop?.length && (
      <div className="  ">
        {/*banner*/}
        <div className=" w-full min-h-[80px] bg-red-500">
          <img
            className="h-[80px] object-cover"
            src={
              channelDetails?.banner?.desktop[
                channelDetails?.banner?.desktop?.length - 1
              ].url
            }
            alt="banner"
          />
        </div>
        <div className="w-full flex items-center flex-col gap-1 mt-5 px-4">
          <div className="w-full flex justify-center ">
            <img
              src={
                channelDetails?.avatar[channelDetails?.avatar?.length - 1].url
              }
              alt="logo "
              className="w-16 h-16 rounded-full"
            />
          </div>
          <p className="flex justify-center items-center gap-1">
            <span className="font-bold text-2xl"> {channelDetails?.title}</span>
            <MdVerifiedUser />
          </p>
          <p className="flex gap-2 opacity-50 text-sm">
            <span className="font-bold">{channelDetails?.username} </span>
            <span> {channelDetails?.stats?.subscribersText}</span>
            <span> {channelDetails?.stats?.videosText}</span>
          </p>
          <button className="w-full bg-red-600 py-1 text-xl font-bold rounded-full max-w-96">
            {" "}
            Subscribe{" "}
          </button>
        </div>
      </div>
    )
  );
}
