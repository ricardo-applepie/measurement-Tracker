import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { Chart, registerables } from 'chart.js';
import { Measurement, Measurements, MeasurementsData } from './LineChartTypes';

Chart.register(...registerables);

const LineChart = () => {
  const measurements: Measurements = useSelector(
    (state: any) => state.measurementsData.measurements
  );

  let [labels, setLabels] = React.useState([1]);
  let [weights, setWeights] = React.useState([2]);

  function getMeasurementsWeight(measurements: any) {
    let measurementsWeightList = measurements.map(
      (measurement: Measurement) => {
        return measurement.month;
      }
    );
    // setting weights list
    setWeights(measurementsWeightList);
  }

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
  }, [labels, weights]);

  const chartData = {
    labels: labels,
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
      {
        label: 'Measurements ',
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
