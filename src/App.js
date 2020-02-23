import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import axiosWithAuth from "./utils";

//COMPONENTS
import PrivateRoute from "./components/PrivateRoute";
import Navigation from "./components/Navigation";
import PassportForm from "./components/PassportForm";
import Passport from "./components/Passport";
import Explore from "./components/Explore";
import LoginRegister from "./components/LoginRegister";

//STYLES
import { Body } from "./styles/index.js";

function App() {
  const [flipped, setFlipped] = useState();
  const [token, setToken] = useState(localStorage.getItem("token"));

  const user_id = localStorage.getItem("user_id");

  const localStorageGet = item => {
    JSON.parse(localStorage.getItem(item));
  };

  const localStorageSet = (item, value) => {
    localStorage.setItem(item, JSON.stringify(value));
  };

  const flipPassport = e => {};

  const addToPassport = restaurant => {
    const newRestaurant = {
      restaurant_id: restaurant.id
    };

    axiosWithAuth()
      .post(
        `https://rpass.herokuapp.com/api/users/${user_id}/passport`,
        newRestaurant
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const logout = e => {
    localStorage.clear();
    window.location.pathname = "/login";
  };

  return (
    <div className="App">
      <Navigation token={token} logout={logout} />

      <Body>
        <Route path="/">
          {token ? <Redirect to="/explore" /> : <Redirect to="/login" />}
        </Route>

        <Route
          exact
          path="/login"
          render={props => (
            <LoginRegister
              props={props}
              setToken={setToken}
              setLocalStorage={localStorageSet}
              getLocalStorage={localStorageGet}
            />
          )}
        />

        {/* <Route
          exact
          path="/signup"
          render={props => (
            <SignUpForm
              props={props}
              setLocalStorage={localStorageSet}
              getLocalStorage={localStorageGet}
            />
          )}
        />

        <Route
          exact
          path="/login"
          render={props => (
            <LoginForm
              props={props}
              setLocalStorage={localStorageSet}
              getLocalStorage={localStorageGet}
            />
          )}
        /> */}

        <Route path="/passport-form">
          <PassportForm />
        </Route>
        <PrivateRoute
          exact
          path="/passport"
          component={Passport}
          flipPassport={flipPassport}
          flipped={flipped}
        />
        <PrivateRoute
          exact
          path="/explore"
          component={Explore}
          add={addToPassport}
        />
      </Body>
    </div>
  );
}

export default App;
