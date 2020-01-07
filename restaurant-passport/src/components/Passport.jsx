import React, { useState, useEffect } from "react";
import Restaurant from "./Restaurant";
import axiosWithAuth from "../utils/index";

function Passport({ passport, setFlipped }) {
  console.log(passport);

  const [passportList, setList] = useState([]);
  const user_id = localStorage.getItem("user_id");
  const [input, setInput] = useState({
    search: ""
  });
  const [search, setSearch] = useState(true);
  useEffect(() => {
    axiosWithAuth()
      .get(
        `https://rpass.herokuapp.com/api/users/${user_id}/passport?search=${input.search}`
      )
      .then(res => {
        console.log("passport", res.data);
        setList(res.data);
      })
      .catch(err => console.log(err));
  }, [search]);

  const onFormSubmit = evt => {
    evt.preventDefault();
    // setInput({
    //   search: ""
    // });
    setSearch(!search);
  };
  const onChangeHandler = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          className="passport-search"
          type="text"
          placeholder="search"
          name="search"
          id="passportSearch"
          onChange={onChangeHandler}
          value={input.search}
        />
        <button type="submit">Search Passport</button>
      </form>
      <div className="passport-list">
        {passportList.map(e => (
          <Restaurant restaurant={e} setFlipped={setFlipped} />
        ))}
      </div>
    </>
  );
}

export default Passport;
