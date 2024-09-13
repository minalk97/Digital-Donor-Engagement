import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
} from "../actions/types";

const initialState = {
  loading: false,
  users: [],
  error: null,
};

export const fetchAllUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_USERS_SUCCESS:
      return { loading: false, users: action.payload };
    case FETCH_USERS_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
