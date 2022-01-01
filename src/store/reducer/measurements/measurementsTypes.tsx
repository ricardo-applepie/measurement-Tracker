export interface Measurement {
  id: number;
  weight: string;
  date: string;
}

export interface MeasurementsData {
  measurements: Array<Measurement>;
  updating: boolean;
}
