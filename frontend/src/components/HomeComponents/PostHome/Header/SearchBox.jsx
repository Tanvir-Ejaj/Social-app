import React, { useEffect, useRef, useState } from "react";
import { SearchIcon } from "../../../../svg/SearchIcon";

const SearchBox = () => {
  const inputBox = useRef(null);
  const [iconVisible, setIconVisible] = useState(true);

  useEffect(() => {
    inputBox.current.focus();
  }, []);

  return (
    <div className="w-full md:w-[305px] min-h-[300px] max-h-[50vh] bg-main_bg_1 shadow-md rounded-md box-border p-9">
      <div className="py-2 px-3 flex items-center border border-line_color_1 rounded-full cursor-pointer hover:border-primary_bg_1 transition-all ease-in-out duration-200">
        <div
          className="text-text_color_5"
          onClick={() => inputBox.current.focus()}
        >
          {iconVisible && <SearchIcon />}
        </div>
        <div className="font-gilroyRegular text-[16px] text-text_color_2 w-full">
          <input
            ref={inputBox}
            onFocus={() => setIconVisible(false)}
            onBlur={() => setIconVisible(true)}
            type="text"
            placeholder="Search"
            className="focus:outline-none ml-2 bg-main_bg_1 w-full"
          />
        </div>
      </div>
      <div className="mt-4">
        <p className="font-gilroySemiBold text-text_color_3">Recent Search</p>
      </div>
    </div>
  );
};

export default SearchBox;
