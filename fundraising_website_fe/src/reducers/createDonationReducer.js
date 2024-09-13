import {
  CREATE_DONATION_REQUEST,
  CREATE_DONATION_SUCCESS,
  CREATE_DONATION_FAIL,
} from "../actions/types";

const initialState = {
  loading: false,
  error: "",
  donation: {},
};

export const createDonationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_DONATION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_DONATION_SUCCESS:
      return {
        loading: false,
        donation: action.payload,
        error: "",
      };
    case CREATE_DONATION_FAIL:
      return {
        loading: false,
        donation: {},
        error: action.payload,
      };
    default:
      return state;
  }
};
