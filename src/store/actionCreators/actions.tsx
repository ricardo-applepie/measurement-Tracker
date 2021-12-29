import { Measurement, MeasurementSuccess } from "../actionTypes/actionTypes";

export function addMeasurement(measurement: Measurement) {
  return {
    type: "addMeasurement",
    payload: measurement,
  };
}

export function deleteMeasurement(measurement: Measurement) {
  return {
    type: "deleteMeasurement",
    payload: measurement,
  };
}

export function measurementSuccess(): MeasurementSuccess {
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
