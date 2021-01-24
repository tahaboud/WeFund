import { combineReducers } from "redux";

import auth from "./authReducer";
import researcher from "./researcherReducer";
import zoom from "./zoomReducer";

export default combineReducers({
  auth,
  researcher,
  zoom,
});
