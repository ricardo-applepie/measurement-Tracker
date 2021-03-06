export interface Measurement {
  id: number;
  weight: string;
  date: string;
  month: any;
}

export interface MeasurementsData {
  measurements: Array<Measurement>;
  updating: boolean;
}
