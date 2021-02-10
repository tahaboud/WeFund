import { combineReducers } from "redux";
import auth from "./authReducer";
<<<<<<< HEAD
import researcher from "./researcherReducer";
import zoom from "./zoomReducer";

export default combineReducers({
  auth,
  researcher,
=======
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
>>>>>>> 11f3d95493d5e3bb703820f3188c4bba136129a1
  zoom,
});
//export type RootState = ReturnType<typeof rootReducer>

