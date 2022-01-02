import { Dispatch } from 'redux';

export interface Measurement {
  id: number;
  weight: string;
  date: Date | null | string;
}
export type HomeProps = {
  measurements: Array<Measurement>;
  dispatch: Dispatch;
};

export type homepageState = {
  measurements: any;
};

export interface User {
  id: string;
  city: string;
  name: string;
}
export interface ReduxState {
  users: Array<User>;
  measurementsData: any;
}
