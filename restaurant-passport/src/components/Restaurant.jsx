import React from "react";
import PassportEdit from "./PassportEdit";

function Restaurant({ restaurant, setFlipped, deleteRestaurant, flipped }) {
  console.log("restaurant", restaurant);

  const onClickDelete = e => {
    e.preventDefault();
    deleteRestaurant(restaurant.restaurant_id);
  };

  if (flipped === false) {
    return (
      <>
        {/* <div className="restaurant-card-front" > */}
        <PassportEdit values={restaurant} setFlipped={setFlipped} />
        {/* </div> */}
      </>
    );
  } else {
    return (
      <>
        <div className="restaurant-card-back">
          <img
            className="card-back-img"
            src={restaurant.img_url}
            alt={restaurant.name}
          />
          <h3>{restaurant.name}</h3>
          <p className="card-back-date">Date: {restaurant.date} </p>
          <p className="card-back-address">
            {restaurant.address} {restaurant.city}, {restaurant.state}{" "}
            {restaurant.zipcode}
          </p>
          <p className="card-back-number">
            Tel:{" "}
            <a href="tel:{restaurant.phone_number}">
              {restaurant.phone_number}
            </a>
          </p>
          <p className="card-back-website">
            <a href={restaurant.website_url}>Website</a>
          </p>
          <p className="card-back-rating">Rating: {restaurant.rating}</p>
          <p className="card-back-notes">Notes: {restaurant.notes}</p>
          <p className="card-back-stamped">
            Stamped: {JSON.stringify(restaurant.stamped)}
          </p>
          <div className="passport-btn-div">
            <button
              className="passport-btn-edit"
              onClick={() => setFlipped(false)}
            >
              Edit
            </button>
            <button
              className="passport-btn-delete"
              onClick={e => onClickDelete(e)}
            >
              Delete
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Restaurant;
