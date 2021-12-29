export interface Measurement {
  weight: string;
  date: string;
}

export interface WeightMeasurements {
  measurements: Array<Measurement>;
  updating: boolean;
}
