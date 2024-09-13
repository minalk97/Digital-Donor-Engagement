import {
  FETCH_PAGES_REQUEST,
  FETCH_PAGES_SUCCESS,
  FETCH_PAGES_FAILURE,
} from "../actions/types";

const initialState = {
  loading: false,
  pages: [],
  error: "",
};

export const fundraisingPagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PAGES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PAGES_SUCCESS:
      return {
        loading: false,
        pages: action.payload,
        error: "",
      };
    case FETCH_PAGES_FAILURE:
      return {
        loading: false,
        pages: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
