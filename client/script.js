/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable  no-restricted-syntax */
/* eslint-disable  no-await-in-loop */

// Code for year drop down list
const checkList = document.getElementById('yearsList');
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
// const champions = ['Warriors', 'Cavaliers', 'Warriors', 'Warriors', 'Raptors', 'Lakers', 'Bucks', 'Warriors'];
const champions = ['Warriors', 'Cavaliers'];
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

function getChampionsData() {
  let year = 2015;
  champions.forEach((item, index) => {
    const id = teamToID(item);
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

}

document.addEventListener('DOMContentLoaded', async () => mainEvent());