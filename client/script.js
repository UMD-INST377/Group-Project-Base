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
  weight1 = notNull(response_object);
  const ctx = document.querySelectorAll('#myChart');
  initChart(ctx);
  document.addEventListener('DOMContentLoaded', async () => mainEvent());
}

const team_players = document.querySelectorAll('player');
const player_list = Array.from(team_players);
const totalPlayers = player_list.length;

function show_players_team() {
  player_list.forEach((player) => {
    player.classList.add('visible');
  });
  console.log;
}

function initChart(chart) {
  const labels = ['A', 'B', 'C', 'D', 'E', 'F'
  ];
  const data = {
    labels: labels,
    datasets: [{
      label: 'Test Chart',
      backgroundColor: 'rgb(255,99,132)',
      borderColors: 'rgb(255,99,132)',
      data: [1, 2, 3, 4, 5, 6]
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
