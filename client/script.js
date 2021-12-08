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
};

// Function to parse through the JSONs and sum based on the 'id' num
function sumData(id, data) {
  let tot = 0;
  data.forEach((item) => {
    if (item.collision_type_id === id) {
      tot += 1;
    }
  });
  return tot;
};

// Main thread function
async function mainThread() {
  // fetch request to get the data from the api's
  const collision_type = await fetchRequest('./api/collisionType');
  const crash_information = await fetchRequest('./api/crashInformation');
  const driver_demographics = await fetchRequest('./api/driverDemographics');

  // summing up the number of collision types from the crashInformation
  const numCollType = [];
  for (let i = 1; i < collision_type.length; i++) {
    numCollType[i - 1] = sumData(i, crash_information);
  }

    // creating a chart but not loading data
document.addEventListener('DOMContentLoaded', function(e) {
  var data = [4, 8, 15, 16, 23, 42];

  d3.select(".chart")
      .selectAll("div")
      .data(data)
      .enter().append("div")
      .style("width", function(d) { return d + "px"; })
      .text(function(d) { return d; });
});

};

mainThread();