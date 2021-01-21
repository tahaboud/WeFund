import { GET_EVENTS, DELETE_LEAD, ADD_EVENT, CLEAR_LEADS,GET_EVENT_ATTENDANCES } from '../actions/types.js';

const initialState = {
  events: [],
  event_attends:[]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        events: action.payload,

      };
      case GET_EVENT_ATTENDANCES:
        return {
          ...state,
          event_attends: action.payload,
  
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