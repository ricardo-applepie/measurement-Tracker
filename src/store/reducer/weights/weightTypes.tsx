export interface Measurement {
  id: number;
  weight: string;
  date: string;
}

export interface WeightMeasurements {
  measurements: Array<Measurement>;
  updating: boolean;
}
