// import fetch from 'node-fetch';

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

async function rateSleep(milli_seconds = 2000) {
  return new Promise((done) => setTimeout(() => done(), milli_seconds));
}
// Champions in order from 2015 - 2022
// const champions = ['Warriors', 'Cavaliers', 'Warrios', 'Warrios', 'Raptors', 'Lakers', 'Bucks', 'Warriors'];
const champions = ['Warriors'];

const championsThreePercent = [];

async function teamToID(teamName) {
  // fetching team data with team name
  // grabbing the team ID from the response to use in other funtions'

  const url = `https://api-nba-v1.p.rapidapi.com/teams?search=${teamName}`;
  const data = await fetch(url, options);
  const json = await data.json();
  const res = json.response;
  let teamID;
  res.forEach((item, index) => {
    teamID = item.id;
  });
  return teamID;
}

function getChampionsData() {
  let year = 2015;
  champions.forEach((item, index) => {
    const id = teamToID(item);
    year += 1;
    rateSleep(3000);
    getChampionshipStats(id, year);
  });
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
  getChampionsData();
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());