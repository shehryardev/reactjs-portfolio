import React from "react";
import { Icon } from "@iconify/react";

const Skills = () => {
  return (
    <div>
      <div className="py-10 px-5 ml-[80px] text-white  md:max-w-[61rem]">
        <div className="   ">
          <p>// Skills regarding me</p>
          <div className="skills my-3 ">
            <div className="flex items-center space-x-3 ">
              <Icon
                icon="vscode-icons:file-type-reactjs"
                color="#8b949e"
                width="40"
              />
              <p>REACT JS</p>
            </div>
            <div className="flex items-center space-x-3 mt-4">
              <Icon icon="logos:tailwindcss-icon" color="#83cd29" width="40" />

              <p>TAILWIND CSS</p>
            </div>
            <div className="flex items-center space-x-3 mt-4 ">
              <Icon icon="logos:material-ui" color="#83cd29" width="40" />

              <p>MATERIAL UI</p>
            </div>
            <div className="flex items-center space-x-3 mt-2">
              <Icon icon="akar-icons:node-fill" color="#83cd29" width="40" />

              <p>NODE JS</p>
            </div>
            <div className="flex items-center space-x-3 mt-2">
              <Icon icon="simple-icons:express" color="#3f4c57" width="40" />
              <p>EXPRESS JS</p>
            </div>

            <div className="flex items-center space-x-3 mt-4">
              <Icon
                icon="vscode-icons:file-type-mongo"
                color="#83cd29"
                width="40"
              />

              <p>MONGODB</p>
            </div>
            <div className="flex items-center space-x-3 mt-4">
              <Icon icon="logos:mysql" color="#83cd29" width="40" />

              <p>SQL</p>
            </div>
            <div className="flex items-center space-x-3 mt-4 ">
              <Icon
                icon="vscode-icons:file-type-firebase"
                color="#83cd29"
                width="40"
              />

              <p>FIREBASE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
