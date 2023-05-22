import { Grid } from "react-loader-spinner";

export default function ChannelAbout({ data }) {
  console.log(data);
  return (
    <div className=" p-4">
      <p>
        <span className='text-xl font-bold'>About</span>
        <br /> {data?.description}
      </p>
      <br />
      <p> {data?.joinedDateText} </p>
      <p> {data?.stats.views} views</p>
    </div>
    
  );
}
