import React, { useState, useEffect } from "react";

import axiosWithAuth from "../utils/index";

//COMPONENTS
import PassportBook from "./PassportBook";

//STYLES
import { PassportList } from "../styles/explore";

function Passport({ setFlipped, flipped }) {
  const [passportList, setList] = useState([]);
  const user_id = localStorage.getItem("user_id");
  const [input, setInput] = useState({
    search: ""
  });
  const [search, setSearch] = useState(true);
  const organizedList = [];

  useEffect(() => {
    axiosWithAuth()
      .get(`https://rpass.herokuapp.com/api/users/${user_id}/passport`)
      .then(res => {
        console.log("passport", res.data);

        for (let i = 0; i < res.data.length; i += 2) {
          organizedList.push([
            res.data[i],
            res.data[i + 1] ? res.data[i + 1] : null
          ]);
        }

        console.log("Organized List: ", organizedList);

        setList(organizedList);
      })
      .catch(err => console.log(err));
  }, [user_id, flipped, search]);

  const deleteRestaurant = id => {
    console.log(id);
    axiosWithAuth()
      .delete(`/users/${user_id}/passport/${id}`)
      .then(res => {
        console.log(res);
        console.log(id);
        this.props.history.push("/passport");
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  return (
    <>
      <PassportList>
        {passportList.map(e => (
          <PassportBook key={e.id} restaurants={e}></PassportBook>
        ))}
      </PassportList>
    </>
  );
}

export default Passport;
