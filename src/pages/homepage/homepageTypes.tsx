import { Dispatch } from "redux";

export interface Measurement {
  id: number;
  weight: string;
  date?: string | any;
}

export type HomePageProps = {
  measurements: Array<Measurement>;
  dispatch: Dispatch;
};

export type HomepageState = {
  measurements: any;
};
