export interface Measurement {
  id: number;
  weight: string;
  date: string;
}

export interface TotalMeasurements {
  measurements: Array<Measurement>;
  updating: boolean;
}
