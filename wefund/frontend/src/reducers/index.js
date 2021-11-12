import { combineReducers } from "redux";
import auth from "./authReducer";
import events from "./eventsReducer";
import researcher from "./researcherReducer";
import research from "./researchReducer";
import zoom from "./zoomReducer";
import admin from "./adminReducer";
import contact from "./contactReducer";

export default combineReducers({
  auth,
  admin,
  events,
  research,
  researcher,
  zoom,
  contact,
});
