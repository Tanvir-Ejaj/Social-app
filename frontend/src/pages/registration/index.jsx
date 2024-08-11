import React from "react";
import LeftAuth from "../../components/athentication/LeftAuth";
import { RegistrationIcon } from "../../svg/RegistrationIcon";
import RegiForm from "../../components/athentication/RegiForm";
import { Helmet } from "react-helmet-async";
import { toast, ToastContainer } from "react-toastify";

const Registration = () => {
  return (
    <>
      <ToastContainer />
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <div className="relative z-10">
        <div className="w-[500px] h-[500px] bg-primary_bg_1 rounded-full absolute -top-60 -left-60 hidden lg:block z-[-1]"></div>
        <div className="container flex gap-6 justify-center items-center h-screen">
          <div className="w-[45%] hidden lg:block">
            <LeftAuth
              icon={<RegistrationIcon />}
              title="Start Your Journey"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad fuga, natus officia quas amet exercitationem dolor neque temporibus illo dolore id repudiandae, debitis eveniet omnis maxime odio. Dignissimos illum modi consequuntur ipsa fuga facere, voluptas et distinctio asperiores. Ipsum commodi praesentium ab ad dolore accusantium aut voluptates sed qui libero"
            />
          </div>
          <div className="w-full lg:w-[45%]">
            <RegiForm toast={toast} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
