import React from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoAppsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#2b2b2b] opacity-95 flex justify-between h-14 px-14 items-center">
      {/* left side */}
      <div className="text-2xl flex gap-8 items-center">
        <div>
          <GiHamburgerMenu />
        </div>
        <Link to="/">
          <div className="flex gap-1 items-center justify-center">
            <BsYoutube className="text-red-600 text-3xl" />
            <span className="text-xl font-medium">Youtube</span>
          </div>
        </Link>
      </div>

      {/* center side */}
      <div className="flex items-center justify-center gap-5">
        <form action="">
          <div className="flex items-center h-10 px-4 pr-0 bg-zinc-900 rounded-3xl">
            {/* left input */}
            <div className="flex gap-4 items-center pr-5 rounded-3xl">
              <div>
                <AiOutlineSearch className="text-xl" />
              </div>
              <input
                type="text"
                className="w-96 bg-zinc-900 focus:outline-none border-none"
              />
              <AiOutlineClose className="text-xl cursor-pointer " />
            </div>
            {/* right inputicon */}
            <button className="h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-3xl rounded-l-none">
              <AiOutlineSearch className="text-xl" />
            </button>
          </div>
        </form>
        <div className="text-xl p-3 bg-zinc-900 rounded-full">
          <TiMicrophone />
        </div>
      </div>

      {/* right side */}
      <div className="flex gap-5 items-center text-xl">
        <BsCameraVideo />
        <IoAppsSharp />
        <div className="relative">
          <BsBell />
          <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">
            +9
          </span>
        </div>
        <img src="./images/icon.png" alt="" className="w-9 h-9" />
      </div>
    </div>
  );
};

export default Navbar;
