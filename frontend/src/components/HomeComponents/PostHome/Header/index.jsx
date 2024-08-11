import React, { useRef, useState } from "react";
import { SearchIcon } from "./../../../../svg/SearchIcon";
import SearchBox from "./SearchBox";
import OutsideClick from "../../../../functions/click";

const Header = () => {
  const [show, setShow] = useState(false);
  const clickOutside = useRef(null);

  OutsideClick(clickOutside, () => {
    setShow(false);
  });
  return (
    <>
      <div className="flex justify-between ">
        <div>
          <h3 className="font-gilroySemiBold text-2xl text-text_color_1">
            Feeds
          </h3>
        </div>
        <div className="w-[30%] relative">
          <div
            className="py-2 px-3 flex items-center border border-line_color_1 rounded-full"
            onClick={() => setShow(true)}
          >
            <div className="text-text_color_5">
              <SearchIcon />
            </div>
            <div className="font-gilroyRegular text-[16px] text-text_color_2">
              <input
                type="text"
                placeholder="Search"
                className="focus:outline-none ml-2"
              />
            </div>
          </div>
          <div className="absolute top-[0%] left-[0%]" ref={clickOutside}>
            {show && <SearchBox />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

