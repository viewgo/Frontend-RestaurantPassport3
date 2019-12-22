import React, { useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";

function Login({ errors, touched, values, isSubmitting }) {
  // const {} = values;
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
    getLocalStorage
  }) {
    return {
      remember: remember || false,
      email: email,
      password: password,
      setStorage: setLocalStorage,
      getStorage: getLocalStorage
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
    console.log("values", values);
    // * SET LOCAL STORAGE BASED ON REMEMBER email and password changes

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
      axios
        .post("http://api", values)
        .then(res => {
          console.log(res);
          setSubmitting(false);
        })
        .catch(res => console.log(res))
        .finally(resetForm());
    }, 1000);
  }
})(Login);
export default FormikLogin;
