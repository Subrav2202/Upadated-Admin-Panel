import React, { useState } from "react";
import { Chart } from "react-charts";
import { Doughnut, Bar, Line} from "react-chartjs-2";

export const Linechart = ({ linedata }) => {
  const data = React.useMemo(() => [linedata], []);

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  return (
    <div style={{ width: "100%", height: "70%" }}>
      <Chart data={data} axes={axes} primaryCursor secondaryCursor />
    </div>
  );
};

export const Mixedlinechart = () => {
  const [state, setstate] = useState({
    day: { 1: "MON", 2: "TUE", 3: "WED", 4: "THUR" },
  });
  const data = React.useMemo(
    () => [
      {
        label: "customer 1",
        data: [
          [state.day[1], 1],
          [state.day[2], 5],
          [state.day[3], 2],
          [state.day[4], 5],
        ],
      },
      {
        label: "customer 2",
        data: [
          [state.day[1], 2],
          [state.day[2], 3],
          [state.day[3], 4],
          [state.day[4], 8],
        ],
      },
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "ordinal", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  return (
    <div
      style={{
        width: "100%",
        height: "360px",
      }}
    >
      <Chart data={data} axes={axes} primaryCursor secondaryCursor />
    </div>
  );
};

export const Donutchart = ({ bardata }) => {
  const data = bardata;
  const options = {
    legend: {
      display: true,
      position: "bottom",
    },
    maintainAspectRatio: false,
  };

  return <Doughnut data={data} options={options} />;
};

export const ProductSells = () => {
  const data = {
    labels: ["Q1", "Q2", "Q3", "Q4"],

    datasets: [
      {
        barThickness: 40,
        data: [
        [0,80000],[0,200000],[0,100000],
        [0,120000],
        
        ],
       
      }
    ]
  };
  const options = {
    legend: {
      display: true,
      position: "bottom",
    },
    maintainAspectRatio: false,
  };
const series={
  series:3
}
  const axes = React.useMemo(
    () => [
      { primary: true, type: "ordinal", position: "bottom" },
      { type: "linear", position: "left", stacked:true },
    ],
    []
  );
  return (
    <div style={{ width: "100%", height: "300px" }}>
      <Bar data={data} options={options} axes={axes} series={series}/>
    </div>
  );
};

export const Areachart = ({ Areadata }) => {
  const data = Areadata;
  const options = {
    legend: {
      display: true,
      position: "bottom",
    },
    scales: {
      yAxes: {
        ticks: {
          stepSize: 10000,
        },
      },
    },
    maintainAspectRatio: false,
  };

  return <Line data={data} options={options} />;
};
