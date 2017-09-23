import { combineReducers } from "redux";
import delegates from "./delegates";
import navigation from "./navigation";
import resources from "./resources";

export default combineReducers({
  delegates, navigation, resources
});
