import React, { useState, useEffect } from "react";
import Restaurant from "./Restaurant";
import axiosWithAuth from "../utils/index";

//COMPONENTS
import PassportBook from "./PassportBook";

//STYLES
import { PassportList, PassportItem } from "../styles/explore";

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

  const onFormSubmit = evt => {
    evt.preventDefault();
    console.log("passportList", passportList, "search", input.search);
    input.search === ""
      ? setSearch(!search)
      : setList(
          passportList.filter(e => {
            const values = Object.values(e);
            console.log("values", values);
            // return values.forEach(e =>
            //   JSON.stringify(e)
            //     .toLowerCase()
            //     .includes(input.search.trim())
            // );
            return e.name.toLowerCase().includes(input.search.trim());
          })
        );
    setInput({
      search: ""
    });
  };
  const onChangeHandler = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value.toLowerCase()
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
