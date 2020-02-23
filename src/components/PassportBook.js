import React from "react";

//STYLES
import { PassportItem } from "../styles/explore";

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
            <p>Stamped: {restaurants[0].stamped ? "True" : "False"}</p>
            <br />
            <button onClick={() => add(restaurants[0])}>Add to Passport</button>
          </div>
        </div>

        <div className="right-page">
          <div className="img-container">
            {restaurants[1] ? (
              <img
                className="explore-img"
                src={restaurants[1].img_url}
                alt={restaurants[1].name}
              />
            ) : null}
          </div>

          <div>
            {restaurants[1] ? <h3>{restaurants[1].name}</h3> : null}
            <br />
            {restaurants[1] ? (
              <p>Stamped: {restaurants[1].stamped ? "True" : "False"}</p>
            ) : null}
            <br />
            {restaurants[1] ? (
              <button onClick={() => add(restaurants[1])}>
                Add to Passport
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </PassportItem>
  );
}

export default ExploreBook;
