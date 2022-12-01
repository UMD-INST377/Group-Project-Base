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
  console.log(response_object);
  weight1 = notNull(response_object);
  console.log(weight1);
  const chartTarget = document.querySelector('#myChart');
  initChart(chartTarget);
}

function notNull(array) {
  return array.map((item) => {
    if (item.weight.pounds !== null) {
      return item.weight.pounds;
    }
  });
}
function initChart(chart) {
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June'
  ];

  const data = {
    label: labels,
    dataset: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255,99,132)',
      borderColor: 'rgb(255,99,132)',
      data: [0, 10, 5, 2, 20, 30, 45]
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
document.addEventListener('DOMContentLoaded', async () => mainEvent());
