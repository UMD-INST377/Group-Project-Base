/* eslint-disable no-use-before-define */
async function mainEvent() {
  // wizards data
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5dc02365d4mshd9eff5d73eae486p1c6bb0jsnd676be7e93c5',
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
  };
  // hawks data
  const options1 = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5dc02365d4mshd9eff5d73eae486p1c6bb0jsnd676be7e93c5',
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
  };
  // celtics data
  const options2 = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5dc02365d4mshd9eff5d73eae486p1c6bb0jsnd676be7e93c5',
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
  };
  // heat data
  const options3 = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5dc02365d4mshd9eff5d73eae486p1c6bb0jsnd676be7e93c5',
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
  };
  const dataGet = await fetch('https://api-nba-v1.p.rapidapi.com/teams/statistics?id=41&season=2021', options);
  const dataGet1 = await fetch('https://api-nba-v1.p.rapidapi.com/teams/statistics?id=1&season=2021', options1);
  const dataGet2 = await fetch('https://api-nba-v1.p.rapidapi.com/teams/statistics?id=2&season=2021', options2);
  const dataGet3 = await fetch('https://api-nba-v1.p.rapidapi.com/teams/statistics?id=20&season=2021', options3);

  // changing it to json format
  const arrayFromJson = await dataGet.json();
  const arrayFromJson2 = await dataGet1.json();
  const arrayFromJson3 = await dataGet2.json();
  const arrayFromJson4 = await dataGet3.json();

  const wizards_data = arrayFromJson.response;
  const hawks_data = arrayFromJson2.response;
  const celtics_data = arrayFromJson3.response;
  const heat_data = arrayFromJson4.response;

  console.log(wizards_data[0]);
  console.log(hawks_data[0]);
  console.log(celtics_data[0]);
  console.log(heat_data[0]);

  function initChart() {
    const data = {
      labels: [
        'Wizards Total Games Played',
        'Hawks Total Games Played',
        'Celtics Total Games Played',
        'Heat Total Games Played'
      ],
      datasets: [{
        label: '',
        // eslint-disable-next-line max-len
        data: [wizards_data[0].games, hawks_data[0].games, celtics_data[0].games, heat_data[0].games],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4,
        padding: 20
      }]
    };
    const config = {type: 'bar', data: data};

    return new Chart(document.querySelector('#myChart'), config);
  }
  initChart();
}

function ShowDiv() {
  document.getElementById('myDiv').style.display = '';
}

function imageClickedTeams() {
  window.location = 'at_stats.html';
  return window;
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());
