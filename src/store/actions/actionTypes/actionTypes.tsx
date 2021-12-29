interface getUsers {
  type: "test";
  payload: Object;
}
interface DeletMeasurement {
  type: "deletMeasurement";
  payload: {
    weight: string;
    date: string;
  };
}
interface addWeight {
  type: "addMessurement";
  payload: Object;
}
interface MessurementSuccess {
  type: "MessurementSuccess";
}
export type Action =
  | getUsers
  | addWeight
  | MessurementSuccess
  | DeletMeasurement;
