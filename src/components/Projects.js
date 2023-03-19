import React from "react";
import airbnb_clone from "../images/airbnb-clone.png";
import ecommerce from "../images/ecommerce.png";
import elite_residency from "../images/elite-residency.png";
const Projects = () => {
  return (
    <div>
      <div>
        <div className="py-5  px-5 mx-auto   text-white  md:max-w-[61rem]     ">
          <div className="         ">
            <p>// Few of my projects</p>
            <div className="projects mt-3 gap-5  md:grid  grid-cols-2 s ">
              <div
                className="   rounded-lg mt-10 bg-gradient-to-r from-[#161b23] via-[#3a5d79]
       
      
      to-[#161b23] p-[0.2px]"
              >
                <div className=" md:min-h-[62rem]   bg-[#0d1117] p-2 py-3 border border-gray-800 rounded-md">
                  <div className="">
                    <p className="text-[#a1803c] text-sm font-bold mx-1">
                      Airbnb-clone - MERN
                    </p>
                    <p className=" bg-[#0a0d12] mt-2 py-3 px-3 text-[#616569] shadow-inner rounded-lg">
                      <img
                        src={airbnb_clone}
                        className="object-cover rounded-md"
                        alt=""
                      />
                      <p className="my-3">
                        A complete MERN Stack application built for users to
                        reserve rooms it primarily focuses on tourists who are
                        looking for rooms near their desired destination.
                      </p>
                      // Key features
                      <p className="my-3">
                        - Room reservation <br /> - Google maps <br /> - Admin
                        dashboard <br /> - Authentication
                      </p>
                      // Stack & Technology
                      <p className="my-3">
                        - REACT JS <br /> &nbsp;&nbsp;Tailwind CSS <br />{" "}
                        &nbsp;&nbsp;Google Maps API <br /> &nbsp;&nbsp;Context
                        API <br /> &nbsp;&nbsp;React-chartjs-2 <br />{" "}
                        &nbsp;&nbsp;React-hot-toast <br /> - NODE JS <br /> -
                        EXPRESS JS <br /> &nbsp;&nbsp;GET <br />
                        &nbsp;&nbsp;POST <br />
                        &nbsp;&nbsp;PUT
                        <br />
                        &nbsp;&nbsp;DELETE
                        <br />
                        &nbsp;&nbsp;JWT Token
                        <br />
                        &nbsp;&nbsp;Mongoose <br />
                        - MONGODB <br />
                        &nbsp;&nbsp;Indexes <br />
                        &nbsp;&nbsp;Geospatial query
                      </p>
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="   rounded-lg mt-10 bg-gradient-to-r from-[#161b23] via-[#3a5d79]
      
      to-[#161b23] p-[0.2px]"
              >
                <div className=" md:min-h-[62rem]   bg-[#0d1117] p-2 py-3 border border-gray-800 rounded-md">
                  <div className="">
                    <p className="text-[#a1803c] text-sm font-bold mx-1">
                      Ecommerce - React JS
                    </p>
                    <p className="  bg-[#0a0d12] mt-2 py-3 px-3 text-[#616569] shadow-inner rounded-lg">
                      <img
                        src={ecommerce}
                        className="object-cover rounded-md"
                        alt=""
                      />
                      <p className="my-3">
                        An ecommerce site which includes product catalog,
                        shopping cart, checkout process. The site is designed
                        with a responsive layout, making it accessible across
                        multiple devices such as desktops, laptops, tablets, and
                        smartphones.
                      </p>
                      // Key features
                      <p className="my-3">
                        - Light/Dark mode <br /> - Front-end routes with control
                        flow statement
                        <br /> - Rapid search
                      </p>
                      // Stack & Technology
                      <p className="my-3">
                        - REACT JS <br /> &nbsp;&nbsp;CSS3 <br />{" "}
                        &nbsp;&nbsp;Keyframe <br /> &nbsp;&nbsp;Animation <br />{" "}
                        &nbsp;&nbsp;Context API
                        <br />
                      </p>
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="   rounded-lg mt-10 bg-gradient-to-r from-[#161b23] via-[#3a5d79]
      
      to-[#161b23] p-[0.2px]"
              >
                <div className="    bg-[#0d1117] p-2 py-3 border border-gray-800 rounded-md">
                  <div className="">
                    <p className="text-[#a1803c] text-sm font-bold mx-1">
                      Elite residency - REACT JS
                    </p>
                    <p className=" bg-[#0a0d12] mt-2 py-3 px-3 text-[#616569] shadow-inner rounded-lg">
                      <img
                        src={elite_residency}
                        className="object-cover rounded-md"
                        alt=""
                      />
                      <p className="my-3">
                        A portfolio site for real estate builders which
                        showcases their past and current projects and acts as a
                        digital representation of their work. It helps potential
                        clients gain confidence in their capabilities by
                        showcasing their unique design styles, architectural
                        approach, and construction techniques.
                      </p>
                      // Key features
                      <p className="my-3">
                        - Minimalist design <br /> - Responsive layout <br /> -
                        Animation
                      </p>
                      // Stack & Technology
                      <p className="my-3">
                        - REACT JS <br /> &nbsp;&nbsp;Tailwind CSS <br />{" "}
                        &nbsp;&nbsp;React-reveal
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
