//const options = {
	//method: 'GET',
	//headers: {
	//	'X-RapidAPI-Key': 'e2a17786bamsh39f2855f9aaf40dp1b10c0jsnf0ccf57e91e0',
	//	'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com'
//	}
// };

async function getData(){
  const url = 'https://data.princegeorgescountymd.gov/resource/2qma-7ez9.json'; 
  const data = await fetch(url, options);
  // console.log(data);
	const json = await data.json();
  console.log(json);

  // const name = json.response.map((amount)=> amount.);
  // console.log(name);
  // tableData= name
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
const blockNumber = [];
const area_land = [];

async function makeChart() {
  await getData();


  console.log('hello')
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: blockNumber,
      datasets: [{
        label: '# of contents',
        data: area_land,
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


