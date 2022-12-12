/* eslint-disable no-use-before-define */
const query_team_data = document.querySelector('.team_select');
async function mainEvent() {
  // get data data
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5dc02365d4mshd9eff5d73eae486p1c6bb0jsnd676be7e93c5',
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
  };

  const dataGet = await fetch('https://api-nba-v1.p.rapidapi.com/games?team=41&season=2021', options);
  const dataGet1 = await fetch('https://api-nba-v1.p.rapidapi.com/games?team=1&season=2021', options);
  const dataGet2 = await fetch('https://api-nba-v1.p.rapidapi.com/games?team=2&season=2021', options);
  // changing it to json format
  const arrayFromJson = await dataGet.json();
  const arrayFromJson2 = await dataGet1.json();
  const arrayFromJson3 = await dataGet2.json();

  const wizards_data = arrayFromJson.response;
  const hawks_data = arrayFromJson2.response;
  const celtics_data = arrayFromJson3.response;

  console.log(wizards_data);
  console.log(hawks_data);
  console.log(celtics_data);

  const wizards_result = count_wins(wizards_data);
  const wizards_points = get_total_points(wizards_data);
  const hawks_result = count_wins(hawks_data);
  const hawks_points = get_total_points(hawks_data);
  const celtics_result = count_wins(celtics_data);
  const celtics_points = get_total_points(celtics_data);

  const win_lost = initChart2();
  const points_graph = initChart3();

  query_team_data.addEventListener('click', (event) => {
    removeData(win_lost);
    removeData(points_graph);
    const team_id = event.target.id;

    console.log(team_id);

    if (team_id === '41') {
      console.log(team_id);
      addData(win_lost, ['Wins', 'Loss'], [wizards_result[0], wizards_result[1]]);
      addData(points_graph, wizards_points[0], wizards_points[1]);
    } else if (team_id === '1') {
      console.log(team_id);
      addData(win_lost, ['Wins', 'Loss'], [hawks_result[0], hawks_result[1]]);
      addData(points_graph, hawks_points[0], hawks_points[1]);
    } else if (team_id === '2') {
      console.log(team_id);
      addData(win_lost, ['Wins', 'Loss'], [celtics_result[0], celtics_result[1]]);
      addData(points_graph, celtics_points[0], celtics_points[1]);
    } else {
      console.log('This is not working');
    }
  });

  function count_wins(team_data) {
    let team_home_wins = 0;
    let team_home_loss = 0;
    /* console.log(typeof Object.values(wizards_data));
    const new_wizarddata = Object.values(wizards_data); */
    team_data.forEach((item) => {
      team_home_wins += item.scores.home.series.win;
      team_home_loss += item.scores.home.series.loss;
    });
    return [team_home_wins, team_home_loss];
  }

  function get_total_points(team_data) {
    const team_points = team_data.map((item) => item.scores.home.points);
    const number_of_games = team_data.map((item, index) => index);
    return [number_of_games, team_points];
  }

  function initChart2() {
    const data = {
      labels: [
        'Wins',
        'Loss'
      ],
      datasets: [{
        label: '',
        // eslint-disable-next-line max-len
        data: [wizards_result[0], wizards_result[1]],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)'
        ],
        padding: 20
      }]
    };
    const config = {type: 'bar', data: data};

    return new Chart(document.querySelector('#myChart1'), config);
  }

  function initChart3() {
    const data = {
      labels:
        wizards_points[0],
      datasets: [{
        label: 'Points',
        // eslint-disable-next-line max-len
        data: wizards_points[1],
        backgroundColor: [
          'rgb(255, 99, 132)'
        ],
        padding: 20
      }]
    };
    const config = {type: 'line', data: data};

    return new Chart(document.querySelector('#myChart2'), config);
  }
}
function ShowDiv() {
  document.getElementById('myDiv').style.display = '';
}

function imageClickedTeams() {
  window.location = 'at_stats.html';
  return window;
}

// function botton_clicker(team_id){
//   removeData(win_lost);
//   removeData(points_graph);

//   if(team_id === 41 ){
//     addData(win_lost,['Wins','Loss'], [wizards_result[0],wizards_result[1]])
//     addData(points_graph,wizards_points[0], wizards_points[1])
//   }
//   else if(team_id === 1){
//     addData(win_lost,['Wins','Loss'], [hawks_result[0],hawks_result[1]])
//     addData(points_graph,hawks_points[0], hawks_points[1])
//   }else{
//     addData(win_lost,['Wins','Loss'], [celtics_result[0],celtics_result[1]])
//     addData(points_graph,celtics_points[0], celtics_points[1])
//   }
// }

function addData(chart, label, data) {
  chart.data.labels = label;
  chart.data.datasets[0].data = data;
  chart.update();
}

function removeData(chart) {
  chart.data.labels = [];
  chart.data.datasets[0].data = [];
  chart.update();
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());
