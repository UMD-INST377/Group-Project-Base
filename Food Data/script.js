const label = [];
const foodData = [];

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'e2a17786bamsh39f2855f9aaf40dp1b10c0jsnf0ccf57e91e0',
    'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com'
  }
}

async function getData(){
  const url = `https://calorieninjas.p.rapidapi.com/v1/nutrition?query=apple`; 
  const data = await fetch(url, options);
	const json = await data.json();

  console.log(data);
  console.log(json.items);
}


async function makeChart() {
  await getData();

  const ctx = document.getElementById('myChart');

  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: label,
      datasets: [{
        label: '# of contents',
        data: foodData,
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
makeChart();


async function mainEvent() {
  const form = document.querySelector('.main_form');

  const submit = document.querySelector('#submit');
  const input = document.querySelector('#input');
  const chart = document.querySelector('#myChart');

  //const fetchQuery = new URLSearchParams(formProps);
  //const results = await fetch(`/api/foodService?${fetchQuery}`);


  //const formData = new FormData(submitEvent.target); // get the data from the listener target
  //const formProps = Object.fromEntries(formData);
  //const arrayFromJson = await results.json()
  //console.table(arrayFromJson.data)

  // const arrayFromJson = await getData();

  // console.table(arrayFromJson);


  // const myChart = makeChart(chart);

  form.addEventListener('submit', (submitEvent) => {
    submitEvent.preventDefault();

    // const dataList = sendData(arrayFromJson.data);
    // console.log(dataList);
  });
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());
