import axios from "axios";
import { multipartTokenConfig, tokenConfig } from "./config";

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

export const addResearch =
  ({
    title,
    user_type,
    looking_for,
    interested_in,
    description,
    organization,
    papers,
  }) =>
  (dispatch, getState) => {
    dispatch({ type: "RESEARCH_LOADING" });

    const formData = new FormData();
    formData.append("title", title);
    formData.append("user_type", user_type);
    formData.append("looking_for", looking_for);
    formData.append("interested_in", interested_in);
    formData.append("description", description);
    formData.append("organization", organization);
    formData.append("papers", papers);

    axios
      .post("/api/research/", formData, multipartTokenConfig(getState))
      .then((res) => {
        dispatch({ type: "RESEARCH_ADD_SUCCESS", payload: res.data });
      })
      .catch((err) =>
        dispatch({ type: "RESEARCH_ADD_FAIL", payload: err.response.data })
      );
  };

export const editResearch =
  ({
    title,
    user_type,
    looking_for,
    interested_in,
    description,
    organization,
    papers,
  }) =>
  (dispatch, getState) => {
    dispatch({ type: "RESEARCH_LOADING" });

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
      .put("/api/research/", formData, multipartTokenConfig(getState))
      .then((res) => {
        dispatch({ type: "RESEARCH_EDIT_SUCCESS", payload: res.data });
      })
      .catch((err) =>
        dispatch({ type: "RESEARCH_EDIT_FAIL", payload: err.response.data })
      );
  };
