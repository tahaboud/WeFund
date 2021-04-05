import React, { useEffect } from "react";
import ReactDOM from "react-dom";
// Import Router
import { Switch, Route, BrowserRouter } from "react-router-dom";
// Import Redux
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/authAction";
// Import Pages
import Home from "./pages/Home";
import SignInUp from "./pages/SignInUp";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import Profile from "./pages/Profile";
import Support from "./pages/Support";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import EmailConfirmed from "./pages/EmailConfirmed";
import RequestReset from "./pages/RequestReset";
import ResetPassword from "./pages/ResetPassword";
import Zoom from "./pages/ZoomMeeting";
//Import Admin Lte
import AdminLte from "./admin_lte/App";
//Import css pagination
function App() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      dispatch(loadUser());
      console.log(user);
    }
  }, []);
  if (user.user) {
    if (user.user.is_admin === true)
      return (
        <div>
          <AdminLte />
        </div>
      );
  }
  if (user.User) {
    console.log(user);
    if (user.User.is_admin === true)
      return (
        <div>
          <AdminLte />
        </div>
      );
  }
  //else
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <SignInUp />
        </Route>
        <Route exact path="/about">
          <AboutUs />
        </Route>
        <Route exact path="/event">
          <Events />
        </Route>
        <Route exact path="/support">
          <Support />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/thankyou">
          <ThankYou />
        </Route>
        <Route exact path="/user/confirm-email/:id/:token">
          <EmailConfirmed />
        </Route>
        <Route exact path="/reset-password">
          <RequestReset />
        </Route>
        <Route exact path="/user/reset-password/:id/:token">
          <ResetPassword />
        </Route>
        <Route exact path="/zoom">
          <Zoom />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
