import React from "react";
import Skills from "./Skills";

const Header = () => {
  return (
    <>
      <div className="py-10 px-5  text-white  md:flex justify-evenly items-center  ">
        <div className="   ">
          <p className="text-[#898d93] text-xs md:text-lg">Hello! I am</p>
          <p className="text-2xl md:text-5xl mx-1">Shehryar Ahmed</p>
          <p className="text-[#6cabe3] mx-1 md:text-2xl ">
            Full stack developer
          </p>
        </div>
        <div
          className="   rounded-lg mt-10 bg-gradient-to-r from-[#161b23] via-[#3a5d79]
       md:w-96   
      
      to-[#161b23] p-[0.2px]"
        >
          <div className="    bg-[#0d1117] p-2 py-3 border border-gray-800 rounded-md">
            <div className="">
              <p className="text-[#a1803c] text-sm font-bold mx-1">About</p>
              <p className=" bg-[#0a0d12] mt-2 py-3 px-3 text-[#616569] shadow-inner rounded-lg">
                I am working as a developer while having my studies. I have
                integrated APIs and created them on the back end. I love to code
                and have been learning it for more than a year as it has always
                remained like a hobby for me.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
