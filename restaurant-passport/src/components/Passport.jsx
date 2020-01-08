import React, { useState, useEffect } from "react";
import Restaurant from "./Restaurant";
import axiosWithAuth from "../utils/index";


function Passport({ passport, setFlipped, flipped }) {
  console.log(passport);

  const [passportList, setList] = useState([]);
  const user_id = localStorage.getItem("user_id");
  const [input, setInput] = useState({
    search: ""
  });
  const [search, setSearch] = useState(true);
  useEffect(() => {
    axiosWithAuth()
      .get(`https://rpass.herokuapp.com/api/users/${user_id}/passport`)
      .then(res => {
        console.log("passport", res.data);
        setList(res.data);
      })
      .catch(err => console.log(err));
  }, [user_id, flipped]);

  const deleteRestaurant = id => {
    console.log(id)
    axiosWithAuth()
      .delete(`/users/${user_id}/passport/${id}`)
      .then(res => {
        console.log(res);
        console.log(id);
        this.props.history.push('/passport')
      })
      .catch(err => {
        console.log(err.message);
      })
  }

  // useEffect(() => {
  //   axiosWithAuth()
  //     //  todo get searching endpoint here
  //     .get(`search endpoint`)
  //     .then(res => {
  //       console.log("passportSearch", res.data);
  //       setList(res.data);
  //     })
  //     .catch(err => console.log(err));
  // }, [search]);

  const onFormSubmit = evt => {
    evt.preventDefault();
    setSearch(!search);
    setInput({
      search: ""
    });
  };
  const onChangeHandler = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  return (
<<<<<<< HEAD
    <div>
      {passportList.map(e => (
          <Restaurant key={e.restaurant_id} restaurant={e} setFlipped={setFlipped} deleteRestaurant={deleteRestaurant} flipped={flipped} />
      ))}
    </div>
=======
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
>>>>>>> fddc76a2daa6687884ac261701db3af0abca10f6
  );
}

export default Passport;
