import React from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";

function Login({ errors, touched, isSubmitting }) {
  // const {} = values;
  return (
    <>
      <Form>
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
        <button name="submitBtn" type="submit" disabled={isSubmitting}>
          {!isSubmitting ? "Log In" : "Logging In"}
        </button>
      </Form>
    </>
  );
}

const FormikLogin = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
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
      .required("Password Required")
  }),
  handleSubmit(values, { resetForm, setSubmitting }) {
    console.log(values);
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
