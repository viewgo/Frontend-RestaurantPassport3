import axiosWithAuth from '../utils';

// Action type: LOGIN
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

//Action type: SIGNUP
export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const login = credentials => dispatch => {
    dispatch({ type: LOGIN_START });
    return (
      axiosWithAuth()
        .post("/auth/login", credentials)
        .then(res => {
          console.log("LOGIN_RES: ", res);
          localStorage.setItem("token", res.data.token);
          dispatch({ type: LOGIN_SUCCESS, payload: res.data });
          // return true;
        })
        .catch(err => {
          console.log("LOGIN ERR: ", err);
          dispatch({ type: LOGIN_FAILURE, payload: err.response.message });
        })
    );
};

export const register = newUser => dispatch => {
    dispatch({ type: REGISTER_START });
    return (
      axiosWithAuth()
        .post("/auth/register", newUser)
        .then(res => {
            console.log("REGISTER RES: ", res);
            dispatch({ type: REGISTER_SUCCESS });
        })
        .catch(err => {
            console.log("REGISTER ERR: ", err);
            dispatch({ type: REGISTER_FAILURE });
        })
    );
};