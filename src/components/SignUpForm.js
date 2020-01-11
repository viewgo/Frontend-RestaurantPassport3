import React from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";

import axiosWithAuth from "../utils";

function SignUp({ errors, touched, isSubmitting }) {
  // const {} = values;
  // console.log(errors);
  return (
    <div className="signup-form">
      <Form>
        {touched.firstName && errors.firstName && (
          <p className="error">{errors.firstName}</p>
        )}
        {/* <label name="FirstName" className="signup-label-fname">
          First Name: */}
        <Field
          className="signup-field-fname field"
          name="firstName"
          placeholder="First Name"
          type="text"
        />
        {/* </label> */}
        {touched.lastName && errors.lastName && (
          <p className="error">{errors.lastName}</p>
        )}
        {/* <label className="signup-label-lname">
          Last Name: */}
        <Field
          className="signup-field-lname field"
          name="lastName"
          placeholder="Last Name"
          type="text"
        />
        {/* </label> */}
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}
        {/* <label className="signup-label-email">
          {" "}
          Email : */}
        <Field
          className="signup-field-email field"
          name="email"
          placeholder="Email"
          type="email"
        />
        {/* </label> */}
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        {/* <label className="signup-label-password">
          Password: */}
        <Field
          className="signup-field-password field"
          name="password"
          placeholder="Password"
          type="password"
        />
        {/* </label> */}
        {touched.location && errors.location && (
          <p className="error">{errors.location}</p>
        )}
        {/* <label className="signup-label-location">
          Location: */}
        <Field
          className="signup-field-location field"
          name="location"
          placeholder="City/Zip"
          type="text"
        />
        {/* </label> */}
        <label name="rememberMe" className="signup-label-remember">
          Remember:
          <Field
            className="signup-field-remember field"
            name="remember"
            type="checkbox"
            placeholder="false"
          />
        </label>
        <label name="submitButton" className="signup-label-btn">
          <button
            name="submitBtn"
            type="submit"
            disabled={isSubmitting}
            className="signup-submitBtn"
          >
            {!isSubmitting ? "Sign Up" : "Processing"}
          </button>
        </label>
      </Form>
    </div>
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
  handleSubmit(values, { resetForm, setSubmitting, props }) {
    console.log("SubmitValues", values);

    // Creating payload for login using axiosWithAuth
    const newUser = {
      username: values.email,
      email: values.email,
      password: values.password,
      name: values.firstName + " " + values.lastName,
      location: values.location
    };

    console.log("New User", newUser);

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
      axiosWithAuth()
        .post("/auth/register", newUser)
        .then(res => {
          console.log(res);
          setSubmitting(false);
          props.props.history.push("/login");
        })
        .catch(err => console.log(err))
        .finally(resetForm());
    }, 1000);
  }
})(SignUp);

export default FormikSignUp;
