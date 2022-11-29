import React, { Component, useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { months } from "../../helpers/utils";
import Axios from "axios"; //axios library to make requests to api

// Chart.defaults.global.defaultFontFamily = "Roboto, sans-serif";
function BarChart() {
  //retrieving data from api
  const [intentsList, setintentsList] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/countintents").then((response) => {
      setintentsList(response.data);
      console.log(response.data);
    });
  }, []);
  // BarChart
  //const labels = months({ count: 1 });
  const data = {
    labels: ["Industry_solutions"],
    datasets: [
      {
        axis: "y",
        label: "My First Dataset",
        data: intentsList.map((val, key) => [val.industry_solutions]),
        fill: false,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    indexAxis: "y",
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        display: false,
      },
      title: {
        display: true,
        text: "Chart.js Horizontal Bar Chart",
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} /> {/* Props */}
    </div>
  );
}
  
  mainEvent();