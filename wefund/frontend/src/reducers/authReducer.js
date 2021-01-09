const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: "",
  errors: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FREE_AUTH":
      return { ...state, errors: null, user: "" };
    case "USER_LOADING":
      return { ...state, isLoading: true, errors: null };
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
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        user: action.payload,
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
        user: action.payload,
        isLoading: false,
        errors: null,
      };
    case "TOKEN_VALID":
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        errors: null,
      };
    case "TOKEN_INVALID":
      return {
        ...state,
        user: null,
        isLoading: false,
        errors: action.payload,
      };
    case "PASSWORD_RESET_SUCCESS":
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        errors: null,
      };
    case "PASSWORD_RESET_FAIL":
      return {
        ...state,
        user: null,
        isLoading: false,
        errors: action.payload,
      };
    case "RESET_EMAIL_FAIL":
      return {
        ...state,
        user: null,
        isLoading: false,
        errors: action.payload,
      };
    case "EMAIL_FAILED":
      return {
        ...state,
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
        user: "",
        isAuthenticated: false,
        errors: action.payload,
      };
    case "AUTH_ERROR":
      localStorage.removeItem("token");
      return {
        ...state,
        isLoading: false,
        user: "",
        isAuthenticated: false,
      };
    default:
      return { ...state };
  }
};

export default authReducer;
