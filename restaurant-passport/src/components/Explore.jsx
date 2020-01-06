import React, { useState, useEffect } from "react";
import axios from "axios";

//todo add new restaurants to state here
//https://rpass.herokuapp.com/api/explore?search=chinese&location=newyork
function Explore() {
  const [localList, setLocalList] = useState([]);
  const [input, setInput] = useState({
    search: "",
    location: ""
  });
  //   const [searchTest, setSearchTest] = useState("0");

  useEffect(() => {
    axios
      .get(
        `https://rpass.herokuapp.com/api/explore?search=${input.search}&location=${input.location}`
      )
      .then(res => setLocalList(res.data))
      .catch(err => console.log(err));
  }, [input]);
  //   console.log(localList);

  const onFormSubmit = evt => {
    evt.preventDefault();
    // setSearchTest("1");
    setInput({
      search: "",
      location: ""
    });
  };
  //   console.log(searchTest);
  const onChangeHandler = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div className="explore-wrapper">
      <form onSubmit={onFormSubmit} className="explore-search">
        <label className="form-label-input">
          Search:
          <input
            className="form-input"
            type="text"
            placeholder="search"
            name="search"
            id="search"
            onChange={onChangeHandler}
            value={input.search}
          />
        </label>
        <label className="form-label-location">
          Location:
          <input
            className="form-location"
            type="text"
            placeholder="Location"
            name="location"
            id="location"
            onChange={onChangeHandler}
            value={input.location}
          />
        </label>
        <button type="submit" className="form-btn">
          Search!
        </button>
      </form>
      <div className="explore-list">
        {localList.map(e => (
          <div key={e.id} className="explore-card">
            <img className="explore-img" src={e.img_url} alt={e.name} />
            <h3>Name: {e.name}</h3>
            <p>Address: {e.address}</p>
            <p>City: {e.city}</p>
            <p>State: {e.state}</p>
            <p>Zip: {e.zipcode}</p>
            <p>Number: {e.phone_number}</p>
            <p>
              <a href={e.website_url}>Website</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
