import React from "react";
import Restaurant from "./Restaurant";

function Passport({ passport, setFlipped }) {
  console.log(passport);
  //todo add get request to retrieve users passports from the api
  return (
    <>
      {passport.map(e => (
        <Restaurant restaurant={e} setFlipped={setFlipped} />
      ))}
    </>
  );
}

export default Passport;
