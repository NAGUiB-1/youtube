import React from "react";
import { categories } from "../catregory";
import {ProjectState} from '../projectContext'
const Sidebar = () => {
  let selectedCategory = "New";
  console.log(ProjectState())
  const { selected, setSelected } = ProjectState()
  return (
    <div className="px-2  sm:w-[15rem] h-[2rem] sm:h-[calc(100vh-2.5rem)] bg-black top-0 sticky left-0  text-white sm:pt-3 sm:px-1 flex sm:flex-col gap-2 overflow-x-scroll sm:overflow-x-hidden overflow-y-hidden sm:overflow-y-auto ">
      {categories.map((el, id) => (
        <div
          className={`w-full min-w-max transition hover:bg-[#fc1503] rounded cursor-pointer sm:py-2 flex flex-row font-medium items-center sm:gap-3 gap-1 px-4 sm:px-1 sm:text-lg   ${
            selected == el.name && "bg-[#fc1503]"
          } `}
          onClick = {() => setSelected(el.name)}
        >
          {el.icon} <p className="w-full">{el.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
