interface Meassurement {
  weight: string;
  date: string;
}

export function addMeasurement(measurement: any) {
  return {
    type: "addMessurement",
    payload: measurement,
  };
}
export function measurementSuccess() {
  return {
    type: "MessurementSuccess",
  };
}
