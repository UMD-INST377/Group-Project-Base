/* eslint-disable no-sequences */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable  no-restricted-syntax */
/* eslint-disable  no-await-in-loop */
/* eskint-disable no-new */

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1743d88febmsh05b21d50c3a6e02p118d8djsnb38c4acc127e',
    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
  }
};

// Champions in order from 2015 - 2022
// const champions = ['Warriors', 'Cavaliers', 'Warriors', 'Warriors', 'Raptors', 'Lakers', 'Bucks', 'Warriors'];
// Champions in order from 2018 - 2022
const champions = ['Warriors', 'Raptors', 'Lakers', 'Bucks', 'Warriors'];
// list of teams for development, to reduce request amount
// const champions = ['Warriors', 'Cavaliers'];
let year = 2018;
// Data for the charts
const champ3Perc = [];
const champ3Atts = [];
const champ3Made = [];

async function teamToID(teamName) {
  // fetching team data with team name
  // grabbing the team ID from the response to use in other funtions'

  const url = `https://api-nba-v1.p.rapidapi.com/teams?search=${teamName}`;
  const data = await fetch(url, options);
  const json = await data.json();
  const res = json.response;
  let teamID = 0;
  res.forEach((item, index) => {
    teamID = item.id;
  });
  console.log(` ${teamName}, ${teamID}`);
  return teamID;
}
async function getChampionshipStats(teamID, season) {
  // api to get a team by its name and year
  // to see stats of the team from that year
  // Example Wizards 2022
  console.log(`${teamID}, ${season}`);
  const url = `https://api-nba-v1.p.rapidapi.com/teams/statistics?id=${teamID}&season=${season}`;
  const data = await fetch(url, options);
  const json = await data.json();
  const res = json.response;

  res.forEach((item, index) => {
    const threePercentage = parseFloat(item.tpp);
    const threeMade = item.tpm;
    const threeAttempted = item.tpa;
    console.log(`${item.id}, 3pt% ${threePercentage}, 3's made ${threeMade}, 3s attempted ${threeAttempted}`);
    champ3Perc.push(threePercentage);
    champ3Atts.push(threeAttempted);
    champ3Made.push(threeMade);
  });
}

async function getChampionsData() {
  // main triggger for API calls.
  // Loop through list of champion teams, get each team ID and team Stats
  for (const team of champions) {
    console.log(team);
    const id = await teamToID(team);
    await getChampionshipStats(id, year);
    year += 1;
  }
}

function makeChart() {
  const ctx = document.getElementById('myChart');

  // eslint-disable-next-line no-new
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: champions,
      datasets: [{
        label: 'Past Champ 3 Point %',
        data: champ3Perc,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  return myChart;
}

async function mainEvent() {
// 100 request per day, 10 request per minute
  await getChampionsData();

  const total3Perc = champ3Perc.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const avg3Perc = total3Perc / champ3Perc.length;

  const total3Made = champ3Made.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const avg3Made = total3Made / champ3Made.length;

  const total3Att = champ3Atts.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const avg3Att = total3Att / champ3Atts.length;

  console.log(`total 3% is ${total3Perc} total 3 made is ${total3Made}, total 3 att is ${total3Att}`);
  console.log(`avg 3%: ${avg3Perc}, avg 3 made: ${avg3Made}, avg 3 attempted: ${avg3Att}`);
  console.log(champ3Perc);
  
  let myChart = makeChart();
  const refreshBtn = document.getElementById('refresh-button');
  refreshBtn.addEventListener('click', (submitEvent) => {
    myChart.destroy();
    myChart = makeChart();
  });
  document.getElementById('three-avgs').textContent = `average 3 percent: ${avg3Perc}, average 3s made: ${avg3Made}, and average 3s attempted: ${avg3Att}`;
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());
