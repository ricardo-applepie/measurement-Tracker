export interface Measurement {
  id: number;
  weight: string;
  date: string;
}

// user state type
export interface User {
  name: string;
  age: number;
  city: string;
}

// form state types
export interface FormState {
  users: Array<User>;
  measurementsData: {
    measurements: Array<Measurement>;
    updating: Boolean;
  };
}

// form props
export interface FormProps {
  deleteMeasurement?: Boolean;
  measurement?: any;
  showUpdateButton?: Boolean;
}
