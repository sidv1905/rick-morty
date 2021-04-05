import { combineReducers } from "redux";
import userReducer from "./userReducer";
import rickReducer from "./rickReducer";
const rootReducer = combineReducers({
  user: userReducer,
  cards: rickReducer,
});

export default rootReducer;
