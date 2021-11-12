const initialState = {
  research: null,
  data: null,
  errors: null,
  isLoading: false,
};

const researchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RESEARCH_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_RESEARCH_SUCCESS":
      return {
        ...state,
        data: action.payload,
        research: action.payload,
        errors: null,
        isLoading: false,
      };

    case "GET_RESEARCH_FAIL":
      return {
        ...state,
        data: action.payload,
        research: null,
        errors: null,
        isLoading: false,
      };
    case "RESEARCH_ADD_SUCCESS":
      return {
        ...state,
        research: action.payload.research,
        data: action.payload.response,
        errors: null,
        isLoading: false,
      };
    case "RESEARCH_EDIT_SUCCESS":
      return {
        ...state,
        research: action.payload.research,
        data: action.payload.response,
        errors: null,
        isLoading: false,
      };
    case "RESEARCH_EDIT_FAIL":
      return {
        ...state,
        data: null,
        errors: action.payload,
        isLoading: false,
      };
    case "RESEARCH_ADD_FAIL":
      return {
        ...state,
        data: null,
        errors: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default researchReducer;
