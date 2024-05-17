import { combineReducers } from "redux";
import userReducer from "./userReducer";
import fetchUserReducer from "./fetchUserReducer";

const rootReducer = combineReducers({
  users: userReducer,
  fetchData: fetchUserReducer,
});

export default rootReducer;
