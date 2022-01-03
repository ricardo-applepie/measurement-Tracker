import { Action } from '../../actions/actionsTypes';
import { MeasurementsData, Measurement } from './measurementsTypes';

var _ = require('lodash');

interface persistedState {
  users: Object;
  measurementsData: MeasurementsData;
}

function isNotJestEnvironment() {
  return process.env.JEST_WORKER_ID == undefined;
}

let browserStorage: string | null | MeasurementsData | undefined;
let persistedState: persistedState | undefined | null;

const INITIALSTATE: MeasurementsData = {
  // Dummy data to be displayed , before actual data is added by  the user .
  measurements: [
    {
      id: 1,
      weight: '50kg',
      date: 'Mon Aug 18 2014 21:11:54 GMT+0200 (Central European Summer Time)',
      month: 1,
    },
    {
      id: 2,
      weight: '80kg',
      date: 'Tues Sep 30 2014 21:11:54 GMT+0200 (Central European Summer Time)',
      month: 2,
    },
  ],
  updating: false,
};

if (isNotJestEnvironment()) {
  // prevents the error  "ReferenceError: localStorage is not defined during jest test", by setting  browserStorage  and persistedState in this scope .
  browserStorage = localStorage.getItem('reduxState');

  // parsing browserStorage json data
  persistedState = browserStorage && JSON.parse(browserStorage);
}

function MeasurementReducer(
  state: MeasurementsData = (persistedState &&
    persistedState.measurementsData) ||
    INITIALSTATE,
  action: Action
) {
  switch (action.type) {
    // adding a new measurement  .
    case 'addMeasurement':
      let addedMeasurement = action.payload;
      const newMeasurements = [...state.measurements, addedMeasurement];
      return Object.assign({}, state, {
        updating: true,
        measurements: newMeasurements,
      });
      break;

    // deleting user measurement by id
    case 'deleteMeasurement':
      const filteredUpdatedMeasurements = state.measurements.filter(
        (measurement) => {
          return measurement.id !== action.payload.id;
        }
      );

      return Object.assign({}, state, {
        updating: true,
        measurements: filteredUpdatedMeasurements,
      });
      break;

    // updating user measurement .
    case 'updateMeasurement':
      const newMeasurement = action.payload.newMeasurement;

      const updatedMeasurements = state.measurements.filter(
        (measurement: Measurement) => {
          return measurement.id !== action.payload.oldMeasurement.id;
        }
      );

      return Object.assign(
        {},
        state,
        { updating: true },
        { measurements: [...updatedMeasurements, newMeasurement] }
      );

      break;

    //  returning  default state
    case 'MessurementSuccess':
      return Object.assign({}, state, { updating: false });
      break;
    default:
      return state;
  }
}
export default MeasurementReducer;
