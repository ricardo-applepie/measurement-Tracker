export interface Measurement {
  id: number;
  weight: string;
  date?: string | any;
}

export interface MeasurementSuccess {
  type: string;
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

interface GetUsers {
  type: "test";
  payload: Object;
}

export type Action =
  | GetUsers
  | AddWeight
  | MessurementSuccess
  | DeleteMeasurement
  | UpdateMessurement
  | any;
