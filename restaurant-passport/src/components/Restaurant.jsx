import React from "react";

function Restaurant({ restaurant, setFlipped }) {
  console.log("rest", restaurant);
  if (restaurant.flipped === false) {
    return (
      <>
        <div
          className="restaurant-card-front"
          id={restaurant.date}
          onClick={() => setFlipped()}
        >
          <h3>{restaurant.name}</h3>
          <p>{restaurant.city}</p>
          <p>{restaurant.rating}</p>
          <p>{restaurant.stamped}</p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="restaurant-card-back">
          <h3>{restaurant.name}</h3>
          <p className="card-back-date">Date: {restaurant.date} </p>
          <p className="card-back-address">
            {restaurant.address} {restaurant.city}, {restaurant.state}{" "}
            {restaurant.zipcode}
          </p>
          <p className="card-back-number">Number: {restaurant.phone_number}</p>
          <p className="card-back-website">
            <a href={restaurant.website_url}>Website</a>
          </p>
          <p className="card-back-rating">Rating: {restaurant.rating}</p>
          <p className="card-back-notes">Notes: {restaurant.notes}</p>
          <p className="card-back-stamped">Stamped: {restaurant.stamped}</p>
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
