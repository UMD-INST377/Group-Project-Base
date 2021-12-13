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

// ------------------------------------------------------------------
// Math Functions for JSON data
// ------------------------------------------------------------------

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
// function to parse through and sum the culpability data
function sumDataCulpa(id, data) {
  let tot = 0;
  data.forEach((item) => {
    if (item.culpability_id === id) {
      tot += 1;
    }
  });
  return tot;
}

// ------------------------------------------------------------------
// Graphing Functions
// ------------------------------------------------------------------

// Simple Vertical bar chart. Requires label and data input. Config info in function
function barChart(labels, data) {
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

  const config = {
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
  };

  // adding the barchart to the div html using getelement
  const ctx = document.getElementById('chart').getContext('2d');
  const chart = new Chart(ctx, config);
}

// Donut chart. A lot of the same as the bar chart above.
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

  const config = {
    type: 'doughnut',
    data: chartData
  };

  const ctx = document.getElementById('donut').getContext('2d');
  const chart = new Chart(ctx, config);
}

// Radar Chart
function radarChart(fdata, mdata) {
  const data = {
    labels: [
      '24 and Under',
      '25-34',
      '35-44',
      '45-54',
      '55-64',
      '65 and Older'
    ],
    datasets: [{
      label: 'Females',
      data: fdata,
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'Males',
      data: mdata,
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  };

  const config = {
    type: 'radar',
    data: data,
    options: {
      elements: {
        line: {
          borderWidth: 3
        }
      }
    }
  };

  const ctx = document.getElementById('radar').getContext('2d');
  const chart = new Chart(ctx, config);
}

// Stacked bar chart.
function stackedBar(data) {
  const chartData = {
    datasets: [{
      axis: 'y',
      label: 'My First Dataset',
      data: data,
      fill: false,
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
  const config = {
    type: 'bar',
    data: chartData,
    options: {
      indexAxis: 'y',
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  };
  const stackedBar = document.getElementById('stackedBar').getContext('2d');
  const chart = new Chart(ctx, config);
}

// ------------------------------------------------------------------
// M/F Functions to extract data from driver demo
// ------------------------------------------------------------------

// function to separate based on sex
function driversSex(data, sex) {
  const array = [];
  data.forEach((item) => {
    if (item.sex_code === sex) {
      array.push(item);
    }
  });
  console.log(array);
  return array;
}

// function to extract age based on year (not perfect but good for now)
function driverAge(data) {
  dob = [];
  data.forEach((item) => {
    dob.push(parseInt(item.date_of_birth.slice(-2)));
  });

  age = [];
  data.forEach((item) => {
    if (parseInt(item.date_of_birth.slice(-2)) > 21) {
      age.push(100 - parseInt(item.date_of_birth.slice(-2)) + 21);
    } else {
      age.push(21 - parseInt(item.date_of_birth.slice(-2)));
    }
  });
  return age;
}

// function to sort the ages into years
function binGen (data) {
  const histGenerator = d3.bin()
    .domain([0, 100])
    .thresholds([0, 25, 35, 45, 55, 65]); // number of thresholds; this will create 5+1 bins
  const bins = histGenerator(data);

  bins_age = [];
  bins.forEach((item) => {
    bins_age.push(item.length);
  });
  return bins_age;
}
// ------------------------------------------------------------------
// ------------------------------------------------------------------
// Main thread function
// ------------------------------------------------------------------
// ------------------------------------------------------------------

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

  // bar chart function using the labels and data
  barChart(collLabel, numCollType);

  // extracting the culpability data from the driver_demographics table
  const culpaData = [];
  for (let i = 0; i < driver_culpability.length - 1; i++) {
    culpaData.push(sumDataCulpa(i, driver_demographics));
  }

  // extracting the culpability labels from the driver culpa table
  const culpaLabel = [];
  for (let i = 0; i < driver_culpability.length - 1; i++) {
    culpaLabel.push(driver_culpability[i].culpability_desc);
  }

  // graphing a donut chart using for culpability
  donutChart(culpaLabel, culpaData);

  // ------------------------------------------------------------------
  // Extract two arrays F/M of driver demo and create radar chart
  // ------------------------------------------------------------------

  f_drivers = driversSex(driver_demographics, 'F');
  m_drivers = driversSex(driver_demographics, 'M');

  f_drivers_age = driverAge(f_drivers);
  m_drivers_age = driverAge(m_drivers);

  f_age = binGen(f_drivers_age);
  m_age = binGen(m_drivers_age);

  radarChart(f_age, m_age);
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

  location.href = 'about-us.html'; // Navigate to a thanks page
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

  console.log(maybe);
}

async function logData() {
  const person = document.querySelector('#person_id');
  console.log('person: ', person.value);
  console.log('testing');
}

// document.querySelector('#my_btn').addEventListener('click', logData);

// ------------------------------------------------------------------
// Drop Down Function
// ------------------------------------------------------------------
function changeEvent() {
  const dropDown = document.getElementById('dropDown').value;

  if (selvalue === 'default') {
    document.getElementById('default');
  }
  if (selvalue === 'one') {
    document.getElementById('driver_demographics');
  }
}

mainThread();
