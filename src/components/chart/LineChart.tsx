import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { Chart, registerables } from 'chart.js';
import { Measurement, Measurements, MeasurementsData } from './LineChartTypes';

// registering chart js componets , removing this class ,  causes an errror , and app wont be rendered.
Chart.register(...registerables);

const LineChart = () => {
  const measurements: Measurements = useSelector(
    (state: any) => state.measurementsData.measurements
  );

  // default Weights and line chart labels list .
  let [labels, setLabels] = React.useState([1]);
  let [weights, setWeights] = React.useState([2]);

  // line chart y-axis data
  function getMeasurementsWeight(measurements: any) {
    let measurementsWeightList = measurements.map(
      (measurement: Measurement) => {
        return measurement.month;
      }
    );
    // setting weights list
    setWeights(measurementsWeightList);
  }
  // line chart x-axis data
  function getLabels(measurements: any) {
    let labels = measurements.map(
      (measurement: Measurement) => measurement.weight
    );
    // setting line chart labels
    setLabels(labels);
  }

  useEffect(() => {
    getMeasurementsWeight(measurements);
    getLabels(measurements);
  }, [measurements]);

  // chart data
  const chartData = {
    labels: labels,
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
      {
        label: 'Measurements',
        data: weights,
        // you can set indiviual colors for each bar
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: '',
            },
            legend: {
              display: true,
              position: 'bottom',
            },
          },
        }}
      />
    </div>
  );
};

export default LineChart;
