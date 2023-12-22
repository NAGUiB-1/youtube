import React, { useState } from "react";
import { AiFillYoutube, AiOutlineSearch } from "react-icons/ai";
import { redirect, useNavigate } from "react-router-dom";

const Navrbar = () => {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  let handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
    setShowSearch(false);
    setSearch(" ");
  };
  return (
    <div className="bg-black sticky z-50 top-0 w-full">
      <div className="p-1 container mx-auto h-16 bg-black flex justify-between items-center">
        <div className="logo flex items-center" onClick={() => navigate("/")}>
          <AiFillYoutube fill="red" className="h-full" size={40} />
          <span className="text-white font-bold">HeTube</span>
        </div>
        {showSearch && (
          <form
            className="flex items-center relative "
            onSubmit={(e) => handleSearch(e)}
          >
            <input
              type="search"
              className="h-[70%] bg-inherit rounded-full p-2 lw-60 sm:w-60 md:w-80 border border-gray-800 transition  text-white font-medium pl-1 "
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              placeholder="Search any video... "
            />
            <AiOutlineSearch
              size={20}
              className="absolute right-1 cursor-pointer  text-white"
              onClick={() => {
                if (search.length > 1) {
                  navigate(`/search/${search}`);
                  setShowSearch(false);
                }
              }}
            />
          </form>
        )}
        {!showSearch && (
          <AiOutlineSearch
            size={20}
            className="mr-1 cursor-pointer  text-white"
            onClick={() => setShowSearch(true)}
          />
        )}
      </div>
    </div>
  );
};

export default Navrbar;
