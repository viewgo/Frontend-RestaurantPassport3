import React from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";

function SignUp({ errors, touched, isSubmitting }) {
  // const {} = values;
  return (
    <>
      <Form>
        {touched.fName && errors.fName && (
          <p className="error">{errors.fName}</p>
        )}
        <label>
          First Name:
          <Field name="fName" placeholder="First Name" type="text" />
        </label>
        {touched.lName && errors.lName && (
          <p className="error">{errors.lName}</p>
        )}
        <label>
          Last Name:
          <Field name="lName" placeholder="Last Name" type="text" />
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
        <button name="submitBtn" type="submit" disabled={isSubmitting}>
          {!isSubmitting ? "Sign Up" : "Processing"}
        </button>
      </Form>
    </>
  );
}

const FormikSignUp = withFormik({
  mapPropsToValues({ fName, lName, email, password, location }) {
    return {
      firstName: fName || "",
      lastName: lName || "",
      email: email || "",
      password: password || "",
      location: location || ""
    };
  },

  validationSchema: yup.object().shape({
    fName: yup
      .string()
      .min(3, "Too Short")
      .required("Name Required"),
    lName: yup.string().min(3, "Too Short"),
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
    setTimeout(() => {
      resetForm();
      setSubmitting(false);
    }, 1000);
  }
})(SignUp);

export default FormikSignUp;
