import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// progress bar component , this displays users progression .
function ProgressBar(props: any) {
  return (
    <React.Fragment>
      {props.totalMeasurements < 5 ? (
        <div>
          <h4 className="error">You have less than 5 measurements</h4>
        </div>
      ) : (
        <div>
          <h4 className="success"> Great! your made Progress </h4>
        </div>
      )}
      <CircularProgressbar
        value={props.value}
        maxValue={1}
        text={`${props.value * 100}%`}
      />
      ;
    </React.Fragment>
  );
}
export default ProgressBar;
