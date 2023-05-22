export default function ({ data, description, setDescription }) {
  const descStyle = "flex flex-col justify-center items-center font-bold";
  return (
    <div className=" h-[calc(100vh-200px)]  w-full bg-black px-4 fixed left-0 z-50 overflow-y-auto text-white ">
      <div className=" container mx-auto">
        <div className=" flex justify-between items-center mb-4 font-bold text-xl sticky left-0 top-0 bg-black py-4 z-50">
          <p> Description </p>
          <span onClick={() => setDescription(false)}>X</span>
        </div>

        <hr />
        <div className=" my-4">
          <p>{data?.title}</p>
        </div>
        <div
          className="flex gap-3 justify-start items-center "
          onClick={() => navigate(`/channel/${data?.author?.channelId}`)}
        >
          <div className="w-[48] h-[48] overflow-hidden rounded-[50%] ">
            <img src={data?.author?.avatar[0]?.url} alt="channel" />
          </div>
          <p className=" text-white">{data?.author?.title}</p>
        </div>

        {/*likes*/}

        <div className=" flex items-center justify-between my-4 ">
          <div className={descStyle}>
            <p> {data?.stats?.likes} </p>
            <p className="font-normal opacity-50"> Likes </p>
          </div>
          <div className={descStyle}>
            <p> {data?.stats?.views} </p>
            <p className="font-normal opacity-50"> Views </p>
          </div>
          <div className={descStyle}>
            <p> {data?.publishedDate} </p>
            <p className="font-normal opacity-50"> Date </p>
          </div>
        </div>
        <hr />

        <p> {data?.description}</p>

        <div
          className=" text-white flex gap-4 mt-4 cursor-pointer"
          onClick={() => navigate(`/channnel/${data?.author?.channelId}`)}
        >
          <div className=" w-[60px] h-[60px] rounded-[50%] overflow-hidden">
            <img
              src={data?.author?.avatar[0].url}
              className="w-[60px] h-[60px]"
              alt="channel"
            />
          </div>
          <div className="flex flex-col">
            <p>{data?.author?.title}</p>
            <p>{data?.author?.stats?.subscribersText}</p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
