import React from "react";

const LeftAuth = ({ title, description, icon }) => {
  return (
    <div>
      <div>{icon}</div>
      <h1 className="font-gilroyBold lg:text-4xl xl:text-7xl text-text_color">{title}</h1>
      <p className="font-gilroyRegular text-secondary_text_color mt-2 lg:mt-1 lg:text-[14px] xl:text-[20px] ">
        {description}
      </p>
    </div>
  );
};

export default LeftAuth;
