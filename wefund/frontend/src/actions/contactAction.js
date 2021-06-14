import axios from 'axios';
import { createMessage, returnErrors } from './messagesAction';


import {ADD_CONTACT,GET_CONTACT} from './types';

// GET Contacts
export const getContacts = () => (dispatch, getState) => {
  axios
    .get('/api/addins/contact/',tokenConfig1(getState))
    .then((res) => {
      dispatch({
        type: GET_CONTACT,
        payload: res.data,
      });
   
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};
// ADD CONTACT
export const addContact = (contact) => (dispatch, getState) => {
  axios
    .post('/api/addins/contact/', contact)
    .then((res) => {
      dispatch(createMessage({ addContact: 'Contact Added'}));
      dispatch({
        type: ADD_CONTACT,
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
 // if (token) {
    config.headers["Authorization"] = `Token ${token}`;
 // }

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