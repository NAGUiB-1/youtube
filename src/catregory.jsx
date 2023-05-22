import React from "react";

import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import { BiDumbbell } from "react-icons/bi";
import { BsCurrencyBitcoin } from "react-icons/bs";

export const categories = [
  { name: "New", icon: <AiFillHome className="text-2xl" /> },
  {
    name: "Trending",
    icon: <MdLocalFireDepartment className="text-2xl" />,
  },
  {
    name: "Music",
    icon: <CgMusicNote className="text-2xl" />,
  },
  { name: "Films", icon: <FiFilm className="text-2xl" /> },
  { name: "Live", icon: <MdLiveTv className="text-2xl" /> },
  {
    name: "Gaming",
    icon: <IoGameControllerSharp className="text-2xl" />,
  },
  {
    name: "News",
    icon: <ImNewspaper className="text-2xl" />,
  },
  {
    name: "Sports",
    icon: <GiDiamondTrophy className="text-2xl" />,
  },
  {
    name: "Learning",
    icon: <RiLightbulbLine className="text-2xl" />,
  },
  {
    name: "Fashion",
    icon: <GiEclipse className="text-2xl" />,
  },
  { name: "Gym", icon: <BiDumbbell className="text-2xl" /> },

  { name: "Crypto", icon: <BsCurrencyBitcoin className="text-2xl" /> },
];

