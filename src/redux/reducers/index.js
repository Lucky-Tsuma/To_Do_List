import { combineReducers } from "redux";
import toDoReducer from "./counterToDoReducer";
import markCompleteReducer from "./markCompleteActionReducer";

const rootReducer = combineReducers({
  toDo: toDoReducer,
  markComplete: markCompleteReducer,
});

export default rootReducer;
