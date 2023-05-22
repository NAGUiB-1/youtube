import SingelComment from "./SingelComment";
export default function CommentsPopup({
  data,
  comments,
  setComments,
  commentsCount,
  authorThumb,
  authorName,
}) {
  console.log(data);
  return (
    <div className=" h-[calc(100vh-200px)]  w-full bg-black px-4 fixed left-0 z-50 overflow-y-auto text-white ">
      <div className="container mx-auto ">
        <div className=" flex justify-between items-center mb-4 font-bold text-xl sticky left-0 top-0 bg-black py-4 z-50">
          <p> Comments • {commentsCount} </p>
          <span onClick={() => setComments(false)}>X</span>
        </div>
        <hr />

        {data.map((com, id) => (
          <>
            <SingelComment
              key={id}
              creatorName={authorName}
              creatorThumb={authorThumb}
              authorName={com?.author?.title}
              authorThumb={com?.author?.avatar[0]?.url}
              commentDetails={com?.content}
              likes={com?.stats?.votes}
              pinned={com?.pinned?.status}
              date={com?.publishedTimeText}
              heart={com?.creatorHeart}
              authorId={com?.author?.channelId}
            />
            <hr />
          </>
        ))}
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
