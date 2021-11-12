import axios from "axios";
import { getResearcher } from "./researcherAction";
import { getResearch } from "./researchAction";

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
  // User Loading
  dispatch({ type: "USER_LOADING" });

  axios
    .get("/api/account/user/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: "USER_LOADED",
        payload: res.data,
      });
      dispatch(getResearcher());
      dispatch(getResearch());
    })
    .catch((err) => {
      dispatch({
        type: "AUTH_ERROR",
        payload: err.response.data,
      });
    });
};

// LOGIN USER
export const login = (email, password, recaptcha) => (dispatch) => {
  // User Loading
  dispatch({ type: "USER_LOADING" });

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request Body
  const body = JSON.stringify({ email, password, recaptcha });

  axios
    .post("/api/account/login/", body, config)
    .then((res) => {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data,
      });
      dispatch(getResearcher());
      dispatch(getResearch());
    })
    .catch((err) => {
      dispatch({
        type: "LOGIN_FAILED",
        payload: err.response.data,
      });
    });
};

// REGISTER USER
export const register =
  ({ first_name, last_name, password, email, recaptcha }) =>
  (dispatch) => {
    // User Loading
    dispatch({ type: "USER_LOADING" });

    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Request Body

    const body = JSON.stringify({
      first_name,
      last_name,
      email,
      password,
      recaptcha,
    });

    axios
      .post("/api/account/user/register/", body, config)
      .then((res) => {
        dispatch({
          type: "REGISTER_SUCCESS",
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: "REGISTER_FAIL",
          payload: err.response.data,
        });
      });
  };

// CONFIRM EMAIL
export const confirmEmail =
  ({ id, token }) =>
  (dispatch) => {
    // User Loading
    dispatch({ type: "USER_LOADING" });

    axios
      .post(`/api/account/user/activate/${id}/${token}/`)
      .then((res) => {
        dispatch({
          type: "EMAIL_CONFIRMED",
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: "EMAIL_FAILED",
          payload: err.response.data,
        });
      });
  };

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
  axios
    .post("/api/account/logout/", null, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: "LOGOUT_SUCCESS",
      });
    })
    .catch((err) => {
      dispatch({
        type: "LOGOUT_SUCCESS",
        payload: err.response.data,
      });
    });
};

// Request Reset Password
export const requestResetPassword = (email, recaptcha) => (dispatch) => {
  // User Loading
  dispatch({ type: "USER_LOADING" });

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request Body

  const body = JSON.stringify({ email, recaptcha });

  axios
    .post("/api/account/password-reset/", body, config)
    .then((res) => {
      dispatch({
        type: "RESET_EMAIL_SENT",
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: "RESET_EMAIL_FAIL",
        payload: err.response.data,
      });
    });
};

// Check Reset Password Token
export const checkResetPasswordToken = (pk, token) => (dispatch) => {
  // Loading
  dispatch({ type: "USER_LOADING" });

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request Body

  const body = JSON.stringify({ pk, token });

  axios
    .post("/api/account/check/", body, config)
    .then((res) => {
      dispatch({ type: "TOKEN_VALID", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "TOKEN_INVALID", payload: err.response.data });
    });
};

// Reset Password
export const resetPassword =
  ({ password1, password2, pk, token }) =>
  (dispatch) => {
    // Is Loading
    dispatch({ type: "USER_LOADING" });

    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Request Body
    const body = JSON.stringify({ password1, password2 });

    axios
      .post(`/api/account/password-reset/${pk}/${token}/`, body, config)
      .then((res) => {
        dispatch({ type: "PASSWORD_RESET_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "PASSWORD_RESET_FAIL", payload: err.response.data });
      });
  };

export const updateUser =
  ({ first_name, last_name }) =>
  (dispatch, getState) => {
    dispatch({ type: "USER_LOADING" });

    const body = JSON.stringify({ first_name, last_name });

    axios
      .post("/api/account/user/", body, tokenConfig(getState))
      .then((res) => {
        dispatch({ type: "USER_UPDATE_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "USER_UPDATE_FAIL", payload: err.response.data });
      });
  };

// Setup config with token - helper function
export const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};

// Funtion to free auth state
export const freeAuth = () => (dispatch) => {
  dispatch({ type: "FREE_AUTH" });
};
