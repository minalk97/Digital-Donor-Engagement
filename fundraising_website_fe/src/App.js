import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import Registration from "./Components/Registration";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import FundraisingPages from "./Components/FundraisingPages";
import FundraisingPage from "./Components/FundraisingPages/FundraisingPage";
import DonationForm from "./Components/FundraisingPages/DonationForm";
import Logout from "./Components/Logout";
import { fetchUser } from "./actions/userActions";

const App = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.getUser.user);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const sessionId = sessionStorage.getItem("userId");

  useEffect(() => {
    const getUser = async () => {
      if (isAuthenticated && sessionId) {
        await dispatch(fetchUser(sessionId));
      }
    };

    getUser();
  }, [dispatch, isAuthenticated, sessionId]);

  const PrivateRoutes = () => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Header user={user} />
        <div className="App">
          <ToastContainer />
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/fundraising-pages" element={<FundraisingPages />} />
              <Route
                path="/fundraising-page/:id"
                element={<FundraisingPage />}
              />
              <Route
                path="/fundraising-page/:id/donation-form"
                element={<DonationForm user={user} />}
              />
              <Route path="/logout" element={<Logout />} />
            </Route>
            <Route path="/" element={<Registration />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
