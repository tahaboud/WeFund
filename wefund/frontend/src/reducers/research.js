import {ADD_SEARCH,GET_SEARCH}  from '../actions/types.js';

const initialState = {
  researcher: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SEARCH:
      return {
        ...state,
        events: action.payload,

      };

    case ADD_SEARCH:
      return {
        ...state,
        events: [...state.events, action.payload],
      };

    default:
      return state;
  }
}