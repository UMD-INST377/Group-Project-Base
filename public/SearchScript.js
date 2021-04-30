// Fetch TeamInfo // 
const teamendpoint = '/api/teamCustomfull';
const teamlist = [];

fetch(teamendpoint)
  .then((blob) => blob.json())
  .then((data) => teamlist.push(...data));

function findMatches(wordToMatch, teamlist) {
    return teamlist.filter((team) => {
      const regex = new RegExp(wordToMatch, 'gi');
      return team.team_name.match(regex);
    });
  }



function displayMatches() {
    const matchArray = findMatches(this.value, teamlist);
    const html = matchArray.map((team) => {
      const regex = new RegExp(this.value, 'gi');
      const TeamName = team.team_name.replace(regex, `<span class="hl">${this.value}</span>`);
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
      <div class = "TeamInfo li box is-small has-background-orange">
        <span class="name">"Test"${TeamName}</span>
        <br>
        <span class="Year">${teamfounded}</span>
        <br>
        <span class="Stadium">${stadium}</span>
        <br>
        <span class="Location">${teamlocation}</span>
        <br>
        <span class="Players">${playeramount}</span>
        <br>
        <span class="Owner">${ownername}</span>
        <br>
        <span class="Head Coach">${headcoach}</span>
        <br>
        <span class="General Manager">${genmanager}</span>
        <br>
        <span class="Head Physician">${headphysician}</span>
        <br>
        <span class="CEO">${tceo}</span>
        <br>
        <span class="CFO">${tcfo}</span>
      </div>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.input');
const suggestions = document.querySelector('.TeamInfo');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);