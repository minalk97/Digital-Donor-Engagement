import {
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAIL,
} from "../actions/types";

const initialState = {
  loading: false,
  comments: [],
  error: "",
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_COMMENTS_SUCCESS:
      return {
        loading: false,
        comments: action.payload,
        error: "",
      };
    case GET_COMMENTS_FAIL:
      return {
        loading: false,
        comments: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
