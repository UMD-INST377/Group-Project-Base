// fetchRequest function to pull the json data from the various api routes
async function fetchRequest(url) {
  try {
    const request = await fetch(url);
    const json = await request.json();
    return json;
  } catch (err) {
    console.error(err);
    return err;
  }
}

// Function to parse through the JSONs and sum based on the 'id' num
function sumDataColl(id, data) {
  let tot = 0;
  data.forEach((item) => {
    if (item.collision_type_id === id) {
      tot += 1;
    }
  });
  return tot;
}

function sumDataCulpa(id, data) {
  let tot = 0;
  data.forEach((item) => {
    if (item.culpability_id === id) {
      tot += 1;
    }
  });
  return tot;
}

function barChart(labels, data) {
// function to create the bar chart. Requires lables/data input
  const chartData = {
    labels: labels,
    datasets: [{
      label: 'Number of Collisions by Type',
      data: data,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };

  // adding the barchart to the div html using getelement
  const ctx = document.getElementById('chart').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'bar',
    data: chartData,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function donutChart(labels, data) {
  const chartData = {
    labels: labels,
    datasets: [{
      label: 'Driver Culpability',
      data: data,
      backgroundColor: [
        'rgba(120, 28, 129, 0.4)',
        'rgba(65, 57, 146, 0.4)',
        'rgba(68, 124, 191, 0.4)',
        'rgba(91, 167, 166, 0.4)',
        'rgba(131, 186, 109, 0.4)',
        'rgba(180, 189, 76, 0.4)',
        'rgba(219, 171, 59, 0.4)',
        'rgba(231, 115, 47, 0.4)',
        'rgba(217, 33, 32, 0.4)'
      ],
      hoverOffset: 4
    }]
  };
  const ctx = document.getElementById('donut').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'doughnut',
    data: chartData,
  });
}

// function extractData (data.feature) {
// function to extract the data into an array (not working)
//   const array = [];
//   for (let i = 1; i < data.length-1; i++) {
//     array.push(data[i].feature);
//   }
//   return array;
// }

// Main thread function
async function mainThread() {
  // fetch request to get the data from the api's
  const collision_type = await fetchRequest('./api/collisionType');
  const crash_information = await fetchRequest('./api/crashInformation');
  const driver_demographics = await fetchRequest('./api/driverDemographics');
  const driver_culpability = await fetchRequest('./api/driverCulpability');

  // summing up the number of collision types from the crashInformation
  const numCollType = [];
  for (let i = 1; i < collision_type.length - 1; i++) {
    numCollType.push(sumDataColl(i, crash_information));
  }

  // extracting the collision description from the collision_type json data.
  const collLabel = [];
  for (let i = 0; i < collision_type.length - 1; i++) {
    collLabel.push(collision_type[i].collision_desc);
  }

  // console log to check that the features were extracted for labels in the bar chart
  console.log(collLabel);

  // bar chart function using the labels and data
  barChart(collLabel, numCollType);

  const culpaData = [];
  for (let i = 1; i < driver_culpability.length - 1; i++) {
    culpaData.push(sumDataCulpa(i, driver_demographics));
  }

  console.log(culpaData);

  const culpaLabel = [];
  for (let i = 0; i < driver_culpability.length - 1; i++) {
    culpaLabel.push(driver_culpability[i].culpability_desc);
  }

  console.log(culpaLabel);

  donutChart(culpaLabel, culpaData);
}

mainThread();