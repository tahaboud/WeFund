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
import Events from "./pages/Events";
import Profile from "./pages/Profile";
import ThankYou from "./pages/ThankYou";
import EmailConfirmed from "./pages/EmailConfirmed";
import Contact from "./pages/Contact";
import ResetPassword from "./pages/ResetPassword";
import Zoom from "./pages/ZoomMeeting";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import CompleteRegistration from "./pages/CompleteRegistration";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import Nav from "./content/Nav";
import Footer from "./content/Footer";
//Import css pagination
function App() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (token) {
      dispatch(loadUser());
    }
  }, []);
  const theme = createMuiTheme({
    palette: {
      type: "light",
      
    },
    spacing: value => value ** 2,
    /*overrides: {
      MuiGrid: {
        root: {
          margin: "10px",
          padding: "10px"
        }
      }
    }*/
  
  });
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            {isAuthenticated ? <Redirect to="/profile" /> : <SignInUp />}
          </Route>
          <Route exact path="/event">
            <Events />
          </Route>
          <Route exact path="/thankyou">
            <ThankYou />
          </Route>
          <Route exact path="/user/confirm-email/:id/:token">
            <EmailConfirmed />
          </Route>
          <Route exact path="/user/reset-password/:id/:token">
            <ResetPassword />
          </Route>
          <Route exact path="/zoom">
            <Zoom />
          </Route>
          <Route exact path="/profile">
            {isAuthenticated ?   (<div><Nav /><Profile /> <Footer /></div>) : <Redirect to="/login" />}
          </Route>
          <Route exact path="/signup">
            {!isAuthenticated ? <Register /> : <Redirect to="/profile" />}
          </Route>
          <Route exact path="/contact">
             <Contact />
          </Route>
          <Route exact path="/admin">
            {isAuthenticated &&
              user &&
              user.user &&
              (user.user.is_admin ? <Admin /> : <Redirect to="/" />)}
          </Route>
          <Route exact path="/register">
            {isAuthenticated ? (
              user && !user.is_researcher ? (
                <CompleteRegistration />
              ) : (
                <Redirect to="/profile" />
              )
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
