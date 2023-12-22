import { AiOutlinePushpin, AiFillHeart } from "react-icons/ai";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
export default function SnigelComment({
  creatorName,
  creatorThumb,
  authorName,
  authorThumb,
  commentDetails,
  likes,
  pinned,
  date,
  heart,
  authorId,
}) {
  const navigate = useNavigate();
  return (
    <div className=" flex gap-4 py-4 text-white w-full">
      <div
        className="min-w-[48px] h-[48px] rounded-[50%] overflow-hidden cursor-pointer"
        onClick={() => navigate(`/channel/${authorId}`)}
      >
        <img
          className="w-[48px] h-[48px] "
          src={authorThumb}
          alt={authorName}
        />
      </div>
      <div className=" flex flex-col w-full">
        {pinned && (
          <div className="flex items-center whitespace-pre opacity-50 text-sm">
            <AiOutlinePushpin />
            <span> pinned by {creatorName} </span>
          </div>
        )}
        <p className=" opacity-50 text-sm flex justify-between items-center w-full">
          <span
            className="cursor-pointer"
            onClick={() => navigate(`/channel/${authorId}`)}
          >
            {authorName}
          </span>
          <span>{date}</span>
        </p>
        <p> {commentDetails}</p>
        <div className=" flex justify-start items-center gap-4 mt-4">
          <div className="flex justify-center items-center gap-1 cursor-pointer">
            <AiOutlineLike />
            <span>{likes}</span>
          </div>
          <AiOutlineDislike className="cursor-pointer" />
          {heart && (
            <div className="w-[30px] h-[30px] relative ">
              <img
                src={creatorThumb}
                alt={creatorName}
                className="rounded-[50%]"
              />
              <div className="absolute right-[-3px] bottom-[-3px]">
                {" "}
                <AiFillHeart fill="red" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
