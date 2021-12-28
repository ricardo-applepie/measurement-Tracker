import { combineReducers } from 'redux';
import  usersReducer from './reducer/users/users';
import weightReducer from './reducer/weights/weights'; 

// All reducers are combined here 
const reducers = combineReducers({
users: usersReducer , 
weights: weightReducer
});


export default reducers;
//This RootState is required to use useSelector later on 
export type RootState = ReturnType<typeof reducers>;