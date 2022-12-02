/* eslint-disable no-new */
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '5632c77d22msh70c6d62094e11eep1c2c19jsn4061b7fbefc3',
    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
  }
};

const ctx = document.getElementById('myChart');

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
  return string.toLowerCase();
}

function fillPlayerInfo(firstname, lastname, id) {
  document.querySelector('.playerBox').innerHTML = `
  <div>
    </div>
    <div class="playerInfo">
      <h1>${capitalizeFirstLetter(
    `${firstname} ${lastname}`
  )}</h3>
      <p>ID: ${(ind = id)}</p>
      ${ind}
    </div>`;
}

function fillNBAInfo (data) {
  document.querySelector('.nbaBox').innerHTML = `
  <div class = "nbaInfo">
      <h1>${info.response[0].team.name}</h3>
  </div>
  <div>
  <img
  src ="${info.response[0].team.logo}"
  alt = "${data.name}"
  />
  </div>
  `;
}

function writeChart(data) {
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['weight'],
      datasets: [{
        label: [`${data.response[0].firstname} ${data.response[0].lastname}`],
        data: [weight],
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

async function getPlayer() {
  try {
    const name = document.querySelector('#namePlayer').value;
    const playerName = lowerCaseName(name);
    const newData = await fetch(`https://api-nba-v1.p.rapidapi.com/players?name=${playerName}`, options);
    const data = await newData.json();
    return data.response;
  } catch (err) {
    console.log('Data Request Failed', err);
  }
}

async function getPlayerData() {
  try {
    const playerData = await fetch(`https://api-nba-v1.p.rapidapi.com/players/statistics?id=${playerID}&season=2021`, options)
    const data = await playerData.json();
    return data.response;
  } catch (err) {
    console.log('Data Request Failed', err);
  }
}

async function mainEvent() {
  let playerList = [];
  let team1List = [];
  let team2List = [];
  document.querySelector('#search').addEventListener('click', (event) => {
    playerList = getPlayer(event.target.value);
    console.log(playerList);
  });

}

document.addEventListener('DOMContentLoaded', async () => mainEvent()); 