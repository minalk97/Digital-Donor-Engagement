import axiosInstance from "../axiosInstance";
import {
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAIL,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAIL,
} from "./types";

export const getComments = (page_id) => {
  return async (dispatch) => {
    dispatch({ type: GET_COMMENTS_REQUEST });
    try {
      const response = await axiosInstance.get(`/comments/${page_id}`);
      dispatch({
        type: GET_COMMENTS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: GET_COMMENTS_FAIL,
        payload: error.message,
      });
    }
  };
};

export const createComment = (user) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_COMMENT_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axiosInstance.post("/new-comment", user, config);
      dispatch({
        type: CREATE_COMMENT_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_COMMENT_FAIL,
        payload: error.message,
      });
    }
  };
};
