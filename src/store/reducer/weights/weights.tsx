import { Action } from "../../actions/actionTypes/actionTypes";

const INITIALSTATE = {

}

function weightReducer(state = INITIALSTATE , action: Action) {
    switch (action.type) {
        case 'addWeight':
            return state ; 
            break;
    
        default:
            return state ; 
    }
}
export default weightReducer ; 
