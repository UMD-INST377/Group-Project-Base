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
	const json = data.json();

  const name = json.items.map((x)=> x.sugar_g);
  const name2 = json.items.map((x)=> x.fiber_g);
  const name3 = json.items.map((x)=> x.sodium_mg);
  console.log(name,name2,name3);
}
getData()
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

tableData = 
function makeChart() {
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: xlabels,
      datasets: [{
        label: '# of ',
        data: [12, 19, 3, 5, 2, 3],
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

// function changeChart(chart, dataObject) {
  //const labels = Object.keys(dataObject);
  //const info = Object.keys(dataObject).map((item) => dataObject[item].length);

  //chart.data.labels = labels;
  //chart.data.datasets.forEach((set) =>{
    //set.data = info;
    // return set;});
  // chart.update();
// } 

async function mainEvent() {
  console.log("hi1"); 
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