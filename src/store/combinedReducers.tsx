import { combineReducers } from "redux";
import usersReducer from "./reducer/users/users";
import MeasurementReducer from "./reducer/measurements/measurements";

// Combining all redux reducers , which are simple functions that returns an object or state
const reducers = combineReducers({
  users: usersReducer,
  weights: MeasurementReducer,
});

export default reducers;
// This RootState is required to use useSelector later on
export type RootState = ReturnType<typeof reducers>;
