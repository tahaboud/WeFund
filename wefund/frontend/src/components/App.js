import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
// Import Router
import { Switch, Route, BrowserRouter } from "react-router-dom";
// Import Redux
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/authAction";
// Import Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Events from "./pages/Events";
import Profile from "./pages/Profile";
import ThankYou from "./pages/ThankYou";
import EmailConfirmed from "./pages/EmailConfirmed";
import Contact from "./pages/Contact";
import ResetPassword from "./pages/ResetPassword";
import AboutUs from "./pages/About";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import ApplicationForm from "./pages/ApplicationForm";
import { Redirect } from "react-router-dom";
import RegisterResearcher from "./pages/RegisterResearcher";
import EditProfile from "./pages/EditProfile";
import Application from "./pages/Application";
import EditApplication from "./pages/EditApplication";
import RequestPassword from "./pages/RequestPassword";
import Page404 from "./pages/Page404";

//Import css pagination
function App() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [isFirstRender, setIsFirstRender] = useState(true);
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (token) {
      dispatch(loadUser());
    }
    setIsFirstRender(false);
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          {!isFirstRender ? (
            isAuthenticated ? (
              <Redirect to="/profile" />
            ) : (
              <Login />
            )
          ) : (
            ""
          )}
        </Route>
        <Route exact path="/event">
          <Events />
        </Route>
        <Route exact path="/about">
          <AboutUs />
        </Route>
        <Route exact path="/webinar">
          <AboutUs />
        </Route>
        <Route exact path="/thankyou">
          <ThankYou />
        </Route>
        <Route exact path="/resetpassword">
          <RequestPassword />
        </Route>
        <Route exact path="/user/confirm-email/:id/:token">
          <EmailConfirmed />
        </Route>
        <Route exact path="/user/reset-password/:id/:token">
          <ResetPassword />
        </Route>
        <Route exact path="/profile">
          {!isFirstRender ? (
            isAuthenticated ? (
              <Profile />
            ) : (
              <Redirect to="/login" />
            )
          ) : (
            ""
          )}
        </Route>
        <Route exact path="/researcher">
          <RegisterResearcher />
        </Route>
        <Route exact path="/signup">
          {!isFirstRender ? (
            !isAuthenticated ? (
              <Register />
            ) : (
              <Redirect to="/profile" />
            )
          ) : (
            ""
          )}
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/admin">
          {!isFirstRender && !isLoading ? (
            isAuthenticated && user && user.user.is_admin ? (
              <Admin />
            ) : (
              <Redirect to="/" />
            )
          ) : (
            ""
          )}
        </Route>
        <Route exact path="/submitapplication">
          {!isFirstRender && !isLoading ? (
            isAuthenticated ? (
              <ApplicationForm />
            ) : (
              <Redirect to="/login" />
            )
          ) : (
            ""
          )}
        </Route>
        <Route exact path="/editprofile">
          {!isFirstRender && !isLoading ? (
            isAuthenticated ? (
              <EditProfile />
            ) : (
              <Redirect to="/login" />
            )
          ) : (
            ""
          )}
        </Route>
        <Route exact path="/application">
          {!isFirstRender && !isLoading ? (
            isAuthenticated ? (
              <Application />
            ) : (
              <Redirect to="/login" />
            )
          ) : (
            ""
          )}
        </Route>
        <Route exact path="/editapplication">
          {!isFirstRender && !isLoading ? (
            isAuthenticated ? (
              <EditApplication />
            ) : (
              <Redirect to="/login" />
            )
          ) : (
            ""
          )}
        </Route>
        <Route>
          <Page404 />
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
