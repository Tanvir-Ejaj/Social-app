import React from "react";

const Gender = ({ formik }) => {
  return (
    <>
      <div className="mb-[5px] xl:mb-2">
        <input
          type="radio"
          name="gender"
          id="Male"
          value="male"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          checked={formik.values.gender === "male"}
          className="mr-2"
        />
        <label htmlFor="Male" className="text-text_color">
          Male
        </label>

        <input
          type="radio"
          name="gender"
          id="Female"
          value="female"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          checked={formik.values.gender === "female"}
          className="ml-6"
        />
        <label htmlFor="Female" className="text-text_color ml-2">
          Female
        </label>
      </div>

      {formik.touched.gender && formik.errors.gender ? (
        <div className="text-error_color mb-[2px] xs:text-[11px] md:text-[16px] xl:text-[16px] lg:mb-4">
          {formik.errors.gender}
        </div>
      ) : null}
    </>
  );
};

export default Gender;
