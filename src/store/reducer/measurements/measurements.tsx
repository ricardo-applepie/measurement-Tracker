import { Action } from "../../actionTypes/actionTypes";
import { TotalMeasurements, Measurement } from "./measurementsTypes";

var _ = require("lodash");

const INITIALSTATE: TotalMeasurements = {
  // dummy data to be displayed , before actual data is added by  the user .
  measurements: [
    {
      id: 1,
      weight: "50kg",
      date: "Mon Aug 18 2014 21:11:54 GMT+0200 (Central European Summer Time)",
    },
    {
      id: 2,
      weight: "80kg",
      date: "Tues Sep 30 2014 21:11:54 GMT+0200 (Central European Summer Time)",
    },
  ],
  updating: false,
};

function MeasurementReducer(
  state: TotalMeasurements = INITIALSTATE,
  action: Action
) {
  switch (action.type) {
    // adding a user measurement by dispatching addMeasurement action .
    case "addMeasurement":
      let addedMeasurement = action.payload;
      const newMeasurements = [...state.measurements, addedMeasurement];
      return Object.assign({}, state, {
        updating: true,
        measurements: newMeasurements,
      });
      break;

    // deleting a user measurement by dispatching deleteMeasurement action .
    case "deleteMeasurement":
      const deletedMeasurements = state.measurements.filter((measurement) => {
        return (
          measurement.weight !== action.payload.weight &&
          measurement.date !== action.payload.date
        );
      });

      return Object.assign({}, state, {
        updating: true,
        measurements: deletedMeasurements,
      });
      break;

    // updating a measurement by dispatching this action .
    case "updateMeasurement":
      const edittedMeasurement = action.payload.newMeasurement;
      const updatedMeasurement = state.measurements.filter(
        (measurement: Measurement) => {
          return (
            measurement.weight !== action.payload.oldMeasurement.weight &&
            measurement.date !== action.payload.oldMeasurement.date
          );
        }
      );
      // using object.assing here , you can also use spread operator
      return Object.assign(
        {},
        state,
        { updating: true },
        { measurements: [...updatedMeasurement, edittedMeasurement] }
      );

      break;

    case "MessurementSuccess":
      return Object.assign({}, state, { updating: false });
      break;
    //  returning  default state if no action
    default:
      return state;
  }
}

export default MeasurementReducer;
