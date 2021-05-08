const initialState = {
  researcher: null,
  data: null,
  errors: null,
  isLoading: false,
};

const researcherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RESEARCHER_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "RESEARCHER_SUCCESS":
      return {
        ...state,
        researcher: null,
        data: action.payload,
        errors: null,
        isLoading: false,
      };
    case "RESEARCHER_FAIL":
      return {
        ...state,
        researcher: null,
        data: null,
        errors: action.payload,
        isLoading: false,
      };
    case "RESEARCHER_GET_SUCCESS":
      return {
        ...state,
        researcher: action.payload,
        data: null,
        errors: null,
        isLoading: false,
      };
    case "RESEARCHER_GET_FAIL":
      return {
        ...state,
        researcher: null,
        data: null,
        errors: action.payload,
        isLoading: false,
      };
    case "RESEARCHER_UPDATE_SUCCESS":
      return {
        ...state,
        researcher: action.payload,
        data: null,
        errors: null,
        isLoading: false,
      };
    case "RESEARCHER_UPDATE_FAIL":
      return {
        ...state,
        errors: action.payload,
        isLoading: false,
      };
    case "MEDIA_URL":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        errors: null,
      };
    default:
      return state;
  }
};

export default researcherReducer;
