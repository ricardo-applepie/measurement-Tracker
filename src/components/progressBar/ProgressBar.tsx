import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface ProgressBar {
  totalMeasurements: number;
  value: number;
}

// This is a progress bar component , which displays measurements total
function ProgressBar(props: ProgressBar) {
  const value = 0.66;
  return (
    <React.Fragment>
      {props.totalMeasurements < 5 ? (
        <div>
          <h4 className="error">You have only less than 5 measurements</h4>
        </div>
      ) : (
        <div>
          <h4 className="success"> Great your progress is excellent </h4>
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
