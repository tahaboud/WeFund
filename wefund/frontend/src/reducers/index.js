import { combineReducers } from "redux";
import auth from "./authReducer";
import events from "./eventsReducer";
import researcher from "./researcherReducer";
import research from "./researchReducer";
import zoom from "./zoomReducer";
import admin from "./adminReducer";

export default combineReducers({
  auth,
  admin,
  events,
  researcher,
  research,
  zoom,
});
//export type RootState = ReturnType<typeof rootReducer>
