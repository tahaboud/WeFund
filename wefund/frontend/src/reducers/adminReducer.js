const initialState = {
  users: null,
  researches: null,
  events: null,
  attendants: null,
  data: null,
  errors: null,
  isLoading: false,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADMIN_LOADING":
      return { ...state, isLoading: true };
    case "USERS_GET_SUCCESS":
      return {
        ...state,
        users: action.payload,
        errors: null,
        isLoading: false,
      };
    case "USERS_GET_FAIL":
      return {
        ...state,
        users: null,
        errors: action.payload,
        isLoading: false,
      };
    case "RESEARCHES_GET_SUCCESS":
      return {
        ...state,
        researches: action.payload,
        errors: null,
        isLoading: false,
      };
    case "RESEARCHES_GET_FAIL":
      return {
        ...state,
        researches: null,
        errors: action.payload,
        isLoading: false,
      };
    case "ADMIN_MEDIA_URL":
      return {
        ...state,
        data: action.payload,
      };
    case "USER_UPDATE_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case "USER_UPDATE_FAIL":
      return {
        ...state,
        errors: action.payload,
        isLoading: false,
      };
    case "ADMIN_EVENTS_GET_SUCCESS":
      return {
        ...state,
        events: action.payload,
        isLoading: false,
        errors: null,
      };
    case "ADMIN_EVENTS_GET_FAIL":
      return {
        ...state,
        events: null,
        isLoading: false,
        errors: action.payload,
      };
    case "EVENT_UPDATE_SUCCESS":
      return {
        ...state,
        data: action.payload,
        errors: null,
        isLoading: false,
      };
    case "EVENT_UPDATE_FAIL":
      return {
        ...state,
        errors: action.payload,
        data: null,
        isLoading: false,
      };
    case "EVENT_DELETE_SUCCESS":
      return {
        ...state,
        errors: null,
        data: null,
        isLoading: false,
      };
    case "EVENT_DELETE_FAIL":
      return {
        ...state,
        errors: action.payload,
        data: null,
        isLoading: false,
      };
    case "ATTENDANTS_GET_SUCCESS":
      return {
        ...state,
        attendants: action.payload,
        errors: null,
        isLoading: false,
      };
    case "ATTENDANTS_GET_FAIL":
      return {
        ...state,
        attendants: null,
        errors: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default adminReducer;
