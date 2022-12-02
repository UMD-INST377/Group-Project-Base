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
	const json = await data.json();
  console.log(json);
}


xlabels = [
  'sugar_g',
  'fiber_g',
  'serving_size_g',
  'potassium_mg',
  'fat_saturated_g',
  'fat_total_g',
  'calories',
  'cholesterol_mg',
  'protein_g',
  'carbohydrates_total_g'
] 

const payerAmount = [];

async function makeChart() {
  await getData();

  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: xlabels,
      datasets: [{
        label: '# of contents',
        data: payerAmount,
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

  const submit = document.querySelector('#get-resto');
  const resto = document.querySelector('#resto');
  const chart = document.querySelector('#myChart');

  const myChart = makeChart(chart);
  form.addEventListener('submit', (submitEvent) => {
    submitEvent.preventDefault();
  });
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());
