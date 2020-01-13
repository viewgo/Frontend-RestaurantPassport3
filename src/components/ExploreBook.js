import React, { useState, useEffect } from "react";
import axios from "axios";

//STYLES
import { PassportList, PassportItem } from "../styles/explore";

import exploreStamp from "../img/explorestamp.png";

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
            <h3 className="title">{restaurants[0].name}</h3>
            <p className="restaurant-categories">
              {restaurants[0].category1}
              {restaurants[0].category2
                ? `, ${restaurants[0].category2}`
                : null}
              {restaurants[0].category3
                ? `, ${restaurants[0].category3}`
                : null}
            </p>
            <br />
            <p>{restaurants[0].address}</p>
            <p>
              {restaurants[0].city}, {restaurants[0].state}{" "}
              {restaurants[0].zipcode}
            </p>
            <p>{restaurants[0].phone_number}</p>
          </div>
          <img
            className="explore-stamp"
            onClick={() => add(restaurants[0])}
            src={exploreStamp}
          ></img>
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
            <h3 className="title">{restaurants[1].name}</h3>
            <p className="restaurant-categories">
              {restaurants[0].category1}
              {restaurants[0].category2
                ? `, ${restaurants[0].category2}`
                : null}
              {restaurants[0].category3
                ? `, ${restaurants[0].category3}`
                : null}
            </p>
            <br />
            <p>{restaurants[1].address}</p>
            <p>
              {restaurants[1].city}, {restaurants[1].state}{" "}
              {restaurants[1].zipcode}
            </p>
            <p>{restaurants[1].phone_number}</p>
          </div>
          <img
            className="explore-stamp"
            onClick={() => add(restaurants[0])}
            src={exploreStamp}
          ></img>
        </div>
      </div>
    </PassportItem>
  );
}

export default ExploreBook;
