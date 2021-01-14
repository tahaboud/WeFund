import axios from 'axios';
import { createMessage, returnErrors } from './messages';


import {GET_USERS} from './types';

// GET USERS
export const getUsers = () => (dispatch, getState) => {
  axios
    .get('api/account/admin/users/', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_USERS,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};
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
