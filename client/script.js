/* eslint-disable no-use-before-define */
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

const team_players = document.querySelectorAll('player');
const player_list = Array.from(team_players);
const totalPlayers = player_list.length;

function initChart(chart) {
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
  return console.log(new Chart(
    chart,
    config
  ));


function show_players_team() {
  player_list.forEach((player) => {
    player.classList.add('visible');
  });
  console.log
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());