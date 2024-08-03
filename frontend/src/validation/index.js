import * as Yup from "yup";

export const signp = Yup.object({
  fName: Yup.string()
    .min(2, "First Name must be at least 2 characters")
    .max(40, "First Name must be less than 40 characters")
    .required("Please enter your First Name"),
  lName: Yup.string()
    .min(2, "Last Name must be at least 2 characters")
    .max(40, "Last Name must be less than 40 characters")
    .required("Please enter your Last Name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter your Email"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Please enter your Password"),
  bYear: Yup.string().required("Please select your Birth Year"),
  bMonth: Yup.string().required("Please select your Birth Month"),
  bDay: Yup.string().required("Please select your Birth Day"),
  gender: Yup.string().required("Please select your Gender"),
});
