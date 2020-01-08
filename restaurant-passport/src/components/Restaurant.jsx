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
        <div className="restaurant-card-front" >
          <PassportEdit values={restaurant} setFlipped={setFlipped} />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="restaurant-card-back">
          <h3>Name: {restaurant.name}</h3>
          <p>Date: {restaurant.date} </p>
          <p>
            Address: {restaurant.address} {restaurant.city}, {restaurant.state}{" "}
            {restaurant.zipcode}
          </p>
          <p>Number: {restaurant.phone_number}</p>
            <a href={restaurant.website_url}>Website</a>
          <p>Rating: {restaurant.rating}</p>
          <p>Notes: {restaurant.notes}</p>
          <p>Stamped: {restaurant.stamped}</p>
          <button onClick={(e) => onClickDelete(e)} >Delete</button>
          <button onClick={() => setFlipped(false)} >Edit</button>
        </div>
      </>
    );
  }
}

export default Restaurant;