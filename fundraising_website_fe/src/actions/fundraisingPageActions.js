import axiosInstance from "../axiosInstance";
import {
  FETCH_PAGES_REQUEST,
  FETCH_PAGES_SUCCESS,
  FETCH_PAGES_FAILURE,
  FETCH_PAGE_REQUEST,
  FETCH_PAGE_SUCCESS,
  FETCH_PAGE_FAILURE,
} from "./types";

// Action creators
const fetchPagesRequest = () => ({
  type: FETCH_PAGES_REQUEST,
});

const fetchPagesSuccess = (pages) => ({
  type: FETCH_PAGES_SUCCESS,
  payload: pages,
});

const fetchPagesFailure = (error) => ({
  type: FETCH_PAGES_FAILURE,
  payload: error,
});

const fetchPageRequest = () => ({
  type: FETCH_PAGE_REQUEST,
});

const fetchPageSuccess = (page) => ({
  type: FETCH_PAGE_SUCCESS,
  payload: page,
});

const fetchPageFailure = (error) => ({
  type: FETCH_PAGE_FAILURE,
  payload: error,
});

export const fetchFundraisingPages = () => {
  return (dispatch) => {
    dispatch(fetchPagesRequest());
    axiosInstance
      .get("/fundraising-pages")
      .then((response) => {
        const pages = response.data;
        dispatch(fetchPagesSuccess(pages));
      })
      .catch((error) => {
        dispatch(fetchPagesFailure(error.message));
      });
  };
};

export const fetchFundraisingPageByID = (page_id) => {
  return (dispatch) => {
    dispatch(fetchPageRequest());
    axiosInstance
      .get(`/fundraising-pages/${page_id}`)
      .then((response) => {
        const page = response.data;
        dispatch(fetchPageSuccess(page));
      })
      .catch((error) => {
        dispatch(fetchPageFailure(error.message));
      });
  };
};
