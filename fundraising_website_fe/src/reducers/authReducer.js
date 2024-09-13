import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT,
  REFRESH_TOKEN,
} from "../actions/types";

const initialState = {
  isAuthenticated: sessionStorage.getItem("isAuthenticated") || false,
  loading: false,
  user: null,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { ...state, loading: true, error: null };

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.userInfo,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        isAuthenticated: true,
        error: null,
      };

    case REGISTER_FAIL:
      return { ...state, loading: false, error: action.payload };

    case LOGOUT:
      return {
        ...state,
        accessToken: null,
        refreshToken: null,
      };

    case REFRESH_TOKEN:
      return {
        ...state,
        isAuthenticated: true,
      };

    default:
      return state;
  }
};
