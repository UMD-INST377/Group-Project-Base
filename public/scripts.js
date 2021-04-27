async function playerSpotlight() {
  console.log('enter playerSpotlight');

  // const variable declarations
  const playerEndpoint = '/api/player_info';
  const request = await fetch(playerEndpoint);
  const results = document.querySelector('.player');

  // check successful request
  if (request.ok) {
    console.log('playerEndpoint fetched');
  } else {
    alert(`HTTP-Error: ${request.status}`);
  }

  // successful request, create Object for data
  const players = await request.json();
  console.log('players: ', players);

  // select random player
  const random = getRandomIntInclusive(0, players.length - 1);
  const player = players[random];

  const newPlayer = document.createElement('div');
  newPlayer.innerHTML = `<h4 class="title is-5 has-text-centered">${player.first_name} ${player.last_name}</h4>
    <p class="subtitle is-7 has-text-centered">${player.position} | #${player.jersey_number}</p>
    <ul>
        <li>College: ${player.player_college}</li>
        <li>NBA Debut: ${player.nba_debut}</li>
    </ul>`;

  results.append(newPlayer);
}

async function teamComparison() {
  console.log('enter teamComparison');

  // const variable declarations
  const teamEndpoint = '/api/teamCustom';
  const request = await fetch(teamEndpoint);
  const results = document.querySelector('.team-comp');

  // check successful request
  if (request.ok) {
    console.log('teamEndpoint fetched');
  } else {
    alert(`HTTP-Error: ${request.status}`);
  }

  // successful request, create Object for data
  const teams = await request.json();
  console.log('teams: ', teams);

  // select two random teams
  const ranTeam1 = getRandomIntInclusive(0, teams.length - 1);
  let ranTeam2 = getRandomIntInclusive(0, teams.length - 1);
  while (ranTeam2 === ranTeam1) {
    ranTeam2 = getRandomIntInclusive(0, teams.length - 1);
  }

  const team1 = teams[ranTeam1];
  const team2 = teams[ranTeam2];
  console.log('Team 1:', team1);
  console.log('Team 2:', team2);

  const team1Elem = document.createElement('div');
  team1Elem.classList.add('column');
  team1Elem.classList.add('team1');
  team1Elem.classList.add('is-5');

  team1Elem.innerHTML = `<h4 class="title is-5 has-text-centered">${team1.team_location} ${team1.team_name}</h4>
    <p class="subtitle is-7 has-text-centered">Year Founded: ${team1.year_founded} | ${team1.stadium_name}</p>
    <ul>
        <li>Head Coach: ${team1.head_coach}</li>
        <li>General Manager: ${team1.general_manager}</li>
    </ul>`;

  const team2Elem = document.createElement('div');
  team2Elem.classList.add('column');
  team2Elem.classList.add('team2');
  team2Elem.classList.add('is-5');
  team2Elem.classList.add('is-offset-2');

  team2Elem.innerHTML = `<h4 class="title is-5 has-text-centered">${team2.team_location} ${team2.team_name}</h4>
  <p class="subtitle is-7 has-text-centered">Year Founded: ${team2.year_founded} | ${team2.stadium_name}</p>
  <ul>
      <li>Head Coach: ${team2.head_coach}</li>
      <li>General Manager: ${team2.general_manager}</li>
  </ul>`;

  results.append(team1Elem);
  results.append(team2Elem);
}

// random int function for whole meal selection
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function windowActions() {
  await playerSpotlight();
  await teamComparison();
}

window.onload = windowActions;