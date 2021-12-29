import { combineReducers } from "redux";
import usersReducer from "./reducer/users/users";
import MeasurementReducer from "./reducer/measurements/measurements";

// combining all redux reducers , which are simple functions which an object or state
const reducers = combineReducers({
  users: usersReducer,
  measurements: MeasurementReducer,
});

export default reducers;
//This RootState is required to use useSelector later on
export type RootState = ReturnType<typeof reducers>;
