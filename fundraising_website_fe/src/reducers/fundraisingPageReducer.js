import {
  FETCH_PAGE_REQUEST,
  FETCH_PAGE_SUCCESS,
  FETCH_PAGE_FAILURE,
} from "../actions/types";

const initialState = {
  loading: false,
  page: [],
  error: "",
};

export const fundraisingPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PAGE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PAGE_SUCCESS:
      return {
        loading: false,
        page: action.payload,
        error: "",
      };
    case FETCH_PAGE_FAILURE:
      return {
        loading: false,
        page: {},
        error: action.payload,
      };
    default:
      return state;
  }
};
