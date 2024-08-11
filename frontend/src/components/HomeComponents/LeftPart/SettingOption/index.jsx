import React, { useState } from "react";
import { Moon } from "./../../../../svg/Moon";
import { Logout } from "./../../../../svg/Logout";
import DisplayMode from "./DisplayMode";

const SettingOption = () => {
  const [visible, setVisible] = useState(false);

  if (visible) {
    return <DisplayMode setVisible={setVisible} />;
  }
  return (
    <>
      <div className="bg-main_bg_1 w-[250px] shadow-md rounded-md py-2 px-4">
        <ul>
          <li
            className="flex items-center gap-x-2 group bg-main_bg_2 hover:bg-primary_bg_2 transition-colors duration-300 ease-in-out rounded-md p-2 cursor-pointer"
            onClick={() => setVisible(true)}
          >
            <div>
              <Moon />
            </div>
            <div>
              <p className="font-gilroyMedium text-[18px] group-hover:text-white transition-colors duration-300 ease-in-out">
                Display
              </p>
            </div>
          </li>
          <li className="flex items-center gap-x-2 group bg-main_bg_2 hover:bg-primary_bg_3 transition-colors duration-300 ease-in-out rounded-md p-2 cursor-pointer mt-2">
            <div>
              <Logout />
            </div>
            <div>
              <p className="font-gilroyMedium text-[18px] group-hover:text-white transition-colors duration-300 ease-in-out">
                Logout
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SettingOption;
