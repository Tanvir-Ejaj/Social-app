import React from "react";

const LeftAuth = ({ title, description, icon }) => {
  return (
    <div>
      <div>{icon}</div>
      <h1 className="font-gilroyBold text-7xl text-text_color">{title}</h1>
      <p className="font-gilroyRegular text-secondary_text_color mt-2">
        {description}
      </p>
    </div>
  );
};

export default LeftAuth;
