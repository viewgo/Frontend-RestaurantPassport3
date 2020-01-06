import React from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import axiosWithAuth from "../utils/index";

function PassportForm({ values, errors, touched, isSubmitting }) {
  console.log("values", values);
  return (
    <>
      <Form>
        <label name="date">
          {" "}
          {touched.date && errors.date && (
            <p className="error">{errors.date}</p>
          )}
          Date:
          <Field
            name="date"
            placeholder="Date"
            type="text"
            value={values.date || Date()}
          />
        </label>
        <label name="name">
          {" "}
          {touched.name && errors.name && (
            <p className="error">{errors.name}</p>
          )}
          Name:
          <Field
            name="name"
            placeholder="Restaurant"
            type="text"
            value={values.name || ""}
          />
        </label>
        <label name="address">
          {" "}
          {touched.address && errors.address && (
            <p className="error">{errors.address}</p>
          )}
          Street:
          <Field
            name="address"
            placeholder="Street address"
            type="text"
            value={values.address || ""}
          />
        </label>
        <label name="city">
          {" "}
          {touched.city && errors.city && (
            <p className="error">{errors.city}</p>
          )}
          City:
          <Field
            name="city"
            placeholder="City"
            type="text"
            value={values.city || ""}
          />
        </label>
        <label name="state">
          {" "}
          {touched.state && errors.state && (
            <p className="error">{errors.state}</p>
          )}
          State:
          <Field
            name="state"
            placeholder="state"
            type="text"
            value={values.state || ""}
          />
        </label>
        <label name="zip">
          {" "}
          {touched.zip && errors.zip && <p className="error">{errors.zip}</p>}
          Zip:
          <Field
            name="zip"
            placeholder="Zip code"
            type="text"
            value={values.zip || ""}
          />
        </label>
        <label name="number">
          {" "}
          {touched.number && errors.number && (
            <p className="error">{errors.number}</p>
          )}
          Phone Number:
          <Field
            name="number"
            placeholder="Number"
            type="text"
            value={values.number || ""}
          />
        </label>
        <label name="website">
          {" "}
          {touched.website && errors.website && (
            <p className="error">{errors.website}</p>
          )}
          Website:
          <Field
            name="website"
            placeholder="Website URL"
            type="text"
            value={values.website || ""}
          />
        </label>

        {/*//!  fix the input type here */}

        <label name="rating">
          {" "}
          {touched.rating && errors.rating && (
            <p className="error">{errors.rating}</p>
          )}
          Rating:
          <Field
            name="rating"
            placeholder=""
            type="text"
            value={values.rating || ""}
          />
        </label>
        <label name="note">
          {" "}
          {touched.note && errors.note && (
            <p className="error">{errors.note}</p>
          )}
          Notes:
          <Field
            name="note"
            placeholder="Type any notes here..."
            type="text"
            value={values.note || ""}
          />
        </label>
        <label name="stamped">
          {" "}
          {touched.stamped && errors.stamped && (
            <p className="error">{errors.stamped}</p>
          )}
          Stamped:
          <Field
            name="stamped"
            type="checkbox"
            value={values.stamped || "false"}
          />
          <label name="submitButton">
            <button name="submitBtn" type="submit" disabled={isSubmitting}>
              {!isSubmitting ? "ADD" : "Updating..."}
            </button>
          </label>
        </label>
      </Form>
    </>
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
    rating: yup.string(),
    notes: yup.string(),
    stamped: yup.boolean()
  }),

  handleSubmit(values, { resetForm, setSubmitting }) {
    console.log("SubmitValues", values);
    const newRestaurant = {
      id: Date.now(),
      name: values.name,
      address: values.address,
      city: values.city,
      state: values.state,
      zipcode: values.zip,
      phone_number: values.number,
      website_url: values.website,
      img_url: "null"
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
      axios
        .post("https://rpass.herokuapp.com/api/restaurants", newRestaurant)
        .then(res => {
          console.log("post", res);
          setSubmitting(false);
          axiosWithAuth()
            .post(
              `https://rpass.herokuapp.com/api/users/3/passport`,
              newRestaurantId
            )
            .then(res => {
              console.log("newTestPost", res);
              axiosWithAuth()
                .put(
                  `https://rpass.herokuapp.com/api/users/3/passport`,
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
