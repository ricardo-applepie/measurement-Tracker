export interface Measurement {
  id: number;
  weight: string;
  date: string;
  month: number;
}

export interface MeasurementsData {
  measurements: Array<Measurement>;
  updating: boolean;
}

export interface Measurements {
  measurements: Array<Measurement>;
}
export default {};
