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

  const dataGet = await fetch('https://api-nba-v1.p.rapidapi.com/teams/statistics?id=41&season=2021', options);
  const dataGet1 = await fetch('https://api-nba-v1.p.rapidapi.com/teams/statistics?id=1&season=2021', options1);
  const dataGet2 = await fetch('https://api-nba-v1.p.rapidapi.com/teams/statistics?id=2&season=2021', options2);

  // changing it to json format
  const arrayFromJson = await dataGet.json();
  const arrayFromJson2 = await dataGet1.json();
  const arrayFromJson3 = await dataGet2.json();

  const wizards_data = arrayFromJson.response;
  const hawks_data = arrayFromJson2.response;
  const celtics_data = arrayFromJson3.response;

  console.log(wizards_data[0]);
  console.log(hawks_data[0]);
  console.log(celtics_data[0]);

  // eslint-disable-next-line no-inner-declarations
  function initChart() {
    const data = {
      labels: [
        'Wizards Total Games Played',
        'Hawks Total Games Played',
        'Celtics Total Games Played'
      ],
      datasets: [{
        label: '',
        // eslint-disable-next-line max-len
        data: [wizards_data[0].games, hawks_data[0].games, celtics_data[0].games],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        padding: 20
      }]
    };
    const config = {type: 'polarArea', data: data};

    return new Chart(document.querySelector('#myChart'), config);
  }
  function initChart2() {
    const data = {
      labels: [
        'Wizards Total Points',
        'Hawks Total Points',
        'Celtics Total Points'
      ],
      datasets: [{
        label: '',
        // eslint-disable-next-line max-len
        data: [wizards_data[0].points, hawks_data[0].points, celtics_data[0].points],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        padding: 20
      }]
    };
    const config = {type: 'bar', data: data};

    return new Chart(document.querySelector('#myChart1'), config);
  }
  function initChart3() {
    const data = {
      labels: [
        'Wizards Total Games Played',
        'Hawks Total Games Played',
        'Celtics Total Games Played'
      ],
      datasets: [{
        label: '',
        // eslint-disable-next-line max-len
        data: [wizards_data[0].assists, hawks_data[0].assists, celtics_data[0].assists],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        padding: 20
      }]
    };
    const config = {type: 'bar', data: data};

    return new Chart(document.querySelector('#myChart2'), config);
  }
  function initChart4() {
    const data = {
      labels: [
        'Wizards Total Rebounds',
        'Hawks Total Rebounds',
        'Celtics Total Rebounds'
      ],
      datasets: [{
        label: '',
        // eslint-disable-next-line max-len
        data: [wizards_data[0].totReb, hawks_data[0].totReb, celtics_data[0].totReb],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        padding: 20
      }]
    };
    const config = {type: 'doughnut', data: data};

    return new Chart(document.querySelector('#myChart3'), config);
  }
  initChart();
  initChart2();
  initChart3();
  initChart4();
}
function ShowDiv() {
  document.getElementById('myDiv').style.display = '';
}

function imageClickedTeams() {
  window.location = 'at_stats.html';
  return window;
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());
