import axios from "axios";
import store from "./reducers/store";
import { logoutUser } from "./actions/userActions";

/*Reference: Axios, n.d. Getting started | axios docs. https://axios-http.com/. */
const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}/api`, // Base URL of backend
  withCredentials: true, // Sends cookies with requests
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        await axiosInstance.post("/token");

        return axiosInstance(originalRequest);
      } catch (e) {
        store.dispatch(logoutUser());
        window.location.href = "/";
        return Promise.reject(e);
      }
    }
    store.dispatch(logoutUser());
    window.location.href = "/";
    return Promise.reject(error);
  }
);

export default axiosInstance;
