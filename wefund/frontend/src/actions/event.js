import axios from 'axios';
import { createMessage, returnErrors } from './messages';


import {ADD_EVENT,GET_EVENTS} from './types';

// GET LEADS
export const getEvents = () => (dispatch, getState) => {
  axios
    .get('/api/events/')
    .then((res) => {
      dispatch({
        type: GET_EVENTS,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};


// ADD LEAD
export const addEvent = (event) => (dispatch, getState) => {
  axios
    .post('/api/events/', event, tokenConfig1(getState))
    .then((res) => {
      dispatch(createMessage({ addEvent: 'Event Added'}));
      dispatch({
        type: ADD_EVENT,
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