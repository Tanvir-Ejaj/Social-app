import React from "react";
import LeftAuth from "../../components/athentication/LeftAuth";
import { RegistrationIcon } from "../../svg/RegistrationIcon";
import RegiForm from "../../components/athentication/RegiForm";

const Registration = () => {
  return (
    <div className="relative">
      <div className="w-[500px] h-[500px] bg-primary_bg rounded-full absolute -top-60 -left-60"></div>
      <div className="container flex gap-6 justify-center items-center h-screen">
        <div className="w-[45%]">
          <LeftAuth
            icon={<RegistrationIcon />}
            title="Start Your Journey"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad fuga, natus
            officia quas amet exercitationem dolor neque temporibus illo dolore id
            repudiandae, debitis eveniet omnis maxime odio. Dignissimos illum modi
            consequuntur ipsa fuga facere, voluptas et distinctio asperiores. Ipsum
            commodi praesentium ab ad dolore accusantium aut voluptates sed qui
            libero"
          />
        </div>
        <div className="w-[45%]">
          <RegiForm />
        </div>
      </div>
    </div>
  );
};

export default Registration;
