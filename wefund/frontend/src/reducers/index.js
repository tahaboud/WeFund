import { combineReducers } from "redux";
import auth from "./authReducer";
import event from "./event";
import user from "./user";
import errors from "./errors";
import messages from "./messages";
import researcher from "./researcher";
import research from "./research";
import zoom from "./zoomReducer";
export default combineReducers({
  auth,
  event,
  user,
  errors,
  messages,
  researcher,
  research,
  zoom,
});
//export type RootState = ReturnType<typeof rootReducer>

