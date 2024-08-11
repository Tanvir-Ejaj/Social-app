import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { sigIn } from "./../../validation/index";
import { useLoggedInUserMutation } from "../../features/api/authApi";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loggedInUsers } from "../../features/users/authSlice";

const initialState = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [loggedInUser, { isLoading }] = useLoggedInUserMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginUser = async () => {
    try {
      const loginMutation = await loggedInUser({
        email: formik.values.email,
        password: formik.values.password,
      }).unwrap();
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        pauseOnHover: false,
        draggable: false,
      });
      setTimeout(() => {
        const { message, ...rest } = loginMutation.data;
        console.log(rest);

        localStorage.setItem("user", JSON.stringify(rest));
        dispatch(loggedInUsers(rest));
        console.log(rest);
        navigate("/");
      }, 2000);
    } catch (error) {
      const errorMessage =
        error?.data?.error || "Login failed. Please try again.";
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        pauseOnHover: false,
        draggable: false,
      });
      console.error("Login error:", error);
    }
  };

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: sigIn,
    onSubmit: async () => {
      await loginUser();
    },
  });

  return (
    <div className="w-full max-w-lg mx-auto bg-main_bg_3 rounded-lg shadow-md p-4 lg:px-8 lg:py-10">
      <form onSubmit={formik.handleSubmit}>
        <input
          className="w-full px-4 py-3 border border-line_color_2 rounded-md mb-2 focus:outline-none focus:border-primary_bg_4"
          placeholder="example@email.com"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          name="email"
          onBlur={formik.handleBlur}
          disabled={isLoading}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="text-error_color_1 mb-2 text-sm md:text-base">
            {formik.errors.email}
          </div>
        )}

        <input
          className="w-full px-4 py-3 border border-line_color_2 rounded-md mb-2 focus:outline-none focus:border-primary_bg_4"
          placeholder="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          name="password"
          onBlur={formik.handleBlur}
          disabled={isLoading}
        />
        {formik.touched.password && formik.errors.password && (
          <div className="text-error_color_1 mb-2 text-sm md:text-base">
            {formik.errors.password}
          </div>
        )}

        <div className="lg:flex sm:flex text-center lg:justify-between sm:justify-between items-center sm:pt-3">
          <button
            type="submit"
            className={`px-4 py-2 lg:px-6 lg:py-3 bg-primary_bg_1 text-white rounded-lg lg:rounded-full font-medium transition duration-300 hover:bg-primary_bg_2 ${
              isLoading ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
          <p className="text-text_color_2">
            Do not have an account?{" "}
            <Link to="/registration" className="text-primary_bg_1 underline">
              SignUp
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
