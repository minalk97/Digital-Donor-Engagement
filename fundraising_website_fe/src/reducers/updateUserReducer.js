import {
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
} from "../actions/types";

const initialState = {
  loading: false,
  user: [],
  error: null,
};

export const updateUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_REQUEST:
      return { ...state, loading: true, error: null };
    case UPDATE_USER_SUCCESS:
      return { loading: false, users: action.payload };
    case UPDATE_USER_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
