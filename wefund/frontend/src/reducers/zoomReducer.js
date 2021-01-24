const initialState = {
  zoomIsLoading: true,
  data: null,
  errors: null,
  meetingPass: "934xyG",
  signature: null,
};

const zoomReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ZOOM_LOADING":
      return {
        ...state,
        zoomIsLoading: true,
      };
    case "SIGNATURE_GENERATED":
      return {
        ...state,
        zoomIsLoading: false,
        data: action.payload,
        errors: null,
        signature: action.payload.signature,
      };
    case "SIGNATURE_FAILED":
      return {
        ...state,
        zoomIsLoading: false,
        data: null,
        errors: action.payload,
        signature: null,
      };
    case "SET_MEETING_PASS":
      return {
        ...state,
        meetingPass: action.payload,
      };
    default:
      return { ...state };
  }
};

export default zoomReducer;
