import React, { useState, useEffect } from "react";
import Restaurant from "./Restaurant";
import axiosWithAuth from "../utils/index"


function Passport({ passport, setFlipped, flipped }) {
  console.log(passport);
  const [passportList, setList] = useState([]);
  //todo save userID in local storage to allow request based on dynamic ID

  const user_id = localStorage.getItem('user_id')

  useEffect(() => {
    axiosWithAuth()
      .get(`https://rpass.herokuapp.com/api/users/${user_id}/passport`)
      .then(res => {
        console.log(res);
        setList(res.data);
      })
      .catch(err => console.log(err));
  }, [user_id, flipped]);

  const deleteRestaurant = id => {
    console.log(id)
    axiosWithAuth()
      .delete(`/users/${user_id}/passport`, id)
      .then(res => {
        console.log(res);
        console.log(id);
        this.props.history.push('/passport')
      })
      .catch(err => {
        console.log(err.message);
      })
  }

  return (
    <div>
      {passportList.map(e => (
          <Restaurant key={e.restaurant_id} restaurant={e} setFlipped={setFlipped} deleteRestaurant={deleteRestaurant} flipped={flipped} />
      ))}
    </div>
  );
}

export default Passport;
