import SingelPlaylist from "./SingelPlaylist";
export default function ({author, channelPlaylists }) {
  
  return (
    <div className=" flex flex-col gap-3 mt-4">
      {channelPlaylists.map((playlist, id) => (
        <SingelPlaylist key={id} data={playlist.playlist} author = {author} />
      ))}
    </div>
  );
}
