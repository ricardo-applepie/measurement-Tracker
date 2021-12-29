import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./form.scss";
import Button from "@material-ui/core/Button";
import DatePicker from "../date/Date";
import {
  addMeasurement,
  measurementSuccess,
} from "../../store/actionCreators/actions";

function Form() {
  const dispatch = useDispatch();

  // form input gets weight information ;
  const [input, setInput] = useState("");

  const [value, setValue] = React.useState<Date | null>(
    new Date("2014-08-18T21:11:54")
  );

  const handleChange = (newValue: Date | null) => {
    console.log(newValue);
    setValue(newValue);
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (input.length === 0) {
      alert("please enter Weight");
      return;
    }

    let measurement = {
      weight: input,
      date: value,
    };

    dispatch(addMeasurement(measurement));

    setTimeout(() => {
      dispatch(measurementSuccess());
    }, 1000);

    setValue(new Date("2014-08-18T21:11:54"));
    setInput("");
  };

  return (
    <div className="form">
      <form onSubmit={(e) => handleSubmit(e)} className=" form-wrapper">
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
            <Button
              type="submit"
              value="Submit"
              variant="contained"
              color="primary"
            >
              Add Measurement
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
