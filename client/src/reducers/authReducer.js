import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  ADD_CATEGORY_ARTICLE
} from "../actions/types";

const initialState = {
  tokenAuth: sessionStorage.getItem("tokenAuth"),
  token: null,
  isAuthenticated: null,
  isLoading: false,
  user: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isloading: false,
        user: action.payload
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      // let authData = { token: action.payload.token, auth: true };
      sessionStorage.setItem(
        "tokenAuth",
        JSON.stringify({ token: action.payload.token, auth: true })
      );
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        token: "",
        tokenAuth: sessionStorage.getItem("tokenAuth"),
        isLoading: false
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      sessionStorage.clear();
      return {
        ...state,
        tokenAuth: null,
        token: "",
        user: null,
        isAuthenticated: false,
        isLoading: false
      };
    default:
      return state;
  }
}
