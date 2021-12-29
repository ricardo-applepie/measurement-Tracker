import React from 'react'; 
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function ProgressBar() {
    const value = 0.66;

    return (
        <React.Fragment>
            <CircularProgressbar value={value} maxValue={1} text={`${value * 100}%`} />;
        </React.Fragment>
    )
}
export default ProgressBar ; 