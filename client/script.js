/* eslint-disable no-use-before-define */
async function mainEvent() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5dc02365d4mshd9eff5d73eae486p1c6bb0jsnd676be7e93c5',
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
  };
  
  fetch('https://api-nba-v1.p.rapidapi.com/teams/statistics?id=41&season=2021', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  
  const arrayFromJson = await dataGet.json();
  const response_object = arrayFromJson.response;
  console.log(response_object);
  const chart1 = initChart();
  console.log(chart1);
}

function initChart() {
  return new Chart(document.getElementById('myChart'), {
    type: 'bar',
    data: {
      labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
      datasets: [
        {
          label: 'Population (millions)',
          backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'],
          data: [2478, 5267, 734, 784, 433]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
  });
}

const team_players = document.querySelector('.players');
const player_list = Array.from(team_players);
const totalPlayers = player_list.length;

function show_players_team() {
 team_players.classList.remove('player_hidden');
 team_players.classList.add('player_visible');
}
document.querySelector('.btn')
 .addEventListener('click',()=>{
  console.log('clicked vissible for players');
  console.log(team_players);
  show_players_team();
 })

function ShowDiv() {
  document.getElementById("myDiv").style.display = "";
}

document.addEventListener('DOMContentLoaded',async () => mainEvent());