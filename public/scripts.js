// random int function for whole meal selection
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function playerSpotlight() {
  console.log('enter playerSpotlight');

  // const variable declarations
  const playerEndpoint = '/api/playerCustomInfo';
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
    <p class="subtitle is-7 has-text-centered">${player.team_location} ${player.team_name} |
    ${player.position} | #${player.jersey_number}</p>
    <ul>
        <li>${player.height}  - ${player.weight_pounds} lbs - ${player.player_age} years old</li>

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

function carouselSlider() {
  /* Buttons */
  const nextBtn = document.querySelector('#next');
  const prevBtn = document.querySelector('#prev');

  /* indexing */
  let leftIdx = 0;
  let midIdx = 1;
  let rightIdx = 2;

  /* Build images array */
  const tables = document.querySelectorAll('.carousel-table');

  console.log(tables);

  // previous button click functionality
  prevBtn.onclick = (event) => {
    event.preventDefault();

    // remove current images class, add hidden to image that is leaving
    tables[leftIdx].classList.remove('left');
    tables[midIdx].classList.remove('middle');
    tables[rightIdx].classList.remove('right');
    tables[rightIdx].classList.add('hidden');

    // update indexes
    if (leftIdx === 0) {
      rightIdx = midIdx;
      midIdx = leftIdx;
      leftIdx = tables.length - 1;
    } else {
      rightIdx = midIdx;
      midIdx = leftIdx;
      leftIdx -= 1;
    }

    // add appropriate class based on updated indexes, remove
    // hidden from image entering carousel and add appropriate class
    tables[rightIdx].classList.add('right');
    tables[midIdx].classList.add('middle');
    tables[leftIdx].classList.remove('hidden');
    tables[leftIdx].classList.add('left');
  };

  // next button click functionality
  nextBtn.onclick = (event) => {
    event.preventDefault();

    // remove current images class, add hidden to image that is leaving
    tables[leftIdx].classList.remove('left');
    tables[midIdx].classList.remove('middle');
    tables[rightIdx].classList.remove('right');
    tables[leftIdx].classList.add('hidden');

    // update indexes
    if (rightIdx === tables.length - 1) {
      leftIdx = midIdx;
      midIdx = rightIdx;
      rightIdx = 0;
    } else {
      leftIdx = midIdx;
      midIdx = rightIdx;
      rightIdx += 1;
    }

    // add appropriate class based on updated indexes, remove
    // hidden from image entering carousel and add appropriate class
    tables[leftIdx].classList.add('left');
    tables[midIdx].classList.add('middle');
    tables[rightIdx].classList.remove('hidden');
    tables[rightIdx].classList.add('right');
  };
}

async function shootingPctData() {
  console.log('enter shootingPctData');

  // const variable declarations
  const shtPctEndpoint = '/api/shooting-pct-custom';
  const request = await fetch(shtPctEndpoint);
  const results = document.querySelector('.shootPctResults');

  // check successful request
  if (request.ok) {
    console.log('endpoint fetched');
  } else {
    alert(`HTTP-Error: ${request.status}`);
  }

  // successful request, create Object for data
  const shootPcts = await request.json();
  console.log('shootPcts: ', shootPcts);

  let i = 0;
  while (i < 5) {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${i + 1}</td>
          <td>${shootPcts[i].first_name} ${shootPcts[i].last_name}</td>
          <td>${shootPcts[i].shooting_percentage}</td>
    `;

    results.append(newRow);
    i += 1;
  }
}

async function threePtPctData() {
  console.log('enter threePtPctData');

  // const variable declarations
  const threePtPctEndpoint = '/api/three-pt-pct-custom';
  const request = await fetch(threePtPctEndpoint);
  const results = document.querySelector('.threePtPctResults');

  // check successful request
  if (request.ok) {
    console.log('endpoint fetched');
  } else {
    alert(`HTTP-Error: ${request.status}`);
  }

  // successful request, create Object for data
  const threePcts = await request.json();
  console.log('threePcts: ', threePcts);

  let i = 0;
  while (i < 5) {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${i + 1}</td>
          <td>${threePcts[i].first_name} ${threePcts[i].last_name}</td>
          <td>${threePcts[i].three_pt_pct}</td>
    `;

    results.append(newRow);
    i += 1;
  }
}

async function assistsData() {
  console.log('enter reboundsData');

  // const variable declarations
  const assistsEndpoint = '/api/assists-custom';
  const request = await fetch(assistsEndpoint);
  const results = document.querySelector('.assistsResults');

  // check successful request
  if (request.ok) {
    console.log('endpoint fetched');
  } else {
    alert(`HTTP-Error: ${request.status}`);
  }

  // successful request, create Object for data
  const assistsPerGameData = await request.json();
  console.log('assistsPerGameData: ', assistsPerGameData);

  let i = 0;
  while (i < 5) {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${i + 1}</td>
          <td>${assistsPerGameData[i].first_name} ${assistsPerGameData[i].last_name}</td>
          <td>${assistsPerGameData[i].assists_per_game}</td>
    `;

    results.append(newRow);
    i += 1;
  }
}

async function reboundsData() {
  console.log('enter reboundsData');

  // const variable declarations
  const reboundsEndpoint = '/api/rebounds-custom';
  const request = await fetch(reboundsEndpoint);
  const results = document.querySelector('.reboundsResults');

  // check successful request
  if (request.ok) {
    console.log('endpoint fetched');
  } else {
    alert(`HTTP-Error: ${request.status}`);
  }

  // successful request, create Object for data
  const reboundsPerGameData = await request.json();
  console.log('reboundsPerGameData: ', reboundsPerGameData);

  let i = 0;
  while (i < 5) {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${i + 1}</td>
          <td>${reboundsPerGameData[i].first_name} ${reboundsPerGameData[i].last_name}</td>
          <td>${reboundsPerGameData[i].rebounds_per_game}</td>
    `;

    results.append(newRow);
    i += 1;
  }
}

async function stealsData() {
  console.log('enter stealsData');

  // const variable declarations
  const stealsEndpoint = '/api/steals-custom';
  const request = await fetch(stealsEndpoint);
  const results = document.querySelector('.stealsResults');

  // check successful request
  if (request.ok) {
    console.log('endpoint fetched');
  } else {
    alert(`HTTP-Error: ${request.status}`);
  }

  // successful request, create Object for data
  const stealsPerGameData = await request.json();
  console.log('stealsPerGameData: ', stealsPerGameData);

  let i = 0;
  while (i < 5) {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${i + 1}</td>
          <td>${stealsPerGameData[i].first_name} ${stealsPerGameData[i].last_name}</td>
          <td>${stealsPerGameData[i].steals_per_game}</td>
    `;

    results.append(newRow);
    i += 1;
  }
}

async function blocksData() {
  console.log('enter blocksData');

  // const variable declarations
  const blocksEndpoint = '/api/blocks-custom';
  const request = await fetch(blocksEndpoint);
  const results = document.querySelector('.blocksResults');

  // check successful request
  if (request.ok) {
    console.log('endpoint fetched');
  } else {
    alert(`HTTP-Error: ${request.status}`);
  }

  // successful request, create Object for data
  const blocksPerGameData = await request.json();
  console.log('blocksPerGameData: ', blocksPerGameData);

  let i = 0;
  while (i < 5) {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${i + 1}</td>
          <td>${blocksPerGameData[i].first_name} ${blocksPerGameData[i].last_name}</td>
          <td>${blocksPerGameData[i].blocks_per_game}</td>
    `;

    results.append(newRow);
    i += 1;
  }
}

async function windowActions() {
  await playerSpotlight();
  await teamComparison();
  await shootingPctData();
  await threePtPctData();
  await assistsData();
  await reboundsData();
  await stealsData();
  await blocksData();
  carouselSlider();
}

window.onload = windowActions;