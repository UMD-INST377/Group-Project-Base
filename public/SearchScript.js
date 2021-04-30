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
        <span class="name" is-capitalized>Name: ${TeamName}</span>
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



const searchInput = document.querySelector('.input');
const teaminfo2 = document.querySelector('.TeamInfo');
const formelement = document.querySelector('#formelement');
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);


formelement.addEventListener('submit', (events) => {
    events.preventDefault();
    console.log('submit activated', search.value);
    const filtered = data.filter((record) => record.team_name.includes(search.value));
    const topfive = filtered.slice(0, 5);
    // add code for filtering top 5

    if (topfive.length < 1) {
      replyMessage.classList.add('box');
      replyMessage.innerText = 'No matches found';
      return
    }
});
};