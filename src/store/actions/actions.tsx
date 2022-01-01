// user measurement
export interface Measurement {
  id: number;
  weight: string;
  date: Date | null | string;
}

// action to add user measurement
export function addMeasurement(measurement: Measurement) {
  return {
    type: "addMeasurement",
    payload: measurement,
  };
}
// action to delete user measurement
export function deleteMeasurement(measurement: Measurement) {
  return {
    type: "deleteMeasurement",
    payload: measurement,
  };
}
// hides loading spinner
export function measurementSuccess() {
  return {
    type: "MessurementSuccess",
  };
}

// updates user measurement
export function updateMeasurement(
  newMeasurement: Measurement,
  oldMeasurement: Measurement
) {
  return {
    type: "updateMeasurement",
    payload: {
      newMeasurement,
      oldMeasurement,
    },
  };
}
