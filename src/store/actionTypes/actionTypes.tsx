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
interface addWeight {
  type: "addMessurement";
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
  | addWeight
  | MessurementSuccess
  | DeleteMeasurement
  | UpdateMessurement;
