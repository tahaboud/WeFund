import { GET_EVENTS, DELETE_LEAD, ADD_EVENT, CLEAR_LEADS } from '../actions/types.js';

const initialState = {
  events: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        events: action.payload,
      };

    case ADD_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload],
      };

    default:
      return state;
  }
}