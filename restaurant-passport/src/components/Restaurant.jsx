import React from "react";
import PassportEdit from "./PassportEdit";

function Restaurant({ restaurant, setFlipped, deleteRestaurant, flipped }) {
  console.log("restaurant", restaurant);

  const onClickDelete = (e) => {
    e.preventDefault();
    deleteRestaurant(restaurant.restaurant_id);
  }

  if (flipped === false) {
    return (
      <>
<<<<<<< HEAD
        <div className="restaurant-card-front" >
          <PassportEdit values={restaurant} setFlipped={setFlipped} />
=======
        <div
          className="restaurant-card-front"
          id={restaurant.date}
          onClick={() => setFlipped()}
        >
          <img
            className="explore-img"
            src={restaurant.img_url}
            alt={restaurant.name}
          />
          <h3>{restaurant.name}</h3>
          <p>{restaurant.city}</p>
          <p>{restaurant.rating}</p>
          <p>{restaurant.stamped}</p>
>>>>>>> fddc76a2daa6687884ac261701db3af0abca10f6
        </div>
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
<<<<<<< HEAD
          <p>Number: {restaurant.phone_number}</p>
            <a href={restaurant.website_url}>Website</a>
          <p>Rating: {restaurant.rating}</p>
          <p>Notes: {restaurant.notes}</p>
          <p>Stamped: {restaurant.stamped}</p>
          <button onClick={(e) => onClickDelete(e)} >Delete</button>
          <button onClick={() => setFlipped(false)} >Edit</button>
=======
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
          <p className="card-back-stamped">Stamped: {restaurant.stamped}</p>
>>>>>>> fddc76a2daa6687884ac261701db3af0abca10f6
        </div>
      </>
    );
  }
}

<<<<<<< HEAD
export default Restaurant;
=======
export default Restaurant;
>>>>>>> fddc76a2daa6687884ac261701db3af0abca10f6
