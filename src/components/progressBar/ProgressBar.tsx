import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { ProgressBarProps } from "./progressBarTypes";

// Simple Progress bar component , which displays measurements timeline
function ProgressBar(props: ProgressBarProps) {
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
        text={`${Math.floor(props.value * 100)}%`}
      />
      ;
    </React.Fragment>
  );
}
export default ProgressBar;
