import { Action } from "../../actions/actionsTypes";

let INITIALSTATE: Array<{ name: string; age: number; city: string }> = [
  {
    name: "Ricardo",
    age: 12,
    city: "Copenhagen",
  },
];

function usersReducer(state = INITIALSTATE, action: Action) {
  switch (action.type) {
    case "test":
      return Object.assign({}, state, {});
      break;

    default:
      return state;
      break;
  }
}

export default usersReducer;
