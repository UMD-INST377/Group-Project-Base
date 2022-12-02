const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e2a17786bamsh39f2855f9aaf40dp1b10c0jsnf0ccf57e91e0',
		'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com'
	}
};

async function getData(){
  const url = 'https://calorieninjas.p.rapidapi.com/v1/nutrition?query=tomato'; 
  const data = await fetch(url, options);
  console.log(data);
	const json = data.json();
  const res = json.response;
	return res;
}

function makeChart() {
  const labels = Object.keys(object);
  const info = Object.keys(object).map((item) => object[item].length);

  const data = {
    labels: labels,
    datasets: [{
      label: 'Restaurants By Category',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: info
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {}
  };

  return new Chart(
    chart,
    config
  );
}

function changeChart(chart, dataObject) {
  const labels = Object.keys(dataObject);
  const info = Object.keys(dataObject).map((item) => dataObject[item].length);

  chart.data.labels = labels;
  chart.data.datasets.forEach((set) =>{
    set.data = info;
    return set;});
  chart.update();
}

async function mainEvent() {
  console.log("hi1"); 
  await getData();
  console.log("hi");
  const form = document.querySelector('.main_form');

  const submit = document.querySelector('#get-resto');
  const resto = document.querySelector('#resto');
  const chart = document.querySelector('#myChart');

  let myChart = makeChart();
  form.addEventListener('submit', (submitEvent) => {
    // This is needed to stop our page from changing to a new URL even though it heard a GET request
    submitEvent.preventDefault();

  });
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());