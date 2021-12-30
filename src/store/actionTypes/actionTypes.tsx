import { Measurement } from "../actionCreators/actions";

interface getUsers {
  type: "test";
  payload: Object;
}
interface DeleteMeasurement {
  type: "deleteMeasurement";
  payload: {
    weight: string;
    date: string;
  };
}
interface AddWeight {
  type: "addMeasurement";
  payload: Object;
}
interface UpdateMessurement {
  type: "updateMeasurement";
  payload: {
    oldMeasurement: Measurement;
    newMeasurement: Measurement;
  };
}
interface MessurementSuccess {
  type: "MessurementSuccess";
}

export type Action =
  | getUsers
  | AddWeight
  | MessurementSuccess
  | DeleteMeasurement
  | UpdateMessurement
  | any;
