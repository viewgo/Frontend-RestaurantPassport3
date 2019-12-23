import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import PassportForm from "./components/PassportForm";

class App extends React.Component {
  //todo add state for storing registered people based on local storage changes of username, remove duplicate based on username change and if the password was the same.
  state = {
    rememberMe: "",
    rememberEmail: "",
    rememberPassword: "",
    users: [
      {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      location: "",
      remember: ""
      }
    ],
    restaurants: [
      {
        date: "",
        name: "",
        address: "",
        city: "",
        zip: "",
        number: "",
        website: "",
        rating: "",
        notes: "",
        stamped: ""
      }
    ]
  };
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

  //   componentDidMount() {
  //     console.log("storage", localStorage);
  //     this.setState({
  //       rememberMe: this.localStorageGet("passportRemember") || false,
  //       rememberEmail: this.localStorageGet("passportEmail") || "",
  //       rememberPassword: this.localStorageGet("passportPassword") || ""
  //     });
  //   }

  render() {
    // console.log("State", this.state);
    return (
      <div className="App">
        <Route path="/">
          <Navigation />
        </Route>
        <Route path="/signup">
          <SignUpForm
            setLocalStorage={this.localStorageSet}
            getLocalStorage={this.localStorageGet}
          />
        </Route>
        <Route path="/login">
          <LoginForm
            setLocalStorage={this.localStorageSet}
            getLocalStorage={this.localStorageGet}
            remember={this.state.rememberMe}
            email={this.state.rememberEmail}
            password={this.state.rememberPassword}
          />
        </Route>
        <Route path="/passport-form">
          {/*//! fix prop here  */}
          <PassportForm 
          date={this.state.restaurants[0].date} 
          name={this.state.restaurants[0].name} address={this.state.restaurants[0].address} 
          city={this.state.restaurants[0].city} 
          zip={this.state.restaurants[0].zip} 
          number={this.state.restaurants[0].number} 
          website={this.state.restaurants[0].website} 
          rating={this.state.restaurants[0].rating}
          notes={this.state.restaurants[0].notes}
          stamped={this.state.restaurants[0].stamped} />
        </Route>
      </div>
    );
  }
}

export default App;

// date, name, address, city, zip, number, website, rating, notes stamped
