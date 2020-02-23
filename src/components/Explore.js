import React, { useState, useEffect } from "react";
import axios from "axios";

//COMPONENTS
import ExploreBook from "./ExploreBook";

//STYLES
import { PassportList } from "../styles/explore";

function Explore({ add }) {
  const [localList, setLocalList] = useState([]);
  const [input, setInput] = useState({
    search: "",
    location: ""
  });
  const [searchTest, setSearchTest] = useState(false);

  const user_location = localStorage.getItem("user_location");

  useEffect(() => {
    const location = input.location ? input.location : user_location;
    console.log(
      `https://rpass.herokuapp.com/api/explore?search=${input.search}&location=${location}`
    );
    axios
      .get(
        `https://rpass.herokuapp.com/api/explore?search=${input.search}&location=${location}`
      )
      .then(res => {
        const organizedList = [];

        for (let i = 0; i < res.data.length; i += 2) {
          organizedList.push([
            res.data[i],
            res.data[i + 1] ? res.data[i + 1] : null
          ]);
        }

        console.log("Organized List: ", organizedList);

        setLocalList(organizedList);

        setInput({
          search: "",
          location: ""
        });
      })
      .catch(err => console.log(err));
    // eslint-disable-next-line
  }, [searchTest]);

  const onFormSubmit = evt => {
    evt.preventDefault();
    setSearchTest(!searchTest);
  };

  const onChangeHandler = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <form onSubmit={onFormSubmit} className="explore-search">
        {/* <label className="form-label-input">
          Search: */}
        <input
          className="form-input"
          type="text"
          placeholder="Keyword"
          name="search"
          id="search"
          onChange={onChangeHandler}
          value={input.search}
        />
        {/* </label> */}
        {/* <label className="form-label-location">
          Location: */}
        <input
          className="form-location"
          type="text"
          placeholder="Location"
          name="location"
          id="location"
          onChange={onChangeHandler}
          value={input.location}
        />
        {/* </label> */}
        <button type="submit" className="form-btn">
          Explore
        </button>
      </form>

      <br />

      <PassportList>
        {localList.map(e => (
          <ExploreBook key={e.id} add={add} restaurants={e}></ExploreBook>
        ))}
      </PassportList>
    </>
  );
}

export default Explore;
