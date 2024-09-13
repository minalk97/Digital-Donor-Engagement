import axiosInstance from "../axiosInstance";
import {
  CREATE_DONATION_REQUEST,
  CREATE_DONATION_SUCCESS,
  CREATE_DONATION_FAIL,
} from "./types";

export const createDonation = (donation) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_DONATION_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axiosInstance.post(
        "/new-donation",
        donation,
        config
      );
      dispatch({
        type: CREATE_DONATION_SUCCESS,
        payload: response.data,
      });
      return response.data;
    } catch (error) {
      dispatch({
        type: CREATE_DONATION_FAIL,
        payload: error.message,
      });
    }
  };
};
