import React from "react";

function Restaurant({ restaurant, setFlipped }) {
  console.log(restaurant);
  if (restaurant.flipped === false) {
    return (
      <>
        <div
          className="restaurant-card-front"
          id={restaurant.date}
          onClick={() => setFlipped()}
        >
          <h3>Name: {restaurant.name}</h3>
          <p>City: {restaurant.city}</p>
          <p>Rating: {restaurant.rating}</p>
          <p>Stamped: {restaurant.stamped}</p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="restaurant-card-back">
          <h3>Name: {restaurant.name}</h3>
          <p>Date: {restaurant.date} </p>
          <p>Address {restaurant.address}</p>
          <p>City {restaurant.city}</p>
          <p>Zip {restaurant.zip}</p>
          <p>Number {restaurant.number}</p>
          <p>Website {restaurant.website}</p>
          <p>Rating: {restaurant.rating}</p>
          <p>Notes: {restaurant.notes}</p>
          <p>Stamped: {restaurant.stamped}</p>
        </div>
      </>
    );
  }
}

export default Restaurant;

// {
//         date: "",
//         name: "",
//         address: "",
//         city: "",
//         zip: "",
//         number: "",
//         website: "",
//         rating: "",
//         notes: "",
//         stamped: ""
//       }
