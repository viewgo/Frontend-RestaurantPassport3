import React, { useState, useEffect } from "react";
import axios from "axios";

//todo add new restaurants to state here

function Explore() {
  const [localList, setLocalList] = useState([]);
  useEffect(() => {
    axios
      .get("https://rpass.herokuapp.com/api/explore")
      .then(res => setLocalList(res.data))
      .catch(err => console.log(err));
  }, []);
  console.log(localList);
  return (
    <div className="explore-list">
      {localList.map(e => (
        <>
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
        </>
      ))}
    </div>
  );
}

export default Explore;
