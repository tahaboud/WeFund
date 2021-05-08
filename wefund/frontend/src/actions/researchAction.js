import axios from "axios";

// GET Search
export const getResearch = () => (dispatch, getState) => {
  dispatch({ type: "RESEARCH_LOADING" });
  axios
    .get("/api/research/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: "GET_RESEARCH_SUCCESS",
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({ type: "GET_RESEARCH_FAIL", payload: err.response.data })
    );
};
// Register Search

export const addResearch = ({
  title,
  user_type,
  looking_for,
  interested_in,
  description,
  organization,
  papers,
}) => (dispatch, getState) => {
  dispatch({ type: "RESEARCH_LOADING" });

  // Get Token
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Token ${token}`,
    },
  };

  // Data
  const formData = new FormData();
  formData.append("title", title);
  formData.append("user_type", user_type);
  formData.append("looking_for", looking_for);
  formData.append("interested_in", interested_in);
  formData.append("description", description);
  formData.append("organization", organization);
  formData.append("papers", papers);

  axios
    .post("/api/research/", formData, config)
    .then((res) => {
      dispatch({ type: "RESEARCH_ADDED_SUCCESS", payload: res.data });
    })
    .catch((err) =>
      dispatch({ type: "RESEARCH_ADDED_FAIL", payload: err.response.data })
    );
};

export const editResearch = ({
  title,
  user_type,
  looking_for,
  interested_in,
  description,
  organization,
  papers,
}) => (dispatch, getState) => {
  dispatch({ type: "RESEARCH_LOADING" });

  // Get Token
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Token ${token}`,
    },
  };

  // Data
  const formData = new FormData();
  formData.append("title", title);
  formData.append("user_type", user_type);
  formData.append("looking_for", looking_for);
  formData.append("interested_in", interested_in);
  formData.append("description", description);
  formData.append("organization", organization);
  papers !== "" && formData.append("papers", papers);

  axios
    .put("/api/research/", formData, config)
    .then((res) => {
      dispatch({ type: "RESEARCH_EDITED_SUCCESS", payload: res.data });
    })
    .catch((err) =>
      dispatch({ type: "RESEARCH_EDITED_FAIL", payload: err.response.data })
    );
};

//TokenConfiguration Part
export const tokenConfig1 = (getState) => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
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
