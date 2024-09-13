import {
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAIL,
} from "../actions/types";

const initialState = {
  loading: false,
  error: "",
  comment: {},
};

export const createCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COMMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_COMMENT_SUCCESS:
      return {
        loading: false,
        comment: action.payload,
        error: "",
      };
    case CREATE_COMMENT_FAIL:
      return {
        loading: false,
        comment: {},
        error: action.payload,
      };
    default:
      return state;
  }
};
