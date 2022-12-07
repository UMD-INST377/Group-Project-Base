// eslint-disable-next-line no-unused-vars
async function mainEvent() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5dc02365d4mshd9eff5d73eae486p1c6bb0jsnd676be7e93c5',
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
  };
  const dataGet = await fetch(
    'https://api-nba-v1.p.rapidapi.com/players?team=41&season=2021',
    options
  );
  const arrayFromJson = await dataGet.json();
  const response_object = arrayFromJson.response;
  console.log('hello');
  document.addEventListener('DOMContentLoaded', async () => mainEvent());
}

// function initChart() {
//   return new Chart(document.getElementById('myChart'), {
//     type: 'bar',
//     data: {
//       labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
//       datasets: [
//         {
//           label: 'Population (millions)',
//           backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'],
//           data: [2478, 5267, 734, 784, 433]
//         }
//       ]
//     },
//     options: {
//       legend: { display: false },
//       title: {
//         display: true,
//         text: 'Predicted world population (millions) in 2050'
//       }
//     }
//   });
// }
