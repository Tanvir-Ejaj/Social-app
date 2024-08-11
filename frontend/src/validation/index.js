import * as Yup from "yup";

export const signUp = Yup.object({
  fname: Yup.string().min(1).max(30).required("Please enter your First Name"),
  lname: Yup.string().min(1).max(30).required("Please enter your Last Name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter your Email"),
  password: Yup.string()
    .min(4, "Password must be at least 4 characters")
    .max(45, "Password must be less than 45 characters")
    .required("Please enter your Password"),
  bYear: Yup.string().required("Please select your Birth Year"),
  bMonth: Yup.string().required("Please select your Birth Month"),
  bDay: Yup.string().required("Please select your Birth Day"),
  gender: Yup.string().required("Please select your Gender"),
});

export const sigIn = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter your Email"),
  password: Yup.string()
    .min(4, "Password must be at least 4 characters")
    .max(45, "Password must be less than 45 characters")
    .required("Please enter your Password"),

});
