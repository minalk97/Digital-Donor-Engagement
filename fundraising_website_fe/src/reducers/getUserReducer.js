import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
} from "../actions/types";

const initialState = {
  loading: false,
  user: null,
  error: null,
};

export const getUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_USER_SUCCESS:
      return { loading: false, user: action.payload };
    case FETCH_USER_FAIL:
      return { ...state, loading: false, error: action.payload, user: null };

    default:
      return state;
  }
};
