import { combineReducers } from "redux";
import auth from "./authReducer";
import event from "./event";
import user from "./user";
import errors from "./errors";
import messages from "./messages";

export default combineReducers({
  auth,
  event,
  user,
  errors,
  messages
});
//export type RootState = ReturnType<typeof rootReducer>

