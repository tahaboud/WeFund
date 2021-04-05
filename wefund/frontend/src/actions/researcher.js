import axios from 'axios';
import { createMessage, returnErrors } from './messages';

import {ADD_RESEARCHER,GET_RESEARCHER} from './types';

// GET Researchers
export const getResearchers = () => (dispatch, getState) => {
  axios
    .get('/api/account/admin/users/',tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_RESEARCHER,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};
// Register Registrations

export const addResearcher = (researcher) => (dispatch, getState) => {
  axios
    .post('/api/account/researcher/', researcher, tokenConfig1(getState))
    .then((res) => {
      dispatch(createMessage({ ADD_RESEARCHER: 'Researcher Added'}));
      dispatch({
        type: ADD_RESEARCHER,
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
  
    config.headers["Authorization"] = `Token ${token}`;
  

  return config;
};