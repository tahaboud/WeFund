import { ADD_RESEARCHER,GET_RESEARCHER } from '../actions/types.js';

const initialState = {
  researcher: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RESEARCHER:
      return {
        ...state,
        researcher: action.payload,

      };

    case ADD_RESEARCHER:
      return {
        ...state,
        researcher: [...state.events, action.payload],
      };

    default:
      return state;
  }
}