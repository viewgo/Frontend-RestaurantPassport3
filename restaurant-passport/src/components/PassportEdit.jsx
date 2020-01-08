import React, { useState } from "react";
import axiosWithAuth from "../utils/index";

function PassportEdit(props) {
  console.log("props", props);

  const user_id = localStorage.getItem("user_id");

  const [passportEdit, setPassportEdit] = useState({
    restaurant_id: props.values.restaurant_id,
    notes: "",
    rating: "",
    stamped: ""
  });

  const changeHandler = e => {
    setPassportEdit({
      ...passportEdit,
      [e.target.name]: e.target.value
    });
  };

  const changeHandlerNumber = e => {
    setPassportEdit({
      ...passportEdit,
      rating: Number(e.target.value)
    });
  };

  const changeHandlerCheck = e => {
    setPassportEdit({
      ...passportEdit,
      stamped: true
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Sending Put", passportEdit);
    axiosWithAuth()
      .put(`/users/${user_id}/passport`, passportEdit)
      .then(res => {
        console.log(res);
        props.setFlipped(true);
      })
      .catch(err => console.log(err));
  };

  const onClickDelete = (e) => {
    e.preventDefault();
    props.deleteRestaurant(props.values.restaurant_id);
    props.setFlipped(true)
  }
  
  const onClickCan = (e) => {
    e.preventDefault();
    props.setFlipped(true)
  }

  return (
    <div className="restaurant-card-back restaurant-edit">
      <h3>{props.values.name}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="notes">Notes: </label>
        <input
          type="text"
          name="notes"
          value={passportEdit.notes}
          onChange={changeHandler}
        />
        <label htmlFor="rating" className="restaurant-edit-rating-label">
          Rating:
          <input
            type="number"
            name="rating"
            value={passportEdit.rating}
            onChange={changeHandlerNumber}
          />
        </label>
        <label htmlFor="stamped" className="restaurant-edit-stamped-label">
          Stamped:
          <input
            type="checkbox"
            name="stamped"
            value={passportEdit.stamped}
            onChange={changeHandlerCheck}
          />
        </label>
        <button type="submit">Update</button>
        <button onClick={(e) => onClickDelete(e)} >Delete</button>
        <button onClick={(e) => onClickCan(e)} >X</button>
      </form>
    </div>
  );
}

export default PassportEdit;
