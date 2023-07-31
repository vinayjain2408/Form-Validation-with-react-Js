import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your Name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string()
    
    .matches(/[0-9]/, "Your password must have at least 1 digit character")
    .matches(/[a-z]/, "Your password must have at least 1 lowercase character")
    .matches(/[A-Z]/, "Your password must have at least 1 uppercase character")
    .min(8, "Password must have at least 8 characters")
    .required("Please enter your password"),
  confirm_password: Yup.string()
    .required("Please re-type your password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});









// import * as Yup from "yup";
// import { object, string, ref } from "yup";



// export const signUpSchema = Yup.object({
//     name:Yup.string().min(2).max(25).required("please enter your Name"),
//     email:Yup.string().email().required("please enter your email"),
//     password :Yup.string().min(6).required("please enter your password"),
//     confirm_password:Yup.string().required().oneOf([Yup.ref("password"),null] , "password must match")
// })



// // schema/passwordSchema.ts
// import { object, string, ref } from "yup";

// const getCharacterValidationError = (str: string) => {
//   return `Your password must have at least 1 ${str} character`;
// };
// export const passwordSchema = object({
//   password: string()
//     .required("Please enter a password")
//     // check minimum characters
//     .min(8, "Password must have at least 8 characters")
//     // different error messages for different requirements
//     .matches(/[0-9]/, getCharacterValidationError("digit"))
//     .matches(/[a-z]/, getCharacterValidationError("lowercase"))
//     .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
//   confirmPassword: string()
//     .required("Please re-type your password")
//     // use oneOf to match one of the values inside the array.
//     // use "ref" to get the value of passwrod.
//     .oneOf([ref("password")], "Passwords does not match"),
// });

