

function makeChart(x, y) {
  const ctx = document.getElementById('myChart');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: x, // json[0] 'year'
      datasets: [{
        label: 'Total Population of United States', // total population
        data: y, // json[1] 'population data' --> might have to mess with it to make it readable (not in the millions)
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function getYear(array) { 

  ret_arr = [];
  array.forEach((element) => {
    ret_arr.push(element.Year);
  });
  console.log(ret_arr);
  return ret_arr;
}

function getPopulation(array) {
  ret_arr = [];
  array.forEach((element) => {
    ret_arr.push(element.Population)
  });
  console.log(ret_arr);
  return ret_arr;
}


async function mainEvent() {
  const data = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
  const array_US = await data.json(); 
  console.log(array_US);

  x_labels = [];
  populationData = [];

  if (array_US.data?.length > 0) {
   x_labels = getYear(array_US.data);
   populationData = getPopulation(array_US.data);
  }

  makeChart(x_labels, populationData);
}

mainEvent();

An asynchronous data request to your API
A processing request that uses array methods (.map, .filter, .find, .reduce) to change your data into the shape your chart, map, or other component needs for display
*/

* https://www.darkcode.info/2019/12/button-with-awesome-hover-effects-using.html
*/