import MeasurementReducer from "../../store/reducer/measurements/measurements";
import {
  addMeasurement,
  deleteMeasurement,
} from "../../store/actionCreators/actions";
import { createStore, applyMiddleware } from "redux";
import reducers from "../../store/combinedReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { WeightMeasurements } from "../../store/reducer/measurements/measurementsTypes";

const INITIALSTATE = {
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

let measurement = {
  id: 3,
  weight: "50kg",
  date: "today",
};

let deletedMeasurement = {
  id: 1,
  weight: "50kg",
  date: "Mon Aug 18 2014 21:11:54 GMT+0200 (Central European Summer Time)",
};

test("testing INITIALSTATE object", () => {
  expect(INITIALSTATE).toEqual(INITIALSTATE);
});

test("testing addMeasurement action ", () => {
  expect(addMeasurement(measurement)).toEqual({
    type: "addMeasurement",
    payload: measurement,
  });
});

test("testing deleteMeasurement action  ", () => {
  expect(deleteMeasurement(measurement)).toEqual({
    type: "deleteMeasurement",
    payload: measurement,
  });
});

test("should return the initial state", () => {
  expect(MeasurementReducer(undefined, measurement)).toEqual(INITIALSTATE);
});

test("Testing redux previous state ", () => {
  const previousState: WeightMeasurements = INITIALSTATE;
  expect(
    MeasurementReducer(previousState, addMeasurement(measurement))
  ).toEqual({
    measurements: [...INITIALSTATE.measurements, measurement],
    updating: true,
  });
});

test("Testing redux previous state when dispatching deleteMeasurement ", () => {
  const previousState: WeightMeasurements = INITIALSTATE;
  expect(
    MeasurementReducer(previousState, deleteMeasurement(deletedMeasurement))
  ).toEqual({
    // dummy data to be displayed , before actual data is added by  the user .
    measurements: [
      {
        id: 2,
        weight: "80kg",
        date: "Tues Sep 30 2014 21:11:54 GMT+0200 (Central European Summer Time)",
      },
    ],
    updating: true,
  });
});

test("testing measurements state ", () => {
  const store = createStore(reducers, composeWithDevTools());
  const value = 2 + 2;
  expect(store.getState().measurementsData.measurements.length).toBeGreaterThan(
    1
  );
  expect(store.getState().measurementsData.measurements[0]).toEqual({
    id: 1,
    weight: "50kg",
    date: "Mon Aug 18 2014 21:11:54 GMT+0200 (Central European Summer Time)",
  });

  expect(store.getState().measurementsData.measurements[0].id).toBe(1);
  expect(store.getState().measurementsData.measurements[1].id).toBe(2);
  expect(store.getState().measurementsData.measurements[0].weight).toBe("50kg");
  expect(store.getState().measurementsData.measurements[1].weight).toBe("80kg");
});
