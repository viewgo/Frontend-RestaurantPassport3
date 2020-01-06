import React from "react";
import Restaurant from "./Restaurant";

function Passport({ passport, setFlipped }) {
  console.log(passport);
  return (
    <>
      {passport.map(e => (
        <Restaurant restaurant={e} setFlipped={setFlipped} />
      ))}
    </>
  );
}

export default Passport;
