import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./form.scss";
import Button from "@material-ui/core/Button";
import DatePicker from "../date/Date";
import {
  addMeasurement,
  measurementSuccess,
  deleteMeasurement,
  updateMeasurement,
} from "../../store/actionCreators/actions";

interface Measurement {
  id: string;
  weight: string;
  date: string;
}

//this is the  form state types
interface FormState {
  users: Array<any>;
  weights: {
    measurements: Array<Measurement>;
    updating: Boolean;
  };
}

function Form(props: any) {
  const dispatch = useDispatch();
  // getting the measurements total measurements Length once for performance reasons .
  const totalMeasurementsLength = useSelector(
    (state: FormState) => state.weights.measurements.length
  );

  // this input variable  stores  weight information ;
  const [input, setInput] = useState("");
  // setting date value from the picker component.
  const [value, setValue] = React.useState<Date | null>(
    new Date("2014-08-18T21:11:54")
  );

  const handleChange = (newValue: Date | null) => {
    console.log(newValue);
    setValue(newValue);
  };

  //this function submits the user measurement
  const submitMeasurement = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (input.length === 0) {
      alert("please enter Weight");
      return;
    }
    // new user measurement
    let measurement = {
      id: totalMeasurementsLength + 1,
      weight: input,
      date: value,
    };
    // adding measurement from form input
    dispatch(addMeasurement(measurement));
    // removes loading spinner after measurement has been added
    setTimeout(() => {
      dispatch(measurementSuccess());
    }, 1000);

    setValue(new Date());
    setInput("");
  };

  // this function edits the measurement and dispatches the updated measurement to update measurement state
  const handleMeasurementUpdate = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (input.length === 0) {
      alert("please enter Weight");
      return;
    }
    // getting the existing or old measurement
    let oldMeasurement = props.measurement;
    // getting the new measurements
    let newMeasurement = {
      id: totalMeasurementsLength + 1,
      weight: input,
      date: value,
    };

    // deleting the old measurement which is to be update
    deleteMeasurement(oldMeasurement);
    // dispatching updateMeasurement action to update this  measurement.
    dispatch(updateMeasurement(newMeasurement, oldMeasurement));

    // delaying measurementSuccess action  ,so  spinner can be removed after 2 secounds
    setTimeout(function () {
      dispatch(measurementSuccess());
    }, 2000);
    setValue(new Date());
    setInput("");
  };

  return (
    <div className="form">
      <form
        onSubmit={
          // conditional checking which function to be executed depeneding if the showUpdateButton is true  or undifined
          props.showUpdateButton
            ? (e) => handleMeasurementUpdate(e)
            : (e) => submitMeasurement(e)
        }
        className="form-wrapper"
      >
        <div className={`input-group  row`}>
          <div className="col">
            <input
              onChange={(e) => setInput(e.target.value)}
              type="text"
              value={input}
              className="form-control"
              placeholder="Please enter weight"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </div>
          <div className="col">
            <DatePicker value={value} handleChange={handleChange} />
          </div>
          <div className="col">
            {props.showUpdateButton ? (
              <Button
                type="submit"
                value="Submit"
                variant="contained"
                color="primary"
              >
                Update Measurement
              </Button>
            ) : (
              <Button
                type="submit"
                value="Submit"
                variant="contained"
                color="primary"
              >
                Add Measurement
              </Button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
