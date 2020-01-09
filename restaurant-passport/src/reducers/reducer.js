import {
    LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE,
    REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE
} from '../actions/actions';

const initialState = {
    loggingIn: false,
    loggedIn: false,
    token: null,
    user_id: null
};

export default function reducer (state = initialState, action) {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true,
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('user_id', action.payload.user_id)
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                loggingIn: false,
                loggedIn: true,
                token: action.payload.token,
                user_id: action.payload.user_id
            }           
        case LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                loggedIn: false,
            }   
        case REGISTER_START: 
            return {
                ...state,
                loggingIn: true,
            }
        case REGISTER_SUCCESS: 
            return {
                ...state,
                loggingIn: false,
            }
        case REGISTER_FAILURE: 
            return {
                ...state
            }
        default:
                return state
    }
}