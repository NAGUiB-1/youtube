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

export const categories = [
    { name: "New", icon: <AiFillHome className='text-2xl'/>, type: "home" },
    { name: "Trending", icon: <MdLocalFireDepartment className='text-2xl' />, type: "category" },
    { name: "Music", icon: <CgMusicNote className='text-2xl' />, type: "category" },
    { name: "Films", icon: <FiFilm className='text-2xl' />, type: "category" },
    { name: "Live", icon: <MdLiveTv className='text-2xl' />, type: "category" },
    { name: "Gaming", icon: <IoGameControllerSharp className='text-2xl'/>, type: "category" },
    { name: "News", icon: <ImNewspaper  className='text-2xl'/>, type: "category" },
    { name: "Sports", icon: <GiDiamondTrophy className='text-2xl' />, type: "category" },
    { name: "Learning", icon: <RiLightbulbLine className='text-2xl'/>, type: "category" },
    {
        name: "Fashion & beauty",
        icon: <GiEclipse  className='text-2xl' />,
        type: "category",
        divider: true,
    },
    { name: "Settings", icon: <FiSettings className='text-2xl'/>, type: "menu" },
    { name: "Report History", icon: <AiOutlineFlag className='text-2xl'/>, type: "menu" },
    { name: "Help", icon: <FiHelpCircle className='text-2xl'/>, type: "menu" },
    { name: "Send feedback", icon: <RiFeedbackLine className='text-2xl'/>, type: "menu" },
];
