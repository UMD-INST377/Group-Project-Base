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

  const arrayFromJson = await dataGet.json();
  const response_object = arrayFromJson.response;
  console.log(response_object[0]);
  const fgp = parseFloat(response_object[0].fgp);
  const ftp = parseFloat(response_object[0].ftp);
  const tpp = parseFloat(response_object[0].tpp);

  function initChart() {
    const data = {
      labels: [
        'Free Throw Percentage',
        'Free Goal Percentage',
        'Three Point Percentage'
      ],
      datasets: [{
        label: 'Washington Wizards Shot Percentage',
        data: [ftp, fgp, tpp],
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

const team_players = document.querySelector('.players');
const player_list = Array.from(team_players);
const totalPlayers = player_list.length;

function show_players_team() {
  team_players.classList.remove('player_hidden');
  team_players.classList.add('player_visible');
}
document.querySelector('.btn')
  .addEventListener('click', () => {
    console.log('clicked vissible for players');
    console.log(team_players);
    show_players_team();
  });

function ShowDiv() {
  document.getElementById('myDiv').style.display = '';
}
function refresh() {
  
}
document.addEventListener('DOMContentLoaded', async () => mainEvent());