/* eslint-disable no-use-before-define */
async function mainEvent() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5dc02365d4mshd9eff5d73eae486p1c6bb0jsnd676be7e93c5',
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
  };
  const dataGet = await fetch('https://api-nba-v1.p.rapidapi.com/teams/statistics?id=41&season=2021', options);
  const options1 = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5dc02365d4mshd9eff5d73eae486p1c6bb0jsnd676be7e93c5',
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
  };
  const dataGet1 = await fetch('https://api-nba-v1.p.rapidapi.com/teams/statistics?id=1&season=2021', options1);

  // wizards data
  const arrayFromJson = await dataGet.json();
  const response_object = arrayFromJson.response;
  // hawks data
  const arrayFromJson2 = await dataGet1.json();
  const response_object1 = arrayFromJson2.response;
  // loaded the wizards data and it shows on console
  console.log(response_object[0]);
  // loaded the hawks data and it shows on console
  console.log(response_object1[0]);

  // changing the wizards data that are strings into float
  const fgp = parseFloat(response_object[0].fgp);
  const ftp = parseFloat(response_object[0].ftp);
  const tpp = parseFloat(response_object[0].tpp);

  // changing the hawks data that are strings into float
  const fgp1 = parseFloat(response_object1[0].fgp);
  const ftp1 = parseFloat(response_object1[0].ftp);
  const tpp1 = parseFloat(response_object1[0].tpp);

  function initChart() {
    const data = {
      labels: [
        'Free Throw Percentage',
        'Free Goal Percentage',
        'Three Point Percentage'
      ],
      datasets: [{
        label: 'ATL Hawks Shot Percentage',
        data: [ftp1, fgp1, tpp1],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4,
        padding: 20
      }]
    };
    const config = {type: 'doughnut', data: data};

    return new Chart(document.querySelector('#myChart'), config);
  }
  initChart();
}

function ShowDiv() {
  document.getElementById('myDiv').style.display = '';
}
function redirection() {

}
function imageClicked() {
  window.location = 'wizard_stats.html';
  return window;
}
function ImageClickedHawks() {
  window.location = 'hawks_stats.html';
  return window;
}
document.addEventListener('DOMContentLoaded', async () => mainEvent());