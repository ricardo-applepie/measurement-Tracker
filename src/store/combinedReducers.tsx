import { combineReducers } from 'redux';
import usersReducer from './reducers/users/users';
import MeasurementReducer from './reducers/measurements/measurements';

// Combining all redux reducers , which are simple functions that returns an object or state .
const reducers = combineReducers({
  users: usersReducer,
  measurementsData: MeasurementReducer,
});

export default reducers;
//  RootState is required to use useSelector later on
export type RootState = ReturnType<typeof reducers>;
