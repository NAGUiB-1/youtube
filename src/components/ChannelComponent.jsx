import {useNavigate} from 'react-router-dom'
export default function ({
  channelTitle,
  channelUsername,
  subscribers,
  channelThumb,
  channelId
}) {
  let navigate = useNavigate()
  return (
    <div className="flex gap-4 py-3 px-6 text-white">
      <div className="w-[88px] h-[88px] rounded-[50%] overflow-hidden" onClick = {()=> navigate(`/channel/${channelId}`)}>
        <img src={channelThumb} alt={channelTitle} />
      </div>
      <div >
        <p className="cursor-pointer font-medium hover:underline"  onClick = {()=> navigate(`/channel/${channelId}`)}>
          {channelTitle}
        </p>
        <p className="opacity-50">{channelUsername}</p>
        <p className="opacity-50">{subscribers}</p>
        <button className="bg-red-600 py-1 px-4 rounded-2xl">subscribe</button>
      </div>
    </div>
  );
}
