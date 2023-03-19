import React from "react";
import { Icon } from "@iconify/react";
function calcTime(city, offset) {
  // create Date object for current location
  var d = new Date();

  // get UTC time in msec
  var utc = d.getTime();

  // create new Date object for different city
  // using supplied offset
  var nd = new Date(utc + 3600000 * offset);

  // return time as a string
  return nd.toLocaleString().slice(11);
}
const Footer = () => {
  return (
    <div className="border-t  h-10  text-sm   text-[#707882] justify-between  border-[#202530] flex items-center">
      <div className="left flex items-center">
        <div className=" h-10  border-r border-[#202530]">
          <p className="text-xs px-1 py-3  ">find me in:</p>
        </div>
        <div className="flex items-center ">
          <div className="px-2.5 border-r border-[#202530] h-10 w-10 py-3">
            <Icon icon="simple-icons:upwork" color="#8b949e" width="20" />
          </div>
          <div className="px-2.5 border-r border-[#202530] h-10 w-10 py-3">
            <Icon icon="simple-icons:freelancer" color="#8b949e" width="20" />
          </div>
          <div className="px-2.5 border-r border-[#202530] h-10 w-10 py-3">
            <Icon icon="simple-icons:github" color="#8b949e" width="18" />
          </div>
        </div>
      </div>
      <div className="right mx-2.5">{calcTime("Lahore", 3000)}</div>
    </div>
  );
};

export default Footer;
