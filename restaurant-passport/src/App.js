import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";

class App extends React.Component {
  state = {
    state: []
  };

  render() {
    return (
      <div className="App">
        <Route path="/">
          <Navigation />
        </Route >
        <Route path="/signup">
          <SignUpForm />
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
      </div>
    );
  }
}
export default App;
