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

function sumDataRoadCon(id, data) {
  let tot = 0;
  data.forEach((item) => {
    if (item.junction_code === id) {
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
      label: 'none',
      data: data,
      backgroundColor: [
        'rgba(120, 28, 129, 0.4)',
        'rgba(68, 124, 191, 0.4)',
        'rgba(131, 186, 109, 0.4)',
        'rgba(219, 171, 59, 0.4)',
        'rgba(217, 33, 32, 0.4)'
      ],
      borderColor: [
        'rgba(120, 28, 129)',
        'rgba(68, 124, 191)',
        'rgba(131, 186, 109)',
        'rgba(219, 171, 59)',
        'rgba(217, 33, 32)'
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
      },
      plugins: {
        legend: {
          display: false
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
    data: chartData
  });
}

function donutChart2(labels, data) {
  const chartData = {
    labels: labels,
    datasets: [{
      label: 'Road Conditions',
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
    data: chartData
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
  const road_conditions = await fetchRequest('./api/roadConditions');

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

  // extracting the culpability data from the driver_demographics table
  const culpaData = [];
  for (let i = 1; i < driver_culpability.length - 1; i++) {
    culpaData.push(sumDataCulpa(i, driver_demographics));
  }

  // console log checking the data
  console.log(culpaData);

  // extracting the culpability labels from the driver culpa table
  const culpaLabel = [];
  for (let i = 0; i < driver_culpability.length - 1; i++) {
    culpaLabel.push(driver_culpability[i].culpability_desc);
  }

  // console log to check the culpa
  console.log(culpaLabel);

  // graphing a donut chart using for culpability
  donutChart(culpaLabel, culpaData);

  // extracting the road condition data from the crashInformation
  const roadCondData = [];
  for (let i = 1; i < road_conditions.length - 1; i++) {
    roadCondData.push(sumDataRoadCon(i, crash_information));
  }

  // console log checking the data
  console.log(roadCondData);

  // extracting the road condition types from the road conditions
  const roadCondType = [];
  for (let i = 0; i < road_conditions.length - 1; i++) {
    roadCondType.push(road_conditions[i].junction_desc);
  }

  // console log to check the road Conditions
  console.log(roadCondType);

  // graphing a donut chart using for road Condtions
  donutChart2(roadCondType, roadCondData);
}

// New Record Posting to driverDemographics endpoint
async function postNewRecord() {
  const person_id = document.querySelector('#person_id');
  const report_id = document.querySelector('#report_id');
  const sex_code = document.querySelector('#sex_code');
  const date_of_birth = document.querySelector('#date_of_birth');
  const culpability_id = document.querySelector('#culpability_id');
  const url = '/api/driverDemographics';
  const request = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      person_id: person_id.value,
      report_id: report_id.value,
      sex_code: sex_code.value,
      date_of_birth: date_of_birth.value,
      culpability_id: culpability_id.value
    })
  });
  console.log(request.json());
  return request.json();
}

// testing JSON output for new record
async function testing() {
  const person_id = document.querySelector('#person_id');
  const report_id = document.querySelector('#report_id');
  const sex_code = document.querySelector('#sex_code');
  const date_of_birth = document.querySelector('#date_of_birth');
  const culpability_id = document.querySelector('#culpability_id');

  maybe = JSON.stringify({
    person_id: person_id.value,
    report_id: report_id.value,
    sex_code: sex_code.value,
    date_of_birth: date_of_birth.value,
    culpability_id: culpability_id.value
  });

  console.log(maybe)
}

async function logData() {
  const person = document.querySelector('#person_id');
  console.log('person: ', person.value);
  console.log('testing');
}

// document.querySelector('#my_btn').addEventListener('click', logData);

mainThread();