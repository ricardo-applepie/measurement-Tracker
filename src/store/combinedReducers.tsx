import { combineReducers } from "redux";
import usersReducer from "./reducer/users/users";
import MeasurementReducer from "./reducer/weights/weights";

// combining all redux reducers , which are simple functions which an object or state
const reducers = combineReducers({
  users: usersReducer,
  weights: MeasurementReducer,
});

export default reducers;
//This RootState is required to use useSelector later on
export type RootState = ReturnType<typeof reducers>;
