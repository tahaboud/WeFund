const initialState = {
  research: null,
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
        research: action.payload,
        errors: null,
        isLoading: false,
      };

    case "GET_RESEARCH_FAIL":
      return {
        ...state,
        research: null,
        errors: action.payload,
        isLoading: false,
      };
    case "RESEARCH_ADDED_SUCCESS":
      return {
        ...state,
        research: action.payload,
        errors: null,
        isLoading: false,
      };
    case "RESEARCH_EDITED_SUCCESS":
      return {
        ...state,
        research: action.payload,
        errors: null,
        isLoading: false,
      };
    case "RESEARCH_EDITED_FAIL":
      return {
        ...state,
        errors: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default researchReducer;
