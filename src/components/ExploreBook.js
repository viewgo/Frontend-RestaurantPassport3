import React, { useState, useEffect } from "react";
import axios from "axios";

//STYLES
import { PassportList, PassportItem } from "../styles/explore";

function ExploreBook({ add, restaurants }) {
  return (
    <PassportItem>
      <div className="passport-wrapper">
        <div className="left-page">
          <div className="img-container">
            <img
              className="explore-img"
              src={restaurants[0].img_url}
              alt={restaurants[0].name}
            />
          </div>

          <div>
            <h3>{restaurants[0].name}</h3>
            <br />
            <p>{restaurants[0].address}</p>
            <p>
              {restaurants[0].city}, {restaurants[0].state}{" "}
              {restaurants[0].zipcode}
            </p>
            <p>{restaurants[0].phone_number}</p>
            <p>
              <a href={restaurants[0].website_url}>Website</a>
            </p>
            <button onClick={() => add(restaurants[0])}>Add to Passport</button>
          </div>
        </div>

        <div className="right-page">
          <div className="img-container">
            <img
              className="explore-img"
              src={restaurants[1].img_url}
              alt={restaurants[1].name}
            />
          </div>

          <div>
            <h3>{restaurants[1].name}</h3>
            <br />
            <p>{restaurants[1].address}</p>
            <p>
              {restaurants[1].city}, {restaurants[1].state}{" "}
              {restaurants[1].zipcode}
            </p>
            <p>{restaurants[1].phone_number}</p>
            <p>
              <a href={restaurants[1].website_url}>Website</a>
            </p>
            <button onClick={() => add(restaurants[1])}>Add to Passport</button>
          </div>
        </div>
      </div>
    </PassportItem>
  );
}

export default ExploreBook;
