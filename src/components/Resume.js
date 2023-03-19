import React, { useEffect, useState } from "react";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

import cv from "../images/MyCV.pdf";
const Resume = () => {
  const size = useWindowSize();

  return (
    <div className=" py-1  px-5 mx-auto   text-white  md:max-w-[61rem]">
      <p className="py-7 ">// My resume</p>
      <div className="block">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
          <Viewer fileUrl={cv} theme="dark" defaultScale={size.width / 650} />
        </Worker>
      </div>
      <div className="py-7">
        <a href={cv} download="Shehryar_CV" target="_blank">
          <button className=" py-2 px-3 rounded-md border-2 border-gray-600">
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Resume;

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
