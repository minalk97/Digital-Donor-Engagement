import { combineReducers } from "redux";
import { fundraisingPagesReducer } from "./fundraisingPagesReducer";
import { fundraisingPageReducer } from "./fundraisingPageReducer";
import { commentsReducer } from "./commentsReducer";
import { createCommentReducer } from "./createCommentReducer";
import { createDonationReducer } from "./createDonationReducer";
import { authReducer } from "./authReducer";
import { fetchAllUsersReducer } from "./AllUsersReducer";
import { getUserReducer } from "./getUserReducer";
import { updateUserReducer } from "./updateUserReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  fundraisingPages: fundraisingPagesReducer,
  fundraisingPage: fundraisingPageReducer,
  comments: commentsReducer,
  comment: createCommentReducer,
  createDonation: createDonationReducer,
  fetchAllUsers: fetchAllUsersReducer,
  getUser: getUserReducer,
  updateUser: updateUserReducer,
});

export default rootReducer;
