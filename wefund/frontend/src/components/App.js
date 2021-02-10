import React, { useEffect } from "react";
import ReactDOM from "react-dom";
// Import Router
import { Switch, Route, BrowserRouter } from "react-router-dom";
// Import Redux
import { Provider, useDispatch } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/authAction";
// Import Pages
import Home from "./pages/Home";
import SignInUp from "./pages/SignInUp";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import Support from "./pages/Support";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import EmailConfirmed from "./pages/EmailConfirmed";
import RequestReset from "./pages/RequestReset";
import ResetPassword from "./pages/ResetPassword";
import ZoomMeeting from "./pages/ZoomMeeting";

function App() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(loadUser());}})
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
          {/* <ZoomMeeting /> */}
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
