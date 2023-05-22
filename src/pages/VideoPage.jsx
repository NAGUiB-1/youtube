import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchData } from "../fetchData";
import ReactPlayer from "react-player";
import ResultComponent from "../components/ResultComponent";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

import { BiShare } from "react-icons/bi";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { BsFlag } from "react-icons/bs";
import { TbArrowsMoveVertical } from "react-icons/tb";
import ChannelComponent from "../components/ChannelComponent";
import DescriptionPopup from "../components/DescriptionPopup";
import CommentsPopup from "../components/CommentsPopup";

import Loader from "../components/Loader";
function VideoPage() {
  let params = useParams();
  let navigate = useNavigate();
  const videoId = params.videoId;
  let [data, setData] = useState([]);
  let [comments, setComments] = useState(false);
  let [videoComments, setVideoComments] = useState([]);

  let [description, setDescription] = useState(false);
  let [related, setRelated] = useState([]);
  const actionsStyle =
    "p-2 flex justify-center items-center gap-2 bg-gray-900 rounded-full font-bold cursor-pointer ";

  useEffect(() => {
    setData([]);
    setComments(false);
    setDescription(false);
    setVideoComments([]);
    setRelated([]);

    fetchData(`video/details/?id=${videoId}`).then((data) => setData(data));
    fetchData(`video/related-contents/?id=${videoId}`).then((data) =>
      setRelated(data.contents)
    );
    fetchData(`video/comments/?id=${videoId}`).then((data) =>
      setVideoComments(data.comments)
    );
  }, [videoId]);

  console.log(data);
  let subs = data?.author?.stats?.subscribersText;
  let newSubs = subs?.slice(0, subs.length - 12);
  console.log(data)
  if (data.title) {
    return (
      <div className=''>
        {/*Video player*/}
        <div className="sticky z-40 w-full top-[3rem] h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[550px] ">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            controls={true}
            width={"100%"}
            height={"100%"}
          />
        </div>
        {/* description POPUP */}
        {description && (
          <DescriptionPopup
            data={data}
            description={description}
            setDescription={setDescription}
          />
        )}

        {/*Comments POPUP */}

        {comments && (
          <CommentsPopup
            data={videoComments}
            comments={comments}
            setComments={setComments}
            commentsCount={data?.stats?.comments}
            authorThumb={data?.author?.avatar[0]?.url}
            authorName={data?.author?.title}
          />
        )}

        {/*Title */}
        <div
          className="flex flex-col gap-3 text-white p-4 cursor-pointer sm:text-xl lg:text-3xl xl:text-4xl "
          onClick={() => setDescription(true)}
        >
          <p> {data?.title} </p>
          <p className="whitespace-pre">
            <span className="opacity-60 lg:text-xl xl:text-2xl ">
              {data?.stats?.views} views • {data?.publishedDate}{" "}
            </span>
            <span className=" opacity-100">... more</span>
          </p>
        </div>
        {/*start channel*/}
        <div className="flex flex-row items-center justify-between sm:text-xl lg:text-3xl xl:text-4xl  px-4 pb-4">
          <div className=" flex items-center flex-row gap-3 ">
            <div
              className="w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] lg:w-[90px] lg:h-[90px]  overflow-hidden rounded-[50%] "
              onClick={() => navigate(`/channel/${data?.author.channelId}`)}
            >
              <img src={data?.author?.avatar[0]?.url} alt="channel" className='h-full w-full'/>
            </div>
            <p className=" text-white">
              <span
                className="hover:underline"
                onClick={() => navigate(`/channel/${data?.author.channelId}`)}
              >
                {data?.author?.title}
              </span>
              <span className="opacity-50 whitespace-pre sm:text-lg lg:text-xl xl:text-2xl "> {newSubs}</span>{" "}
            </p>
          </div>
          <button className="bg-red-600 py-1 px-3 text-white font-bold rounded-lg">
            subscribe{" "}
          </button>
        </div>
        {/*start_actions*/}
        <div className=" flex flex-row overflow-x-auto flex-nowrap px-4 pb-4 gap-4 text-white text-sm sm:text-lg lg:text-2xl xl:text-3xl  ">
          <div className=" flex ">
            <div className=" p-2 flex justify-center items-center gap-2 bg-gray-900 rounded-l-full font-bold cursor-pointer">
              <AiOutlineLike  /> <span>{data?.stats?.likes}</span>
            </div>
            <div className=" p-2 bg-gray-900 rounded-r-full flex items-center cursor-pointer">
              <AiOutlineDislike  />
            </div>
          </div>
          <div className={actionsStyle}>
            <BiShare  /> Share{" "}
          </div>
          <div className={actionsStyle}>
            <MdOutlineLibraryAdd  /> Save
          </div>
          <div className={actionsStyle}>
            <BsFlag  /> Report
          </div>
        </div>
        {/**Comments**/}
        <div
          className="text-white flex justify-between items-center px-4 py-2 cursor-pointer sm:text-xl lg:text-2xl xl:text-3xl "
          onClick={() => setComments(true)}
        >
          <p className=" whitespace-pre">
            Comments •{" "}
            {data?.stats?.comments == null
              ? "  disabeld"
              : data?.stats?.comments}
          </p>

          <TbArrowsMoveVertical size={20} />
        </div>

        <hr className="opacity-40" />
        <br />
        <ResultComponent title="Related" videos={related} />
      </div>
    );
  } else {return <Loader />}
}

export default VideoPage;
