//const options = {
	//method: 'GET',
	//headers: {
	//	'X-RapidAPI-Key': 'e2a17786bamsh39f2855f9aaf40dp1b10c0jsnf0ccf57e91e0',
	//	'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com'
//	}
// };

async function getData(){
  const url = 'https://data.princegeorgescountymd.gov/resource/2qma-7ez9.json'; 
  const data = await fetch(url);
  // console.log(data);
	const json = await data.json();
  console.log(json);

  const name = json.response.map((name)=> name.payee_name);
  console.log(name);
  payerName= name

  const money = json.response.map((money)=> money.amount);
  console.log(money);
  payerAmount= money
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
const payerName = [];
const payerAmount = [];

async function makeChart() {
  await getData();

  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: payerName,
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


