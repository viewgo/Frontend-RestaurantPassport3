import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";

class App extends React.Component {
  state = {
    state: []
  };

  render() {
    return (
      <div className="App">
        {/* <Navigation /> */}
        <Route to="/" exact>
          <SignUpForm />
        </Route>
      </div>
    );
  }
}
export default App;
