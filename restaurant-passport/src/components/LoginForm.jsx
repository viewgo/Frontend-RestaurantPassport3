import React from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";

import axiosWithAuth from "../utils"

function Login( { errors, touched, values, isSubmitting } ) {
  

  console.log("values", values);

  return (
    <>
      <Form>
        <label name="email">
          {" "}
          {touched.email && errors.email && (
            <p className="error">{errors.email}</p>
          )}
          Email :
          <Field
            name="email"
            placeholder="Email"
            type="email"
            value={values.email || ""}
          />
        </label>
        <label name="password">
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
          Password:
          <Field
            name="password"
            placeholder="Password"
            type="password"
            value={values.password || ""}
          />
        </label>
        <label name="rememberMe">
          Remember Me:
          <Field
            name="remember"
            type="checkbox"
            placeholder={JSON.stringify(values.remember) || "false"}
          />
        </label>
        <label name="submitButton">
          <button name="submitBtn" type="submit" disabled={isSubmitting}>
            {!isSubmitting ? "Log In" : "Logging In"}
          </button>
        </label>
      </Form>
    </>
  );
}

const FormikLogin = withFormik({
  mapPropsToValues({
    remember,
    email,
    password,
    setLocalStorage,
    getLocalStorage,
    // credentials
  }) {
    return {
      remember: remember || false,
      email: email,
      password: password,
      setStorage: setLocalStorage,
      getStorage: getLocalStorage,
      // credentials: credentials
    };
  },

  validationSchema: yup.object().shape({
    email: yup
      .string()
      .min(6)
      .email("Invalid Email")
      .required("Email required"),
    password: yup
      .string()
      .min(6, "Password is at least 6 characters")
      .required("Password Required"),
    remember: yup.boolean().required()
  }),
  handleSubmit(values, { resetForm, setSubmitting }) {
    console.log("SubmitValues", values);
    // * SET LOCAL STORAGE BASED ON REMEMBER email and password changes

    // Creating payload for login using axiosWithAuth
    const credentials = {
      username: values.email,
      password: values.password
    };
  
    // console.log("credentials", credentials);

    if (
      values.remember === true &&
      (!localStorage.passportRemember ||
        values.getStorage("passportRemember") === false)
    ) {
      values.setStorage("passportRemember", true);
      values.setStorage("passportEmail", values.email);
      values.setStorage("passportPassword", values.password);
      console.log("Set initial storage", localStorage);
    } else if (
      values.remember === true &&
      (values.getStorage("passportEmail") !== values.email ||
        values.getStorage("passportPassword") !== values.password)
    ) {
      console.log("changed Storage");
      values.setStorage("passportRemember", true);
      values.setStorage("passportEmail", values.email);
      values.setStorage("passportPassword", values.password);
      
    } else if (values.remember === false) {
      console.log("Remove Storage");
      values.setStorage("passportRemember", false);
      values.setStorage("passportEmail", "");
      values.setStorage("passportPassword", "");
    }

    setTimeout(() => {
      axiosWithAuth()
        .post("/auth/login", credentials)
        .then(res => {
          console.log("Login res", res);
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('user_id', res.data.user_id)
          setSubmitting(false);
          // console.log(history)
          res.history.push('/passport');
        })
        .catch(res => console.log(res))
        .finally(resetForm());
    }, 1000);
  }
})(Login);
export default FormikLogin;
