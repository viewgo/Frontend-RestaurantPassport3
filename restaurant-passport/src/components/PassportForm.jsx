import React from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import axiosWithAuth from "../utils/index";

function PassportForm({ values, errors, touched, isSubmitting }) {
  console.log("values", values);

  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1;
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();
  const newDate = `${month}/${day}/${year}`;

  return (
    // <div className="entry-form">
    <Form>
      {/* <label name="date" className="entry-label-date">
          {" "} */}
      {touched.date && errors.date && <p className="error">{errors.date}</p>}
      {/* Date: */}
      <Field
        className="entry-field-date field"
        name="date"
        placeholder="Date"
        type="text"
        value={values.date || newDate}
      />
      {/* </label> */}
      {/* <label name="name" className="entry-label-name"> */}{" "}
      {touched.name && errors.name && <p className="error">{errors.name}</p>}
      {/* Name: */}
      <Field
        className="entry-field-name field"
        name="name"
        placeholder="Restaurant"
        type="text"
        value={values.name || ""}
      />
      {/* </label> */}
      {/* <label name="address" className="entry-label-address">
          {" "}
          {touched.address && errors.address && (
            <p className="error">{errors.address}</p>
          )}
          Street: */}
      <Field
        className="entry-field-address field"
        name="address"
        placeholder="Street address"
        type="text"
        value={values.address || ""}
      />
      {/* </label> */}
      {/* <label name="city" className="entry-label-city">
          {" "}
          {touched.city && errors.city && (
            <p className="error">{errors.city}</p>
          )}
          City: */}
      <Field
        className="entry-field-city field"
        name="city"
        placeholder="City"
        type="text"
        value={values.city || ""}
      />
      {/* </label> */}
      {/* <label name="state" className="entry-label-state">
          {" "}
          {touched.state && errors.state && (
            <p className="error">{errors.state}</p>
          )}
          State: */}
      <Field
        className="entry-field-state field"
        name="state"
        placeholder="state"
        type="text"
        value={values.state || ""}
      />
      {/* </label> */}
      {/* <label name="zip" className="entry-label-zip">
          {" "}
          {touched.zip && errors.zip && <p className="error">{errors.zip}</p>}
          Zip: */}
      <Field
        className="entry-field-zip field"
        name="zip"
        placeholder="Zip code"
        type="text"
        value={values.zip || ""}
      />
      {/* </label> */}
      {/* <label name="number" className="entry-label-number">
          {" "}
          {touched.number && errors.number && (
            <p className="error">{errors.number}</p>
          )} 
           Phone Number: */}
      <Field
        className="entry-field-number field"
        name="number"
        placeholder="Number"
        type="text"
        value={values.number || ""}
      />
      {/* </label> */}
      {/* <label name="website" className="entry-label-website">
          {" "}
          {touched.website && errors.website && (
            <p className="error">{errors.website}</p>
          )}
          Website: */}
      <Field
        className="entry-field-website field"
        name="website"
        placeholder="Website URL"
        type="text"
        value={values.website || ""}
      />
      {/* </label> */}
      {/*//!  fix the input type here */}
      {/* <label name="rating" className="entry-label-rating">
          {" "}
          {touched.rating && errors.rating && (
            <p className="error">{errors.rating}</p>
          )}
          Rating: */}
      <Field
        className="entry-field-rating field"
        name="rating"
        placeholder="Rating 1-5"
        type="number"
        value={values.rating || ""}
      />
      {/* </label> */}
      {/* <label name="note" className="entry-label-notes">
          {" "}
          {touched.note && errors.note && (
            <p className="error">{errors.note}</p>
          )}
          Notes: */}
      <Field
        className="entry-field-note field"
        name="note"
        placeholder="Type any notes here..."
        type="text"
        value={values.note || ""}
      />
      {/* </label> */}
      <label name="stamped" className="entry-label-stamped">
        {" "}
        {touched.stamped && errors.stamped && (
          <p className="error">{errors.stamped}</p>
        )}
        Stamped:
        <Field
          className="entry-field-stamped field"
          name="stamped"
          type="checkbox"
          value={values.stamped || "false"}
        />
        <label name="submitButton" className="entry-label-btn">
          <button name="submitBtn" type="submit" disabled={isSubmitting}>
            {!isSubmitting ? "ADD" : "Updating..."}
          </button>
        </label>
      </label>
    </Form>
    // </div>
  );
}

const FormikPassportForm = withFormik({
  mapPropstoValues(props) {
    return {
      date: Date(),
      name: "",
      address: "",
      rating: "",
      notes: "",
      stamped: false
    };
  },

  validationSchema: yup.object().shape({
    name: yup
      .string()
      .min(4)
      .required(),
    address: yup.string(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    number: yup.string(),
    website: yup.string(),
    rating: yup
      .number()
      .min(1)
      .max(5),
    notes: yup.string(),
    stamped: yup.boolean()
  }),

  handleSubmit(values, { resetForm, setSubmitting }) {
    console.log("SubmitValues", values);
    const newRestaurant = {
      name: values.name,
      address: values.address,
      city: values.city,
      state: values.state,
      zipcode: values.zip,
      phone_number: values.number,
      website_url: values.website,
      img_url: null
    };
    const newRestaurantId = {
      restaurant_id: newRestaurant.id
    };
    const restaurantPut = {
      restaurant_id: newRestaurant.id,
      notes: newRestaurant.note,
      stamped: newRestaurant.stamped,
      rating: newRestaurant.rating
    };
    setTimeout(() => {
      console.log(newRestaurant);
      const user_id = localStorage.getItem('user_id')
      axios
        .post("https://rpass.herokuapp.com/api/restaurants", newRestaurant)
        .then(res => {
          console.log("post", res);
          setSubmitting(false);
          axiosWithAuth()
            .post(
              `/users/${user_id}/passport`,
              newRestaurantId
            )
            .then(res => {
              console.log("newTestPost", res);
              axiosWithAuth()
                .put(
                  `/users/${user_id}/passport`,
                  restaurantPut
                )
                .then(res => console.log("newTestPut", res))
                .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log("Error", err))
        .finally(resetForm());
    }, 500);
  }
})(PassportForm);
export default FormikPassportForm;
