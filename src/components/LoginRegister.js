import React from "react";

import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function LoginRegister(props) {
  console.log("LoginRegister PROPS:", props);
  return (
    <div className="login-signup-wrapper">
      <h2>Log In</h2>
      <br />
      <LoginForm
        props={props}
        setToken={props.setToken}
        setLocalStorage={props.setLocalStorage}
        getLocalStorage={props.getLocalStorage}
      />
      <br />
      <br />
      <br />
      <h2>Register</h2>
      <br />
      <SignUpForm
        props={props}
        setToken={props.setToken}
        setLocalStorage={props.setLocalStorage}
        getLocalStorage={props.getLocalStorage}
      />
    </div>
  );
}

export default LoginRegister;
