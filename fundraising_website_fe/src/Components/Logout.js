import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../actions/userActions";
import { FETCH_USER_FAIL } from "../actions/types";

const Logout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const logout = async () => {
      await dispatch(
        logoutUser({
          isAuthenticated: false,
        })
      );

      dispatch({ type: FETCH_USER_FAIL });
    };

    logout();
  }, [dispatch]);
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="login-container border rounded p-4">
            <div className="mb-4">
              You have successfully logout. Thank you for participating in this
              research study you can return to the survey.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
