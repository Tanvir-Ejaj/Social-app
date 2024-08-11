import React from "react";
import { Helmet } from "react-helmet-async";
import LeftPart from "../../components/HomeComponents/LeftPart";
import PostHome from "../../components/HomeComponents/PostHome";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="mx-20 my-14 grid grid-cols-[1fr,3fr,1fr]">
        <div>
          <LeftPart />
        </div>
        <div className="">
          <PostHome />
        </div>
        <div className="bg-page_color_2">3</div>
      </div>
    </>
  );
};

export default Home;
