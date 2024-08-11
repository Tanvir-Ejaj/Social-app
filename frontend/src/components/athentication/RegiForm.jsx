import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signUp } from "./../../validation/index";
import DateOfBirth from "./DateOfBirth";
import Gender from "./Gender";
import { useAddUserMutation } from "../../features/api/authApi";
import { toast } from "react-toastify";

const initialState = {
  fname: "",
  lname: "",
  email: "",
  password: "",
  bYear: new Date().getFullYear(),
  bMonth: new Date().getMonth() + 1,
  bDay: new Date().getDate(),
  gender: "",
};

const RegiForm = () => {
  const [ageError, setAgeError] = useState("");
  const [addUser, { isLoading }] = useAddUserMutation();
  const navigate = useNavigate();

  const registration = async (values) => {
    try {
      const signUpMutation = await addUser(values).unwrap();
      console.log(signUpMutation);
      return true; // indicates successful submission
    } catch (error) {
      toast.error(error.data.error.message);
      console.error("Error during registration:", error);
      return false; // indicates failed submission
    }
  };

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: signUp,
    onSubmit: async (values, { resetForm }) => {
      const currentDate = new Date();
      const pickedDate = new Date(values.bYear, values.bMonth - 1, values.bDay);

      const age = currentDate.getFullYear() - pickedDate.getFullYear();
      const isUnderage = age < 18 || (age === 18 && currentDate < pickedDate);
      const isTooOld = age > 100;

      if (isUnderage) {
        return setAgeError("Minimum 18 Years Old Required");
      } else if (isTooOld) {
        return setAgeError("You're too old to use");
      }
      setAgeError("");

      const success = await registration(values);
      if (success) {
        toast.success("Registration successful!");
        
        resetForm();
        setTimeout(() => {
          navigate("/login");
        }, 2500);
        console.log("Form Submitted", values);
      }
    },
  });

  const tempYears = new Date().getFullYear();
  const years = Array.from(new Array(105), (val, index) => tempYears - index);

  const months = Array.from(new Array(12), (val, index) => 1 + index);

  const days = () => {
    return new Date(formik.values.bYear, formik.values.bMonth, 0).getDate();
  };

  const getDates = Array.from(new Array(days()), (val, index) => 1 + index);

  return (
    <div className="w-full max-w-lg mx-auto bg-main_bg_2 rounded-lg shadow-md p-4 lg:px-8 lg:py-10">
      <form onSubmit={formik.handleSubmit}>
        <input
          className="w-full px-4 py-3 border border-line_color_1 rounded-md mb-2 focus:outline-none focus:border-primary_bg_2"
          placeholder="First Name"
          type="text"
          value={formik.values.fname}
          onChange={formik.handleChange}
          name="fname"
          onBlur={formik.handleBlur}
        />
        {formik.touched.fname && formik.errors.fname ? (
          <div className="text-error_color_1 mb-[2px] xs:text-[11px] md:text-[16px] xl:text-[16px] lg:mb-4">
            {formik.errors.fname}
          </div>
        ) : null}

        <input
          className="w-full px-4 py-3 border border-line_color_1 rounded-md mb-2 focus:outline-none focus:border-primary_bg_2"
          placeholder="Last Name"
          type="text"
          value={formik.values.lname}
          onChange={formik.handleChange}
          name="lname"
          onBlur={formik.handleBlur}
        />
        {formik.touched.lname && formik.errors.lname ? (
          <div className="text-error_color_1 mb-[2px] xs:text-[11px] md:text-[16px] xl:text-[16px] lg:mb-4">
            {formik.errors.lname}
          </div>
        ) : null}

        <input
          className="w-full px-4 py-3 border border-line_color_1 rounded-md mb-2 focus:outline-none focus:border-primary_bg_2"
          placeholder="example@email.com"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          name="email"
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-error_color_1 mb-[2px] xs:text-[11px] md:text-[16px] xl:text-[16px] lg:mb-4">
            {formik.errors.email}
          </div>
        ) : null}

        <input
          className="w-full px-4 py-3 border border-line_color_1 rounded-md mb-2 focus:outline-none focus:border-primary_bg_2"
          placeholder="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          name="password"
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-error_color_1 mb-[2px] xs:text-[11px] md:text-[16px] xl:text-[16px] lg:mb-4">
            {formik.errors.password}
          </div>
        ) : null}

        <DateOfBirth
          formik={formik}
          ageError={ageError}
          years={years}
          months={months}
          getDates={getDates}
        />

        <Gender formik={formik} />

        <div className="lg:flex sm:flex text-center lg:justify-between sm:justify-between items-center sm:pt-3">
          <button
            type="submit"
            className="px-4 py-2 lg:px-6 lg:py-3 bg-primary_bg_2 text-main_bg_1 rounded-[20px] lg:rounded-full font-gilroyMedium transition duration-300 hover:bg-accent_bg_2"
          >
            Submit
          </button>
          <p className="text-secondary_text_color_1">
            Already have an account?{" "}
            <Link to="/login" className="text-accent_bg_2 underline">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegiForm;
