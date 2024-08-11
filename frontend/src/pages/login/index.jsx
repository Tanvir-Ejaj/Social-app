import React from "react";
import { Helmet } from "react-helmet-async";
import { toast, ToastContainer } from "react-toastify";
import LoginForm from "../../components/athentication/LoginForm";
import LeftAuth from "./../../components/athentication/LeftAuth";
import { LoginIcon } from "./../../svg/LoginIcon";

const Login = () => {
  return (
    <>
      <ToastContainer />
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="relative z-[1]">
        <div className="w-[500px] h-[500px] bg-primary_bg_3 rounded-full absolute -top-60 -left-60 hidden lg:block z-[-1]"></div>
        <div className="container flex gap-6 justify-center items-center h-screen">
          <div className="w-[45%] hidden lg:block">
            <LeftAuth
              icon={<LoginIcon />}
              title="Login For Access"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad fuga, natus
              officia quas amet exercitationem dolor neque temporibus illo dolore id
              repudiandae, debitis eveniet omnis maxime odio. Dignissimos illum modi
              consequuntur ipsa fuga facere, voluptas et distinctio asperiores. Ipsum
              commodi praesentium ab ad dolore accusantium aut voluptates sed qui
              libero"
            />
          </div>
          <div className="w-full lg:w-[45%]">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
