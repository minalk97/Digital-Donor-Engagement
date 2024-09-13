import axiosInstance from "../axiosInstance";
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  REFRESH_TOKEN,
} from "./types";

export const fetchAllUsers = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_USERS_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axiosInstance.get("/users", config);
      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: response.data,
      });
      return response.data;
    } catch (error) {
      dispatch({
        type: FETCH_USERS_FAIL,
        payload: error.message,
      });
    }
  };
};

export const updateUserInfo = (user) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_USER_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axiosInstance.put(
        `/users/${user.id}`,
        user,
        config
      );
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: response.data,
      });
      fetchUser(user.id);
      return response.data;
    } catch (error) {
      dispatch({
        type: UPDATE_USER_FAIL,
        payload: error.message,
      });
      return error.message;
    }
  };
};

export const fetchUser = (id) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_USER_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axiosInstance.get(`/users/${id}`, config);
      dispatch({
        type: FETCH_USER_SUCCESS,
        payload: response.data,
      });
      return response.data;
    } catch (error) {
      dispatch({
        type: FETCH_USER_FAIL,
        payload: error.message,
      });
    }
  };
};

export const registerUser = (user) => {
  return async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axiosInstance.post("/register", user, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data,
      });
      sessionStorage.setItem("isAuthenticated", true);
      sessionStorage.setItem("userId", response.data.userInfo.id);
      fetchUser(response.data.userInfo.id);
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.message,
      });
    }
  };
};

export const refreshToken = () => async (dispatch) => {
  try {
    const response = await axiosInstance.post("/token");

    sessionStorage.setItem("isAuthenticated", true);
    dispatch({ type: REFRESH_TOKEN });
    return response.data;
  } catch (error) {
    dispatch({ type: LOGOUT });
  }
};

export const logoutUser = () => async (dispatch) => {
  await axiosInstance.post("/logout");
  sessionStorage.removeItem("isAuthenticated"); // Clear session storage on logout
  sessionStorage.removeItem("userId");
  dispatch({ type: LOGOUT });
};
