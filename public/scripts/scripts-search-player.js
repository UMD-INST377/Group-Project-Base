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
    const player_first_name = player.first_name;
    const player_last_name = player.last_name;
    const player_position = player.position;
    const player_jersey_number = player.jersey_number;
    const college_player_attended = player.player_college;
    const player_nba_debut = player.nba_debut;
    const player_height = player.height;
    const player_weight = player.weight_pounds;
    const age_of_player = player.player_age;
    const player_team_name = player.team_name;
    const player_team_location = player.team_location;
    const player_shooting_percentage = player.shooting_percentage;
    const player_three_point_percentage = player.three_pt_pct;
    const player_salary = player.salary;
    const player_rebounds_per_game = player.rebounds_per_game;
    const player_assists_per_game = player.assists_per_game;
    const player_steals_per_game = player.steals_per_game;
    const player_blocks_per_game = player.blocks_per_game;
    


    const player_birthdate = player.birthdate;
    return `
      <li>
      <div class = "PlayerInfo li box is-small has-background-orange is-capitalized>">
        <span> Name: ${player.first_name + " " + player.last_name}</span>
        <br>
        <span> Birthdate: ${player_birthdate}</span>
        <br>
        <span> Jersey Number: ${player.jersey_number}</span>
        <br>
        <span> Player College: ${player.player_college}</span>
        <br>
        <span> NBA Debut: ${player.nba_debut}</span>
        <br>
        <span> Salary: ${player.salary}</span>
        <br>
        <span> Shooting Percentage: ${player.shooting_percentage}</span>
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