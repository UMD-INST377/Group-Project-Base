// Fetch PlayerInfo//
const playerEndpoint = '/api/playerCustomInfo';
const playerlist = [];

const playerSearchInput = document.querySelector('.player_input');
const playerInfo2 = document.querySelector('.PlayerInfo');

fetch(playerEndpoint)
  .then((blob) => blob.json())
  .then((data) => playerlist.push(...data));

function playerFindMatches(wordToMatch, playerlist) {
  return playerlist.filter((player) => {
    const regex = new RegExp(`^${wordToMatch}`, 'gi');
    const name = player.first_name + player.last_name;
    return name.match(regex);
  });
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

console.log(playerSearchInput);

playerSearchInput.addEventListener('change', playerDisplayMatches);
playerSearchInput.addEventListener('keyup', playerDisplayMatches);