const xLabels = [];
function getData(){
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e2a17786bamsh39f2855f9aaf40dp1b10c0jsnf0ccf57e91e0',
      'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com'
    }
  }
  const input = document.getElementById('input').value;
  const url = `https://calorieninjas.p.rapidapi.com/v1/nutrition?query=${input}`; 
  const data = fetch(url, options);
  console.log(data);
	const json = data.json();

  
  console.log(json.items[0]);
  const {name} = json.items[0];
  const {calories} = json.items[0];
  const {sugar_g} = data.items[0];
  const {protein_g} = data.items[0];
  const {fiber_g} = data.items[0];
  const {serving_size_g} = data.items[0];
  const {fat_total_g}= data.items[0];

  xLabels.push(calories, sugar_g, protein_g, fiber_g, serving_size_g, fat_total_g);
}

function makeChart(){

  const ctx = document.getElementById('myChart');

  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Calories', 'Sugar', 'Protein', 'Fiber', 'Serving Size', 'Total Fat'],
      datasets: [{
        label: '# of contents in grams)',
        data: xLabels ,
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

  //console.log();


  //const myChart = makeChart(chart);

  form.addEventListener('submit', (submitEvent) => {
   submitEvent.preventDefault();

    const dataList = sendData(arrayFromJson.data);
    console.log(dataList);
  });
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());
