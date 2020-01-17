import React from "react";

import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function LoginRegister(props) {
  console.log("LoginRegister PROPS:", props);
  return (
    <>
      <LoginForm
        props={props}
        setLocalStorage={props.setLocalStorage}
        getLocalStorage={props.getLocalStorage}
      />
      <br />
      <br />
      <br />
      <SignUpForm
        props={props}
        setLocalStorage={props.setLocalStorage}
        getLocalStorage={props.getLocalStorage}
      />
    </>
  );
}

export default LoginRegister;
