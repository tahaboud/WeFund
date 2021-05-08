const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  isLoading: false,
  isAdmin: false,
  user: null,
  data: null,
  errors: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FREE_AUTH":
      return { ...state, errors: null };
    case "USER_LOADING":
      return { ...state, isLoading: true, errors: null, data: null };
    case "SET_ERRORS":
      return { ...state, isLoading: false, errors: action.payload };
    case "USER_LOADED":
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        isAuthenticated: true,
      };
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        isAuthenticated: true,
        errors: null,
        token: action.payload.token,
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        errors: null,
      };
    case "EMAIL_CONFIRMED":
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        errors: null,
      };
    case "RESET_EMAIL_SENT":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        errors: null,
      };
    case "TOKEN_VALID":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        errors: null,
      };
    case "TOKEN_INVALID":
      localStorage.removeItem("token");
      return {
        ...state,
        user: null,
        isLoading: false,
        errors: action.payload,
        data: null,
        token: null,
      };
    case "PASSWORD_RESET_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        errors: null,
      };
    case "PASSWORD_RESET_FAIL":
      return {
        ...state,
        data: null,
        user: null,
        isLoading: false,
        errors: action.payload,
      };
    case "RESET_EMAIL_FAIL":
      return {
        ...state,
        user: null,
        data: null,
        isLoading: false,
        errors: action.payload,
      };
    case "EMAIL_FAILED":
      return {
        ...state,
        data: null,
        isLoading: false,
        errors: action.payload,
      };
    case "LOGIN_FAILED":
    case "LOGOUT_SUCCESS":
    case "REGISTER_FAIL":
      localStorage.removeItem("token");
      return {
        ...state,
        isLoading: false,
        user: null,
        isAuthenticated: false,
        errors: action.payload,
        token: null,
      };
    case "AUTH_ERROR":
      localStorage.removeItem("token");
      return {
        ...state,
        isLoading: false,
        token: null,
        user: null,
        isAuthenticated: false,
      };
    case "USER_UPDATE_SUCCESS":
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        errors: null,
      };
    case "USER_UPDATE_FAIL":
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    default:
      return { ...state };
  }
};

export default authReducer;
