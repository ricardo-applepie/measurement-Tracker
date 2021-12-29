import { Dispatch } from "redux";

export interface Measurement {
  id: number;
  weight: string;
  date?: string | any;
}
export type HomeProps = {
  measurements: Array<Measurement>;
  dispatch: Dispatch;
};

export type homepageState = {
  measurements: any;
};
