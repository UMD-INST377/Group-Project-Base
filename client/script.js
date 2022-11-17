/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable  no-restricted-syntax */
/* eslint-disable  no-await-in-loop */
/* eskint-disable no-new */
// Code for year drop down list
const checkList = document.getElementById('list1');
checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
  if (checkList.classList.contains('visible')) { checkList.classList.remove('visible'); } else { checkList.classList.add('visible'); }
};

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1743d88febmsh05b21d50c3a6e02p118d8djsnb38c4acc127e',
    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
  }
};

// Champions in order from 2015 - 2022
const champions = ['Warriors', 'Cavaliers', 'Warriors', 'Warriors', 'Raptors', 'Lakers', 'Bucks', 'Warriors'];
// const champions = ['Warriors', 'Cavaliers'];
let year = 2015;
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
  for (const team of champions) {
    console.log(team);
    const id = await teamToID(team);
    await getChampionshipStats(id, year);
    year += 1;
  }
}

async function getAnyTeam(teamID, year) {
  // api to get a team by its name and year
  // to see stats of the team from that year
  // Example Wizards 2022
  // const url = `https://api-nba-v1.p.rapidapi.com/teams/statistics?id=${teamID}&season=${year}`;
  // const data = await fetch(url, options);
  // const json = await data.json();
}

function makeChart() {
  const ctx = document.getElementById('myChart');

  // eslint-disable-next-line no-new
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: champions,
      datasets: [{
        label: 'Past Champ 3 Point %',
        data: [40, 32, 18, 55, 10, 8, 77, 13],
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
}

async function mainEvent() {
  // await getChampionsData();

  const total3Perc = champ3Perc.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const avg3Perc = total3Perc / champ3Perc.length;

  const total3Made = champ3Made.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const avg3Made = total3Made / champ3Made.length;

  const total3Att = champ3Atts.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const avg3Att = total3Att / champ3Atts.length;

  console.log(`total 3% is ${total3Perc} total 3 made is ${total3Made}, total 3 att is ${total3Att}`);
  console.log(`avg 3%: ${avg3Perc}, avg 3 made: ${avg3Made}, avg 3 attempted: ${avg3Att}`);
  console.log(champ3Perc);
  makeChart();
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());