import React from "react";
import { Moon } from "../../../../svg/Moon";
import { BackIcon } from "./../../../../svg/backIcon";

const DisplayMode = ({ setVisible }) => {
  return (
    <div className="bg-main_bg_1 w-[300px] shadow-lg rounded-lg py-4 px-6 transition-all duration-300 ease-in-out hover:shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <div
          className="cursor-pointer hover:text-text_color_2 "
          onClick={() => setVisible(false)}
        >
          <BackIcon />
        </div>
        <h4 className="font-gilroyMedium text-[20px] text-text_color_1">
          Display and Accessibility
        </h4>
      </div>
      <div className="flex justify-between">
        <div className="bg-primary_bg_1 w-10 h-10 flex justify-center items-center rounded-full">
          <Moon className="text-white" />
        </div>
        <div className="ml-4 w-[85%] ">
          <h6 className="text-lg font-gilroySemiBold text-text_color_2">
            Dark Mode
          </h6>
          <p className="text-sm text-muted_text_color_2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, deleniti?
          </p>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <label
            htmlFor="lightMode"
            className="flex items-center cursor-pointer p-2 rounded-full"
          >
            <Moon className="w-6 h-6 mr-2" />
            Light Mode
          </label>
          <input type="radio" id="lightMode" name="displayMode" value="light" />
        </div>
        <div className="flex justify-between items-center mb-2">
          <label
            htmlFor="darkMode"
            className="flex items-center cursor-pointer p-2 rounded-full"
          >
            <Moon className="w-6 h-6 mr-2" />
            Dark Mode
          </label>
          <input type="radio" id="darkMode" name="displayMode" value="dark" />
        </div>
      </div>
    </div>
  );
};

export default DisplayMode;
