function injectHTML(list) {
  console.log('fired injectHTML');
  const target = document.querySelector("#population_list");
  target.innerHTML = ''; // null error
  
  const listEl = document.createElement('ol');
  target.appendChild(listEl); // cannot read properties of null
  list.forEach((item) => {
    const el = document.createElement('li');
    el.innerText = item
    listEl.appendChild(el);
  });
}

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
  const submit = document.querySelector('#get-years');
  const form = document.querySelector('.main_form');
  const data = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
  const array_US = await data.json(); 
  console.log(array_US);

  x_labels = [];
  populationData = [];

  if (array_US.data?.length > 0) {
   x_labels = getYear(array_US.data);
   populationData = getPopulation(array_US.data);

   curr_list = [];
    for (let i = 0; i < x_labels.length; i++) {
      curr_list[i] = String(x_labels[i]) + ": " + String(populationData[i])
    }

    submit.addEventListener('submit', (submitEvent) => {
      console.log("here");
      // This is needed to stop our page from changing to a new URL even though it heard a GET request
      submitEvent.preventDefault(); 
      
    });
    makeChart(x_labels, populationData);
    injectHTML(curr_list);
  }
}

mainEvent();
