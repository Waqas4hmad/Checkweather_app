import { combineReducers } from "redux";
import cityClice from "./citySlice";
import weather from "./weatherReducer";
export default combineReducers({
  weather,
  cityClice
});