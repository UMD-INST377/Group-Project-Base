// Fetch TeamInfo and PlayerInfo//
const teamendpoint = '/api/teamCustomfull';
const teamlist = [];

const playerEndpoint = '/api/playerCustomInfo';
const playerlist = [];

const searchInput = document.querySelector('.input');
const teaminfo2 = document.querySelector('.TeamInfo');

const playerSearchInput = document.querySelector('.player_input');
const playerInfo2 = document.querySelector('.PlayerInfo');

fetch(teamendpoint)
  .then((blob) => blob.json())
  .then((data) => teamlist.push(...data));

fetch(playerEndpoint)
  .then((blob) => blob.json())
  .then((data) => playerlist.push(...data));

function findMatches(wordToMatch, teamlist) {
  return teamlist.filter((team) => {
    const regex = new RegExp(`^${wordToMatch}`, 'gi');
    return team.team_name.match(regex);
  });
}

function playerFindMatches(wordToMatch, playerlist) {
  return playerlist.filter((player) => {
    const regex = new RegExp(`^${wordToMatch}`, 'gi');
    const name = player.first_name + player.last_name;
    return name.match(regex);
  });
}

function displayMatches() {
  const matchArray = findMatches(this.value, teamlist);
  const html = matchArray.map((team) => {
    const regex = new RegExp(this.value, 'gi');
    const TeamName = team.team_name;
    // .replace(regex, `<span class="hl">${this.value}</span>`);
    const teamlocation = team.team_location;
    const teamfounded = team.year_founded;
    const stadium = team.stadium_name;
    const playeramount = team.player_amount;
    const ownername = team.owner;
    const headcoach = team.head_coach;
    const genmanager = team.general_manager;
    const headphysician = team.head_physician;
    const tceo = team.ceo;
    const tcfo = team.cfo;
    return `
      <li>
      <div class = "TeamInfo li box is-small has-background-orange is-capitalized>">
        <span class="name"> Name: ${TeamName}</span>
        <br>
        <span class="Year">Year of Team Foundation: ${teamfounded}</span>
        <br>
        <span class="Stadium">Home Stadium :${stadium}</span>
        <br>
        <span class="Location">Home City: ${teamlocation}</span>
        <br>
        <span class="Players">Number of Total Players: ${playeramount}</span>
        <br>
        <span class="Owner">Owner: ${ownername}</span>
        <br>
        <span class="Head Coach">Head Coach: ${headcoach}</span>
        <br>
        <span class="General Manager">General Manager: ${genmanager}</span>
        <br>
        <span class="Head Physician">Head Physician: ${headphysician}</span>
        <br>
        <span class="CEO">Team CEO: ${tceo}</span>
        <br>
        <span class="CFO">Team CFO: ${tcfo}</span>
      </div>
      </li>
    `;
  }).join('');
  teaminfo2.innerHTML = html;
}

function playerDisplayMatches() {
  console.log('hello');
  const matchArray = playerFindMatches(this.value, playerlist);
  console.log(matchArray);

  const html = matchArray.map((player) => {
    const regex = new RegExp(this.value, 'gi');
    const playerSalary = player.salary;
    const playerShootingPercentage = player.shooting_percentage;
    const playerBirthdate = player.birthdate;
    return `
      <li>
      <div class = "PlayerInfo li box is-small has-background-orange is-capitalized>">
        <span> Salary: ${playerSalary}</span>
        <br>
        <span> Shooting Percentage: ${playerShootingPercentage}</span>
        <br>
        <span> Birthdate: ${playerBirthdate}</span>
        <br>
      </div>
      </li>
      `;
  }).join('');
  playerInfo2.innerHTML = html;
}

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

console.log(playerSearchInput);

playerSearchInput.addEventListener('change', playerDisplayMatches);
playerSearchInput.addEventListener('keyup', playerDisplayMatches);
