import React from "react";

const DateOfBirth = ({ formik, ageError, years, months, getDates }) => {
  return (
    <>
      {ageError && (
        <div className="text-error_color mb-[2px] xs:text-[11px] md:text-[16px] xl:text-[16px] lg:mb-4">
          {ageError}
        </div>
      )}
      <div className="flex gap-x-4 lg:mb-2">
        <select
          className="border border-line_color w-1/3 px-3 py-2 rounded-md focus:outline-none focus:border-primary_bg"
          value={formik.values.bYear}
          onChange={formik.handleChange}
          name="bYear"
          onBlur={formik.handleBlur}
        >
          <option value="">Year</option>
          {years.map((year, index) => (
            <option key={index}>{year}</option>
          ))}
        </select>
        <select
          className="border border-line_color w-1/3 px-1 lg:px-3 py-2 rounded-md focus:outline-none focus:border-primary_bg"
          value={formik.values.bMonth}
          onChange={formik.handleChange}
          name="bMonth"
          onBlur={formik.handleBlur}
        >
          <option value="">Month</option>
          {months.map((months, index) => (
            <option key={index}>{months}</option>
          ))}
        </select>
        <select
          className="border border-line_color w-1/3 px-3 py-2 rounded-md focus:outline-none focus:border-primary_bg"
          value={formik.values.bDay}
          onChange={formik.handleChange}
          name="bDay"
          onBlur={formik.handleBlur}
        >
          <option value="">Day</option>
          {getDates.map((days, index) => (
            <option key={index}>{days}</option>
          ))}
        </select>
      </div>
      {(formik.touched.bYear && formik.errors.bYear) ||
      (formik.touched.bMonth && formik.errors.bMonth) ||
      (formik.touched.bDay && formik.errors.bDay) ? (
        <div className="text-error_color mb-[2px] xs:text-[11px] md:text-[16px] xl:text-[16px]  lg:mb-4">
          Please complete your date of birth
        </div>
      ) : null}
    </>
  );
};

export default DateOfBirth;
