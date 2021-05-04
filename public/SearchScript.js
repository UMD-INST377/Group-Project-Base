// Fetch TeamInfo and PlayerInfo// 
const teamendpoint = '/api/teamCustomfull';
const teamlist = [];

const player_endpoint = '/api/playerCustomInfo';
const playerlist = [];

fetch(teamendpoint)
  .then((blob) => blob.json())
  .then((data) => teamlist.push(...data));


  fetch(player_endpoint)
  .then((blob) => blob.json())
  .then((data) => playerlist.push(...data));



 

function findMatches(wordToMatch, teamlist) {
    return teamlist.filter((team) => {
      const regex = new RegExp("^"+wordToMatch, 'gi');
      return team.team_name.match(regex);
    });
  }


function player_find_matches(wordToMatch, playerlist){

  return playerlist.filter((player) => {
    const regex = new RegExp("^"+wordToMatch, 'gi');
    const name = player.first_name + player.last_name;
    return name.match(regex);
  });
}



function displayMatches() {
    const matchArray = findMatches(this.value, teamlist);
    const html = matchArray.map((team) => {
      const regex = new RegExp(this.value, 'gi');
      const TeamName = team.team_name;
      //.replace(regex, `<span class="hl">${this.value}</span>`);
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

function player_display_matches(){
  console.log("hello");
  const matchArray = player_find_matches(this.value, playerlist);
  console.log(matchArray);
  
    const html = matchArray.map((player) => {
      const regex = new RegExp(this.value, 'gi');
      const player_salary = player.salary;
      const player_shooting_percentage = player.shooting_percentage;
      const player_birthdate = player.birthdate;
      return `
      <li>
      <div class = "PlayerInfo li box is-small has-background-orange is-capitalized>">
        <span> Salary: ${player_salary}</span>
        <br>
        <span> Shooting Percentage: ${player_shooting_percentage}</span>
        <br>
        <span> Birthdate: ${player_birthdate}</span>
        <br>
      </div>
      </li>
      `;
  }).join('');
  player_info2.innerHTML = html;
      


}

const searchInput = document.querySelector('.input');
const teaminfo2 = document.querySelector('.TeamInfo');

const player_search_input = document.querySelector('.player_input')
const player_info2 = document.querySelector('.PlayerInfo');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

console.log(player_search_input);

player_search_input.addEventListener('change', player_display_matches);
player_search_input.addEventListener('keyup', player_display_matches);



