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
function sumData(id, data) {
  let tot = 0;
  data.forEach((item) => {
    if (item.collision_type_id == id) {
      tot += 1;
    }
  });
  return tot;
}

function barChart(labels, data) {

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

// Main thread function
async function mainThread() {
  // fetch request to get the data from the api's
  const collision_type = await fetchRequest('./api/collisionType');
  const crash_information = await fetchRequest('./api/crashInformation');
  const driver_demographics = await fetchRequest('./api/driverDemographics');

  // summing up the number of collision types from the crashInformation

  const numCollType = [];
  for (let i = 1; i < collision_type.length-1; i++) {
    numCollType.push(sumData(i, crash_information));
  }

  const collLabel = [];
  for (let i = 1; i < collision_type.length-1; i++) {
    collLabel.push(collision_type[i].collision_desc);
  };
  console.log(collLabel);

  barChart(collLabel, numCollType);
}

mainThread();