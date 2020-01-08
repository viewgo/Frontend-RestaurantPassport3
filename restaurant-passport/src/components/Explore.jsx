import React, { useState, useEffect } from "react";
import axios from "axios";

//todo add new restaurants to state here

function Explore({ add }) {
  const [localList, setLocalList] = useState([]);
  const [input, setInput] = useState({
    search: "",
    location: ""
  });
  const [searchTest, setSearchTest] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://rpass.herokuapp.com/api/explore?search=${input.search}&location=${input.location}`
      )
      .then(res => {
        console.log(res.data);
        setLocalList(res.data);
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
    <div className="explore-wrapper">
      <form onSubmit={onFormSubmit} className="explore-search">
        {/* <label className="form-label-input">
          Search: */}
        <input
          className="form-input"
          type="text"
          placeholder="Search by food type"
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
          placeholder="Search by location"
          name="location"
          id="location"
          onChange={onChangeHandler}
          value={input.location}
        />
        {/* </label> */}
        <button type="submit" className="form-btn">
          Search Type/Location
        </button>
      </form>
      <div className="explore-list">
        {localList.map(e => (
          <div key={e.id} className="explore-card">
            <img className="explore-img" src={e.img_url} alt={e.name} />
            <h3>{e.name}</h3>
            <p className="explore-card-address">
              {e.address} {e.city}, {e.state} {e.zipcode}
            </p>
            <p className="explore-card-number">
              Tel: <a href="tel:{e.phone_number}">{e.phone_number}</a>{" "}
            </p>
            <p className="explore-card-website">
              <a href={e.website_url}>Website</a>
            </p>
            <button onClick={() => add(e)}>Add to Passport</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
