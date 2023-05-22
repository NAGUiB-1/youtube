import { useState } from "react";
import "./App.css";
import Navrbar from "./components/Navrbar";
import Result from "./pages/Result";
import Feed from "./pages/Feed";
import VideoPage from "./pages/VideoPage";
import ChannelPage from "./pages/ChannelPage";
import PlaylistPage from "./pages/PlaylistPage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="container mx-auto bg-black w-full">
      <Navrbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/search/:searchTag" element={<Result />} />
        <Route path="/video/:videoId" element={<VideoPage />} />
        <Route path="/channel/:channelId" element={<ChannelPage />} />
        <Route path="/playlist/:playlistId" element={<PlaylistPage />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
