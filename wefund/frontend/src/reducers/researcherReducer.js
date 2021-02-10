const initialState = {
  researcher: null,
  data: null,
  errors: null,
  isLoading: false,
};

const researcherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "RESEARCHER_SUCCESS":
      return {
        ...state,
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

    default:
      return state;
  }
};

export default researcherReducer;
