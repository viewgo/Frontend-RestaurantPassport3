import React from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";

function SignUp({ errors, touched, isSubmitting }) {
  // const {} = values;
  console.log(errors);
  return (
    <>
      <Form>
        {touched.firstName && errors.firstName && (
          <p className="error">{errors.firstName}</p>
        )}
        <label name="FirstName">
          First Name:
          <Field name="firstName" placeholder="First Name" type="text" />
        </label>
        {touched.lastName && errors.lastName && (
          <p className="error">{errors.lastName}</p>
        )}
        <label>
          Last Name:
          <Field name="lastName" placeholder="Last Name" type="text" />
        </label>
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}
        <label>
          {" "}
          Email :
          <Field name="email" placeholder="Email" type="email" />
        </label>
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <label>
          Password:
          <Field name="password" placeholder="Password" type="password" />
        </label>
        {touched.location && errors.location && (
          <p className="error">{errors.location}</p>
        )}
        <label>
          Location:
          <Field name="location" placeholder="City/Zip" type="text" />
        </label>
        <label name="rememberMe">
          Remember Me:
          <Field name="remember" type="checkbox" placeholder="false" />
        </label>
        <label name="submitButton">
          <button name="submitBtn" type="submit" disabled={isSubmitting}>
            {!isSubmitting ? "Sign Up" : "Processing"}
          </button>
        </label>
      </Form>
    </>
  );
}

const FormikSignUp = withFormik({
  mapPropsToValues({ setLocalStorage, getLocalStorage }) {
    return {
      setStorage: setLocalStorage,
      getStorage: getLocalStorage
    };
  },

  validationSchema: yup.object().shape({
    firstName: yup
      .string()
      .min(3, "Too Short")
      .required("Name Required"),
    lastName: yup.string().min(3, "Too Short"),
    email: yup
      .string()
      .min(6)
      .email("Invalid Email")
      .required("Email required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    location: yup.string().required("Please enter a city or zip")
  }),
  handleSubmit(values, { resetForm, setSubmitting }) {
    console.log("SubmitValues", values);
    if (
      values.remember === true &&
      (!localStorage.passportRemember ||
        values.getStorage("passportRemember") === false)
    ) {
      values.setStorage("passportRemember", true);
      values.setStorage("passportEmail", values.email);
      values.setStorage("passportPassword", values.password);
      console.log("SignUp storage", localStorage);
    }
    setTimeout(() => {
      axios
        .post("https://reqres.in/api/users", values)
        .then(res => {
          console.log(res);
          setSubmitting(false);
        })
        .catch(err => console.log(err))
        .finally(resetForm());
    }, 1000);
  }
})(SignUp);

export default FormikSignUp;
