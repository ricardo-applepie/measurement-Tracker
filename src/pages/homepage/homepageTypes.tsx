import { Dispatch } from "redux";

export interface Measurement {
  id: number;
  weight: string;
  date: Date | null | string;
}
export type HomeProps = {
  measurements: Array<Measurement>;
  dispatch: Dispatch;
};

interface Data {
  measurements: Array<Measurement>;
  updating: Boolean;
}

export type homepageState = {
  measurements: any;
};
