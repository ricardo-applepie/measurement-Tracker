import { Action } from "../../actions/actionTypes/actionTypes";
import { WeightMeasurements, Measurement } from "./weightTypes";
var _ = require("lodash");

const INITIALSTATE: WeightMeasurements = {
  measurements: [
    {
      weight: "50kg",
      date: "Mon Aug 18 2014 21:11:54 GMT+0200 (Central European Summer Time)",
    },
    {
      weight: "80kg",
      date: "Tues Sep 30 2014 21:11:54 GMT+0200 (Central European Summer Time)",
    },
  ],
  updating: false,
};

function weightReducer(
  state: WeightMeasurements = INITIALSTATE,
  action: Action
) {
  switch (action.type) {
    case "addMessurement":
      let addedMeasurement = action.payload;
      const newMeasurements = [...state.measurements, addedMeasurement];
      return Object.assign({}, state, {
        updating: true,
        measurements: newMeasurements,
      });
      break;
    case "deletMeasurement":
      const deletedMeasurement = _.find(state.measurements, {
        weight: action.payload.weight,
        date: action.payload.date,
      });
      let newMessurements = _.filter(
        state.measurements,
        function (measurement: any) {
          return (
            measurement.weight !== deletedMeasurement.weight &&
            measurement.date !== deletedMeasurement.date
          );
        }
      );

      return Object.assign({}, state, {
        measurements: newMessurements,
        updating: true,
      });
      break;
    case "MessurementSuccess":
      return Object.assign({}, state, { updating: false });
      break;
    default:
      return state;
  }
}
export default weightReducer;
