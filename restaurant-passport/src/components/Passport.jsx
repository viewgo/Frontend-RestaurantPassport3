import React, { useState, useEffect } from "react";
import Restaurant from "./Restaurant";
import axiosWithAuth from "../utils/index";

function Passport({ passport, setFlipped }) {
  console.log(passport);
  const [passportList, setList] = useState([]);
  //todo save userID in local storage to allow request based on dynamic ID

  useEffect(() => {
    axiosWithAuth()
      .get(`https://rpass.herokuapp.com/api/users/3/passport`)
      .then(res => {
        console.log(res);
        setList(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      {passportList.map(e => (
        <Restaurant restaurant={e} setFlipped={setFlipped} />
      ))}
    </>
  );
}

export default Passport;
