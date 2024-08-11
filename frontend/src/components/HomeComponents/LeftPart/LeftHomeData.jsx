import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import SettingOption from "./SettingOption";
import OutsideClick from "./../../../functions/click";

const LeftHomeData = ({ data }) => {
  const ItemIcon = data.icon;
  const [show, setShow] = useState(false);
  const clickOutside = useRef(null);

  // const handleSettingsClick = () => {
  //   setShow((prevShow) => !prevShow);
  // };

  OutsideClick(clickOutside, () => setShow(false));

  const SettingSeparation = data.title === "Settings" && (
    <>
      <div className="relative">
        <div
          className={`flex items-center gap-x-[16px] mb-10 px-3 py-2 rounded-full bg-main_bg_5 justify-center hover:bg-primary_bg_1 cursor-pointer group transition-all ease-linear duration-200 ${show && "bg-primary_bg_1"}`}
          onClick={() => setShow(true)}
        >
          <div className="group-hover:text-text_color_1 transition-all ease-linear duration-200">
            <ItemIcon />
          </div>
          <div>
            <p className="text-text_color_3 font-gilroyMedium group-hover:text-text_color_1 transition-all ease-linear duration-200">
              {data.title}
            </p>
          </div>
        </div>
        {show && (
          <div className="absolute top-14 left-0 z-50" ref={clickOutside}>
            <SettingOption />
          </div>
        )}
      </div>
    </>
  );

  return (
    <>
      {SettingSeparation ? (
        SettingSeparation
      ) : (
        <NavLink
          to={data.to}
          className="flex items-center gap-x-[16px] mb-10 px-3 py-2 rounded-full bg-main_bg_5 justify-center hover:bg-primary_bg_1 cursor-pointer group transition-all ease-linear duration-200"
        >
          <div className="group-hover:text-text_color_1 transition-all ease-linear duration-200">
            <ItemIcon />
          </div>
          <div>
            <p className="text-text_color_3 font-gilroyMedium group-hover:text-text_color_1 transition-all ease-linear duration-200">
              {data.title}
            </p>
          </div>
        </NavLink>
      )}
    </>
  );
};

export default LeftHomeData;
