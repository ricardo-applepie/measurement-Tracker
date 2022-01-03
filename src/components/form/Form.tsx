import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './form.scss';
import Button from '@material-ui/core/Button';
import DatePicker from '../date/Date';
import { FormState, FormProps } from './formTypes';
import {
  addMeasurement,
  measurementSuccess,
  deleteMeasurement,
  updateMeasurement,
} from '../../store/actions/actions';

function Form(props: FormProps) {
  const dispatch = useDispatch();

  // Getting user's total measurements from redux store .
  const totalMeasurementsLength = useSelector(
    (state: FormState) => state.measurementsData.measurements.length
  );

  // hook storing and setting input value
  const [input, setInput] = useState<string>('');

  // hook storing and setting date value
  const [value, setValue] = React.useState<Date | null>(
    new Date('2014-08-18T21:11:54')
  );

  // handleChange function handles input change
  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  // function invoked when submitting a new user measurement .
  const submitNewMeasurement = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (input.length === 0) {
      alert('please enter Weight');
      return;
    }

    // new user measurement object .
    let measurement = {
      id: totalMeasurementsLength + 1,
      weight: input,
      date: value,
    };

    // dispatches  action ,which adds a new measurement to redux measurements state .
    dispatch(addMeasurement(measurement));

    //  removes loading spinner , if  measurement was successfully added .
    setTimeout(() => {
      dispatch(measurementSuccess());
    }, 1000);

    // resets form values after measurement added
    setValue(new Date());
    setInput('');
  };

  // edits  selected measurement and dispatches an  action to update  the selected measurement .
  const handleMeasurementUpdate = (e: React.SyntheticEvent) => {
    e.preventDefault();

    // prevents user from adding a measurement , if the input field is empty .
    if (input.length === 0) {
      alert('please enter Weight');
      return;
    }

    // gets existing or selected measurement .
    let selectedMeasurement = props.measurement;

    let newMeasurement = {
      id: totalMeasurementsLength + 1,
      weight: input,
      date: value,
    };

    // redux action to delete selected measurement
    deleteMeasurement(selectedMeasurement);

    // dispatching  action to update selected measurement.
    dispatch(updateMeasurement(newMeasurement, selectedMeasurement));

    // removes loading spinner after 2 seconds
    setTimeout(function () {
      dispatch(measurementSuccess());
    }, 2000);

    // rest hooks state
    setValue(new Date());
    setInput('');
  };

  return (
    <div className="form">
      <form
        onSubmit={
          // Conditional checking which function  to be executed , depending  if the showUpdateButton is set to true  or undifined
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
