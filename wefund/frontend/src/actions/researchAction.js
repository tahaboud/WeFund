import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import {ADD_SEARCH,GET_SEARCH} from './types';

// GET Search
export const getSearch = () => (dispatch, getState) => {
  axios
    .get('/api/research/',tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_SEARCH,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};
// Register Search

export const addResearch = (Search) => (dispatch, getState) => {
  axios
    .post('/api/research/', Search, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addResearch: 'Research Added'}));
      dispatch({
        type: ADD_SEARCH,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};
//TokenConfiguration Part
export const tokenConfig1 = (getState) => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "multipart/form-data/json",
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