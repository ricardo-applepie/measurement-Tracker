import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './form.scss';
import Button from '@material-ui/core/Button';
import DatePicker from '../date/Date';
import {
  addMeasurement,
  measurementSuccess,
  deleteMeasurement,
  updateMeasurement,
} from '../../store/actions/actions';
import { FormState, FormProps } from './formTypes';

function Form(props: FormProps) {
  const dispatch = useDispatch();

  // Getting user's total measurements from redux store .
  const totalMeasurementsLength = useSelector(
    (state: FormState) => state.measurementsData.measurements.length
  );

  // stores input values
  const [input, setInput] = useState<string>('');

  // stores and sets  date value from the picker component.
  const [value, setValue] = React.useState<Date | null>(
    new Date('2014-08-18T21:11:54')
  );

  // handles input change
  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  // submit's a new user measurement .
  const submitNewMeasurement = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (input.length === 0) {
      alert('please enter Weight');
      return;
    }

    // new user measurement object
    let measurement = {
      id: totalMeasurementsLength + 1,
      weight: input,
      date: value,
    };

    // dispatches an action to add a new measurement
    dispatch(addMeasurement(measurement));

    // removes loading spinner after measurement successfully added
    setTimeout(() => {
      dispatch(measurementSuccess());
    }, 1000);

    // resets form values after measurement added
    setValue(new Date());
    setInput('');
  };

  // This function edits the selected measurement and dispatches action to update the measurement .
  const handleMeasurementUpdate = (e: React.SyntheticEvent) => {
    e.preventDefault();

    // preventing user from adding a  measurement , if the input is empty .
    if (input.length === 0) {
      alert('please enter Weight');
      return;
    }

    // getting the existing or selected measurement
    let selectedMeasurement = props.measurement;

    // new measurements object
    let newMeasurement = {
      id: totalMeasurementsLength + 1,
      weight: input,
      date: value,
    };

    // action to delete selected measurement
    deleteMeasurement(selectedMeasurement);

    // dispatching updateMeasurement action to update this  measurement.
    dispatch(updateMeasurement(newMeasurement, selectedMeasurement));

    // delaying measurementSuccess action ,so  spinner can be removed after 2 secounds
    setTimeout(function () {
      dispatch(measurementSuccess());
    }, 2000);

    setValue(new Date());
    setInput('');
  };

  return (
    <div className="form">
      <form
        onSubmit={
          // Conditional checking which function is to be executed , depeneding if the showUpdateButton is true  or undifined
          props.showUpdateButton
            ? (e) => handleMeasurementUpdate(e)
            : (e) => submitNewMeasurement(e)
        }
        className="form-wrapper"
      >
        <div className={`input-group  row`}>
          <div className="col-sm-12 col-md-4 col-lg-4">
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
          <div className="col-sm-12 col-md-4 col-lg-4">
            <DatePicker value={value} handleChange={handleChange} />
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
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
