import React , { useState } from "react";
import axiosWithAuth from "../utils/index";

function PassportEdit(props) {
  console.log("props", props);

  const user_id = localStorage.getItem('user_id')

  const [passportEdit, setPassportEdit] = useState({
    restaurant_id: props.values.restaurant_id,
    notes: '',
    rating: '',
    stamped: ''
  })

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
    console.log('Sending Put', passportEdit)
    axiosWithAuth()
        .put(`/users/${user_id}/passport`, passportEdit)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
  };

  return (
    <div>
        <h3>{props.values.name}</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor='notes'>Notes: </label>
            <input type='text' name='notes' value={passportEdit.notes} onChange={changeHandler} />
            <label htmlFor='rating'>Rating: </label>
            <input type='number' name='rating' value={passportEdit.rating} onChange={changeHandlerNumber} />
            <label htmlFor='stamped'>Stamped: </label>
            <input type='checkbox' name='stamped' value={passportEdit.stamped} onChange={changeHandlerCheck} />
            <button type='submit'>Update</button>
        </form>
    </div>
  );
}

export default PassportEdit;