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
interface User {
  name: string;
  age: number;
  city: string;
}

//this is the  form state types
interface FormState {
  users: Array<User>;
  measurementsData: {
    measurements: Array<Measurement>;
    updating: Boolean;
  };
}

type FormProps = {
  measurement: Measurement;
  showUpdateButton: Boolean;
  deleteMeasurement: Boolean;
};

function Form(props: any) {
  const dispatch = useDispatch();

  // getting the measurements total measurements Length once for performance reasons .
  const totalMeasurementsLength = useSelector(
    (state: FormState) => state.measurementsData.measurements.length
  );

  // this input variable  stores  weight information ;
  const [input, setInput] = useState("");

  // setting date value from the picker component.
  const [value, setValue] = React.useState<Date | null>(
    new Date("2014-08-18T21:11:54")
  );

  // handle input value change
  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  //this function submits the a user new measurement .
  const submitNewMeasurement = (e: React.SyntheticEvent) => {
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

    //dispatches action to  add  a new measurement
    dispatch(addMeasurement(measurement));

    // removes loading spinner after measurement has been added
    setTimeout(() => {
      dispatch(measurementSuccess());
    }, 1000);

    setValue(new Date());
    setInput("");
  };

  // This function edits the selected measurement and dispatches action to update the measurement .
  const handleMeasurementUpdate = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // denies the user to submit a measurement if the input has no character .
    if (input.length === 0) {
      alert("please enter Weight");
      return;
    }
    // getting the existing or selected measurement
    let selectedMeasurent = props.measurement;
    // getting the new measurements
    let newMeasurement = {
      id: totalMeasurementsLength + 1,
      weight: input,
      date: value,
    };

    // deleting the old measurement which is to be update
    deleteMeasurement(selectedMeasurent);

    // dispatching updateMeasurement action to update this  measurement.
    dispatch(updateMeasurement(newMeasurement, selectedMeasurent));

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
            : (e) => submitNewMeasurement(e)
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
