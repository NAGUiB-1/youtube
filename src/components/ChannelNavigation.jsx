export default function ({liStyle, active, setActive }) {
  return (
    <ul className=" flex w-full justify-between ">
      <li
        className={`${liStyle} ${
          active == "videos" && "border-b-2 border-red-600"
        }`}
        onClick={() => setActive("videos")}
      >
        Vidoes
      </li>
      <li
        className={`${liStyle} ${
          active == "playlists" && "border-b-2 border-red-600"
        }`}
        onClick={() => setActive("playlists")}
      >
        Playlists
      </li>
      <li
        className={`${liStyle} ${
          active == "about" && "border-b-2 border-red-600"
        }`}
        onClick={() => setActive("about")}
      >
        About
      </li>
    </ul>
  );
}
