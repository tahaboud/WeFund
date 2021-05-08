const initialState = {
  events: [],
  data: null,
  errors: null,
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "EVENTS_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_EVENTS_SUCCESS":
      return {
        ...state,
        events: action.payload,
        errors: null,
        isLoading: false,
      };
    case "GET_EVENTS_FAIL":
      return {
        ...state,
        isLoading: false,
      };
    case "ATTENDANT_ADD_SUCCESS":
      return {
        ...state,
        data: action.payload,
        errors: null,
        isLoading: false,
      };
    case "ATTENDANT_ADD_FAIL":
      return {
        ...state,
        data: null,
        errors: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
}
