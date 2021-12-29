export interface Measurement {
  id: number;
  weight: string;
  date?: string | any;
}

export function addMeasurement(measurement: Measurement) {
  return {
    type: "addMessurement",
    payload: measurement,
  };
}
export function deleteMeasurement(measurement: Measurement) {
  return {
    type: "deleteMeasurement",
    payload: measurement,
  };
}
export function measurementSuccess() {
  return {
    type: "MessurementSuccess",
  };
}
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
