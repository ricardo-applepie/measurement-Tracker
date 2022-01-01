export interface Measurement {
  id: number;
  weight: string;
  date: string;
}

export interface User {
  name: string;
  age: number;
  city: string;
}

//this is the  form state types
export interface FormState {
  users: Array<User>;
  measurementsData: {
    measurements: Array<Measurement>;
    updating: Boolean;
  };
}

export interface FormProps {
  deleteMeasurement?: Boolean;
  measurement?: any;
  showUpdateButton?: Boolean;
}
