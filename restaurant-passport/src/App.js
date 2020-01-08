import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import axiosWithAuth from "./utils";

import PrivateRoute from "./components/PrivateRoute";
import Navigation from "./components/Navigation";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import PassportForm from "./components/PassportForm";
import Passport from "./components/Passport";
import Explore from "./components/Explore";

class App extends Component {
  //todo add state for storing registered people based on local storage changes of username, remove duplicate based on username change and if the password was the same.

  state = {
    rememberMe: "",
    rememberEmail: "",
    rememberPassword: "",
    flipped: true
  };

  user_id = localStorage.getItem("user_id");

  componentWillMount() {
    // console.log("storage", localStorage);
    this.setState({
      rememberMe: this.localStorageGet("passportRemember") || false,
      rememberEmail: this.localStorageGet("passportEmail") || "",
      rememberPassword: this.localStorageGet("passportPassword") || ""
    });
  }

  localStorageGet = item =>
    // console.log("LSG", item)
    JSON.parse(localStorage.getItem(item));

  localStorageSet = (item, value) => {
    // console.log("localStorageSet", item, value);
    localStorage.setItem(item, JSON.stringify(value));
  };

<<<<<<< HEAD
  setFlipped = e => {
    this.setState({flipped: e})
    // console.log(this.state.passport[0]);
    // this.setState(...{
    // });
    // console.log(e);
    // console.log("flipped");
  };

=======
>>>>>>> fddc76a2daa6687884ac261701db3af0abca10f6
  addToPassport = restaurant => {
    console.log("added to restaurant", restaurant);
    const newRestaurant = {
      restaurant_id: restaurant.id
    };
    axiosWithAuth()
      .post(
        `https://rpass.herokuapp.com/api/users/${this.user_id}/passport`,
        newRestaurant
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

<<<<<<< HEAD

=======
>>>>>>> fddc76a2daa6687884ac261701db3af0abca10f6
  render() {
    return (
      <div className="App">
        <Route path="/">
          <Navigation />
        </Route>

        <Route exact path="/signup" render={(props) => (<SignUpForm
            props={props}
            setLocalStorage={this.localStorageSet}
            getLocalStorage={this.localStorageGet}
        />)} />

        <Route exact path="/login" render={(props) => (<LoginForm
            props={props}
            setLocalStorage={this.localStorageSet}
            getLocalStorage={this.localStorageGet}
            remember={this.state.rememberMe}
            email={this.state.rememberEmail}
            password={this.state.rememberPassword}
        />)} />

        <Route path="/passport-form">
          <PassportForm />
        </Route>
<<<<<<< HEAD
        <PrivateRoute exact path="/passport" component={Passport} passport={this.state.passport} setFlipped={this.setFlipped} flipped={this.state.flipped} />
        <PrivateRoute exact path="/explore" component={Explore} add={this.addToPassport} />
=======
        <PrivateRoute
          exact
          path="/passport"
          component={Passport}
          passport={this.state.passport}
        />
        <PrivateRoute
          exact
          path="/explore"
          component={Explore}
          add={this.addToPassport}
        />
        {/* <Route path="/explore">
          <Explore add={this.addToPassport} />
        </Route> */}
>>>>>>> fddc76a2daa6687884ac261701db3af0abca10f6
      </div>
    );
  }
}

export default App;

// date, name, address, city, zip, number, website, rating, notes stamped
