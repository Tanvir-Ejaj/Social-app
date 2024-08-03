import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { signp } from "./../../validation/index";

const initialState = {
  fName: "",
  lName: "",
  email: "",
  password: "",
  bYear: "",
  bMonth: "",
  bDay: "",
  gender: "",
};

const RegiForm = () => {
  const formik = useFormik({
    initialValues: initialState,
    validationSchema: signp,
    onSubmit: (values) => {
      console.log("Form Submitted", values);
    },
  });

  return (
    <div className="w-full max-w-lg mx-auto bg-main_bg rounded-lg shadow-md px-8 py-10">
      <form onSubmit={formik.handleSubmit}>
        <input
          className="w-full px-4 py-3 border border-line_color rounded-md mb-2 focus:outline-none focus:border-primary_bg"
          placeholder="First Name"
          type="text"
          value={formik.values.fName}
          onChange={formik.handleChange}
          name="fName"
          onBlur={formik.handleBlur}
        />
        {formik.touched.fName && formik.errors.fName ? (
          <div className="text-error_color mb-4">{formik.errors.fName}</div>
        ) : null}

        <input
          className="w-full px-4 py-3 border border-line_color rounded-md mb-2 focus:outline-none focus:border-primary_bg"
          placeholder="Last Name"
          type="text"
          value={formik.values.lName}
          onChange={formik.handleChange}
          name="lName"
          onBlur={formik.handleBlur}
        />
        {formik.touched.lName && formik.errors.lName ? (
          <div className="text-error_color mb-4">{formik.errors.lName}</div>
        ) : null}

        <input
          className="w-full px-4 py-3 border border-line_color rounded-md mb-2 focus:outline-none focus:border-primary_bg"
          placeholder="example@email.com"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          name="email"
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-error_color mb-4">{formik.errors.email}</div>
        ) : null}

        <input
          className="w-full px-4 py-3 border border-line_color rounded-md mb-2 focus:outline-none focus:border-primary_bg"
          placeholder="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          name="password"
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-error_color mb-4">{formik.errors.password}</div>
        ) : null}

        <div className="flex gap-x-4 mb-2">
          <select
            className="border border-line_color w-1/3 px-3 py-2 rounded-md focus:outline-none focus:border-primary_bg"
            value={formik.values.bYear}
            onChange={formik.handleChange}
            name="bYear"
            onBlur={formik.handleBlur}
          >
            <option value="">Birth Year</option>
            {/* Add more year options */}
            <option>1990</option>
            <option>1991</option>
            <option>1992</option>
          </select>
          <select
            className="border border-line_color w-1/3 px-3 py-2 rounded-md focus:outline-none focus:border-primary_bg"
            value={formik.values.bMonth}
            onChange={formik.handleChange}
            name="bMonth"
            onBlur={formik.handleBlur}
          >
            <option value="">Birth Month</option>
            {/* Add more month options */}
            <option>January</option>
            <option>February</option>
            <option>March</option>
          </select>
          <select
            className="border border-line_color w-1/3 px-3 py-2 rounded-md focus:outline-none focus:border-primary_bg"
            value={formik.values.bDay}
            onChange={formik.handleChange}
            name="bDay"
            onBlur={formik.handleBlur}
          >
            <option value="">Birth Day</option>
            {/* Add more day options */}
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        {(formik.touched.bYear && formik.errors.bYear) ||
        (formik.touched.bMonth && formik.errors.bMonth) ||
        (formik.touched.bDay && formik.errors.bDay) ? (
          <div className="text-error_color mb-4">
            Please complete your date of birth
          </div>
        ) : null}

        <div className="mb-6">
          <input
            type="radio"
            name="gender"
            id="Male"
            value="male"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="Male" className="ml-2 text-text_color">
            Male
          </label>
          <input
            type="radio"
            name="gender"
            id="Female"
            value="female"
            className="ml-6"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="Female" className="ml-2 text-text_color">
            Female
          </label>
        </div>
        {formik.touched.gender && formik.errors.gender ? (
          <div className="text-error_color mb-4">{formik.errors.gender}</div>
        ) : null}

        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="px-6 py-3 bg-primary_bg text-main_bg rounded-full font-gilroyMedium transition duration-300 hover:bg-accent_bg"
          >
            Submit
          </button>
          <p className="text-secondary_text_color">
            Already have an account?{" "}
            <Link to="/" className="text-primary_bg underline">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegiForm;
