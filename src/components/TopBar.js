import React from "react";

const TopBar = () => {
  return (
    <div className="p-2  flex items-center border border-b border-[#1b2029]">
      <div className="flex space-x-2">
        <div className="left">
          <div className="bg-[#ff6159] h-2 w-2 rounded-full"></div>
        </div>
        <div className="mid bg-[#ffbd2d] h-2 w-2 rounded-full"></div>
        <div className="right bg-[#29ca41] h-2 w-2 rounded-full"></div>
      </div>
      <div className="text-[#282d32] mx-auto ">
        <p className="text-center">shehryar_ahmed</p>
      </div>
    </div>
  );
};

export default TopBar;
