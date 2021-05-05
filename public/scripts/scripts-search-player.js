// Fetch PlayerInfo//
const playerInfoEndpoint = '/api/playerCustomInfo';
const playerlist = [];

const playerStatsEndpoint = '/api/playerCustomStats';
const playerstats = [];

const playerSearchInput = document.querySelector('.player_input');
const playerInfo2 = document.querySelector('.PlayerInfo');

fetch(playerInfoEndpoint)
  .then((blob) => blob.json())
  .then((data) => playerlist.push(...data));

fetch(playerStatsEndpoint)
  .then((blob) => blob.json())
  .then((data) => playerstats.push(...data));

function playerFindMatches(wordToMatch, playerlist) {
  return playerlist.filter((player) => {
    const regex = new RegExp(`^${wordToMatch}`, 'gi');
    const name = player.first_name + player.last_name;
    console.log('name: ', name);
    return name.match(regex);
  });
}

function playerDisplayMatches() {
  console.log('entered playerDisplayMatches');
  const matchArray = playerFindMatches(this.value, playerlist);
  console.log('matchArray: ', matchArray);

  const html = matchArray.map((player) => {
    console.log('player: ', player);
    const regex = new RegExp(this.value, 'gi');
    return `
      <li>
      <div class="PlayerInfo box">
        <span>Name: ${player.first_name} ${player.last_name}</span>
        <br>
        <span>Birthdate: ${player.birthdate}</span>
        <br>
        <span>Team: ${player.team_location} ${player.team_name}</span>
        <br>
        <span>Salary: ${player.salary}</span>
        <br>
      </div>
      </li>
      `;
  }).join('');
  playerInfo2.innerHTML = html;
}

console.log(playerSearchInput);

playerSearchInput.addEventListener('change', playerDisplayMatches);
playerSearchInput.addEventListener('keyup', playerDisplayMatches);